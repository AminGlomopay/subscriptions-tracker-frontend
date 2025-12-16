import { QueryFunction } from '@tanstack/react-query';

import { apiClient } from '@/lib/api-client';

export const getDepartments: QueryFunction = async () => {
  const data = await apiClient.get('/v1/departments');
  return data;
};
