export type TUserRole = 'ADMIN';

export type TUser = {
  id: number;
  email: string;
  name: string;
  role: TUserRole;
  createdAt: string;
  updatedAt: string;
};

export type TLoginRequest = {
  email: string;
  password: string;
};

export type TLoginResponse = {
  accessToken: string;
  refreshToken: string;
  user: TUser;
};
