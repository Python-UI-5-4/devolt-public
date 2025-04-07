import React, { forwardRef, useCallback, useImperativeHandle, useState } from 'react';

import { TextField } from '@mui/material';

import { Validate } from '../../../../../api/AxiosApi/JoinApi/JoinApiTypes';
import {
  isBlank,
  isNameContainsSpecialCharacter,
  isNameTooLong,
  isNameTooShort,
  nameAvailable,
} from '../../../../../util/signup/Validation';
import { NicknameInputProps, NicknameInputRef } from '../SignupType';

const NicknameInput: React.ForwardRefRenderFunction<NicknameInputRef, NicknameInputProps> = (
  { validate, onValidNickname },
  ref,
) => {
  const [inputName, setInputName] = useState<string>('');
  const [nameMessage, setNameMessage] = useState<string>('');
  const [isName, setIsName] = useState<boolean>(false);

  const onChangeName = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputName(e.target.value);
    const currentValue: string = e.target.value;
    if (isNameContainsSpecialCharacter(currentValue)) {
      setNameMessage('특수문자 기호는 (.),(-),(_) 만 사용 가능합니다.');
      setIsName(false);
    }
    setNameMessage('');
    if (isNameTooLong(currentValue)) {
      setNameMessage('닉네임은 16자 이하 3자 이상이어야 합니다.');
      setIsName(false);
    }
    setNameMessage('');
    if (nameAvailable(currentValue)) {
      setNameMessage('');
      setIsName(true);
    } else {
      setIsName(false);
    }
  }, []);
  const onBlurName = async (): Promise<void> => {
    const currentValue: string = inputName;
    if (isBlank(currentValue)) {
      setNameMessage('닉네임은 필수 입력 정보입니다.');
      setIsName(false);
      return;
    }
    setNameMessage('');
    if (isNameTooShort(currentValue)) {
      setNameMessage('닉네임은 3자 이상 16자 이하이어야 합니다.');
      setIsName(false);
      return;
    }
    setNameMessage('');
    const validateData: Validate = { key: 'nickname', value: currentValue };
    try {
      const isNameAvailable = await validate(validateData);
      if (isNameAvailable && nameAvailable(currentValue)) {
        setNameMessage('');
        setIsName(true);
        onValidNickname({ nickname: inputName, nicknameValid: true });
      } else {
        setNameMessage('사용할 수 없는 닉네임입니다.');
        setIsName(false);
        onValidNickname({ nicknameValid: false });
      }
    } catch (error) {
      console.error('에러 발생', error);
      setNameMessage('닉네임 확인 중 오류가 발생했습니다. 다시 시도해주세요.');
      setIsName(false);
    }
  };
  useImperativeHandle(
    ref,
    () => ({
      getNickname: (): string => inputName,
      isNicknameValid: (): boolean => isName,
    }),
    [inputName, isName],
  );

  return (
    <>
      <TextField
        label="닉네임"
        variant="outlined"
        color="secondary"
        type="text"
        value={inputName}
        onChange={onChangeName}
        onBlur={onBlurName}
        error={!isName && nameMessage !== ''}
        helperText={!isName ? nameMessage : ''}
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
export default React.memo(forwardRef(NicknameInput));
