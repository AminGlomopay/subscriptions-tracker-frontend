import { FC, Suspense } from 'react';
import { Link } from '@tanstack/react-router';

import { CreateEmployeeForm } from '../components/create-employee-form';
import { Button } from '@/ui/button';

export const CreateEmployeePage: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className='max-w-2xl'>
        <div className='mb-6'>
          <Button variant='ghost' size='sm' asChild>
            <Link to='/employees'>← Back to Employees</Link>
          </Button>
        </div>
        <h1 className='text-2xl font-bold mb-6'>Create Employee</h1>
        <CreateEmployeeForm />
      </div>
    </Suspense>
  );
};
