import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from '@tanstack/react-router';

import { Button } from '@/ui/button';
import { Input } from '@/ui/input';
import {
  createCostHeadSchema,
  TCreateCostHeadSchema,
} from '../validations/cost-head.validation';
import { useCreateCostHead } from '../hooks/use-create-cost-head';

export const CreateCostHeadForm: FC = () => {
  const navigate = useNavigate();
  const { mutate, isPending } = useCreateCostHead();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TCreateCostHeadSchema>({
    resolver: zodResolver(createCostHeadSchema),
  });

  const onSubmit = (data: TCreateCostHeadSchema) => {
    mutate(data, {
      onSuccess: () => {
        reset();
        navigate({ to: '/cost-heads' });
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
      <div className='space-y-2'>
        <label htmlFor='name' className='text-sm font-medium'>
          Cost Head Name
        </label>
        <Input
          id='name'
          type='text'
          placeholder='Enter cost head name'
          {...register('name')}
          aria-invalid={!!errors.name}
        />
        {errors.name && (
          <p className='text-sm text-destructive'>{errors.name.message}</p>
        )}
      </div>

      <Button type='submit' disabled={isPending}>
        {isPending ? 'Creating...' : 'Create Cost Head'}
      </Button>
    </form>
  );
};
