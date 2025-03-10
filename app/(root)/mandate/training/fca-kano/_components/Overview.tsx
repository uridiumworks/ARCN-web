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
              Federal College of Agricultural Produce Technology, Kano is the
              training arm of the Nigerian Stored Produce Research Institute
              (NSPRI). Established in 1975 as School of Food Storage Technology,
              it has evolved into a comprehensive agricultural technology
              institution focusing on postharvest handling, processing,
              preservation, and storage of agricultural produce.
            </p>
          </div>
          <div className="flex flex-col gap-10 sm:px-14">
            <div className="grid grid-cols-[100%] lg:grid-cols-2 gap-10">
              <div className="flex flex-col gap-3 rounded-xl py-5 px-7 border-[1.08px] border-[#E8E8E8] bg-white">
                <h3 className="font-medium text-base leading-[1.61375rem] text-[#131517]">
                  Our Vision
                </h3>

                <p className="font-normal text-sm leading-[1.5rem] text-[#64728F]">
                  To be a world-class training institute for dissemination of
                  technical information on Postharvest handling, Processing,
                  Preservation and Storage of agricultural produce using
                  sustainable food system transformation and advances in
                  Postharvest Technology for sustainable food security.
                </p>
              </div>
              <div className="flex flex-col gap-3 rounded-xl py-5 px-7 border-[1.08px] border-[#E8E8E8] bg-white">
                <h3 className="font-medium text-base leading-[1.61375rem] text-[#131517]">
                  OUR MISSION
                </h3>

                <p className="font-normal text-sm leading-[1.5rem] text-[#64728F]">
                  To be an integral part of world-class middle level manpower
                  training institutions where skills and potentials are
                  harnessed, be a reliable team player in sustainable food
                  system transformation, effective service delivery and
                  postharvest loss mitigation, and offer excellent opportunities
                  for self-actualization through innovative postharvest handling
                  of Agricultural produce.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-[100%] rounded-xl py-5 px-7 border-[1.08px] border-[#E8E8E8] bg-white">
              <div className="flex flex-col gap-3">
                <h3 className="font-medium text-base leading-[1.61375rem] text-[#131517]">
                  Our Mandate
                </h3>

                <div className="flex flex-col gap-2">
                  <p className="font-normal text-sm  text-[#64728F] leading-[1.5rem] ">
                    1. Conduct middle-level manpower training in produce
                    inspection and stored products technology
                  </p>
                  <p className="font-normal text-sm  text-[#64728F] leading-[1.5rem] ">
                    2. Provide vocational training in Postharvest produce
                    handling and inspection
                  </p>
                  <p className="font-normal text-sm  text-[#64728F] leading-[1.5rem] ">
                    3. Train scientists and engineers in food processing and
                    preservation
                  </p>
                  <p className="font-normal text-sm  text-[#64728F]  leading-[1.5rem]">
                    4. Produce agricultural extension technicians
                  </p>
                  <p className="font-normal text-sm  text-[#64728F] leading-[1.5rem]">
                    5. Organize agricultural seminars and exhibitions
                  </p>
                  <p className="font-normal text-sm  text-[#64728F] leading-[1.5rem]">
                    6. Support marketing of farm produce tools and equipment
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
