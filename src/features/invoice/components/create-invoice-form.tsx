import { FC, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from '@tanstack/react-router';

import { Button } from '@/ui/button';
import { Input } from '@/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/ui/select';
import {
  createInvoiceSchema,
  TCreateInvoiceSchema,
} from '../validations/invoice.validation';
import { useCreateInvoice } from '../hooks/use-create-invoice';
import { useCompanies } from '@/features/company/public';
import { useVendors } from '@/features/vendor/public';
import { useCostHeads } from '@/features/cost-head/public';
import { useDepartments } from '@/features/department/public';

export const CreateInvoiceForm: FC = () => {
  const navigate = useNavigate();
  const { mutate, isPending } = useCreateInvoice();
  const companies = useCompanies();
  const vendors = useVendors();
  const costHeads = useCostHeads();
  const departments = useDepartments();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
    watch,
    setValue,
  } = useForm<TCreateInvoiceSchema>({
    resolver: zodResolver(createInvoiceSchema),
  });

  const invoiceAmount = watch('invoiceAmount');
  const taxAmount = watch('taxAmount');

  useEffect(() => {
    const invoice = invoiceAmount || 0;
    const tax = taxAmount || 0;
    setValue('totalAmount', invoice + tax);
  }, [invoiceAmount, taxAmount, setValue]);

  const onSubmit = (data: TCreateInvoiceSchema) => {
    const formattedData = {
      ...data,
      invoiceDate: new Date(data.invoiceDate).toISOString(),
      invoiceDueDate: new Date(data.invoiceDueDate).toISOString(),
    };

    mutate(formattedData, {
      onSuccess: () => {
        reset();
        navigate({ to: '/invoices' });
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
      <div className='space-y-2'>
        <label htmlFor='invoiceNumber' className='text-sm font-medium'>
          Invoice Number
        </label>
        <Input
          id='invoiceNumber'
          type='text'
          placeholder='Enter invoice number'
          {...register('invoiceNumber')}
          aria-invalid={!!errors.invoiceNumber}
        />
        {errors.invoiceNumber && (
          <p className='text-sm text-destructive'>{errors.invoiceNumber.message}</p>
        )}
      </div>

      <div className='space-y-2'>
        <label htmlFor='invoiceDate' className='text-sm font-medium'>
          Invoice Date
        </label>
        <Input
          id='invoiceDate'
          type='date'
          {...register('invoiceDate')}
          aria-invalid={!!errors.invoiceDate}
        />
        {errors.invoiceDate && (
          <p className='text-sm text-destructive'>{errors.invoiceDate.message}</p>
        )}
      </div>

      <div className='space-y-2'>
        <label htmlFor='invoiceAmount' className='text-sm font-medium'>
          Invoice Amount
        </label>
        <Input
          id='invoiceAmount'
          type='number'
          placeholder='Enter invoice amount'
          {...register('invoiceAmount', {
            valueAsNumber: true,
          })}
          aria-invalid={!!errors.invoiceAmount}
        />
        {errors.invoiceAmount && (
          <p className='text-sm text-destructive'>{errors.invoiceAmount.message}</p>
        )}
      </div>

      <div className='space-y-2'>
        <label htmlFor='taxAmount' className='text-sm font-medium'>
          Tax Amount
        </label>
        <Input
          id='taxAmount'
          type='number'
          placeholder='Enter tax amount'
          {...register('taxAmount', {
            valueAsNumber: true,
          })}
          aria-invalid={!!errors.taxAmount}
        />
        {errors.taxAmount && (
          <p className='text-sm text-destructive'>{errors.taxAmount.message}</p>
        )}
      </div>

      <div className='space-y-2'>
        <label htmlFor='totalAmount' className='text-sm font-medium'>
          Total Amount
        </label>
        <Input
          id='totalAmount'
          type='number'
          placeholder='Total amount'
          {...register('totalAmount', { valueAsNumber: true })}
          aria-invalid={!!errors.totalAmount}
          readOnly
        />
        {errors.totalAmount && (
          <p className='text-sm text-destructive'>{errors.totalAmount.message}</p>
        )}
      </div>

      <div className='space-y-2'>
        <label htmlFor='invoiceDueDate' className='text-sm font-medium'>
          Invoice Due Date
        </label>
        <Input
          id='invoiceDueDate'
          type='date'
          {...register('invoiceDueDate')}
          aria-invalid={!!errors.invoiceDueDate}
        />
        {errors.invoiceDueDate && (
          <p className='text-sm text-destructive'>{errors.invoiceDueDate.message}</p>
        )}
      </div>

      <div className='space-y-2'>
        <label htmlFor='vendorId' className='text-sm font-medium'>
          Vendor
        </label>
        <Controller
          name='vendorId'
          control={control}
          render={({ field }) => (
            <Select
              value={field.value?.toString()}
              onValueChange={(value) => field.onChange(parseInt(value))}
            >
              <SelectTrigger className='w-full'>
                <SelectValue placeholder='Select vendor' />
              </SelectTrigger>
              <SelectContent>
                {vendors.map((vendor) => (
                  <SelectItem key={vendor.id} value={vendor.id.toString()}>
                    {vendor.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        {errors.vendorId && (
          <p className='text-sm text-destructive'>{errors.vendorId.message}</p>
        )}
      </div>

      <div className='space-y-2'>
        <label htmlFor='costHeadId' className='text-sm font-medium'>
          Cost Head
        </label>
        <Controller
          name='costHeadId'
          control={control}
          render={({ field }) => (
            <Select
              value={field.value?.toString()}
              onValueChange={(value) => field.onChange(parseInt(value))}
            >
              <SelectTrigger className='w-full'>
                <SelectValue placeholder='Select cost head' />
              </SelectTrigger>
              <SelectContent>
                {costHeads.map((costHead) => (
                  <SelectItem key={costHead.id} value={costHead.id.toString()}>
                    {costHead.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        {errors.costHeadId && (
          <p className='text-sm text-destructive'>{errors.costHeadId.message}</p>
        )}
      </div>

      <div className='space-y-2'>
        <label htmlFor='departmentId' className='text-sm font-medium'>
          Department
        </label>
        <Controller
          name='departmentId'
          control={control}
          render={({ field }) => (
            <Select
              value={field.value?.toString()}
              onValueChange={(value) => field.onChange(parseInt(value))}
            >
              <SelectTrigger className='w-full'>
                <SelectValue placeholder='Select department' />
              </SelectTrigger>
              <SelectContent>
                {departments.map((department) => (
                  <SelectItem key={department.id} value={department.id.toString()}>
                    {department.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        {errors.departmentId && (
          <p className='text-sm text-destructive'>{errors.departmentId.message}</p>
        )}
      </div>

      <div className='space-y-2'>
        <label htmlFor='companyId' className='text-sm font-medium'>
          Company
        </label>
        <Controller
          name='companyId'
          control={control}
          render={({ field }) => (
            <Select
              value={field.value?.toString()}
              onValueChange={(value) => field.onChange(parseInt(value))}
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
        {errors.companyId && (
          <p className='text-sm text-destructive'>{errors.companyId.message}</p>
        )}
      </div>

      <Button type='submit' disabled={isPending}>
        {isPending ? 'Creating...' : 'Create Invoice'}
      </Button>
    </form>
  );
};
