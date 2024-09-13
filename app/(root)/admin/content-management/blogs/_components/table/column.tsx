"use client"

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { IoIosArrowDown } from "react-icons/io";
import { ContentManagementBlogsTableType } from "./types";
import { Checkbox } from "@/components/ui/checkbox";
import BlogAction from "../dropdowns/BlogAction";
import JournalAction from "../../../journals/_components/dropdowns/JournalAction";
import NewsLetterAction from "../../../news-letters/_components/dropdowns/NewsLetterAction";




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

  export const Journalscolumns: ColumnDef<ContentManagementBlogsTableType>[] = [
    {
      accessorKey: "checkbox",
      header: "",
      cell: ({ row }) => {
        const journalData: any = row.original;
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
        const journalData: any = row.original;
        return <JournalAction journalData={journalData}/>;
      },
    },
  ];


  export const NewsLetterscolumns: ColumnDef<ContentManagementBlogsTableType>[] = [
    {
      accessorKey: "checkbox",
      header: "",
      cell: ({ row }) => {
        const newsLetterData: any = row.original;
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
        const newsLetterData: any = row.original;
        return <NewsLetterAction newsLetterData={newsLetterData}/>;
      },
    },
  ];