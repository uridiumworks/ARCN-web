"use client";
import React from "react";

import { useClientProgramsData } from "@/hooks/Programs.hooks";
import Image from "next/image";
import { LuMapPin } from "react-icons/lu";
import { LuClock5 } from "react-icons/lu";
import ProgramsSkeletonLoading from "../skeletonloading/ProgramsSkeletonLoading";

const Programs = () => {
  const { loading, programs, error } = useClientProgramsData();

  return (
    <section>
      <div className="text-center space-y-6 py-10">
        <h1 className="font-bold text-3xl md:text-4xl">Programs</h1>
        <p className="font-normal text-sm">
          Lorem ipsum dolor sit amet consectetur. Nunc pharetra a felis nibh. Id{" "}
          <br />
          ullamcorper nec leo porta. Enim nunc lacinia dui vehicula pellentesque
          morbi. <br />
          Magna nulla consequat.
        </p>
      </div>
      
      <div className="w-10/12 mx-auto pb-20 flex flex-col gap-10">
      {/* <ProgramsSkeletonLoading /> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {programs?.length > 0 && (
            <>
              {programs?.slice(0, 4)?.map((p: any, index: number) => (
                <div key={index} className="border py-2 px-4  grid grid-cols-1 md:grid-cols-2 justify-center gap-2 rounded-xl">
                  <div className="space-y-4 flex flex-col justify-center">
                    <h1 className="font-medium text-base">
                      E-Learning Programs
                    </h1>
                    <p className="font-normal text-sm text-[#464646]">
                      {p?.subjects}
                      Our land. Our future. We are #GenerationRestoration.
                    </p>
                    <div className="flex gap-1 items-center text-[#1315175C]">
                      <LuMapPin size={20} />
                      <p className="font-normal text-sm">
                        Live-streamed event via Zoom
                      </p>
                    </div>

                    <div className="flex gap-1 items-center">
                      <LuClock5 size={20} />
                      <p className="font-normal text-sm text-[#1315175C] ">
                        {new Date(p?.eventStartDate).toLocaleDateString('en-us', { month: "short", year: "numeric", day: "numeric",})} - {new Date(p?.eventEndDate).toLocaleDateString('en-us', { month: "short", year: "numeric", day: "numeric", })}
                    
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col md:items-end">
                    <Image
                      src={p?.bannerUrl || "/Images/Homepage/World.png"}
                      alt={p?.subject}
                      width={201}
                      height={201}
                      className="rounded-md"
                    />
                  </div>
                  
                </div>
              ))}
            </>
          )}
          
        </div>
        
      </div>
    </section>
  );
};

export default Programs;
