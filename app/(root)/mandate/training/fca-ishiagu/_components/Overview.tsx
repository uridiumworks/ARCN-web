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
              The Federal College of Agriculture, Ishiagu is a premier
              agricultural institution that offers both National Diploma (ND)
              and Higher National Diploma (HND) programs. The institution stands
              as a center of excellence for agricultural education and training,
              focusing on developing skilled agricultural technologists and
              promoting sustainable agricultural practices in Nigeria.
            </p>
          </div>
          <div className="flex flex-col gap-10 px-6">
            <div className="grid grid-cols-about-mandate-res gap-10">
              <div className="flex flex-col gap-4 rounded-xl py-5 px-7 border-[1.08px] border-[#E8E8E8] bg-white">
                <h3 className="font-medium text-xl sm:text-2xl text-[#131517]">
                  Our vision
                </h3>

                <p className="font-normal text-sm sm:text-lg text-[#64728F] ">
                  To be an internationally recognized centre of excellence for
                  training, research, scientific innovations and development of
                  highly skilled, self-reliant and competitive agricultural
                  technologists for sustainable agriculture and human
                  development to meet national and global challenges
                </p>
              </div>
              <div className="flex flex-col gap-4 rounded-xl py-5 px-7 border-[1.08px] border-[#E8E8E8] bg-white">
                <h3 className="font-medium text-xl sm:text-2xl text-[#131517]">
                  OUR MISSION
                </h3>

                <p className="font-normal text-sm sm:text-lg text-[#64728F] ">
                  To provide world-class academic environment through quality
                  teaching, research, and extension education/services, while
                  pursuing leadership in agricultural knowledge, capacity
                  building, and innovative outreach for increased agricultural
                  productivity, food security, and sustainable natural resource
                  management.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-[100%] rounded-xl py-5 px-7 border-[1.08px] border-[#E8E8E8] bg-white">
              <div className="flex flex-col gap-4">
                <h3 className="font-medium text-xl sm:text-2xl text-[#0A1425]">
                  Our Mandate
                </h3>

                <p className="font-normal text-sm sm:text-lg text-[#64728F] ">
                  The college is mandated to develop and organize high-quality
                  practical-oriented training with dynamic curricula to produce
                  self-reliant skilled technologists at National Diploma and
                  Higher National Diploma levels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
}
