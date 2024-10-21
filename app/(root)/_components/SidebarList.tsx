"use client";

import React, { useState } from 'react'
import { BottomSideLink, SideLink, SideLinkDropdown } from './SideLink'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';


const SidebarList = () => {
    const currentRoute = usePathname();

    const [dropDown, setDropDown] = useState(false);

    const dropDownHandler = () => {
        if (dropDown) {
            setDropDown((prev) => (prev = false));
        }
    };


    return (
        <aside className='w-full lg:h-[calc(90vh - 10px)]'>
            <div className=''>
                {SideLink?.map((link, index) => {
                    const active = link?.url === currentRoute ? true : false;
                    return (
                        <div key={index++}>
                            <Link
                                // key={index++}
                                onClick={
                                    link?.url.includes("content-management")
                                        ? () => {
                                            setDropDown((prev) => (prev = !prev));
                                        }
                                        : () => {
                                            dropDownHandler();
                                        }
                                }
                                href={
                                    link?.url.includes("content-management")
                                        ? ""
                                        : link?.url
                                }
                            >
                                <div
                                    className={cn(
                                        "flex items-center justify-start gap-3 px-3 py-3 hover:bg-primary-200 text-[#5f6d7e] hover:text-primary-300 hover:font-[600] border-l-4 border-transparent hover:border-l-4 hover:border-primary-300",
                                        {
                                            "bg-primary-200 text-white font-[600] border-y-2 border-primary-300":
                                                (link?.url.includes("content-management") &&
                                                    currentRoute.includes("content-management")) ||
                                                (link?.url.includes("content-management") && dropDown),
                                        },
                                        {
                                            "bg-[#30a85f] text-white font-[600] border-y-2 border-primary-300":
                                                active,
                                        },
                                        {
                                            "bg-[#30a85f] text-white font-[600] border-y-2 border-primary-300":
                                            (link?.url.includes("content-management") && dropDown) ? true : false,
                                        }
                                    )}
                                >
                                    {link?.icon}
                                    <div className="ml-2 my-auto">
                                        <p className="text-sm">{link?.name}</p>
                                    </div>
                                    {link?.url.includes("content-management") && ( dropDown ? <IoIosArrowUp color="#fff" /> : <IoIosArrowDown color="#5f6d7e" />)}
                                </div>
                            </Link>
                            {link?.url.includes("content-management") ? (
                                <div
                                    className={cn(
                                        "overflow-hidden transition-all duration-300"
                                    )}
                                >
                                    <div
                                        className={cn(
                                            "ml-4 relative my-2 transition-all ease-linear duration-300",
                                            {
                                                "-top-52": !dropDown,
                                                // "-translate-y-32": !dropDown,
                                                "-mb-52": !dropDown,
                                            },
                                            {
                                                // "translate-y-0": dropDown,
                                                "top-0": dropDown,
                                                "mb-0": dropDown,
                                            }
                                        )}
                                    >
                                        {SideLinkDropdown?.map((link: any, index: number) => {
                                            const linkResult = link.url.split("/").pop(); // This will give you "blogs"
                                            const currentRouteLinkResult = currentRoute.split("/").pop(); // This will give you "blogs"
                                            const active = linkResult === currentRouteLinkResult ? true : false;
                                            return (
                                                <Link key={index++} href={link?.url}>
                                                    <div
                                                        className={cn(
                                                            "flex px-4 py-2 text-gray-500 hover:text-white",
                                                            {
                                                                "text-white": active,
                                                            }
                                                        )}
                                                    >
                                                        {link?.icon}
                                                        <div className="ml-2 my-auto">
                                                            <p className="text-sm hover:text-white">{link?.name}</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </div>
                            ) : (
                                ""
                            )}
                        </div>
                    )

                })}
            </div>
            <div className=''>
                {BottomSideLink?.map((link, index) => {
                    const active = link?.url === currentRoute ? true : false;
                    return (
                        <div key={index++}>
                            <Link
                                // key={index++}
                                onClick={() => {
                                    dropDownHandler();
                                }
                                }
                                href={link?.url}
                            >
                                <div
                                    className={cn(
                                        "flex items-center justify-start gap-3 px-3 py-3 bg-secondary-100 hover:bg-primary-200 text-[#5f6d7e] hover:text-primary-300 hover:font-[600] border-l-4 border-transparent hover:border-l-4 hover:border-primary-300",
                                        {
                                            "bg-[#30a85f] text-white font-[600] border-y-2 border-primary-300":
                                                active,
                                        }
                                    )}
                                >
                                    {link?.icon}
                                    <div className="ml                  -2 my-auto">
                                        <p className="text-sm">{link?.name}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )

                })}
            </div>

        </aside >
    )
}

export default SidebarList