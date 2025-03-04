import CustomContainer from "@/components/CustomContainer";
import React from "react";
import CardBorderedlessDetails from "../../_components/CardBorderedlessDetails";

export default function Overview() {
  return (
    <section className="bg-white flex flex-col gap-20 pt-4 pb-16 md:pb-24">
      <CustomContainer>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-10">
          <h4 className="text-center font-semibold text-[#013B43]  text-sm sm:text-lg leading-[0.975rem]">
              OVERVIEW
            </h4>
            <p className="text-[#64728F] font-normal text-lg sm:text-xl">
              The National Centre for Agricultural Mechanization (NCAM) is
              Nigeria&apos;s premier institution dedicated to accelerating
              agricultural mechanization in the country. Established through
              Decree No. 35 of 1990 and later amended in the Agricultural
              Research Council of Nigeria (ARCN) 2021 Act, NCAM serves as a hub
              for developing and promoting agricultural mechanization
              technologies to transform Nigeria&apos;s agricultural sector.
            </p>
          </div>
          <div className="flex flex-col gap-10 px-6">
            <div className="grid grid-cols-about-mandate-res gap-10">
              <div className="flex flex-col gap-4 rounded-xl py-5 px-7 border-[1.08px] border-[#E8E8E8] bg-white">
                <h3 className="font-medium text-xl sm:text-2xl text-[#131517]">
                  Our vision
                </h3>

                <p className="font-normal text-sm sm:text-lg text-[#64728F] ">
                  To create a Centre with the capacity to mechanize
                  Nigeria&apos;s agriculture by encouraging home-grown
                  mechanization technologies and drastically reducing or
                  eliminating importation of agricultural machines and
                  equipment.
                </p>
              </div>
              <div className="flex flex-col gap-4 rounded-xl py-5 px-7 border-[1.08px] border-[#E8E8E8] bg-white">
                <h3 className="font-medium text-xl sm:text-2xl text-[#131517]">
                  OUR MISSION
                </h3>

                <p className="font-normal text-sm sm:text-lg text-[#64728F] ">
                  To standardize developed agricultural mechanization
                  technologies to ensure efficiency, reliability, quality, and
                  consistency, while making available through research and
                  development, mechanization technologies across various value
                  chains.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-[100%] rounded-xl py-5 px-7 border-[1.08px] border-[#E8E8E8] bg-white">
              <div className="flex flex-col gap-4">
                <h3 className="font-medium text-xl sm:text-2xl text-[#0A1425]">
                  Our Mandate
                </h3>

                <p className="font-normal text-sm sm:text-lg text-[#64728F] ">
                   The institute is tasked with accelerating the positive
                  transformation of Nigeria&apos;s agricultural sector through
                  adaptive and innovative research and development activities,
                  focusing on indigenous machine development, standardization,
                  and technology dissemination.
                </p>
              </div>
            </div>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
}
