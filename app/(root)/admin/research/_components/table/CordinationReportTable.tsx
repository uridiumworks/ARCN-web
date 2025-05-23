"use client"; // Add this line at the top

import { DataTablePagination } from "@/components/Shared/data-table-pagination";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Image from "next/image";
import React from "react";
import { CiFilter } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { LuRefreshCw } from "react-icons/lu";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  setCreateReport: React.Dispatch<React.SetStateAction<boolean>>;
}

const CordinationReportTable = <TData, TValue>({
  columns,
  data,
  setCreateReport,
}: DataTableProps<TData, TValue>) => {
   const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFacetedRowModel: getFacetedRowModel(),
        getFacetedUniqueValues: getFacetedUniqueValues(),
    });
  return (
    <>
      <div className="w-full h-auto p-2 md:p-5 flex flex-col gap-3 md:flex-row md:justify-between md:items-center">
        <div className="w-fit flex flex-col justify-start items-start md:flex-row md:justify-between md:items-center gap-2 px-2 md:px-5">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search by title..."
              className="px-8 my-auto outline-none bg-[#f3f4f6] border-[2px] border-[#D1D5DB] text-sm text-[#4B5563] font-semibold"
              style={{ outline: "none" }}
              value={
                (table.getColumn("title")?.getFilterValue() as string) ?? ""
              }
              onChange={(event) =>
                table.getColumn("title")?.setFilterValue(event.target.value)
              }
            />
            <IoSearchOutline
              className="absolute top-[25%] left-[5%]"
              size={20}
              color="#868da5"
            />
          </div>
        </div>
        <div className="w-fit self-start flex justify-between items-center gap-2 px-5">
          <Button
            onClick={() => setCreateReport(true)}
            className="w-fit bg-[#30a85f] text-[#fff] border-2 border-[#dcdee6] flex justify-between items-center gap-2 px-5 hover:bg-[#30a85f] hover:text-[#fff]"
          >
            <span className="text-[14px] font-noraml">New Report</span>
          </Button>
        </div>
      </div>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow
              className="border-gray-100 text-primary-500"
              key={headerGroup.id}
            >
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead
                    className="font-bold text-primary-500"
                    key={header.id}
                  >
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
                  const cellValue: any = flexRender(
                    cell.column.columnDef.cell,
                    cell.getContext()
                  );
                  let value = cellValue.props.renderValue();

                  return (
                    <TableCell className=" " key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  );
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
                  <p className="text-md text-center font-medium">No Requests</p>
                  <p className="text-md text-center text-gray-200 font-medium">
                    List of your requests <br /> appear here
                  </p>
                </div>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <DataTablePagination table={table} />
    </>
  );
};

export default CordinationReportTable;
