import CustomContainer from "@/components/CustomContainer";
import React from "react";
import CardBorderedlessDetails from "../../_components/CardBorderedlessDetails";

export default function Values() {
  return (
    <section className="py-9 sm:py-18 flex flex-col gap-10">
      <div className="bg-[#F9FFFB] p-8 sm:p-10">
        <CustomContainer>
          <div className="flex flex-col gap-3.5 items-center text-center">
          <h3 className="font-medium text-3xl sm:text-[2.625rem] text-[#111111] leading-[2.875rem]">
              Core Values
            </h3>
            <p className="text-[#111111] font-normal text-base sm:text-base leading-[1.531875rem]">
              Excellence, Integrity, Networking & Collaboration, and
              Accountability.
            </p>
          </div>
        </CustomContainer>
      </div>

      <CustomContainer>
        <div className="grid grid-cols-[100%] sm:grid-cols-2 gap-8">
          <CardBorderedlessDetails
            title="Facilities and Infrastructure"
            points={[
              "23 Outstation Laboratories nationwide",
              "Vaccine Production Facilities",
              "Diagnostic Laboratories",
              "Research Facilities",
              "Training Centers",
              "Extension Service Units",
            ]}
          />

          <CardBorderedlessDetails
            title="Key Objectives"
            points={[
              "Enhance disease surveillance and diagnosis across Nigeria",
              "Develop and produce high-quality vaccines for livestock",
              "Conduct cutting-edge research in veterinary medicine",
              "Provide comprehensive extension services to farmers",
              "Build capacity in laboratory diagnosis and animal health",
            ]}
          />
        </div>
      </CustomContainer>
    </section>
  );
}
