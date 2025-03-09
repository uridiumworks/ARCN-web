import CustomContainer from "@/components/CustomContainer";
import React from "react";
import CardBorderedlessDetails from "../../_components/CardBorderedlessDetails";

export default function Overview() {
  return (
    <section className="bg-white flex flex-col gap-16 pt-6 pb-14 md:pb-20">
      <CustomContainer>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            <h4 className="text-center font-semibold text-[#013B43]  text-sm sm:text-lg leading-[0.975rem]">
              OVERVIEW
            </h4>
            <p className="text-[#64728F] font-normal text-sm  leading-[1.5rem]">
              The National Horticultural Research Institute (NIHORT) is
              Nigeria&apos;s premier institute dedicated to the research,
              development, and promotion of horticultural crops. Established
              through the Federal Government&apos;s Agricultural Research
              Institute Establishment Degree Order No. 35 of June 1975, NIHORT
              has since been instrumental in advancing tropical horticulture. It
              serves as a hub for innovation in horticultural crop production,
              processing, storage, and utilization.
            </p>
          </div>
          <div className="flex flex-col gap-10 sm:px-14 ">
            <div className="grid grid-cols-[100%] lg:grid-cols-2 gap-10">
              <div className="flex flex-col gap-3 rounded-xl py-5 px-7 border-[1.08px] border-[#E8E8E8] bg-white">
                <h3 className="font-medium text-base leading-[1.61375rem] text-[#131517]">
                  Our Vision
                </h3>

                <p className="font-normal text-sm leading-[1.5rem] text-[#64728F]">
                  To foster the development of horticultural produce and
                  products for both local consumption and export markets.
                </p>
              </div>
              <div className="flex flex-col gap-3 rounded-xl py-5 px-7 border-[1.08px] border-[#E8E8E8] bg-white">
                <h3 className="font-medium text-base leading-[1.61375rem] text-[#131517]">
                  OUR MISSION
                </h3>

                <p className="font-normal text-sm leading-[1.5rem] text-[#64728F]">
                  To achieve excellence in fruits, vegetables, spices,
                  ornamentals, and aromatic plant research through sustainable
                  production and utilization strategies.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-[100%] rounded-xl py-5 px-7 border-[1.08px] border-[#E8E8E8] bg-white">
              <div className="flex flex-col gap-3">
                <h3 className="font-medium text-base leading-[1.61375rem] text-[#131517]">
                  Our Mandate
                </h3>

                <p className="font-normal text-sm leading-[1.5rem] text-[#64728F]">
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
