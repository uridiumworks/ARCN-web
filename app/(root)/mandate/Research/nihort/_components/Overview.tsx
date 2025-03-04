import CustomContainer from "@/components/CustomContainer";
import React from "react";
import CardBorderedlessDetails from "../../_components/CardBorderedlessDetails";

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
              The National Horticultural Research Institute (NIHORT) is
              Nigeria&apos;s premier institute dedicated to the research,
              development, and <br /> promotion of horticultural crops. Established
              through the Federal Government&apos;s Agricultural Research
              Institute Establishment <br /> Degree Order No. 35 of June 1975, NIHORT
              has since been instrumental in advancing tropical horticulture. It
              serves as a hub for <br /> innovation in horticultural crop production,
              processing, storage, and utilization.
            </p>
          </div>
          <div className="flex flex-col gap-10 sm:px-14 ">
            <div className="grid grid-cols-[100%] lg:grid-cols-2 gap-10">
              <div className="flex flex-col gap-3 rounded-xl py-5 px-7 border-[1.08px] border-[#E8E8E8] bg-white">
                <h3 className="font-medium text-xl sm:text-2xl sm:leading-[1.61375rem] text-[#131517]">
                  Our Vision
                </h3>

                <p className="font-normal text-sm sm:text-lg sm:leading-[1.61375rem] text-[#64728F] hidden lg:block ">
                  To foster the development of horticultural <br /> produce and
                  products for both local <br /> consumption and export markets.
                </p>
                <p className="font-normal text-sm sm:text-lg sm:leading-[1.61375rem] text-[#64728F] block lg:hidden ">
                  To foster the development of horticultural produce and
                  products for both local consumption and export markets.
                </p>
              </div>
              <div className="flex flex-col gap-3 rounded-xl py-5 px-7 border-[1.08px] border-[#E8E8E8] bg-white">
                <h3 className="font-medium text-xl sm:text-2xl sm:leading-[1.61375rem] text-[#131517]">
                  OUR MISSION
                </h3>

                <p className="font-normal text-sm sm:text-lg sm:leading-[1.61375rem] text-[#64728F] hidden lg:block ">
                  To achieve excellence in fruits, vegetables,
                  <br /> spices, ornamentals, and aromatic plant <br /> research
                  through sustainable production and <br /> utilization
                  strategies.
                </p>
                <p className="font-normal text-sm sm:text-lg sm:leading-[1.61375rem] text-[#64728F] block lg:hidden ">
                  To achieve excellence in fruits, vegetables, spices,
                  ornamentals, and aromatic plant research through sustainable
                  production and utilization strategies.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-[100%] rounded-xl py-5 px-7 border-[1.08px] border-[#E8E8E8] bg-white">
              <div className="flex flex-col gap-3">
                <h3 className="font-medium text-xl sm:text-2xl sm:leading-[1.61375rem] text-[#131517]">
                  Our Mandate
                </h3>

                <p className="font-normal text-sm sm:text-lg sm:leading-[1.61375rem] text-[#64728F] hidden lg:block ">
                  The institute is tasked with conducting research into genetic
                  improvement, production <br /> techniques, processing,
                  storage, and marketing of horticultural crops. NIHORT&apos;s
                  mandate <br /> also includes knowledge dissemination and
                  capacity building to enhance agricultural <br /> productivity
                  and sustainability.
                </p>
                <p className="font-normal text-sm sm:text-lg sm:leading-[1.61375rem] text-[#64728F] block lg:hidden ">
                  The institute is tasked with conducting research into genetic
                  improvement, production techniques, processing, storage, and
                  marketing of horticultural crops. NIHORT&apos;s mandate also
                  includes knowledge dissemination and capacity building to
                  enhance agricultural productivity and sustainability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </CustomContainer>

      <CustomContainer>
        <div className="flex flex-col gap-10">
          <CardBorderedlessDetails
            title="Facilities and Infrastructure"
            points={[
              "Biotechnology Laboratory",
              "Gene Bank for long-term vegetable germplasm storage",
              "Fruit juice processing plant",
              "Mushroom research and production laboratory",
              "Training center equipped for conferences and workshops",
              "Greenhouses for indigenous and exotic horticultural crop",
            ]}
          />
          <CardBorderedlessDetails
            title="Key Objectives"
            points={[
              "Collect and conserve genetic resources of fruits, vegetables, and spices",
              "Breed and develop improved crop varieties suitable for Nigeria's diverse agroecological zones.",
              "Innovate postharvest processing and preservation techniques to reduce wastage.",
              "Promote eco-friendly farming practices through biochar production and biopesticides.",
              "Strengthen training and capacity-building initiatives for stakeholders in horticulture.",
            ]}
          />
        </div>
      </CustomContainer>
    </section>
  );
}
