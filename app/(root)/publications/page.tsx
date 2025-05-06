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
  return (
    <section className="py-12 md:py-20">
      <CustomContainer>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <h2 className="text-3xl sm:text-4xl leading-[2.25rem] font-bold text-[#1B222B]">
                Journals
              </h2>
              <p className="text-sm leading-[1.5rem] text-grays">
              Agricultural research journals serve as essential knowledge products for disseminating valuable 
              <br/> scientific findings and innovations in the agricultural sector. These periodic publications feature 
              <br/> carefully curated content selected by our editorial boards comprised of experts representing diverse 
              <br/> agricultural disciplines and specializations. With our rigorous review process, we ensure that only 
              <br/> publications of the highest academic integrity and scientific merit are published for our 
              <br/> stakeholders. Each submission undergoes thorough evaluation to maintain quality standards and 
              <br/> relevance for our diverse audience of researchers, practitioners, and policymakers.
              </p>
            </div>

            <Input
              className="outline:none border w-full md:w-[400px] mt-5"
              type="search"
              placeholder="Search for journals"
            />
          </div>

          <div className=" grid grid-cols-1 md:grid-cols-3 gap-5">
            {journalData.map((journal: JournalProps) => (
              <div key={journal.id} className="py-5 space-y-3">
                <Link href="/publications/journals">
                  <Image
                    src={journal.imgUrl}
                    alt="image"
                    width={384}
                    height={300}
                  />
                </Link>

                <div className="space-y-2">
                  <h1 className="text-lg font-bold py-1 font-montserrat">
                    {journal.title}
                  </h1>
                  <p className="text-sm text-[#858C95] ">{journal.desc}</p>
                </div>

                <div className="flex gap-3 pt-5">
                  <Image
                    src={journal.authorImg}
                    alt="image"
                    className="w-[40px]"
                    width={40}
                    height={40}
                  />
                  <div className="">
                    <h1 className="text-[#323539] font-semibold text-sm">
                      David Munsan
                    </h1>
                    <p className="text-[#858C95]">
                      Regional Marketing Developer
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

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
