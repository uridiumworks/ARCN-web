import CustomContainer from "@/components/CustomContainer";
import React from "react";
import CardBorderedlessDetails from "../../_components/CardBorderedlessDetails";
import CardBorderedDetails from "../../_components/CardBorderedDetails";

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
                <div className="grid grid-cols-[100%] sm:grid-cols-2 gap-10 items-start">
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

              <div className="flex flex-col gap-6">
                <h4 className="font-semibold text-2xl sm:text-[2rem]">
                  School of Engineering Technology
                </h4>
                <div className="grid grid-cols-[100%] sm:grid-cols-2 gap-10 items-start">
                  <CardBorderedlessDetails
                    title="Higher National Diploma (HND) Programs:"
                    titleSize="sm:text-[2rem] text-2xl"
                    points={[
                      "Agricultural Engineering (Farm Power and Post Harvest Options)",
                      "Industrial Safety",
                    ]}
                  />

                  <CardBorderedlessDetails
                    title="National Diploma (ND) Programs:"
                    titleSize="sm:text-[2rem] text-2xl"
                    points={[
                      "Agricultural Engineering",
                      "Computer Engineering",
                      "Welding and Fabrication",
                    ]}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <h4 className="font-semibold text-2xl sm:text-[2rem]">
                  School of Engineering Technology
                </h4>
                <div className="grid grid-cols-[100%] sm:grid-cols-2 gap-10 items-start">
                  <CardBorderedlessDetails
                    title="Higher National Diploma (HND) Programs:"
                    titleSize="sm:text-[2rem] text-2xl"
                    points={["Computer Science"]}
                  />

                  <CardBorderedlessDetails
                    title="National Diploma (ND) Programs:"
                    titleSize="sm:text-[2rem] text-2xl"
                    points={[
                      "Computer Science",
                      "Environmental Management",
                      "Science Laboratory Technology",
                      "Statistics",
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>

          <CardBorderedDetails
            title="Historical Background"
            subContent="Established in 1955 at Umudike as the School of Agriculture, the institution has evolved through several transformations:"
            points={[
              "1964: Amalgamated with Agricultural Research and Training Station",
              "1972: Gained federal status",
              "1989: Received NBTE accreditation",
              "1993: Relocated to Ishiagu",
              "1995: Established at current permanent site",
            ]}
          />

          <CardBorderedDetails
            title="Recent Achievements"
            points={[
              "Upgrade to HND-awarding institution",
              "Training of over 10,000 agricultural technologists",
              "Development of over 3,000 agricultural extension workers",
              "Infrastructure expansion and modernization",
              "Installation of water treatment and solar power systems",
              "Construction of CBT centre through PPP",
            ]}
          />

          <CardBorderedDetails
            title="Impact Metrics"
            endContent="The Federal College of Agriculture, Ishiagu continues to play a vital role in Nigeria's agricultural education sector, contributing to national food security and agricultural development through quality education and training."
            points={[
              "Trained thousands of agricultural technologists",
              "Enhanced agricultural extension services",
              "Improved infrastructure development",
              "Increased institutional capacity",
              "Advanced agricultural education and training",
            ]}
          />
        </div>
      </CustomContainer>
    </section>
  );
}
