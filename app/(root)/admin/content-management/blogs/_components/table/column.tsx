"use client"

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { IoIosArrowDown } from "react-icons/io";
import { ContentManagementBlogsTableType } from "./types";
import { Checkbox } from "@/components/ui/checkbox";




export const ContentManagementBlogscolumns: ColumnDef<ContentManagementBlogsTableType>[] = [
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
      header: "Author's Name",
    },
    {
      accessorKey: "dateCreated",
      header: "Date Created",
    },
    {
      accessorKey: "authorEmail",
      header: "Author's Email",
    },
    {
      accessorKey: "authorPhoneNumber",
      header: "Author's Phone Number",
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