import React from 'react'
import { CircleCheck } from 'lucide-react'
import Image from 'next/image'

const AgriculturalExtensions = () => {
    return (
        <section className='w-full font-montserrat'>
            <div className='bg-[#2E7636] h-[400px]  text-white flex justify-between' >
                <div className='space-y-8 py-24 px-32'>
                    <h2 className='font-bold text-2xl text-[32px]'>Records & Registry Unit</h2>
                    <p className=''>Lorem ipsum dolor sit amet consectetur. Dui non sapien fringilla tristique ac aliquam donec. Luctus.</p>
                </div >
                <div className='mt-36'>
                    <Image src='/Images/image 88.png' alt='' width={200} height={200} />
                </div>
            </div>
            <div>
                <Mandates02 />
                <AdministrationDepartment02 />
            </div>

        </section>
    )
}

export default AgriculturalExtensions

const Mandates02 = () => {
    return (
        <div className='px-10 py-14 ml-24'>
            <h2 className='font-semibold text-[32px]'>Mandates</h2>
            <div className='font-normal py-6 '>
                <div className='flex items-center gap-2 justify-start' ><CircleCheck size={24} />
                    <p className='py-4'>Effectiveness of the public investment in agric research, training and extension</p>
                </div>
                <div className='flex items-center gap-2 justify-start' ><CircleCheck size={24} />
                    <p className='py-4'>Impact of globalization on Nigeria’s agric sector and rural communities</p>
                </div>
                <div className='flex items-center gap-2 justify-start' ><CircleCheck size={24} />
                    <p className='py-4'>Assessment and evaluation of the status of technologies generation, dissemination and adoption by Nigerian NARS</p>
                </div>
                <div className='flex items-center gap-2 justify-start' ><CircleCheck size={24} />
                    <p className='py-4'>Assessment of the vulnerability of rural household to climate change</p>
                </div>
                <div className='flex items-center gap-2 justify-start' ><CircleCheck size={24} />
                    <p className='py-4'>Inventry and assessment of indigenous knowledge system (IKS) for improving agric productivity</p>
                </div>
                <div className='flex items-center gap-2 justify-start' ><CircleCheck size={24} />
                    <p className='py-4'>Establishment and operation of agric research outreach centres, adopted villages, innovation</p>
                </div>
                <div className='flex items-center gap-2 justify-start' ><CircleCheck size={24} />
                    <p className='py-4'>Monitoring and evaluating the activities of relevant NARIs and FCAs</p>
                </div>
                <div className='flex items-center gap-2 justify-start' ><CircleCheck size={24} />
                    <p className='py-4'>Innovation platforms and commodity consortia</p>
                </div>
                <div className='flex items-center gap-2 justify-start' ><CircleCheck size={24} />
                    <p className='py-4'>Strengthening of REFILS</p>
                </div>
                <div className='flex items-center gap-2 justify-start' ><CircleCheck size={24} />
                    <p className='py-4'>Agric research fairs.</p>
                </div>
                <div className='flex items-center gap-2 justify-start' ><CircleCheck size={24} />
                    <p className='py-4'>And any other work assigned to the Division</p>
                </div>
            </div>
        </div>

    )
}

const AdministrationDepartment02 = () => {
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

                    <div className='bg-black p-6 border rounded-lg text-left w-[400px]'>
                        <h1 className="font-bold text-xl text-white mt-1">Maintenance Unit</h1>
                        <p className='pt-5 text-xs text-white mt-5 pb-3'>
                            Lorem ipsum dolor sit amet consectetur. Dui <br />
                            non sapien fringilla tristique ac aliquam donec. <br />Luctus.
                        </p>
                        <div className='border border-none rounded-full bg-white w-[130px] mt-8 h-[35px] flex items-center justify-center'>
                            <button className='font-normal text-sm text-black'>Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}