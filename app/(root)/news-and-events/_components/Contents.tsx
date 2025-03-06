"use client";
import React from "react";
import Image from "next/image";

import CustomContainer from "@/components/CustomContainer";
import CustomBreadcrumbs from "./Breadcrumbs";

export default function Contents() {
  return (
    <section className="pb-12 md:pb-20 pt-4">
      <CustomContainer>
        <div className="flex flex-col gap-8 sm:gap-14">
          <CustomBreadcrumbs text="News" />
            <div className="flex flex-col justify-center gap-7 md:w-7/12 mx-auto "> 
              <div className="flex flex-col text-center space-y-7">
                <p className="font-medium text-sm md:text-xl text-[#3F4654]">More than 85% of the world&apos;s 1.2 billion youth live in low- and middle-income countries, where many face limited opportunities for employment or entrepreneurship.</p>
              </div>
              
              <div className=" flex items-center gap-4 justify-center ">
                <Image src={"/Images/woman.png"} alt="woman" width={48} height={48} />
                <div className="flex flex-col justify-start">
                  <h1 className="font-medium text-[#3F4654] text-sm">Ayush Jangra</h1>
                  <p className="font-normal text-[#6B7589] text-xs">Updated on Apr 19, 2024</p>
                </div>
              </div>
            </div>

          <div className="flex flex-col gap-10">
            <div className="shrink-0 rounded-3xl overflow-hidden w-full h-auto">
              <Image
                className="w-full h-auto object-cover"
                src="/Images/Mandatepage/coordination-report-holder-img.png"
                alt=""
                height={360}
                width={750}
              />
            </div>

            <div className="px-0 sm:px-8 space-y-4 flex flex-col gap-8">
              <div className="flex flex-col space-y-5 gap-4">
                <p className="font-normal text-sm sm:text-lg text-[#111827]">
                  Lorem ipsum dolor sit amet consectetur. Amet gravida eu
                  egestas est vulputate massa pretium at. Vestibulum proin ut
                  cras ac dolor viverra lectus tempor. Diam phasellus arcu leo
                  placerat consequat sed. Sagittis ultricies ac non imperdiet
                  egestas vestibulum. Sit et porta non integer nulla nisl amet
                  ac et. Sit id tellus at nulla pulvinar.
                </p>
                <p className="font-normal text-sm sm:text-lg text-[#111827]">
                  Lorem ipsum dolor sit amet consectetur. Ultrices elit amet sem
                  nullam volutpat convallis aliquam sed id. Sagittis id a sed a
                  lacus. In pretium est.
                </p>
              </div>
            </div>

            <div className="px-0 sm:px-8 space-y-4 flex flex-col gap-8">
              <h2 className="text-[#111827] font-bold text-2xl sm:text-4xl">
                Lorem ipsum dolor sit amet consectetur. Quis faucibus{" "}
              </h2>
              <div className="flex flex-col space-y-5 gap-4">
                <p className="font-normal text-sm sm:text-lg text-[#111827]">
                  Lorem ipsum dolor sit amet consectetur. Amet gravida eu
                  egestas est vulputate massa pretium at. Vestibulum proin ut
                  cras ac dolor viverra lectus tempor. Diam phasellus arcu leo
                  placerat consequat sed. Sagittis ultricies ac non imperdiet
                  egestas vestibulum. Sit et porta non integer nulla nisl amet
                  ac et. Sit id tellus at nulla pulvinar.
                </p>
                <p className="font-normal text-sm sm:text-lg text-[#111827]">
                  Lorem ipsum dolor sit amet consectetur. Ultrices elit amet sem
                  nullam volutpat convallis aliquam sed id. Sagittis id a sed a
                  lacus. In pretium est.
                </p>
                <p className="font-normal text-sm sm:text-lg text-[#111827]">
                  Lorem ipsum dolor sit amet consectetur. Amet gravida eu
                  egestas est vulputate massa pretium at. Vestibulum proin ut
                  cras ac dolor viverra lectus tempor. Diam phasellus arcu leo
                  placerat consequat sed. Sagittis ultricies ac non imperdiet
                  egestas vestibulum. Sit et porta non integer nulla nisl amet
                  ac et. Sit id tellus at nulla pulvinar.
                </p>
                <p className="font-normal text-sm sm:text-lg text-[#111827]">
                  Lorem ipsum dolor sit amet consectetur. Amet gravida eu
                  egestas est vulputate massa pretium at. Vestibulum proin ut
                  cras ac dolor viverra lectus tempor. Diam phasellus arcu leo
                  placerat consequat sed. Sagittis ultricies ac non imperdiet
                  egestas vestibulum. Sit et porta non integer nulla nisl amet
                  ac et. Sit id tellus at nulla pulvinar.
                </p>
                <p className="font-normal text-sm sm:text-lg text-[#111827]">
                  Lorem ipsum dolor sit amet consectetur. Amet gravida eu
                  egestas est vulputate massa pretium at. Vestibulum proin ut
                  cras ac dolor viverra lectus tempor. Diam phasellus arcu leo
                  placerat consequat sed. Sagittis ultricies ac non imperdiet
                  egestas vestibulum. Sit et porta non integer nulla nisl amet
                  ac et. Sit id tellus at nulla pulvinar.
                </p>
              </div>
            </div>

            <div className="px-0 sm:px-8 flex flex-col gap-8">
              <h2 className="text-[#111827] font-bold text-2xl sm:text-4xl">
                Lorem ipsum dolor sit amet consectetur. Quis faucibus{" "}
              </h2>
              <div className="flex flex-col space-y-5 gap-4">
                <p className="font-normal text-sm sm:text-lg text-[#111827]">
                  Lorem ipsum dolor sit amet consectetur. Amet gravida eu
                  egestas est vulputate massa pretium at. Vestibulum proin ut
                  cras ac dolor viverra lectus tempor. Diam phasellus arcu leo
                  placerat consequat sed. Sagittis ultricies ac non imperdiet
                  egestas vestibulum. Sit et porta non integer nulla nisl amet
                  ac et. Sit id tellus at nulla pulvinar.
                </p>
                <p className="font-normal text-sm sm:text-lg text-[#111827]">
                  Lorem ipsum dolor sit amet consectetur. Ultrices elit amet sem
                  nullam volutpat convallis aliquam sed id. Sagittis id a sed a
                  lacus. In pretium est.
                </p>
                <p className="font-normal text-sm sm:text-lg text-[#111827]">
                  Lorem ipsum dolor sit amet consectetur. Amet gravida eu
                  egestas est vulputate massa pretium at. Vestibulum proin ut
                  cras ac dolor viverra lectus tempor. Diam phasellus arcu leo
                  placerat consequat sed. Sagittis ultricies ac non imperdiet
                  egestas vestibulum. Sit et porta non integer nulla nisl amet
                  ac et. Sit id tellus at nulla pulvinar.
                </p>
                <p className="font-normal text-sm sm:text-lg text-[#111827]">
                  Lorem ipsum dolor sit amet consectetur. Amet gravida eu
                  egestas est vulputate massa pretium at. Vestibulum proin ut
                  cras ac dolor viverra lectus tempor. Diam phasellus arcu leo
                  placerat consequat sed. Sagittis ultricies ac non imperdiet
                  egestas vestibulum. Sit et porta non integer nulla nisl amet
                  ac et. Sit id tellus at nulla pulvinar.
                </p>
                <p className="font-normal text-sm sm:text-lg text-[#111827]">
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