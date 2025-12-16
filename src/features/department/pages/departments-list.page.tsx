import { FC, Suspense } from 'react';

import { DepartmentsList } from '../components/departments-list';
import { Button } from '@/ui/button';
import { Link } from '@tanstack/react-router';

export const DepartmentsListPage: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <div className='flex justify-between mb-10'>
          <h1>Departments</h1>

          <Button asChild>
            <Link to='/departments/create'>Create department</Link>
          </Button>
        </div>

        <DepartmentsList />
      </div>
    </Suspense>
  );
};
