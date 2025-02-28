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
            <div className="flex flex-col gap-3 text-center">
              <p className="font-medium text-sm sm:text-lg text-[#111111]">
                . Quality research, teaching and extension for development
              </p>
              <p className="font-medium text-sm sm:text-lg text-[#111111]">
                . Impactful community service
              </p>
              <p className="font-medium text-sm sm:text-lg text-[#111111]">
                . Institutional integrity in honest service
              </p>
            </div>
          </div>
        </CustomContainer>
      </div>

      <CustomContainer>
        <div className="flex flex-col gap-10">
          <CardBorderedlessDetails
            title="Facilities and Infrastructure"
            points={[
              "Research facilities at Shika headquarters",
              "Animal breeding and production units",
              "Grassland and pasture research facilities",
              "Training centers",
              "Extension service facilities",
            ]}
          />

          <CardBorderedlessDetails
            title="Key Objectives"
            points={[
              "Improve livestock breeds through genetic research",
              "Develop effective animal nutrition strategies",
              "Enhance pasture and rangeland management",
              "Create sustainable livestock production systems",
              "Strengthen training and capacity building in animal production",
            ]}
          />
        </div>
      </CustomContainer>
    </section>
  );
}
