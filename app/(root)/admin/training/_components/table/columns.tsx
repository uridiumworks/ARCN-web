"use client";

import { ColumnDef } from "@tanstack/react-table";
import {
  EntreprenuershipTableType,
  FCAsTableType,
  SupervisionReportTableType,
} from "./types";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { IoIosArrowDown } from "react-icons/io";
import EntrepreneurshipAction from "../dropdowns/entrepreneurship/EntrepreneurshipAction";
import FCAsAction from "../dropdowns/FCAs/FCAsAction";
import SupervisionReportAction from "../dropdowns/supervision-report/SupervisionReportAction";

export const FCAscolumns: ColumnDef<FCAsTableType>[] = [
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
    accessorKey: "address",
    header: "Location",
    enableGlobalFilter: false,
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => {
      const fCAsData: any = row.original;
      return <FCAsAction fCAsData={fCAsData} />;
    },
  },
];

export const SupervisionReportTablecolumns: ColumnDef<SupervisionReportTableType>[] =
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
      enableGlobalFilter:false
    },
    {
      accessorKey: "publisherName",
      header: "Publisher",
      enableGlobalFilter:true
    },
    {
      accessorKey: "authorEmail",
      header: "Author's Email",
      enableGlobalFilter:false
    },
    {
      accessorKey: "publishOn",
      header: "Publish Date",
      enableGlobalFilter:false
    },
    {
      accessorKey: "action",
      header: "Action",
      cell: ({ row }) => {
        const supervisionReportData: any = row.original;
        return (
          <SupervisionReportAction
            supervisionReportData={supervisionReportData}
          />
        );
      },
    },
  ];

export const Entreprenuershipcolumns: ColumnDef<EntreprenuershipTableType>[] = [
  {
    accessorKey: "checkbox",
    header: "",
    cell: ({ row }) => {
      const blogData: any = row.original;
      return <Checkbox className="border-[#838799]" />;
    },
  },
  {
    accessorKey: "subject",
    header: "Subject",
    enableGlobalFilter:true
  },
  {
    accessorKey: "description",
    header: "Description",
    enableGlobalFilter:false
  },
  {
    accessorKey: "eventStartDate",
    header: "Event Start Date",
    enableGlobalFilter:false
  },
  {
    accessorKey: "eventEndDate",
    header: "Event End Date",
    enableGlobalFilter:false
  },
  {
    accessorKey: "venue",
    header: "Venue",
    enableGlobalFilter:false
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => {
      const entrepreneurshipData: any = row.original;
      return (
        <EntrepreneurshipAction entrepreneurshipData={entrepreneurshipData} />
      );
    },
  },
];
