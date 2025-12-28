import { VendorsListPage } from '@/features/vendor/public';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/(dashboard)/_layout/vendors/')({
  component: VendorsListPage,
});
