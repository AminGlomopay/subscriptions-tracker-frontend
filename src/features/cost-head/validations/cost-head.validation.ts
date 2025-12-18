import { z } from 'zod';

export const createCostHeadSchema = z.object({
  name: z.string().min(1, 'Cost head name is required'),
});

export type TCreateCostHeadSchema = z.infer<typeof createCostHeadSchema>;
