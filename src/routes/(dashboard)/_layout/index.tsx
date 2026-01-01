import { createFileRoute } from '@tanstack/react-router';
import { useAuth } from '@/features/auth/public';

export const Route = createFileRoute('/(dashboard)/_layout/')({
  component: Index,
});

function Index() {
  const { user } = useAuth();

  return (
    <div className='p-2'>
      <h3>Welcome Home, {user?.name}!</h3>
    </div>
  );
}
