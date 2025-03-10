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
            <div className="flex flex-col items-start gap-6 sm:px-16">
              <div className="flex items-center gap-3">
                <div>
                  <CircleCheck color="#30A85F" size={20} />
                </div>{" "}
                <p className="text-sm font-normal leading-[1.5rem]">
                  {" "}
                  <span className="font-bold">
                    Director/Chief Executive:
                  </span>{" "}
                  Dr. Maryam Muhammad
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div>
                  <CircleCheck color="#30A85F" size={20} />
                </div>{" "}
                <p className="text-sm font-normal leading-[1.5rem]">
                  {" "}
                  <span className="font-bold">Director Production:</span> Dr.
                  Nicholas Douglas Nwankpa
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div>
                  <CircleCheck color="#30A85F" size={20} />
                </div>{" "}
                <p className="text-sm font-normal leading-[1.5rem]">
                  {" "}
                  <span className="font-bold">Director Research:</span> Dr. Sati
                  Ngulunku
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div>
                  <CircleCheck color="#30A85F" size={20} />
                </div>{" "}
                <p className="text-sm font-normal leading-[1.5rem]">
                  {" "}
                  <span className="font-bold">Director, Planning:</span> Mosun
                  E. Ogedengbe
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div>
                  <CircleCheck color="#30A85F" size={20} />
                </div>{" "}
                <p className="text-sm font-normal leading-[1.5rem]">
                  {" "}
                  <span className="font-bold">
                    Director Quality Assurance:
                  </span>{" "}
                  Dr. Ogo Isaac Ndudim
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div>
                  <CircleCheck color="#30A85F" size={20} />
                </div>{" "}
                <p className="text-sm font-normal leading-[2.25rem]">
                  {" "}
                  <span className="font-bold">
                    Director Diagnostic and Extension:
                  </span>{" "}
                  Dr. Bashir Bolajoko
                </p>
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
