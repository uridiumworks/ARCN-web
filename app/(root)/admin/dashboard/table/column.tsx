import { ColumnDef } from "@tanstack/react-table";
import { BlogsTableType } from "./types/blogs";
import { Button } from "@/components/ui/button";
import { IoIosArrowDown } from "react-icons/io";




export const Blogscolumns: ColumnDef<BlogsTableType>[] = [
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