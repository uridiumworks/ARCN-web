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
              The Federal College of Agriculture, Akure is a premier
              agricultural training institution established on January 10, 1957.
              Originally known as the School of Agriculture, Akure, it has
              evolved into a comprehensive agricultural training center offering
              both National Diploma (ND) and Higher National Diploma (HND)
              programs in various agricultural fields. The institution focuses
              on skill-based Agricultural Technology Training to promote
              self-reliance and profitable farming practices.
            </p>
          </div>
          <div className="flex flex-col gap-10 sm:px-14">
            <div className="grid grid-cols-[100%] gap-10">
              <div className="flex flex-col gap-3 rounded-xl py-5 px-7 border-[1.08px] border-[#E8E8E8] bg-white">
                <h3 className="font-medium text-base leading-[1.61375rem] text-[#131517]">
                  Our Vision
                </h3>

                <p className="font-normal text-sm leading-[1.5rem] text-[#64728F]">
                  A world class agricultural training institution, making direct
                  and sustainable impacts on gainful youth employment, food
                  security and improved livelihoods for farmers.
                </p>
              </div>
              <div className="flex flex-col gap-4 rounded-xl py-5 px-7 border-[1.08px] border-[#E8E8E8] bg-white">
                <h3 className="font-medium text-base leading-[1.61375rem] text-[#131517]">
                  OUR MISSION
                </h3>

                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-2">
                    <div className="h-2 w-2 p-1 rounded-full bg-[#64728F]" />
                    <p className="font-normal text-sm text-[#64728F] -mt-2 leading-[2rem] ">
                      Integrate available manpower and resources into
                      agricultural sector opportunities
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="h-2 w-2 p-1 rounded-full bg-[#64728F]" />
                    <p className="font-normal text-sm text-[#64728F] -mt-2 leading-[1.5rem]">
                      Revolutionize vocational training and short courses
                    </p>
                  </div>

                  <div className="flex items-start gap-2">
                    <div className="h-2 w-2 p-1 rounded-full bg-[#64728F]" />
                    <p className="font-normal text-sm text-[#64728F] -mt-2 leading-[1.5rem]">
                      Incorporate value chain concepts and ICT into curriculum
                    </p>
                  </div>

                  <div className="flex items-start gap-2">
                    <div className="h-2 w-2 p-1 rounded-full bg-[#64728F]" />
                    <p className="font-normal text-sm text-[#64728F] -mt-2 leading-[1.5rem]">
                      Improve community relations through adopted schools and
                      villages programs
                    </p>
                  </div>

                  <div className="flex items-start gap-2">
                    <div className="h-2 w-2 p-1 rounded-full bg-[#64728F]" />
                    <p className="font-normal text-sm text-[#64728F] -mt-2 leading-[1.5rem]">
                      Enhance integration of agricultural activities for
                      resource efficiency
                    </p>
                  </div>

                  <div className="flex items-start gap-2">
                    <div className="h-2 w-2 p-1 rounded-full bg-[#64728F]" />
                    <p className="font-normal text-sm  text-[#64728F] -mt-2  leading-[1.5rem]">
                      Strengthen entrepreneurship and value chain studies
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-[100%] rounded-xl py-5 px-7 border-[1.08px] border-[#E8E8E8] bg-white">
              <div className="flex flex-col gap-4">
                <h3 className="font-medium text-base leading-[1.61375rem] text-[#131517]">
                  Our Mandate
                </h3>
                <p className="font-normal text-sm  leading-[1.5rem] text-[#64728F]">
                  The College is mandated to train middle-level manpower in the
                  field of Agriculture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
}
