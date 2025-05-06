"use client";
import { useClientNarissData } from "@/hooks/Naris.hooks";
import Image from "next/image";
import { Loader, LoaderOptions } from "google-maps";
import Link from "next/link";
import CustomContainer from "@/components/CustomContainer";

const researchInstitutes = [
  "Cocoa Research Institute Of Nigeria, Ibadan",
  //"Nigerian Institute For Oceanography And Marine Research, Lagos",
  "National Root Crops Research Institute, Umudike",
  "Nigerian Institute For Oil Palm Research, Benin",
  "National Cereals Research Institute, Badeggi",
  "Nigerian Stored Products Research Institute, Ilorin",
  "National Animal Production And Research Institute, Zaria",
  "Institute Of Agricultural Research And Training, Ibadan",
  "National Horticultural Research Institute, Ibadan",
  "Institute For Agricultural Research, Zaria",
  //"National Institute For Fresh Fisheries Research, New Bussa",
  "Lake Chad Research Institute, Maiduguri",
  "National Agricultural Extension Research Liason Services, Zaria",
  "Rubber Research Institute Of Nigeria, Benin City",
  "National Veterinary Research Institute, VOM",
  "National Centre For Agricultural Mechanization",
];

const Maps = () => {
  // const { loading, nariss, error } = useClientNarissData();
  return (
    <section className="py-12 md:py-20 bg-[#F6F6F6]">
      <CustomContainer>
        <div className="flex flex-col gap-10">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 list-[circle] list-outside pl-5">
            {/* {nariss?.length > 0 && (
              <>
                {nariss?.map(
                  // @ts-ignore
                  (n, index) => (
                    <p
                      key={index}
                      className="text-[#2D3657] font-semibold text-sm leading-[1.5rem]"
                    >
                      {n?.institutionName}
                    </p>
                  )
                )}
              </>
            )} */}

            {researchInstitutes.length > 0 && (
              <>
                {researchInstitutes?.map(
                  // @ts-ignore
                  (n, index) => (
                    <li
                      key={index}
                      className="text-[#2D3657] font-semibold text-sm leading-[1.5rem]"
                    >
                      {n}
                    </li>
                  )
                )}
              </>
            )}
          </ul>
          {/* button */}
          <Link
            href="/mandate/research"
            className="self-stretch text-center sm:self-center bg-[#30A85F] text-white rounded-sm border border-[#E6E6E6] font-sans text-sm leading-[2rem] px-10 py-2.5"
          >
            Detailed view
          </Link>
        </div>
      </CustomContainer>
    </section>
  );
};

export default Maps;
