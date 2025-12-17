import { EmployeesListPage } from '@/features/employee/public';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/(dashboard)/_layout/employees/')({
  component: EmployeesListPage,
});
