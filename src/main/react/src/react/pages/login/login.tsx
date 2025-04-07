import React, { JSX, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import {
  TextField,
  Checkbox,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { GoogleOAuthProvider } from '@react-oauth/google'; // GoogleOAuthProvider 추가
import { AxiosError } from 'axios';

import LoginApi from '../../../api/AxiosApi/LoginApi/LoginApi';
import { UserLogin } from '../../../api/AxiosApi/LoginApi/LoginApiTypes';
import { useAppDispatch } from '../../../redux/hooks/reduxHooks';
import { setLoginData, setError } from '../../../redux/slice/authSlice';
import { setLoginCondition } from '../../../redux/slice/loginSlice';
import Common from '../../../util/Common';
import {
  Wrap,
  BodyContainer,
  FloatingOuter,
  FloatingLeftContainer,
  FloatingLeftLogoContainer,
  FloatingLeftLogo,
  FloatingLeftLoginContainer,
  FloatingLeftLoginExtra,
  FloatingLeftExtraAutoLoginBox,
  FloatingLeftExtraFindAccountBox,
  FloatingLeftExtraText,
  FloatingLeftExtraRightText,
  FloatingLeftSignupArea,
  FloatingLeftSignupLeftText,
  FloatingLeftSignupRightText,
  FloatingLeftSNSContainer,
  FloatingLeftSNSText,
  FloatingLeftSNSIconContainer,
  FloatingLeftSNSEachIcon,
  FloatingRightContainer,
  FloatingRightTitle,
  FloatingRightText,
  BottomNoticeContainer,
  BottomNoticeText,
} from '../../styles/login/login';

const Login = (): JSX.Element => {
  const [inputUserId, setInputUserId] = useState<string>('');
  const [inputPw, setInputPw] = useState<string>('');
  const [isId, setIsId] = useState<boolean>(false);
  const [isPw, setIsPw] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false); // 로그인 중 상태 관리
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [isCheckedAutoLogin, setIsCheckedAutoLogin] = useState<boolean>(false);

  const handleInputIdChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    setInputUserId(e.target.value);
    setIsId(e.target.value.length >= 5);
  };
  const handleInputPwChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    setInputPw(e.target.value);
    setIsPw(e.target.value.length >= 5);
  };

  const handleCheckAutoLoginBox = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setIsCheckedAutoLogin(e.target.checked);
  };

  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');

  const handleDialogClose = (): void => {
    setDialogOpen(false);
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
    e.preventDefault();

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true); // 로그인 요청 시작

    try {
      const request: UserLogin = { userId: inputUserId, password: inputPw };
      const response = await LoginApi.login(request); // 로그인 API 호출

      if (response.data.grantType === 'Bearer') {
        const nickname = Common.getNewNickname(response.data.accessToken);
        const keynumber = Common.getNewUserKeyNumber(response.data.accessToken);
        const accesstokenexpiresin = Common.getNewAccessTokenExpiresIn(response.data.accessToken);
        const authortiy = Common.getNewAuthority(response.data.accessToken);
        const profile = response.data.profileUrl;
        const registeredAt = response.data.registeredAt;

        dispatch(
          setLoginData({
            keynumber: keynumber,
            nickname: nickname,
            authority: authortiy,
            accesstoken: response.data.accessToken,
            accesstokenexpiresin: accesstokenexpiresin,
            profile: profile,
            registeredAt: registeredAt,
          }),
        );
        dispatch(
          setLoginCondition({
            autologin: isCheckedAutoLogin,
          }),
        );

        navigate('/'); // 로그인 후 홈 페이지로 이동
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.status === 404) {
          setDialogMessage('비밀번호가 일치하지 않습니다.');
          setDialogOpen(true);
        } else if (error.status === 400) {
          setDialogMessage('아이디가 존재하지 않습니다.');
          setDialogOpen(true);
        }
      }
      dispatch(setError(error || 'Login Failed'));
    } finally {
      setIsSubmitting(false); // 로그인 요청 끝
    }
  };

  const loginTextFieldStyles = {
    fontFamily: 'bold,sans-serif',
    fontSize: '14px',
    '& .MuiInputLabel-root': {
      fontFamily: 'bold,sans-serif',
      fontSize: '14px',
    },
    '& .MuiOutlinedInput-root': {
      fontFamily: 'bold,sans-serif',
      fontSize: '14px',
    },
  };

  const loginButtonStyles = {
    fontFamily: 'bold, sans-serif',
    fontSize: '14px',
    height: '53.13px',
  };

  return (
    <>
      <GoogleOAuthProvider clientId="159300514752-4da56n3as35i523kr5resdcqaba8e7t4.apps.googleusercontent.com">
        <Wrap>
          <BodyContainer>
            <FloatingOuter>
              <FloatingLeftContainer>
                <FloatingLeftLogoContainer>
                  <FloatingLeftLogo onClick={() => navigate('/')} />
                </FloatingLeftLogoContainer>
                <FloatingLeftLoginContainer>
                  <TextField
                    label="아이디"
                    variant="outlined"
                    color="secondary"
                    value={inputUserId}
                    onChange={(e) => handleInputIdChange(e)}
                    autoComplete="off"
                    sx={loginTextFieldStyles}
                  />
                  <TextField
                    label="비밀번호"
                    variant="outlined"
                    color="secondary"
                    value={inputPw}
                    onChange={(e) => handleInputPwChange(e)}
                    type="password"
                    sx={loginTextFieldStyles}
                  />
                  <FloatingLeftLoginExtra>
                    <FloatingLeftExtraAutoLoginBox>
                      <Checkbox
                        size="small"
                        color="secondary"
                        id="autologin"
                        checked={isCheckedAutoLogin}
                        onChange={handleCheckAutoLoginBox}
                        sx={{ padding: '0' }}
                      />
                      <FloatingLeftExtraText
                        onClick={() => setIsCheckedAutoLogin((prev) => !prev)} // 상태를 반전시킴
                        style={{ cursor: 'pointer' }}
                      >
                        자동로그인
                      </FloatingLeftExtraText>
                    </FloatingLeftExtraAutoLoginBox>
                    <FloatingLeftExtraFindAccountBox>
                      <FloatingLeftExtraRightText onClick={() => navigate('/findid')}>
                        아이디 찾기
                      </FloatingLeftExtraRightText>
                      <FloatingLeftExtraRightText onClick={() => navigate('/findpw')}>
                        비밀번호 재설정
                      </FloatingLeftExtraRightText>
                    </FloatingLeftExtraFindAccountBox>
                  </FloatingLeftLoginExtra>
                  {isId && isPw ? (
                    <Button
                      variant="contained"
                      color="secondary"
                      sx={loginButtonStyles}
                      onClick={handleSubmit}
                    >
                      로그인
                    </Button>
                  ) : (
                    <Button variant="outlined" color="secondary" sx={loginButtonStyles} disabled>
                      로그인
                    </Button>
                  )}
                  <FloatingLeftSignupArea>
                    <FloatingLeftSignupLeftText>계정이 없으신가요?</FloatingLeftSignupLeftText>
                    <FloatingLeftSignupRightText onClick={() => navigate('/signup')}>
                      회원가입
                    </FloatingLeftSignupRightText>
                  </FloatingLeftSignupArea>
                </FloatingLeftLoginContainer>
                <FloatingLeftSNSContainer>
                  <FloatingLeftSNSText>다른 방법으로 로그인</FloatingLeftSNSText>
                  <FloatingLeftSNSIconContainer>
                    <FloatingLeftSNSEachIcon
                      style={{ backgroundImage: 'url(/images/sns/google_b.png)' }}
                      // onClick={handleGoogleLoginClick}
                    />
                    <FloatingLeftSNSEachIcon
                      style={{ backgroundImage: 'url(/images/sns/kakao_b.png)' }}
                      // onClick={handleKakaoLoginClick}
                    />
                    <FloatingLeftSNSEachIcon
                      style={{ backgroundImage: 'url(/images/sns/naver_b.png)' }}
                      // onClick={handleNaverLoginClick}
                    />
                    <FloatingLeftSNSEachIcon
                      style={{ backgroundImage: 'url(/images/sns/facebook_b.png)' }}
                    />
                    <FloatingLeftSNSEachIcon
                      style={{ backgroundImage: 'url(/images/sns/github_b.png)' }}
                    />
                  </FloatingLeftSNSIconContainer>
                </FloatingLeftSNSContainer>
              </FloatingLeftContainer>
              <FloatingRightContainer>
                <FloatingRightTitle>Welcome to Devolt!</FloatingRightTitle>
                <FloatingRightText>
                  개발자의, 개발자에 의한, 개발자를 위한 공간!
                  <br />
                  데볼트에서는 지식이 자산이 되고, 경험이 힘이 됩니다.
                  <br />
                  코드 한 줄이 혁신이 되고, 아이디어가 현실이 되는 곳!
                  <br />
                  지금 바로 로그인하고, 개발의 무한한 가능성을 열어보세요.
                </FloatingRightText>
              </FloatingRightContainer>
            </FloatingOuter>
            <BottomNoticeContainer>
              <BottomNoticeText onClick={() => navigate('/legal/Terms')}>
                서비스 이용약관
              </BottomNoticeText>
              <BottomNoticeText onClick={() => navigate('/legal/Privacy')}>
                개인정보 처리방침
              </BottomNoticeText>
            </BottomNoticeContainer>
          </BodyContainer>
        </Wrap>
      </GoogleOAuthProvider>
      <Dialog
        open={dialogOpen}
        onClose={handleDialogClose}
        PaperProps={{
          sx: {
            fontFamily: 'regular',
            minWidth: '400px', // 최소 가로 너비 설정
            maxWidth: '500px', // 최대 가로 너비 설정
          },
        }}
      >
        <DialogTitle
          sx={{
            textAlign: 'center',
            backgroundImage: 'url(/images/logo/fulllogo_white.png)',
            backgroundSize: '25%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'left',
            margin: '10px 0 30px 13px', // 여백 추가
            padding: '13px 0',
          }}
        />
        <DialogContent
          sx={{
            fontFamily: 'bold',
            fontSize: '14px',
            textAlign: 'center', // 가로 정렬
            display: 'flex',
            justifyContent: 'center', // 세로 정렬
            alignItems: 'center', // 세로 정렬
          }}
        >
          {dialogMessage}
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'right' }}>
          <Button sx={{ fontFamily: 'bold' }} color="secondary" onClick={handleDialogClose}>
            닫기
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default Login;
