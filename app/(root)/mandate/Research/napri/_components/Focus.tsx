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
            <p className="text-[#111111] font-normal text-base sm:text-lg">
              NAPRI conducts research on various livestock species including:
              Cattle, Sheep, Goats, Swine, Poultry, Rabbits, Donkeys, Horses,
              Camels
            </p>
          </div>
        </CustomContainer>
      </div>

      <CustomContainer>
        <div className="flex flex-col gap-10">
          <CardBorderedDetails
            title="National and International Collaborations"
            subContent="NAPRI maintains partnerships with numerous organizations including:"
            points={[
              "International Atomic Energy Agency (IAEA)",
              "Babolna Tetra in Hungary",
              "Agricultural Research Council of Nigeria (ARCN)",
              "Various state ministries of agriculture",
              "Multiple research institutes and universities",
              "Industry partners like Obasanjo Farms and ARLA Global Foods Limited",
            ]}
          />

          <div className="grid grid-cols-[100%] sm:grid-cols-2">
            <CardBorderedDetails
              title="Training and Consultancy"
              subContent="The institute offers training programs on:"
              points={[
                "Artificial Insemination",
                "Embryo Transfer",
                "Modern poultry production and management",
                "Cattle fattening",
                "Sheep and goat production",
                "Pasture establishment and management",
                "Commercial dairy production",
                "Dairy processing",
              ]}
            />

            <CardBorderedDetails
              title="Consultancy Expertise"
              subContent=""
              points={[
                "Livestock breeding and management",
                "Feed formulation and nutrition",
                "Pasture development",
                "Animal health management",
              ]}
            />

            <CardBorderedDetails
              title="Recent Achievements"
              subContent=""
              points={[
                "Development of improved livestock breeds",
                "Advancement in artificial insemination techniques",
                "Enhanced pasture management systems",
                "Successful technology transfer to farmers",
              ]}
            />

            <CardBorderedDetails
              title="Impact Metrics"
              endContent="NAPRI continues to be a cornerstone of Nigeria's agricultural research system, driving innovation in animal production to support food security and economic growth."
              points={[
                "40 communities trained in agricultural practices",
                "150 farmers supported with agricultural inputs",
                "Enhanced livestock productivity through genetic improvement",
                "Increased availability of improved pasture species",
                "Strengthened local farming communities through training programs",
              ]}
            />
          </div>
        </div>
      </CustomContainer>
    </section>
  );
}
