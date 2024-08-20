"use client"

import { ArrowDownIcon, NotificationIcon } from '@/assets/icons'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { useUserProfile } from '@/hooks/user.hook'
import { profile } from 'console'
import React, { useEffect, useState } from 'react'

const AdminNavbar = () => {
    const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    const savedUserData = localStorage.getItem('userData');
    if (savedUserData) {
      setUserData(JSON.parse(savedUserData));
    }
  }, []);

  console.log(userData)
    return (
        <div className='w-full h-[10vh] bg-white flex justify-between items-center px-5 border-b-[2px] border-gray-300'>
            <div>
                <p className='font-[Montserrat] font-black italic text-lg leading-[10.5px]'>Hi, {userData?.firstName}</p>
            </div>
            <div className="flex justify-start items-center gap-4">
                <div className='relative w-fit h-fit'>
                    <NotificationIcon />
                    <Badge className='absolute top-0 -right-[8%] bg-[#e62e2e] text-white text-xs'>10</Badge>
                </div>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>AM</AvatarFallback>
                </Avatar>
                <ArrowDownIcon />
            </div>
        </div>
    )
}

export default AdminNavbar