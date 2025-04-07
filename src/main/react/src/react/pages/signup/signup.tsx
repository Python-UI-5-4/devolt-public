import React, { useState, useRef, JSX, useCallback } from 'react';

import { useNavigate } from 'react-router-dom';

import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';

import CheckboxInput from './components/checkboxcomponent/CheckboxInput';
import ConPasswordInput from './components/conpasswordcomponent/ConPasswordInput';
import EmailInput from './components/emailcomponent/EmailInput';
import NicknameInput from './components/nicknamecomponent/NicknameInput';
import PasswordInput from './components/passwordcomponent/PasswordInput';
import SecurityInput from './components/securitycomponent/SecurityInput';
import {
  CheckboxInputRef,
  CheckboxInputType,
  ConPasswordInputRef,
  ConPasswordInputType,
  EmailInputRef,
  EmailInputType,
  NicknameInputRef,
  NicknameInputType,
  PasswordInputRef,
  PasswordInputType,
  SecurityInputRef,
  SecurityInputType,
  UserIdInputRef,
  UserIdInputType,
} from './components/SignupType';
import UserIdInput from './components/useridcomponent/UserIdInput';
import JoinApi from '../../../api/AxiosApi/JoinApi/JoinApi';
import {
  UserJoin,
  Validate,
  VerifyEmail,
  VerifyOtp,
} from '../../../api/AxiosApi/JoinApi/JoinApiTypes';
import { useAppDispatch } from '../../../redux/hooks/reduxHooks';
import {
  Wrap,
  BodyContainer,
  FloatingOuter,
  FloatingLeftContainer,
  FloatingLeftLogoContainer,
  FloatingLeftLogo,
  FloatingLeftSignupContainer,
  FloatingLeftLoginArea,
  FloatingLeftLoginLeftText,
  FloatingLeftLoginRightText,
  FloatingRightContainer,
  FloatingRightTitle,
  FloatingRightText,
  BottomNoticeContainer,
  BottomNoticeText,
} from '../../styles/signup/signup';

const Signup = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [finalUserId, setFinalUserId] = useState<string>('');
  const [isFinalUserId, setIsFinalUserId] = useState<boolean>(false);
  const finalUserIdRef = useRef<UserIdInputRef>(null);

  const handleValidUserId = (args: UserIdInputType): void => {
    setFinalUserId((prev) => args.userId ?? prev);
    setIsFinalUserId((prev) => args.userIdValid ?? prev);
  };

  const [finalPw, setFinalPw] = useState<string>('');
  const [isFinalPw, setIsFinalPw] = useState<boolean>(false);
  const finalPwRef = useRef<PasswordInputRef>(null);

  const handleValidPassword = (args: PasswordInputType): void => {
    setFinalPw((prev) => args.password ?? prev);
    setIsFinalPw((prev) => args.passwordValid ?? prev);
  };

  const [finalConPw, setFinalConPw] = useState<string>('');
  const [isFinalConPw, setIsFinalConPw] = useState<boolean>(false);
  const finalConPwRef = useRef<ConPasswordInputRef>(null);

  const handleValidConPassword = (args: ConPasswordInputType): void => {
    setFinalConPw((prev) => args.conPassword ?? prev);
    setIsFinalConPw((prev) => args.conPasswordValid ?? prev);
  };

  const [finalEmail, setFinalEmail] = useState<string>('');
  const [isFinalEmail, setIsFinalEmail] = useState<boolean>(false);
  const [isFinalEmailAvailable, setIsFinalEmailAvailable] = useState<boolean>(true);
  const finalEmailRef = useRef<EmailInputRef>(null);

  const handleValidEmail = (args: EmailInputType): void => {
    setFinalEmail((prev) => args.email ?? prev);
    setIsFinalEmail((prev) => args.emailValid ?? prev);
    setSecurityMessage((prev) => args.message ?? prev);
    setIsFinalSecurityAvailable((prev) => args.isSecurityAvailable ?? prev);
    setIsRunning((prev) => args.runningValid ?? prev);
    setIsSubmitting((prev) => args.isSubmitting ?? prev);
  };

  const [finalSecurity, setFinalSecurity] = useState<string>('');
  const [securityMessage, setSecurityMessage] = useState<string>('');
  const [isFinalSecurity, setIsFinalSecurity] = useState<boolean>(false);
  const [isFinalSecurityAvailable, setIsFinalSecurityAvailable] = useState<boolean>(false);
  const finalSecurityRef = useRef<SecurityInputRef>(null);

  const handleValidSecurity = (args: SecurityInputType): void => {
    setFinalSecurity((prev) => args.security ?? prev);
    setIsFinalSecurity((prev) => args.securityValid ?? prev);
    setIsFinalSecurityAvailable((prev) => args.isSecurityAvailable ?? prev);
    setSecurityMessage((prev) => args.securityMessage ?? prev);
    setIsFinalEmailAvailable((prev) => args.isEmailAvailable ?? prev);
    setIsRunning((prev) => args.runningValid ?? prev);
    setIsSubmitting((prev) => args.isSubmitting ?? prev);
  };

  const [finalName, setFinalName] = useState<string>('');
  const [isFinalName, setIsFinalName] = useState<boolean>(false);
  const finalNameRef = useRef<NicknameInputRef>(null);

  const handleValidName = (args: NicknameInputType): void => {
    setFinalName((prev) => args.nickname ?? prev);
    setIsFinalName((prev) => args.nicknameValid ?? prev);
  };

  const [isAvailable, setIsAvailable] = useState<boolean>(false);
  const finalCheckboxRef = useRef<CheckboxInputRef>(null);

  const handleIsAvailable = useCallback((args: CheckboxInputType): void => {
    setIsAvailable((prev) => args.isAvailable ?? prev);
  }, []);

  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const [isLoadingSignUp, setIsLoadingSignUp] = useState<boolean>(false); // 회원가입 로딩

  const validate = useCallback(async (params: Validate): Promise<boolean> => {
    const response = await JoinApi.validate(params);
    // if (params.key === 'userId') {
    //   setFinalUserId(params.key.toString());
    //   setIsFinalUserId(Boolean(params.value.valueOf()));
    // }
    return response.data;
  }, []);

  const verifyemail = useCallback(async (params: VerifyEmail): Promise<boolean> => {
    const response = await JoinApi.verifyemail(params);
    return response.data;
  }, []);

  const verifyotp = useCallback(async (request: VerifyOtp): Promise<boolean> => {
    const response = await JoinApi.verifyotp(request);
    return response.data;
  }, []);

  const signUpAvailable: boolean =
    isFinalUserId &&
    isFinalEmail &&
    isFinalSecurity &&
    isFinalPw &&
    isFinalConPw &&
    isFinalName &&
    isAvailable &&
    !isLoadingSignUp;

  const signUpProgress: boolean =
    isFinalUserId &&
    isFinalEmail &&
    isFinalSecurity &&
    isFinalPw &&
    isFinalConPw &&
    isFinalName &&
    isAvailable &&
    isLoadingSignUp;

  const [openDialog, setOpenDialog] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');

  const handleCloseDialog = (): void => {
    setOpenDialog(false);
  };

  const onClickSignUp = async (e: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
    e.preventDefault();

    if (isSubmitting) {
      return;
    }
    const currentUserId: string | undefined = finalUserIdRef.current?.getUserId();
    const currentPw: string | undefined = finalPwRef.current?.getPassword();
    const currentConPw: string | undefined = finalConPwRef.current?.getConPassword();
    const currentEmail: string | undefined = finalEmailRef.current?.getEmail();
    const currentName: string | undefined = finalNameRef.current?.getNickname();

    if (currentUserId !== finalUserId) {
      setDialogMessage('아이디가 유효하지 않습니다. 다시 시도해주세요.');
      setOpenDialog(true);
      setIsFinalUserId(false);
      return;
    }
    if (currentPw !== finalPw) {
      setDialogMessage('비밀번호가 유효하지 않습니다. 다시 시도해주세요.');
      setOpenDialog(true);
      setIsFinalPw(false);
      return;
    }
    if (currentConPw !== finalConPw) {
      setDialogMessage('확인용 비밀번호가 유효하지 않습니다. 다시 시도해주세요.');
      setOpenDialog(true);
      setIsFinalConPw(false);
      return;
    }
    if (currentConPw !== currentPw) {
      setDialogMessage('비밀번호가 일치하지 않습니다. 다시 시도해주세요.');
      setOpenDialog(true);
      setIsFinalPw(false);
      setIsFinalConPw(false);
      return;
    }
    if (currentEmail !== finalEmail) {
      setDialogMessage('이메일이 유효하지 않습니다. 다시 시도해주세요.');
      setOpenDialog(true);
      setIsFinalEmail(false);
      return;
    }
    if (currentName !== finalName) {
      setDialogMessage('닉네임이 유효하지 않습니다. 다시 시도해주세요.');
      setOpenDialog(true);
      setIsFinalName(false);
      return;
    }
    setIsLoadingSignUp(true);
    setIsSubmitting(true);
    const requestData: UserJoin = {
      userId: finalUserId.trim().replace(/\s+/g, ''),
      email: finalEmail.trim().replace(/\s+/g, ''),
      password: finalPw.trim().replace(/\s+/g, ''),
      nickname: finalName.trim(),
      otp: Number(finalSecurity.trim()),
    };
    try {
      const memberReg = await JoinApi.join(requestData);
      if (memberReg) {
        setDialogMessage('회원 가입에 성공했습니다.');
        setOpenDialog(true);
        // navigate('/');
      } else {
        setDialogMessage('회원 가입에 실패했습니다.');
        setOpenDialog(true);
      }
    } catch (error) {
      console.error('에러 발생', error);
      setDialogMessage('서버가 응답하지 않습니다.');
      setOpenDialog(true);
    } finally {
      setIsLoadingSignUp(false);
      setIsSubmitting(false);
    }
  };

  const signupButtonStyles = {
    fontFamily: 'bold, sans-serif',
    fontSize: '14px',
    height: '53.13px',
  };

  return (
    <>
      <Wrap>
        <BodyContainer>
          <FloatingOuter>
            <FloatingLeftContainer>
              <FloatingLeftLogoContainer>
                <FloatingLeftLogo onClick={() => navigate('/')} />
              </FloatingLeftLogoContainer>
              <FloatingLeftSignupContainer>
                <UserIdInput
                  validate={validate}
                  onValidUserId={handleValidUserId}
                  ref={finalUserIdRef}
                />
                <PasswordInput onValidPassword={handleValidPassword} ref={finalPwRef} />
                <ConPasswordInput
                  finalPassword={finalPw}
                  onValidConPassword={handleValidConPassword}
                  ref={finalConPwRef}
                />
                <EmailInput
                  validate={validate}
                  verifyemail={verifyemail}
                  dispatch={dispatch}
                  onValidEmail={handleValidEmail}
                  isSecurityAvailable={isFinalSecurityAvailable}
                  isEmailAvailable={isFinalEmailAvailable}
                  isSecurity={isFinalSecurity}
                  isRunning={isRunning}
                  isSubmitting={isSubmitting}
                  ref={finalEmailRef}
                />
                <SecurityInput
                  verifyotp={verifyotp}
                  dispatch={dispatch}
                  onValidSecurity={handleValidSecurity}
                  isSecurityAvailable={isFinalSecurityAvailable}
                  finalEmail={finalEmail}
                  securityMessage={securityMessage}
                  isSubmitting={isSubmitting}
                  ref={finalSecurityRef}
                />
                <NicknameInput
                  validate={validate}
                  onValidNickname={handleValidName}
                  ref={finalNameRef}
                />
                <CheckboxInput onValidIsAvailable={handleIsAvailable} ref={finalCheckboxRef} />

                {signUpAvailable ? (
                  <Button
                    variant="contained"
                    color="secondary"
                    sx={signupButtonStyles}
                    disabled={!signUpAvailable}
                    onClick={onClickSignUp}
                  >
                    회원가입
                  </Button>
                ) : signUpProgress ? (
                  <Button variant="outlined" color="secondary" sx={signupButtonStyles} disabled>
                    <CircularProgress size={24} sx={{ position: 'absolute' }} color="secondary" />
                  </Button>
                ) : (
                  <Button variant="outlined" color="secondary" sx={signupButtonStyles} disabled>
                    회원가입
                  </Button>
                )}
                <FloatingLeftLoginArea>
                  <FloatingLeftLoginLeftText>계정이 있으신가요?</FloatingLeftLoginLeftText>
                  <FloatingLeftLoginRightText onClick={() => navigate('/login')}>
                    로그인
                  </FloatingLeftLoginRightText>
                </FloatingLeftLoginArea>
              </FloatingLeftSignupContainer>
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
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
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
          {dialogMessage === '회원 가입에 성공했습니다.' ? (
            <Button sx={{ fontFamily: 'bold' }} color="secondary" onClick={() => navigate('/')}>
              메인으로
            </Button>
          ) : (
            <Button sx={{ fontFamily: 'bold' }} color="secondary" onClick={handleCloseDialog}>
              닫기
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </>
  );
};
export default Signup;
