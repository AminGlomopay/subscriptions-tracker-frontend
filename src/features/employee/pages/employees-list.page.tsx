import { FC, Suspense } from 'react';
import { Link } from '@tanstack/react-router';

import { EmployeesList } from '../components/employees-list';
import { Button } from '@/ui/button';

export const EmployeesListPage: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <div className='flex justify-between mb-10'>
          <h1>Employees</h1>

          <Button asChild>
            <Link to='/employees/create'>Create employee</Link>
          </Button>
        </div>

        <EmployeesList />
      </div>
    </Suspense>
  );
};
