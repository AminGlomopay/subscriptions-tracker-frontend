import { FC, Suspense } from 'react';
import { Link } from '@tanstack/react-router';

import { CreateCompanyForm } from '../components/create-company-form';
import { Button } from '@/ui/button';

export const CreateCompanyPage: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className='max-w-2xl'>
        <div className='mb-6'>
          <Button variant='ghost' size='sm' asChild>
            <Link to='/companies'>← Back to Companies</Link>
          </Button>
        </div>
        <h1 className='text-2xl font-bold mb-6'>Create Company</h1>
        <CreateCompanyForm />
      </div>
    </Suspense>
  );
};
