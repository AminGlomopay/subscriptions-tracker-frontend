import { FC, Suspense } from 'react';

import { DepartmentsList } from '../components/departments-list';
import { Button } from '@/ui/button';

export const DepartmentsListPage: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <div className='flex justify-between mb-10'>
          <h1>Departments</h1>

          <Button>Create department</Button>
        </div>

        <DepartmentsList />
      </div>
    </Suspense>
  );
};
