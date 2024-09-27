import React from 'react'
import { CircleCheck } from 'lucide-react'
import Link from 'next/link'

const AgriculturalExtensions = () => {
    return (
        <section className='w-full h-full font-montserrat'>
            <div className='bg-[#2E7636] lg:h-[400px]  text-white flex justify-between' >
                <div className='space-y-8 p-10 lg:py-24 lg:px-32'>
                    <h2 className='font-bold text-2xl lg:text-[32px]'>Agricultural Extensions & Training</h2>
                    <p className=''>Lorem ipsum dolor sit amet consectetur. Dui non sapien fringilla tristique ac aliquam donec. Luctus.</p>
                </div >
                <div className='mt-36'>
                    <img src='../Images/image 88.png' alt='' width={200} height={200} />
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
        <div className='lg:px-10 lg:py-14 p-8 lg:ml-24'>
            <h2 className='font-semibold text-2xl lg:text-[32px]'>Mandates</h2>
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
            <div className="lg:py-10 p-8 lg:px-20">
                <div>
                    <h2 className="text-[32px] text-black text-bold mb-5 font-bold">Other Administration Department</h2>
                    <p className="text-base text-gray mt-4 py-3">Lorem ipsum dolor sit amet consectetur. Mi enim arcu vulputate ut at. Sagittis venenatis amet sagittis sit. In.</p>
                </div>

                <div className='flex flex-col lg:flex-row lg:h-[288.71px] p-3 w-full gap-4 lg:space-x-7 '>
                    <div className='bg-[#FFC74E] border p-8 rounded-lg text-left lg:w-[400px] '>
                        <h1 className="font-bold text-xl mt-1">Agricultural Policy & <br/>Socio-Economics</h1>
                        <p className='pt-5 text-sm pb-6'>
                            Lorem ipsum dolor sit amet consectetur. Dui <br />
                            non sapien fringilla tristique ac aliquam donec.<br/> Luctus.
                        </p>
                        <div className='border border-none rounded-full bg-black w-[130px] h-[40px] flex items-center justify-center'>
                            <Link href='/governance/agricultural-policy' className='font-normal text-sm text-[#FFC74E]'>Learn More</Link>
                        </div>
                    </div>

                    <div className='bg-black p-6 border rounded-lg text-left lg:w-[400px]'>
                        <h1 className="font-bold text-xl text-white mt-1">Agricultural Business & Entrepreneurship</h1>
                        <p className='pt-5 text-sm text-white pb-3'>
                            Lorem ipsum dolor sit amet consectetur. Dui <br />
                            non sapien fringilla tristique ac aliquam donec. <br />Luctus.
                        </p>
                        <div className='border border-none rounded-full bg-white w-[130px] mt-4 h-[35px] flex items-center justify-center'>
                            <Link href='/governance/agricultural-business' className='font-normal text-sm text-black'>Learn More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}