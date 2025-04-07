import React, { JSX, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import CheckIcon from '@mui/icons-material/Check';
import { TextField, InputAdornment, IconButton, Button } from '@mui/material';

import type { VerifyEmail } from '../../../api/AxiosApi/JoinApi/JoinApiTypes';

import LoginApi from '../../../api/AxiosApi/LoginApi/LoginApi';
import { UserFindResponse } from '../../../api/AxiosApi/LoginApi/LoginApiTypes';
import { emailAvailable, isBlank } from '../../../util/signup/Validation';
import {
  Wrap,
  BodyContainer,
  FloatingOuter,
  FloatingLeftContainer,
  FloatingLeftLogoContainer,
  FloatingLeftLogo,
  FloatingLeftFindContainer,
  FloatingRightContainer,
  FloatingRightTitle,
  FloatingRightText,
  FloatingLeftOutputContainer,
  FloatingLeftOutputText,
  FloatingLeftOutputTextBold,
  BottomNoticeContainer,
  BottomNoticeText,
} from '../../styles/login/FindId';

const FindId = (): JSX.Element => {
  const [inputEmail, setInputEmail] = useState<string>('');
  const [isEmail, setIsEmail] = useState<boolean>(false);
  const [emailMessage, setEmailMessage] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false); // 로그인 중 상태 관리
  const [userId, setUserId] = useState<string>('');
  const [isUserIdAvailable, setIsUserIdAvailable] = useState<boolean>(false); // 아이디 찾기 상태 관련
  const navigate = useNavigate();

  async function confirmemail(params: VerifyEmail): Promise<UserFindResponse | null> {
    try {
      const response = await LoginApi.findid(params);

      return response.data;
    } catch (error) {
      console.error('에러 발생', error);
      setEmailMessage('등록된 이메일이 없습니다.');
      setIsEmail(false);
      return null;
    }
  }

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputEmail(e.target.value);
    const currentValue = e.target.value;
    if (emailAvailable(currentValue)) {
      setEmailMessage('');
      setIsEmail(true);
    } else {
      setIsEmail(false);
    }
  };

  const onBlurEmail = (): void => {
    const currentValue = inputEmail;
    if (isBlank(currentValue)) {
      setEmailMessage('아이디를 찾기 위해서는 이메일이 필요합니다.');
      setIsEmail(false);
      return;
    }
    if (!emailAvailable(currentValue)) {
      setEmailMessage('이메일 형식이 올바르지 않습니다.');
      setIsEmail(false);
      return;
    }
    setIsEmail(true);
  };

  const onClickFindId = async (e: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
    e.preventDefault();
    if (isSubmitting) {
      return;
    }
    setIsSubmitting(true);
    const currentValue = inputEmail;
    try {
      const request: VerifyEmail = { email: currentValue };
      const emailExist = await confirmemail(request);

      if (emailExist) {
        setIsUserIdAvailable(true);
        setUserId(emailExist.userId);
      } else {
        setEmailMessage('등록된 이메일이 없습니다.');
        setIsEmail(false);
      }
    } catch (error) {
      console.error('에러 발생', error);
    } finally {
      setIsSubmitting(false);
    }
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
              <FloatingLeftFindContainer isUserIdAvailable={isUserIdAvailable}>
                {!isUserIdAvailable ? (
                  <TextField
                    label="이메일"
                    variant="outlined"
                    color="secondary"
                    type="email"
                    value={inputEmail}
                    onChange={onChangeEmail}
                    onBlur={onBlurEmail}
                    error={inputEmail !== '' && emailMessage !== ''} // 입력 완료 후에만 오류 표시
                    helperText={emailMessage}
                    autoComplete="off"
                    sx={{
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
                      '& .MuiFormHelperText-root': {
                        fontFamily: 'bold,sans-serif',
                        fontSize: '12px',
                      },
                    }}
                    InputProps={
                      {
                        // endAdornment: (
                        //   <InputAdornment position="end">
                        //     <IconButton
                        //       edge="end"
                        //       onClick={onClickFindId}
                        //       color="secondary"
                        //       disabled={!isEmail || isUserIdAvailable}
                        //     >
                        //       <CheckIcon /> {/* 체크 아이콘 */}
                        //     </IconButton>
                        //   </InputAdornment>
                        // ),
                      }
                    }
                  />
                ) : (
                  <FloatingLeftOutputContainer isUserIdAvailable={isUserIdAvailable}>
                    <CheckIcon color="secondary" sx={{ fontSize: '52px' }} />
                    <FloatingLeftOutputText>
                      회원님의 아이디는
                      <br />
                      <FloatingLeftOutputTextBold>{userId}</FloatingLeftOutputTextBold> 입니다.
                    </FloatingLeftOutputText>
                  </FloatingLeftOutputContainer>
                  // 소셜 연동 로그인한 회원의 ID 찾기 같은 경우에는 로직이 달라져야함
                  // 로컬 회원과 소셜 연동 회원 구분하는 로직 필요
                )}
                {/* <Button
                  variant="contained"
                  color="secondary"
                  sx={{ fontFamily: 'bold, sans-serif', fontSize: '14px', height: '53.13px' }}
                  onClick={() => navigate('/findpw')}
                >
                  비밀번호 재설정
                </Button> */}
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ fontFamily: 'bold, sans-serif', fontSize: '14px', height: '53.13px' }}
                  onClick={onClickFindId}
                  disabled={!isEmail || isUserIdAvailable}
                >
                  아이디 찾기
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  sx={{ fontFamily: 'bold, sans-serif', fontSize: '14px', height: '53.13px' }}
                  onClick={() => navigate('/login')}
                >
                  뒤로가기
                </Button>
              </FloatingLeftFindContainer>
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
    </>
  );
};
export default FindId;
