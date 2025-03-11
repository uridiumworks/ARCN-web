import CustomContainer from "@/components/CustomContainer";
import React from "react";

export default function Overview() {
  return (
    <section className="bg-white flex flex-col gap-16 pt-6 pb-14 md:pb-20">
      <CustomContainer>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            <h4 className="text-center font-semibold text-[#013B43]  text-sm sm:text-lg leading-[0.975rem]">
              OVERVIEW
            </h4>
            <p className="text-[#64728F] font-normal text-sm leading-[1.5rem]">
              Federal College of Agriculture, Ibadan (formerly called School of
              Agriculture) is Nigeria&apos;s premier agricultural institution,
              established in 1921. It serves as a hub for middle-level manpower
              development in agriculture, providing hands-on training to
              practically equip students for agricultural processes from input
              to production and value addition towards food security.
            </p>
          </div>
          <div className="flex flex-col gap-10 sm:px-14">
            <div className="grid grid-cols-[100%] lg:grid-cols-2 gap-10">
              <div className="flex flex-col gap-3 rounded-xl py-5 px-7 border-[1.08px] border-[#E8E8E8] bg-white">
                <h3 className="font-medium text-base leading-[1.61375rem] text-[#131517]">
                  Our Vision
                </h3>

                <p className="font-normal text-sm leading-[1.5rem] text-[#64728F]">
                  To provide qualitative education, including vocational and
                  entrepreneurial trainings, and enhance agricultural
                  production, making FCA Ibadan the first among equals in
                  Nigeria&apos;s Agricultural Educational Industry at the
                  tertiary level.
                </p>
              </div>
              <div className="flex flex-col gap-3 rounded-xl py-5 px-7 border-[1.08px] border-[#E8E8E8] bg-white">
                <h3 className="font-medium text-base leading-[1.61375rem] text-[#131517]">
                 Our Mission
                </h3>

                <p className="font-normal text-sm leading-[1.5rem] text-[#64728F]">
                  To contribute towards achieving the goals of Nigeria in
                  Agriculture through qualitative education and production of
                  well-equipped manpower.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-[100%] rounded-xl py-5 px-7 border-[1.08px] border-[#E8E8E8] bg-white">
              <div className="flex flex-col gap-3">
                <h3 className="font-medium text-base leading-[1.61375rem] text-[#131517]">
                  Our Mandate
                </h3>

                <p className="font-normal text-sm leading-[1.5rem] text-[#64728F]">
                  The institute is tasked with producing seasoned diplomates at
                  both National and Higher National Diploma levels with sound
                  practical skills to meet the demands of the agricultural
                  sector of Nigerian economy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
}
