export type UserLogin = {
  userId: string;
  password: string;
};

export type UserFindResponse = {
  userId: string;
  email: string;
};

export type VerifySecurity = {
  otp: number;
  email: string;
};

export type ValidateNewPassword = {
  email: string;
  newpassword: string;
};

export type ResetPassword = {
  email: string;
  newpassword: string;
};
