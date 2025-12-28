import { QueryFunction } from '@tanstack/react-query';

import { apiClient } from '@/lib/api-client';
import {
  TInvoice,
  TInvoicesListApiResponse,
} from '../types/invoice.types';
import { TCreateInvoiceSchema } from '../validations/invoice.validation';

export const getInvoices: QueryFunction<
  TInvoicesListApiResponse
> = async () => {
  const data = await apiClient.get('/v1/invoices');
  return data;
};

export const createInvoice = async (
  body: TCreateInvoiceSchema
): Promise<TInvoice> => {
  const data = await apiClient.post('/v1/invoices', body);
  return data;
};
