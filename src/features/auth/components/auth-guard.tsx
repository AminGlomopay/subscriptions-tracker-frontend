import { FC, PropsWithChildren, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Navigate } from '@tanstack/react-router';

import { useCurrentUser } from '../hooks/use-current-user';

export const AuthGuard: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ErrorBoundary fallback={<AuthError />}>
      <Suspense fallback={<AuthLoader />}>
        <CurrentUserConsumer>{children}</CurrentUserConsumer>
      </Suspense>
    </ErrorBoundary>
  );
};

const CurrentUserConsumer: FC<PropsWithChildren> = ({ children }) => {
  useCurrentUser();

  return children;
};

const AuthLoader: FC = () => {
  return <div>Loading...</div>;
};

const AuthError: FC = () => {
  return <Navigate to='/login' />;
};
