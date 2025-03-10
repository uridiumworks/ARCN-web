"use client";
import React from "react";
import ResearchInstitueBreadcrumbs from "./ResearchInstitueBreadcrumbs";
import {
  BlackEmailIcon,
  BlackLocationPointerIcon,
  BlackPhoneIcon,
  BlackWebUrlIcon,
  WhiteEmailIcon,
  WhiteLocationPointerIcon,
  WhitePhoneIcon,
  WhiteWeburlIcon,
} from "@/assets/icons";
import CustomContainer from "@/components/CustomContainer";
import Image from "next/image";
import Link from "next/link";

type Props = {
  logo: string;
  title: string;
  accroymn: string;
  location: string;
  website: string;
  email: string;
  phoneNumber?: string;
};

export default function Hero({
  phoneNumber = "",
  logo,
  title,
  accroymn,
  location,
  website,
  email,
}: Props) {
  return (
    <section className="flex flex-col gap-6 bg-[#101010] pt-3 px-3 pb-6 sm:pb-16 mt-3">
      <ResearchInstitueBreadcrumbs text={accroymn} />
      <CustomContainer>
        <div className="flex flex-col gap-12 sm:gap-16">
          <div className="self-center flex flex-col gap-3 justify-center items-center text-center">
            <Image src={logo} alt="logo" width={120} height={120} />
            <h2 className="font-bold text-white text-3xl sm:text-4xl leading-[2.25rem]">
              {title.split("<br />").map((ct, i) => (
                <>
                  {ct.trim()} {i !== title.split("<br />").length && <br />}{" "}
                </>
              ))}
            </h2>
          </div>
          <div className="grid grid-cols-research-institutes-details-res self-stretch sm:self-center  lg:self-stretch gap-7 sm:gap-14 lg:gap-10">
            <div className="flex items-center justify-start lg:justify-center gap-3 ">
              <div>
                <WhiteLocationPointerIcon />
              </div>
              <div className="flex flex-col">
                <h4 className="font-medium text-white text-base leading-[1.6rem]">
                  Location
                </h4>
                <p className="font-normal text-[#EFEFEF] text-sm leading-[1.4rem]">
                  {location}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-start lg:justify-center gap-3 ">
              <div>
                <WhiteWeburlIcon />
              </div>
              <div className="flex flex-col">
                <h4 className="font-medium text-white text-base leading-[1.6rem]">
                  Website
                </h4>
                <Link
                  href={website}
                  target="_blank"
                  className="font-normal text-[#EFEFEF] text-sm leading-[1.4rem]"
                >
                  {website.split("https://")[1]}
                </Link>
              </div>
            </div>

            <div className="flex items-center justify-start lg:justify-center gap-3 ">
              <div>
                <WhiteEmailIcon />
              </div>
              <div className="flex flex-col">
                <h4 className="font-medium text-white text-base leading-[1.6rem]">
                  Email
                </h4>
                <p className="font-normal text-[#EFEFEF] text-sm leading-[1.4rem]">
                  {email}
                </p>
              </div>
            </div>

            {phoneNumber && (
              <div className="flex items-center justify-start lg:justify-center gap-3 ">
                <div>
                  <WhitePhoneIcon />
                </div>
                <div className="flex flex-col ">
                  <h4 className="font-medium text-white text-base leading-[1.6rem]">
                    Phone
                  </h4>
                  <p className="font-normal text-[#EFEFEF] text-sm leading-[1.4rem]">
                    {phoneNumber}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </CustomContainer>
    </section>
  );
}
