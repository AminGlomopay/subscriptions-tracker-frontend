export type TVendor = {
  id: number;
  name: string;
  country: string;
  taxId: string;
  isTaxClaimable: boolean;
  vendorType: string;
  status: string;
  isScrutVerified: boolean;
  isAgreementSigned: boolean;
  companyIds: number[];
};

export type TVendorsListApiResponse = TVendor[];
