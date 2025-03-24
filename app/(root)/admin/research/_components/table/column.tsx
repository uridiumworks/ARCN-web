"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import { CordinationReportTableType, NarisTableType } from "./types";
import { Button } from "@/components/ui/button";
import { IoIosArrowDown } from "react-icons/io";
import NarisAction from "../dropdowns/naris/NarisAction";
import CordinationReportAction from "../dropdowns/report/CordinationReportAction";

export const Nariscolumns: ColumnDef<NarisTableType>[] = [
  {
    accessorKey: "checkbox",
    header: "",
    cell: ({ row }) => {
      const blogData: any = row.original;
      return <Checkbox className="border-[#838799]" />;
    },
  },
  {
    accessorKey: "institutionName",
    header: "Institution Name",
    enableGlobalFilter: true,
  },
  {
    accessorKey: "establishDate",
    header: "Date Established",
    cell: ({ row }) => {
      const value = new Date(row.original.establishDate);
      const formattedDate = value.toISOString().slice(0, 19).replace("T", " ");
      return <div>{formattedDate}</div>;
    },
    enableGlobalFilter: false,
  },
  {
    accessorKey: "joinDate",
    header: "Date Joined",
    cell: ({ row }) => {
      const value = new Date(row.original.joinDate);
      const formattedDate = value.toISOString().slice(0, 19).replace("T", " ");
      return <div>{formattedDate}</div>;
    },
    enableGlobalFilter: false,
  },
  {
    accessorKey: "website",
    header: "Location",
    enableGlobalFilter: false,
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => {
      const narisData: any = row.original;
      return <NarisAction narisData={narisData} />;
    },
  },
];

export const CordinationReportTablecolumns: ColumnDef<CordinationReportTableType>[] =
  [
    {
      accessorKey: "checkbox",
      header: "",
      cell: ({ row }) => {
        const blogData: any = row.original;
        return <Checkbox className="border-[#838799]" />;
      },
    },
    {
      accessorKey: "title",
      header: "Title",
      enableGlobalFilter: true,
    },
    {
      accessorKey: "publisherName",
      header: "Publisher",
      enableGlobalFilter: false,
    },
    {
      accessorKey: "authorEmail",
      header: "Author's Email",
      enableGlobalFilter: false,
    },
    {
      accessorKey: "publishDate",
      header: "Date Created",
      enableGlobalFilter: false,
    },
    {
      accessorKey: "action",
      header: "Action",
      cell: ({ row }) => {
        const cordinationReportData: any = row.original;
        return (
          <CordinationReportAction
            cordinationReportData={cordinationReportData}
          />
        );
      },
    },
  ];
