import CustomContainer from "@/components/CustomContainer";
import React from "react";
import CardBorderedDetails from "../../_components/CardBorderedDetails";
import CardBorderedlessDetails from "../../_components/CardBorderedlessDetails";

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
                Research activities are conducted through specialized
                departments:
              </p>
              <p className="font-medium text-sm sm:text-lg text-[#111111]">
                . Perishable Crops Research
              </p>
              <p className="font-medium text-sm sm:text-lg text-[#111111]">
                . Durable Crops Research
              </p>
              <p className="font-medium text-sm sm:text-lg text-[#111111]">
                . Research Outreach
              </p>

              <p className="font-medium text-sm sm:text-lg text-[#111111]">
                . Postharvest Engineering Research
              </p>
            </div>
          </div>
        </CustomContainer>
      </div>

      <CustomContainer>
        <div className="flex flex-col gap-10">
          <CardBorderedDetails
            title="National and International Collaborations"
            subContent="Key partnerships include"
            points={[
              "International Institute for Tropical Agriculture (IITA)",
              "African Agricultural Technology Foundation (AATF)",
              "Natural Research Institute (NRI), UK",
              "Multiple Nigerian Universities",
              "Sasakawa Africa Association",
              "International Food Policy Research Institute (IFPRI)",
            ]}
          />

          <div className="grid grid-cols-[100%] sm:grid-cols-2">
            <CardBorderedDetails
              title="Training and Consultancy"
              subContent="Training Programs:"
              points={[
                "Postharvest Technology",
                "Food Processing and Preservation",
                "Storage Systems Management",
                "Quality Control and Safety",
                "Equipment Operation",
              ]}
            />

            <CardBorderedDetails
              title="Consultancy Expertise"
              points={[
                "Storage Solutions",
                "Food Processing Technology",
                "Quality Assessment",
                "Pest Management",
              ]}
            />
          </div>

          <div className="flex flex-col gap-6 border border-[#E7E7E7] bg-[#FCFCFC] rounded-2xl px-3 py-4">
            <h3 className="font-medium text-3xl sm:text-[2.625rem] text-[#111111]">
              Recent Achievements
            </h3>
            <div className="grid grid-cols-[100%] sm:grid-cols-2">
              <CardBorderedlessDetails
                subContent="1. Solar Cold Storage System:"
                subContentClassNames="font-bold"
                points={[
                  "Developed off-grid solar-powered storage for fruits and vegetables",
                  "Reduced postharvest losses at farm gates",
                  "Increased farmer income in rural areas",
                  "Enhanced produce shelf life",
                ]}
              />

              <CardBorderedlessDetails
                subContent="2. NSPRIDUST® Development"
                subContentClassNames="font-bold"
                points={[
                  "Created non-synthetic grain protectant",
                  "Improved grain storage safety",
                  "Enhanced food security",
                  "Reduced chemical pesticide use",
                ]}
              />

              <CardBorderedlessDetails
                subContent="3. Solar Dryer Innovation"
                subContentClassNames="font-bold"
                points={[
                  "Developed multiple solar dryer variants",
                  "Increased drying efficiency",
                  "Improved product hygiene",
                  "Reduced energy costs",
                ]}
              />

              <CardBorderedlessDetails
                subContent="4. Postharvest Incubation Centre"
                subContentClassNames="font-bold"
                points={[
                  "Established processing support facility",
                  "Facilitated NAFDAC product registration",
                  "Enhanced agro-processing businesses",
                  "Improved market access",
                ]}
              />

              <CardBorderedlessDetails
                subContent="5. Laboratory Certification"
                subContentClassNames="font-bold"
                points={[
                  "Achieved ISO 17025:2017 certification",
                  "Enhanced global recognition",
                  "Improved export testing capabilities",
                  "Expanded service reach",
                ]}
              />
            </div>
          </div>

          <div className="flex flex-col gap-6 border border-[#E7E7E7] bg-[#FCFCFC] rounded-2xl px-3 py-4">
            <h3 className="font-medium text-3xl sm:text-[2.625rem] text-[#111111]">
              Impact Metrics
            </h3>
            <div className="grid grid-cols-[100%] sm:grid-cols-2">
              <CardBorderedlessDetails
                points={[
                  "1,200 farmers trained in agricultural practices",
                  "Widespread adoption of storage technologies",
                  "Enhanced food preservation capabilities",
                  "Improved market access for farmers",
                  "Reduced postharvest losses",
                  "Increased farmer income through better storage",
                  "Enhanced food security in rural communities",
                  "Technology transfer to multiple states",
                ]}
                subContent="Community Impact:"
                subContentClassNames="font-bold"
              />

              <CardBorderedlessDetails
                points={[
                  "124 publications in 3 years",
                  "4 major grants secured (2023-2024)",
                  "10 solar dryers installed in Kano State",
                  "Multiple storage facilities distributed",
                ]}
                subContent="Research Output:"
                subContentClassNames="font-bold"
              />
            </div>
            <p className={`font-normal text-black text-sm sm:text-lg`}>
              NSPRI continues to lead in postharvest research and technology
              development, significantly contributing to food security and
              agricultural sustainability in Nigeria.
            </p>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
}
