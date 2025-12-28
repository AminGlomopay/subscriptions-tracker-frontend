import { useSuspenseQuery } from '@tanstack/react-query';
import { companyQueryKeys } from '../constants';
import { getCompanies } from '../apis/company.api';

export const useCompanies = () => {
  const { data } = useSuspenseQuery({
    queryKey: [companyQueryKeys.getCompanies],
    queryFn: getCompanies,
  });

  return data;
};
