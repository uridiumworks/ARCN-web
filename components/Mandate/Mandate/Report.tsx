"use client";
import { LuMapPin } from "react-icons/lu";
import Image from "next/image";
import { useClientReportsData } from "@/hooks/Reports.hooks";
import CustomContainer from "@/components/CustomContainer";
import Link from "next/link";
import { useGlobalClient } from "@/contexts/GlobalClientContext";
import { useEffect, useState } from "react";
import { CoordinationReportSkeletonLoading } from "@/components/skeletonloading/CoordinationReportSkeletonLoading";
import CustomPagination from "@/components/Shared/CustomPagination";

// const data = [
//   {
//     title: "ARCN Research Coordination Report 2023",
//     description: "Our land. Our future. We are #GenerationRestorations.",
//     slug: "arcn-research-coordination-report",
//   },
//   {
//     title: "ARCN Research Coordination Report 2023",
//     description: "Our land. Our future. We are #GenerationRestorations.",
//     slug: "arcn-research-coordination-report-2",
//   },
// ];

const baseURL = process.env.NEXT_PUBLIC_API_BASE_UPLOAD_URL;

const Report = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize] = useState(10);

  const {
    isLoadingCoordinationReports,
    coordinationReports,
    fetchCoordinationReports,
  } = useGlobalClient();

  useEffect(() => {
    fetchCoordinationReports(currentPage, pageSize);
  }, [currentPage, fetchCoordinationReports, pageSize]);

  useEffect(() => {
    if (coordinationReports && coordinationReports.meta.pagination?.pageCount) {
      setTotalPages(coordinationReports.meta.pagination.pageCount);
      setCurrentPage(coordinationReports.meta.pagination.page);
    }
  }, [coordinationReports]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section className="bg-white py-12 md:py-20">
      <CustomContainer>
        <div className="flex flex-col gap-12">
          <div className="flex flex-col text-center gap-2.5">
            <h2 className="text-center text-[#171717] font-bold text-3xl sm:text-4xl leading-[2.25rem]">
              Coordination Report
            </h2>
            <p className="text-black font-normal text-sm leading-[1.5rem]">
              Lorem ipsum dolor sit amet consectetur. Elementum ullamcorper quis
              etiam euismod quisque <br className="hidden md:block" /> montes
              arcu risus. Magnis posuere tincidunt elit ultrices tortor. Sit
              semper cras sed duis tortor <br className="hidden md:block" />{" "}
              tempor amet gravida. Rhoncus quis nisl etiam tortor.
            </p>
          </div>

          {/* <div className="grid grid-cols-[100%] sm:grid-cols-2 gap-14">
            {reports?.length > 0 &&
              reports?.slice(0, 4)?.map(
                // @ts-ignore
                (el, i) => (
                  <div
                    key={el?.reportsId}
                    className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-10 bg-white border border-[#E8E8E8] rounded-xl py-3 px-3.5 lg:px-2.5 lg:py-1.5 "
                  >
                    <div className="flex flex-col gap-3 lg:self-center items-start order-2 lg:order-1">
                      <div className="flex flex-col">
                        <h3 className="text-lg leading-[1.5rem] text-[#131517] font-medium">
                          {el.title}
                        </h3>

                        <p className="font-normal text-[#464646] text-xs leading-[1.5rem]">
                          {el.description ||
                            "Our land. Our future. We are #GenerationRestoration."}
                        </p>
                      </div>
                      <div className="flex gap-2 mt-auto">
                        <Link
                          href={`/mandate/research/coordination-report/${el.reportsId}/report`}
                          className="bg-[#30A85F] text-white font-sans rounded-sm px-8 py-4 leading-[0.875rem] text-sm mt-auto"
                        >
                          View
                        </Link>
                      </div>
                    </div>
                    <div className="relative w-full lg:w-[9.375rem] h-[9.375rem] lg:h-full shrink-0  rounded-xl overflow-hidden order-1 lg:order-2 ">
                      <Image
                        src="/Images/Homepage/event-imgholder.png"
                        alt="event-imgholder"
                        className="object-cover  h-full w-full"
                        width={150}
                        height={150}
                        priority
                      />
                    </div>
                  </div>
                )
              )}
          </div> */}
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-8">
              {isLoadingCoordinationReports && (
                <CoordinationReportSkeletonLoading counts={6} />
              )}

              {!isLoadingCoordinationReports &&
                (!coordinationReports ||
                  coordinationReports?.data.length === 0) && <p>no data</p>}
              {!isLoadingCoordinationReports &&
                coordinationReports?.data.length && (
                  <div className="grid grid-cols-[100%] sm:grid-cols-2 gap-14">
                    {coordinationReports?.data.map(
                      // @ts-ignore
                      (el, i) => (
                        <div
                          key={el?.id}
                          className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-10 bg-white border border-[#E8E8E8] rounded-xl py-3 px-3.5 lg:px-2.5 lg:py-1.5 "
                        >
                          <div className="flex flex-col gap-2 lg:self-center items-start order-2 lg:order-1">
                            <div className="flex flex-col gap-1">
                              <h3 className="text-lg leading-[1.5rem] text-[#131517] font-medium">
                                {el?.Title}
                              </h3>

                              <p className="font-normal text-[#464646] text-xs leading-[1.2rem]">
                                {el?.Description.length > 55
                                  ? `${el?.Description}...`
                                  : el?.Description}
                              </p>
                            </div>
                            <div className="flex gap-2 mt-auto">
                              <Link
                                href={`/mandate/research/coordination-report/${el?.documentId}/report`}
                                className="bg-[#30A85F] text-white font-sans rounded-sm px-6 py-3 leading-[0.875rem] text-sm mt-auto"
                              >
                                View
                              </Link>
                            </div>
                          </div>
                          <div className="relative w-full lg:w-[9.375rem] h-[9.375rem] lg:h-full shrink-0  rounded-xl overflow-hidden order-1 lg:order-2 ">
                            <Image
                              src={`${baseURL}${el?.Image?.url}`}
                              alt="event-imgholder"
                              className="object-cover h-full w-full"
                              width={150}
                              height={150}
                              priority
                            />
                          </div>
                        </div>
                      )
                    )}
                  </div>
                )}

              {!isLoadingCoordinationReports &&
                coordinationReports?.data.length && (
                  <CustomPagination
                    currentPage={currentPage}
                    handlePageChange={handlePageChange}
                    totalPages={totalPages}
                  />
                )}
            </div>

            <Link
              href="/mandate/research/coordination-report"
              className="self-center py-2.5 px-8 bg-transparent border border-[#E6E6E6] font-bold text-[#15271C] font-sans capitalize text-sm leading-[2rem]"
            >
              VIEW ALL
            </Link>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default Report;
