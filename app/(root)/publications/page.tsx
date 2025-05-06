"use client";
import type React from "react";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import CustomContainer from "@/components/CustomContainer";
import JournalsSkeletonLoading from "@/components/skeletonloading/JournalsSkeletonLoading";
import CustomPagination from "@/components/Shared/CustomPagination";
import { ApiEndpointsEnum } from "@/types";
import { useContextSelector } from "@/hooks/use-context-selector";
import NoDataMessage from "@/components/Shared/NoDataMessage";
import Link from "next/link";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_UPLOAD_URL;
const Publications = () => {
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
  
    const journals = useContextSelector((context) => context.journals);
  
    const fetchAllJOURNAL = useContextSelector(
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
        await fetchAllJOURNAL(page, size, endpoint);
      };
    
      const handlePageChange = (page: number) => {
        setCurrentPage(page);
      };
    
      const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
      };
      
    return(
        <section className="py-12 md:py-20">
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
                        <div className="grid grid-cols-[100%] sm:grid-cols-3 gap-3">
                          {journals.data.map((journals) => (
                            <div key={journals?.id}>
                              <div className="py-5 space-y-3">
                                <Link href={``}>
                                  <Image
                                    src={`${baseURL}${journals?.Image?.url}`}
                                    alt="event-imgholder"
                                    className="object-cover h-full w-full"
                                    width={150}
                                    height={150}
                                    priority
                                  />
                                </Link>
                                <div className="space-y-2">
                                  <h1 className="text-lg font-bold py-1 font-montserrat">{journals?.Title}</h1>
                                  <p className="text-sm text-[#858C95]">{journals?.Description}</p>
                                </div>
                                <div className="flex gap-3 pt-5">
                                  <Image
                                    src={`${baseURL}${journals?.Image?.url}`}
                                    alt="event-imgholder"
                                    className="object-cover h-full w-full"
                                    width={150}
                                    height={150}
                                    priority
                                  />
                                  <div>
                                    <h1 className="text-[#323539] font-semibold text-sm">David Munsan{" "}</h1>
                                    <p className="text-[#858C95]">Regional Marketing Developer{" "}</p>
                                  </div>
                                </div>
                              </div>

                            </div>
                          ))}
                        </div>
                      )}
                      {!isLoadingJournals && journals?.data && journals.data.length > 0 && (
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
    )  
}
export default Publications;

// "use client";

// import React, { useState } from "react";
// import PublicationsMotto from "./_components/PublicationsMotto";
// import Journals from "./_components/Journals";
// import FundingMotto from "./_components/fundingMotto";
// import JournalsMotto from "./_components/journals-motto";
// import Soil from "./_components/Soil";
// import Text from "./_components/text";
// import { journalData } from "./_components/data";
// import Link from "next/link";
// import Image from "next/image";
// import { Input } from "@/components/ui/input";
// import CustomContainer from "@/components/CustomContainer";

// type JournalProps = {
//   id: number;
//   imgUrl: string;
//   title: string;
//   desc: string;
//   author: string;
//   role: string;
//   authorImg: string;
// };

// const Publications = () => {
//   return (
//     <section className="py-12 md:py-20">
//       <CustomContainer>
//         <div className="flex flex-col gap-10">
//           <div className="flex flex-col gap-4">
//             <div className="flex flex-col gap-3">
//               <h2 className="text-3xl sm:text-4xl leading-[2.25rem] font-bold text-[#1B222B]">
//                 Journals
//               </h2>
//               <p className="text-sm leading-[1.5rem] text-grays">
//                 Lorem ipsum dolor sit amet consectetur. Elementum ullamcorper
//                 quis etiam euismod quisque montes arcu risus. Magnis posuere
//                 tincidunt elit <br /> ultrices tortor. Sit semper cras sed duis
//                 tortor tempor amet gravida. Rhoncus quis nisl etiam tortor.
//               </p>
//             </div>

//             <Input
//               className="outline:none border w-full md:w-[400px] mt-5"
//               type="search"
//               placeholder="Search for journals"
//             />
//           </div>

//           <div className=" grid grid-cols-1 md:grid-cols-3 gap-5">
//             {journalData.map((journal: JournalProps) => (
//               <div key={journal.id} className="py-5 space-y-3">
//                 <Link href="/publications/journals">
//                   <Image
//                     src={journal.imgUrl}
//                     alt="image"
//                     width={384}
//                     height={300}
//                   />
//                 </Link>

//                 <div className="space-y-2">
//                   <h1 className="text-lg font-bold py-1 font-montserrat">
//                     {journal.title}
//                   </h1>
//                   <p className="text-sm text-[#858C95] ">{journal.desc}</p>
//                 </div>

//                 <div className="flex gap-3 pt-5">
//                   <Image
//                     src={journal.authorImg}
//                     alt="image"
//                     className="w-[40px]"
//                     width={40}
//                     height={40}
//                   />
//                   <div className="">
//                     <h1 className="text-[#323539] font-semibold text-sm">
//                       David Munsan
//                     </h1>
//                     <p className="text-[#858C95]">
//                       Regional Marketing Developer
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </CustomContainer>
//     </section>
//   );
// };

// export default Publications;
