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
    <div className="grid grid-cols-mandate-research-res gap-14">
      {projects?.slice(0, 3)?.map(
        // @ts-ignore
        (el, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-lg max-h-[20rem]"
          >
            <Image
              className="h-full w-full object-cover"
              alt={el?.title}
              src={el?.bannerUrl || "/Images/Mandatepage/Casava.png"}
              width={300}
              height={110}
            />

            <div className="absolute bottom-0 right-0 w-full bg-[#000000CC] pb-8 sm:pb-12 px-3 pt-3 text-white font-medium text-base sm:text-xl sm:leading-[2.7rem]">
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
    <div className="bg-[#15271C] flex flex-col px-4 pt-4 pb-16 sm:pb-16 gap-8 sm:gap-16 text-white">
      <h2 className="text-center text-5xl leading-[5.28125rem] font-bold">
        Research
      </h2>
      <div className="flex flex-col gap-10">
        <h3 className="text-center font-normal text-base leading-[2.1rem] ">
          Take a look at some of our technologies
        </h3>
        {/* researchs */}
        <OurTechnologies />
      </div>
    </div>
  );
};

export default Research;
