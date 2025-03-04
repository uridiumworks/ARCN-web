"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GrayLocationPointerIcon } from "@/assets/icons";

const data = [
  {
    title: "ARCN Research Coordination Report 2023",
    description: "Our land. Our future. We are #GenerationRestorations.",
    location: "Live-streamed event via Zoom",
    slug: "arcn-research-coordination-report",
  },
  {
    title: "ARCN Research Coordination Report 2023",
    description: "Our land. Our future. We are #GenerationRestorations.",
    location: "Live-streamed event via Zoom",
    slug: "arcn-research-coordination-report-2",
  },
];

export default function Reports() {
  return (
    <div className="grid grid-cols-[100%] sm:grid-cols-2 gap-14">
      {data.map((el, i) => (
        <div
          key={i}
          className="flex flex-col lg:flex-row justify-between lg:items-center gap-8 lg:gap-10 bg-white border border-[#E8E8E8] rounded-xl py-3 px-3.5 lg:px-2 lg:py-1 "
        >
          <div className="flex flex-col lg:self-center px-1 gap-2 items-start order-2 lg:order-1">
            <div className="flex flex-col">
              <h3 className="text-lg leading-[1.5rem] text-[#131517] font-medium">{el.title}</h3>
              <p className="font-normal leading-[1.5rem] text-[#464646] text-xs">
                {el.description}
              </p>
              <div className="flex gap-2.5 items-center">
                <div>
                  <GrayLocationPointerIcon />
                </div>
                <p className="font-normal text-[#1315175C] text-xs leading-[1.5rem]">
                  {el.location}
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <Link
                href={`/mandate/research/coordination-report/${el.slug}/report`}
                className="bg-[#30A85F] text-white font-sans leading-[0.875rem] rounded-sm px-7 py-2.5"
              >
                View
              </Link>
            </div>
          </div>
          <div className="relative w-[9.375rem]  h-[9.375rem] lg:h-full shrink-0  rounded-xl overflow-hidden order-1 lg:order-2 ">
            <Image
              src="/Images/Homepage/event-imgholder.png"
              alt="event-imgholder"
              className="object-cover h-full w-full"
              width={150}
              height={150}
              priority
            />
          </div>
        </div>
      ))}
    </div>
  );
}
