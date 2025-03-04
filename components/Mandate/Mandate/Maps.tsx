"use client";
import { useClientNarissData } from "@/hooks/Naris.hooks";
import Image from "next/image";
import { Loader, LoaderOptions } from "google-maps";
import Link from "next/link";
import CustomContainer from "@/components/CustomContainer";

const Maps = () => {
  const { loading, nariss, error } = useClientNarissData();
  return (
    <section className="py-12 md:py-20 bg-[#F6F6F6]">
      <CustomContainer>
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-[100%] sm:grid-cols-2 sm:justify-around  gap-5">
            {nariss?.length > 0 && (
              <>
                {nariss?.slice(0, 10)?.map(
                  // @ts-ignore
                  (n, index) => (
                    <p
                      key={index}
                      className="text-[#2D3657] font-semibold text-sm leading-[2rem]"
                    >
                      {n?.institutionName}
                    </p>
                  )
                )}
              </>
            )}
          </div>
          {/* button */}
          <Link
            href="/mandate/Research"
            className="self-start sm:self-center bg-[#30A85F] text-white rounded-sm border border-[#E6E6E6] font-sans text-sm leading-[2rem] px-10 py-2.5"
          >
            Detailed view
          </Link>
        </div>
      </CustomContainer>
    </section>
  );
};

export default Maps;
