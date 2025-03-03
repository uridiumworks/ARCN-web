"use client";
import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";
import CustomContainer from "./CustomContainer";
import { MailIcon, WWWIcon } from "@/assets/icons";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="lg:min-h-[31.875rem] bg-[#121212] text-white pt-16 pb-5 md:pt-24 md:pb-10">
      <div className="flex flex-col gap-6 ">
        <CustomContainer>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 justify-between pb-3">
            <div className="flex flex-col gap-3">
              <div>
                <Image
                  src="/Images/logo.png"
                  width={212}
                  height={71.47}
                  alt="logo"
                />
              </div>
              <div className="flex items-start gap-3.5">
                <IoLocationSharp className="size-6" />
                <p className="font-medium leading-[1.575rem] text-sm">
                  Agricultural Research House, Plot 223D <br />
                  Cadastral Zone B6, Mabushi, P .M. B. <br />
                  5026, Wuse Abuja
                </p>
              </div>
              <div className="flex items-center gap-3.5">
                <MailIcon />{" "}
                <p className="font-medium text-sm leading-[1.575rem]">
                  es@arcn.gov.ng
                </p>
              </div>
              <div className="flex items-center gap-3.5">
                <WWWIcon />{" "}
                <Link
                  href="#"
                  className="font-medium text-sm leading-[1.575rem]"
                >
                  www.arcn.gov.ng
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-footer-res gap-5">
              <div className="flex flex-col gap-3">
                <h2 className="text-base sm:text-lg font-semibold leading-[1.6875rem]">
                  Company
                </h2>
                <ul className="text-base flex flex-col gap-2.5 font-normal text-[#EFEFEF]">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="#">Services</Link>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-3">
                <h2 className="text-base sm:text-lg font-semibold leading-[1.6875rem]">
                  Our Services
                </h2>
                <ul className="text-base flex flex-col gap-2.5 font-normal text-[#EFEFEF]">
                  <li>
                    <Link href="/mandate">Research</Link>
                  </li>
                  <li>
                    <Link href="/mandate/training">Training</Link>
                  </li>
                  <li>
                    <Link href="#">Extension</Link>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-3">
                <h2 className="text-base sm:text-lg font-semibold leading-[1.6875rem]">
                  Publications
                </h2>
                <ul className="text-base flex flex-col gap-2.5 font-normal text-[#EFEFEF]">
                  <li>
                    <Link href="#">Research papers</Link>
                  </li>
                  <li>
                    <Link href="#">Reports</Link>
                  </li>
                  <li>
                    <Link href="#">Newsletter</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CustomContainer>
        <hr className="border border-[#F1F1F3] border-opacity-50 my-3 mx-14" />

        <div className="text-center text-sm font-normal leading-[1.3125rem]">
          <h1>© 2024 ARCN. All rights reserved.</h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
