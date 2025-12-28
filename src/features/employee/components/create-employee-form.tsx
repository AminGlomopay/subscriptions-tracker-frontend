import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from '@tanstack/react-router';

import { Button } from '@/ui/button';
import { Input } from '@/ui/input';
import {
  createEmployeeSchema,
  TCreateEmployeeSchema,
} from '../validations/employee.validation';
import { useCreateEmployee } from '../hooks/use-create-employee';
import { useDepartments } from '@/features/department/public';

export const CreateEmployeeForm: FC = () => {
  const navigate = useNavigate();
  const { mutate, isPending } = useCreateEmployee();
  const departments = useDepartments();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TCreateEmployeeSchema>({
    resolver: zodResolver(createEmployeeSchema),
  });

  const onSubmit = (data: TCreateEmployeeSchema) => {
    mutate(data, {
      onSuccess: () => {
        reset();
        navigate({ to: '/employees' });
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
      <div className='space-y-2'>
        <label htmlFor='name' className='text-sm font-medium'>
          Employee Name
        </label>
        <Input
          id='name'
          type='text'
          placeholder='Enter employee name'
          {...register('name')}
          aria-invalid={!!errors.name}
        />
        {errors.name && (
          <p className='text-sm text-destructive'>{errors.name.message}</p>
        )}
      </div>

      <div className='space-y-2'>
        <label htmlFor='email' className='text-sm font-medium'>
          Email
        </label>
        <Input
          id='email'
          type='email'
          placeholder='Enter email address'
          {...register('email')}
          aria-invalid={!!errors.email}
        />
        {errors.email && (
          <p className='text-sm text-destructive'>{errors.email.message}</p>
        )}
      </div>

      <div className='space-y-2'>
        <label htmlFor='departmentId' className='text-sm font-medium'>
          Department
        </label>
        <select
          id='departmentId'
          {...register('departmentId', { valueAsNumber: true })}
          className='h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm'
          aria-invalid={!!errors.departmentId}
        >
          <option value=''>Select a department</option>
          {departments.map((dept) => (
            <option key={dept.id} value={dept.id}>
              {dept.name}
            </option>
          ))}
        </select>
        {errors.departmentId && (
          <p className='text-sm text-destructive'>
            {errors.departmentId.message}
          </p>
        )}
      </div>

      <Button type='submit' disabled={isPending}>
        {isPending ? 'Creating...' : 'Create Employee'}
      </Button>
    </form>
  );
};
