import { mainNav, topNav } from '@/constants'
import Image from 'next/image'
import React from 'react'
import { Input } from './ui/input'
import { Search } from 'lucide-react'

type Props = {}

const Navbar = (props: Props) => {
    return (
        <div className='flex items-center justify-between px-20 py-3 bg-[#000]'>
            <div>
                <Image src="/Images/logo.png" width={150} height={71} alt="" />
            </div>
            <div className='text-center'>
                <div className='flex justify-center items-center gap-4 text-white'>
                    {topNav.map((t, index) => (
                        <p className='font[Montserrat] uppercase font-[400] text-[12px] text-[#EFEFEF]' key={index}>{t}</p>
                    ))}
                </div>
                <div className='flex justify-center mt-2 gap-6 text-white'>
                    {mainNav.map((t, index) => (
                        <p className='font[Montserrat] font-[800] text-[14px] uppercase text-[#EFEFEF]' key={index}>{t}</p>
                    ))}
                </div>
            </div>
            <div className='flex items-center justify-between rounded-md px-3 bg-[#3C3C3C]'>
                <Input type='search'  placeholder='Search' className=' outline-none bg-transparent text-[#EFEFEF] text-[12px] focus-visible:outline-none border-[#3C3C3C]' />
                <Search color='#2E7636' size="10px"/>
            </div>
        </div>
    )
}

export default Navbar