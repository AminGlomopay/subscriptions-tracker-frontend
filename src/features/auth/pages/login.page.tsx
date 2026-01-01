import { LoginForm } from '../components/login-form';

export const LoginPage = () => {
  return (
    <div className='h-dvh flex items-center justify-center bg-gray-100'>
      <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-md'>
        <div className='text-center mb-6'>
          <h1 className='text-2xl font-bold'>Login</h1>
          <p className='text-gray-600 mt-2'>Sign in to your account</p>
        </div>

        <LoginForm />
      </div>
    </div>
  );
};
