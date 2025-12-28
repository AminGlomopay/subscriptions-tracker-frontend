import { FC } from 'react';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/ui/table';
import { useInvoices } from '../hooks/use-invoices';

type Invoice = {
  id: number;
  invoiceNumber: string;
  invoiceDate: string;
  invoiceAmount: number;
  taxAmount: number;
  totalAmount: number;
  invoiceDueDate: string;
  vendorId: number;
  costHeadId: number;
  departmentId: number;
  companyId: number;
};

const columns: ColumnDef<Invoice>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'invoiceNumber',
    header: 'Invoice Number',
  },
  {
    accessorKey: 'invoiceDate',
    header: 'Invoice Date',
    cell: ({ row }) => new Date(row.original.invoiceDate).toLocaleDateString(),
  },
  {
    accessorKey: 'invoiceAmount',
    header: 'Invoice Amount',
    cell: ({ row }) => row.original.invoiceAmount.toLocaleString(),
  },
  {
    accessorKey: 'taxAmount',
    header: 'Tax Amount',
    cell: ({ row }) => row.original.taxAmount.toLocaleString(),
  },
  {
    accessorKey: 'totalAmount',
    header: 'Total Amount',
    cell: ({ row }) => row.original.totalAmount.toLocaleString(),
  },
  {
    accessorKey: 'invoiceDueDate',
    header: 'Due Date',
    cell: ({ row }) => new Date(row.original.invoiceDueDate).toLocaleDateString(),
  },
];

export const InvoicesList: FC = () => {
  const invoices = useInvoices();

  const table = useReactTable({
    data: invoices,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className='rounded-md border'>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && 'selected'}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className='h-24 text-center'>
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};
