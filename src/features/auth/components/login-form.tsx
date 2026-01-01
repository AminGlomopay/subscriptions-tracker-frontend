import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate, useSearch } from '@tanstack/react-router';
import { useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

import { Button } from '@/ui/button';
import { Input } from '@/ui/input';
import { Label } from '@/ui/label';
import { useLogin } from '../hooks/use-login';
import { loginSchema, type TLoginSchema } from '../validations/auth.validation';
import { authQueryKeys } from '../constants';

export const LoginForm = () => {
  const navigate = useNavigate();
  const search = useSearch({ from: '/login' });
  const { mutate: login, isPending } = useLogin();
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: TLoginSchema) => {
    login(data, {
      onSuccess: (response) => {
        queryClient.setQueryData([authQueryKeys.currentUser], response.user);
        toast.success('Login successful');
        navigate({ to: search.redirect || '/' });
      },
      onError: (error) => {
        toast.error(error.message || 'Login failed. Please try again.');
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-4 w-full max-w-sm'>
      <div className='space-y-2'>
        <Label htmlFor='email'>Email</Label>
        <Input
          id='email'
          type='email'
          placeholder='Enter your email'
          {...register('email')}
          aria-invalid={!!errors.email}
          disabled={isPending}
        />
        {errors.email && (
          <p className='text-sm text-destructive'>{errors.email.message}</p>
        )}
      </div>

      <div className='space-y-2'>
        <Label htmlFor='password'>Password</Label>
        <Input
          id='password'
          type='password'
          placeholder='Enter your password'
          {...register('password')}
          aria-invalid={!!errors.password}
          disabled={isPending}
        />
        {errors.password && (
          <p className='text-sm text-destructive'>{errors.password.message}</p>
        )}
      </div>

      <Button type='submit' className='w-full' disabled={isPending}>
        {isPending ? 'Logging in...' : 'Login'}
      </Button>
    </form>
  );
};
