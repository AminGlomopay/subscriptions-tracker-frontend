import { useMutation } from '@tanstack/react-query';
import { loginApi } from '../apis/auth.api';
import type { TLoginRequest } from '../types/auth.types';

export const useLogin = () => {
  return useMutation({
    mutationFn: (credentials: TLoginRequest) => loginApi(credentials),
  });
};
