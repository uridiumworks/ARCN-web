import CustomContainer from "@/components/CustomContainer";
import React from "react";
import CardBorderedlessDetails from "../../_components/CardBorderedlessDetails";
import CardBorderedDetails from "../../_components/CardBorderedDetails";
import { CircleCheck } from "lucide-react";

export default function Historical() {
  return (
    <section className="py-9 sm:py-18 flex flex-col gap-14">
      <div className="bg-[#F9FFFB] p-8 sm:p-10">
        <CustomContainer>
          <div className="flex flex-col items-center px-0 sm:px-8 md:px-16">
            <h2 className="font-medium text-[2rem] text-center sm:text-[2.625] text-[#111111]">
              Historical Significance
            </h2>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div>
                  <CircleCheck color="#30A85F" size={20} />
                </div>
                <p className="text-sm sm:text-lg text-[#171616] font-normal">
                  First Higher Institution in West Africa to produce graduate
                  Veterinary Surgeons before Nigeria&apos;s first university
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div>
                  <CircleCheck color="#30A85F" size={20} />
                </div>
                <p className="text-sm sm:text-lg text-[#171616] font-normal">
                  Pioneering role in training middle level veterinary manpower
                  for African countries (1947-1962)
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div>
                  <CircleCheck color="#30A85F" size={20} />
                </div>
                <p className="text-sm sm:text-lg text-[#171616] font-normal">
                  Served countries including Cameroons, Liberia, Ghana, Sierra
                  Leone, Gambia, Ethiopia, and Sudan
                </p>
              </div>
            </div>
          </div>
        </CustomContainer>
      </div>

      <CustomContainer>
        <div className="flex flex-col gap-10">
          <CardBorderedDetails
            title="Academic Affiliations"
            subContent=""
            points={["Abubakar Tafawa Balewa University Bauchi State (ATBU)"]}
          />

          <CardBorderedDetails
            title="Research Focus Areas"
            subContent=""
            points={[
              "Ethno-veterinary practices in Nigeria",
              "Identification and characterization of medicinal plants",
              "Integration of traditional practices in livestock health",
              "Endemic animal disease control and prevention",
              "Development of flavonoids for poultry and livestock production",
            ]}
          />

          <CardBorderedDetails
            title="Legacy Impact"
            subContent="The institution maintains its historical significance while adapting to modern challenges in animal health and production technology, continuing its role as a crucial institution for veterinary education in Africa."
            points={[
              "Pioneer in veterinary education in West Africa",
              "Significant contribution to regional veterinary capacity building",
              "Continuous development of middle-level technical expertise in animal health",
              "Bridge between research institutions and livestock farmers",
              "Development of sustainable livestock management practices",
            ]}
          />
        </div>
      </CustomContainer>
    </section>
  );
}
