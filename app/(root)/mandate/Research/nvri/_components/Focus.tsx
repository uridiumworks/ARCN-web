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
                NVRI conducts research across various areas including:
              </p>
              <p className="font-medium text-sm sm:text-lg text-[#111111]">
                . Zoonotic diseases (Mpox, COVID-19, Lassa Fever)
              </p>
              <p className="font-medium text-sm sm:text-lg text-[#111111]">
                . Livestock diseases (African Swine Fever, Foot-and-Mouth
                Disease)
              </p>
              <p className="font-medium text-sm sm:text-lg text-[#111111]">
                . Vaccine development and production
              </p>

              <p className="font-medium text-sm sm:text-lg text-[#111111]">
                . Disease surveillance and diagnosis
              </p>

              <p className="font-medium text-sm sm:text-lg text-[#111111]">
                . Animal health and production technology
              </p>
            </div>
          </div>
        </CustomContainer>
      </div>
      <CustomContainer>
        <div className="flex flex-col gap-10">
          <CardBorderedDetails
            title="National and International Collaborations"
            subContent="NVRI maintains active partnerships with:"
            points={[
              "World Health Organization (WHO)",
              "Food and Agriculture Organization (FAO)",
              "Food and Agriculture Organization (FAO)",
              "London School of Hygiene",
              "Fleming Fund in collaboration with UK Aid",
            ]}
          />

          <CardBorderedDetails
            title="Training and Consultancy"
            subContent="The institute offers training in:"
            points={[
              "Laboratory diagnosis",
              "Animal health and production technology",
              "Community animal health work",
              "Veterinary laboratory technology",
              "Extension services",
            ]}
          />

          <CardBorderedDetails
            title="Recent Achievements"
            points={[
              "Development and production of up to 120 million doses of livestock vaccines annually",
              "Establishment of 23 outstation laboratories for nationwide disease surveillance",
              "Recognition as National Reference Laboratory for Rabies",
              "Designation as Regional Laboratory for HPAI",
              "Accreditation by International Organisation for Standardisation (ISO 17025: 2017)",
            ]}
          />

          <CardBorderedDetails
            title="Impact Areas"
            points={[
              "200 communities directly impacted via agricultural training",
              "2,000 farmers reached through agricultural inputs",
              "65 institutional publications in three years",
              "57 project/program publications",
              "Multiple international recognitions and certifications",
            ]}
            endContent="NVRI continues to be a leading force in veterinary research and vaccine production in Africa, contributing significantly to animal health, food security, and public health safety."
          />
        </div>
      </CustomContainer>
    </section>
  );
}
