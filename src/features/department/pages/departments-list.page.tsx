import { FC, Suspense } from 'react';

import { DepartmentsList } from '../components/departments-list';

export const DepartmentsListPage: FC = () => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <DepartmentsList />
    </Suspense>
  );
};
