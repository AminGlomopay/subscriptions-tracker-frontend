import { useQuery } from '@tanstack/react-query';
import { getCurrentUser } from '../apis/auth.api';
import { authQueryKeys } from '../constants';

const FIVE_MINUTES_IN_MS = 5 * 60 * 1000;

export const useCurrentUser = () => {
  return useQuery({
    queryKey: [authQueryKeys.currentUser],
    queryFn: getCurrentUser,
    retry: false,
    staleTime: FIVE_MINUTES_IN_MS,
  });
};
