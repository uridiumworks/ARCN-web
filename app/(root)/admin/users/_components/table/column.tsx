import { ColumnDef } from "@tanstack/react-table";
import { UsersTableType } from "./types";


export const Userscolumns: ColumnDef<UsersTableType>[] = [
    {
      accessorKey: "userName",
      header: "Full Name",
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "phoneNumber",
      header: "Phone Number",
    },
    {
      accessorKey: "role",
      header: "Role",
    },
    {
      accessorKey: "dateCreated",
      header: "Date Created",
    },
  ];