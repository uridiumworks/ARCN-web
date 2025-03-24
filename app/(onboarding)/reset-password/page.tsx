"use client"
import React, { useState } from 'react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye } from 'lucide-react';
import { EyeOff } from 'lucide-react';

const Resetpassword = () => {
  const [newpassword, setNewPassword] = useState("");
  const [comfirmnewpassword, setComfirmNewPassword] = useState("");
  const [shownewpassword, setshownewpassword] = useState(true);
  const [showcomfirmnewpassword, setshowcomfirmnewpassword] = useState(true);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // const payload = {
    //   emails,
    //   resend,
    // };
  // console.log(payload); // Replace this with the actual function to handle the payload

  }

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className="flex flex-col mx-auto gap-6 lg:w-[490px]">
        <div className='space-y-7'>
          <div className='space-y-3'>
            <h2 className="text-3xl font-medium">Set New Password</h2>
          </div>

            <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-6">
                    <div className="grid gap-2">
                        <Label htmlFor="Comfirm New Password" className='text-base'>New Password<span className="text-[#D62300]">*</span></Label>
                        <div className="flex items-center bg-transparent mt-2 px-4 py-2 border rounded-lg">
                            <input
                                id="New Password"
                                type={shownewpassword ? "text" : "password"}
                                placeholder="Enter New Password"
                                required
                                value={newpassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                className='w-full border-none outline-none focus:outline-none focus:ring-2 focus:ring-transparent flex-1'
                            />
                            {shownewpassword ? (
                                <EyeOff onClick={() => setshownewpassword(false)} className="cursor-pointer" />
                            ) : (
                                <Eye onClick={() => setshownewpassword(true)} className="cursor-pointer" />
                            )}
                        </div>
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="Comfirm New Password" className='text-base'>Comfirm New Password<span className="text-[#D62300]">*</span></Label>
                        <div className="flex items-center bg-transparent mt-2 px-4 py-2 border rounded-lg">
                            <input
                                id="Comfirm New Password"
                                type={showcomfirmnewpassword ? "text" : "password"}
                                placeholder="Enter Comfirm Password"
                                required
                                value={comfirmnewpassword}
                                onChange={(e) => setComfirmNewPassword(e.target.value)}
                                className='w-full border-none outline-none focus:outline-none focus:ring-2 focus:ring-transparent flex-1'

                            />
                            {showcomfirmnewpassword ? (
                                <EyeOff onClick={() => setshowcomfirmnewpassword(false)} className="cursor-pointer" />
                            ) : (
                                <Eye onClick={() => setshowcomfirmnewpassword(true)} className="cursor-pointer" />
                            )}
                        </div>
                    </div >

                    <Button type="submit" className="w-full text-base font-normal bg-[#30A85F] hover:text-black">
                        Reset Password
                    </Button>

                    <div className="text-center mt-4">
                        <span className="text-sm text-gray-500 hover:underline">
                            Remembered your Password?
                        </span>
                        <a href="/login" className="text-sm font-semibold text-black hover:underline">
                            Login
                        </a>
                    </div>
                </div>
            </form>
        </div>        
      </div>
    </div>
  )
}

export default Resetpassword;