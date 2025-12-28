import { createFileRoute } from '@tanstack/react-router';

import { CreateInvoicePage } from '@/features/invoice/public';

export const Route = createFileRoute('/(dashboard)/_layout/invoices/create')({
  component: CreateInvoicePage,
});
