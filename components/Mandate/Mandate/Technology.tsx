"use client";
import CustomContainer from "@/components/CustomContainer";
import NoDataMessage from "@/components/Shared/NoDataMessage";
import OurTechnologiesSkeletonLoading from "@/components/skeletonloading/OurTechnologiesSkeletonLoading";
import { useContextSelector } from "@/hooks/use-context-selector";
import { TechCategory } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_UPLOAD_URL;

const Technolody = () => {
  const fetchOurTechs = useContextSelector((context) => context.fetchTechnologyCategory);
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
        <div className="place-content-center text-center px-4 md:px-9 space-y-4">
          <h2 className="font-bold text-3xl sm:text-4xl leading-[2.25rem]">
            Our Technologies
          </h2>
          <p className="font-normal text-sm leading-[1.5rem] md:max-w-[800px] mx-auto block">
            Explore our NARI&apos;s agricultural innovations - high-yield seed varieties, smart farming techniques, & sustainable solutions.
            Together, we&apos;re transforming Nigeria&apos;s agri-sector through research-driven technologies that empower farmers and boost national food security since 2009.
          </p>
        </div>
  
        <div className="flex flex-col gap-4">
          {isLoadingOurTechs && <OurTechnologiesSkeletonLoading />}
  
          {!isLoadingOurTechs && (!ourTechs || ourTechs?.length === 0) && (
            <NoDataMessage message="No Technologies available" />
          )}
  
          {!isLoadingOurTechs && (ourTechs as  TechCategory[]).length > 0 && (
            <div className=" my-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 justify-items-center">
              {(ourTechs as  TechCategory[]).map((tech, index) => (
                
                <div key={index} className="">
                <a className="text-[#30A85F] text-2xl flex flex-col items-center text-center space-y-2" href={"/technology/" + tech?.documentId}  >

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

export default Technolody;
