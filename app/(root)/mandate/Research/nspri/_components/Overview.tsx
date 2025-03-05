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
            <p className="text-[#64728F] font-normal text-lg sm:text-xl">
              The Nigerian Stored Products Research Institute (NSPRI) focuses on
              research into bulk storage problems of export commodities and
              local food crops. Established in 1948 as the West African Stored
              Products Research Unit (WASPRU), it became NSPRI after
              Nigeria&apos;s independence in 1960. The institute specializes in
              improving and maintaining the quality of bulk commodity crops and
              local food crops.
            </p>
          </div>

          <div className="flex flex-col gap-10 sm:px-14">
            <div className="grid grid-cols-[100%] lg:grid-cols-2 gap-10">
              <div className="flex flex-col gap-3 rounded-xl py-5 px-7 border-[1.08px] border-[#E8E8E8] bg-white">
              <h3 className="font-medium text-xl sm:text-2xl sm:leading-[1.61375rem] text-[#131517]">
                  Our Vision
                </h3>


                <p className="font-normal text-sm sm:text-lg sm:leading-[1.61375rem] text-[#64728F] hidden lg:block ">
                  To be a leading provider of agricultural <br /> postharvest solutions
                  in Nigeria and the West <br /> Africa sub-region.
                </p>

                <p className="font-normal text-sm sm:text-lg sm:leading-[1.61375rem] text-[#64728F] block lg:hidden ">
                  To be a leading provider of agricultural postharvest solutions
                  in Nigeria and the West Africa sub-region.
                </p>
              </div>
              <div className="flex flex-col gap-3 rounded-xl py-5 px-7 border-[1.08px] border-[#E8E8E8] bg-white">
                <h3 className="font-medium text-xl sm:text-2xl sm:leading-[1.61375rem] text-[#131517]">
                  OUR MISSION
                </h3>

                <p className="font-normal text-sm sm:text-lg sm:leading-[1.61375rem] text-[#64728F] hidden lg:block ">
                 Reducing postharvest losses by improving the <br /> quality, safety,
                  and availability of agricultural <br /> produce.
                </p>

                <p className="font-normal text-sm sm:text-lg sm:leading-[1.61375rem] text-[#64728F] block lg:hidden ">
                  Reducing postharvest losses by improving the quality, safety,
                  and availability of agricultural produce.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-[100%] rounded-xl py-5 px-7 border-[1.08px] border-[#E8E8E8] bg-white">
              <div className="flex flex-col gap-3">
                <h3 className="font-medium text-xl sm:text-2xl sm:leading-[1.61375rem] text-[#131517]">
                  Our Mandate
                </h3>

                <div className="flex flex-col gap-2">
                  <p className="font-normal text-sm sm:text-lg text-[#64728F] leading-[2rem] ">
                    1. Research into improvement of perishable crops quality
                  </p>
                  <p className="font-normal text-sm sm:text-lg text-[#64728F] leading-[2rem] ">
                    2. Maintenance of durable crops quality
                  </p>
                  <p className="font-normal text-sm sm:text-lg text-[#64728F] leading-[2rem]">
                    3. Enhancement of tree crops quality
                  </p>
                  <p className="font-normal text-sm sm:text-lg text-[#64728F] leading-[2rem] ">
                    4. Development of postharvest equipment
                  </p>
                  <p className="font-normal text-sm sm:text-lg text-[#64728F] leading-[2rem]">
                    5. Improvement of livestock products processing
                  </p>
                  <p className="font-normal text-sm sm:text-lg text-[#64728F] leading-[2rem]">
                    6. Capacity building in postharvest technology
                  </p>
                  <p className="font-normal text-sm sm:text-lg text-[#64728F] leading-[2rem]">
                    7. Development of food standards
                  </p>
                  <p className="font-normal text-sm sm:text-lg text-[#64728F] leading-[2rem] ">
                    8. Research on stored products pests and pesticides
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
