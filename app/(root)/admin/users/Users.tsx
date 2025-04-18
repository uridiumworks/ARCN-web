"use client";
import React, { useEffect, useState } from "react";
import UsersTable from "./_components/table/UsersTable";
import { Userscolumns } from "./_components/table/column";
import { useGetAllUsers } from "@/hooks/user.hook";
import Loader from "@/components/Shared/Loader";
import { useUsers } from "@/contexts/Users.context";

const Users = () => {

const {getUsers,users,isLoading} = useUsers()

useEffect(() => {
  getUsers()
},[getUsers])

  // if (loading && users?.length < 1) return <p>Loading....</p>
  return (
    <>
      <Loader loading={isLoading} />
      <div className="w-full min-h-screen bg-[#f9fafb] p-3 lg:p-10">
        <div className="w-full min-h-[70vh]">
          <div>
            <p className="text-[#374151] text-[24px] leading-[30px] font-bold font-[Montserrat]">
              Users
            </p>
            <p className="text-[#374151] text-[18px] leading-[32.4px] font-normal font-[Montserrat]">
              Here’s a list of all users and their roles
            </p>
          </div>
          <div className="w-full min-h-[70vh] bg-white rounded-md mt-5">
            <UsersTable columns={Userscolumns} data={users ?? []} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
