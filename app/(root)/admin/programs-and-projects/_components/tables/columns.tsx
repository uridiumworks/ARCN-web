"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { IoIosArrowDown } from "react-icons/io";
import { ProgramsTableType, ProjectsTableType } from "./types";
import ProjectAction from "../dropdowns/projects/ProjectAction";
import ProgramAction from "../dropdowns/programs/ProgramAction";



export const Projectscolumns: ColumnDef<ProjectsTableType>[] = [
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
      accessorKey: "instituteName",
      header: "Institute Name",
    },
    {
      accessorKey: "publishOn",
      header: "Date Created",
    },
    {
      accessorKey: "action",
      header: "Action",
      cell: ({ row }) => {
        const projectData: any = row.original;
        return <ProjectAction projectData={projectData}/>;
      },
    },
  ];


  export const Programscolumns: ColumnDef<ProgramsTableType>[] = [
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
        const programData: any = row.original;
        return <ProgramAction programData={programData} />;
      },
    },
  ];

