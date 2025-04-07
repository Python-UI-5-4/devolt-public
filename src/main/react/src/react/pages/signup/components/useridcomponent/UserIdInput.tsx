import React, { forwardRef, useCallback, useImperativeHandle, useState } from 'react';

import { TextField } from '@mui/material';

import { Validate } from '../../../../../api/AxiosApi/JoinApi/JoinApiTypes';
import {
  idAvailable,
  isBlank,
  isIdContainsKorean,
  isIdContainsSpecialCharacter,
  isIdTooLong,
  isIdTooShort,
} from '../../../../../util/signup/Validation';
import { UserIdInputProps, UserIdInputRef } from '../SignupType';

const UserIdInput: React.ForwardRefRenderFunction<UserIdInputRef, UserIdInputProps> = (
  { validate, onValidUserId },
  ref,
) => {
  const [inputUserId, setInputUserId] = useState<string>('');
  const [isUserId, setIsUserId] = useState<boolean>(false);
  const [userIdMessage, setUserIdMessage] = useState<string>('');

  const onChangeUserId = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputUserId(e.target.value);
    const currentValue: string = e.target.value;
    if (isIdContainsSpecialCharacter(currentValue)) {
      setUserIdMessage('아이디는 공백을 포함한 특수문자가 포함될 수 없습니다.');
      setIsUserId(false);
      return;
    }
    setUserIdMessage('');
    if (isIdContainsKorean(currentValue)) {
      setUserIdMessage('아이디는 한글이 포함될 수 없습니다.');
      setIsUserId(false);
      return;
    }
    setUserIdMessage('');
    if (isIdTooLong(currentValue)) {
      setUserIdMessage('아이디는 16자 이하 6자 이상이어야 합니다.');
      setIsUserId(false);
      return;
    }
    setUserIdMessage('');
    if (idAvailable(currentValue)) {
      setUserIdMessage('');
      setIsUserId(true);
    } else {
      setIsUserId(false);
    }
  }, []);
  const onBlurUserId = async (): Promise<void> => {
    const currentValue: string = inputUserId;
    const validateData: Validate = { key: 'userId', value: currentValue };
    if (isBlank(currentValue)) {
      setUserIdMessage('아이디는 필수 입력 정보입니다.');
      setIsUserId(false);
      return;
    }
    setUserIdMessage('');
    if (isIdTooShort(currentValue)) {
      setUserIdMessage('아이디는 6자 이상 16자 이하이어야 합니다.');
      setIsUserId(false);
      return;
    }
    setUserIdMessage('');
    try {
      const isIdAvailable = await validate(validateData);

      if (isIdAvailable && idAvailable(currentValue)) {
        setUserIdMessage('');
        setIsUserId(true);
        onValidUserId({ userId: inputUserId, userIdValid: true });
      } else {
        setUserIdMessage('사용할 수 없는 아이디입니다.');
        setIsUserId(false);
        onValidUserId({ userIdValid: false });
      }
    } catch (error) {
      console.error('에러 발생', error);
      setUserIdMessage('ID 확인 중 오류가 발생했습니다. 다시 시도해주세요.');
      setIsUserId(false);
      onValidUserId({ userIdValid: false });
    }
  };
  useImperativeHandle(
    ref,
    () => ({
      getUserId: (): string => inputUserId,
      isValid: (): boolean => isUserId,
    }),
    [inputUserId, isUserId],
  );

  return (
    <>
      <TextField
        label="아이디"
        variant="outlined"
        color="secondary"
        type="text"
        value={inputUserId}
        onChange={onChangeUserId}
        onBlur={onBlurUserId}
        error={!isUserId && userIdMessage !== ''}
        helperText={!isUserId ? userIdMessage : ''}
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
      />
    </>
  );
};

export default React.memo(forwardRef(UserIdInput));
