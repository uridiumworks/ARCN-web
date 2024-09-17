"use client";
import { LuMapPin } from "react-icons/lu";
import Image from "next/image";
import { useClientEventsData } from "@/hooks/Events.hooks";

const Events = () => {
  const { loading, events, error } = useClientEventsData();

  return (
    <main className="w-full p-4 md:p-8 font-montserrat">
      <h1 className="font-semibold text-2xl md:text-3xl text-center lg:text-left">
        UPCOMING EVENTS
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 p-10 font-semibold text-[20px]  lg:text-[15px]">
        {events?.length > 0 && (
          <>
            {events?.slice(0, 4)?.map((event: any, index: number) => (
              <div
                key={index}
                className="border p-4 rounded-xl flex flex-col-reverse md:flex-row-reverse gap-2"
              >
                <div>
                  <Image
                    src={event?.bannerUrl || "/Images/Homepage/World.png"}
                    alt="Overlay"
                    width={201}
                    height={201}
                    className="rounded-[13.4px]"
                  />
                </div>
                <div className="space-y-4 text-center lg:text-left">
                  <h1 className="font-normal text-[15.5px] text-[#1315175C]">
                    6:00 PM ·{" "}
                    <span className="font-normal text-[15.5px] text-[#D19D20]">
                      7:00 PM GMT+2
                    </span>
                  </h1>
                  <p className="font-medium text-xl">
                  {event?.subject}
                  </p>
                  <p className="font-normal text-sm text-[#464646]">
                  {event?.description}
                  </p>
                  <div className="flex flex-col lg:flex-row items-center lg:items-start text-[#1315175C] gap-1">
                    <LuMapPin />
                    <p className="font-normal text-[15.25px]">
                      Live-streamed event via Zoom
                    </p>
                  </div>
                  <button
                    type="button"
                    className="border rounded-3xl text-[#07A460] bg-[#07A46022] w-full lg:w-[119px] h-[40px]"
                  >
                    Register Here
                  </button>
                </div>
              </div>
            ))}
          </>
        )}
        {/*  */}
      </div>
    </main>
  );
};

export default Events;
