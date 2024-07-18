import { LuChevronRight } from "react-icons/lu";
import farmer from "../../public/Images/Homepage/farmer.png";
import Image from "next/image";

const Partners = () => {
    return (
        <main className='mx-auto space-y-6'>
            <div className='font-semibold place-content-center text-[50px] text-center '>
                <h1>Partner with us to digitise
                <br />agriculture in Africa</h1>
            </div>
            <div className='flex flex-col lg:flex-row gap-4 justify-center'>
                <div>
                    <Image src={farmer} alt="farmer" />
                </div>
                <div className=''>
                    <div className="border">
                        <p className='font-normal text-[17px]'>
                        We are committed to working with equally ambitious<br />
                        Research Institutes and stakeholders to bridge the sustainability gap in
                        Africa, ensuring smallholder farmers have everything they need to
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