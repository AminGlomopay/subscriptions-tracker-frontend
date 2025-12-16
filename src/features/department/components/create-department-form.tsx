import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from '@tanstack/react-router';

import { Button } from '@/ui/button';
import { Input } from '@/ui/input';
import {
  createDepartmentSchema,
  TCreateDepartmentSchema,
} from '../validations/department.validation';
import { useCreateDepartment } from '../hooks/use-create-department';

export const CreateDepartmentForm: FC = () => {
  const navigate = useNavigate();
  const { mutate, isPending } = useCreateDepartment();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TCreateDepartmentSchema>({
    resolver: zodResolver(createDepartmentSchema),
  });

  const onSubmit = (data: TCreateDepartmentSchema) => {
    mutate(data, {
      onSuccess: () => {
        reset();
        navigate({ to: '/departments' });
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
      <div className='space-y-2'>
        <label htmlFor='name' className='text-sm font-medium'>
          Department Name
        </label>
        <Input
          id='name'
          type='text'
          placeholder='Enter department name'
          {...register('name')}
          aria-invalid={!!errors.name}
        />
        {errors.name && (
          <p className='text-sm text-destructive'>{errors.name.message}</p>
        )}
      </div>

      <Button type='submit' disabled={isPending}>
        {isPending ? 'Creating...' : 'Create Department'}
      </Button>
    </form>
  );
};
