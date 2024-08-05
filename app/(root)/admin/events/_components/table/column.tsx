"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import { EventTableType } from "./types";
import { Button } from "@/components/ui/button";
import { IoIosArrowDown } from "react-icons/io";



export const Eventcolumns: ColumnDef<EventTableType>[] = [
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
        const blogData: any = row.original;
        return <Button className="bg-white border-2 border-[#d1d5db] hover:bg-white"><IoIosArrowDown color="#4b5563" /></Button>;
      },
    },
  ];