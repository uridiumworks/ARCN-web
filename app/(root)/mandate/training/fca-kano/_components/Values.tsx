import CustomContainer from "@/components/CustomContainer";
import React from "react";
import CardBorderedlessDetails from "../../_components/CardBorderedlessDetails";
import CardBorderedDetails from "../../_components/CardBorderedDetails";
import { CircleCheck } from "lucide-react";

export default function Values() {
  return (
    <section className="py-9 sm:py-18 flex flex-col gap-14">
      <div className="bg-[#F9FFFB] p-8 sm:p-10">
        <CustomContainer>
          <div className="flex flex-col items-center px-0 sm:px-8 md:px-16">
            <h2 className="font-medium text-[2rem] text-center sm:text-[2.625] text-[#111111]">
            Core Values & Philosophy
            </h2>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div>
                  <CircleCheck color="#30A85F" size={20} />
                </div>
                <p className="text-sm sm:text-lg text-[#171616] font-normal">
                  {" "}
                  <span className="font-bold">Motto:</span> Safe food for life{" "}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div>
                  <CircleCheck color="#30A85F" size={20} />
                </div>
                <p className="text-sm sm:text-lg text-[#171616] font-normal">
                  {" "}
                  <span className="font-bold">Philosophy:</span> Training of
                  sound and effective middle level manpower citizens who can
                  exploit vast agricultural resources for self-realization and
                  national development
                </p>
              </div>
            </div>
          </div>
        </CustomContainer>
      </div>

      <div className="flex flex-col gap-12">
        <CustomContainer>
          <div className="flex flex-col gap-10">
            <h3 className="font-medium text-3xl sm:text-[2.625rem] text-[#111111]">
              Academic Programs
            </h3>
            <div className="grid grid-cols-[100%] sm:grid-cols-2 gap-8 items-start">
              <CardBorderedlessDetails
                title="Higher National Diploma (HND) Programs:"
                titleSize="text-2xl sm:text-[2rem]"
                points={[
                  "Animal Production Technology",
                  "Computer Science",
                  "Statistics",
                  "Food Technology",
                  "Crop Production Technology",
                  "Pest Management Technology",
                  "Agricultural Extension and Management",
                ]}
              />
              <CardBorderedlessDetails
                title="National Diploma (ND) Programs:"
                titleSize="text-2xl sm:text-[2rem]"
                points={[
                  "Animal Health and Production Technology",
                  "Agricultural Technology",
                  "Horticultural Technology",
                  "Food Technology",
                  "Nutrition and Dietetics",
                  "Statistics",
                  "Computer Science",
                  "Science Laboratory Technology",
                  "Cooperative Economics and Management",
                  "Agribusiness and Management",
                ]}
              />
            </div>
          </div>
        </CustomContainer>

        <CustomContainer>
          <div className="flex flex-col gap-10">
            <CardBorderedlessDetails
              title="Key Objectives"
              points={[
                "Produce well-trained Agricultural manpower and issue National Diploma (ND) and Higher National Diploma (HND) Certificates",
                "Contribute and provide solutions to Nigeria's Agricultural challenges through extension services",
                "Offer short courses and training programs for boosting competencies of Nigeria's Agricultural personnel",
              ]}
            />

            <CardBorderedDetails
              title="National and International Collaborations"
              subContent=""
              points={[
                "International Potato Center (CIPO)",
                "Green Innovation Centers for Agriculture (GIZ/GIAE)",
                "Royal Tropical Institute, Netherlands (KIT)",
                "International Institute for Tropical Agriculture (IITA)",
                "Centre for Dry land Agriculture (CDA), Bayero University Kano",
                "International Crop Research Institute for Semi-Arid Tropics (ICRISAT)",
              ]}
            />

            <CardBorderedDetails
              title="Recent Achievements"
              subContent=""
              points={[
                "International Crop Research Institute for Semi-Arid Tropics (ICRISAT)",
                "Training of over 3,000 farmers in agricultural practices",
                "Development of new curriculum in Postharvest Technology",
                "Research advancement in storability and shelf life of agricultural products",
                "Successful implementation of Orange Fleshed Sweet Potato (OFSP) school feeding program",
              ]}
            />

            <CardBorderedDetails
              title="Impact Metrics"
              subContent=""
              points={[
                "98 institutional publications in 3 years",
                "18 project/program publications",
                "3,000 farmers trained in agricultural practices",
                "38% increase in utilization of underutilized crops",
                "Significant reduction in postharvest losses",
                "Enhanced food security through improved storage techniques",
              ]}
            />
          </div>
        </CustomContainer>
      </div>
    </section>
  );
}
