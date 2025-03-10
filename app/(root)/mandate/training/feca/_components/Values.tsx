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
              Excellence in agricultural education, practical skills
              development, and sustainable farming practices.
            </p>
          </div>
        </CustomContainer>
      </div>

      <CustomContainer>
        <div className="flex flex-col gap-10">
          <CardBorderedlessDetails
            title="Facilities and Infrastructure"
            points={[
              "Crop Farms (Cash crops: cocoa, palm trees, coffee, rubber)",
              "Food Crop Farms (rice, cassava, maize, cowpea)",
              "Large Orchard (pineapples, oranges, mangoes, banana)",
              "Feed Mill",
              "Livestock Units (poultry, piggery, rabbitry, goatry, fishery, cane rat, cattle)",
              "Training Facilities",
            ]}
          />

          <div className="grid grid-cols-[100%] sm:grid-cols-2 gap-10">
            <CardBorderedlessDetails
              title="Research Focus"
              subContent="The institution focuses on various agricultural disciplines through its departments:"
              points={[
                "Crop Production",
                "Agricultural and Bioenvironmental Engineering",
                "Animal Health and Production",
                "Academic Planning and Development",
              ]}
            />

            <CardBorderedlessDetails
              title="Key Objectives"
              points={[
                "Provide comprehensive agricultural education and training",
                "Develop practical farming skills among students",
                "Promote sustainable agricultural practices",
                "Foster entrepreneurship in agriculture",
                "Support community development through agricultural training",
              ]}
            />
          </div>

          <CardBorderedDetails
            title="National and International Collaborations"
            subContent="The College maintains partnerships with:"
            points={[
              "CAPS International",
              "National Board for Technical Education",
              "Bill and Melinda Gates Foundation",
              "Various national and international partners in sustainable development",
            ]}
          />
          <div className="grid grid-cols-[100%] sm:grid-cols-2 gap-10">
            <CardBorderedDetails
              title="Training and Consultancy"
              subContent="The institution offers:"
              points={[
                "National Diploma programs",
                "Higher National Diploma programs",
                "Vocational training",
                "Farmer training programs",
                "Agricultural extension services",
              ]}
            />

            <CardBorderedDetails
              title="Recent Achievements"
              points={[
                "Establishment of Journal of Agriculture, Environmental Technology and Communication (JAETCOM)",
                "Successful implementation of Cassava Adding Value for Africa (CAVA) project",
                "Research breakthroughs in animal nutrition and agricultural practices",
                "Development of sustainable farming techniques",
              ]}
            />
          </div>
          <CardBorderedDetails
            title="Impact Metrics"
            endContent="The Federal College of Agriculture, Akure continues to play a vital role in agricultural education and development in Nigeria, contributing to food security and sustainable agricultural practices through training and research."
            points={[
              "Over 1,000 farmers trained in agricultural practices",
              "Over 1,000 communities impacted through agricultural inputs",
              "Successful implementation of broiler rearing training programs",
              "Development of dry season farming techniques",
              "Publication of research findings through JAETCOM",
            ]}
          />
        </div>
      </CustomContainer>
    </section>
  );
}
