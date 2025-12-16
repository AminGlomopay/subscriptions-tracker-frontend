import { QueryClientProvider as TanstackQueryClientProvider } from '@tanstack/react-query';
import { FC, PropsWithChildren } from 'react';

import { queryClient } from './query-client.config';

export const QueryClientProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <TanstackQueryClientProvider client={queryClient}>
      {children}
    </TanstackQueryClientProvider>
  );
};
