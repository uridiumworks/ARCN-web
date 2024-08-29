"use client"


import { ColumnDef } from "@tanstack/react-table";
import { EntreprenuershipTableType, FCAsTableType, SupervisionReportTableType } from "./types";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { IoIosArrowDown } from "react-icons/io";
import EntrepreneurshipAction from "../dropdowns/entrepreneurship/EntrepreneurshipAction";




export const FCAscolumns: ColumnDef<FCAsTableType>[] = [
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


  export const SupervisionReportTablecolumns: ColumnDef<SupervisionReportTableType>[] = [
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


  export const Entreprenuershipcolumns: ColumnDef<EntreprenuershipTableType>[] = [
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
      accessorKey: "subject",
      header: "Subject",
    },
    {
      accessorKey: "description",
      header: "Description",
    },
    {
      accessorKey: "eventDate",
      header: "Event Date",
    },
    {
      accessorKey: "eventTime",
      header: "Event Time",
    },
    {
      accessorKey: "venue",
      header: "Venue",
    },
    {
      accessorKey: "action",
      header: "Action",
      cell: ({ row }) => {
        const entrepreneurshipData: any = row.original;
        return <EntrepreneurshipAction entrepreneurshipData={entrepreneurshipData} />;
      },
    },
  ];