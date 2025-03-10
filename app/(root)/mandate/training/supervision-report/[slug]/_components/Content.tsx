"use client";
import React from "react";
import Image from "next/image";

import CustomBreadcrumbs from "./Breadcrumbs";
import CustomContainer from "@/components/CustomContainer";

export default function Content() {
  return (
    <section className="pb-12 md:pb-20 pt-4">
      <CustomContainer>
        <div className="flex flex-col gap-8 sm:gap-14">
          <CustomBreadcrumbs text="Report" />

          <div className="flex flex-col gap-10">
            <div className="shrink-0 rounded-3xl overflow-hidden self-center  w-full md:w-[62.5rem] h-auto">
              <Image
                className="w-full h-auto object-cover"
                src="/Images/Mandatepage/coordination-report-holder-img.png"
                alt=""
                height={560}
                width={750}
              />
            </div>

            <div className="px-0 sm:px-20 flex flex-col gap-4 sm:gap-8">
              <h2 className="text-[#111827] font-bold text-3xl  sm:text-4xl leading-[2.25rem]">
                Lorem ipsum dolor sit amet consectetur. Quis faucibus{" "}
              </h2>
              <div className="flex flex-col gap-4">
                <p className="font-normal text-sm  text-[#111827] leading-[1.5rem]">
                  Lorem ipsum dolor sit amet consectetur. Amet gravida eu
                  egestas est vulputate massa pretium at. Vestibulum proin ut
                  cras ac dolor viverra lectus tempor. Diam phasellus arcu leo
                  placerat consequat sed. Sagittis ultricies ac non imperdiet
                  egestas vestibulum. Sit et porta non integer nulla nisl amet
                  ac et. Sit id tellus at nulla pulvinar.
                </p>
                <p className="font-normal text-sm  text-[#111827] leading-[1.5rem]">
                  Lorem ipsum dolor sit amet consectetur. Ultrices elit amet sem
                  nullam volutpat convallis aliquam sed id. Sagittis id a sed a
                  lacus. In pretium est.
                </p>
                <p className="font-normal text-sm  text-[#111827] leading-[1.5rem]">
                  Lorem ipsum dolor sit amet consectetur. Amet gravida eu
                  egestas est vulputate massa pretium at. Vestibulum proin ut
                  cras ac dolor viverra lectus tempor. Diam phasellus arcu leo
                  placerat consequat sed. Sagittis ultricies ac non imperdiet
                  egestas vestibulum. Sit et porta non integer nulla nisl amet
                  ac et. Sit id tellus at nulla pulvinar.
                </p>
                <p className="font-normal text-sm  text-[#111827] leading-[1.5rem]">
                  Lorem ipsum dolor sit amet consectetur. Amet gravida eu
                  egestas est vulputate massa pretium at. Vestibulum proin ut
                  cras ac dolor viverra lectus tempor. Diam phasellus arcu leo
                  placerat consequat sed. Sagittis ultricies ac non imperdiet
                  egestas vestibulum. Sit et porta non integer nulla nisl amet
                  ac et. Sit id tellus at nulla pulvinar.
                </p>
                <p className="font-normal text-sm  text-[#111827] leading-[1.5rem]">
                  Lorem ipsum dolor sit amet consectetur. Amet gravida eu
                  egestas est vulputate massa pretium at. Vestibulum proin ut
                  cras ac dolor viverra lectus tempor. Diam phasellus arcu leo
                  placerat consequat sed. Sagittis ultricies ac non imperdiet
                  egestas vestibulum. Sit et porta non integer nulla nisl amet
                  ac et. Sit id tellus at nulla pulvinar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
}
