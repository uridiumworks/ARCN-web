"use client"
import React, { useState } from 'react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link'



const Forgotpassword = () => {
  const [resend,setResend] = useState ("");
  const [emails, setEmails] = useState("");

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
        <Link href={`/login`}>
          <Button type="submit" className="w-fit text-sm flex flex-row-reverse gap-2 text-black bg-[#F3F4F6]  items-center">
            <span>Back to login</span>
            <span>
              <ArrowLeft size={20} />
            </span>
          </Button>
        </Link>

        <div className='space-y-7'>
          <div className='space-y-3'>
            <h1 className="text-3xl font-medium">Forgot Password</h1>
            <p className='text-sm font-normal text-[#4B5563]'>We will send a reset link to the email attached to this account</p>
          </div>

          <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email" className='text-base'>Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                    value={emails}
                    onChange={(e) => setEmails(e.target.value)}
                  />
                </div>

                <Button type="submit" className="w-full text-base font-normal bg-[#30A85F] hover:text-black" value={resend} onChange={(e) => setResend((e.target as HTMLInputElement).value)}>
                  Send Reset link
                </Button>
              </div>
            </form>
        </div>        
      </div>
    </div>
  )
}

export default Forgotpassword;