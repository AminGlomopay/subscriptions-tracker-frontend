import { DashboardLayout } from '@/features/layout/public';
import { Outlet, createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/(dashboard)/_layout')({
  component: LayoutComponent,
});

function LayoutComponent() {
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
}
