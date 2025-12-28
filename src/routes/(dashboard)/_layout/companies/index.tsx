import { CompaniesListPage } from '@/features/company/public';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/(dashboard)/_layout/companies/')({
  component: CompaniesListPage,
});
