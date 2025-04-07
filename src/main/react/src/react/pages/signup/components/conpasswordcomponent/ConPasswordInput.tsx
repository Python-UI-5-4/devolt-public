import React, { forwardRef, useCallback, useImperativeHandle, useState } from 'react';

import { Visibility, VisibilityOff } from '@mui/icons-material';
import { TextField, IconButton, InputAdornment } from '@mui/material';

import { isBlank } from '../../../../../util/signup/Validation';
import { ConPasswordInputProps, ConPasswordInputRef } from '../SignupType';

const ConPasswordInput: React.ForwardRefRenderFunction<
  ConPasswordInputRef,
  ConPasswordInputProps
> = ({ finalPassword, onValidConPassword }, ref) => {
  const [inputConPw, setInputConPw] = useState<string>('');
  const [conPwMessage, setConPwMessage] = useState<string>('');
  const [isConPw, setIsConPw] = useState<boolean>(false);
  const [isVisibleConPwd, setIsVisibleConPwd] = useState<boolean>(false);

  const onChangeConPw = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      setInputConPw(e.target.value);
      const currentValue: string = e.target.value;
      if (currentValue === finalPassword) {
        setConPwMessage('');
        setIsConPw(true);
      } else {
        setIsConPw(false);
      }
    },
    [finalPassword],
  );
  const onBlurConPw = (): void => {
    const currentValue = inputConPw;
    if (isBlank(finalPassword)) {
      setConPwMessage('비밀번호 입력이 필요합니다.');
      setIsConPw(false);
      return;
    }
    setConPwMessage('');
    if (isBlank(currentValue)) {
      setConPwMessage('비밀번호 확인이 필요합니다.');
      setIsConPw(false);
      return;
    }
    setConPwMessage('');
    if (currentValue !== finalPassword) {
      setConPwMessage('비밀번호가 일치하지 않습니다.');
      setIsConPw(false);
      return;
    }
    setConPwMessage('');
    setIsConPw(true);
    onValidConPassword({ conPassword: currentValue, conPasswordValid: true });
  };
  const toggleVisibleConPwd = (): void => {
    setIsVisibleConPwd(!isVisibleConPwd);
  };
  useImperativeHandle(
    ref,
    () => ({
      getConPassword: (): string => inputConPw,
      isValid: (): boolean => isConPw,
    }),
    [inputConPw, isConPw],
  );

  return (
    <>
      <TextField
        label="비밀번호 확인"
        variant="outlined"
        color="secondary"
        type={isVisibleConPwd ? 'text' : 'password'}
        placeholder="비밀번호 확인"
        value={inputConPw}
        onChange={onChangeConPw}
        onBlur={onBlurConPw}
        error={!isConPw && conPwMessage !== ''}
        helperText={!isConPw ? conPwMessage : ''}
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
          endAdornment: inputConPw ? ( // 비밀번호 확인이 입력되었을 때만 아이콘 표시
            <InputAdornment position="end">
              <IconButton color="secondary" onClick={toggleVisibleConPwd} edge="end">
                {isVisibleConPwd ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ) : null,
        }}
      />
    </>
  );
};

export default React.memo(forwardRef(ConPasswordInput));
