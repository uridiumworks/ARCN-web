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
              The National Root Crops Research Institute (NRCRI) is a premier
              agricultural research institution in Nigeria dedicated to
              advancing the development and utilization of root and tuber crops.
              Established in 1923 and elevated in 1975 as a major crop commodity
              research institute, NRCRI focuses on improving food security,
              reducing poverty, and driving sustainable agricultural practices
              through cutting-edge research, technology dissemination, and
              stakeholder engagement.
            </p>
          </div>

          <div className="flex flex-col gap-10">
            <h4 className="text-center font-semibold text-[#013B43] text-sm ">
              Historical Background
            </h4>
            <p className="text-[#64728F] font-normal text-sm leading-[1.5rem]">
              NRCRI began as a Provincial Experimental Farm under British
              colonial administration in 1923. Over the decades, it evolved into
              a full-fledged commodity research institute, addressing the
              genetic improvement, production, processing, and marketing of
              economically important crops such as yam, cassava, sweet potato,
              cocoyam, and ginger. It has consistently played a key role in{" "}
              Nigeria&apos;s agricultural transformation and development.
            </p>
          </div>
          <div className="flex flex-col gap-10 sm:px-14">
            <div className="grid grid-cols-cols-[100%] lg:grid-cols-2 gap-10">
              <div className="flex flex-col gap-3 rounded-xl py-5 px-7 border-[1.08px] border-[#E8E8E8] bg-white">
                <h3 className="font-medium text-base leading-[1.61375rem] text-[#131517]">
                  Our Vision
                </h3>

                <p className="font-normal text-sm leading-[1.5rem] text-[#64728F] ">
                  To be a global center of excellence for root and tuber crop
                  research and development.
                </p>
              </div>
              <div className="flex flex-col gap-3 rounded-xl py-5 px-7 border-[1.08px] border-[#E8E8E8] bg-white">
                <h3 className="font-medium text-base leading-[1.61375rem] text-[#131517]">
                  OUR MISSION
                </h3>

                <p className="font-normal text-sm leading-[1.5rem] text-[#64728F] ">
                   To develop sustainable agricultural technologies for root and
                  tuber crops to enhance productivity, improve livelihoods, and
                  ensure food security.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-[100%] rounded-xl py-5 px-7 border-[1.08px] border-[#E8E8E8] bg-white">
              <div className="flex flex-col gap-3">
                <h3 className="font-medium text-base leading-[1.61375rem] text-[#131517]">
                  Our Mandate
                </h3>

                <div className="flex flex-col gap-2">
                  <p className="font-normal text-sm  leading-[1.5rem] text-[#64728F]">
                    1. Conduct research on the genetic improvement, cultivation,
                    and utilization of root and tuber crops.
                  </p>
                  <p className="font-normal text-sm  leading-[1.5rem] text-[#64728F]">
                    2. Develop solutions for challenges in storage, processing,
                    and marketing of root and tuber crops.
                  </p>

                  <p className="font-normal text-sm  leading-[1.5rem] text-[#64728F]">
                    3. Provide extension services and training for stakeholders
                    in the South-East Agro-Ecological Zone and beyond
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
}
