import { CostHeadsListPage } from '@/features/cost-head/public';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/(dashboard)/_layout/cost-heads/')({
  component: CostHeadsListPage,
});
