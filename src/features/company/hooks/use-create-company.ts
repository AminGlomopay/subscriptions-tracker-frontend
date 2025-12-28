import { useMutation, useQueryClient } from '@tanstack/react-query';

import { createCompany } from '../apis/company.api';
import { companyQueryKeys } from '../constants';
import { TCreateCompanySchema } from '../validations/company.validation';

export const useCreateCompany = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: TCreateCompanySchema) => createCompany(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [companyQueryKeys.getCompanies],
      });
    },
  });
};
