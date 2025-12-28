import { z } from 'zod';

export const createInvoiceSchema = z.object({
  invoiceNumber: z.string().min(1, 'Invoice number is required'),
  invoiceDate: z.string().min(1, 'Invoice date is required'),
  invoiceAmount: z.number().min(0, 'Invoice amount must be positive'),
  taxAmount: z.number().min(0, 'Tax amount must be positive'),
  totalAmount: z.number().min(0, 'Total amount must be positive'),
  invoiceDueDate: z.string().min(1, 'Invoice due date is required'),
  vendorId: z.number().min(1, 'Vendor is required'),
  costHeadId: z.number().min(1, 'Cost head is required'),
  departmentId: z.number().min(1, 'Department is required'),
  companyId: z.number().min(1, 'Company is required'),
});

export type TCreateInvoiceSchema = z.infer<typeof createInvoiceSchema>;
