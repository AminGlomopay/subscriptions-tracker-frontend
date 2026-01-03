import { createFileRoute } from '@tanstack/react-router';
import { LoginPage } from '@/features/auth/public';

type LoginSearch = {
  redirect?: string;
};

export const Route = createFileRoute('/login')({
  validateSearch: (search: Record<string, unknown>): LoginSearch => ({
    redirect: (search.redirect as string) || '/',
  }),
  component: LoginPage,
});
