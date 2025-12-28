import { z } from 'zod';

export const createVendorSchema = z.object({
  name: z.string().min(1, 'Vendor name is required'),
  country: z.string().min(1, 'Country is required'),
  taxId: z.string().min(1, 'Tax ID is required'),
  isTaxClaimable: z.boolean(),
  vendorType: z.string().min(1, 'Vendor type is required'),
  status: z.string().min(1, 'Status is required'),
  isScrutVerified: z.boolean(),
  isAgreementSigned: z.boolean(),
  companyIds: z.array(z.number()).min(1, 'At least one company must be selected'),
});

export type TCreateVendorSchema = z.infer<typeof createVendorSchema>;
