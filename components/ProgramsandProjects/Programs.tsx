"use client";
import React, { useEffect, useState } from "react";

import { useClientProgramsData } from "@/hooks/Programs.hooks";
import Image from "next/image";
import { LuMapPin } from "react-icons/lu";
import { LuClock5 } from "react-icons/lu";
import ProgramsSkeletonLoading from "../skeletonloading/ProgramsSkeletonLoading";
import CustomContainer from "../CustomContainer";
import CustomPagination from "../Shared/CustomPagination";
import { useContextSelector } from "@/hooks/use-context-selector";
import NoDataMessage from "../Shared/NoDataMessage";

// testing
const baseURL = process.env.NEXT_PUBLIC_API_BASE_UPLOAD_URL;

const Programs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize] = useState(10);

  // Only select the specific parts of the context that this component needs
  const isLoadingOurPrograms = useContextSelector(
    (context) => context.isLoadingOurPrograms
  );

  const ourPrograms = useContextSelector((context) => context.ourPrograms);

  const fetchOurPrograms = useContextSelector(
    (context) => context.fetchOurPrograms
  );

  useEffect(() => {
    fetchOurPrograms(currentPage, pageSize);
  }, [currentPage, fetchOurPrograms, pageSize]);

  useEffect(() => {
    if (ourPrograms && ourPrograms.meta.pagination?.pageCount) {
      setTotalPages(ourPrograms.meta.pagination.pageCount);
      setCurrentPage(ourPrograms.meta.pagination.page);
    }
  }, [ourPrograms]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <section className="py-6 md:py-10">
      <CustomContainer>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4 text-center">
            <h2 className="font-bold leading-[2.25rem] text-3xl sm:text-4xl">
              Programs
            </h2>
            <p className="font-normal leading-[1.5rem] text-sm">
              Lorem ipsum dolor sit amet consectetur. Nunc pharetra a felis
              nibh. Id <br />
              ullamcorper nec leo porta. Enim nunc lacinia dui vehicula
              pellentesque morbi. <br />
              Magna nulla consequat.
            </p>
          </div>

          <div className=" flex flex-col gap-6">
            {isLoadingOurPrograms && <ProgramsSkeletonLoading />}
            {!isLoadingOurPrograms &&
              (!ourPrograms?.data || ourPrograms?.data.length === 0) && (
                <NoDataMessage message="No Programs avaliable" />
              )}

            {/* <ProgramsSkeletonLoading /> */}
            {!isLoadingOurPrograms && ourPrograms?.data.length && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {ourPrograms?.data?.map((p, index: number) => (
                  <div
                    key={p?.id}
                    className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-10 bg-white border border-[#E8E8E8] rounded-xl py-3 px-3.5 lg:px-2.5 lg:py-1.5 "
                  >
                    <div className="flex flex-col gap-3 lg:self-center items-start order-2 lg:order-1">
                      <div className="flex flex-col gap-1.5">
                        <h3 className="text-lg leading-[1.5rem] text-[#131517] font-medium">
                          {p?.Title}
                        </h3>

                        {/* <p className="font-normal text-[#464646] text-xs leading-[1.2rem]">
                          {p?.Description[0]?.children[0]?.text.length > 55
                            ? `${p?.Description[0]?.children[0]?.text}...`
                            : p?.Description[0]?.children[0]?.text}
                        </p> */}
                      </div>
                      <div className="flex gap-1 items-center">
                        <LuClock5 size={20} />
                        <p className="font-normal text-sm text-[#1315175C] ">
                          {p?.StartDate &&
                            new Date(p?.StartDate).toLocaleDateString("en-us", {
                              month: "short",
                              year: "numeric",
                              day: "numeric",
                            })}{" "}
                          -{" "}
                          {p?.EndDate &&
                            new Date(p?.EndDate).toLocaleDateString("en-us", {
                              month: "short",
                              year: "numeric",
                              day: "numeric",
                            })}
                        </p>
                      </div>
                    </div>
                    <div className="relative w-full lg:w-[9.375rem] h-[9.375rem] lg:h-full shrink-0  rounded-xl overflow-hidden order-1 lg:order-2 ">
                      <Image
                        src={`${baseURL}${p?.Image?.url}`}
                        alt="event-imgholder"
                        className="object-cover h-full w-full"
                        width={150}
                        height={150}
                        priority
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {!isLoadingOurPrograms && ourPrograms?.data.length && (
              <CustomPagination
                currentPage={currentPage}
                handlePageChange={handlePageChange}
                totalPages={totalPages}
              />
            )}
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default Programs;
