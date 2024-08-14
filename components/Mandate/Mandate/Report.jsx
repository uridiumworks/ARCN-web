import { LuMapPin } from "react-icons/lu";
import Image from "next/image";

const Report = () => {
  return (
    <main className="w-full">
      <div>
        <div className="text-center place-content-center py-10 space-y-4">
          <h1 className="font-bold text-4xl">Coordination Report</h1>
          <p className="font-normal text-base">
            Lorem ipsum dolor sit amet consectetur. Elementum ullamcorper quis
            etiam euismod quisque <br />
            montes arcu risus. Magnis posuere tincidunt elit ultrices tortor.
            Sit semper cras sed duis tortor <br />
            tempor amet gravida. Rhoncus quis nisl etiam tortor.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-evenly ">
          <div className='border p-4 rounded-xl flex flex-row-reverse gap-2'>
            <div className="">
              <Image src="/Images/Homepage/World.png" alt="overlay" width={180} height={180} className="rounded-[13.4px]" />
            </div>
            <div className='space-y-4'>
              <p className="font-medium text-xl">ARCN Research Coordination Report 2023</p>
              <p className="font-normal text-sm text-[#464646]">Our land. Our future. We are #GenerationRestoration.</p>
              <div className='flex flex-col items-center lg:flex-row text-[#1315175C]'>
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

          <div className='border p-4 rounded-xl flex flex-row-reverse gap-2'>
            <div>
              <Image src="/Images/Homepage/World.png" alt="overlay" width={180} height={180} className="rounded-[13.4px]"  />
            </div>
            <div className='space-y-4'>
              <p className="font-medium text-xl">ARCN Research Coordination Report 2023</p>
              <p className="font-normal text-sm text-[#464646]">Our land. Our future. We are #GenerationRestoration.</p>
              <div className='flex flex-col items-center lg:flex-row text-[#1315175C]'>
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
        </div>

        <div className="p-9 text-center">
          <button type="button" className="border py-2 px-9 font-bold text-sm rounded-[4px] text-[#15271C] w-full md:w-[152px] h-[52px]">
            VIEW ALL
          </button>
        </div>
      </div>
    </main>
  );
};

export default Report;