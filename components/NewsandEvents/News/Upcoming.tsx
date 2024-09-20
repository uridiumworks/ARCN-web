"use client";
import { LuMapPin } from "react-icons/lu";
import Image from "next/image";
import { useClientEventsData } from "@/hooks/Events.hooks";

const Upcoming = () => {
    const { loading, events, error } = useClientEventsData();


    return ( 
        <main>
            <div className="font-montserrat py-10">
                <div className="py-5">
                    <h1 className='font-semibold text-3xl px-20'>UPCOMING EVENTS</h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 p-10 font-semibold text-[20px]  lg:text-[15px]">
                    <>
                    {events?.length > 0 && (
                        <>
                            {events?.slice(0, 4)?.map((event:any, index:number) => (
                               <div key={index} className='border p-4 rounded-xl flex flex-row-reverse gap-2'>
                               <div>
                                   <Image src={ event?.bannerUrl || "/Images/Homepage/World.png"} alt="Overlay" width={201} height={201} className="rounded-[13.4px]"  />
                               </div>
   
                               <div className='space-y-4'>
                                   <h1 className="font-normal text-[15.5px] text-[#1315175C]">6:00 PM · <span className="font-normal text-[15.5px] text-[#D19D20]">7:00 PM GMT+2</span></h1>
                                   <p className="font-medium text-xl">{event?.subject}</p>
                                   <p className="font-normal text-sm text-[#464646]">{event?.description}</p>
                                   <div className='flex flex-col items-center lg:flex-row text-[#1315175C]'>
                                       <LuMapPin />  
                                       <p className="font-normal text-[15.25px]">Live-streamed event via Zoom</p>
                                   </div>
                                   <button type="button" className="border rounded-3xl text-[#07A460] bg-[#07A46022] space-y-6 w-full lg:w-[119px] h-[40px]">
                                   Register Here
                                   </button>
                               </div>
                           </div>
                            ))}
                        </>
                    )}
                        {/* <div className='border p-4 rounded-xl flex flex-row-reverse gap-2'>
                            <div>
                                <Image src="/Images/Homepage/World.png" alt="Overlay" width={201} height={201} className="rounded-[13.4px]"  />
                            </div>

                            <div className='space-y-4'>
                                <h1 className="font-normal text-[15.5px] text-[#1315175C]">6:00 PM · <span className="font-normal text-[15.5px] text-[#D19D20]">7:00 PM GMT+2</span></h1>
                                <p className="font-medium text-xl">World Environment Day 2024</p>
                                <p className="font-normal text-sm text-[#464646]">Our land. Our future. We are #GenerationRestoration.</p>
                                <div className='flex flex-col items-center lg:flex-row text-[#1315175C]'>
                                    <LuMapPin />  
                                    <p className="font-normal text-[15.25px]">Live-streamed event via Zoom</p>
                                </div>
                                <button type="button" className="border rounded-3xl text-[#07A460] bg-[#07A46022] space-y-6 w-full lg:w-[119px] h-[40px]">
                                Register Here
                                </button>
                            </div>
                        </div>

                        <div className='border shadow-md p-4 rounded-xl flex flex-col-reverse lg:flex-row-reverse gap-2'>
                            <div>
                                <Image src="/Images/Homepage/World.png" alt="Overlay" width={201} height={201} className="rounded-[13.4px]"  />
                            </div>

                            <div className='space-y-4'>
                                <h1 className="font-normal text-[15.5px] text-[#1315175C]">6:00 PM · <span className="font-normal text-[15.5px] text-[#D19D20]">7:00 PM GMT+2</span></h1>
                                <p className="font-medium text-xl">World Environment Day 2024</p>
                                <p className="font-normal text-sm text-[#464646]">Our land. Our future. We are #GenerationRestoration.</p>
                                <div className='flex flex-col items-center lg:flex-row text-[#1315175C]'>
                                    <LuMapPin />  
                                    <p className="font-normal text-[15.25px]">Live-streamed event via Zoom</p>
                                </div>
                                <button type="button" className="border rounded-3xl text-[#07A460] bg-[#07A46022] space-y-6 w-full lg:w-[119px] h-[40px]">
                                Register Here
                                </button>
                            </div>
                        </div>

                        <div className='border shadow-md p-4 rounded-xl flex flex-col-reverse lg:flex-row-reverse gap-2'>
                            <div>
                                <Image src="/Images/Homepage/World.png" alt="Overlay" width={201} height={201} className="rounded-[13.4px]"  />
                            </div>

                            <div className='space-y-4'>
                                <h1 className="font-normal text-[15.5px] text-[#1315175C]">6:00 PM · <span className="font-normal text-[15.5px] text-[#D19D20]">7:00 PM GMT+2</span></h1>
                                <p className="font-medium text-xl">World Environment Day 2024</p>
                                <p className="font-normal text-sm text-[#464646]">Our land. Our future. We are #GenerationRestoration.</p>
                                <div className='flex flex-col items-center lg:flex-row text-[#1315175C]'>
                                    <LuMapPin />  
                                    <p className="font-normal text-[15.25px]">Live-streamed event via Zoom</p>
                                </div>
                                <button type="button" className="border rounded-3xl text-[#07A460] bg-[#07A46022] space-y-6 w-full lg:w-[119px] h-[40px]">
                                Register Here
                                </button>
                            </div>
                        </div> */}
                    </>
                </div>
            </div>
        </main>
    );
}
 
export default Upcoming;