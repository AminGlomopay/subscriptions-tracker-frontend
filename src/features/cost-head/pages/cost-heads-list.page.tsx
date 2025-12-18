import { FC, Suspense } from 'react';
import { Link } from '@tanstack/react-router';

import { CostHeadsList } from '../components/cost-heads-list';
import { Button } from '@/ui/button';

export const CostHeadsListPage: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <div className='flex justify-between mb-10'>
          <h1>Cost Heads</h1>

          <Button asChild>
            <Link to='/cost-heads/create'>Create cost head</Link>
          </Button>
        </div>

        <CostHeadsList />
      </div>
    </Suspense>
  );
};
