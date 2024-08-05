"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import { CordinationReportTableType, NarisTableType } from "./types";
import { Button } from "@/components/ui/button";
import { IoIosArrowDown } from "react-icons/io";



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
      accessorKey: "dateEstablished",
      header: "Date Established",
    },
    {
      accessorKey: "dateJoined",
      header: "Date Joined",
    },
    {
      accessorKey: "location",
      header: "Location",
    },
    {
      accessorKey: "action",
      header: "Action",
      cell: ({ row }) => {
        const blogData: any = row.original;
        return <Button className="bg-white border-2 border-[#d1d5db] hover:bg-white"><IoIosArrowDown color="#4b5563" /></Button>;
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
      accessorKey: "publisher",
      header: "Publisher",
    },
    {
        accessorKey: "authorEmail",
        header: "Author's Email",
    },
    {
      accessorKey: "dateCreated",
      header: "Date Created",
    },
    {
      accessorKey: "action",
      header: "Action",
      cell: ({ row }) => {
        const blogData: any = row.original;
        return <Button className="bg-white border-2 border-[#d1d5db] hover:bg-white"><IoIosArrowDown color="#4b5563" /></Button>;
      },
    },
  ];