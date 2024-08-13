import { LuChevronRight } from "react-icons/lu";
import Image from "next/image";

const Partners = () => {
    return (
        <main className='mx-auto space-y-10 py-20'>
            <div className='font-semibold place-content-center text-[50px] text-center '>
                <h1>Partner with us to digitise
                <br />agriculture in Africa</h1>
            </div>
            <div className='flex flex-col lg:flex-row gap-10 justify-center'>
                <div>
                    <Image src="/Images/Homepage/farmer.png" alt="farmer" width={436} height={427} />
                </div>
                <div className=' place-content-center'>
                    <div className="">
                        <p className='font-normal text-[17px]'>
                        We are committed to working with equally ambitious<br />
                        Research Institutes and stakeholders to bridge the sustainability gap in<br />
                        Africa, ensuring smallholder farmers have everything they need to<br />
                        succeed.
                        </p> 
                    </div>
                    <div className='flex pt-6 items-center text-[#669933] font-medium text-[16px]'>
                        <p>Learn more</p>
                        <LuChevronRight />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Partners;