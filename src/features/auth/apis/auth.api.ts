import { apiClient } from '@/lib/api-client';
import type { TLoginRequest, TLoginResponse, TUser } from '../types/auth.types';

export const loginApi = async (credentials: TLoginRequest) => {
  const data = await apiClient.post('/v1/auth/login', credentials);
  return data as TLoginResponse;
};

export const getCurrentUser = async () => {
  const data = await apiClient.get('/v1/users/me');
  return data as TUser;
};

export const logoutApi = async () => {
  await apiClient.post('/v1/auth/logout');
};
