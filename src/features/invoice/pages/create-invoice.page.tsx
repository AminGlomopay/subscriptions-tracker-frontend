import { FC, Suspense } from 'react';
import { Link } from '@tanstack/react-router';

import { CreateInvoiceForm } from '../components/create-invoice-form';
import { Button } from '@/ui/button';

export const CreateInvoicePage: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className='max-w-2xl'>
        <div className='mb-6'>
          <Button variant='ghost' size='sm' asChild>
            <Link to='/invoices'>← Back to Invoices</Link>
          </Button>
        </div>
        <h1 className='text-2xl font-bold mb-6'>Create Invoice</h1>
        <CreateInvoiceForm />
      </div>
    </Suspense>
  );
};
