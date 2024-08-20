"use client"

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { IoIosArrowDown } from "react-icons/io";
import { ContentManagementBlogsTableType } from "./types";
import { Checkbox } from "@/components/ui/checkbox";
import BlogAction from "../dropdowns/BlogAction";




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
      accessorKey: "publishDate",
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
        return <BlogAction blogData={blogData}/>;
      },
    },
  ];