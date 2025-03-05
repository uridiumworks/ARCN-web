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
            <p className="text-[#64728F] font-normal text-lg sm:text-xl">
              The Cocoa Research Institute of Nigeria (CRIN) is Nigeria&apos;s
              premier research institution dedicated to the development and
              improvement of cocoa and other tree crops. Established in 1964,
              CRIN applies science and technology to increase productivity,
              improve quality, and add value to its mandate crops while
              disseminating research findings through extension services and
              capacity building.
            </p>
          </div>

          <div className="flex flex-col gap-10 sm:px-14">
            <div className="grid grid-cols-[100%] lg:grid-cols-2 gap-10">
              <div className="flex flex-col gap-3 rounded-xl py-5 px-7 border-[1.08px] border-[#E8E8E8] bg-white">
              <h3 className="font-medium text-xl sm:text-2xl sm:leading-[1.61375rem] text-[#131517]">
                  Our Vision
                </h3>

                <p className="font-normal text-sm sm:text-lg sm:leading-[1.61375rem] text-[#64728F] hidden lg:block ">
                  To be a centre of excellence of international <br /> repute in the
                  research and development of <br /> Cashew, Cocoa, Coffee, Kola, and
                  Tea.
                </p>

                <p className="font-normal text-sm sm:text-lg sm:leading-[1.61375rem] text-[#64728F] block lg:hidden ">
                  To be a centre of excellence of international repute in the
                  research and development of Cashew, Cocoa, Coffee, Kola, and
                  Tea.
                </p>
              </div>
              <div className="flex flex-col gap-3 rounded-xl py-5 px-7 border-[1.08px] border-[#E8E8E8] bg-white">
                <h3 className="font-medium text-xl sm:text-2xl sm:leading-[1.61375rem] text-[#131517]">
                  OUR MISSION
                </h3>

                <p className="font-normal text-sm sm:text-lg sm:leading-[1.61375rem] text-[#64728F] hidden lg:block ">
                  To conduct innovative research that enhances <br /> the production,
                  quality, and value addition of <br /> mandate crops while
                  disseminating findings <br /> through effective extension services
                  and <br /> stakeholder capacity building for national <br /> development.
                </p>

                <p className="font-normal text-sm sm:text-lg sm:leading-[1.61375rem] text-[#64728F] block lg:hidden ">
                  To conduct innovative research that enhances the production,
                  quality, and value addition of mandate crops while
                  disseminating findings through effective extension services
                  and stakeholder capacity building for national development.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-[100%] rounded-xl py-5 px-7 border-[1.08px] border-[#E8E8E8] bg-white">
              <div className="flex flex-col gap-3">
                <h3 className="font-medium text-xl sm:text-2xl sm:leading-[1.61375rem] text-[#131517]">
                  Our Mandate
                </h3>

                <div className="flex flex-col gap-3">
                  <h4 className="font-normal text-sm sm:text-lg text-[#64728F] leading-[2rem] ">
                    The institute is mandated to conduct research on six crops
                    throughout Nigeria:
                  </h4>
                  <div className="flex flex-col gap-2">
                    <p className="font-normal text-sm sm:text-lg text-[#64728F] leading-[2rem] ">
                      . Cocoa
                    </p>
                    <p className="font-normal text-sm sm:text-lg text-[#64728F] leading-[2rem] ">
                      . Coffee
                    </p>
                    <p className="font-normal text-sm sm:text-lg text-[#64728F] leading-[2rem]">
                      . Cashew
                    </p>
                    <p className="font-normal text-sm sm:text-lg text-[#64728F] leading-[2rem] ">
                      . Kola
                    </p>
                    <p className="font-normal text-sm sm:text-lg text-[#64728F] leading-[2rem]">
                      . Tea
                    </p>
                    <p className="font-normal text-sm sm:text-lg text-[#64728F] leading-[2rem] ">
                      . Black Plum
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
}
