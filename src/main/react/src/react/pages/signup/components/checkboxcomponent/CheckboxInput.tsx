import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';

import { Checkbox } from '@mui/material';

import {
  FloatingLeftCheckboxContainer,
  FloatingLeftCheckAllBox,
  FloatingLeftCheckEachBox,
  FloatingLeftCheckboxText,
  FloatingLeftCheckboxLink,
} from '../../../../styles/signup/signup';
import { CheckboxInputProps, CheckboxInputRef } from '../SignupType';

const CheckboxInput: React.ForwardRefRenderFunction<CheckboxInputRef, CheckboxInputProps> = (
  { onValidIsAvailable },
  ref,
) => {
  const [isCheckedAll, setIsCheckedAll] = useState<boolean>(false);
  const [isCheckedTerms, setIsCheckedTerms] = useState<boolean>(false);
  const [isCheckedUses, setIsCheckedUses] = useState<boolean>(false);
  const [isChecked14, setIsChecked14] = useState<boolean>(false);
  const [isCheckedMarketing, setIsCheckedMarketing] = useState<boolean>(false);

  // 전체 동의 누를 시 모든 체크박스 선택
  const handleCheckAllBox = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setIsCheckedAll(e.target.checked);
    setIsCheckedTerms(e.target.checked);
    setIsCheckedUses(e.target.checked);
    setIsChecked14(e.target.checked);
    setIsCheckedMarketing(e.target.checked);
  };
  // 전체 동의 누르지 않고 체크 박스 전부 체크/해제 시 전체 동의 란의 상태 결정
  useEffect(() => {
    if (!isCheckedTerms && !isCheckedUses && !isChecked14 && !isCheckedMarketing) {
      setIsCheckedAll(false);
    } else if (isCheckedTerms && isCheckedUses && isChecked14 && isCheckedMarketing) {
      setIsCheckedAll(true);
    }
    if (isCheckedTerms && isCheckedUses) {
      onValidIsAvailable({ isAvailable: true });
    } else {
      onValidIsAvailable({ isAvailable: false });
    }
  }, [isCheckedTerms, isCheckedUses, isChecked14, isCheckedMarketing, onValidIsAvailable]);

  const handleCheckTermsBox = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setIsCheckedTerms(e.target.checked);
  };

  const handleCheckUsesBox = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setIsCheckedUses(e.target.checked);
  };

  const handleCheck14Box = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setIsChecked14(e.target.checked);
  };

  const handleCheckMarketingBox = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setIsCheckedMarketing(e.target.checked);
  };

  useImperativeHandle(
    ref,
    () => ({
      get isAvailable(): boolean {
        return isCheckedTerms && isCheckedUses;
      },
    }),
    [isCheckedTerms, isCheckedUses],
  );

  // 텍스트 클릭 시 체크박스 상태 토글
  const handleTextClick = (checkbox: string): void => {
    switch (checkbox) {
      case 'all':
        setIsCheckedAll((prev) => !prev);
        setIsCheckedTerms((prev) => !prev);
        setIsCheckedUses((prev) => !prev);
        setIsChecked14((prev) => !prev);
        setIsCheckedMarketing((prev) => !prev);
        break;
      case 'terms':
        setIsCheckedTerms((prev) => !prev);
        break;
      case 'uses':
        setIsCheckedUses((prev) => !prev);
        break;
      case '14':
        setIsChecked14((prev) => !prev);
        break;
      case 'marketing':
        setIsCheckedMarketing((prev) => !prev);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <FloatingLeftCheckboxContainer>
        <FloatingLeftCheckAllBox>
          <Checkbox
            size="small"
            color="secondary"
            id="agreeall"
            checked={isCheckedAll}
            onChange={handleCheckAllBox}
            sx={{ padding: '0' }}
          />
          <FloatingLeftCheckboxText onClick={() => handleTextClick('all')}>
            전체동의
          </FloatingLeftCheckboxText>
        </FloatingLeftCheckAllBox>
        <FloatingLeftCheckEachBox>
          <Checkbox
            size="small"
            color="secondary"
            id="agreeterms"
            checked={isCheckedTerms}
            onChange={handleCheckTermsBox}
            sx={{ padding: '0' }}
          />
          <FloatingLeftCheckboxText onClick={() => handleTextClick('terms')}>
            <FloatingLeftCheckboxLink to="../legal/Terms" target="_blank">
              이용약관
            </FloatingLeftCheckboxLink>{' '}
            동의
          </FloatingLeftCheckboxText>
        </FloatingLeftCheckEachBox>
        <FloatingLeftCheckEachBox>
          <Checkbox
            size="small"
            color="secondary"
            id="agreeuses"
            checked={isCheckedUses}
            onChange={handleCheckUsesBox}
            sx={{ padding: '0' }}
          />
          <FloatingLeftCheckboxText onClick={() => handleTextClick('uses')}>
            <FloatingLeftCheckboxLink to="../legal/Privacy" target="_blank">
              개인정보 수집 및 이용
            </FloatingLeftCheckboxLink>{' '}
            동의
          </FloatingLeftCheckboxText>
        </FloatingLeftCheckEachBox>
        <FloatingLeftCheckEachBox>
          <Checkbox
            size="small"
            color="secondary"
            id="agree14"
            checked={isChecked14}
            onChange={handleCheck14Box}
            sx={{ padding: '0' }}
          />
          <FloatingLeftCheckboxText onClick={() => handleTextClick('14')}>
            <b>[선택]</b>
            &nbsp;만 14세 이상입니다.
          </FloatingLeftCheckboxText>
        </FloatingLeftCheckEachBox>
        <FloatingLeftCheckEachBox>
          <Checkbox
            size="small"
            color="secondary"
            id="agreemarketing"
            checked={isCheckedMarketing}
            onChange={handleCheckMarketingBox}
            sx={{ padding: '0' }}
          />
          <FloatingLeftCheckboxText onClick={() => handleTextClick('marketing')}>
            <b>[선택]</b>
            &nbsp;마케팅 활용 동의 및 광고 수신 동의
          </FloatingLeftCheckboxText>
        </FloatingLeftCheckEachBox>
      </FloatingLeftCheckboxContainer>
    </>
  );
};

export default React.memo(forwardRef(CheckboxInput));
