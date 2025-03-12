"use client";
import { LuMapPin } from "react-icons/lu";
import Image from "next/image";
import { useClientEventsData } from "@/hooks/Events.hooks";
import Link from "next/link";
import CustomContainer from "../../CustomContainer";
import { LocationOutlineIcon2 } from "@/assets/icons";


const Upcoming = () => {
  const { loading, events, error } = useClientEventsData();
  console.log(events);
  return (
    <section className="bg-white py-16 md:py-24">
      <CustomContainer>
        <div className="flex flex-col gap-12">
          <h2 className="text-center text-[#171717] font-semibold text-3xl sm:text-4xl">Upcoming Events </h2>

          <div className="grid grid-cols-[100%] sm:grid-cols-2 gap-14">
            {events?.length > 0 &&
              events.slice(0, 6).map(
                // @ts-ignore
                (el, i) => (
                  <div
                    key={el?.eventId}
                    className="flex flex-col lg:flex-row justify-between lg:items-center gap-6 bg-white border border-[#E8E8E8] rounded-xl p-2"
                  >
                    <div className="flex flex-col gap-1 pl-3 items-start">
                      <div className="flex gap-1 text-sm font-medium">
                        <span className="text-[#1315175C]">6:00 PM ·</span>
                        <span className="text-[#D19D20]">7:00 PM GMT+2</span>
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <h3 className="text-lg text-[#131517] font-medium">
                          {el?.subject}
                        </h3>
                        <p className="font-normal text-[#464646] text-sm">
                          {el?.description}
                        </p>
                        <div className="flex items-center gap-2">
                          <LocationOutlineIcon2 />{" "}
                          <p className="text-[#1315175C] text-sm font-normal">
                            {el?.venue}
                          </p>
                        </div>
                      </div>
                      <Link href={"/news-and-events/events"}>
                        <div className="bg-[#07A46022] text-[#07A460] font-medium text-[0.75rem] rounded-full p-1 text-center cursor-pointer">
                          Register Here
                        </div>
                      </Link>
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
                )
              )}
          </div>
        </div>
      </CustomContainer>
    </section>
  );

};

export default Upcoming;
