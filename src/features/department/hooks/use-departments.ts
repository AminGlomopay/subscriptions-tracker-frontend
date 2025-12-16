import { useSuspenseQuery } from '@tanstack/react-query';
import { departmentQueryKeys } from '../constants';
import { getDepartments } from '../apis/department.api';

export const useDepartments = () => {
  const { data } = useSuspenseQuery({
    queryKey: [departmentQueryKeys.getDepartments],
    queryFn: getDepartments,
  });

  return data;
};
