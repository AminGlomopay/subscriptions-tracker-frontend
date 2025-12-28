import { createFileRoute } from '@tanstack/react-router';

import { CreateVendorPage } from '@/features/vendor/public';

export const Route = createFileRoute('/(dashboard)/_layout/vendors/create')({
  component: CreateVendorPage,
});
