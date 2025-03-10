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
              The National Animal Production Research Institute (NAPRI)
              originated from the Shika Cattle Stud farm established in 1928.
              Initially focused on selecting indigenous breeds of bulls for
              breeding native herds, the institute evolved through various
              stages before being established as an autonomous research
              institute through Decree No. 35 of August 27, 1973, and the
              Research Institutes Establishment Order of 1975. NAPRI is funded
              by the Federal Government but administratively operates under
              Ahmadu Bello University, Zaria.
            </p>
          </div>

          <div className="flex flex-col gap-10 sm:px-14">
            <div className="grid grid-cols-[100%] lg:grid-cols-2 gap-10">
              <div className="flex flex-col gap-3 rounded-xl py-5 px-7 border-[1.08px] border-[#E8E8E8] bg-white">
                <h3 className="font-medium text-base leading-[1.61375rem] text-[#131517]">
                  Our Vision
                </h3>

                <p className="font-normal text-sm leading-[1.5rem] text-[#64728F]">
                  To be a Research Institute of Excellence in the development
                  and dissemination of innovations and appropriate technologies
                  for commercial and competitive smallholder, medium and large
                  scale environmentally friendly animal production systems to
                  ensure animal food security in Nigeria.
                </p>
              </div>
              <div className="flex flex-col gap-3 rounded-xl py-5 px-7 border-[1.08px] border-[#E8E8E8] bg-white">
                <h3 className="font-medium text-base leading-[1.61375rem] text-[#131517]">
                  Our Mission
                </h3>

                <p className="font-normal text-sm leading-[1.5rem] text-[#64728F]">
                  To conduct demand-driven research and training in animal
                  production and dissemination of technologies to animal
                  producers, processors and marketers in an integrated
                  value-chain system to achieve sustainable employment
                  generation, poverty alleviation and improved livelihood in
                  Nigeria.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-[100%] rounded-xl py-5 px-7 border-[1.08px] border-[#E8E8E8] bg-white">
              <div className="flex flex-col gap-4">
                <h3 className="font-medium text-base leading-[1.61375rem] text-[#131517]">
                  Our Mandate
                </h3>

                <div className="flex flex-col gap-3">
                  <h4 className="font-normal text-sm  text-[#64728F] leading-[1.5rem]">
                    The institute is mandated to conduct research in:
                  </h4>
                  <div className="flex flex-col gap-2">
                    <p className="font-normal text-sm  text-[#64728F] leading-[1.5rem] ">
                      . Genetic, nutritional, and reproductive improvements of
                      livestock species
                    </p>
                    <p className="font-normal text-sm  text-[#64728F] leading-[1.5rem] ">
                      . Improvement and management of sown pastures
                    </p>
                    <p className="font-normal text-sm  text-[#64728F] leading-[1.5rem] ">
                      . Management and improvement of rangeland feed resources
                    </p>
                    <p className="font-normal text-sm  text-[#64728F] leading-[1.5rem] ">
                      . Development of animal nutrition packages
                    </p>
                    <p className="font-normal text-sm  text-[#64728F] leading-[1.5rem] ">
                      . Integration of livestock into farming systems
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
