import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import '../styles/index.css';
import { QueryClientProvider } from '@/shared/query-client/public';

const RootLayout = () => (
  <QueryClientProvider>
    <Outlet />
    <TanStackRouterDevtools />
    <ReactQueryDevtools />
  </QueryClientProvider>
);

export const Route = createRootRoute({ component: RootLayout });
