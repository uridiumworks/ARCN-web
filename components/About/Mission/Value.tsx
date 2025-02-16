"use client";
import CustomContainer from "@/components/CustomContainer";
import {
  FarmerIcon2,
  PlantGrowthIcon,
  PlantIcon2,
  TractorIcon2,
} from "@/assets/icons";
import Link from "next/link";

const data = [
  {
    description:
      "Demand Driven agricultural technologies generated and innovations promoted",
    icon: <TractorIcon2 />,
  },
  {
    description:
      "Appropriate policy options for agricultural growth formulated and made available",
    icon: <FarmerIcon2 />,
  },
  {
    description:
      "Agricultural Research, training and extension system strengthened",
    icon: <PlantIcon2 />,
  },
  {
    description: "Agricultural Knowledge management system established",
    icon: <PlantGrowthIcon />,
  },
];

const Value = () => {
  return (
    <section className="py-16 md:py-24">
      <CustomContainer>
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-6 text-center">
            <h3 className="text-[#0A1425] font-bold text-2xl sm:text-[2.5rem] ">
              Our Result Areas
            </h3>
            <p className="text-[#64728F] text-lg">
              Taking into account the priority areas of our stakeholders, the
              Council has designed four result areas to complement and add value
              to our partners&apos; strategies and programmes, including those
              of <Link href="#" className="underline text-[#125FFE]">
                FARA
              </Link>{" "}
              and{" "}
              <Link href="#" className="underline text-[#125FFE]">
                CORAF/WECARD
              </Link>{" "}
              .
            </p>
          </div>
          <div className="px-0 sm:px-4 lg:px-8 grid grid-cols-about-core-res gap-8">
            {data.map((el, i) => (
              <div key={i} className="flex flex-col gap-4 items-center">
                {el.icon}
                <p className="font-normal text-[#1B222B] text-center text-lg sm:text-xl">
                  {el.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default Value;
