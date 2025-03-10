import CustomContainer from "@/components/CustomContainer";
import React from "react";
import CardBorderedlessDetails from "../../../_components/CardBorderedlessDetails";

export default function Values() {
  return (
    <section className="py-8 sm:py-16 flex flex-col gap-10">
      <div className="bg-[#F9FFFB] p-8 sm:p-10">
        <CustomContainer>
          <div className="flex flex-col gap-3.5 items-center text-center">
            <h3 className="font-bold text-3xl sm:text-4xl text-[#111111] leading-[2.25rem]">
              Core Values
            </h3>
            <p className="text-[#111111] font-normal text-sm leading-[1.5rem]">
              Efficiency, Accountability, Innovation, Teamwork, Integrity
            </p>
          </div>
        </CustomContainer>
      </div>

      <CustomContainer>
        <div className="flex flex-col gap-10">
          <div className="grid grid-cols-[100%] gap-10">
            <CardBorderedlessDetails
              title="Facilities and Infrastructure"
              points={[
                "Central Laboratory (ISO 17025:2017 certified)",
                "Postharvest Incubation Centre",
                "Research Outreach Centers",
                "Processing Units",
                "Solar Cold Storage Systems",
                "Engineering Workshops",
              ]}
            />

            <CardBorderedlessDetails
              title="Key Objectives"
              points={[
                "Reduce postharvest losses",
                "Improve food storage and preservation techniques",
                "Develop innovative processing technologies",
                "Enhance food quality and safety",
                "Build capacity in postharvest management",
              ]}
            />
          </div>
        </div>
      </CustomContainer>
    </section>
  );
}
