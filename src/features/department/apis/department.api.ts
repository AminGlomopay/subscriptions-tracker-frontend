import { QueryFunction } from '@tanstack/react-query';

import { apiClient } from '@/lib/api-client';
import {
  TDepartment,
  TDepartmentsListApiResponse,
} from '../types/department.types';
import { TCreateDepartmentSchema } from '../validations/department.validation';

export const getDepartments: QueryFunction<
  TDepartmentsListApiResponse
> = async () => {
  const data = await apiClient.get('/v1/departments');
  return data;
};

export const createDepartment = async (
  body: TCreateDepartmentSchema
): Promise<TDepartment> => {
  const data = await apiClient.post('/v1/departments', body);
  return data;
};
