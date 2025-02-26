"use client";
import { LuMapPin } from "react-icons/lu";
import Image from "next/image";
import { useClientReportsData } from "@/hooks/Reports.hooks";
import CustomContainer from "@/components/CustomContainer";
import Link from "next/link";

// const ReportOld = () => {
//   const { loading, reports, error } = useClientReportsData();

//   return (
//     <main className="w-full font-montserrat">
//       <div>
//         <div className="text-center place-content-center py-10 space-y-4">
//           <h1 className="font-bold text-4xl">Coordination Report</h1>
//           <p className="font-normal text-base">
//             Lorem ipsum dolor sit amet consectetur. Elementum ullamcorper quis
//             etiam euismod quisque <br />
//             montes arcu risus. Magnis posuere tincidunt elit ultrices tortor.
//             Sit semper cras sed duis tortor <br />
//             tempor amet gravida. Rhoncus quis nisl etiam tortor.
//           </p>
//         </div>

//         <div className="flex flex-col md:flex-row gap-4 justify-evenly ">
//           {reports?.length > 0 && (
//             <>
//               {reports?.slice(0, 2)?.map((r: any, index: number) => (
//                 <div
//                   key={index}
//                   className="border p-4 rounded-xl flex flex-row-reverse gap-2"
//                 >
//                   <div className="">
//                     <Image
//                       src={ r.bannerUrl || "/Images/Homepage/World.png"}
//                       alt="overlay"
//                       width={180}
//                       height={201}
//                       className="rounded-[13.4px]"
//                     />
//                   </div>

//                   <div className="space-y-4">
//                     <p className="font-medium text-xl">
//                       {r.title}
//                     </p>
//                     <p className="font-normal text-sm text-[#464646]">
//                     {r.description}
//                     </p>
//                     <div className="flex flex-col items-center lg:flex-row text-[#1315175C]">
//                       <LuMapPin />
//                       <p className="font-normal text-[15.25px]">
//                         Live-streamed event via Zoom
//                       </p>
//                     </div>

//                     <div className="flex gap-3">
//                       <button
//                         type="button"
//                         className="border rounded-[4px] text-[#07A460] bg-[#E6E6E6] space-y-6 w-full lg:w-[119px] h-[40px]"
//                       >
//                         Download
//                       </button>

//                       <button
//                         type="button"
//                         className="border rounded-[4px] text-[#FFFFFF] bg-[#30A85F] space-y-6 w-full lg:w-[119px] h-[40px]"
//                       >
//                         View
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </>
//           )}
//         </div>

//         <div className="p-9 text-center">
//           <button
//             type="button"
//             className="border py-2 px-9 font-bold text-sm rounded-[4px] text-[#15271C] w-full md:w-[152px] h-[52px]"
//           >
//             VIEW ALL
//           </button>
//         </div>
//       </div>
//     </main>
//   );
// };
const data = [
  {
    title: "ARCN Research Coordination Report 2023",
    description: "Our land. Our future. We are #GenerationRestorations.",
    slug: "arcn-research-coordination-report",
  },
  {
    title: "ARCN Research Coordination Report 2023",
    description: "Our land. Our future. We are #GenerationRestorations.",
    slug: "arcn-research-coordination-report-2",
  },
];

const Report = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <CustomContainer>
        <div className="flex flex-col gap-12">
          <div className="flex flex-col text-center gap-2.5">
            <h2 className="text-center text-[#171717] font-bold text-2xl sm:text-4xl">
              UPCOMING EVENTS
            </h2>
            <p className="text-black font-normal text-sm sm:text-base">
              Lorem ipsum dolor sit amet consectetur. Elementum ullamcorper quis
              etiam euismod quisque montes arcu risus. Magnis posuere tincidunt
              elit ultrices tortor. Sit semper cras sed duis tortor tempor amet
              gravida. Rhoncus quis nisl etiam tortor.
            </p>
          </div>

          <div className="grid grid-cols-[100%] sm:grid-cols-2 gap-14">
            {data.map((el, i) => (
              <div
                key={i}
                className="flex flex-col lg:flex-row justify-between lg:items-center gap-10 bg-white border border-[#E8E8E8] rounded-xl p-5"
              >
                <div className="flex flex-col gap-6 items-start order-2 lg:order-1">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl text-[#131517] font-medium">
                      {el.title}
                    </h3>
                    <p className="font-normal text-[#464646] text-sm">
                      {el.description}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button className="bg-transparent border border-[#E6E6E6] font-sans font-medium text-sm text-[#07A460] rounded-sm px-7 py-2.5">
                      Download
                    </button>
                    <Link
                      href={`/mandate/Research/coordination-report/${el.slug}/report`}
                      className="bg-[#30A85F] text-white font-sans rounded-sm px-7 py-2.5"
                    >
                      View
                    </Link>
                  </div>
                </div>
                <div className="relative w-[9.375rem] h-[9.375rem] shrink-0  rounded-xl overflow-hidden order-1 lg:order-2 ">
                  <Image
                    src="/Images/Homepage/event-imgholder.png"
                    alt="event-imgholder"
                    className="object-cover"
                    width={150}
                    height={150}
                    priority
                  />
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/mandate/Research/coordination-report"
            className="self-center py-3 px-8 bg-transparent border border-[#E6E6E6] font-bold text-[#15271C] font-sans capitalize text-sm"
          >
            VIEW ALL
          </Link>
        </div>
      </CustomContainer>
    </section>
  );
};

export default Report;
