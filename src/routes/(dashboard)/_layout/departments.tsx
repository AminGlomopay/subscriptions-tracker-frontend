import { DepartmentsListPage } from '@/features/department/public';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/(dashboard)/_layout/departments')({
  component: DepartmentsListPage,
});
