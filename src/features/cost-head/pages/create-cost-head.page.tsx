import { FC, Suspense } from 'react';
import { Link } from '@tanstack/react-router';

import { CreateCostHeadForm } from '../components/create-cost-head-form';
import { Button } from '@/ui/button';

export const CreateCostHeadPage: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className='max-w-2xl'>
        <div className='mb-6'>
          <Button variant='ghost' size='sm' asChild>
            <Link to='/cost-heads'>← Back to Cost Heads</Link>
          </Button>
        </div>
        <h1 className='text-2xl font-bold mb-6'>Create Cost Head</h1>
        <CreateCostHeadForm />
      </div>
    </Suspense>
  );
};
