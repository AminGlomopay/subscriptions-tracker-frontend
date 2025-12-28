import { createFileRoute } from '@tanstack/react-router';

import { CreateCompanyPage } from '@/features/company/public';

export const Route = createFileRoute('/(dashboard)/_layout/companies/create')({
  component: CreateCompanyPage,
});
