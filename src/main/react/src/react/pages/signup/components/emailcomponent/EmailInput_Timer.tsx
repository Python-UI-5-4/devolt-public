import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';

import { FloatingLeftEmailTimer } from '../../../../styles/signup/signup';
import { TimerInputProps, TimerInputRef } from '../SignupType';

const EmailInput_Timer: React.ForwardRefRenderFunction<TimerInputRef, TimerInputProps> = (
  { onValidTimer, isRunning, isEmail },
  ref,
) => {
  const [timeLeft, setTimeLeft] = useState<number>(180);
  const timeLeftRef = useRef<number>(180);
  // 타이머 업데이트 함수 (정확한 1초 단위 실행)

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      timeLeftRef.current -= 1;
      setTimeLeft(timeLeftRef.current);
      if (timeLeftRef.current <= 0) {
        clearInterval(interval);
        stopTimer();
        return;
      }
      if (!isEmail) {
        clearInterval(interval);
        resetTimer();
        return;
      }
    }, 1000);

    return (): void => {
      clearInterval(interval);
      if (isEmail) {
        clearTimer();
      } else resetTimer();
    }; // 기존 타이머 정리
  }, [isRunning, isEmail]); // 타이머 상태가 변경될 때만 실행

  const startTimer = (): void => {
    timeLeftRef.current = 180;
    setTimeLeft(180);
    onValidTimer({ isRunning: true });
  };

  const clearTimer = (): void => {
    timeLeftRef.current = 0;
    setTimeLeft(0);

    onValidTimer({
      message: '',
      isRunning: false,
      isSecurityAvailable: false,
    });
  };

  const resetTimer = (): void => {
    timeLeftRef.current = 0;
    setTimeLeft(0);

    onValidTimer({
      message: '새로운 이메일을 입력해주세요.',
      isRunning: false,
      isSecurityAvailable: false,
    });
  };

  const stopTimer = (): void => {
    timeLeftRef.current = 0;
    setTimeLeft(0);

    onValidTimer({
      message: '요청시간이 지났습니다. 다시 시도해주세요.',
      isRunning: false,
      isSecurityAvailable: false,
    });
  };

  useImperativeHandle(ref, () => ({
    startTimer,
  }));

  return (
    <FloatingLeftEmailTimer>
      {Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? `0${timeLeft % 60}` : timeLeft % 60}
    </FloatingLeftEmailTimer>
  );
};

export default React.memo(forwardRef(EmailInput_Timer));
