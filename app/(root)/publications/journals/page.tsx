"use client";
import type React from "react";
import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import CustomContainer from "@/components/CustomContainer";
import JournalsSkeletonLoading from "@/components/skeletonloading/JournalsSkeletonLoading";
import CustomPagination from "@/components/Shared/CustomPagination";
import { ApiEndpointsEnum } from "@/types";
import { useContextSelector } from "@/hooks/use-context-selector";
import NoDataMessage from "@/components/Shared/NoDataMessage";
import Link from "next/link";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_UPLOAD_URL;
const Journals = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize] = useState(12);
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  // Only select the specific parts of the context that this component needs
    const isLoadingJournals = useContextSelector(
      (context) => context.isLoadingJournals
    );
  
    const journals = useContextSelector((context) => context.reports);
  
    const fetchAllJournals = useContextSelector(
      (context) => context.fetchAllJournals
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
      fetchJournalsWithSearch(currentPage, pageSize, debouncedSearchQuery);
    }, [currentPage, pageSize, debouncedSearchQuery]);
  
    // Update total pages when reports data changes
    useEffect(() => {
      if (journals?.meta?.pagination?.pageCount) {
        setTotalPages(journals.meta.pagination.pageCount);
      }
    }, [journals]);
    // Function to fetch journals with search
      const fetchJournalsWithSearch = async (
        page: number,
        size: number,
        query: string
      ) => {
        // Construct the API URL with the appropriate filters
        let endpoint = `${ApiEndpointsEnum.ALL_JOURNAL}&pagination[page]=${page}&pagination[pageSize]=${pageSize}`;
    
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
    
        // Call your fetchAllJOURNAL with the constructed endpoint
        // If your fetchAllJOURNAL doesn't accept a custom endpoint, you'll need to modify it
        // or implement the fetch logic here
        await fetchAllJournals(page, size, endpoint);
      };
    
      const handlePageChange = (page: number) => {
        setCurrentPage(page);
      };
    
      const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
      };
      
    return(
        <section>
            <CustomContainer>
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-3">
                            <h2 className="text-3xl sm:text-4xl leading-[2.25rem] font-bold text-[#1B222B]">
                            Journals
                            </h2>
                            <p className="text-sm leading-[1.5rem] text-gray pt-2">
                            Lorem ipsum dolor sit amet consectetur. Elementum ullamcorper
                            quis etiam euismod quisque montes arcu risus. Magnis posuere
                            tincidunt elit <br /> ultrices tortor. Sit semper cras sed duis
                            tortor tempor amet gravida. Rhoncus quis nisl etiam tortor.
                            </p>
                        </div>            
                        <Input
                        className="outline:none border w-full md:w-[400px] mt-5"
                        type="search"
                        placeholder="Search Journals"
                        value={searchQuery}
                        onChange={handleSearch}
                        />
                              
                    </div>
                    <div>
                        {isLoadingJournals && <JournalsSkeletonLoading />}

                        {!isLoadingJournals &&
                            (!journals?.data || journals.data.length === 0) && (
                            <div>
                                {isSearching ? (
                                // <p>
                                //   No journals found matching &quot;{debouncedSearchQuery}
                                //   &quot;.
                                // </p>
                                <NoDataMessage
                                    message={`No journals found matching "${debouncedSearchQuery}"`}
                                />
                                ) : (
                                <NoDataMessage message="No journals avaliable" />
                                )}
                            </div>
                            )}
                            {!isLoadingJournals && journals?.data && journals.data.length > 0 && (
                                <div className="grid grid-cols-[100%] sm:grid-cols-2 gap-3">
                                    {journals.data.map((el) => (
                                        <div key={el?.id}>
                                            <div className="py-5 space-y-3">
                                                <Link href={``}>
                                                    <Image
                                                        src={`${baseURL}${el?.Image?.url}`}
                                                        alt="event-imgholder"
                                                        className="object-cover h-full w-full"
                                                        width={150}
                                                        height={150}
                                                        priority
                                                    />
                                                </Link>
                                                <div className="space-y-2">
                                                    <h1 className="text-lg font-bold py-1 font-montserrat">{el?.Title}</h1>
                                                    <p className="text-sm text-[#858C95]">{el?.Description.length > 55
                                                        ? `${el?.Description}...`
                                                        : el?.Description}
                                                    </p>
                                                </div>

                                            </div>

                                        </div>
                                    ))}
                                </div>
                            )}
                        
                    </div>
                </div>
            </CustomContainer>
        </section>
    )  
}
export default Journals;
