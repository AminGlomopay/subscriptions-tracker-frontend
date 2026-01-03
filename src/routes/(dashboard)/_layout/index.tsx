import { createFileRoute } from '@tanstack/react-router';
import { useCurrentUser } from '@/features/auth/public';

export const Route = createFileRoute('/(dashboard)/_layout/')({
  component: Index,
});

function Index() {
  const { user } = useCurrentUser();

  return (
    <div className='p-2'>
      <h3>Welcome Home, {user.name}!</h3>
    </div>
  );
}
