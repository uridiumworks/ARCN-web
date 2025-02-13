import Image from "next/image";
import CustomContainer from "../CustomContainer";

// const NewsOld = () => {
//   return (
//     <main className="bg-[#FBFAFA] w-full font-montserrat py-9">
//       <h1 className="font-bold text-2xl text-center pb-5">PUBLICATIONS</h1>
//       <div className="flex flex-col lg:flex-row w-full md:w-[100%] gap-14 px-6 md:px-16">
//         <div className="space-y-4 w-full lg:w-[60%] pt-20">
//           <div>
//             <h1 className="font-bold text-base">Journals</h1>
//           </div>
//           <div className="flex flex-col lg:flex-row gap-5 p-9 lg:p-2 border bg-[#FFFFFFCC] rounded-[12.91px]">
//             <div>
//               <Image src="/Images/Homepage/Books.png" alt="Books" width={216.26} height={216.26} className="rounded-2xl" />
//             </div>
//             <div className="space-y-4">
//               <h1 className="font-normal text-[21px]">ARCN JOURNAL.</h1>
//               <p className="font-normal text-base lg:text-sm text-[#999999]">
//                 ARCN plays a pivotal role in the dissemination of cutting-edge
//                 research through its <br />published journals. These journals serve as
//                 a platform for researchers from diverse fields and various
//                 institutes to share their findings, insights, and innovations
//                 with the <br />global academic community.
//               </p>
//               <div className="font-medium text-[13px] py-2 text-[#30A85F]">
//                 <button className="border-0 py-2 px-4 bg-[#0C513F0D]">
//                   Check Journals
//                 </button>
//               </div>
//             </div>
//           </div>

//           <div>
//             <h1 className="font-normal text-[16.41px] text-[#1315175C]"><span className="font-medium text-[#131517] text-[16.95px]">Jun 8</span> Saturday</h1>
//           </div>

//           <div className="flex flex-col lg:flex-row gap-3 p-9 lg:p-2 border bg-[#FFFFFFCC] rounded-[12.91px] ">
//             <div className="space-y-4">
//               <h1 className="font-normal text-[21px]">ARCN NEWSLETTER</h1>
//               <p className="font-normal text-base lg:text-sm text-[#999999]">
//                 We are delighted to bring you the latest updates and highlights
//                 from ARCN, where groundbreaking research meets global
//                 collaboration. Our newsletters serve as a <br />conduit for sharing
//                 cutting-edge discoveries and insights that shape the future
//                 of science, technology, and beyond.
//               </p>
//               <div className="font-medium text-sm lg:text-[13px] py-2 text-[#30A85F]">
//                 <button className="border-0 py-2 px-4 bg-[#0C513F0D]">
//                   Check Newsletters
//                 </button>
//               </div>
//             </div>
//             <div>
//               <Image
//                 src="/Images/Homepage/Overlay.png"
//                 alt="Overlay"
//                 width={216}
//                 height={216}
//               />
//             </div>
//           </div>
//         </div>

//         <div className="space-y-3 lg:w-[40%] h-fit">
//           <h1 className="font-bold text-2xl text-[#333333]">News Alert</h1>

//           <div className="space-y-4">
//             <div>
//               <Image src="/Images/Homepage/Horizontal.png" alt="Horizontal" width={574} height={298.96} />
//             </div>
//             <div className="w-fit space-y-3">
//               <p className="font-semibold text-lg lg:text-[32px] border-b-2 w-fit">
//                 Nature-positive farms on remote hillsides in India show the future
//                 of resilient farming
//               </p>
//               <div className="space-y-2">
//                 <p className="font-medium text-sm lg:text-[21px] border-b-2">
//                   Nature-positive farms on remote hillsides in India show the future
//                   of resilient farming
//                 </p>
//                 <p className="font-medium text-sm lg:text-[21px]">
//                   Nature-positive farms on remote hillsides in India show the future
//                   of resilient farming
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

const data = [
  {
    type: "ARCN JOURNAL",
    imgs: [
      "/images/Homepage/journal-img-1.png",
      "/images/Homepage/journal-img-2.png",
    ],
    subject: "Journal Title",
    content:
      "ARCN plays a pivotal role in the dissemination of cutting-edge research through its published journals. These journals serve as a platform for researchers from diverse fields and various institutes to share their findings, insights, and innovations with the global academic community.",
    id: 1,
  },
  {
    type: "NEWSLETTER",
    imgs: [
      "/images/Homepage/newsletter-img-1.png",
      "/images/Homepage/newsletter-img-2.png",
    ],
    subject: "Journal Title",
    content:
      "ARCN plays a pivotal role in the dissemination of cutting-edge research through its published journals. These journals serve as a platform for researchers from diverse fields and various institutes to share their findings, insights, and innovations with the global academic community.",
    id: 2,
  },
];

const News = () => {
  return (
    <section className="py-16 md:py-24 bg-[#FBFAFA]">
      <CustomContainer>
        <div className="flex flex-col gap-12">
          <h2 className="uppercase font-semibold text-[#171717] text-4xl text-center">
            Publications
          </h2>
          <div className="grid grid-cols-home-publication-res gap-5">
            {data.map((el, i) => (
              <div
                key={i}
                className="flex flex-col gap-3.5"
              >
                <h3 className="font-medium text-[#131517] text-xl sm:text-2xl ">
                  {el.type}
                </h3>
                <div className="grid grid-rows-[min_content_auto] gap-8">
                  <div className="flex gap-4 justify-start">
                    {el.imgs.map((img, i) => (
                      <div
                        className="relative  overflow-hidden"
                        key={i}
                      >
                        <Image
                          width={200}
                          height={350}
                          src={img}
                          alt="img"
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col items-start gap-3">
                    <h4 className="font-medium text-base sm:text-lg text-[#131517]">
                      {el.subject}
                    </h4>
                    <p className="text-[#464646] font-normal text-sm">
                      {el.content}
                    </p>
                    <div className="bg-[#0C513F0D] rounded-sm text-[#0C513F] font-medium text-[0.75rem] py-2 px-4 cursor-pointer">
                      Read More
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex flex-col gap-3.5">
              <h3 className="font-medium text-[#131517] text-xl sm:text-2xl">
                NEWS ALERTS
              </h3>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3 items-start rounded-xl py-5 px-7 border-[1.08px] border-[#E8E8E8] bg-white">
                  <h4 className="text-[#131517] text-[1.345rem] font-medium">
                    News Title
                  </h4>
                  <p className="font-normal text-sm text-[#464646]">
                    ARCN plays a pivotal role in the dissemination of
                    cutting-edge research through its published journals. These
                    journals serve as a platform for researchers from diverse
                    fields and various institutes to share their findings,
                    insights, and innovations with the global academic
                    community.
                  </p>
                  <div className="bg-[#0C513F0D] rounded-sm text-[#0C513F] font-medium text-[0.75rem] py-2 px-4 cursor-pointer">
                    Read More
                  </div>
                </div>
                <div className="flex flex-col gap-3 items-start rounded-xl py-5 px-7 border-[1.08px] border-[#E8E8E8] bg-white">
                  <h4 className="text-[#131517] text-[1.345rem] font-medium">
                    News Title
                  </h4>
                  <p className="font-normal text-sm text-[#464646]">
                    We are delighted to bring you the latest updates and
                    highlights from ARCN, where groundbreaking research meets
                    global collaboration. Our newsletters serve as a conduit for
                    sharing cutting-edge discoveries and insights that shape the
                    future of science, technology, and beyond.
                  </p>
                  <div className="bg-[#0C513F0D] rounded-sm text-[#0C513F] font-medium text-[0.75rem] py-2 px-4 cursor-pointer">
                    Read More
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default News;
