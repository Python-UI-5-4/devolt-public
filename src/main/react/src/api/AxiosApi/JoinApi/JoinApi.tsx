import axios, { AxiosPromise } from 'axios';

import type { UserJoin, VerifyEmail, VerifyOtp, Validate } from './JoinApiTypes';
import type { CheckResponse } from '../../../types/CommonTypes';

import config from '../../config';

const SPRING_DOMAIN = `${config.apiUrl}`;

const JoinApi = {
  join: async (request: UserJoin): AxiosPromise<CheckResponse> => {
    // requestBody
    const response = await axios.post<CheckResponse>(SPRING_DOMAIN + '/auth/join', request);
    return response;
  },
  validate: async (params: Validate): AxiosPromise<CheckResponse> => {
    // requestParam
    const response = await axios.post<CheckResponse>(SPRING_DOMAIN + '/auth/join/validate', null, {
      params,
    });
    return response;
  },
  verifyemail: async (params: VerifyEmail): AxiosPromise<CheckResponse> => {
    const response = await axios.post<CheckResponse>(SPRING_DOMAIN + '/auth/join/verify', null, {
      params,
    });
    return response;
  },
  verifyotp: async (request: VerifyOtp): AxiosPromise<CheckResponse> => {
    const { otp, email } = request;
    const encodedemail = encodeURIComponent(email);
    const response = await axios.post<CheckResponse>(
      SPRING_DOMAIN + `/auth/join/${otp}/${encodedemail}`,
    );
    return response;
  },
};
export default JoinApi;
