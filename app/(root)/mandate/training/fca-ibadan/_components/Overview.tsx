import CustomContainer from "@/components/CustomContainer";
import React from "react";

export default function Overview() {
  return (
    <section className="bg-white flex flex-col gap-20 pt-4 pb-16 md:pb-24">
      <CustomContainer>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-10">
            <h4 className="text-center font-semibold text-[#013B43]  text-sm sm:text-lg leading-[0.975rem]">
              OVERVIEW
            </h4>
            <p className="text-[#64728F] font-normal text-lg sm:text-xl leading-[2rem]">
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
                <h3 className="font-medium text-xl sm:text-2xl sm:leading-[1.61375rem] text-[#131517]">
                  Our Vision
                </h3>

                <p className="font-normal text-sm sm:text-lg sm:leading-[1.61375rem] text-[#64728F] hidden lg:block ">
                  To provide qualitative education, including <br /> vocational
                  and entrepreneurial trainings, and <br /> enhance agricultural
                  production, making FCA <br /> Ibadan the first among equals in
                  Nigeria&apos;s <br /> Agricultural Educational Industry at the
                  tertiary <br /> level.
                </p>

                <p className="font-normal text-sm sm:text-lg sm:leading-[1.61375rem] text-[#64728F] block lg:hidden ">
                  To provide qualitative education, including vocational and
                  entrepreneurial trainings, and enhance agricultural
                  production, making FCA Ibadan the first among equals in
                  Nigeria&apos;s Agricultural Educational Industry at the
                  tertiary level.
                </p>
              </div>
              <div className="flex flex-col gap-3 rounded-xl py-5 px-7 border-[1.08px] border-[#E8E8E8] bg-white">
                <h3 className="font-medium text-xl sm:text-2xl sm:leading-[1.61375rem] text-[#131517]">
                  OUR MISSION
                </h3>

                <p className="font-normal text-sm sm:text-lg sm:leading-[1.61375rem] text-[#64728F] hidden lg:block ">
                  To contribute towards achieving the goals of <br /> Nigeria in
                  Agriculture through qualitative <br /> education and
                  production of well-equipped <br /> manpower.
                </p>

                <p className="font-normal text-sm sm:text-lg sm:leading-[1.61375rem] text-[#64728F] block lg:hidden ">
                  To contribute towards achieving the goals of Nigeria in
                  Agriculture through qualitative education and production of
                  well-equipped manpower.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-[100%] rounded-xl py-5 px-7 border-[1.08px] border-[#E8E8E8] bg-white">
              <div className="flex flex-col gap-3">
                <h3 className="font-medium text-xl sm:text-2xl sm:leading-[1.61375rem] text-[#131517]">
                  Our Mandate
                </h3>

                <p className="font-normal text-sm sm:text-lg sm:leading-[1.61375rem] text-[#64728F] hidden lg:block ">
                  The institute is tasked with producing seasoned diplomates at
                  both National and Higher <br /> National Diploma levels with
                  sound practical skills to meet the demands of the agricultural{" "}
                  <br />
                  sector of Nigerian economy.
                </p>

                <p className="font-normal text-sm sm:text-lg sm:leading-[1.61375rem] text-[#64728F] block lg:hidden ">
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
