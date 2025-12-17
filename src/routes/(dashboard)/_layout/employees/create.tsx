import { createFileRoute } from '@tanstack/react-router';

import { CreateEmployeePage } from '@/features/employee/public';

export const Route = createFileRoute('/(dashboard)/_layout/employees/create')({
  component: CreateEmployeePage,
});
