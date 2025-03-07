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
    icon: <TractorIcon2 className="scale-75" />,
  },
  {
    description:
      "Appropriate policy options for agricultural growth formulated and made available",
    icon: <FarmerIcon2 className="scale-75" />,
  },
  {
    description:
      "Agricultural Research, training and extension system strengthened",
    icon: <PlantIcon2 className="scale-75" />,
  },
  {
    description:
      "Agricultural Knowledge management system established",
    icon: <PlantGrowthIcon className="scale-75" />,
  },
];

const Value = () => {
  return (
    <section className="py-12 md:py-20">
      <CustomContainer>
        <div className="flex flex-col gap-14">
          <div className="flex flex-col gap-4 text-center">
            <h3 className="text-[#0A1425] font-bold text-3xl sm:text-4xl sm:leading-[2.25rem] ">
              Our Result Areas
            </h3>
            <p className="text-[#64728F] text-sm leading-[1.5rem]">
              Taking into account the priority areas of our stakeholders, the
              Council has designed four result areas to complement and <br />{" "}
              value to our partners&apos; strategies and programmes, including
              those of{" "}
              <Link href="#" className="underline text-[#125FFE]">
                FARA
              </Link>{" "}
              and{" "}
              <Link href="#" className="underline text-[#125FFE]">
                CORAF/WECARD
              </Link>{" "}
              .
            </p>
          </div>
          <div className="px-0 sm:px-4 lg:px-8 grid grid-cols-about-core-res gap-8 items-start">
            {data.map((el, i) => (
              <div key={i} className="flex flex-col gap-4 items-center">
                {el.icon}
                <p className="font-normal text-[#1B222B] text-center text-sm sm:leading-[1.5rem]">
                  {/* {el.description
                    .split("<br />")
                    .slice(0, 3)
                    .map((ct) => (
                      <>
                        {ct.trim()} <br />
                      </>
                    ))} */}
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
