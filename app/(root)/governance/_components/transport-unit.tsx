import React from 'react'
import { CircleCheck } from 'lucide-react'
import Image from 'next/image';
import Link from 'next/link';

const TransportUnit = () => {
    return (
        <section className='w-full h-full'>
            <div className='bg-[#FFC74E] lg:h-[360px] flex justify-between' >
                <div className='space-y-8 p-6 lg:py-24 lg:px-32'>
                    <h2 className='font-bold text-2xl lg:text-[32px]'>Transport Unit</h2>
                    <p className='text-base'>Lorem ipsum dolor sit amet consectetur. Dui non sapien fringilla tristique ac aliquam donec. Luctus.</p>
                </div>
                <div className='mt-36 '>
                    <img src="../Images/Vehicle_1.png" alt="" width={300} height={300} />
                </div>
            </div>
            <div>
                <Mandates />
                <AdministrationDepartment />
            </div>
        </section>
    )
}

export default TransportUnit



const Mandates = () => {
    return (
        <div className='lg:px-10 lg:py-14 lg:ml-24 p-4'>
            <h2 className='font-semibold lg:text-[32px] text-2xl'>Mandates</h2>
            <div className='font-normal lg:[32px] text-base py-6 '>
                <div className='flex items-center gap-2 justify-start' ><CircleCheck size={24} />
                    <p className='lg:py-4'>Responsible for the provision of transportation services for staff of the Council on official assignment nationwide using official vehicles;</p>
                </div>
                <div className='flex items-center gap-2 justify-start' ><CircleCheck size={24} />
                    <p className='py-4'>Responsible for the repairs and maintenance of all official vehicles in the Council;</p>
                </div>
                <div className='flex items-center gap-2 justify-start' ><CircleCheck size={24} />
                    <p className='py-4'>Prepare annual budget for the Council’s transport services;</p>
                </div>
                <div className='flex items-center gap-2 justify-start' ><CircleCheck size={24} />
                    <p className='py-4'>Ensure safety of vehicles and other transport equipment and other tools;</p>
                </div>
                <div className='flex items-center gap-2 justify-start' ><CircleCheck size={24} />
                    <p className='py-4'>Provide advice for the management on the needs for more vehicles and boarding of unserviceable vehicle.</p>
                </div>
            </div>

        </div>
    )
}



const AdministrationDepartment = () => {
    return (

        <div className=' mb-24 mt-10 md:grid-cols-2 lg:w-[1400px] pt-10 rounded-2xl bg-[#F6E8414D] mx-auto'>
            <div className="lg:py-10 p-6 lg:px-20">
                <div>
                    <h1 className="text-[32px] text-black text-bold mb-5 font-bold">Other Administration Department</h1>
                    <p className="text-base text-gray mt-4 py-3">Lorem ipsum dolor sit amet consectetur. Mi enim arcu vulputate ut at. Sagittis venenatis amet sagittis sit. In.</p>
                </div>
            </div>

            <div className='flex lg:flex-row flex-col lg:h-[288.71px] w-full p-8 gap-4 lg:space-x-7 lg:ml-14  '>
                <div className='bg-[#2E7636] p-8 border rounded-lg text-left lg:w-[375px]'>
                    <h1 className="font-bold text-xl text-white">Records & Registry Unit</h1>
                    <p className='pt-5 pb-5 text-xs text-white'>
                        Lorem ipsum dolor sit amet consectetur. Dui <br />
                        non sapien fringilla tristique ac aliquam donec. Luctus.
                    </p>
                    <div className='border border-none rounded-full bg-white w-[140px] mt-8 h-[35px] flex items-center justify-center'>
                        <Link href="/governance/records-unit" className='font-normal text-sm text-[#2E7636]'>Learn More</Link>
                    </div>
                </div>

                <div className='bg-black p-6 border rounded-lg text-left lg:w-[375px]'>
                    <h1 className="font-bold text-xl text-white mt-1">Maintenance Unit</h1>
                    <p className='pt-5 text-xs text-white mt-5 pb-2'>
                        Lorem ipsum dolor sit amet consectetur. Dui <br />
                        non sapien fringilla tristique ac aliquam donec. Luctus.
                    </p>
                    <div className='border border-none rounded-full bg-white w-[130px] mt-8 h-[35px] flex items-center justify-center'>
                        <Link href="/governance/maintenance-unit" className='font-normal text-sm text-black'>Learn More</Link>
                    </div>
                </div>

                <div className='bg-[#75CDFD] border p-6 rounded-lg text-left lg:w-[375px]'>
                    <h1 className="font-bold text-xl mt-1">Security Unit</h1>
                    <p className='pt-5 text-xs mt-4 pb-3'>
                        Lorem ipsum dolor sit amet consectetur. Dui <br />
                        non sapien fringilla tristique ac aliquam donec. Luctus.
                    </p>
                    <div className='border border-none rounded-full bg-white w-[140px] mt-8 h-[40px] flex items-center justify-center'>
                        <Link href="/governance/security-unit" className='font-normal text-sm text-[#75CDFD]'>Learn More</Link>
                    </div>
                </div>
            </div>
        </div>


    )
}





