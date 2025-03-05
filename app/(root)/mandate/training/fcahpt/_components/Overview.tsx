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
              Federal College of Animal Health and Production Technology, Vom is
              a pioneering institution in veterinary education in West Africa.
              Established in 1941 as Veterinary School Vom, it has evolved into
              a leading institution for training middle-level manpower in animal
              health and production technology.
            </p>
          </div>
          <div className="flex flex-col gap-10 sm:px-14">
            <div className="grid grid-cols-[100%] lg:grid-cols-2 gap-10">
              <div className="flex flex-col gap-3 rounded-xl py-5 px-7 border-[1.08px] border-[#E8E8E8] bg-white">
                <h3 className="font-medium text-xl sm:text-2xl sm:leading-[1.61375rem] text-[#131517]">
                  Our Vision
                </h3>

                <p className="font-normal text-sm sm:text-lg sm:leading-[1.61375rem] text-[#64728F] hidden lg:block ">
                  To be the foremost Institution in Africa with <br /> qualified
                  professionals to train and produce <br /> internationally
                  recognized middle level <br /> manpower equipped with
                  knowledge, skills and attitudes in Animal Health, Production
                  and <br /> Extension services.
                </p>

                <p className="font-normal text-sm sm:text-lg sm:leading-[1.61375rem] text-[#64728F] block lg:hidden ">
                  To be the foremost Institution in Africa with qualified
                  professionals to train and produce internationally recognized
                  middle level manpower equipped with knowledge, skills and
                  attitudes in Animal Health, Production and Extension services.
                </p>
              </div>
              <div className="flex flex-col gap-4 rounded-xl py-5 px-7 border-[1.08px] border-[#E8E8E8] bg-white">
                <h3 className="font-medium text-xl sm:text-2xl sm:leading-[1.61375rem] text-[#131517]">
                  OUR MISSION
                </h3>

                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-2">
                    <div className="h-2 w-2 p-1 rounded-full bg-[#64728F]" />
                    <p className="font-normal text-sm sm:text-lg sm:leading-[1.61375rem] text-[#64728F] hidden lg:block  -mt-2 ">
                      To provide middle level technical manpower in <br />{" "}
                      Animal Health and Production Technology and <br /> related
                      disciplines
                    </p>

                    <p className="font-normal text-sm sm:text-lg sm:leading-[1.61375rem] text-[#64728F] block lg:hidden -mt-2 ">
                      To provide middle level technical manpower in Animal
                      Health and Production Technology and related disciplines
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="h-2 w-2 p-1 rounded-full bg-[#64728F]" />
                    <p className="font-normal text-sm sm:text-lg sm:leading-[1.61375rem] text-[#64728F] hidden lg:block -mt-2 ">
                      To enable effective utilization of acquired <br />{" "}
                      knowledge in livestock farm management
                    </p>

                    <p className="font-normal text-sm sm:text-lg sm:leading-[1.61375rem] text-[#64728F] block lg:hidden -mt-2 ">
                      To enable effective utilization of acquired knowledge in
                      livestock farm management
                    </p>
                  </div>

                  <div className="flex items-start gap-2">
                    <div className="h-2 w-2 p-1 rounded-full bg-[#64728F]" />
                    <p className="font-normal text-sm sm:text-lg sm:leading-[1.61375rem] text-[#64728F] hidden lg:block -mt-2 ">
                      To produce extension staff capable of <br /> bridging the
                      gap between Agro-Veterinary <br /> Research and livestock
                      farmers
                    </p>

                    <p className="font-normal text-sm sm:text-lg sm:leading-[1.61375rem] text-[#64728F] block lg:hidden -mt-2 ">
                      To produce extension staff capable of bridging the gap
                      between Agro-Veterinary Research and livestock farmers
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

                <div className="flex flex-col gap-2.5">
                  <h4 className="font-normal text-sm sm:text-lg text-[#64728F] leading-[2rem] ">
                    Training of middle level manpower in:
                  </h4>
                  <div className="flex flex-col gap-2 px-0 sm:px-6">
                    <p className="font-normal text-sm sm:text-lg text-[#64728F] leading-[2rem] ">
                      . Animal Health
                    </p>
                    <p className="font-normal text-sm sm:text-lg text-[#64728F] leading-[2rem] ">
                      . Animal Production
                    </p>
                    <p className="font-normal text-sm sm:text-lg text-[#64728F] leading-[2rem]">
                      . Livestock Extension/Management Services
                    </p>
                    <p className="font-normal text-sm sm:text-lg text-[#64728F] leading-[2rem] ">
                      . Vocational Training with focus on effective farm
                      establishment and management
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
