import CustomContainer from "@/components/CustomContainer";
import Management from "@/components/Shared/Management";
import Image from "next/image";

const Meet = () => {
  return (
    <section className="pt-8 pb-14">
      <CustomContainer>
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-4 text-center">
            <h2 className="text-3xl sm:text-4xl leading-[2.25rem] text-[#1B222B] font-bold">
              Governance of ARCN
            </h2>

            <p className="font-normal text-sm leading-[1.5rem] text-[#1B222B]">
              ARCN is a corporate body with perpetual succession established as
              a grade &apos;A&apos; parastatal of the Federal Ministry of
              Agriculture and Food Security. It has a Governing Board answerable
              to the Minister of Agriculture and Food Security. It has a
              chairman, members from public and private sectors covering key
              stakeholder groups. The Executive Secretary is the CEO, with seven
              directorates.
            </p>
          </div>

          <Management/>
        </div>
      </CustomContainer>
    </section>
  );
};

export default Meet;
