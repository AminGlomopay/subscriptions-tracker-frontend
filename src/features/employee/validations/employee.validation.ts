import { z } from 'zod';

export const createEmployeeSchema = z.object({
  name: z.string().min(1, 'Employee name is required'),
  email: z.string().email('Invalid email address'),
  departmentId: z.number().min(1, 'Department is required'),
});

export type TCreateEmployeeSchema = z.infer<typeof createEmployeeSchema>;
