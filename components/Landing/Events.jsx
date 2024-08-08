import { LuMapPin } from "react-icons/lu";
import Image from "next/image";

const Events = () => {
    return (
        <main className="w-full p-8">
            <h1 className='font-semibold text-3xl px-20'>UPCOMING EVENTS</h1>
            
            <div className='w-full py-9 flex flex-col lg:flex-row place-content-evenly'>
                <div className='space-y-8'>
                    <div className='border p-4 rounded-xl flex flex-row-reverse gap-2'>
                        <div>
                            <Image src="/Images/Homepage/World.png" alt="Overlay" width={201} className="rounded-[13.4px]" />
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

                    <div className='border p-4 rounded-xl flex flex-row-reverse gap-2'>
                        <div>
                            <Image src="/Images/Homepage/World.png" alt="Overlay" width={201} className="rounded-[13.4px]" />
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
                </div>

                <div className="space-y-8">
                    <div className='border p-4 rounded-xl flex flex-row-reverse gap-2'>
                        <div>
                            <Image src="/Images/Homepage/World.png" alt="Overlay" width={201} className="rounded-[13.4px]" />
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

                    <div className='border p-4 rounded-xl flex flex-row-reverse gap-2 '>
                        <div className="rounded-2xl">
                            <Image src="/Images/Homepage/World.png" alt="Overlay" width={201} className="rounded-[13.4px]"  />
                        </div>
                        <div className='space-y-4'>
                            <h1 className="font-normal text-[15.5px] text-[#1315175C]">6:00 PM · <span className="font-normal text-[15.5px] text-[#D19D20]">7:00 PM GMT+2</span></h1>
                            <p className="font-medium text-xl">World Environment Day 2024</p>
                            <p className="font-normal text-sm text-[#464646]">Our land. Our future. We are #GenerationRestoration.</p>
                            <div className='flex flex-col lg:flex-row items-center text-[#1315175C]'>
                                <LuMapPin />  
                                <p className="font-normal text-[15.25px]">Live-streamed event via Zoom</p>
                            </div>
                            <button type="button" className="border rounded-3xl text-[#07A460] bg-[#07A46022] space-y-6 w-full lg:w-[119px] h-[40px]">
                            Register Here
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Events;