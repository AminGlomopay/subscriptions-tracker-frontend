import { QueryFunction } from '@tanstack/react-query';

import { apiClient } from '@/lib/api-client';
import {
  TCompany,
  TCompaniesListApiResponse,
} from '../types/company.types';
import { TCreateCompanySchema } from '../validations/company.validation';

export const getCompanies: QueryFunction<
  TCompaniesListApiResponse
> = async () => {
  const data = await apiClient.get('/v1/companies');
  return data;
};

export const createCompany = async (
  body: TCreateCompanySchema
): Promise<TCompany> => {
  const data = await apiClient.post('/v1/companies', body);
  return data;
};
