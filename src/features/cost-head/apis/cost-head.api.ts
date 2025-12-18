import { QueryFunction } from '@tanstack/react-query';

import { apiClient } from '@/lib/api-client';
import {
  TCostHead,
  TCostHeadsListApiResponse,
} from '../types/cost-head.types';
import { TCreateCostHeadSchema } from '../validations/cost-head.validation';

export const getCostHeads: QueryFunction<
  TCostHeadsListApiResponse
> = async () => {
  const data = await apiClient.get('/v1/cost-heads');
  return data;
};

export const createCostHead = async (
  body: TCreateCostHeadSchema
): Promise<TCostHead> => {
  const data = await apiClient.post('/v1/cost-heads', body);
  return data;
};
