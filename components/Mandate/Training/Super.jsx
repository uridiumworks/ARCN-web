"use client";
import Image from "next/image";
import { useClientSupervisionReportsData } from "@/hooks/SupervisionReports.hooks";
import CustomContainer from "@/components/CustomContainer";
import Link from "next/link";
import { GrayLocationPointerIcon } from "@/assets/icons";
const data = [
  {
    title: "ARCN Supervision of Training Report 2023",
    description: "Our land. Our future. We are #GenerationRestorations.",
    location: "Live-streamed event via Zoom",
    slug: "arcn-research-coordination-report",
  },
  {
    title: "ARCN Supervision of Training Report 2023",
    description: "Our land. Our future. We are #GenerationRestorations.",
    location: "Live-streamed event via Zoom",
    slug: "arcn-research-coordination-report-2",
  },
];

const Super = () => {
  const { loading, supervisionReports, error } =
    useClientSupervisionReportsData();
  console.log(supervisionReports);

  return (
    <section className="py-8 md:py-16">
      <CustomContainer>
        <div className="flex flex-col gap-10 sm:gap-14">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col text-center gap-8">
              <h2 className="font-bold  text-3xl sm:text-4xl sm:leading-[2.25rem]">
                Supervision Report
              </h2>
              <p className="font-normal text-sm leading-[1.5rem]">
                {/* <span className="text-[15.88px] font-medium text-[#2D7636]">
                    ARCN Research Institutes
                  </span>{" "} */}
                Lorem ipsum dolor sit amet consectetur. Elementum ullamcorper
                quis etiam euismod quisque montes arcu risus. <br className="hidden md:block" /> Magnis posuere
                tincidunt elit ultrices tortor. Sit semper cras sed duis tortor
                tempor amet gravida. Rhoncus quis nisl etiam tortor.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-[100%] sm:grid-cols-2 gap-14">
            {data.map((el, i) => (
              <div
                key={i}
                className="flex flex-col lg:flex-row justify-between lg:items-center gap-8 lg:gap-10 bg-white border border-[#E8E8E8] rounded-xl py-3 px-3.5 lg:px-2.5 lg:py-1.5"
              >
                <div className="flex flex-col gap-1 items-start order-2 lg:order-1">
                  <div className="flex flex-col">
                    <h3 className="text-base leading-[1.5rem] text-[#131517] font-medium">
                      {el.title}
                    </h3>
                    <p className="font-normal leading-[1.5rem] text-[#464646] text-xs">
                      {el.description}
                    </p>
                    <div className="flex gap-3 items-center">
                      <div>
                        <GrayLocationPointerIcon />
                      </div>
                      <p className="font-normal text-[#1315175C] text-xs leading-[1.5rem]">
                        {el.location}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Link
                      href={`/mandate/training/supervision-report/${el.slug}/report`}
                      className="bg-[#30A85F] text-white font-sans rounded-sm px-7 py-2.5 leading-[0.875rem]"
                    >
                      View
                    </Link>
                  </div>
                </div>
                <div className="relative w-full lg:w-[9.375rem] h-[9.375rem] lg:h-full shrink-0  rounded-xl overflow-hidden order-1 lg:order-2 ">
                  <Image
                    src="/Images/Homepage/event-imgholder.png"
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

          <Link
            href="/mandate/training/supervision-report"
            className="self-center py-2.5 px-8 leading-[2rem] bg-transparent border border-[#E6E6E6] font-bold text-[#15271C] font-sans capitalize text-sm"
          >
            VIEW ALL
          </Link>
        </div>
      </CustomContainer>
    </section>
  );
};

export default Super;
