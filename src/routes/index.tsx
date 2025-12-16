import { createFileRoute } from '@tanstack/react-router';
import { DashboardLayout } from '../features/layout/public';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <DashboardLayout>
      <div className='p-2'>
        <h3>Welcome Home!</h3>
      </div>
    </DashboardLayout>
  );
}
