package com.kh.totalproject.service;

import com.kh.totalproject.dto.MailBody;
import com.kh.totalproject.dto.request.LoginRequest;
import com.kh.totalproject.dto.request.UserRequest;
import com.kh.totalproject.dto.response.TokenResponse;
import com.kh.totalproject.dto.response.UserResponse;
import com.kh.totalproject.entity.OtpVerification;
import com.kh.totalproject.entity.OtpVerificationForJoin;
import com.kh.totalproject.entity.Token;
import com.kh.totalproject.entity.User;
import com.kh.totalproject.exception.DuplicateResourceException;
import com.kh.totalproject.exception.InvalidValueException;
import com.kh.totalproject.repository.EmailValidationForJoinRepository;
import com.kh.totalproject.repository.EmailValidationRepository;
import com.kh.totalproject.repository.TokenRepository;
import com.kh.totalproject.repository.UserRepository;
import com.kh.totalproject.util.JwtUtil;
import com.kh.totalproject.util.SecurityUtil;
import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityNotFoundException;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.Date;
import java.util.Optional;
import java.util.Random;

@Slf4j
@RequiredArgsConstructor
@Service
@Transactional
public class AuthService {

    private final UserRepository userRepository;
    private final JwtUtil jwtUtil;
    private final AuthenticationManagerBuilder managerBuilder;
    private final PasswordEncoder passwordEncoder;
    private final TokenRepository tokenRepository;
    private final EmailValidationRepository emailValidationRepository;
    private final EmailValidationForJoinRepository emailValidationForJoinRepository;
    private final EmailService emailService;
    private final EntityManager entityManager;

    // Login 시 토큰 반환
    public TokenResponse logIn(LoginRequest loginRequest, HttpServletResponse response) {
        User user = userRepository.findByUserId(loginRequest.getUserId())
                .orElseThrow(() -> new InvalidValueException("해당 유저를 찾을 수 없습니다."));
        // 만약 기존에 토큰이 있을시에 DB 에서 Refresh 토큰 삭제
        tokenRepository.deleteByUserKey(user.getUserKey());
        // 토큰을 제작, 발급을 해주는 로직
        if (passwordEncoder.matches(loginRequest.getPassword(), user.getPassword())) {
            // 로그인 입력 받은 아이디, 패스워드 기반 Spring Security Token 생성
            UsernamePasswordAuthenticationToken authenticationToken = loginRequest.toAuthentication();
            Authentication authentication = managerBuilder.getObject().authenticate(authenticationToken);
            TokenResponse tokenResponse = jwtUtil.generateToken(authentication, response);
            // Refresh Token 을 DB 에 저장
            Token token = Token.builder()
                    .refreshToken(tokenResponse.getRefreshToken())
                    .build();
            token.setUser(user);
            tokenRepository.save(token);
            return TokenResponse.ofAccessToken(tokenResponse, user);
        } else {
            throw new EntityNotFoundException("비밀번호가 일치하지 않습니다.");
        }
    }

    public Boolean autoLogIn () {
        Long userKey = SecurityUtil.getCurrentUserIdOrThrow();
        User user = userRepository.findById(userKey)
                .orElseThrow(() -> new EntityNotFoundException("해당 유저를 찾을 수 없습니다."));
        return userRepository.findByUserKey(user.getUserKey()).isPresent();
    }
    // Access Token 만료시 토큰 재발행
    public TokenResponse reissueToken(String refreshToken, HttpServletResponse response) {
        // 매개변수로 들어온 Refresh Token 을 DB 에서의 존재 유무 확인
        Long userKey = SecurityUtil.getCurrentUserIdOrThrow();

        User user = userRepository.findById(userKey)
                .orElseThrow(() -> new EntityNotFoundException("해당 유저를 찾을 수 없습니다."));
        Token token = tokenRepository.findByUserUserKey(userKey)
                .orElseThrow(() -> new EntityNotFoundException("해당 토큰을 찾을 수 없습니다."));
        // RequestTokenDto 에서 추출한 refreshToken 의 유효성 검사
        Authentication authentication = jwtUtil.getAuthentication(refreshToken);
        log.info("리프레시 토큰 유효성 검사 : {}", authentication);
        TokenResponse tokenResponse = jwtUtil.generateToken(authentication, response);
        String accessToken = jwtUtil.generateAccessToken(authentication, response);
        log.info("유효성 검사후 엑세스 토큰 생성 : {}", accessToken);
        if (token != null && !token.getRefreshToken().equals(refreshToken)) {
            log.info("🔴 [DELETE] Refresh Token 삭제 요청: userKey={}", user.getUserKey());
            tokenRepository.deleteByUserKey(user.getUserKey());
            entityManager.flush(); // ✅ 즉시 반영

            token = null;
        }

        if (token == null) {
            token = Token.builder()
                    .refreshToken(tokenResponse.getRefreshToken())
                    .user(user)
                    .build();
        } else {
            token.setRefreshToken(tokenResponse.getRefreshToken());
        }

        tokenRepository.save(token); // ✅ 새로 생성한 Token 저장
        log.info("🔴 새로운 Refresh Token 저장 완료");
        return TokenResponse.builder()
                .grantType("Bearer")
                .accessToken(accessToken)
                .profileUrl(user.getProfileUrl())
                .registeredAt(user.getRegisteredAt())
                .build();
    }

    // 회원 가입 서비스 계층 비즈니스 로직
    public Boolean signUp(UserRequest userRequest) {

        if (userRepository.existsByEmail(userRequest.getEmail())) {
            throw new DuplicateResourceException("이미 가입되어 있는 유저입니다");
        }
        User user = userRequest.toEntity(passwordEncoder);
        userRepository.save(user);
        String htmlContent = "<div style='font-family: Arial, sans-serif; text-align: left; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;'>"
                + "<div style='text-align: left; padding: 10px; background-color: #1e1e1e;'>"
                + "<a href='#'>"
                + "<img src='https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/DEVOLT%2FLogo%2Ffulllogo.png?alt=media' width='100px'>"
                + "</a>"
                + "</div>"
                + "<br>"
                + "<h1 style='color: #9c27b0; text-align: center; font-size: 22px; margin-bottom: 20px;'>회원가입을 환영합니다!</h1>"
                + "<p style='font-size: 16px; line-height: 1.8; text-align: center; margin-bottom: 15px;'>안녕하세요, <strong style='color: #9c27b0;'>" + userRequest.getNickname() + "</strong>님!</p>"
                + "<p style='font-size: 16px; line-height: 1.8; text-align: center; margin-bottom: 15px;'>저희 Devolt 서비스를 가입해주셔서 감사합니다. 이제 다양한 기능을 자유롭게 이용하실 수 있습니다!</p>"
                + "<p style='font-size: 16px; line-height: 1.8; text-align: center; margin-bottom: 15px;'>어떤 질문이나 문제가 있으면 언제든지 저희 고객 지원팀에 문의해 주세요.</p>"
                + "<h3 style='color: #9c27b0; text-align: center; margin-top: 20px;'>Devolt 와 함께 행복한 시간을 보내세요!</h3>"
                + "<p style='font-size: 14px; color: #999; text-align: center; margin-top: 20px;'>본 이메일은 자동으로 생성된 이메일입니다. 만약 이 이메일을 받지 않으셨다면, 스팸 폴더를 확인해 주세요.</p>"
                + "</div>";
        MailBody mailBody = MailBody.builder()
                .to(userRequest.getEmail())
                .html(htmlContent)
                .subject("회원가입 환영 이메일")
                .build();

        emailService.sendVerificationEmail(mailBody);
        return true;
    }

    // 회원가입시 회원 정보를 DB 와 대조하여 존재여부 유효성 검사하는 메서드
    // 각 해당하는 유효성 검사에서 이미 존재하면 false 를 반환, 즉 유효성 검사 실패값을 프론트에서 false 로 처리
    public Boolean validationForInfo(String key, String value) {
        return switch (key) {
            case "userId" -> !userRepository.existsByUserId(value);
            case "email" -> !userRepository.existsByEmail(value);
            case "nickname" -> !userRepository.existsByNickname(value);
            default -> throw new IllegalArgumentException("존재하는 key 값이 없습니다.");
        };
    }

    // 회원 가입중 기입한 이메일로 OTP 전달
    public Boolean sendOtpForJoin(String email) {
        // 재전송을 대비해, 해당 호출이 들어올때마다 기존의 OTP 를 삭제
        emailValidationForJoinRepository.deleteByEmail(email);
//        emailValidationForJoinRepository.deleteExpiredOtp(new Date()); 기존 만료시간 네이밍 쿼리는 위에와 중복되므로 삭제
        int otp = otpGenerator();
        String htmlContent = "<div style='font-family: Arial, sans-serif; text-align: left; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;'>"
                + "<div style='text-align: left; padding: 10px; background-color: #1e1e1e;'>"
                + "<a href='#'>"
                + "<img src='https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/DEVOLT%2FLogo%2Ffulllogo.png?alt=media' width='100px'>"
                + "</a>"
                + "</div>"
                + "<h2 style='color: #9c27b0; margin-top: 30px; font-size: 22px; text-align: center;'>회원가입 이메일 인증</h2>"
                + "<p style='font-size: 16px; color: #000; padding-left: 10px; padding-right: 10px; text-align: center;'>"
                + "안녕하세요.<br>"
                + "데볼트에 가입해 주셔서 감사합니다.<br>"
                + "회원가입 완료를 위해 아래 <span style='color: #9c27b0; font-weight: bold;'>이메일 인증용 OTP 번호</span>를 입력해 주세요.<br>"
                + "감사합니다."
                + "</p>"
                + "<h3 style='font-size: 20px; color: #9c27b0; margin-top: 30px; text-align: center;'>이메일 인증 코드</h3>"
                + "<div style='padding-left: 10px; padding-right: 10px; text-align: center;'>"
                + "<p style='font-size: 24px; font-weight: bold; color: #ffffff; text-align: center; background-color: #9c27b0; padding: 10px; border-radius: 5px; display: inline-block;'>"
                + otp + "</p>"
                + "</div>"
                + "<p style='margin-top: 30px; font-size: 14px; color: #666; padding-left: 10px; padding-right: 10px; text-align: center;'>"
                + "* 본 메일은 devolt에서 발송되었으며, 발신 전용 메일로 회신이 되지 않습니다."
                + "</p>"
                + "</div>";
        MailBody mailBody = MailBody.builder()
                .to(email)
                .html(htmlContent)
                .subject("이메일 인증 요청 입니다.")
                .build();
        OtpVerificationForJoin otpVerificationForJoin = OtpVerificationForJoin.builder()
                .otp(otp)
                .expirationDate(new Date(System.currentTimeMillis() + 180 * 1000))
                .email(email)
                .build();
        emailService.sendVerificationEmail(mailBody);
        emailValidationForJoinRepository.save(otpVerificationForJoin);
        return true;
    }

    // 회원가입중 이메일 OTP 인증
    public Boolean validateOtpForJoin(Integer otp, String email) {
        // OTP 가 유효한지 체크
        Optional<OtpVerificationForJoin> otpVerificationForJoin = emailValidationForJoinRepository.findByOtpAndEmail(otp, email);

        if (otpVerificationForJoin.isEmpty()){
            return false;
        }
        // 해당하는 OTP 가 만료 되었을시에 삭제
        else{
            OtpVerificationForJoin otpData = otpVerificationForJoin.get();
            if (otpData.getExpirationDate().before(Date.from(Instant.now()))) {
                emailValidationForJoinRepository.deleteById(otpData.getId());
                return false;
            }
            else return true;
        }
    }

    // 이메일을 통한 ID 찾기
    public UserResponse getIdByEmail(String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new EntityNotFoundException("존재하지 않는 이메일 입니다."));
        return UserResponse.ofUserId(user);
    }

    // 비밀번호 찾기시 이메일 존재 여부 확인
    public Boolean sendOtpForPasswordReset(String email) {
        // 새 OTP 생성시 기존의 OTP 삭제
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new EntityNotFoundException("등록된 이메일이 존재하지 않습니다."));
        emailValidationRepository.deleteByUserKey(user.getUserKey());
        int otp = otpGenerator();
        String htmlContent = "<div style='font-family: Arial, sans-serif; text-align: left; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;'>"
                + "<div style='text-align: left; padding: 10px; background-color: #1e1e1e;'>"
                + "<a href='#'>"
                + "<img src='https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/DEVOLT%2FLogo%2Ffulllogo.png?alt=media' width='100px'>"
                + "</a>"
                + "</div>"
                + "<br>"
                + "<h1 style='color: #9c27b0; text-align: center; font-size: 22px;'>Devolt 비밀번호 변경</h1>"
                + "<p style='font-size: 16px; color: #333; text-align: center;'>비밀번호 변경을 위해 아래의 OTP를 입력하세요.</p>"
                + "<h3 style='font-size: 20px; color: #9c27b0; margin-top: 30px; text-align: center;'>이메일 인증 코드</h3>"
                + "<div style='padding-left: 10px; padding-right: 10px; text-align: center;'>"
                + "<p style='display: inline-block; padding: 15px 30px; font-size: 24px; font-weight: bold; color: #ffffff; background-color: #9c27b0; border-radius: 8px; margin-top: 10px;'>"
                + otp + "</p>"
                + "</div>"
                + "<p style='margin-top: 20px; font-size: 14px; color: #666; text-align: center;'>본 이메일은 Devolt에서 발송되었습니다.</p>"
                + "</div>";
        MailBody mailBody = MailBody.builder()
                .to(email)
                .html(htmlContent)
                .subject("비밀번호 찾기 요청 입니다.")
                .build();
        OtpVerification otpVerification = OtpVerification.builder()
                .otp(otp)
                .expirationDate(new Date(System.currentTimeMillis() + 180 * 1000))
                .user(user)
                .build();
        emailService.sendVerificationEmail(mailBody);
        emailValidationRepository.save(otpVerification);
        return true;
    }

    // 비밀번호 찾기시 발급받은 OTP 가 맞는지 확인
    public Boolean validateOtpForPw(Integer otp, String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new EntityNotFoundException("존재하지 않는 이메일 입니다."));
        OtpVerification otpVerification = emailValidationRepository.findByOtpAndUser(otp, user)
                .orElseThrow(() -> new InvalidValueException("해당하는 이메일에 적합한 OTP 가 아닙니다."));
        if (otpVerification.getExpirationDate().before(Date.from(Instant.now()))) {
            emailValidationRepository.deleteById(otpVerification.getId());
            return false;
        }
        emailValidationRepository.deleteById(otpVerification.getId());
        return true;
    }

    public Boolean availableNewPassword(String email, String newPw) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new EntityNotFoundException("존재하지 않는 이메일 입니다."));
        return !passwordEncoder.matches(newPw, user.getPassword());
    }

    // 비밀번호 찾기 OTP 인증후에 비밀번호 변경
    public Boolean resetPassword(String email, String newPw) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new EntityNotFoundException("존재하지 않는 이메일 입니다."));
        String newHashedPw = passwordEncoder.encode(newPw);
        user.setPassword(newHashedPw);
        userRepository.save(user);
        return true;
    }

    // OTP 자동생성 메서드
    private Integer otpGenerator() {
        Random random = new Random();
        return random.nextInt(100_000, 999_999);
    }

//    // 관리자 회원 가입 (반환 타입 - UserInfoResponse)
//    public UserResponse saveAdmin(AdminRequest requestDto){
//        User user = requestDto.toJoinAsAdmin(passwordEncoder);
//        return UserResponse.ofMyProfile(userRepository.save(user));
//    }
}
