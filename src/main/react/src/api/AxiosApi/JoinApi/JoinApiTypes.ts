export type UserJoin = {
  userId: string;
  email: string;
  password: string;
  nickname: string;
  otp: number;
};

export type Validate = {
  key: string;
  value: string;
};

export type VerifyEmail = {
  email: string;
};

export type VerifyOtp = {
  otp: number;
  email: string;
};
