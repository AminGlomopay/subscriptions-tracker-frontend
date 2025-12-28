import { useSuspenseQuery } from '@tanstack/react-query';
import { invoiceQueryKeys } from '../constants';
import { getInvoices } from '../apis/invoice.api';

export const useInvoices = () => {
  const { data } = useSuspenseQuery({
    queryKey: [invoiceQueryKeys.getInvoices],
    queryFn: getInvoices,
  });

  return data;
};
