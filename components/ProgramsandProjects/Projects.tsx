"use client";
import { useClientProjectsData } from "@/hooks/Projects.hooks";
import Link from "next/link";
import Image from "next/image";
import ProjectsSkeletonLoading from "../skeletonloading/ProjectsSkeletonLoading";
import CustomContainer from "../CustomContainer";
import { useEffect, useState } from "react";
import CustomPagination from "../Shared/CustomPagination";
import { useContextSelector } from "@/hooks/use-context-selector";
import NoDataMessage from "../Shared/NoDataMessage";
const baseURL = process.env.NEXT_PUBLIC_API_BASE_UPLOAD_URL;
const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize] = useState(10);

  // Only select the specific parts of the context that this component needs
  const isLoadingOurProjects = useContextSelector(
    (context) => context.isLoadingOurProjects
  );

  const ourProjects = useContextSelector((context) => context.ourProjects);

  const fetchOurProjects = useContextSelector(
    (context) => context.fetchOurProjects
  );

  useEffect(() => {
    fetchOurProjects(currentPage, pageSize);
  }, [currentPage, fetchOurProjects, pageSize]);

  useEffect(() => {
    if (ourProjects && ourProjects.meta.pagination?.pageCount) {
      setTotalPages(ourProjects.meta.pagination.pageCount);
      setCurrentPage(ourProjects.meta.pagination.page);
    }
  }, [ourProjects]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

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
            The Agricultural Research Council of Nigeria (ARCN) implements diverse agricultural development projects addressing critical challenges across Nigeria&apos;s food systems. These initiatives range from enhancing aquaculture sustainability through innovative feed solutions to strengthening climate-resilient rice production and improving agricultural data collection methodologies.
            <br/>
            <br/>
ARCN collaborates with international organizations, government agencies, research institutes, and local stakeholders to execute these projects, focusing on sustainable practices, technology adoption, and capacity building. Each project follows a structured implementation approach with clearly defined objectives, timelines, and expected outcomes. Through strategic partnerships and evidence-based interventions, these projects contribute significantly to Nigeria&apos;s agricultural productivity, food security, and climate resilience while creating opportunities for smallholder farmers and promoting knowledge exchange across the agricultural sector.

            </p>
          </div>

          {/* <ProjectsSkeletonLoading /> */}
          <div className="flex flex-col items-center gap-9">
            <div className="flex flex-col gap-6">
              {isLoadingOurProjects && <ProjectsSkeletonLoading />}
              {!isLoadingOurProjects &&
                (!ourProjects?.data || ourProjects?.data.length === 0) && (
                  <NoDataMessage message="No Projects avaliable" />
                )}
              {!isLoadingOurProjects && ourProjects?.data.length && (
                <div className="p-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {ourProjects?.data.map((p, index: number) => (
                    <div
                      key={index}
                      className="relative h-[18.5rem] rounded-lg overflow-hidden"
                    >
                      <Image
                        src={`${baseURL}${p?.Image?.url}`}
                        alt={p?.Title}
                        width={328}
                        height={200}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute w-full bg-[#000000CC] bottom-0 flex flex-col  text-white px-2 py-2.5">
                        <h3 className="font-medium text-sm leading-[1.74625rem]">
                          {p?.Title}
                        </h3>
                        <p className="font-normal text-[0.6875rem] leading-[1.2125rem]">
                          {p?.Description.length > 110
                            ? `${p?.Description}...`
                            : p?.Description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {!isLoadingOurProjects && ourProjects?.data.length && (
                <CustomPagination
                  currentPage={currentPage}
                  handlePageChange={handlePageChange}
                  totalPages={totalPages}
                />
              )}
            </div>
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
