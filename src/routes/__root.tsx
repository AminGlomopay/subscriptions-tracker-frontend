import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import '../styles/index.css';
import type { TAuthContext } from '@/features/auth/public';

interface RouterContext {
  auth: TAuthContext;
}

const RootLayout = () => (
  <>
    <Outlet />
    <TanStackRouterDevtools />
    <ReactQueryDevtools />
  </>
);

export const Route = createRootRouteWithContext<RouterContext>()({ component: RootLayout });
