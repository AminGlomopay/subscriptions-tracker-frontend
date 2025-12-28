import { useMutation, useQueryClient } from '@tanstack/react-query';

import { createVendor } from '../apis/vendor.api';
import { vendorQueryKeys } from '../constants';
import { TCreateVendorSchema } from '../validations/vendor.validation';

export const useCreateVendor = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: TCreateVendorSchema) => createVendor(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [vendorQueryKeys.getVendors],
      });
    },
  });
};
