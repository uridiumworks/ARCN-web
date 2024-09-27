import React from 'react'
import { CircleCheck } from 'lucide-react'
import Link from 'next/link'

const AgriculturalBusiness = () => {
    return (
        <section className='w-full font-montserrat'>
            <div className='bg-black lg:h-[390px] text-white flex justify-between' >
                <div className='space-y-8 p-8 lg:py-24 lg:px-32'>
                    <h2 className='font-bold text-2xl lg:text-[32px]'>Agricultural Business & Entrepreneurship</h2>
                    <p> Lorem ipsum dolor sit amet consectetur. Dui non sapien fringilla tristique ac aliquam donec. Luctus.</p>
                </div>
                <div className='mt-36'>
                    <img src="../Images/boy.png" alt="" width={190} height={190} />
                </div>
            </div>
            <div>
                <Mandates03 />
                <AdministrationDepartment03 />
            </div>

        </section>
    )
}

export default AgriculturalBusiness

const Mandates03 = () => {
    return (
        <div className='lg:px-10 p-6 lg:py-14 lg:ml-24'>
            <h2 className='font-semibold text-2xl lg:text-[32px]'>Mandates</h2>
            <div className='font-normal py-6 '>
                <div className='flex items-center gap-2 justify-start' ><CircleCheck size={24} />
                    <p className='py-4'>Evaluation of market potentials of technologies and products generationby the NARS</p>
                </div>
                <div className='flex items-center gap-2 justify-start' ><CircleCheck size={24} />
                    <p className='py-4'>Efficiency and competiveness of major agricultural commodities in Nigeria</p>
                </div>
                <div className='flex items-center gap-2 justify-start' ><CircleCheck size={24} />
                    <p className='py-4'>Study of international norms, standards and barriers to trade and access to markets for Nigeria’s agricultural products</p>
                </div>
                <div className='flex items-center gap-2 justify-start' ><CircleCheck size={24} />
                    <p className='py-4'>Value chain analysis of agric commodities/products and Agro-enterprise development</p>
                </div>
                <div className='flex items-center gap-2 justify-start' ><CircleCheck size={24} />
                    <p className='py-4'>Application of price analysis to marketing system</p>
                </div>
                <div className='flex items-center gap-2 justify-start' ><CircleCheck size={24} />
                    <p className='py-4'>Strengthening  IPR mechanism and commercialization of the technologies</p>
                </div>
                <div className='flex items-center gap-2 justify-start' ><CircleCheck size={24} />
                    <p className='py-4'>Agricultural research enterprise and entrepreneurship development by the Nigerian NARS</p>
                </div>
                <div className='flex items-center gap-2 justify-start' ><CircleCheck size={24} />
                    <p className='py-4'>Monitoring and evaluating the activities of relevant NARIs and FCAs</p>
                </div>
                <div className='flex items-center gap-2 justify-start' ><CircleCheck size={24} />
                    <p className='py-4'>And any other work assigned to the Division</p>
                </div>
            </div>
        </div>

    )
}

const AdministrationDepartment03 = () => {
    return (
        <div className=' mb-8 mt-10 md:grid-cols-2 lg:w-[1350px] w-full lg:pt-10 rounded-2xl bg-[#F6E8414D] mx-auto'>
            <div className="lg:py-10 p-6 lg:px-20">
                <div>
                    <h2 className="lg:text-[32px] text-2xl text-black text-bold mb-5 font-bold">Other Administration Department</h2>
                    <p className="text-base text-gray mt-4 py-3">Lorem ipsum dolor sit amet consectetur. Mi enim arcu vulputate ut at. Sagittis venenatis amet sagittis sit. In.</p>
                </div>

                <div className='flex flex-col lg:flex-row lg:h-[288.71px] w-full lg:p-3 gap-4 lg:space-x-7 '>
                    <div className='bg-[#FFC74E] border p-8 rounded-lg text-left lg:w-[375px] '>
                        <h1 className="font-bold text-xl mt-1">Agricultural Policy & <br/>Socio-Economics</h1>
                        <p className='pt-5 text-xs pb-6 '>
                            Lorem ipsum dolor sit amet consectetur. Dui <br />
                            non sapien fringilla tristique ac aliquam donec. Luctus.
                        </p>
                        <div className='border border-none rounded-full bg-black w-[130px] mt-3 h-[40px] flex items-center justify-center'>
                            <Link href='/governance/agricultural-policy' className='font-normal text-sm text-[#FFC74E]'>Learn More</Link>
                        </div>
                    </div>

                    <div className='bg-[#2E7636] p-8 border rounded-lg text-left lg:w-[375px]'>
                            <h1 className="font-bold text-xl text-white ">Agricultural Extensions & Training</h1>
                            <p className='pt-6 pb-6 text-xs text-white'>
                                Lorem ipsum dolor sit amet consectetur. Dui <br />
                                non sapien fringilla tristique ac aliquam donec. Luctus.
                            </p>
                            <div className='border border-none rounded-full bg-white w-[130px] mt-3 h-[35px] flex items-center justify-center'>
                                <Link href='/governance/agricultural-extensions' className='font-normal text-sm text-[#2E7636]'>Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}