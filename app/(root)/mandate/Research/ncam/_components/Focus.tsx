import CustomContainer from "@/components/CustomContainer";
import React from "react";
import CardBorderedDetails from "../../_components/CardBorderedDetails";

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
                NCAM is structured into nine departments, including:
              </p>
              <p className="font-medium text-sm sm:text-lg text-[#111111]">
                . Quality research, teaching and extension for development
              </p>
              <p className="font-medium text-sm sm:text-lg text-[#111111]">
                . Impactful community service
              </p>
              <p className="font-medium text-sm sm:text-lg text-[#111111]">
                . Institutional integrity in honest service
              </p>
            </div>
          </div>
        </CustomContainer>
      </div>

      <CustomContainer>
        <div className="flex flex-col gap-10">
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
            subContent=""
            points={[
              "Feasibility studies for agricultural mechanization",
              "Equipment evaluation and certification",
              "Technical support services",
            ]}
          />

          <CardBorderedDetails
            title="Recent Achievements"
            subContent=""
            points={[
              "Development of Multi-Crop Thresher with 90% local content",
              "Creation of various agricultural implements including Yam Mound Making Implement",
              "Development of innovative planters (2-Row Cassava Planter, Multi-Seed Planters)",
            ]}
          />

          <CardBorderedDetails
            title="Impact Metrics"
            subContent="NCAM remains a cornerstone of Nigeria's agricultural mechanization efforts, driving innovation and sustainability in farming practices to support food security and economic growth."
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
