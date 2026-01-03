import { Outlet, createFileRoute } from '@tanstack/react-router';

import { AuthGuard } from '@/features/auth/public';
import { DashboardLayout } from '@/features/layout/public';

export const Route = createFileRoute('/(dashboard)/_layout')({
  component: LayoutComponent,
});

function LayoutComponent() {
  return (
    <AuthGuard>
      <DashboardLayout>
        <Outlet />
      </DashboardLayout>
    </AuthGuard>
  );
}
