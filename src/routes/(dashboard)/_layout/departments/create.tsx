import { createFileRoute } from '@tanstack/react-router';

import { CreateDepartmentPage } from '@/features/department/public';

export const Route = createFileRoute('/(dashboard)/_layout/departments/create')({
  component: CreateDepartmentPage,
});
