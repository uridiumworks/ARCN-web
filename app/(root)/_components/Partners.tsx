import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

const Partners = () => {
    return (
        <main className='mx-auto'>
            <div className='font-semibold text-[50px] text-center '>
                <h1>Partner with us to digitise
                agriculture in Africa</h1>
            </div>
            <div className='flex flex-col lg:flex-row'>
                <div>
                    <Image src="/images/Homepage/farmer.png" width={436} height={427} alt="farmer" />
                </div>
                <div>
                    <p className='font-normal text-[17px]'>We are committed to working with equally ambitious
                    Research Institutes and stakeholders to bridge the sustainability gap in
                    Africa, ensuring smallholder farmers have everything they need to
                    succeed.
                    </p>
                    <div className='flex text-[#669933] font-medium text-[16px]'>
                        <p>Learn more</p>
                        <ChevronRight />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Partners;