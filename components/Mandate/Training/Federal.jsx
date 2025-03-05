"use client";

import CustomContainer from "@/components/CustomContainer";
import { useClientNarissData } from "@/hooks/Naris.hooks";
import Link from "next/link";

const Federal = () => {
  const { loading, nariss, error } = useClientNarissData();

  return (
    <section className="py-12 md:py-16 flex flex-col gap-8 sm:gap-14">
      <CustomContainer>
        <div className="flex flex-col gap-8 sm:px-16">
          <h2 className="font-bold text-2xl sm:text-[2.25rem] sm:leading-[2.7rem] text-[#171717]">
            Federal College of Agriculture
          </h2>
          <p className="font-normal text-base leading-[1.75rem] ">
            Federal College of Agriculture are non-profit research organizations
            conducting innovative research. Home to <br />
            more than 9,000 scientists, researchers, technicians and staff, the
            Centers work to transform food, land and water <br />
            systems in a climate crisis. Click on a Center below to learn more.{" "}
            <br />
          </p>
        </div>
      </CustomContainer>

      <div className="py-12 md:py-20 bg-[#F6F6F6]">
        <CustomContainer>
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-[100%] sm:grid-cols-2 sm:justify-around gap-5">
              {nariss?.length > 0 && (
                <>
                  {nariss?.slice(0, 10)?.map((n, index) => (
                    <p
                      key={index}
                      className="text-[#2D3657] font-semibold text-sm leading-[2rem]"
                    >
                      {n?.institutionName}
                    </p>
                  ))}
                </>
              )}
            </div>
            {/* button */}
            <Link
              href="/mandate/training/college"
              className="sm:self-center self-stretch text-center bg-[#30A85F] text-white rounded-sm border border-[#E6E6E6] font-sans text-sm leading-[2rem] px-10 py-2.5"
            >
              Detailed view
            </Link>
          </div>
        </CustomContainer>
      </div>
    </section>
  );
};

export default Federal;
