import CustomContainer from "@/components/CustomContainer";
import React from "react";
import CardBorderedlessDetails from "../../_components/CardBorderedlessDetails";

export default function Values() {
  return (
    <section className="py-9 sm:py-18 flex flex-col gap-10">
      <div className="bg-[#F9FFFB] p-8 sm:p-10">
        <CustomContainer>
          <div className="flex flex-col items-center text-center">
            <h2 className="font-medium text-[2rem] text-center sm:text-[2.625] text-[#111111]">
              Core Values
            </h2>
            <p className="text-[#111111] font-normal text-base sm:text-lg">
              Excellence, Integrity, Networking & Collaboration, and
              Accountability.
            </p>
          </div>
        </CustomContainer>
      </div>

      <CustomContainer>
        <div className="grid grid-cols-[100%] sm:grid-cols-2 gap-10">
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
