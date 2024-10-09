"use client";
import { useClientNarissData } from "@/hooks/Naris.hooks";
import { useClientProjectsData } from "@/hooks/Projects.hooks";
import Image from "next/image";

const Research = () => {
  // const { loading, nariss, error } = useClientNarissData();
  const { loading, projects, error } = useClientProjectsData();

  return (
    <main className="h-auto md:h-[600px] bg-[#15271C] font-montserrat">
      <div className="text-white text-center">
        <h1 className="font-bold text-[65px]">Research</h1>
        <p className="font-normal text-[19px] md:text-[21px]">
          Take a look at some of our technologies
        </p>
      </div>

      <div className="p-3 lg:w-[100%] mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-5 md:gap-3">
        {projects?.length > 0 && (
          <>
            {projects?.slice(0, 4)?.map((p: any, index: number) => (
              <div key={index} className="relative">
                <Image
                  src={p?.bannerUrl || "/Images/Mandatepage/Casava.png"}
                  alt={p?.title}
                  width={368}
                  height={200}
                />
                <div className="absolute md:w-full bg-[#000000CC] bottom-0 text-white p-2">
                  <h1 className="font-medium text-[15.52px]">{p?.title}</h1>
                  <p className="font-normal text-[10.35px]">{p?.description}</p>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </main>
  );
};

export default Research;
