"use client";
import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";
import CustomContainer from "./CustomContainer";
import { MailIcon, WWWIcon } from "@/assets/icons";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="lg:min-h-[31.875rem] bg-[#121212] text-white py-16 md:py-24">
      <div className="flex flex-col gap-6 ">
        <CustomContainer>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 justify-between">
            <div className="flex flex-col gap-6">
              <div>
                <Image
                  src="/Images/logo.png"
                  width={212}
                  height={71.47}
                  alt="logo"
                />
              </div>
              <div className="flex items-start gap-2">
                <IoLocationSharp className="size-6" />
                <p className="font-medium leading-8 text-sm">
                  Agricultural Research House, Plot 223D <br />
                  Cadastral Zone B6, Mabushi, P .M. B. <br />
                  5026, Wuse Abuja
                </p>
              </div>
              <div className="flex items-center gap-2">
                <MailIcon />{" "}
                <p className="font-medium text-sm">es@arcn.gov.ng</p>
              </div>
              <div className="flex items-center gap-2">
                <WWWIcon />{" "}
                <Link href="#" className="font-medium text-sm">
                  www.arcn.gov.ng
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-footer-res gap-5">
              <div className="flex flex-col gap-4">
                <h2 className="text-base sm:text-lg font-semibold">Company</h2>
                <ul className="text-base flex flex-col gap-4 font-normal text-[#EFEFEF]">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-4">
                <h2 className="text-base sm:text-lg font-semibold">
                  Our Services
                </h2>
                <ul className="text-base flex flex-col gap-4 font-normal text-[#EFEFEF]">
                  <li>
                    <a href="#">Research</a>
                  </li>
                  <li>
                    <a href="#">Training</a>
                  </li>
                  <li>
                    <a href="#">Extension</a>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-4">
                <h2 className="text-base sm:text-lg font-semibold">
                  Publications
                </h2>
                <ul className="text-base flex flex-col gap-4 font-normal text-[#EFEFEF]">
                  <li>
                    <a href="#">Research papers</a>
                  </li>
                  <li>
                    <a href="#">Reports</a>
                  </li>
                  <li>
                    <a href="#">Newsletter</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CustomContainer>
        <hr className="border border-white my-3" />

        <div className="text-center text-sm font-normal">
          <h1>© 2024 ARCN. All rights reserved.</h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
