"use client";
import { LuMapPin } from "react-icons/lu";
import Image from "next/image";
import { useClientEventsData } from "@/hooks/Events.hooks";
import CustomContainer from "../CustomContainer";
import { LocationOutlineIcon2 } from "@/assets/icons";

// const EventsOld = () => {
//   const { loading, events, error } = useClientEventsData();

//   return (
//     <main className="w-full p-4 md:p-8 font-montserrat">
//       <h1 className="font-semibold text-2xl md:text-3xl text-center lg:text-left">
//         UPCOMING EVENTS
//       </h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-20 p-10 font-semibold text-[20px]  lg:text-[15px]">
//         {events?.length > 0 && (
//           <>
//             {events?.slice(0, 4)?.map((event: any, index: number) => (
//               <div
//                 key={index}
//                 className="border p-4 rounded-xl flex flex-col-reverse md:flex-row-reverse gap-2"
//               >
//                 <div>
//                   <Image
//                     src={event?.bannerUrl || "/Images/Homepage/World.png"}
//                     alt="Overlay"
//                     width={201}
//                     height={201}
//                     className="rounded-[13.4px]"
//                   />
//                 </div>
//                 <div className="space-y-4 text-center lg:text-left">
//                   <h1 className="font-normal text-[15.5px] text-[#1315175C]">
//                     6:00 PM ·{" "}
//                     <span className="font-normal text-[15.5px] text-[#D19D20]">
//                       7:00 PM GMT+2
//                     </span>
//                   </h1>
//                   <p className="font-medium text-xl">
//                   {event?.subject}
//                   </p>
//                   <p className="font-normal text-sm text-[#464646]">
//                   {event?.description}
//                   </p>
//                   <div className="flex flex-col lg:flex-row items-center lg:items-start text-[#1315175C] gap-1">
//                     <LuMapPin />
//                     <p className="font-normal text-[15.25px]">
//                       Live-streamed event via Zoom
//                     </p>
//                   </div>
//                   <button
//                     type="button"
//                     className="border rounded-3xl text-[#07A460] bg-[#07A46022] w-full lg:w-[119px] h-[40px]"
//                   >
//                     Register Here
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </>
//         )}
//         {/*  */}
//       </div>
//     </main>
//   );
// };

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
  return (
    <section className="bg-white py-16 md:py-24">
      <CustomContainer>
        <div className="flex flex-col gap-12">
          <h2 className="text-center text-[#171717] font-semibold text-2xl sm:text-4xl">
            UPCOMING EVENTS
          </h2>
          <div className="grid grid-cols-[100%] sm:grid-cols-2 gap-14">
            {data.map((el, i) => (
              <div
                key={i}
                className="flex flex-col lg:flex-row justify-between lg:items-center gap-10 bg-white border border-[#E8E8E8] rounded-xl p-4"
              >
                <div className="flex flex-col gap-2.5 items-start order-2 lg:order-1">
                  <div className="flex gap-1 text-sm font-medium">
                    <span className="text-[#1315175C]">6:00 PM ·</span>
                    <span className="text-[#D19D20]">7:00 PM GMT+2</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl text-[#131517] font-medium">
                      {el.title}
                    </h3>
                    <p className="font-normal text-[#464646] text-sm">
                      {el.description}
                    </p>
                    <div className="flex items-center gap-2">
                      <LocationOutlineIcon2 />{" "}
                      <p className="text-[#1315175C] text-sm font-normal">
                        {el.location}
                      </p>
                    </div>
                  </div>
                  <div className="bg-[#07A46022] text-[#07A460] font-medium text-[0.75rem] rounded-full p-2.5 text-center cursor-pointer">
                    Register Here
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
        </div>
      </CustomContainer>
    </section>
  );
};

export default Events;
