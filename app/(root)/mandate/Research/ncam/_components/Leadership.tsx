"use client";
import React from "react";
import { CircleCheck } from "lucide-react";
import {
  BlackEmailIcon,
  BlackLocationPointerIcon,
  BlackPhoneIcon,
  BlackWebUrlIcon,
} from "@/assets/icons";
import CustomContainer from "@/components/CustomContainer";
import Link from "next/link";

type Props = {
  location: string;
  website: string;
  email: string;
  phoneNumber?: string;
};

// dd

export default function Leadership({
  phoneNumber = "",
  location,
  website,
  email,
}: Props) {
  return (
    <section className="bg-[#F9FFFB] py-8 sm:py-16">
      <CustomContainer>
        <div className="flex flex-col gap-12">
          <div className="flex flex-col items-center gap-8 sm:gap-10">
            <h3 className="font-bold text-3xl text-center sm:text-4xl leading-[2.25rem] text-[#111111]">
              Leadership
            </h3>
            <div className="flex flex-col items-start gap-6">
              <div className="flex items-center gap-2">
                <div>
                  <CircleCheck color="#30A85F" size={20} />
                </div>{" "}
                <p className="text-sm  font-normal leading-[2.25rem]">
                  {" "}
                  <span className="font-bold">Executive Director:</span> Engr.
                  Dr. Kamal, Abdulgafar Rasheed FNSE, FNIAE
                </p>
              </div>

              <div className="flex items-start gap-2">
                <div>
                  <CircleCheck color="#30A85F" size={20} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h4 className="text-sm  font-bold leading-[1.5rem]">
                    Key Directors:
                  </h4>
                  <p className="text-sm  font-normal leading-[1.5rem]">
                    . Engr. Dr. Ademiluyi, Yinka Segun (Processing and Storage
                    Engineering)
                  </p>
                  <p className="text-sm  font-normal leading-[1.5rem]">
                    . Engr. Dr. Ozumba, Isaac Chinedu (Agro-Industrial
                    Development and Extension)
                  </p>
                  <p className="text-sm  font-normal leading-[1.5rem]">
                    . Engr. Dr. Adeogun Emmanuel Olaolu (Land and Water
                    Engineering)
                  </p>
                  <p className="text-sm  font-normal leading-[1.5rem]">
                    . Other departmental directors
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid  grid-cols-research-institutes-details-res self-stretch sm:self-center  lg:self-stretch gap-7 sm:gap-14 lg:gap-10">
            <div className="flex items-center justify-start lg:justify-center  gap-3">
              <div>
                <BlackLocationPointerIcon />
              </div>
              <div className="flex flex-col ">
                <h4 className="font-medium text-black text-base leading-[1.6rem] ">
                  Location
                </h4>
                <p className="font-normal text-[#121212] text-sm leading-[1.4rem]">
                  {location}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-start lg:justify-center gap-3">
              <div>
                <BlackWebUrlIcon />
              </div>
              <div className="flex flex-col ">
                <h4 className="font-medium text-black text-base leading-[1.6rem] ">
                  Website
                </h4>
                <Link
                  href={website}
                  className="font-normal text-[#121212] text-sm leading-[1.4rem]"
                >
                  {website.split("https://")[1]}
                </Link>
              </div>
            </div>

            <div className="flex items-center justify-start lg:justify-center gap-3">
              <div>
                <BlackEmailIcon />
              </div>
              <div className="flex flex-col ">
                <h4 className="font-medium text-black text-base leading-[1.6rem] ">
                  Email
                </h4>
                <p className="font-normal text-[#121212] text-sm leading-[1.4rem]">
                  {email}
                </p>
              </div>
            </div>

            {phoneNumber && (
              <div className="flex items-center justify-start lg:justify-center gap-3">
                <div>
                  <BlackPhoneIcon />
                </div>
                <div className="flex flex-col ">
                  <h4 className="font-medium text-black text-base leading-[1.6rem] ">
                    Phone
                  </h4>
                  <p className="font-normal text-[#121212] text-sm leading-[1.4rem]">
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
