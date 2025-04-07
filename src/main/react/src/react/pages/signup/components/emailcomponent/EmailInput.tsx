import React, { forwardRef, useCallback, useImperativeHandle, useRef, useState } from 'react';

import RefreshIcon from '@mui/icons-material/Refresh';
import SendIcon from '@mui/icons-material/Send';
import { TextField, InputAdornment, IconButton, CircularProgress } from '@mui/material';
import { AxiosError } from 'axios';

import EmailInput_Timer from './EmailInput_Timer';
import { Validate } from '../../../../../api/AxiosApi/JoinApi/JoinApiTypes';
import { setError } from '../../../../../redux/slice/authSlice';
import { emailAvailable, isBlank } from '../../../../../util/signup/Validation';
import { EmailInputProps, EmailInputRef, TimerInputRef, TimerInputType } from '../SignupType';

const EmailInput: React.ForwardRefRenderFunction<EmailInputRef, EmailInputProps> = (
  {
    validate,
    verifyemail,
    dispatch,
    onValidEmail,
    isSecurityAvailable,
    isEmailAvailable,
    isSecurity,
    isRunning,
    isSubmitting,
  },
  ref,
) => {
  const [inputEmail, setInputEmail] = useState<string>('');
  const [emailMessage, setEmailMessage] = useState<string>('');
  const [isEmail, setIsEmail] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const timerRef = useRef<TimerInputRef>(null);

  const onChangeEmail = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputEmail(e.target.value);
    const currentValue: string = e.target.value;
    if (emailAvailable(currentValue)) {
      setEmailMessage('');
      setIsEmail(true);
    } else {
      setIsEmail(false);
    }
  }, []);
  const onBlurEmail = (): void => {
    const currentValue: string = inputEmail;
    if (isBlank(currentValue)) {
      setEmailMessage('이메일 인증이 필요합니다.');
      setIsEmail(false);
      return;
    }
    setEmailMessage('');
    if (!emailAvailable(currentValue)) {
      setEmailMessage('이메일 형식이 올바르지 않습니다.');
      setIsEmail(false);
      return;
    }
    setEmailMessage('');
    setIsEmail(true);
  };
  const onClickEmail = async (
    e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>,
  ): Promise<void> => {
    e.preventDefault();
    if (isSubmitting) {
      return;
    }
    setIsLoading(true);
    onValidEmail({ runningValid: false, isSubmitting: true });
    const currentValue: string = inputEmail;
    const validateData: Validate = { key: 'email', value: currentValue };
    try {
      const emailAvailable = await validate(validateData);
      if (!emailAvailable) {
        setEmailMessage('중복 이메일입니다.');
        setIsEmail(false);
      } else {
        const res = await verifyemail({ email: currentValue });
        if (res) {
          onValidEmail({
            email: inputEmail,
            emailValid: isEmail,
            message: '',
            isSecurityAvailable: true,
            runningValid: true,
          });
          timerRef.current?.startTimer();
        }
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        dispatch(setError(error.response?.data?.message || 'Verify Failed'));
      } else {
        dispatch(setError('An unknown error occurred'));
      }
    } finally {
      setIsLoading(false);
      onValidEmail({ isSubmitting: false });
    }
  };

  useImperativeHandle(
    ref,
    () => ({
      getEmail: (): string => inputEmail,
      getEmailValid: (): boolean => isEmail,
    }),
    [inputEmail, isEmail],
  );

  const handleValidTimer = (args: TimerInputType): void => {
    setEmailMessage((prev) => args.message ?? prev);
    onValidEmail({
      runningValid: args.isRunning ?? isRunning,
      isSecurityAvailable: args.isSecurityAvailable ?? isSecurityAvailable,
    });
  };

  return (
    <>
      <TextField
        label="이메일"
        variant="outlined"
        color="secondary"
        type="email"
        value={inputEmail}
        onChange={onChangeEmail}
        onBlur={onBlurEmail}
        disabled={!isEmailAvailable}
        error={!isEmail && emailMessage !== ''}
        helperText={!isEmail ? emailMessage : ''}
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
              {isEmail && isEmailAvailable && !isSecurity && !isSecurityAvailable && !isLoading ? (
                <IconButton onClick={onClickEmail} color="secondary" edge="end">
                  <SendIcon />
                </IconButton> // 📨 인증번호 전송 버튼 (이메일 아이콘)
              ) : isEmail && isEmailAvailable && !isRunning && isLoading ? (
                <CircularProgress size="15px" color="secondary" />
              ) : (
                isEmail &&
                isEmailAvailable &&
                isSecurityAvailable &&
                isRunning &&
                !isLoading && (
                  <>
                    <EmailInput_Timer
                      onValidTimer={handleValidTimer}
                      isRunning={isRunning}
                      isEmail={isEmail}
                      ref={timerRef}
                    />
                    <IconButton onClick={onClickEmail} color="secondary" edge="end">
                      <RefreshIcon />
                    </IconButton>
                  </>
                )
              )}
            </InputAdornment>
          ),
        }}
      />
    </>
  );
};

export default React.memo(forwardRef(EmailInput));
