import React, { forwardRef, useCallback, useImperativeHandle, useState } from 'react';

import CheckIcon from '@mui/icons-material/Check';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import { AxiosError } from 'axios';

import { VerifyOtp } from '../../../../../api/AxiosApi/JoinApi/JoinApiTypes';
import { setError } from '../../../../../redux/slice/authSlice';
import { SecurityInputProps, SecurityInputRef } from '../SignupType';

const SecurityInput: React.ForwardRefRenderFunction<SecurityInputRef, SecurityInputProps> = (
  {
    verifyotp,
    dispatch,
    onValidSecurity,
    isSecurityAvailable,
    finalEmail,
    securityMessage,
    isSubmitting,
  },
  ref,
) => {
  const [inputSecurity, setInputSecurity] = useState<string>('');

  const onChangeSecurity = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputSecurity(e.target.value);
  }, []);

  const onClickSecurity = async (e: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
    e.preventDefault();
    if (isSubmitting) {
      return;
    }
    onValidSecurity({ isSubmitting: true });
    const currentValue = Number(inputSecurity);
    const verifyData: VerifyOtp = { otp: currentValue, email: finalEmail };

    try {
      const otpAvailable = await verifyotp(verifyData);
      if (!otpAvailable) {
        onValidSecurity({ securityMessage: '인증번호가 일치하지 않습니다.', securityValid: false });
      } else {
        onValidSecurity({
          securityMessage: '',
          securityValid: true,
          isSecurityAvailable: false,
          isEmailAvailable: false,
          runningValid: false,
        });
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        dispatch(setError(error.response?.data?.message || 'Verify Failed'));
      } else {
        dispatch(setError('An unknown error occurred'));
      }
    } finally {
      onValidSecurity({ isSubmitting: false });
    }
  };

  useImperativeHandle(
    ref,
    () => ({
      getSecurity: (): string => inputSecurity,
    }),
    [inputSecurity],
  );

  return (
    <>
      {isSecurityAvailable ? (
        <TextField
          label="인증번호 입력"
          variant="outlined"
          color="secondary"
          type="text"
          value={inputSecurity}
          onChange={onChangeSecurity}
          error={!!securityMessage} // 인증 메시지가 있을 경우 에러로 처리
          helperText={securityMessage || ''} // 인증 메시지가 있을 경우 표시
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
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  edge="end"
                  onClick={onClickSecurity}
                  color="secondary"
                  disabled={!inputSecurity} // 입력값이 없으면 버튼 비활성화
                >
                  <CheckIcon /> {/* 체크 아이콘 */}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      ) : null}
    </>
  );
};

export default React.memo(forwardRef(SecurityInput));
