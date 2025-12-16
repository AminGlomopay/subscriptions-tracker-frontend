import { FC } from 'react';
import { Link } from '@tanstack/react-router';

import { CreateDepartmentForm } from '../components/create-department-form';
import { Button } from '@/ui/button';

export const CreateDepartmentPage: FC = () => {
  return (
    <div className='max-w-2xl'>
      <div className='mb-6'>
        <Button variant='ghost' size='sm' asChild>
          <Link to='/departments'>← Back to Departments</Link>
        </Button>
      </div>
      <h1 className='text-2xl font-bold mb-6'>Create Department</h1>
      <CreateDepartmentForm />
    </div>
  );
};
