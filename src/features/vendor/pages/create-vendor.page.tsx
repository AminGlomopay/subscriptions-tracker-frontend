import { FC, Suspense } from 'react';
import { Link } from '@tanstack/react-router';

import { CreateVendorForm } from '../components/create-vendor-form';
import { Button } from '@/ui/button';

export const CreateVendorPage: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className='max-w-2xl'>
        <div className='mb-6'>
          <Button variant='ghost' size='sm' asChild>
            <Link to='/vendors'>← Back to Vendors</Link>
          </Button>
        </div>
        <h1 className='text-2xl font-bold mb-6'>Create Vendor</h1>
        <CreateVendorForm />
      </div>
    </Suspense>
  );
};
