"use client";
import { useClientNarissData } from "@/hooks/Naris.hooks";
import { useClientProjectsData } from "@/hooks/Projects.hooks";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useEffect, useState } from "react";
import ResearchMandateSkeletonItemLoading from "@/components/skeletonloading/ResearchMandateSkeletonItemLoading";

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
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);
  const { loading, projects, error } = useClientProjectsData();

  // Set up auto-sliding
  useEffect(() => {
    if (!api) return;

    // Update current slide when the carousel changes
    const onSelect = (api: any) => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    // Auto-slide timer
    const autoSlideInterval = setInterval(() => {
      api.scrollNext();
    }, 3000); // Change slide every 3 seconds

    return () => {
      api.off("select", onSelect);
      clearInterval(autoSlideInterval);
    };
  }, [api]);

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
        containScroll: "trimSnaps",
      }}
      setApi={setApi}
      className="w-full"
    >
      <CarouselContent className="-ml-10">
        {projects?.map(
          // @ts-ignore
          (el, index) => (
            <CarouselItem
              key={index}
              className="pl-10 md:basis-1/2 lg:basis-1/3"
            >
              <div className="relative overflow-hidden rounded-lg  max-h-[24rem]">
            <Image
              className="h-full w-full object-cover bg-center"
              alt={el?.title}
              src={el?.bannerUrl || "/Images/Mandatepage/Casava.png"}
              width={300}
              height={110}
            />

            <div className="absolute bottom-0 right-0 w-full bg-[#000000CC] pb-8 sm:pb-12 px-3 pt-3 text-white font-medium text-base sm:text-xl sm:leading-[2.7rem]">
              {el?.title}
            </div>
          </div>
              {/* <ResearchMandateSkeletonItemLoading /> */}
            </CarouselItem>
          )
        )}
      </CarouselContent>
    </Carousel>
    // <div className="grid grid-cols-mandate-research-res gap-14">
    //   {projects?.map(
    //     // @ts-ignore
    //     (el, i) => (
    //       <div
    //         key={i}
    //         className="relative overflow-hidden rounded-lg  max-h-[24rem]"
    //       >
    //         <Image
    //           className="h-full w-full object-cover bg-center"
    //           alt={el?.title}
    //           src={el?.bannerUrl || "/Images/Mandatepage/Casava.png"}
    //           width={300}
    //           height={110}
    //         />

    //         <div className="absolute bottom-0 right-0 w-full bg-[#000000CC] pb-8 sm:pb-12 px-3 pt-3 text-white font-medium text-base sm:text-xl sm:leading-[2.7rem]">
    //           {el?.title}
    //         </div>
    //       </div>
    //     )
    //   )}
    // </div>
  );
};

const Research = () => {
  return (
    <div className="bg-[#15271C] flex flex-col px-4 pt-4 pb-16 sm:pb-16 gap-8 text-white">
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
