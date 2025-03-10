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
            <p className="text-[#111111] font-normal text-sm  leading-[1.5rem]">
              Agricultural Education for Self-Reliance
            </p>
          </div>
        </CustomContainer>
      </div>

      <CustomContainer>
        <div className="flex flex-col gap-10">
          <CardBorderedlessDetails
            title="Facilities and Infrastructure"
            points={[
              "Bio-Engineering School",
              "Training Centers",
              "1000-seating Lecture Theatre",
              "Organic Farm",
              "Agricultural Production Units",
              "Vocational Training Facilities",
              "Research Laboratories",
            ]}
          />

          <CardBorderedlessDetails
            title="Key Objectives"
            points={[
              "Produce well-trained Agricultural manpower and issue National Diploma (ND) and Higher National Diploma (HND) Certificates",
              "Contribute and provide solutions to Nigeria's Agricultural challenges through extension services",
              "Offer short courses and training programs for boosting competencies of Nigeria's Agricultural personnel",
            ]}
          />

          <CardBorderedDetails
            title="Research Focus & Training Programs"
            subContent=""
            points={[
              "Bio-Engineering and Farm Equipment Fabrication",
              "Organic Agriculture",
              "Agricultural Production and Processing",
              "Vocational Agricultural Training",
              "Animal Breeding and Production",
              "Post-harvest Technology",
            ]}
          />

          <CardBorderedDetails
            title="National and International Collaborations"
            subContent="Academic collaboration with Federal University of Agriculture, Abeokuta (FUNAAB) as an affiliate centre for advanced training in selected courses."
            points={[]}
          />

          <CardBorderedDetails
            title="Training and Consultancy"
            subContent="The institute offers training programs in:"
            points={[
              "Agricultural Equipment Fabrication and Maintenance",
              "Crop Cultivation and Preservation",
              "Post-harvest Processing",
              "Animal Breeding",
              "Organic Farming Practices",
            ]}
          />

          <CardBorderedDetails
            title="Recent Achievements"
            subContent=""
            points={[
              "Establishment of academic collaboration with FUNAAB",
              "Upgrade of research facilities",
              "Successful fabrication of farm input equipment",
              "Expansion of institutional carrying capacity",
              "Development of organic agriculture program",
              "Training of over 4,000 youths, women, and men in agricultural practices",
            ]}
          />

          <CardBorderedDetails
            title="Impact Metrics"
            subContent=""
            points={[
              "Improved efficiency in training and quality of graduates",
              "Enhanced agricultural production and processing capabilities",
              "Increased community impact through outreach programs",
              "Successful establishment of organic farming practices",
              "Creation of jobs through vocational training programs",
              "Contribution to food security through reduced farm drudgery and optimized yields",
            ]}
          />
        </div>
      </CustomContainer>
    </section>
  );
}
