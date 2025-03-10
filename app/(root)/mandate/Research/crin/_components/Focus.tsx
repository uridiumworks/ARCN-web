import CustomContainer from "@/components/CustomContainer";
import React from "react";
import CardBorderedDetails from "../../../_components/CardBorderedDetails";

export default function Focus() {
  return (
    <section className="py-8 sm:py-16 flex flex-col gap-10">
      <div className="bg-[#F9FFFB] p-8 sm:p-10">
        <CustomContainer>
          <div className="flex flex-col  gap-3.5 items-center text-center">
            <h3 className="font-bold text-3xl sm:text-4xl text-[#111111] leading-[2.25rem]">
              Research Focus
            </h3>
            <div className="flex flex-col gap-2 text-center">
              <p className="font-medium text-sm  text-[#111111] leading-[1.5rem]">
                CRIN&apos;s research activities are structured into various
                directorates including:
              </p>
              <p className="font-medium text-sm  text-[#111111] leading-[1.5rem]">
                . Research Operations
              </p>
              <p className="font-medium text-sm  text-[#111111] leading-[1.5rem]">
                . Research Outreach
              </p>
              <p className="font-medium text-sm  text-[#111111] leading-[1.5rem]">
                . Value Added Research
              </p>

              <p className="font-medium text-sm  text-[#111111] leading-[1.5rem]">
                . Production and Substations
              </p>

              <p className="font-medium text-sm  text-[#111111] leading-[1.5rem]">
                . Training
              </p>

              <p className="font-medium text-sm  text-[#111111] leading-[1.5rem]">
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
            shouldBoldPointText={false}
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
