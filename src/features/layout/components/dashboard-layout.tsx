import { FC, PropsWithChildren } from 'react';
import { Outlet } from '@tanstack/react-router';
import { SidebarProvider } from '@/ui/sidebar';
import { DashboardSidebar } from './dashboard-sidebar';
import { DashboardTopBar } from './dashboard-top-bar';

export const DashboardLayout: FC<PropsWithChildren> = () => {
  return (
    <SidebarProvider>
      <div className='grid grid-cols-[1fr_10fr] h-dvh overflow-y-clip bg-gray-100'>
        <div className='col-span-full'>
          <DashboardTopBar />
        </div>

        <DashboardSidebar />
        <Outlet />
      </div>
    </SidebarProvider>
  );
};
