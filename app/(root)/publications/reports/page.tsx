"use client";
import type React from "react";
import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import CustomContainer from "@/components/CustomContainer";
import ReportsSkeletonLoading from "@/components/skeletonloading/ReportsSkeletonLoading";
import CustomPagination from "@/components/Shared/CustomPagination";
import { ApiEndpointsEnum } from "@/types";
import { useContextSelector } from "@/hooks/use-context-selector";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_UPLOAD_URL;
const Reports = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  // Only select the specific parts of the context that this component needs
  const isLoadingReports = useContextSelector(
    (context) => context.isLoadingReports
  );

  const reports = useContextSelector((context) => context.reports);

  const fetchAllReports = useContextSelector(
    (context) => context.fetchAllReports
  );

  // Debounce search input to avoid too many API calls
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
      // Reset to first page when search changes
      if (searchQuery !== debouncedSearchQuery) {
        setCurrentPage(1);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery, debouncedSearchQuery]);

  // Fetch reports whenever page or search query changes
  useEffect(() => {
    setIsSearching(!!debouncedSearchQuery);
    fetchReportsWithSearch(currentPage, pageSize, debouncedSearchQuery);
  }, [currentPage, pageSize, debouncedSearchQuery]);

  // Update total pages when reports data changes
  useEffect(() => {
    if (reports?.meta?.pagination?.pageCount) {
      setTotalPages(reports.meta.pagination.pageCount);
    }
  }, [reports]);

  // Function to fetch reports with search
  const fetchReportsWithSearch = async (
    page: number,
    size: number,
    query: string
  ) => {
    // Construct the API URL with the appropriate filters
    let endpoint = `${ApiEndpointsEnum.ALL_REPORTS}&pagination[page]=${page}&pagination[pageSize]=${pageSize}`;

    // Add search filters if query exists
    if (query) {
      // Add OR condition to search in both Title and Description
      endpoint += `&filters[$or][0][Title][$containsi]=${encodeURIComponent(
        query
      )}`;
      endpoint += `&filters[$or][1][Description][$containsi]=${encodeURIComponent(
        query
      )}`;
    }

    // Call your fetchAllReports with the constructed endpoint
    // If your fetchAllReports doesn't accept a custom endpoint, you'll need to modify it
    // or implement the fetch logic here
    await fetchAllReports(page, size, endpoint);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <section className="py-12 md:py-20">
      <CustomContainer>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <h2 className="text-3xl sm:text-4xl leading-[2.25rem] font-bold text-[#1B222B]">
                Reports
              </h2>
              <p className="text-sm leading-[1.5rem] text-gray pt-2">
                Lorem ipsum dolor sit amet consectetur. Elementum ullamcorper
                quis etiam euismod quisque montes arcu risus. Magnis posuere
                tincidunt elit <br /> ultrices tortor. Sit semper cras sed duis
                tortor tempor amet gravida. Rhoncus quis nisl etiam tortor.
              </p>
            </div>

            <div className="relative w-full md:w-[400px] mt-5">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <Input
                className="outline:none border w-full"
                type="search"
                placeholder="Search reports"
                value={searchQuery}
                onChange={handleSearch}
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {isLoadingReports && <ReportsSkeletonLoading counts={6} />}

            {!isLoadingReports &&
              (!reports?.data || reports.data.length === 0) && (
                <div className="text-center text-gray-500">
                  {isSearching ? (
                    <p>
                      No reports found matching &quot;{debouncedSearchQuery}
                      &quot;.
                    </p>
                  ) : (
                    <p>No reports available.</p>
                  )}
                </div>
              )}

            {!isLoadingReports && reports?.data && reports.data.length > 0 && (
              <div className="grid grid-cols-[100%] sm:grid-cols-2 gap-14">
                {reports.data.map((el) => (
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
                        <Button
                          variant="ghost"
                          className=" bg-white text-[#07A460] border rounded-lg py-2 px-2"
                        >
                          {" "}
                          Download{" "}
                        </Button>
                      </div>
                    </div>
                    <div className="relative w-full lg:w-[9.375rem] h-[9.375rem] lg:h-full shrink-0 rounded-xl overflow-hidden order-1 lg:order-2 ">
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
                ))}
              </div>
            )}

            {!isLoadingReports && reports?.data && reports.data.length > 0 && (
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

export default Reports;
