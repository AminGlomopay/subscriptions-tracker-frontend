import { FC, Suspense } from 'react';
import { Link } from '@tanstack/react-router';

import { VendorsList } from '../components/vendors-list';
import { Button } from '@/ui/button';

export const VendorsListPage: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <div className='flex justify-between mb-10'>
          <h1>Vendors</h1>

          <Button asChild>
            <Link to='/vendors/create'>Create vendor</Link>
          </Button>
        </div>

        <VendorsList />
      </div>
    </Suspense>
  );
};
