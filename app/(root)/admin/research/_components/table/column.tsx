"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import { CordinationReportTableType, NarisTableType } from "./types";
import { Button } from "@/components/ui/button";
import { IoIosArrowDown } from "react-icons/io";
import NarisAction from "../dropdowns/naris/NarisAction";
import ReportAction from "../dropdowns/report/ReportAction";



export const Nariscolumns: ColumnDef<NarisTableType>[] = [
    {
      accessorKey: "checkbox",
      header: "",
      cell: ({ row }) => {
        const blogData: any = row.original;
        return <Checkbox className="border-[#838799]" />
        ;
      },
    },
    {
      accessorKey: "institutionName",
      header: "Institution Name",
    },
    {
      accessorKey: "establishDate",
      header: "Date Established",
    },
    {
      accessorKey: "joinDate",
      header: "Date Joined",
    },
    {
      accessorKey: "website",
      header: "Location",
    },
    {
      accessorKey: "action",
      header: "Action",
      cell: ({ row }) => {
        const narisData: any = row.original;
        return <NarisAction narisData={narisData}/>;
      },
    },
  ];


export const CordinationReportTablecolumns: ColumnDef<CordinationReportTableType>[] = [
    {
      accessorKey: "checkbox",
      header: "",
      cell: ({ row }) => {
        const blogData: any = row.original;
        return <Checkbox className="border-[#838799]" />
        ;
      },
    },
    {
      accessorKey: "title",
      header: "Title",
    },
    {
      accessorKey: "authorName",
      header: "Publisher",
    },
    {
        accessorKey: "authorEmail",
        header: "Author's Email",
    },
    {
      accessorKey: "publishDate",
      header: "Date Created",
    },
    {
      accessorKey: "action",
      header: "Action",
      cell: ({ row }) => {
        const reportData: any = row.original;
        return <ReportAction reportData={reportData}/>;
      },
    },
  ];