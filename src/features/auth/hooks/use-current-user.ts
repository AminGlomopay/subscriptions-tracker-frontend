import { useSuspenseQuery } from '@tanstack/react-query';

import { getCurrentUser } from '../apis/auth.api';
import { authQueryKeys } from '../constants';

export const useCurrentUser = () => {
  const { data } = useSuspenseQuery({
    queryKey: [authQueryKeys.currentUser],
    queryFn: getCurrentUser,
    retry: false,
    staleTime: Infinity,
    gcTime: Infinity,
  });

  return { user: data };
};
