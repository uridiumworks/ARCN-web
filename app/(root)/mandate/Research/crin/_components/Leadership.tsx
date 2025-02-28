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
  phoneNumber: string;
};

export default function Leadership({
  location,
  website,
  email,
  phoneNumber,
}: Props) {
  return (
    <section className="bg-[#F9FFFB] py-9 sm:py-18">
      <CustomContainer>
        <div className="flex flex-col gap-12">
          <div className="flex flex-col items-center gap-8">
            <h3 className="font-medium text-[2rem] text-center sm:text-[2.625rem] text-[#111111]">
              Leadership
            </h3>
            <div className="flex flex-col items-start gap-6">
              <div className="flex items-center gap-3">
                <div>
                  <CircleCheck color="#30A85F" size={20} />
                </div>{" "}
                <p className="text-sm sm:text-lg font-normal">
                  {" "}
                  <span className="font-bold">Executive Director:</span> Dr.
                  P.O. Adebola
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div>
                  <CircleCheck color="#30A85F" size={20} />
                </div>{" "}
                <p className="text-sm sm:text-lg font-normal">
                  {" "}
                  <span className="font-bold">
                    Director, Research Operations:
                  </span>{" "}
                  Dr. S.O. Agbeniyi
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div>
                  <CircleCheck color="#30A85F" size={20} />
                </div>{" "}
                <p className="text-sm sm:text-lg font-normal">
                  {" "}
                  <span className="font-bold">
                    Director, Research Outreach:
                  </span>{" "}
                  Dr. A.O. Adedeji
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div>
                  <CircleCheck color="#30A85F" size={20} />
                </div>{" "}
                <p className="text-sm sm:text-lg font-normal">
                  {" "}
                  <span className="font-bold">
                    Director, Budget, Monitoring and Evaluation:
                  </span>{" "}
                  Dr. A.O. Famaye
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div>
                  <CircleCheck color="#30A85F" size={20} />
                </div>{" "}
                <p className="text-sm sm:text-lg font-normal">
                  {" "}
                  <span className="font-bold">Director, Planning:</span> Dr.
                  O.S. Ibiremo
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div>
                  <CircleCheck color="#30A85F" size={20} />
                </div>{" "}
                <p className="text-sm sm:text-lg font-normal">
                  {" "}
                  <span className="font-bold">Director, Training:</span> Dr.
                  R.R. Ipinmoroti
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div>
                  <CircleCheck color="#30A85F" size={20} />
                </div>{" "}
                <p className="text-sm sm:text-lg font-normal">
                  {" "}
                  <span className="font-bold">
                    Director, Production and Substations:
                  </span>{" "}
                  Dr. M.O. Ogunlade
                </p>
              </div>
            </div>
          </div>

          <div className="grid  grid-cols-research-institutes-details-res gap-7 sm:gap-10">
            <div className="flex items-center justify-center  gap-3">
              <div>
                <BlackLocationPointerIcon />
              </div>
              <div className="flex flex-col gap-1.5">
                <h4 className="font-medium text-black text-base">Location</h4>
                <p className="font-normal text-[#121212] text-sm">{location}</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3">
              <div>
                <BlackWebUrlIcon />
              </div>
              
              <div className="flex flex-col gap-1.5">
                <h4 className="font-medium text-black text-base">Website</h4>
                <Link  href={website.startsWith('www') ? website : `www.${website}`} className="font-normal text-[#121212] text-sm">
                  {website}
                </Link>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3">
              <div>
                <BlackEmailIcon />
              </div>
              <div className="flex flex-col gap-1.5">
                <h4 className="font-medium text-black text-base">Email</h4>
                <p className="font-normal text-[#121212] text-sm">{email}</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3">
              <div>
                <BlackPhoneIcon />
              </div>
              <div className="flex flex-col gap-1.5">
                <h4 className="font-medium text-black text-base">Phone</h4>
                <p className="font-normal text-[#121212] text-sm">
                  {phoneNumber}
                </p>
              </div>
            </div>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
}
