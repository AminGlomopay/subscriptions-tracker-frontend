import { useSuspenseQuery } from '@tanstack/react-query';
import { vendorQueryKeys } from '../constants';
import { getVendors } from '../apis/vendor.api';

export const useVendors = () => {
  const { data } = useSuspenseQuery({
    queryKey: [vendorQueryKeys.getVendors],
    queryFn: getVendors,
  });

  return data;
};
