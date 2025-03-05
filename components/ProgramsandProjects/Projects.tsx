"use client";
import { useClientProjectsData } from "@/hooks/Projects.hooks";
import { Link } from "lucide-react";
import Image from "next/image";

const Projects = () => {
  const { loading, projects, error } = useClientProjectsData();

  return (
    <section className="min-h-screen">
      <div className="">
        <div className="text-center p-9 space-y-4">
          <h1 className="font-bold text-4xl">Our Projects</h1>
          <p className="font-normal text-base">
            Lorem ipsum dolor sit amet consectetur. Elementum ullamcorper quis
            etiam euismod quisque <br />
            montes arcu risus. Magnis posuere tincidunt elit ultrices tortor. Sit
            semper cras sed duis tortor <br />
            tempor amet gravida. Rhoncus quis nisl etiam tortor.
          </p>
        </div>

        <div className="flex flex-col mx-auto">
          
          <div className="p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {projects?.length > 0 && (
              <>
                {projects?.slice(0, 3)?.map((p: any, index: number) => (
                  <div key={index} className="relative">
                    <Image
                      src={p?.bannerUrl || "/Images/Mandatepage/Casava.png"}
                      alt={p?.title}
                      width={368}
                      height={310.4}
                      className="rounded-b-md"
                    />
                    <Link href="">
                      <div className="absolute w-full bg-[#000000CC] bottom-0 rounded-b-md text-white p-2">
                        <h1 className="font-medium text-[15.52px]">Calcium A Cassava</h1>
                        <p className="font-normal text-[10.35px]">{p?.description}Lorem ipsum dolor sit amet consectetur. Tellus varius fermentum nisi a quis tristique velit adipiscing magna.</p>
                      </div>
                    </Link>
                  </div>
                ))}
              </>
            )}
          </div>

          <div className="p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {projects?.length > 0 && (
              <>
                {projects?.slice(0, 3)?.map((p: any, index: number) => (
                  <div key={index} className="relative">
                    <Image
                      src={p?.bannerUrl || "/Images/Mandatepage/Casava.png"}
                      alt={p?.title}
                      width={368}
                      height={310.4}
                      className="rounded-b-md"
                    />
                    <div className="absolute w-full bg-[#000000CC] bottom-0 rounded-b-md text-white p-2">
                      <h1 className="font-medium text-[15.52px]">Calcium A Cassava</h1>
                      <p className="font-normal text-[10.35px]">{p?.description}Lorem ipsum dolor sit amet consectetur. Tellus varius fermentum nisi a quis tristique velit adipiscing magna.</p>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>

        <div className="p-9 text-center">
          <button
            type="button"
            className="border py-2 px-9 font-bold text-sm rounded-[4px] text-[#15271C] w-full md:w-[152px] h-[52px]"
          >
            VIEW ALL
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
