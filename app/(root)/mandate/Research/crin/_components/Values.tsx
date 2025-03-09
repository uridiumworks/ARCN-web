import CustomContainer from "@/components/CustomContainer";
import React from "react";
import CardBorderedlessDetails from "../../_components/CardBorderedlessDetails";

export default function Values() {
  return (
    <section className="py-9 sm:py-18 flex flex-col gap-10">
      <div className="bg-[#F9FFFB] p-8 sm:p-10">
        <CustomContainer>
          <div className="flex flex-col gap-3.5 items-center text-center">
          <h3 className="font-medium uppercase text-3xl sm:text-4xl text-[#111111] leading-[2.25rem]">
              Core Values
            </h3>
            <p className="text-[#111111] font-normal text-sm leading-[1.5rem]">
              Excellence, Innovation, Research Integrity, and Stakeholder
              Development
            </p>
          </div>
        </CustomContainer>
      </div>

      <CustomContainer>
        <div className="grid grid-cols-[100%] sm:grid-cols-2 gap-8">
          <CardBorderedlessDetails
            title="Facilities and Infrastructure"
            points={[
              "Research Laboratories",
              "Extension Service Units",
              "Training Centers",
              "Value Addition Facilities",
              "Information and Documentation Center",
            ]}
          />

          <CardBorderedlessDetails
            title="Key Objectives"
            points={[
              "Apply science and technology to increase crop productivity",
              "Improve quality and value addition of mandate crops",
              "Disseminate research findings through extension services",
              "Build capacity of stakeholders",
              "Enhance national agricultural development",
            ]}
          />
        </div>
      </CustomContainer>
    </section>
  );
}
