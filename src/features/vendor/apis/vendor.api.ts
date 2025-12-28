import { QueryFunction } from '@tanstack/react-query';

import { apiClient } from '@/lib/api-client';
import {
  TVendor,
  TVendorsListApiResponse,
} from '../types/vendor.types';
import { TCreateVendorSchema } from '../validations/vendor.validation';

export const getVendors: QueryFunction<
  TVendorsListApiResponse
> = async () => {
  const data = await apiClient.get('/v1/vendors');
  return data;
};

export const createVendor = async (
  body: TCreateVendorSchema
): Promise<TVendor> => {
  const data = await apiClient.post('/v1/vendors', body);
  return data;
};
