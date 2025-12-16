import { useMutation, useQueryClient } from '@tanstack/react-query';

import { createDepartment } from '../apis/department.api';
import { departmentQueryKeys } from '../constants';
import { TCreateDepartmentSchema } from '../validations/department.validation';

export const useCreateDepartment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: TCreateDepartmentSchema) => createDepartment(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [departmentQueryKeys.getDepartments],
      });
    },
  });
};
