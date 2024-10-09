import { LuChevronRight } from "react-icons/lu";
import Image from "next/image";

const Partners = () => {
    return (
        <main className='mx-auto space-y-10 py-10 lg:py-20 px-4 lg:px-8'>
            <div className='text-center'>
                <h1 className='font-semibold text-2xl lg:text-4xl xl:text-5xl'>
                    Partner with us to digitise
                    <br /> agriculture in Africa
                </h1>
            </div>
            <div className='flex flex-col lg:flex-row gap-10 lg:px-20 justify-center items-center lg:gap-20+'>
                <div className='flex-shrink-0'>
                    <Image src="/Images/Homepage/farmer.png" width={436} height={427} alt="farmer" className='w-full max-w-md lg:max-w-lg' />
                </div>
                <div className='text-center lg:text-left'>
                    <p className='font-normal text-sm md:text-base lg:text-lg xl:text-xl'>
                        We are committed to working with equally ambitious
                        <br />
                        Research Institutes and stakeholders to bridge the sustainability gap in
                        Africa, ensuring smallholder farmers have everything they need to
                        <br />
                        succeed.
                    </p>
                    <div className='flex items-center justify-center lg:justify-start text-[#669933] font-medium text-base lg:text-lg xl:text-xl mt-6'>
                        <p>Learn more</p>
                        <LuChevronRight className='ml-2' />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Partners;
