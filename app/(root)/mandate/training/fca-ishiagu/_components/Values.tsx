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
              Excellence, Innovation, Self-reliance, and Sustainable Development
            </p>
          </div>
        </CustomContainer>
      </div>

      <CustomContainer>
        <div className="flex flex-col gap-10">
          <div className="grid grid-cols-[100%] sm:grid-cols-2 gap-10">
            <CardBorderedlessDetails
              title="Facilities and Infrastructure"
              points={[
                "Computer-Based Testing (CBT) Centre",
                "Modern Farm Houses",
                "Water Treatment Plant",
                "Solar Power Installation",
                "Student Hostels",
                "Recreational Facilities",
                "Asphalted Access Roads",
              ]}
            />

            <CardBorderedlessDetails
              title="Key Objectives"
              points={[
                "Provide quality agricultural education and training",
                "Develop practical skills in agricultural technology",
                "Promote research and scientific innovation",
                "Foster sustainable agricultural practices",
                "Support community development through extension services",
              ]}
            />
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="text-3xl sm:text-[2.625rem] font-medium text-[#111111]">
              Academic Structure
            </h3>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-6">
                <h4 className="font-semibold text-2xl sm:text-[2rem]">
                  School of Agricultural Technology
                </h4>
                <div className="grid grid-cols-[100%] sm:grid-cols-2 gap-10">
                  <CardBorderedlessDetails
                    title="Higher National Diploma (HND) Programs:"
                    titleSize="sm:text-[2rem] text-2xl"
                    points={[
                      "Animal Health and Production",
                      "Animal Production",
                      "Crop Production",
                      "Fisheries",
                      "Horticulture and Landscape",
                    ]}
                  />

                  <CardBorderedlessDetails
                    title="National Diploma (ND) Programs:"
                    titleSize="sm:text-[2rem] text-2xl"
                    points={[
                      "Agricultural Technology",
                      "Animal Health and Production",
                      "Fisheries",
                      "Forestry",
                      "Horticulture",
                      "Soil Science",
                    ]}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <h4 className="font-semibold text-2xl sm:text-[2rem]">
                  School of Applied Agriculture and Management Technology
                </h4>
                <div className="grid grid-cols-[100%] sm:grid-cols-2 gap-10">
                  <CardBorderedlessDetails
                    title="Higher National Diploma (HND) Programs:"
                    titleSize="sm:text-[2rem] text-2xl"
                    points={[
                      "Agribusiness",
                      "Agricultural Extension",
                      "Cooperative Economics",
                      "Home Economics",
                      "Pest Management",
                    ]}
                  />

                  <CardBorderedlessDetails
                    title="National Diploma (ND) Programs:"
                    titleSize="sm:text-[2rem] text-2xl"
                    points={[
                      "Accountancy",
                      "Business Administration",
                      "Cooperative Economics",
                      "Food Technology",
                      "Home Economics",
                      "Hydrology",
                      "Marketing",
                      "Public Administration",
                      "Wildlife Management",
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
}
