import { LuMapPin } from "react-icons/lu";
import Image from "next/image";

const Events = () => {
    return (
        <main className="w-full p-4 md:p-8">
            <h1 className='font-semibold text-2xl md:text-3xl px-4 md:px-20 text-center lg:text-left'>UPCOMING EVENTS</h1>
            
            <div className='w-full py-6 md:py-9 flex flex-col gap-8 lg:flex-row lg:place-content-evenly'>
                <div className='space-y-8'>
                    <div className='border p-4 rounded-xl flex flex-col-reverse md:flex-row-reverse gap-2'>
                        <div>
                            <Image src="/Images/Homepage/World.png" alt="Overlay" width={201} height={201} className="rounded-[13.4px]" />
                        </div>
                        <div className='space-y-4 text-center lg:text-left'>
                            <h1 className="font-normal text-[15.5px] text-[#1315175C]">6:00 PM · <span className="font-normal text-[15.5px] text-[#D19D20]">7:00 PM GMT+2</span></h1>
                            <p className="font-medium text-xl">World Environment Day 2024</p>
                            <p className="font-normal text-sm text-[#464646]">Our land. Our future. We are #GenerationRestoration.</p>
                            <div className='flex flex-col lg:flex-row items-center lg:items-start text-[#1315175C] gap-1'>
                                <LuMapPin />  
                                <p className="font-normal text-[15.25px]">Live-streamed event via Zoom</p>
                            </div>
                            <button type="button" className="border rounded-3xl text-[#07A460] bg-[#07A46022] w-full lg:w-[119px] h-[40px]">
                                Register Here
                            </button>
                        </div>
                    </div>

                    <div className='border p-4 rounded-xl flex flex-col-reverse md:flex-row-reverse gap-2'>
                        <div>
                            <Image src="/Images/Homepage/World.png" alt="Overlay" width={201} height={201} className="rounded-[13.4px]" />
                        </div>
                        <div className='space-y-4 text-center lg:text-left'>
                            <h1 className="font-normal text-[15.5px] text-[#1315175C]">6:00 PM · <span className="font-normal text-[15.5px] text-[#D19D20]">7:00 PM GMT+2</span></h1>
                            <p className="font-medium text-xl">World Environment Day 2024</p>
                            <p className="font-normal text-sm text-[#464646]">Our land. Our future. We are #GenerationRestoration.</p>
                            <div className='flex flex-col lg:flex-row items-center lg:items-start text-[#1315175C] gap-1'>
                                <LuMapPin />  
                                <p className="font-normal text-[15.25px]">Live-streamed event via Zoom</p>
                            </div>
                            <button type="button" className="border rounded-3xl text-[#07A460] bg-[#07A46022] w-full lg:w-[119px] h-[40px]">
                                Register Here
                            </button>
                        </div>
                    </div>
                </div>

                <div className="space-y-8">
                    <div className='border p-4 rounded-xl flex flex-col-reverse md:flex-row-reverse gap-2'>
                        <div>
                            <Image src="/Images/Homepage/World.png" alt="Overlay" width={201} height={201} className="rounded-[13.4px]" />
                        </div>
                        <div className='space-y-4 text-center lg:text-left'>
                            <h1 className="font-normal text-[15.5px] text-[#1315175C]">6:00 PM · <span className="font-normal text-[15.5px] text-[#D19D20]">7:00 PM GMT+2</span></h1>
                            <p className="font-medium text-xl">World Environment Day 2024</p>
                            <p className="font-normal text-sm text-[#464646]">Our land. Our future. We are #GenerationRestoration.</p>
                            <div className='flex flex-col lg:flex-row items-center lg:items-start text-[#1315175C] gap-1'>
                                <LuMapPin />  
                                <p className="font-normal text-[15.25px]">Live-streamed event via Zoom</p>
                            </div>
                            <button type="button" className="border rounded-3xl text-[#07A460] bg-[#07A46022] w-full lg:w-[119px] h-[40px]">
                                Register Here
                            </button>
                        </div>
                    </div>

                    <div className='border p-4 rounded-xl flex flex-col-reverse md:flex-row-reverse gap-2 '>
                        <div className="rounded-2xl">
                            <Image src="/Images/Homepage/World.png" alt="Overlay" width={201} height={201} className="rounded-[13.4px]"  />
                        </div>
                        <div className='space-y-4 text-center lg:text-left'>
                            <h1 className="font-normal text-[15.5px] text-[#1315175C]">6:00 PM · <span className="font-normal text-[15.5px] text-[#D19D20]">7:00 PM GMT+2</span></h1>
                            <p className="font-medium text-xl">World Environment Day 2024</p>
                            <p className="font-normal text-sm text-[#464646]">Our land. Our future. We are #GenerationRestoration.</p>
                            <div className='flex flex-col lg:flex-row items-center lg:items-start text-[#1315175C] gap-1'>
                                <LuMapPin />  
                                <p className="font-normal text-[15.25px]">Live-streamed event via Zoom</p>
                            </div>
                            <button type="button" className="border rounded-3xl text-[#07A460] bg-[#07A46022] w-full lg:w-[119px] h-[40px]">
                                Register Here
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Events;
