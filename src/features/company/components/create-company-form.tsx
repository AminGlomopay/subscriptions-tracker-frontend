import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from '@tanstack/react-router';

import { Button } from '@/ui/button';
import { Input } from '@/ui/input';
import {
  createCompanySchema,
  TCreateCompanySchema,
} from '../validations/company.validation';
import { useCreateCompany } from '../hooks/use-create-company';

export const CreateCompanyForm: FC = () => {
  const navigate = useNavigate();
  const { mutate, isPending } = useCreateCompany();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TCreateCompanySchema>({
    resolver: zodResolver(createCompanySchema),
  });

  const onSubmit = (data: TCreateCompanySchema) => {
    mutate(data, {
      onSuccess: () => {
        reset();
        navigate({ to: '/companies' });
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
      <div className='space-y-2'>
        <label htmlFor='name' className='text-sm font-medium'>
          Company Name
        </label>
        <Input
          id='name'
          type='text'
          placeholder='Enter company name'
          {...register('name')}
          aria-invalid={!!errors.name}
        />
        {errors.name && (
          <p className='text-sm text-destructive'>{errors.name.message}</p>
        )}
      </div>

      <Button type='submit' disabled={isPending}>
        {isPending ? 'Creating...' : 'Create Company'}
      </Button>
    </form>
  );
};
