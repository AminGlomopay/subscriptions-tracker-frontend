export type TInvoice = {
  id: number;
  invoiceNumber: string;
  invoiceDate: string;
  invoiceAmount: number;
  taxAmount: number;
  totalAmount: number;
  invoiceDueDate: string;
  vendorId: number;
  costHeadId: number;
  departmentId: number;
  companyId: number;
};

export type TInvoicesListApiResponse = TInvoice[];
