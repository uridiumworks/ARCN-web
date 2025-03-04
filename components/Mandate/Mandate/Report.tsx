"use client";
import { LuMapPin } from "react-icons/lu";
import Image from "next/image";
import { useClientReportsData } from "@/hooks/Reports.hooks";
import CustomContainer from "@/components/CustomContainer";
import Link from "next/link";

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

const Report = () => {
  const { loading, reports, error } = useClientReportsData();
  console.log(reports);

  return (
    <section className="bg-white py-12 md:py-20">
      <CustomContainer>
        <div className="flex flex-col gap-12">
          <div className="flex flex-col text-center gap-2.5">
            <h2 className="text-center text-[#171717] font-bold text-3xl sm:text-4xl sm:leading-[2.7rem]">
              Coordination Report
            </h2>
            <p className="text-black font-normal text-sm sm:text-base sm:leading-[1.75rem]">
              Lorem ipsum dolor sit amet consectetur. Elementum ullamcorper quis
              etiam euismod quisque <br /> montes arcu risus. Magnis posuere
              tincidunt elit ultrices tortor. Sit semper cras sed duis tortor{" "}
              <br /> tempor amet gravida. Rhoncus quis nisl etiam tortor.
            </p>
          </div>

          <div className="grid grid-cols-[100%] sm:grid-cols-2 gap-14">
            {reports?.length > 0 &&
              reports?.slice(0, 4)?.map(
                // @ts-ignore
                (el, i) => (
                  <div
                    key={el?.reportsId}
                    className="flex flex-col lg:flex-row lg:justify-between  gap-10 bg-white border border-[#E8E8E8] rounded-xl px-4 py-2"
                  >
                    <div className="flex flex-col gap-5 lg:self-center items-start order-2 lg:order-1">
                      <div className="flex flex-col gap-2">
                        <h3 className="text-xl leading-[1.5rem] text-[#131517] font-medium">
                          {el.title}
                        </h3>
                        {el.description && (
                          <p className="font-normal text-[#464646] text-sm leading-[1.5rem]">
                            {el.description}
                          </p>
                        )}
                      </div>
                      <div className="flex gap-2">
                        {/* <button className="bg-transparent border border-[#E6E6E6] font-sans font-medium text-sm text-[#07A460] rounded-sm px-7 py-2.5">
                      Download
                    </button> */}
                        <Link
                          href={`/mandate/Research/coordination-report/${el.reportsId}/report`}
                          className="bg-[#30A85F] text-white font-sans rounded-sm px-8 py-4 leading-[0.875rem] text-sm"
                        >
                          View
                        </Link>
                      </div>
                    </div>
                    <div className="relative w-[9.375rem] h-full shrink-0  rounded-xl overflow-hidden order-1 lg:order-2 ">
                      <Image
                        src="/Images/Homepage/event-imgholder.png"
                        alt="event-imgholder"
                        className="object-cover h-full"
                        width={150}
                        height={150}
                        priority
                      />
                    </div>
                  </div>
                )
              )}
          </div>

          <Link
            href="/mandate/Research/coordination-report"
            className="self-center py-2 px-10 bg-transparent border border-[#E6E6E6] font-bold text-[#15271C] font-sans capitalize text-sm leading-[2rem]"
          >
            VIEW ALL
          </Link>
        </div>
      </CustomContainer>
    </section>
  );
};

export default Report;
