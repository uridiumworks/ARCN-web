"use client"

import { mainNav, topNav } from '@/constants'
import Image from 'next/image'
import React, { useState } from 'react'
import { Input } from './ui/input'
import { Search, Menu } from 'lucide-react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'

type Props = {}

const Navbar = (props: Props) => {
    const router = useRouter();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    const routePathLinks = (arg: any) => {
        switch (arg) {
            case "Governance":
                router.push("/governance")
                break;

            case "Home":
                router.push("/")
                break;
            case "About Us":
                router.push("/about")
                break;
            case "mandate":
                router.push("/mandate")
                break;
            case "News & Events":
                router.push("/newsandevents")
                break;
            case "Programs & Projects":
                router.push("/programsandprojects")
                break;
            case "Impacts":
                router.push("/impacts")
                break;
            case "Contact":
                router.push("/contact")
                break;
            case "Careers":
                router.push("/career")
                break;
            case "Publications":
                router.push("/publications")
                break;
            default:
                break;
        }
    }
    return (
        <div className='flex items-center justify-between px-4 lg:px-20 py-3 sticky z-10 top-0 bg-[#000]'>
            <div>
                <Image src="/Images/logo.png" width={150} height={71} alt="logo" />
            </div>
            <div className='hidden lg:block space-y-3 pb-3 text-center'>
                <div className='flex justify-center items-center gap-4 text-[#EFEFEF]'>
                    {topNav.map((t, index) => (
                        <p onClick={() => routePathLinks(t)} className='font[Montserrat] font-normal text-xs text-[#EFEFEF] cursor-pointer' key={index}>{t}</p>
                    ))}
                </div>
                <div className='flex justify-center mt-2 gap-6 text-white'>
                    {mainNav.map((t, index) => (
                        <p onClick={() => routePathLinks(t)} className='font[Montserrat] font-extrabold text-sm uppercase text-[#EFEFEF] cursor-pointer' key={index}>{t}</p>
                    ))}
                </div>
            </div>
            <div className='hidden lg:flex items-center justify-between rounded-md px-3 bg-[#3C3C3C]'>
                <Input type='search' placeholder='Search' className='outline-none bg-transparent text-[#EFEFEF] text-[12px] focus-visible:outline-none border-[#3C3C3C]' />
                <Search color='#2E7636' size="16px" />
            </div>
            <div className='md:hidden flex items-center'>
                <Button onClick={toggleMobileMenu} variant="ghost" className="p-2">
                    <Menu size="24px" color='#EFEFEF' />
                </Button>
            </div>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <div className='absolute top-0 left-0 w-full h-screen bg-[#000] z-50 flex flex-col items-center p-4'>
                    <div className='flex justify-between w-full'>
                        <Image src="/Images/logo.png" width={150} height={71} alt="logo" />
                        <Button onClick={toggleMobileMenu} variant="ghost" className="p-2">
                            <Menu size="24px" color='#EFEFEF' />
                        </Button>
                    </div>
                    <div className='mt-8 flex flex-col items-center text-white'>
                        {mainNav.map((t, index) => (
                            <p className='font[Montserrat] font-[800] text-[14px] uppercase text-[#EFEFEF] mb-4' key={index}>{t}</p>
                        ))}
                    </div>
                    <div className='flex mt-6 rounded-md text-[#EFEFEF] w-full bg-[#3C3C3C] p-3'>
                        <Input type='search' placeholder='Search' className='outline-none bg-transparent text-[#EFEFEF] text-[12px] focus-visible:outline-none border-[#3C3C3C]' />
                        <Search color='#2E7636' size="16px" />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar
