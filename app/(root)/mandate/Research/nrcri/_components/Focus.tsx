"use client";
import React from "react";
import { FarmerIcon2, TractorIcon2, FlowerHandIcon } from "@/assets/icons";
import CustomContainer from "@/components/CustomContainer";
import CardBorderedDetails from "../../../_components/CardBorderedDetails";

export default function Focus() {
  return (
    <section className=" flex flex-col gap-16 py-8 md:py-16">
      <div className="bg-[#FCFCFC] p-6">
        <CustomContainer>
          <div className=" flex flex-col gap-6">
            <h2 className="font-bold uppercase text-center text-3xl sm:text-4xl leading-[2.25rem] text-[#111111]">
              Strategic Focus Areas
            </h2>
            <div className="grid grid-cols-[100%] sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
              <div className="flex items-start  gap-2.5">
                <div className="flex-1 ">
                  <FlowerHandIcon />
                </div>
                <div className="flex flex-col gap-3 flex-2">
                  <h3 className="font-medium text-xl  text-[#111111] leading-[2rem]">
                    Research and Development
                  </h3>
                  <p className="text-[#1B222B] font-normal text-sm  leading-[1.5rem]">
                    Enhancing the genetic potential and resilience of root{" "}
                    <br />
                    tuber crops.
                  </p>
                </div>
              </div>

              <div className="flex items-start ">
                <div className="flex-1">
                  <FarmerIcon2 className="scale-[.55]" />
                </div>
                <div className="flex flex-col gap-3 flex-2">
                  <h3 className="font-medium text-xl  text-[#111111] leading-[2rem]">
                    Extension and Training
                  </h3>
                  <p className="text-[#1B222B] font-normal text-sm leading-[1.5rem]">
                    Bridging the gap between research <br /> outputs and farmer
                    adoption.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-1">
                  <TractorIcon2 className="scale-[.55]" />
                </div>
                <div className="flex flex-col gap-3 flex-2">
                  <h3 className="font-medium text-xl text-[#111111] leading-[2rem]">
                    Sustainable Practices
                  </h3>
                  <p className="text-[#1B222B] font-normal text-sm  leading-[1.5rem]">
                    Promoting eco-friendly farming <br /> techniques and
                    post-harvest <br />
                    technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CustomContainer>
      </div>

      <CustomContainer>
        <div className="flex flex-col gap-10">
          <CardBorderedDetails
            title="Key Achievements"
            points={[
              "Development of improved high-yielding and disease-resistant varieties of cassava, yam, and sweet potato",
              "Empowerment of smallholder farmers through training programs in sustainable agricultural practices and value chain development.",
              "Significant contributions to Nigeria's status as the global leader in cassava and yam production.",
            ]}
          />

          <CardBorderedDetails
            title="Partnerships"
            points={[
              "International Institute of Tropical Agriculture (IITA): Enhancing research on pest-resistant varieties.",
              "Bill and Melinda Gates Foundation: Supporting food security projects.",
              "Cornell University and Michigan State University: Advancing research methodologies.",
            ]}
            subContent="NRCRI collaborates with several international and national organizations, including:"
          />

          <CardBorderedDetails
            title="Current Initiatives"
            points={[
              "Root and Tuber Breeding Project (RTB): Developing climate-resilient varieties to mitigate the effects of climate change on agriculture.",
              "Post-Harvest Management Program: Reducing food waste and increasing shelf life through innovative storage techniques.",
            ]}
          />

          <div className="flex flex-col gap-5 border border-[#E7E7E7] bg-[#FCFCFC] rounded-2xl px-3 py-4">
            <h3 className="font-medium text-lg leading-[2.875rem] text-[#111111]">
              Impact and Contribution to SDGs
            </h3>
            <div className="flex flex-col gap-3">
              <p className="text-sm  text-[#171616] leading-[1.5rem]">
                NRCRI’s efforts align with Sustainable Development Goals (SDGs)
                by addressing hunger (SDG 2), promoting sustainable agriculture
                (SDG 12), and fostering partnerships for development (SDG 17).
              </p>
              <p className="text-sm  text-[#171616] leading-[1.5rem]">
                With its rich history, strategic initiatives, and unwavering
                commitment to agricultural development, NRCRI continues to be a
                vital player in enhancing Nigeria&apos;s agricultural
                productivity and ensuring sustainable national food security.
              </p>
            </div>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
}
