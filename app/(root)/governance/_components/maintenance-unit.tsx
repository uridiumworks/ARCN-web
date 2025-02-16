import React from 'react'
import { CircleCheck } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const MaintenanceUnit = () => {
    return (
        <section className='w-full h-full'>
            <div className='bg-black lg:h-[390px] text-white flex justify-between' >
                <div className='space-y-8 p-6 lg:py-24 lg:px-32'>
                    <h2 className='font-bold text-2xl lg:text-[32px]'>Maintenace Unit</h2>
                    <p  className='text-base'> Lorem ipsum dolor sit amet consectetur. Dui non sapien fringilla tristique ac aliquam donec. Luctus.</p>
                </div>
                <div className='mt-36'>
                    <Image src="/Images/boy.png" alt="" width={190} height={190} />
                </div>
            </div>
            <div>
                <Mandates2 />
                <AdministrationDepartment2 />
            </div>
        </section>
    )
}

export default MaintenanceUnit

const Mandates2 = () => {
    return (
        <div className='lg:px-10 lg:py-14 lg:ml-24 p-4'>
            <h2 className='font-semibold text-2xl lg:text-[32px]'>Mandates</h2>
            <div className='font-normal lg:[32px] text-base py-6 '>
                <div className='flex items-center gap-2 justify-start' ><CircleCheck size={24} />
                    <p className='py-4'>Saddle with general maintenance of office building, electrical works, plumbing work, maintenance of sanitary wares and installations gadgets;</p>
                </div>
                <div className='flex items-center gap-2 justify-start' ><CircleCheck size={24} />
                    <p className='py-4'>Supervision of all constructions works carried out by contractors in the Council;</p>
                </div>
                <div className='flex items-center gap-2 justify-start' ><CircleCheck size={24} />
                    <p className='py-4'>To ensure all jobs are done according to specifications;</p>
                </div>
                <div className='w-full flex items-center gap-2 justify-start' ><CircleCheck size={24} />
                    <p className='py-4'>Coordinate the activities of cleaners to ensure general cleaning of the offices and the entire environment;</p>
                </div>
                <div className='flex items-center gap-2 justify-start' ><CircleCheck size={24} />
                    <p className='py-4'>To ensure security of life and properties.</p>
                </div>
            </div>
        </div>

    )
}

const AdministrationDepartment2 = () => {
    return (

        <div className=' mb-24 mt-10 md:grid-cols-2 lg:w-[90%] pt-10 rounded-2xl bg-[#F6E8414D] mx-auto'>
            <div className="lg:py-10 p-6 lg:px-20">
                <div>
                    <h1 className="lg:text-[32px] text-2xl text-black text-bold mb-5 font-bold">Other Administration Department</h1>
                    <p className="text-base text-gray mt-4 py-3">Lorem ipsum dolor sit amet consectetur. Mi enim arcu vulputate ut at. Sagittis venenatis amet sagittis sit. In.</p>
                </div>
            </div>

            <div className='flex lg:flex-row flex-col lg:h-[50%] lg:w-[90%]  w-full p-8 gap-4 lg:space-x-7 lg:ml-14  '>
                <div className='bg-[#FFC74E] border p-7 rounded-[16.17px] text-left w-[45%] '>
                    <h1 className="font-bold text-xl mt-1">Transport Unit</h1>
                    <p className='pt-5 text-xs pb-6 mt-5'>
                        Lorem ipsum dolor sit amet consectetur. Dui <br />
                        non sapien fringilla tristique ac aliquam donec. Luctus.
                    </p>
                    <div className='border border-none rounded-full bg-black w-[140px] mt-2 h-[40px] flex items-center justify-center'>
                        <Link href="/governance/transport-unit" className='font-normal text-sm text-[#FFC74E]'>Learn More</Link>
                    </div>
                </div>

                <div className='bg-[#2E7636] p-8 border rounded-[16.17px] text-left lg:w-[45%]'>
                    <h1 className="font-bold text-xl text-white">Records & Registry Unit</h1>
                    <p className='pt-5 pb-5 text-xs text-white'>
                        Lorem ipsum dolor sit amet consectetur. Dui <br />
                        non sapien fringilla tristique ac aliquam donec. Luctus.
                    </p>
                    <div className='border border-none rounded-full bg-white w-[140px] mt-8 h-[35px] flex items-center justify-center'>
                        <Link href="/governance/records-unit" className='font-normal text-sm text-[#2E7636]'>Learn More</Link>
                    </div>
                </div>

                <div className='bg-[#75CDFD] border p-6 rounded-[16.17px] text-left lg:w-[45%]'>
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
