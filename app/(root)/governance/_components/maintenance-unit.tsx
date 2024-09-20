import React from 'react'
import { CircleCheck } from 'lucide-react'
import Image from 'next/image'

const MaintenanceUnit = () => {
    return (
        <section className='w-full'>
            <div className='bg-black h-[390px] text-white flex justify-between' >
                <div className='space-y-8 py-24 px-32'>
                    <h2 className='font-bold text-2xl text-[32px]'>Maintenace Unit</h2>
                    <p> Lorem ipsum dolor sit amet consectetur. Dui non sapien fringilla tristique ac aliquam donec. Luctus.</p>
                </div>
                <div className='mt-36'>
                    <Image src="../Images/boy.png" alt="" width={190} height={190} />
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
        <div className='px-10 py-14 ml-24'>
            <h2 className='font-semibold text-[32px]'>Mandates</h2>
            <div className='font-normal py-6 '>
                <div className='flex items-center gap-2 justify-start' ><CircleCheck size={24} />
                    <p className='py-4'>Saddle with general maintenance of office building, electrical works, plumbing work, maintenance of sanitary wares and installations gadgets;</p>
                </div>
                <div className='flex items-center gap-2 justify-start' ><CircleCheck size={24} />
                    <p className='py-4'>Supervision of all constructions works carried out by contractors in the Council;</p>
                </div>
                <div className='flex items-center gap-2 justify-start' ><CircleCheck size={24} />
                    <p className='py-4'>To ensure all jobs are done according to specifications;</p>
                </div>
                <div className='flex items-center gap-2 justify-start' ><CircleCheck size={24} />
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

        <div className=' mb-24 mt-10 md:grid-cols-2 lg:w-[1400px] pt-10 rounded-2xl bg-[#F6E8414D] mx-auto'>
            <div className="py-10 px-20">
                <div>
                    <h1 className="text-[32px] text-black text-bold mb-5 font-bold">Other Administration Department</h1>
                    <p className="text-base text-gray mt-4 py-3">Lorem ipsum dolor sit amet consectetur. Mi enim arcu vulputate ut at. Sagittis venenatis amet sagittis sit. In.</p>
                </div>
            </div>

            <div className='flex h-[288.71px] p-8 gap-4 space-x-7 ml-14  '>
                <div className='bg-[#FFC74E] border p-8 rounded-lg text-left '>
                    <h1 className="font-bold text-xl mt-1">Transport Unit</h1>
                    <p className='pt-5 text-xs pb-6 mt-5'>
                        Lorem ipsum dolor sit amet consectetur. Dui <br />
                        non sapien fringilla tristique ac aliquam donec. Luctus.
                    </p>
                    <div className='border border-none rounded-full bg-black w-[140px] mt-2 h-[40px] flex items-center justify-center'>
                        <button className='font-normal text-sm text-[#FFC74E]'>Learn More</button>
                    </div>
                </div>

                <div className='bg-[#2E7636] p-8 border rounded-lg text-left w-[375px]'>
                    <h1 className="font-bold text-xl text-white">Records & Registry Unit</h1>
                    <p className='pt-5 pb-5 text-xs text-white'>
                        Lorem ipsum dolor sit amet consectetur. Dui <br />
                        non sapien fringilla tristique ac aliquam donec. Luctus.
                    </p>
                    <div className='border border-none rounded-full bg-white w-[140px] mt-8 h-[35px] flex items-center justify-center'>
                        <button className='font-normal text-sm text-[#2E7636]'>Learn More</button>
                    </div>
                </div>

                <div className='bg-[#75CDFD] border p-6 rounded-lg text-left w-[375px]'>
                    <h1 className="font-bold text-xl mt-1">Security Unit</h1>
                    <p className='pt-5 text-xs mt-4 pb-3'>
                        Lorem ipsum dolor sit amet consectetur. Dui <br />
                        non sapien fringilla tristique ac aliquam donec. Luctus.
                    </p>
                    <div className='border border-none rounded-full bg-white w-[140px] mt-8 h-[40px] flex items-center justify-center'>
                        <button className='font-normal text-sm text-[#75CDFD]'>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
