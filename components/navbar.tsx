"use client";

import { mainNav, topNav } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Search, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { usePathname, useRouter } from "next/navigation";

type Props = {};

const Navbar = (props: Props) => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pathname = usePathname();

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

  const routePathLinks = (arg: any) => {
    switch (arg) {
      case "Governance":
        router.push("/governance");
        break;

      case "Home":
        router.push("/");
        break;
      case "About Us":
        router.push("/about/history");
        break;
      case "mandate":
        router.push("/mandate");
        break;
      case "News & Events":
        router.push("/news-and-events");
        break;
      case "Programs & Projects":
        router.push("/programs-and-projects");
        break;
      case "Impacts":
        router.push("/impacts");
        break;
      case "Contact":
        router.push("/contact");
        break;
      case "Careers":
        router.push("/career");
        break;
      case "Publications":
        router.push("/publications");
        break;
      default:
        break;
    }
  };
  return (
    <div className="py-4 sticky z-50 top-0 bg-[#FFFFFF] border-b border-gray-200">
      <div className="w-full px-8 sm:max-w-[77.5rem] sm:mx-auto flex items-center justify-between">
        <div>
          <Image src="/Images/logov1.svg" width={80} height={35} alt="logo" />
        </div>
        <div className="hidden lg:flex lg:flex-col lg:gap-2.5 text-center">
          <div className="flex justify-center items-center gap-8 text-white">
            {topNav.map((t, index) => (
              <p
                onClick={() => routePathLinks(t)}
                className={`font-normal text-[0.75rem]  leading-[2rem] ${
                  isActiveFunc(t)
                    ? "text-[#30A85F]"
                    : "text-opacity-85 text-[#121212]"
                }  cursor-pointer`}
                key={index}
              >
                {t}
              </p>
            ))}
          </div>

          <div className="flex justify-center gap-6 text-white">
            {mainNav.map((t, index) => (
              <p
                onClick={() => routePathLinks(t)}
                className={`font-bold text-xs leading-[2rem] uppercase ${
                  isActiveFunc(t) ? "text-[#30A85F]" : "text-[#121212]"
                }  cursor-pointer`}
                key={index}
              >
                {t}
              </p>
            ))}
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

        <div className="lg:hidden flex items-center">
          <Menu size="24px" color="#121212" onClick={toggleMobileMenu} />
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-[#fff]  z-50 flex flex-col gap-7 items-center p-4">
          <div className="flex  items-center justify-between w-full">
            <Image src="/Images/logov1.png" width={80} height={35} alt="logo" />

            <X
              size="24px"
              color="#121212"
              onClick={toggleMobileMenu}
              className="cursor-pointer"
            />
          </div>

          <div className="flex flex-col gap-8 sm:gap-12 px-6 self-stretch justify-self-center absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] w-full sm:w-[75%] sm:mx-auto">
            <div className=" flex flex-col gap-6 items-center text-white">
              {mainNav.map((t, index) => (
                <p
                  className={`font-bold text-sm sm:text-lg uppercase  ${
                    isActiveFunc(t) ? "text-[#30A85F]" : "text-[#121212]"
                  }`}
                  key={index}
                  onClick={() => {
                    routePathLinks(t);
                    toggleMobileMenu();
                  }}
                >
                  {t}
                </p>
              ))}
            </div>
            <div className="flex items-center justify-between mt-6 rounded-md w-full bg-[#fff] p-3 border  border-[#3C3C3C]">
              <input
                type="search"
                placeholder="Search"
                className="outline-none bg-transparent flex-1 py-1 px-1.5 text-[#121212] placeholder:text-[#121212] text-sm leading-[1.5rem] focus-visible:outline-none border-[#3C3C3C]"
              />
              <Search color="#2E7636" size="24px" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
