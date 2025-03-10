import CustomContainer from "@/components/CustomContainer";
import React from "react";
import CardBorderedlessDetails from "../../../_components/CardBorderedlessDetails";
import CardBorderedDetails from "../../../_components/CardBorderedDetails";

export default function Values() {
  return (
    <section className="py-8 sm:py-16 flex flex-col gap-10">
      <div className="bg-[#F9FFFB] p-8 sm:p-10">
        <CustomContainer>
          <div className="flex flex-col items-center gap-3.5 text-center">
            <h3 className="font-bold text-3xl sm:text-4xl text-[#111111] leading-[2.25rem]">
              Core Values
            </h3>
            <p className="text-[#111111] font-normal text-sm leading-[1.5rem]">
              Excellence, Innovation, Self-reliance, and Sustainable Development
            </p>
          </div>
        </CustomContainer>
      </div>

      <CustomContainer>
        <div className="flex flex-col gap-14">
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
          <div className="flex flex-col gap-8">
            <h3 className="font-bold sm:text-2xl text-xl leading-[2.25rem] text-[#111111]">
              Academic Structure
            </h3>
            <div className="flex flex-col gap-12">
              <div className="flex flex-col gap-6">
                <h4 className="font-semibold text-xl leading-[2.25rem]">
                  School of Agricultural Technology
                </h4>
                <div className="grid grid-cols-[100%] sm:grid-cols-2 gap-10">
                  <CardBorderedlessDetails
                    title="Higher National Diploma (HND) Programs:"
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
                <h4 className="font-semibold text-xl leading-[2.25rem]">
                  School of Applied Agriculture and Management Technology
                </h4>
                <div className="grid grid-cols-[100%] sm:grid-cols-2 gap-10 items-start">
                  <CardBorderedlessDetails
                    title="Higher National Diploma (HND) Programs:"
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
                <h4 className="font-semibold text-xl leading-[2.25rem]">
                  School of Engineering Technology
                </h4>
                <div className="grid grid-cols-[100%] sm:grid-cols-2 gap-10 items-start">
                  <CardBorderedlessDetails
                    title="Higher National Diploma (HND) Programs:"
                    points={[
                      "Agricultural Engineering (Farm Power and Post Harvest Options)",
                      "Industrial Safety",
                    ]}
                  />

                  <CardBorderedlessDetails
                    title="National Diploma (ND) Programs:"
                    points={[
                      "Agricultural Engineering",
                      "Computer Engineering",
                      "Welding and Fabrication",
                    ]}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <h4 className="font-semibold text-xl leading-[2.25rem]">
                  School of Engineering Technology
                </h4>
                <div className="grid grid-cols-[100%] sm:grid-cols-2 gap-10 items-start">
                  <CardBorderedlessDetails
                    title="Higher National Diploma (HND) Programs:"
                    points={["Computer Science"]}
                  />

                  <CardBorderedlessDetails
                    title="National Diploma (ND) Programs:"
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
            shouldBoldPointText={false}
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
