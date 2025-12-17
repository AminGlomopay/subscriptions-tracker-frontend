import { FC } from 'react';
import { PiBank, PiHouse } from 'react-icons/pi';
import { Link, LinkProps } from '@tanstack/react-router';
import { IconType } from 'react-icons/lib';

type TSidebarLink = {
  title: string;
  url: LinkProps['to'];
  icon: IconType;
};

const items = [
  {
    title: 'Home',
    url: '/',
    icon: PiHouse,
  },
  {
    title: 'Departments',
    url: '/departments',
    icon: PiBank,
  },
  {
    title: 'Employees',
    url: '/employees',
    icon: PiBank,
  },
] satisfies Array<TSidebarLink>;

export const DashboardSidebar: FC = () => {
  return (
    <div>
      {items.map((item, idx) => (
        <Link
          key={idx}
          to={item.url}
          className='flex items-center px-4 py-2 gap-x-3'
        >
          <item.icon />

          <span>{item.title}</span>
        </Link>
      ))}
    </div>
  );
};
