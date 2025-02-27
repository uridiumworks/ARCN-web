"use client";
import React from "react";
import { FarmerIcon2, TractorIcon2, FlowerHandIcon } from "@/assets/icons";
import CustomContainer from "@/components/CustomContainer";
import CardBorderedDetails from "../../_components/CardBorderedDetails";

export default function Focus() {
  return (
    <section className=" flex flex-col gap-16 py-14 md:py-20">
      <div className="bg-[#FCFCFC] p-6">
        <CustomContainer>
          <div className=" flex flex-col gap-8">
            <h2 className="font-medium text-center text-3xl sm:text-[2.625rem] text-[#111111]">
              Strategic Focus Areas
            </h2>
            <div className="grid grid-cols-engagement-res gap-8">
              <div className="flex items-start gap-2.5">
                <div>
                  <FlowerHandIcon />
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl sm:text-3xl font-medium text-[#1B222B]">
                    Research and Development
                  </h3>
                  <p className="text-[#1B222B] font-normal text-sm sm:text-lg">
                    Enhancing the genetic potential and resilience of root and
                    tuber crops.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div>
                  <FarmerIcon2 className="scale-[.55]" />
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl sm:text-3xl font-medium text-[#1B222B]">
                    Extension and Training
                  </h3>
                  <p className="text-[#1B222B] font-normal text-sm sm:text-lg">
                    Bridging the gap between research outputs and farmer
                    adoption.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div>
                  <TractorIcon2 className="scale-[.55]" />
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl sm:text-3xl font-medium text-[#1B222B]">
                    Sustainable Practices
                  </h3>
                  <p className="text-[#1B222B] font-normal text-sm sm:text-lg">
                    Promoting eco-friendly farming techniques and post-harvest
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
            subContent=""
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
            subContent=""
          />

          <div className="flex flex-col gap-6 border border-[#E7E7E7] bg-[#FCFCFC] rounded-2xl px-3 py-4">
            <h3 className="font-medium text-3xl sm:text-[2.625rem] text-[#111111]">
              Impact and Contribution to SDGs
            </h3>
            <div className="flex flex-col gap-4">
              <p className="text-sm sm:text-lg text-[#171616]">
                NRCRI’s efforts align with Sustainable Development Goals (SDGs)
                by addressing hunger (SDG 2), promoting sustainable agriculture
                (SDG 12), and fostering partnerships for development (SDG 17).
              </p>
              <p>
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
