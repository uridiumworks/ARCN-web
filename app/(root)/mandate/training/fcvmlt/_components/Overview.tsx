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
              The Federal College of Veterinary and Medical Laboratory
              Technology (FCVMLT) is a premier institution dedicated to
              veterinary and medical laboratory technology education in Nigeria.
              Established in 1956 as the Laboratory Technology Training School
              (LTTS), it has evolved into a comprehensive institution offering
              training in veterinary and medical laboratory sciences. The
              college serves as a hub for professional development in laboratory
              technology, supporting both national healthcare and veterinary
              services.
            </p>
          </div>
          <div className="flex flex-col gap-10 px-6">
            <div className="grid grid-cols-about-mandate-res gap-10">
              <div className="flex flex-col gap-4 rounded-xl py-5 px-7 border-[1.08px] border-[#E8E8E8] bg-white">
                <h3 className="font-medium text-xl sm:text-2xl text-[#131517]">
                  Our vision
                </h3>

                <p className="font-normal text-sm sm:text-lg text-[#64728F] ">
                  To be the foremost College of Veterinary & Medical Laboratory
                  and Health Technology Education and Training for National
                  Development and Economic Growth, producing graduates equipped
                  with character, knowledge, and skills in ONE-HEALTH.
                </p>
              </div>
              <div className="flex flex-col gap-4 rounded-xl py-5 px-7 border-[1.08px] border-[#E8E8E8] bg-white">
                <h3 className="font-medium text-xl sm:text-2xl text-[#131517]">
                  OUR MISSION
                </h3>

                <p className="font-normal text-sm sm:text-lg text-[#64728F] ">
                  To achieve excellence in Veterinary and Health Technology
                  Education and Training based on International Best Practices,
                  with Professionals and Well-Motivated Staff, while Promoting
                  the Value of ONE-HEALTH with Diligence and Dedication.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-[100%] rounded-xl py-5 px-7 border-[1.08px] border-[#E8E8E8] bg-white">
              <div className="flex flex-col gap-4">
                <h3 className="font-medium text-xl sm:text-2xl text-[#0A1425]">
                  Our Mandate
                </h3>

                <div className="flex flex-col gap-2.5">
                  <h4 className="font-normal text-sm sm:text-lg text-[#64728F] ">
                    The institute is tasked with training middle-level manpower
                    for:
                  </h4>
                  <div className="flex flex-col gap-2 px-0 sm:px-6">
                    <p className="font-normal text-sm sm:text-lg text-[#64728F] ">
                      . Veterinary and medical research laboratories
                    </p>
                    <p className="font-normal text-sm sm:text-lg text-[#64728F] ">
                      . Vaccine and biological productions
                    </p>
                    <p className="font-normal text-sm sm:text-lg text-[#64728F] ">
                      . Diagnosis of animal and human diseases
                    </p>
                    <p className="font-normal text-sm sm:text-lg text-[#64728F] ">
                      . Environmental health diagnosis and pest control
                    </p>

                    <p className="font-normal text-sm sm:text-lg text-[#64728F] ">
                      . Teaching and research for development in agriculture,
                      health, and environmental sciences
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
