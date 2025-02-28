import CustomContainer from "@/components/CustomContainer";
import React from "react";
import CardBorderedlessDetails from "../../_components/CardBorderedlessDetails";

export default function Values() {
  return (
    <section className="flex flex-col gap-12 py-14 md:py-20">
      <div className="bg-[#F9FFFB] p-6">
        <CustomContainer>
          <div className="flex flex-col text-center gap-3.5 justify-center">
            <h3 className="font-medium text-3xl sm:text-[2.625rem] text-[#111111]">
              Core Values
            </h3>
            <p className="text-base sm:text-lg font-normal text-[#111111]">
              Innovation, Quality, Efficiency, and Self-Reliance.
            </p>
          </div>
        </CustomContainer>
      </div>

      <CustomContainer>
        <div className="flex flex-col gap-10">
          <CardBorderedlessDetails
            title="Facilities and Infrastructure"
            points={[
              "Engineering workshops and laboratories",
              "Contact offices in Samaru, Akure, and Umudike",
              "Land mass of about 1000 hectares",
              "Research and development facilities",
              "Training centers and workshops",
            ]}
          />

          <CardBorderedlessDetails
            title="Key Objectives"
            points={[
              "Design and develop simple, low-cost equipment using local materials and skills",
              "Standardize and certify agricultural machines in collaboration with SON",
              "Evaluate and adapt mechanical technologies for local adoption",
              "Assist in commercializing proven machines and equipment",
              "Provide training and capacity building in agricultural mechanization",
            ]}
          />
        </div>
      </CustomContainer>
    </section>
  );
}
