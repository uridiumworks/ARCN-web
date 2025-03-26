import { ColumnDef } from "@tanstack/react-table";
import { UsersTableType } from "./types";

export const Userscolumns: ColumnDef<UsersTableType>[] = [
  {
    accessorKey: "userName",
    header: "Full Name",
    enableGlobalFilter:true
  },
  {
    accessorKey: "email",
    header: "Email",
    enableGlobalFilter:false
  },
  {
    accessorKey: "phoneNumber",
    header: "Phone Number",
    enableGlobalFilter:false
  },
  {
    accessorKey: "role",
    header: "Role",
    enableGlobalFilter:false
  },
];
