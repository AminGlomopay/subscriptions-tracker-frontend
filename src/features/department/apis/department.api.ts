import { QueryFunction } from '@tanstack/react-query';

import { apiClient } from '@/lib/api-client';
import { TDepartmentsListApiResponse } from '../types/department.types';

export const getDepartments: QueryFunction<
  TDepartmentsListApiResponse
> = async () => {
  const data = await apiClient.get('/v1/departments');
  return data;
};
