import React, { forwardRef, useCallback, useImperativeHandle, useState } from 'react';

import { Visibility, VisibilityOff } from '@mui/icons-material';
import { TextField, IconButton, InputAdornment } from '@mui/material';

import {
  isBlank,
  isPwContainsCharacter,
  isPwContainsNumber,
  isPwContainsSpecialCharacter,
  isPwTooLong,
  isPwTooShort,
  pwAvailable,
} from '../../../../../util/signup/Validation';
import { PasswordInputProps, PasswordInputRef } from '../SignupType';

const PasswordInput: React.ForwardRefRenderFunction<PasswordInputRef, PasswordInputProps> = (
  { onValidPassword },
  ref,
) => {
  const [inputPw, setInputPw] = useState<string>('');
  const [pwMessage, setPwMessage] = useState<string>('');
  const [isPw, setIsPw] = useState<boolean>(false);
  const [isVisiblePwd, setIsVisiblePwd] = useState<boolean>(false);

  const onChangePw = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputPw(e.target.value);
    const currentValue: string = e.target.value;
    if (pwAvailable(currentValue)) {
      setPwMessage('');
      setIsPw(true);
    } else {
      setIsPw(false);
    }
  }, []);
  const onBlurPw = (): void => {
    const currentValue: string = inputPw;
    if (isBlank(currentValue)) {
      setPwMessage('비밀번호는 필수 입력 정보입니다.');
      setIsPw(false);
      return;
    }
    setPwMessage('');
    if (!isPwContainsCharacter(currentValue)) {
      setPwMessage('비밀번호는 1개 이상의 영문자를 포함해야 합니다.');
      setIsPw(false);
      return;
    }
    setPwMessage('');
    if (!isPwContainsNumber(currentValue)) {
      setPwMessage('비밀번호는 1개 이상의 숫자를 포함해야 합니다.');
      setIsPw(false);
      return;
    }
    setPwMessage('');
    if (!isPwContainsSpecialCharacter(currentValue)) {
      setPwMessage('비밀번호는 1개 이상의 특수문자를 포함해야 합니다.');
      setIsPw(false);
      return;
    }
    setPwMessage('');
    if (isPwTooLong(currentValue)) {
      setPwMessage('비밀번호는 20자 이하 8자 이상이어야 합니다.');
      setIsPw(false);
      return;
    }
    setPwMessage('');
    if (isPwTooShort(currentValue)) {
      setPwMessage('비밀번호는 8자 이상 20자 이하이어야 합니다.');
      setIsPw(false);
      return;
    }
    setPwMessage('');
    setIsPw(true);
    onValidPassword({ password: inputPw, passwordValid: true });
  };
  const toggleVisiblePwd = (): void => {
    setIsVisiblePwd(!isVisiblePwd);
  };
  useImperativeHandle(
    ref,
    () => ({
      getPassword: (): string => inputPw,
      isValid: (): boolean => isPw,
    }),
    [inputPw, isPw],
  );

  return (
    <>
      <TextField
        label="비밀번호"
        variant="outlined"
        color="secondary"
        type={isVisiblePwd ? 'text' : 'password'}
        placeholder="영문자, 숫자, 특수문자 포함 8~20자"
        value={inputPw}
        onChange={onChangePw}
        onBlur={onBlurPw}
        error={!isPw && pwMessage !== ''}
        helperText={!isPw ? pwMessage : ''}
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
          endAdornment: inputPw ? (
            <InputAdornment position="end">
              <IconButton color="secondary" onClick={toggleVisiblePwd} edge="end">
                {isVisiblePwd ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ) : null, // 비밀번호 입력이 있을 때만 아이콘을 표시
        }}
      />
    </>
  );
};
export default React.memo(forwardRef(PasswordInput));
