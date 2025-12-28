import { InvoicesListPage } from '@/features/invoice/public';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/(dashboard)/_layout/invoices/')({
  component: InvoicesListPage,
});
