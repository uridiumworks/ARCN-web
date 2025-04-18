"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import CustomPagination from "@/components/Shared/CustomPagination";
import { CoordinationReportSkeletonLoading } from "@/components/skeletonloading/CoordinationReportSkeletonLoading";
import { useContextSelector } from "@/hooks/use-context-selector";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_UPLOAD_URL;
export default function Reports() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize] = useState(10);

  // Only select the specific parts of the context that this component needs
  const isLoadingCoordinationReports = useContextSelector(
    (context) => context.isLoadingCoordinationReports
  );

  const coordinationReports = useContextSelector(
    (context) => context.coordinationReports
  );

  const fetchCoordinationReports = useContextSelector(
    (context) => context.fetchCoordinationReports
  );

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
    <div className="flex flex-col gap-8">
      {isLoadingCoordinationReports && (
        <CoordinationReportSkeletonLoading counts={6} />
      )}

      {!isLoadingCoordinationReports &&
        (!coordinationReports || coordinationReports?.data.length === 0) && (
          <p>no data</p>
        )}
      {!isLoadingCoordinationReports && coordinationReports?.data.length && (
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

      {!isLoadingCoordinationReports && coordinationReports?.data.length && (
        <CustomPagination
          currentPage={currentPage}
          handlePageChange={handlePageChange}
          totalPages={totalPages}
        />
      )}
    </div>
  );
}
