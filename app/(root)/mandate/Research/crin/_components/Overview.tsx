import CustomContainer from "@/components/CustomContainer";
import React from "react";

export default function Overview() {
  return (
    <section className="bg-white flex flex-col gap-16 pt-6 pb-14 md:pb-20">
      <CustomContainer>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            <h4 className="text-center font-semibold text-[#013B43]  text-sm  leading-[0.975rem]">
              OVERVIEW
            </h4>
            <p className="text-[#64728F] font-normal text-sm leading-[1.5rem]">
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
                <h3 className="font-medium text-base leading-[1.61375rem] text-[#131517]">
                  Our Vision
                </h3>

                <p className="font-normal text-sm leading-[1.5rem] text-[#64728F]">
                  To be a centre of excellence of international repute in the
                  research and development of Cashew, Cocoa, Coffee, Kola, and
                  Tea.
                </p>
              </div>
              <div className="flex flex-col gap-3 rounded-xl py-5 px-7 border-[1.08px] border-[#E8E8E8] bg-white">
                <h3 className="font-medium text-base leading-[1.61375rem] text-[#131517]">
                  Our Mission
                </h3>

                <p className="font-normal text-sm leading-[1.5rem] text-[#64728F] ">
                  To conduct innovative research that enhances the production,
                  quality, and value addition of mandate crops while
                  disseminating findings through effective extension services
                  and stakeholder capacity building for national development.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-[100%] rounded-xl py-5 px-7 border-[1.08px] border-[#E8E8E8] bg-white">
              <div className="flex flex-col gap-3">
                <h3 className="font-medium text-base leading-[1.61375rem] text-[#131517]">
                  Our Mandate
                </h3>

                <div className="flex flex-col gap-3">
                  <h4 className="font-normal text-sm  text-[#64728F] leading-[1.5rem] ">
                    The institute is mandated to conduct research on six crops
                    throughout Nigeria:
                  </h4>
                  <div className="flex flex-col gap-2">
                    <p className="font-normal text-sm  text-[#64728F] leading-[1.5rem] ">
                      . Cocoa
                    </p>
                    <p className="font-normal text-sm  text-[#64728F] leading-[1.5rem] ">
                      . Coffee
                    </p>
                    <p className="font-normal text-sm  text-[#64728F] leading-[1.5rem]">
                      . Cashew
                    </p>
                    <p className="font-normal text-sm  text-[#64728F] leading-[1.5rem] ">
                      . Kola
                    </p>
                    <p className="font-normal text-sm  text-[#64728F] leading-[1.5rem]">
                      . Tea
                    </p>
                    <p className="font-normal text-sm  text-[#64728F] leading-[1.5rem] ">
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
