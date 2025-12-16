import { FC, Suspense } from 'react';

import { DepartmentsList } from '../components/departments-list';

export const DepartmentsListPage: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <h1>Departments</h1>
        <DepartmentsList />
      </div>
    </Suspense>
  );
};
