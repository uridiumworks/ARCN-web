"use client";
import type React from "react";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import CustomContainer from "@/components/CustomContainer";
import CustomPagination from "@/components/Shared/CustomPagination";
import { ApiEndpointsEnum } from "@/types";
import { useContextSelector } from "@/hooks/use-context-selector";
import NoDataMessage from "@/components/Shared/NoDataMessage";
import Link from "next/link";
import NewsletterSkeletonLoading from "@/components/skeletonloading/NewsletterSkeleletonLoading";


const baseURL = process.env.NEXT_PUBLIC_API_BASE_UPLOAD_URL;
const Newsletter = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);


  // Only select the specific parts of the context that this component needs
    const isLoadingNewsLetters = useContextSelector(
      (context) => context.isLoadingNewsLetters
    );
  
    const newsletters = useContextSelector((context) => context.newsletters);
    console.log("newsletters", newsletters,isLoadingNewsLetters);
    const fetchAllNewsletters = useContextSelector(
      (context) => context.fetchAllNewsletters
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
      fetchNewsletterWithSearch(currentPage, pageSize, debouncedSearchQuery);
    }, [currentPage, pageSize, debouncedSearchQuery]);
  
    // Update total pages when reports data changes
    useEffect(() => {
      if (newsletters && newsletters.meta?.pagination?.pageCount) {
        setTotalPages(newsletters.meta.pagination.pageCount);
      }
    }, [newsletters]);
    // Function to fetch Newsletter with search
      const fetchNewsletterWithSearch = async (
        page: number,
        size: number,
        query: string
      ) => {
        // Construct the API URL with the appropriate filters
        let endpoint = `${ApiEndpointsEnum.ALL_NEWSLETTERS}&pagination[page]=${page}&pagination[pageSize]=${pageSize}`;
    
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
    
        // Call your fetchAllNewsLetters with the constructed endpoint
        // If your fetchAllNewsLetters doesn't accept a custom endpoint, you'll need to modify it
        // or implement the fetch logic here
        await fetchAllNewsletters(page, size, endpoint);
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
                Newsletter
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
              placeholder="Search Newsletter"
              value={searchQuery}
              onChange={handleSearch}
              />       
            </div>

            <div className="flex flex-col gap-6">
              {isLoadingNewsLetters && <NewsletterSkeletonLoading />}

              {!isLoadingNewsLetters &&
              (!newsletters?.data || newsletters.data.length === 0) && (
              <div>
                {isSearching ? (
                // <p>
                //   No Newsletter found matching &quot;{debouncedSearchQuery}
                //   &quot;.
                // </p>
                <NoDataMessage
                    message={`No Newsletter found matching "${debouncedSearchQuery}"`}
                />
                ) : (
                <NoDataMessage message="No Newsletter avaliable" />
                )}
              </div>
              )}
              {!isLoadingNewsLetters && newsletters?.data && newsletters.data.length > 0 && (
                <>
                {JSON.stringify(newsletters)}
                <div className="grid grid-cols-[100%] sm:grid-cols-3 gap-3">

{newsletters.data.map((el) => (
  <div key={el?.id} className="border-2 rounded-lg h-[100%] space-y-4 md:space-y-0 flex flex-col justify-between">
    <div className="py-5 space-y-3">
      <Link href={``}>
        <Image
          src={`${baseURL}${el?.Images[0]?.url}`}
          alt="event-imgholder"
          className="object-cover h-full w-full"
          width={150}
          height={150}
          priority
        />
      </Link>
      <div className="space-y-2">
        <h1 className="text-lg font-bold py-1 font-montserrat">{el?.Title}</h1>
        <p className="text-sm text-[#858C95]">{el?.Description}</p>
      </div>
      <div className=" w-full rounded-lg  py-3 px-2 ">
        <Link href={el?.Link}>
          <Button variant="ghost" className="text-[#0C513F] bg-[#0C513F0D] w-full ">
            READ MORE
          </Button>
        </Link>
      </div>
    </div>

  </div>
))}
</div>
                </>
                
              )}
              {!isLoadingNewsLetters && newsletters?.data && newsletters.data.length > 0 && (
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
export default Newsletter;




// import React from "react";
// import { Input } from "@/components/ui/input";
// import Image from "next/image";
// import Link from "next/link";
// import { newsletterData } from "../_components/data";
// import { Button } from "@/components/ui/button";
// import CustomContainer from "@/components/CustomContainer";

// type NewsletterProps = {
//   id: number;
//   imgUrl: string;
//   title: string;
//   desc: string;
// };

// const Newsletter = () => {
//   return (
//     <section className="py-12 md:py-20">
//       <CustomContainer>
//         <div className="flex flex-col gap-10">
//           <div className="flex flex-col gap-4">
//             <div className="flex flex-col gap-3">
//               <h3 className="text-3xl sm:text-4xl leading-[2.25rem] font-bold text-[#1B222B]">
//                 Newsletter
//               </h3>
//               <p className="text-sm leading-[1.5rem] text-gray pt-2">
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

//           <div className=" grid grid-cols-1 md:grid-cols-4 gap-5">
//             {newsletterData.map((newsletter: NewsletterProps) => (
//               <div
//                 key={newsletter.id}
//                 className="border-2 rounded-lg h-[100%] space-y-4 md:space-y-0 flex flex-col justify-between"
//               >
//                 <div className="space-y-3">
//                   <Image
//                     src={newsletter.imgUrl}
//                     alt="image"
//                     width={384}
//                     height={200}
//                     className="rounded-t-lg"
//                   />
//                   <h1 className="text-base font-[700] text-center font-montserrat">
//                     {newsletter.title}
//                   </h1>
//                   <p className="text-xs text-[##858C95e] text-center ">
//                     {newsletter.desc}
//                   </p>
//                 </div>

//                 <div className=" w-full rounded-lg  py-3 px-2 ">
//                   <Link
//                     href={
//                       "/publications/newsletters/arcn-meets-research-institute"
//                     }
//                   >
//                     <Button
//                       variant="ghost"
//                       className="text-[#0C513F] bg-[#0C513F0D] w-full "
//                     >
//                       READ MORE
//                     </Button>
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </CustomContainer>
//     </section>
//   );
// };

// export default Newsletter;
