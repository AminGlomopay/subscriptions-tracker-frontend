import { QueryFunction } from '@tanstack/react-query';

import { apiClient } from '@/lib/api-client';
import {
  TEmployee,
  TEmployeesListApiResponse,
} from '../types/employee.types';
import { TCreateEmployeeSchema } from '../validations/employee.validation';

export const getEmployees: QueryFunction<
  TEmployeesListApiResponse
> = async () => {
  const data = await apiClient.get('/v1/employees');
  return data;
};

export const createEmployee = async (
  body: TCreateEmployeeSchema
): Promise<TEmployee> => {
  const data = await apiClient.post('/v1/employees', body);
  return data;
};
