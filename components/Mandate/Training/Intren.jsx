import Image from "next/image";
import { LuMapPin } from "react-icons/lu";
import { LuClock5 } from "react-icons/lu";



const Intern = () => {

    return ( 
        <main>
            <div className="space-y-6 font-montserrat">
                <div className="text-center space-y-6 py-10">
                    <h1 className="font-bold text-[40px]">Enterpreneurship</h1>
                    <p className="font-normal text-xl">Lorem ipsum dolor sit amet consectetur. Nunc pharetra a felis nibh. Id <br />ullamcorper nec leo porta. Enim nunc lacinia dui vehicula pellentesque morbi. <br />Magna nulla consequat.</p>
                </div>

                <div className="w-full py-9 flex flex-col gap-6 md:flex-row place-content-evenly">

                    <div className='space-y-8 px-3'>
                        <div className='border p-4 shadow-md rounded-xl flex flex-col-reverse lg:flex-row-reverse gap-2'>
                            <div>
                                <Image src="/Images/Homepage/World.png" alt="Overlay" width={201} height={201} className="rounded-[13.4px]"  />
                            </div>

                            <div className='space-y-4'>
                                <h1 className="font-normal text-[15.5px] text-[#1315175C]">6:00 PM · <span className="font-normal text-[15.5px] text-[#D19D20]">7:00 PM GMT+2</span></h1>
                                <p className="font-medium text-xl">E-Learning Programs</p>
                                <p className="font-normal text-sm text-[#464646]">Our land. Our future. We are #GenerationRestoration.</p>
                                <div className='flex gap-1 items-center text-[#1315175C]'>
                                    <LuMapPin />  
                                    <p className="font-normal text-[15.25px]">Live-streamed event via Zoom</p>
                                </div>

                                <div className='flex gap-1 items-center'>
                                    <LuClock5 />  
                                    <p className="font-normal text-[15.25px] text-[#1315175C] ">12th - 16th July, 2024</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className='border shadow-md p-4 rounded-xl flex flex-col-reverse lg:flex-row-reverse gap-2'>
                            <div> 
                                <Image src="/Images/Homepage/World.png" alt="Overlay" width={201} height={201} className="rounded-[13.4px]" />
                            </div>

                            <div className='space-y-4'>
                                <h1 className="font-normal text-[15.5px] text-[#1315175C]">6:00 PM · <span className="font-normal text-[15.5px] text-[#D19D20]">7:00 PM GMT+2</span></h1>
                                <p className="font-medium text-xl">E-Learning Programs</p>
                                <p className="font-normal text-sm text-[#464646]">Our land. Our future. We are #GenerationRestoration.</p>
                                <div className='flex gap-1 items-center  text-[#1315175C]'>
                                    <LuMapPin />  
                                    <p className="font-normal text-[15.25px]">Live-streamed event via Zoom</p>
                                </div>

                                <div className='flex gap-1 items-center'>
                                    <LuClock5 />  
                                    <p className="font-normal text-[15.25px] text-[#1315175C] ">12th - 16th July, 2024</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='space-y-8 px-3'>

                        <div className='border shadow-md p-4 rounded-xl flex flex-col-reverse lg:flex-row-reverse gap-2'>
                            <div>
                                <Image src="/Images/Homepage/World.png" alt="Overlay" width={201} height={201} className="rounded-[13.4px]"  />
                            </div>

                            <div className='space-y-4'>
                                <h1 className="font-normal text-[15.5px] text-[#1315175C]">6:00 PM · <span className="font-normal text-[15.5px] text-[#D19D20]">7:00 PM GMT+2</span></h1>
                                <p className="font-medium text-xl">E-Learning Programs</p>
                                <p className="font-normal text-sm text-[#464646]">Our land. Our future. We are #GenerationRestoration.</p>
                                <div className='flex gap-1 items-center text-[#1315175C]'>
                                    <LuMapPin />  
                                    <p className="font-normal text-[15.25px]">Live-streamed event via Zoom</p>
                                </div>

                                <div className='flex gap-1 items-center'>
                                    <LuClock5 />  
                                    <p className="font-normal text-[15.25px] text-[#1315175C] ">12th - 16th July, 2024</p>
                                </div>
                            </div>
                        </div>

                        <div className='border shadow-md p-4 rounded-xl flex flex-col-reverse lg:flex-row-reverse gap-2'>
                            <div>
                                <Image src="/Images/Homepage/World.png" alt="Overlay" width={201} height={201} className="rounded-[13.4px]"  />
                            </div>

                            <div className='space-y-4'>
                                <h1 className="font-normal text-[15.5px] text-[#1315175C]">6:00 PM · <span className="font-normal text-[15.5px] text-[#D19D20]">7:00 PM GMT+2</span></h1>
                                <p className="font-medium text-xl">E-Learning Programs</p>
                                <p className="font-normal text-sm text-[#464646]">Our land. Our future. We are #GenerationRestoration.</p>
                                <div className='flex items-center gap-1 text-[#1315175C]'>
                                    <LuMapPin />  
                                    <p className="font-normal text-[15.25px]">Live-streamed event via Zoom</p>
                                </div>

                                <div className='flex gap-1 items-center '>
                                    <LuClock5 />  
                                    <p className="font-normal text-[15.25px] text-[#1315175C] ">12th - 16th July, 2024</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center place-content-center">
                    <button type="button" className="border font-bold rounded-[4px] text-black space-y-6 w-[110px] md:w-[119px] h-[40px]">
                        VIEW ALL
                    </button>
                </div>

            </div>
        </main>
    );
}
 
export default Intern;