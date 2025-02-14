"use client";
import { LuMapPin } from "react-icons/lu";
import Image from "next/image";
import { useClientEventsData } from "@/hooks/Events.hooks";
import Link from "next/link";

const Upcoming = () => {
  const { loading, events, error } = useClientEventsData();

  return (
    <main className="">
      <div className="pt-10 pb-28">
        <div className="py-10">
          <h1 className="font-semibold text-center font-montserrat text-3xl">UPCOMING EVENTS</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 font-semibold">
          <>
            {events?.length > 0 && (
              <>
                {events?.slice(0,6)?.map((event: any, index: number) => (
                  <div key={index} className="py-4 px-4 border-2 lg:w-9/12 gap-10 mx-auto rounded-xl flex flex-row ">
                    <div className="space-y-2">
                      <h1 className="font-normal text-sm text-[#1315175C]">
                        6:00 PM ·
                        <span className="font-normal text-[#D19D20]">
                          7:00 PM GMT+2
                        </span>
                      </h1>
                      <p className="font-medium text-base">{event?.subject}</p>
                      <p className="font-normal text-sm text-[#464646]">{event?.description}</p>
                      <div className="flex flex-col items-center lg:flex-row text-[#1315175C]">
                        <LuMapPin />
                        <p className="font-normal text-sm">
                          Live-streamed event via Zoom
                        </p>
                      </div>
                      <Link href={"/newsandevents/events"}>
                      <div className="pt-2">
                        <button
                          type="button"
                          className="rounded-3xl space-y-6 text-[#07A460] text-xs bg-[#07A46022] py-1.5 px-4 "
                        >
                          Register Here
                        </button>
                      </div>
                      </Link>
                    </div>

                    <div className="flex flex-col items-end">
                      <Image
                        // src={event?.bannerUrl || "/Images/Homepage/World.png"}
                        src={"/Images/Homepage/World.png"}
                        alt="Overlay"
                        width={201}
                        height={201}
                        className="rounded-[13.4px] h-36 w-44"
                      />
                    </div> 
                  </div>
                ))}
              </>
            )}
          </>
        </div>
      </div>
    </main>
  );
};

export default Upcoming;
