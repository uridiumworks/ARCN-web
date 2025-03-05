import CustomContainer from "@/components/CustomContainer";
import React from "react";
import ResearchInstitueBreadcrumbsV1 from "../../_components/ResearchInstitueBreadcrumbsv1";
import Reports from "./_components/Reports";
import Journal from "@/components/Shared/Journal";
import Partners from "@/components/Shared/Parther";

export default function page() {
  return (
    <section className="py-6">
      <CustomContainer>
        <div className="flex flex-col gap-10 sm:gap-14">
          <div className="flex flex-col gap-10">
            <ResearchInstitueBreadcrumbsV1 text="Research Coordination Report" />
            <div className="flex flex-col gap-6">
              <h2 className="font-bold text-3xl sm:text-4xl sm:leading-[2.7rem] ">
                Research Coordination Report
              </h2>
              <p className="font-medium text-base leading-[1.75rem]">
                {/* <span className="text-[15.88px] font-medium text-[#2D7636]">
                ARCN Research Institutes
              </span>{" "} */}
                Lorem ipsum dolor sit amet consectetur. Elementum ullamcorper
                quis etiam <br className="hidden md:block" />
                euismod quisque montes arcu risus. Magnis posuere tincidunt elit
                ultrices tortor. Sit
                <br className="hidden md:block" />
                semper cras sed duis tortor tempor amet gravida. Rhoncus quis
                nisl etiam tortor.
              </p>
            </div>
          </div>

          <Reports />
        </div>
      </CustomContainer>
      <Partners />
      <Journal />
    </section>
  );
}
