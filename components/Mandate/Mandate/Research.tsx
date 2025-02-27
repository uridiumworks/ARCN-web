"use client";
import { useClientNarissData } from "@/hooks/Naris.hooks";
import { useClientProjectsData } from "@/hooks/Projects.hooks";
import Image from "next/image";

const data = [
  {
    imgUrl: "/Images/Mandatepage/Casava.png",
    title: "Calcium A Cassava",
  },
  {
    imgUrl: "/Images/Mandatepage/Soybeans.png",
    title: "Calcium A Cassava",
  },
  {
    imgUrl: "/Images/Mandatepage/Grains.png",
    title: "Calcium A Cassava",
  },
];

const OurTechnologies = () => {
  const { loading, projects, error } = useClientProjectsData();

  return (
    <div className="grid grid-cols-mandate-research-res gap-6">
      {projects?.slice(0, 3)?.map(
        // @ts-ignore
        (el, i) => (
          <div key={i} className="relative overflow-hidden rounded-md">
            <Image
              className="h-full w-full"
              alt={el?.title}
              src={el?.bannerUrl || "/Images/Mandatepage/Casava.png"}
              width={388}
              height={210}
            />

            <div className="absolute bottom-0 right-0 w-full bg-[#000000CC] pb-12 px-3 pt-3 text-white font-medium text-base sm:text-xl">
              {el?.title}
            </div>
          </div>
        )
      )}
    </div>
  );
};

const Research = () => {
  return (
    <div className="bg-[#15271C] flex flex-col px-4 pt-4 pb-20 gap-14 sm:gap-20 text-white">
      <h2 className="text-center text-5xl sm:text-[4.0625rem] font-bold">
        Research
      </h2>
      <div className="flex flex-col gap-10">
        <h3 className="text-center font-normal text-base sm:text-xl ">
          Take a look at some of our technologies
        </h3>
        {/* researchs */}
        <OurTechnologies />
      </div>
    </div>
  );
};

export default Research;
