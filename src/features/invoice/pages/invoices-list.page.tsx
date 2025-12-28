import { FC, Suspense } from 'react';
import { Link } from '@tanstack/react-router';

import { InvoicesList } from '../components/invoices-list';
import { Button } from '@/ui/button';

export const InvoicesListPage: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <div className='flex justify-between mb-10'>
          <h1>Invoices</h1>

          <Button asChild>
            <Link to='/invoices/create'>Create invoice</Link>
          </Button>
        </div>

        <InvoicesList />
      </div>
    </Suspense>
  );
};
