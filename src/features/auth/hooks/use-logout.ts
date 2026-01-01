import { useMutation, useQueryClient } from '@tanstack/react-query';
import { logoutApi } from '../apis/auth.api';
import { authQueryKeys } from '../constants';

export const useLogout = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.setQueryData([authQueryKeys.currentUser], null);
      queryClient.invalidateQueries({ queryKey: [authQueryKeys.currentUser] });
    },
  });
};
