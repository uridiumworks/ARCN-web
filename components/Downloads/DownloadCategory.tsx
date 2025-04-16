"use client";
import CustomContainer from "@/components/CustomContainer";
import NoDataMessage from "@/components/Shared/NoDataMessage";
import OurTechnologiesSkeletonLoading from "@/components/skeletonloading/OurTechnologiesSkeletonLoading";
import { useContextSelector } from "@/hooks/use-context-selector";
import { TechCategory } from "@/types";
import Image from "next/image";
import { useEffect, useState } from "react";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_UPLOAD_URL;

const DownloadCategory = () => {
  const fetchOurTechs = useContextSelector((context) => context.fetchDownloadCategory);
  const ourTechs = useContextSelector((context) => context.techCategory);
  const isLoadingOurTechs = useContextSelector(
    (context) => context.isLoadingOurTechs
  );

  useEffect(() => {
    fetchOurTechs();
  }, [fetchOurTechs]);

 


  return (
    <section className="bg-white py-8 md:py-16">
    <CustomContainer>
      <div className="flex flex-col gap-6">
        
        <div className="flex flex-col gap-4">
          {isLoadingOurTechs && <OurTechnologiesSkeletonLoading />}
  
          {!isLoadingOurTechs && (!ourTechs || ourTechs?.length === 0) && (
            <NoDataMessage message="No Technologies available" />
          )}
  
          {!isLoadingOurTechs && (ourTechs as  TechCategory[]).length > 0 && (
            <div className=" my-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-24 justify-items-center">
              {(ourTechs as  TechCategory[]).map((tech, index) => (
                
                <div key={index} className="">
                <a className="text-[#30A85F] text-2xl flex flex-col items-center text-center space-y-2" href={"/downloads/" + tech?.documentId}  >

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
          )}
          
        </div>
      </div>
    </CustomContainer>
  </section>
  
  );
};

export default DownloadCategory;
