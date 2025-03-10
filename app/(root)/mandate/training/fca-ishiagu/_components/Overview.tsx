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
              The Federal College of Agriculture, Ishiagu is a premier
              agricultural institution that offers both National Diploma (ND)
              and Higher National Diploma (HND) programs. The institution stands
              as a center of excellence for agricultural education and training,
              focusing on developing skilled agricultural technologists and
              promoting sustainable agricultural practices in Nigeria.
            </p>
          </div>
          <div className="flex flex-col gap-10 sm:px-14">
            <div className="grid grid-cols-[100%] lg:grid-cols-2 gap-10">
              <div className="flex flex-col gap-3 rounded-xl py-5 px-7 border-[1.08px] border-[#E8E8E8] bg-white">
                <h3 className="font-medium text-base leading-[1.61375rem] text-[#131517]">
                  Our Vision
                </h3>

                <p className="font-normal text-sm leading-[1.5rem] text-[#64728F]">
                  To be an internationally recognized centre of excellence for
                  training, research, scientific innovations and development of
                  highly skilled, self-reliant and competitive agricultural
                  technologists for sustainable agriculture and human
                  development to meet national and global challenges
                </p>
              </div>
              <div className="flex flex-col gap-3 rounded-xl py-5 px-7 border-[1.08px] border-[#E8E8E8] bg-white">
                <h3 className="font-medium text-base leading-[1.61375rem] text-[#131517]">
                  Our Mission
                </h3>

                <p className="font-normal text-sm leading-[1.5rem] text-[#64728F]">
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
              <div className="flex flex-col gap-3">
                <h3 className="font-medium text-base leading-[1.61375rem] text-[#131517]">
                  Our Mandate
                </h3>

                <p className="font-normal text-sm leading-[1.5rem] text-[#64728F]">
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
