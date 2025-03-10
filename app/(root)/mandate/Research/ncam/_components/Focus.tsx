import CustomContainer from "@/components/CustomContainer";
import React from "react";
import CardBorderedDetails from "../../../_components/CardBorderedDetails";

export default function Focus() {
  return (
    <section className="py-8 sm:py-16 flex flex-col gap-10">
      <div className="bg-[#F9FFFB] p-8 sm:p-10">
        <CustomContainer>
          <div className="flex flex-col gap-3.5 items-center text-center">
            <h2 className="font-bold text-3xl text-center sm:text-4xl text-[#111111] leading-[2.25rem]">
              Research Focus
            </h2>
            <div className="flex flex-col gap-2 text-center">
              <p className="font-medium text-sm  text-[#111111] leading-[1.5rem]">
                NCAM is structured into nine departments, including:
              </p>
              <p className="font-medium text-sm  text-[#111111] leading-[1.5rem]">
                . Quality research, teaching and extension for development
              </p>
              <p className="font-medium text-sm  text-[#111111] leading-[1.5rem]">
                . Impactful community service
              </p>
              <p className="font-medium text-sm  text-[#111111] leading-[1.5rem]">
                . Institutional integrity in honest service
              </p>
            </div>
          </div>
        </CustomContainer>
      </div>

      <CustomContainer>
        <div className="grid grid-cols-[100%] gap-10">
          <CardBorderedDetails
            title="National and International Collaborations"
            subContent="NCAM collaborates with various organizations including:"
            points={[
              "Standards Organization of Nigeria (SON)",
              "Nigerian Institute of Agricultural Engineers (NIAE)",
              "Universities and research institutions",
              "International bodies connected with agricultural mechanization",
            ]}
          />

          <CardBorderedDetails
            title="Training and Consultancy"
            subContent="The institute offers training programs on:"
            points={[
              "Agricultural machinery operation and maintenance",
              "Equipment design and fabrication",
              "Agricultural processing technologies",
              "Mechanization strategies",
            ]}
          />

          <CardBorderedDetails
            title="Consultancy Expertise"
            points={[
              "Feasibility studies for agricultural mechanization",
              "Equipment evaluation and certification",
              "Technical support services",
            ]}
          />

          <CardBorderedDetails
            title="Recent Achievements"
            points={[
              "Development of Multi-Crop Thresher with 90% local content",
              "Creation of various agricultural implements including Yam Mound Making Implement",
              "Development of innovative planters (2-Row Cassava Planter, Multi-Seed Planters)",
            ]}
          />

          <CardBorderedDetails
            title="Impact Metrics"
            endContent="NCAM remains a cornerstone of Nigeria's agricultural mechanization efforts, driving innovation and sustainability in farming practices to support food security and economic growth."
            points={[
              "Enhanced agricultural productivity through mechanization",
              "Reduced dependence on imported agricultural machinery",
              "Improved farming efficiency through indigenous technology",
              "Increased adoption of mechanized farming practices",
            ]}
          />
        </div>
      </CustomContainer>
    </section>
  );
}
