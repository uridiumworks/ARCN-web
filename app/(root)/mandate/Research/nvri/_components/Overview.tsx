import CustomContainer from "@/components/CustomContainer";
import React from "react";

export default function Overview() {
  return (
    <section className="bg-white flex flex-col gap-20 pt-4 pb-16 md:pb-24">
      <CustomContainer>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-10">
            <h4 className="text-center font-semibold text-[#013B43] text-sm sm:text-lg">
              OVERVIEW
            </h4>
            <p className="text-[#64728F] font-normal text-lg sm:text-xl">
              The National Veterinary Research Institute (NVRI) is
              Nigeria&apos;s premier institute for veterinary research and
              vaccine production. Established in 1924 as a Veterinary Laboratory
              in Vom, following devastating Rinderpest outbreaks that decimated
              cattle populations in West Africa. The institute has evolved into
              a cornerstone of veterinary medicine and research in Africa,
              producing up to 120 million doses of vaccines annually.
            </p>
          </div>

          <div className="flex flex-col gap-10 px-6">
            <div className="grid grid-cols-about-mandate-res gap-10">
              <div className="flex flex-col gap-4 rounded-xl py-5 px-7 border-[1.08px] border-[#E8E8E8] bg-white">
                <h3 className="font-medium text-xl sm:text-2xl text-[#131517]">
                  Our vision
                </h3>

                <p className="font-normal text-sm sm:text-lg text-[#64728F] ">
                  To be the Apex Veterinary Research Institute in Africa driven
                  by excellence in Research, Diagnosis, Vaccine Development and
                  Production
                </p>
              </div>
              <div className="flex flex-col gap-4 rounded-xl py-5 px-7 border-[1.08px] border-[#E8E8E8] bg-white">
                <h3 className="font-medium text-xl sm:text-2xl text-[#131517]">
                  OUR MISSION
                </h3>

                <p className="font-normal text-sm sm:text-lg text-[#64728F] ">
                  To conduct research, disease surveillance, diagnosis,
                  development and production of vaccines and biological for the
                  control of animal and zoonotic disease, applying modern
                  technology based on international best practices.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-[100%] rounded-xl py-5 px-7 border-[1.08px] border-[#E8E8E8] bg-white">
              <div className="flex flex-col gap-4">
                <h3 className="font-medium text-xl sm:text-2xl text-[#0A1425]">
                  Our Mandate
                </h3>

                <div className="flex flex-col gap-2">
                  <p className="font-normal text-sm sm:text-lg text-[#64728F] ">
                    1. Conduct research into all aspects of animal diseases,
                    their Treatment and Control
                  </p>
                  <p className="font-normal text-sm sm:text-lg text-[#64728F] ">
                    2. Develop and Produce animal Vaccines, Sera and Biological
                    to meet National demand
                  </p>
                  <p className="font-normal text-sm sm:text-lg text-[#64728F] ">
                    3. Provide Surveillance and Diagnosis of animal diseases
                  </p>
                  <p className="font-normal text-sm sm:text-lg text-[#64728F] ">
                    4. Introduce Exotic Stock for improved egg, meat and milk
                    production
                  </p>
                  <p className="font-normal text-sm sm:text-lg text-[#64728F] ">
                    5. Provide Extension Services to poultry and livestock
                    farmers
                  </p>
                  <p className="font-normal text-sm sm:text-lg text-[#64728F] ">
                    6. Train intermediate Manpower in Veterinary Laboratory
                    Technology and Animal Health and Production Technology
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
