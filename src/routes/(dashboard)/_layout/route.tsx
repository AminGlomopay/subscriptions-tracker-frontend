import { Outlet, createFileRoute } from '@tanstack/react-router';

import { AuthGuard } from '@/features/auth/public';
import { DashboardLayout } from '@/features/layout/public';
import { ErrorBoundary } from 'react-error-boundary';

export const Route = createFileRoute('/(dashboard)/_layout')({
  component: LayoutComponent,
});

function LayoutComponent() {
  return (
    <AuthGuard>
      <DashboardLayout>
        <ErrorBoundary fallback={<div>Something went wrong.</div>}>
          <Outlet />
        </ErrorBoundary>
      </DashboardLayout>
    </AuthGuard>
  );
}
