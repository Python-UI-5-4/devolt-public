import { Validate, VerifyEmail, VerifyOtp } from '../../../../api/AxiosApi/JoinApi/JoinApiTypes';
import { useAppDispatch } from '../../../../redux/hooks/reduxHooks';

export type UserIdInputType = {
  userId?: string;
  userIdValid?: boolean;
};

export type UserIdInputProps = {
  validate: (params: Validate) => Promise<boolean | string>;
  onValidUserId: (args: UserIdInputType) => void;
};

export type UserIdInputRef = {
  getUserId: () => string;
  isValid: () => boolean;
};

export type PasswordInputType = {
  password?: string;
  passwordValid?: boolean;
};

export type PasswordInputProps = {
  onValidPassword: (args: PasswordInputType) => void;
};

export type PasswordInputRef = {
  getPassword: () => string;
  isValid: () => boolean;
};

export type ConPasswordInputType = {
  conPassword?: string;
  conPasswordValid?: boolean;
};

export type ConPasswordInputProps = {
  finalPassword: string;
  onValidConPassword: (args: ConPasswordInputType) => void;
};

export type ConPasswordInputRef = {
  getConPassword: () => string;
  isValid: () => boolean;
};

export type EmailInputType = {
  email?: string;
  emailValid?: boolean;
  message?: string;
  isSecurityAvailable?: boolean;
  runningValid?: boolean;
  isSubmitting?: boolean;
};

export type EmailInputProps = {
  validate: (params: Validate) => Promise<boolean | string>;
  verifyemail: (params: VerifyEmail) => Promise<boolean | null>;
  dispatch: ReturnType<typeof useAppDispatch>;
  onValidEmail: (args: EmailInputType) => void;
  isSecurityAvailable: boolean;
  isEmailAvailable: boolean;
  isSecurity: boolean;
  isRunning: boolean;
  isSubmitting: boolean;
};

export type EmailInputRef = {
  getEmail: () => string;
  getEmailValid: () => boolean;
};

export type SecurityInputType = {
  security?: string;
  securityValid?: boolean;
  isSecurityAvailable?: boolean;
  securityMessage?: string;
  isEmailAvailable?: boolean;
  runningValid?: boolean;
  isSubmitting?: boolean;
};

export type SecurityInputProps = {
  verifyotp: (request: VerifyOtp) => Promise<boolean | null>;
  dispatch: ReturnType<typeof useAppDispatch>;
  isSecurityAvailable: boolean;
  finalEmail: string;
  securityMessage: string;
  isSubmitting: boolean;
  onValidSecurity: (args: SecurityInputType) => void;
};

export type SecurityInputRef = {
  getSecurity: () => string;
};

export type TimerInputType = {
  message?: string;
  isRunning?: boolean;
  isSecurityAvailable?: boolean;
};

export type TimerInputProps = {
  onValidTimer: (args: TimerInputType) => void;
  isRunning: boolean;
  isEmail: boolean;
};

export type TimerInputRef = {
  startTimer: () => void;
};

export type NicknameInputType = {
  nickname?: string;
  nicknameValid?: boolean;
};

export type NicknameInputProps = {
  validate: (params: Validate) => Promise<boolean | string>;
  onValidNickname: (args: NicknameInputType) => void;
};

export type NicknameInputRef = {
  getNickname: () => string;
  isNicknameValid: () => boolean;
};

export type CheckboxInputType = {
  isAvailable?: boolean;
};

export type CheckboxInputProps = {
  onValidIsAvailable: (args: CheckboxInputType) => void;
};

export type CheckboxInputRef = {
  readonly isAvailable: boolean;
};
