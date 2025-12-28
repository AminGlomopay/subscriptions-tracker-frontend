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
import { useVendors } from '../hooks/use-vendors';

type Vendor = {
  id: number;
  name: string;
  country: string;
  taxId: string;
  isTaxClaimable: boolean;
  vendorType: string;
  status: string;
  isScrutVerified: boolean;
  isAgreementSigned: boolean;
  companyIds: number[];
};

const columns: ColumnDef<Vendor>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'country',
    header: 'Country',
  },
  {
    accessorKey: 'taxId',
    header: 'Tax ID',
  },
  {
    accessorKey: 'vendorType',
    header: 'Vendor Type',
  },
  {
    accessorKey: 'status',
    header: 'Status',
  },
  {
    accessorKey: 'isTaxClaimable',
    header: 'Tax Claimable',
    cell: ({ row }) => (row.original.isTaxClaimable ? 'Yes' : 'No'),
  },
  {
    accessorKey: 'isScrutVerified',
    header: 'Scrut Verified',
    cell: ({ row }) => (row.original.isScrutVerified ? 'Yes' : 'No'),
  },
  {
    accessorKey: 'isAgreementSigned',
    header: 'Agreement Signed',
    cell: ({ row }) => (row.original.isAgreementSigned ? 'Yes' : 'No'),
  },
];

export const VendorsList: FC = () => {
  const vendors = useVendors();

  const table = useReactTable({
    data: vendors,
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
