import { FC } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from '@tanstack/react-router';

import { Button } from '@/ui/button';
import { Input } from '@/ui/input';
import { Checkbox } from '@/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/ui/select';
import {
  createVendorSchema,
  TCreateVendorSchema,
} from '../validations/vendor.validation';
import { useCreateVendor } from '../hooks/use-create-vendor';
import { useCompanies } from '@/features/company/public';

export const CreateVendorForm: FC = () => {
  const navigate = useNavigate();
  const { mutate, isPending } = useCreateVendor();
  const companies = useCompanies();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<TCreateVendorSchema>({
    resolver: zodResolver(createVendorSchema),
    defaultValues: {
      isTaxClaimable: false,
      isScrutVerified: false,
      isAgreementSigned: false,
      companyIds: [],
    },
  });

  const onSubmit = (data: TCreateVendorSchema) => {
    mutate(data, {
      onSuccess: () => {
        reset();
        navigate({ to: '/vendors' });
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
      <div className='space-y-2'>
        <label htmlFor='name' className='text-sm font-medium'>
          Vendor Name
        </label>
        <Input
          id='name'
          type='text'
          placeholder='Enter vendor name'
          {...register('name')}
          aria-invalid={!!errors.name}
        />
        {errors.name && (
          <p className='text-sm text-destructive'>{errors.name.message}</p>
        )}
      </div>

      <div className='space-y-2'>
        <label htmlFor='country' className='text-sm font-medium'>
          Country
        </label>
        <Input
          id='country'
          type='text'
          placeholder='Enter country'
          {...register('country')}
          aria-invalid={!!errors.country}
        />
        {errors.country && (
          <p className='text-sm text-destructive'>{errors.country.message}</p>
        )}
      </div>

      <div className='space-y-2'>
        <label htmlFor='taxId' className='text-sm font-medium'>
          Tax ID
        </label>
        <Input
          id='taxId'
          type='text'
          placeholder='Enter tax ID'
          {...register('taxId')}
          aria-invalid={!!errors.taxId}
        />
        {errors.taxId && (
          <p className='text-sm text-destructive'>{errors.taxId.message}</p>
        )}
      </div>

      <div className='space-y-2'>
        <label htmlFor='vendorType' className='text-sm font-medium'>
          Vendor Type
        </label>
        <Controller
          name='vendorType'
          control={control}
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger className='w-full'>
                <SelectValue placeholder='Select vendor type' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='TECHNICAL_SUBSCRIPTION'>
                  Technical Subscription
                </SelectItem>
                <SelectItem value='NON_TECHNICAL_SUBSCRIPTION'>
                  Non-Technical Subscription
                </SelectItem>
                <SelectItem value='CLOUD_INFRASTRUCTURE'>
                  Cloud Infrastructure
                </SelectItem>
                <SelectItem value='OTHER'>Other</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
        {errors.vendorType && (
          <p className='text-sm text-destructive'>
            {errors.vendorType.message}
          </p>
        )}
      </div>

      <div className='space-y-2'>
        <label htmlFor='status' className='text-sm font-medium'>
          Status
        </label>
        <Controller
          name='status'
          control={control}
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger className='w-full'>
                <SelectValue placeholder='Select status' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='ACTIVE'>Active</SelectItem>
                <SelectItem value='INACTIVE'>Inactive</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
        {errors.status && (
          <p className='text-sm text-destructive'>{errors.status.message}</p>
        )}
      </div>

      <div className='space-y-2'>
        <label htmlFor='companyIds' className='text-sm font-medium'>
          Company
        </label>
        <Controller
          name='companyIds'
          control={control}
          render={({ field }) => (
            <Select
              value={field.value[0]?.toString()}
              onValueChange={(value) => field.onChange([parseInt(value)])}
            >
              <SelectTrigger className='w-full'>
                <SelectValue placeholder='Select company' />
              </SelectTrigger>
              <SelectContent>
                {companies.map((company) => (
                  <SelectItem key={company.id} value={company.id.toString()}>
                    {company.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        {errors.companyIds && (
          <p className='text-sm text-destructive'>
            {errors.companyIds.message}
          </p>
        )}
      </div>

      <div className='flex items-center space-x-2'>
        <Controller
          name='isTaxClaimable'
          control={control}
          render={({ field }) => (
            <Checkbox
              id='isTaxClaimable'
              checked={field.value}
              onCheckedChange={field.onChange}
            />
          )}
        />
        <label htmlFor='isTaxClaimable' className='text-sm font-medium'>
          Tax Claimable
        </label>
      </div>

      <div className='flex items-center space-x-2'>
        <Controller
          name='isScrutVerified'
          control={control}
          render={({ field }) => (
            <Checkbox
              id='isScrutVerified'
              checked={field.value}
              onCheckedChange={field.onChange}
            />
          )}
        />
        <label htmlFor='isScrutVerified' className='text-sm font-medium'>
          Scrut Verified
        </label>
      </div>

      <div className='flex items-center space-x-2'>
        <Controller
          name='isAgreementSigned'
          control={control}
          render={({ field }) => (
            <Checkbox
              id='isAgreementSigned'
              checked={field.value}
              onCheckedChange={field.onChange}
            />
          )}
        />
        <label htmlFor='isAgreementSigned' className='text-sm font-medium'>
          Agreement Signed
        </label>
      </div>

      <Button type='submit' disabled={isPending}>
        {isPending ? 'Creating...' : 'Create Vendor'}
      </Button>
    </form>
  );
};
