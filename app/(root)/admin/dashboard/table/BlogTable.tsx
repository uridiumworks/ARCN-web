import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import Image from 'next/image';
import React from 'react'




interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
}


const BlogTable = <TData, TValue>({
    columns,
    data,
}: DataTableProps<TData, TValue>) => {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });


    return (
        <Table>
            <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow
                        className="border-gray-100 text-primary-500"
                        key={headerGroup.id}
                    >
                        {headerGroup.headers.map((header) => {
                            return (
                                <TableHead className="font-bold text-primary-500" key={header.id}>
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                </TableHead>
                            );
                        })}
                    </TableRow>
                ))}
            </TableHeader>
            <TableBody>
                {table?.getRowModel().rows?.length ? (
                    table?.getRowModel().rows.map((row) => (
                        <TableRow
                            className="border-b border-gray-100"
                            key={row.id}
                            data-state={row.getIsSelected() && "selected"}
                        >
                            {row.getVisibleCells().map((cell) => {
                                const cellValue: any = flexRender(cell.column.columnDef.cell, cell.getContext());
                                let value = cellValue.props.renderValue();

                                return (
                                    <TableCell className=" " key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </TableCell>
                                )
                            })}
                        </TableRow>
                    ))
                ) : (
                    <TableRow>
                        <TableCell colSpan={columns.length} className="h-24 text-center">
                            <div>
                                <Image
                                    className="w-24 my-4 mx-auto"
                                    src={""}
                                    alt="no allergies found"
                                />
                                <p className="text-md text-center font-medium">
                                    No Requests
                                </p>
                                <p className="text-md text-center text-gray-200 font-medium">
                                    List of your requests <br /> appear here
                                </p>
                            </div>
                        </TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    )
}

export default BlogTable