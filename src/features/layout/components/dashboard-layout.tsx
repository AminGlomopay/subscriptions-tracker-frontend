import { FC, PropsWithChildren } from 'react';
import { Outlet } from '@tanstack/react-router';

import { DashboardSidebar } from './dashboard-sidebar';
import { DashboardTopBar } from './dashboard-top-bar';

export const DashboardLayout: FC<PropsWithChildren> = () => {
  return (
    <div className='h-dvh grid grid-cols-[15rem_1fr] grid-rows-[min-content_1fr]'>
      <div className='row-span-full'>
        <DashboardSidebar />
      </div>

      <DashboardTopBar />

      <div className='bg-gray-100 p-6'>
        <Outlet />
      </div>
    </div>
  );
};
