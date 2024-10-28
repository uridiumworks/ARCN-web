"use client";

import { ArrowDownIcon, NotificationIcon } from "@/assets/icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useUserProfile } from "@/hooks/user.hook";
import { profile } from "console";
import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import SidebarList from "../../_components/SidebarList";

const AdminNavbar = () => {
  const [userData, setUserData] = useState<any>(null);
  // const [isOpen,setIsOpen] = useState(false)

  useEffect(() => {
    const savedUserData = localStorage.getItem("userData");
    if (savedUserData) {
      setUserData(JSON.parse(savedUserData));
    }
  }, []);

  console.log(userData);
  return (
    <div className="w-full h-[10vh] bg-white flex justify-between items-center px-5 border-b-[2px] border-gray-300">
      <div>
        <p className="font-[Montserrat] font-black italic text-lg leading-[10.5px]">
          Hi, {userData?.firstName}
        </p>
      </div>
      <div className="flex justify-start items-center gap-4">
        <Avatar className="hidden lg:block">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>AM</AvatarFallback>
        </Avatar>
        <div className="block lg:hidden">
          <DropdownMenu >
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-fit p-1">
                <GiHamburgerMenu /> hiii
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#000000] overflow-y-auto">
              <SidebarList />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
