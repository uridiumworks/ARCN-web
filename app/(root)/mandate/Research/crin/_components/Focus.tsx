import CustomContainer from "@/components/CustomContainer";
import React from "react";
import CardBorderedDetails from "../../_components/CardBorderedDetails";

export default function Focus() {
  return (
    <section className="py-9 sm:py-18 flex flex-col gap-10">
      <div className="bg-[#F9FFFB] p-8 sm:p-10">
        <CustomContainer>
          <div className="flex flex-col items-center text-center">
            <h2 className="font-medium text-[2rem] text-center sm:text-[2.625] text-[#111111]">
              Research Focus
            </h2>
            <div className="flex flex-col gap-2 text-center">
              <p className="font-medium text-sm sm:text-lg text-[#111111]">
                CRIN&apos;s research activities are structured into various
                directorates including:
              </p>
              <p className="font-medium text-sm sm:text-lg text-[#111111]">
                . Research Operations
              </p>
              <p className="font-medium text-sm sm:text-lg text-[#111111]">
                . Research Outreach
              </p>
              <p className="font-medium text-sm sm:text-lg text-[#111111]">
                . Value Added Research
              </p>

              <p className="font-medium text-sm sm:text-lg text-[#111111]">
                . Production and Substations
              </p>

              <p className="font-medium text-sm sm:text-lg text-[#111111]">
                . Training
              </p>

              <p className="font-medium text-sm sm:text-lg text-[#111111]">
                . Planning
              </p>
            </div>
          </div>
        </CustomContainer>
      </div>
      <CustomContainer>
        <div className="flex flex-col gap-10">
          <CardBorderedDetails
            title="National and International Collaborations"
            subContent="The institute maintains active partnerships with:"
            points={[
              "International Institute for Tropical Agriculture (IITA)",
              "Nigeria Export Promotion Council (NEPC)",
              "Cocoa Farmers Association of Nigeria (CFAN)",
              "AACE Foods",
            ]}
          />

          <CardBorderedDetails
            title="Historical Evolution"
            points={[
              "1964: Established as successor to Nigerian Substation of West African Cocoa Research Institute",
              "1964: Mandate expanded to include kola and coffee research",
              "1975: Further expansion to include cashew and tea research",
              "Present: Comprehensive research institute covering six mandate crops",
            ]}
          />

          <CardBorderedDetails
            title="Impact Areas"
            points={[
              "Agricultural Research Development",
              "Crop Improvement",
              "Farmer Capacity Building",
              "Extension Services",
              "Value Addition Research",
              "Technology Transfer",
            ]}
            endContent="CRIN continues to play a vital role in Nigeria's agricultural sector, particularly in tree crop research and development, contributing significantly to the nation's agricultural productivity and economic growth through innovative research and stakeholder engagement."
          />
        </div>
      </CustomContainer>
    </section>
  );
}
