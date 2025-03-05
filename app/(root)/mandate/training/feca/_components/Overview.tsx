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
              <h3 className="font-medium text-xl sm:text-2xl sm:leading-[1.61375rem] text-[#131517]">
                  Our Vision
                </h3>

                <p className="font-normal text-sm sm:text-lg sm:leading-[1.61375rem] text-[#64728F] hidden lg:block ">
                  A world class agricultural training institution, <br /> making direct
                  and sustainable impacts on gainful <br /> youth employment, food
                  security and improved <br /> livelihoods for farmers.
                </p>

                <p className="font-normal text-sm sm:text-lg sm:leading-[1.61375rem] text-[#64728F] block lg:hidden ">
                  A world class agricultural training institution, making direct
                  and sustainable impacts on gainful youth employment, food
                  security and improved livelihoods for farmers.
                </p>
              </div>
              <div className="flex flex-col gap-4 rounded-xl py-5 px-7 border-[1.08px] border-[#E8E8E8] bg-white">
                <h3 className="font-medium text-xl sm:text-2xl sm:leading-[1.61375rem] text-[#131517]">
                  OUR MISSION
                </h3>

                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-2">
                    <div className="h-2 w-2 p-1 rounded-full bg-[#64728F]" />
                    <p className="font-normal text-sm sm:text-lg text-[#64728F] -mt-2 leading-[2rem] ">
                      Integrate available manpower and resources into
                      agricultural sector opportunities
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="h-2 w-2 p-1 rounded-full bg-[#64728F]" />
                    <p className="font-normal text-sm sm:text-lg text-[#64728F] -mt-2 leading-[2rem]">
                      Revolutionize vocational training and short courses
                    </p>
                  </div>

                  <div className="flex items-start gap-2">
                    <div className="h-2 w-2 p-1 rounded-full bg-[#64728F]" />
                    <p className="font-normal text-sm sm:text-lg text-[#64728F] -mt-2 leading-[2rem]">
                      Incorporate value chain concepts and ICT into curriculum
                    </p>
                  </div>

                  <div className="flex items-start gap-2">
                    <div className="h-2 w-2 p-1 rounded-full bg-[#64728F]" />
                    <p className="font-normal text-sm sm:text-lg text-[#64728F] -mt-2 leading-[2rem]">
                      Improve community relations through adopted schools and
                      villages programs
                    </p>
                  </div>

                  <div className="flex items-start gap-2">
                    <div className="h-2 w-2 p-1 rounded-full bg-[#64728F]" />
                    <p className="font-normal text-sm sm:text-lg text-[#64728F] -mt-2 leading-[2rem]">
                      Enhance integration of agricultural activities for
                      resource efficiency
                    </p>
                  </div>

                  <div className="flex items-start gap-2">
                    <div className="h-2 w-2 p-1 rounded-full bg-[#64728F]" />
                    <p className="font-normal text-sm sm:text-lg text-[#64728F] -mt-2  leading-[2rem]">
                      Strengthen entrepreneurship and value chain studies
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-[100%] rounded-xl py-5 px-7 border-[1.08px] border-[#E8E8E8] bg-white">
              <div className="flex flex-col gap-4">
                <h3 className="font-medium text-xl sm:text-2xl sm:leading-[1.61375rem] text-[#131517]">
                  Our Mandate
                </h3>
                <p className="font-normal text-sm sm:text-lg sm:leading-[1.61375rem] text-[#64728F]">
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
