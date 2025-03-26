"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import { EventTableType } from "./types";
import { Button } from "@/components/ui/button";
import { IoIosArrowDown } from "react-icons/io";
import EventAction from "../dropdowns/event/EventAction";

export const Eventcolumns: ColumnDef<EventTableType>[] = [
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
    enableGlobalFilter: true,
  },
  {
    accessorKey: "description",
    header: "Description",
    enableGlobalFilter: false,
  },
  {
    accessorKey: "eventStartDate",
    header: "Start Event Date",
    cell: ({ row }) => {
      const value = new Date(row.original.eventStartDate);
      const formattedDate = value.toISOString().slice(0, 19).replace("T", " ");
      return <div>{formattedDate}</div>;
    },
    enableGlobalFilter: false,
  },
  {
    accessorKey: "eventEndDate",
    header: "End Event Date ",
    cell: ({ row }) => {
      const value = new Date(row.original.eventEndDate);
      const formattedDate = value.toISOString().slice(0, 19).replace("T", " ");
      return <div>{formattedDate}</div>;
    },
    enableGlobalFilter: false,
  },
  {
    accessorKey: "venue",
    header: "Venue",
    enableGlobalFilter: false,
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => {
      const eventData: any = row.original;
      return <EventAction eventData={eventData} />;
    },
  },
];
