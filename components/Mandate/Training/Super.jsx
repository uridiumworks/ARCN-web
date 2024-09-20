"use client"
import { LuMapPin } from "react-icons/lu";
import Image from "next/image";
import { useClientSupervisionReportsData } from "@/hooks/SupervisionReports.hooks";


const Super = () => {
    const { loading, supervisionReports, error } = useClientSupervisionReportsData();


    return ( 
        <main>
            <div>
                <div className="place-content-center text-center space-y-7 py-10 font-montserrat">
                    <h1 className="font-bold text-4xl">Supervision Report</h1>
                    <p className="font-normal text-base">Lorem ipsum dolor sit amet consectetur. Elementum ullamcorper quis etiam euismod quisque <br />montes arcu risus. Magnis posuere tincidunt elit ultrices tortor. Sit semper cras sed duis tortor <br />tempor amet gravida. Rhoncus quis nisl etiam tortor.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 p-10 font-semibold text-[20px]  lg:text-[15px]">
                    {supervisionReports?.length > 0 && (
                        <>
                            {supervisionReports?.slice(0, 2)?.map((s, index) => (
                                 <div key={index} className='border p-4 rounded-xl flex flex-row-reverse gap-2'>
                                 <div className="">
                                     <Image src={s?.bannerUrl || "/Images/Homepage/World.png"} alt="overlay" width={180} height={201}  className="rounded-[13.4px]" />
                                 </div>
                                 <div className='space-y-4'>
                                 <p className="font-medium text-xl">{s?.title}</p>
                                 <p className="font-normal text-sm text-[#464646]">{s?.description}</p>
                                 <div className='flex gap-2 items-center text-[#1315175C]'>
                                     <LuMapPin />  
                                     <p className="font-normal text-[15.25px]">Live-streamed event via Zoom</p>
                                 </div>
         
                                 <div className="flex gap-3">
                                     <button type="button" className="border rounded-[4px] text-[#07A460] bg-[#E6E6E6] space-y-6 w-full lg:w-[119px] h-[40px]">
                                     Download
                                     </button>
         
                                     <button type="button" className="border rounded-[4px] text-[#FFFFFF] bg-[#30A85F] space-y-6 w-full lg:w-[119px] h-[40px]">
                                     View
                                     </button>
                                 </div>
                                 </div>
                             </div>
                            ))}
                        </>
                    )}
                </div>

                <div className="p-9 text-center">
                    <button type="button" className="border py-2 px-9 font-bold text-sm rounded-[4px] text-[#15271C] w-full md:w-[152px] h-[52px]">
                        VIEW ALL
                    </button>
                </div>

            </div>
        </main>
    );
}
 
export default Super;