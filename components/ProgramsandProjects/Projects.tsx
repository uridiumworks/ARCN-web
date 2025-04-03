"use client";
import { useClientProjectsData } from "@/hooks/Projects.hooks";
import Link from "next/link";
import Image from "next/image";
import ProjectsSkeletonLoading from "../skeletonloading/ProjectsSkeletonLoading";
import CustomContainer from "../CustomContainer";

const Projects = () => {
  const { loading, projects, error } = useClientProjectsData();

  return (
    <section className="py-12 md:py-20">
      {/* <div className="lg:w-8/12 lg:mx-auto space-y-6"> */}

      <CustomContainer>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4 text-center">
            <h2 className="font-bold leading-[2.25rem] text-3xl sm:text-4xl">
              Our Projects
            </h2>
            <p className="font-normal text-sm leading-[1.5rem]">
              Lorem ipsum dolor sit amet consectetur. Elementum ullamcorper quis
              etiam euismod quisque <br className="hidden md:block" />
              montes arcu risus. Magnis posuere tincidunt elit ultrices tortor.
              Sit semper cras sed duis tortor <br className="hidden md:block" />
              tempor amet gravida. Rhoncus quis nisl etiam tortor.
            </p>
          </div>

          {/* <ProjectsSkeletonLoading /> */}
          <div className="flex flex-col items-center gap-9">
            <div className="p-3 grid grid-cols-1 md:grid-cols-3 gap-6">
              {projects?.length > 0 && (
                <>
                  {projects?.slice(0, 6)?.map((p: any, index: number) => (
                    <div key={index} className="relative w-full">
                      <Image
                        src={p?.bannerUrl || "/Images/Mandatepage/Casava.png"}
                        alt={p?.title}
                        width={368}
                        height={310.4}
                        className="rounded-b-md"
                      />
                      <Link href={"/programs-and-projects/project"}>
                        <div className="absolute w-full h-[100.88px] bg-[#000000CC] bottom-0 rounded-b-md text-white px-4 pb-4 pt-6">
                          <h1 className="font-medium text-base">
                            Calcium A Cassava
                          </h1>
                          <p className="font-normal leading-6 text-sm">
                            {p?.description}Lorem ipsum dolor sit amet
                            consectetur. Tellus varius fermentum nisi a quis
                            tristique velit adipiscing magna.
                          </p>
                        </div>
                      </Link>
                    </div>
                  ))}
                </>
              )}
            </div>

            <button
              type="button"
              className="border py-2 px-9 font-bold text-sm rounded-[4px] text-[#15271C] w-full md:w-[152px] h-[52px]"
            >
              VIEW ALL
            </button>
          </div>
        </div>
      </CustomContainer>

      {/* <div className="p-3 grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects?.length > 0 && (
              <>
                {projects?.slice(0, 3)?.map((p: any, index: number) => (
                  <div key={index} className="relative w-[360px]">
                    <Image
                      src={p?.bannerUrl || "/Images/Mandatepage/Casava.png"}
                      alt={p?.title}
                      width={368}
                      height={310.4}
                      className="rounded-b-md"
                    />
                    <Link href={"/programs-and-projects/project"}>
                      <div className="absolute w-full bg-[#000000CC] bottom-0 rounded-b-md text-white px-4 pb-4 pt-6">
                        <h1 className="font-medium text-[15.52px]">Calcium A Cassava</h1>
                        <p className="font-normal leading-6 text-[10.35px]">{p?.description}Lorem ipsum dolor sit amet consectetur. Tellus varius fermentum nisi a quis tristique velit adipiscing magna.</p>
                      </div>
                    </Link>
                  </div>
                ))}
              </>
            )}
          </div> */}
      {/* </div> */}
    </section>
  );
};

export default Projects;
