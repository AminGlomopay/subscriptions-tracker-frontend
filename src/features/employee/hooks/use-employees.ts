import { useSuspenseQuery } from '@tanstack/react-query';
import { employeeQueryKeys } from '../constants';
import { getEmployees } from '../apis/employee.api';

export const useEmployees = () => {
  const { data } = useSuspenseQuery({
    queryKey: [employeeQueryKeys.getEmployees],
    queryFn: getEmployees,
  });

  return data;
};
