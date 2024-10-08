"use client";
import React, { useEffect, useState } from "react";
import UsersTable from "./_components/table/UsersTable";
import { Userscolumns } from "./_components/table/column";
import { useGetAllUsers } from "@/hooks/user.hook";
import Loader from "@/components/Shared/Loader";

const Users = () => {
  const [token, setToken] = useState<string | null>(null);
  const [usersArray, setUsersArray] = useState<any[]>([]);
  const [triggerRefetch, setTriggerRefetch] = useState<boolean>(false);
  const { loading, users, error } = useGetAllUsers(triggerRefetch);

  useEffect(() => {
    const userToken = localStorage.getItem("userToken");
    setToken(userToken);
  }, []);

  useEffect(() => {
    if (users?.length > 0) {
      setUsersArray(users);
    }
  }, [users]);
  // if (loading && users?.length < 1) return <p>Loading....</p>
  return (
    <>
      <Loader loading={loading} />
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
            <UsersTable columns={Userscolumns} data={usersArray ?? []} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
