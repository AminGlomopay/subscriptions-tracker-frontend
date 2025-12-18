import { useMutation, useQueryClient } from '@tanstack/react-query';

import { createCostHead } from '../apis/cost-head.api';
import { costHeadQueryKeys } from '../constants';
import { TCreateCostHeadSchema } from '../validations/cost-head.validation';

export const useCreateCostHead = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: TCreateCostHeadSchema) => createCostHead(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [costHeadQueryKeys.getCostHeads],
      });
    },
  });
};
