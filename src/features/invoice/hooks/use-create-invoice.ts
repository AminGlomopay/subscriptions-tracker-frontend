import { useMutation, useQueryClient } from '@tanstack/react-query';

import { createInvoice } from '../apis/invoice.api';
import { invoiceQueryKeys } from '../constants';
import { TCreateInvoiceSchema } from '../validations/invoice.validation';

export const useCreateInvoice = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: TCreateInvoiceSchema) => createInvoice(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [invoiceQueryKeys.getInvoices],
      });
    },
  });
};
