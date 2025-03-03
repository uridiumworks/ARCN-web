"use client";
import { LuMapPin } from "react-icons/lu";
import Image from "next/image";
import { useClientEventsData } from "@/hooks/Events.hooks";
import CustomContainer from "../CustomContainer";
import { LocationOutlineIcon2 } from "@/assets/icons";

const data = [
  {
    title: "World Environment Day 2024",
    description: "Our land. Our future. We are #GenerationRestorations.",
    location: "Live-streamed event via Zoom",
  },
  {
    title: "World Environment Day 2024",
    description: "Our land. Our future. We are #GenerationRestorations.",
    location: "Live-streamed event via Zoom",
  },
];

const Events = () => {
  const { loading, events, error } = useClientEventsData();
  console.log(events);
  return (
    <section className="bg-white py-16 md:py-24">
      <CustomContainer>
        <div className="flex flex-col gap-12">
          <h2 className="text-center text-[#171717] font-semibold text-2xl sm:text-4xl sm:leading-[2.7rem]">
            UPCOMING EVENTS
          </h2>
          <div className="grid grid-cols-[100%] sm:grid-cols-2 gap-14">
            {events?.length > 0 &&
              events.slice(0, 4).map(
                // @ts-ignore
                (el, i) => (
                  <div
                    key={el?.eventId}
                    className="flex flex-col lg:flex-row justify-between  gap-10 bg-white border border-[#E8E8E8] rounded-xl px-4 py-2"
                  >
                    <div className="flex flex-col gap-1 lg:self-center items-start order-2 lg:order-1">
                      <div className="flex text-sm gap-1 font-medium">
                        <span className="text-[#1315175C]">6:00 PM ·</span>
                        <span className="text-[#D19D20]">7:00 PM GMT+2</span>
                      </div>
                      <div className="flex gap-1 flex-col">
                        <h3 className="text-lg leading-[1.5rem] text-[#131517] font-medium">
                          {el?.subject}
                        </h3>
                        <p className="font-normal leading-[1.5rem] text-[#464646] text-sm">
                          {el?.description}
                        </p>
                        <div className="flex items-center gap-2">
                          <LocationOutlineIcon2 className="scale-[.8]" />{" "}
                          <p className="text-[#1315175C] leading-[1.5rem] text-sm font-normal">
                            {el?.venue}
                          </p>
                        </div>
                      </div>
                      <div className="bg-[#07A46022] text-[#07A460] font-medium text-[0.75rem] rounded-full px-2 py-1.5 text-center cursor-pointer">
                        Register Here
                      </div>
                    </div>
                    <div className="relative w-[9.375rem] h-full  shrink-0  rounded-xl overflow-hidden order-1 lg:order-2 ">
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
        </div>
      </CustomContainer>
    </section>
  );
};

export default Events;
