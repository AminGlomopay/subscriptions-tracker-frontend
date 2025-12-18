import { createFileRoute } from '@tanstack/react-router';

import { CreateCostHeadPage } from '@/features/cost-head/public';

export const Route = createFileRoute('/(dashboard)/_layout/cost-heads/create')({
  component: CreateCostHeadPage,
});
