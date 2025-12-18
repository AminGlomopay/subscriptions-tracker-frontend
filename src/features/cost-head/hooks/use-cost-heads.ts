import { useSuspenseQuery } from '@tanstack/react-query';
import { costHeadQueryKeys } from '../constants';
import { getCostHeads } from '../apis/cost-head.api';

export const useCostHeads = () => {
  const { data } = useSuspenseQuery({
    queryKey: [costHeadQueryKeys.getCostHeads],
    queryFn: getCostHeads,
  });

  return data;
};
