import { FC, Suspense } from 'react';
import { Link } from '@tanstack/react-router';

import { CompaniesList } from '../components/companies-list';
import { Button } from '@/ui/button';

export const CompaniesListPage: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <div className='flex justify-between mb-10'>
          <h1>Companies</h1>

          <Button asChild>
            <Link to='/companies/create'>Create company</Link>
          </Button>
        </div>

        <CompaniesList />
      </div>
    </Suspense>
  );
};
