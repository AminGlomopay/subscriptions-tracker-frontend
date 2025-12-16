import { FC } from 'react';

import { useDepartments } from '../hooks/use-departments';

export const DepartmentsList: FC = () => {
  const departments = useDepartments();

  return <div>{JSON.stringify(departments)}</div>;
};
