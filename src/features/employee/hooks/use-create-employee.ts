import { useMutation, useQueryClient } from '@tanstack/react-query';

import { createEmployee } from '../apis/employee.api';
import { employeeQueryKeys } from '../constants';
import { TCreateEmployeeSchema } from '../validations/employee.validation';

export const useCreateEmployee = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: TCreateEmployeeSchema) => createEmployee(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [employeeQueryKeys.getEmployees],
      });
    },
  });
};
