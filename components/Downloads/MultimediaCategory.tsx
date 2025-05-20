"use client";
import CustomContainer from "@/components/CustomContainer";
import NoDataMessage from "@/components/Shared/NoDataMessage";
import OurTechnologiesSkeletonLoading from "@/components/skeletonloading/OurTechnologiesSkeletonLoading";
import { useContextSelector } from "@/hooks/use-context-selector";
import { TechCategory } from "@/types";
import Image from "next/image";
import { useEffect, useState } from "react";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_UPLOAD_URL;

const MultimediaCategory = () => {
  const fetchOurTechs = useContextSelector((context) => context.fetchMultimediaCategory);
  const ourTechs = useContextSelector((context) => context.multimediaCategory);
  const isLoadingOurTechs = useContextSelector(
    (context) => context.isLoadingOurPrograms
  );

  useEffect(() => {
    fetchOurTechs();
  }, [fetchOurTechs]);

 


  return (
    <section className="bg-white py-8 md:py-16">
    
      <div className="flex flex-col ">
        
        <div className="flex flex-col gap-4">
          {isLoadingOurTechs && <OurTechnologiesSkeletonLoading />}
  
          {!isLoadingOurTechs && (!ourTechs || ourTechs?.length === 0) && (
            <NoDataMessage message="No Technologies available" />
          )}
  
          {!isLoadingOurTechs && (ourTechs as  TechCategory[]).length > 0 && (
            <>
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold text-gray-800">Multimedia</h2>
              <p className="text-gray-600 text-sm">
              Explore our dynamic multimedia hub with videos showcasing research breakthroughs and farmer success stories, and listen to expert discussions and policy insights in our podcasts, or browse our photo gallery for vivid snapshots of field activities, technology demonstrations, and the real-world impact of our agricultural innovations across Nigeria.
              </p>
              </div>
            <div className=" my-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-24 justify-items-center">
              {(ourTechs as  TechCategory[]).map((tech, index) => (
                
                <div key={index} className="">
                <a className="text-[#30A85F] text-2xl flex flex-col items-center text-center space-y-2" href={tech?.link}  >

                  <div className="w-16 h-16">
                    <Image
                      src={`${baseURL}${tech?.icon?.url}`}
                      alt={tech?.name}
                      width={64}
                      height={64}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <h3 className="font-medium text-sm text-gray-800 hover:text-[#30A85F]">{tech?.name}</h3>
                  </a>

                </div>
               
              ))}
            </div>
            </>
          )}
          
        </div>
      </div>
  </section>
  
  );
};

export default MultimediaCategory;
