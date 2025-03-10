import CustomContainer from "@/components/CustomContainer";
import React from "react";
import CardBorderedlessDetails from "../../../_components/CardBorderedlessDetails";
import CardBorderedDetails from "../../../_components/CardBorderedDetails";

export default function Values() {
  return (
    <section className="py-8 sm:py-16 flex flex-col gap-10">
      <div className="bg-[#F9FFFB] p-8 sm:p-10">
        <CustomContainer>
          <div className="flex flex-col items-center gap-3 text-center">
            <h3 className="font-bold text-3xl sm:text-4xl text-[#111111] leading-[2.25rem]">
              Core Values & Philosophy
            </h3>
            <p className="text-[#111111] font-normal text-sm leading-[1.5rem]">
              Excellence, Diligence, Dedication, and Professional Development
            </p>
          </div>
        </CustomContainer>
      </div>

      <CustomContainer>
        <div className="flex flex-col gap-10">
          <CardBorderedlessDetails
            title="Facilities and Infrastructure"
            points={[
              "Modern Bacteriology Laboratory",
              "Chemistry, Physics, and Biology Laboratories",
              "Entrepreneurship and Skills Acquisition Centre",
              "Green House Farm",
              "Fishery and Poultry Farms",
              "Training Centers and Auditorium",
              "Research for Life (R4Life) Digital Library",
            ]}
          />

          <div className="grid grid-cols-[100%] sm:grid-cols-2 gap-10">
            <CardBorderedlessDetails
              title="Academic Focus"
              subContent="FCVMLT offers various programs including:"
              subContentClassNames="font-medium"
              points={[
                "Medical Laboratory Technology",
                "Veterinary Laboratory Technology",
                "Organic Agricultural Technology",
                "Health Information Management",
                "Nutrition and Dietetics",
                "Food Technology",
              ]}
            />

            <CardBorderedlessDetails
              title="Key Objectives"
              points={[
                "Provide comprehensive education in veterinary and medical laboratory technology",
                "Foster research and development in laboratory sciences",
                "Promote practical skills through hands-on training",
                "Support community development through youth and women empowerment programs",
                "Advance the ONE-HEALTH approach in education and practice",
              ]}
            />
          </div>

          <CardBorderedDetails
            title="National and International Collaborations"
            points={[
              "University of Jos",
              "Karl Kumm University",
              "Bingham University Teaching Hospital",
              "Medical Laboratory Science Council of Nigeria",
              "Various international institutions across Africa",
            ]}
            subContent="The institution maintains active partnerships with:"
          />

          <div className="grid grid-cols-[100%] sm:grid-cols-2 gap-10">
            <CardBorderedDetails
              title="Training and Consultancy"
              points={[
                "Laboratory diagnostics and techniques",
                "Agricultural technology and farming",
                "Entrepreneurship skills",
                "Environmental health management",
              ]}
              subContent="The college provides specialized training in:"
            />

            <CardBorderedDetails
              title="Recent Achievements"
              points={[
                "Renovation and modernization of laboratories and classrooms",
                "Establishment of green house farming and agricultural facilities",
                "Implementation of youth and women empowerment programs",
                "Development of entrepreneurship center",
                "Activation of R4Life Digital Library Access",
              ]}
            />
          </div>

          <CardBorderedDetails
            title="Impact Metrics"
            points={[
              "Enhanced laboratory technology education and training",
              "Increased community engagement through training programs",
              "Improved research capabilities and facilities",
              "Strengthened partnerships with educational and healthcare institutions",
            ]}
            endContent="FCVMLT continues to be a cornerstone of laboratory technology education in Nigeria, driving innovation and excellence in medical and veterinary laboratory sciences while supporting national development through skilled workforce creation."
          />
        </div>
      </CustomContainer>
    </section>
  );
}
