import React from 'react'
import { CircleCheck } from 'lucide-react'
import Image from 'next/image'

const Livestock = () => {
    return (
        <section className='w-full'>
            <div className='bg-black h-[390px] text-white flex justify-between' >
                <div className='space-y-8 py-24 px-32'>
                    <h2 className='font-bold text-2xl text-[32px]'>Maintenace Unit</h2>
                    <p> Lorem ipsum dolor sit amet consectetur. Dui non sapien fringilla tristique ac aliquam donec. Luctus.</p>
                </div>
                <div className='mt-36'>
                    <Image src="/Images/boy.png" alt="" width={190} height={190} />
                </div>
            </div>
            <div>
                <Mandates03 />
                <AdministrationDepartment03 />
            </div>

        </section>
    )
}

export default Livestock

const Mandates03 = () => {
    return (
        <div className='px-10 py-14 ml-24'>
            <h2 className='font-semibold text-[32px]'>Mandates</h2>
            <p className='pt-6'>Lorem ipsum dolor sit amet consectetur. Dui non sapien fringilla tristique ac aliquam donec. Luctus.</p>

            <div className='font-normal py-6 '>
                <h2 className='font-semibold text-[32px]'>Units under Livestock Nutrition & Farming System</h2>
                <div className='flex items-center gap-2 justify-start' ><CircleCheck size={24} />
                    <p className='py-4'>Ruminant Nutrition: research on pasture, fodder, concentrates etc.</p>
                </div>
                <div className='flex items-center gap-2 justify-start' ><CircleCheck size={24} />
                    <p className='py-4'>Monogastric Nutrition: research on alternative feed for monogastric animal.</p>
                </div>
                <div className='flex items-center gap-2 justify-start' ><CircleCheck size={24} />
                    <p className='py-4'>Farming System: research on Pastoral, commercial, ranching, ruga etc.</p>
                </div>

            </div>

        </div>

    )
}

const AdministrationDepartment03 = () => {
    return (
        <div className=' mb-8 mt-10 md:grid-cols-2 lg:w-[1400px] pt-10 rounded-2xl bg-[#F6E8414D] mx-auto'>
            <div className="py-10 px-20">
                <div>
                    <h2 className="text-[32px] text-black text-bold mb-5 font-bold">Other Administration Department</h2>
                    <p className="text-base text-gray mt-4 py-3">Lorem ipsum dolor sit amet consectetur. Mi enim arcu vulputate ut at. Sagittis venenatis amet sagittis sit. In.</p>
                </div>

                <div className='flex h-[288.71px] p-3 gap-4 space-x-7 '>
                    <div className='bg-[#FFC74E] border p-8 rounded-lg text-left '>
                        <h1 className="font-bold text-2xl mt-1">Transport Unit</h1>
                        <p className='pt-5 text-xs pb-6 mt-5'>
                            Lorem ipsum dolor sit amet consectetur. Dui <br />
                            non sapien fringilla tristique ac aliquam donec. Luctus.
                        </p>
                        <div className='border border-none rounded-full bg-black w-[140px] mt-3 h-[40px] flex items-center justify-center'>
                            <button className='font-normal text-sm text-[#FFC74E]'>Learn More</button>
                        </div>
                    </div>

                    <div className='bg-[#2E7636] p-8 border rounded-lg text-left w-[375px]'>
                        <h1 className="font-bold text-xl text-white ">Animal/Public Health <br /> Division</h1>
                        <p className='pt-8 pb-6 text-xs text-white'>
                            Lorem ipsum dolor sit amet consectetur. Dui <br />
                            non sapien fringilla tristique ac aliquam donec. Luctus.
                        </p>
                        <div className='border border-none rounded-full bg-white w-[140px] mt-6 h-[35px] flex items-center justify-center'>
                            <button className='font-normal text-sm text-[#2E7636]'>Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}