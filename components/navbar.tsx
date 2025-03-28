"use client";

import { mainNav, topNav } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Search, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {};

const Navbar = (props: Props) => {

  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActiveFunc = (arg: string) => {
    switch (arg) {
      case "Governance":
        return pathname.toLowerCase().includes("governance");

      case "Home":
        return pathname.toLowerCase() === "/";

      case "About Us":
        return pathname.toLowerCase().includes("about");
      case "mandate":
        return pathname.toLowerCase().includes("mandate");
      case "News & Events":
        return pathname.toLowerCase().includes("news-and-events");

      case "Programs & Projects":
        return pathname.toLowerCase().includes("programs-and-projects");

      case "Impacts":
        return pathname.toLowerCase().includes("impacts");
      case "Contact":
        return pathname.toLowerCase().includes("contact");
      case "Careers":
        return pathname.toLowerCase().includes("career");
      case "Publications":
        return pathname.toLowerCase().includes("publications");

      default:
        return false;
    }
  };

  console.log(isActiveFunc("About Us"), "me");

  return (
    <nav className="shadow lg:px-2 sm:px-4 py-3.5 bg-white sticky w-full z-50 top-0 left-0 border-b-[#D3D7DB]">
      {/* <nav className="py-4 sticky z-50 top-0 bg-[#FFFFFF] border-b border-gray-200"> */}
      <div className="md:w-[1100px] flex flex-col md:flex-row justify-between items-center mx-auto ">
        <div className="flex py-3 lg:py-0 w-full md:w-auto flex-wrap items-center justify-between ">
          <Link href="/" className="text-center ml-4 lg:ml-0">
            <Image src="/Images/logov1.svg" width={80} height={35} alt="logo" />
          </Link>
  
          <div className="flex lg:order-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 lg:hidden focus:outline-none mr-4 lg:mr-0"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <div className="space-y-4 w-full md:w-auto px-3.5 lg:px-0 md:text-center">
          <div className={`${isOpen ? "block" : "hidden"} blue-background lg:flex flex-col-reverse lg:flex-col items-center border-t lg:border-0 py-1 justify-between relative top-3 lg:top-0 w-full lg:w-auto lg:order-1 h-screen lg:h-auto text-base animate-slide_down lg:animate-none`}>
            <ul className="md:flex justify-center items-center gap-8 ">
              {topNav.map((item, index) => {
                const isActive = item.url === pathname
                return (
                  <li key={index} className={cn(isActive ? "text-[#30A85F]" : "text-[#121212]", "")}>
                    <Link href={item.url}
                      className={`font-normal text-[0.75rem]  leading-[2rem] cursor-pointer`}
                      key={index}
                    >
                      {item.name}
                    </Link>
                  </li>

                )})}
            </ul>

            <ul className="flex flex-col md:flex-row justify-start md:justify-center gap-6">
              {mainNav.map((item, index) => {
                const isActive = item.url === pathname
                return (
                  <li key={index} className={cn(isActive ? "text-[#30A85F]" : "text-black", "")}>
                    <Link href={item.url}
                      className={`font-bold text-xs leading-[2rem] uppercase cursor-pointer`}
                      key={index}
                    >
                      {item.name}
                    </Link>
                  </li>

                )})}
            </ul>
          </div>
        </div>
        
        <div className="hidden lg:flex items-center gap-8 justify-between rounded-md px-2 bg-[#fff] border  border-[#3C3C3C]">
          <input
            type="search"
            placeholder="Search"
            className="outline-none bg-transparent text-[#121212] py-1.5 px-1 text-xs leading-[1.2rem] focus-visible:outline-none border-none placeholder:text-[#121212] placeholder:text-xs"
          />
          <Search color="#2E7636" size="14px" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
