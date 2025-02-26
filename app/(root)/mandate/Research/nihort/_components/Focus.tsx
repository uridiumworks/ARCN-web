"use client";
import CustomContainer from "@/components/CustomContainer";
import React from "react";
import CardBorderedDetails from "./CardBorderedDetails";

export default function Focus() {
  return (
    <section className="flex flex-col gap-12 py-14 md:py-20">
      <div className="bg-[#F9FFFB] p-6">
        <CustomContainer>
          <div className="flex flex-col text-center gap-3.5 justify-center">
            <h3 className="font-medium text-3xl sm:text-[2.625rem] text-[#111111]">
              Research Focus
            </h3>
            <p className="text-base sm:text-lg font-normal text-[#111111]">
              NIHORT is structured into six research departments, including
              Vegetables and Floriculture, Fruits and Spices, Citrus and Product
              Development, and Information and Documentation. The institute also
              boasts specialized units in Biotechnology, Genetic Resources, and
              Seed Technology.
            </p>
          </div>
        </CustomContainer>
      </div>

      <CustomContainer>
        <div className="flex flex-col gap-10">
          <CardBorderedDetails
            title="National and International Collaborations"
            subContent="NIHORT actively collaborates with various universities, agricultural development programs, 
and non-governmental organizations to enhance its research outcomes. Partnerships include:"
            points={[
              "National Centre for Genetic Resources and Biotechnology (NACGRAB)",
              "Universities of Agriculture (Abeokuta, Makurdi, Umudike)",
              "Justice Development and Peace Commission (JDPC)",
            ]}
          />

          <CardBorderedDetails
            title="Training and Consultancy"
            subContent="The institute offers training programs on diverse horticultural topics, including:"
            points={[
              "Juice processing and vegetable seed production",
              "Fruit seedling production techniques",
              "Ginger and turmeric processing for value addition",
              "Amenity horticulture",
            ]}
          />

          <CardBorderedDetails
            title="Consultancy Expertise"
            subContent=""
            points={[
              "Feasibility studies for horticultural crop value chains",
              "Citrus orchard establishment and maintenance",
              "Landscape beautification projects",
            ]}
          />

          <CardBorderedDetails
            title="Recent Achievements"
            subContent=""
            points={[
              "Establishment of biopesticide production centers.",
              "Development of postharvest processing innovations to reduce food losses.",
              "Enhanced genetic resources for indigenous and exotic crops.",
            ]}
          />
          <CardBorderedDetails
            title="Impact Metrics"
            subContent="NIHORT remains a cornerstone of Nigeria's agricultural research ecosystem, driving innovation and sustainability in horticulture to support food security and economic growth."
            points={[
              "Increased horticultural crop production and exports.",
              "Strengthened local economies through training and capacity building.",
              "Improved agricultural sustainability through eco-friendly practices and advanced research.",
            ]}
          />
        </div>
      </CustomContainer>
    </section>
  );
}
