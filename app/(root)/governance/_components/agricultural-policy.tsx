import React from 'react'
import { CircleCheck } from 'lucide-react'
import Image from 'next/image'

const AgriculturalPolicy = () => {
    return (
        <section className='w-full'>
            <div className='bg-[#FFC74E] h-[400px] flex justify-between' >
                <div className='space-y-8 py-24 px-32'>
                    <h2 className='font-bold text-2xl text-[32px]'>Agricultural Policy & Socio-Economics</h2>
                    <p className=''>Lorem ipsum dolor sit amet consectetur. Dui non sapien fringilla tristique ac aliquam donec. Luctus.</p>
                </div>
                <div className='mt-36'>
                    <Image src="../Images/agric.png" alt="" width={250} height={250} />
                </div>
            </div>

            <div>
                <Mandates01/>
                <AdministrationDepartment01/>
            </div>
          
        </section>
  )
}

export default AgriculturalPolicy

const Mandates01 = () => {
    return (
        <div className='px-10 py-14 ml-24'>
            <h2 className='font-semibold text-[32px]'>Mandates</h2>
            <div className='font-normal py-6 '>
                <div className='flex items-center gap-2 justify-start' ><CircleCheck size={24} />
                    <p className='py-4'>Assessment of the impact of the government policy on agricultural production in Nigeria;</p>
                </div>
                <div className='flex items-center gap-2 justify-start' ><CircleCheck size={24} />
                    <p className='py-4'>Impact assessment studies of agricultural Technologies generated by the NARS</p>
                </div>
                <div className='flex items-center gap-2 justify-start' ><CircleCheck size={24} />
                    <p className='py-4'>Assessment of the household’s food security status and evaluation of Nigeria’s food security program</p>
                </div>
                <div className='flex items-center gap-2 justify-start' ><CircleCheck size={24} />
                    <p className='py-4'>Assessment of the effectiveness and efficiency of the seed sub-sector</p>
                </div>
                <div className='flex items-center gap-2 justify-start' ><CircleCheck size={24} />
                    <p className='py-4'>Socio-economic and environmental assessment of technologies generated by the NARS</p>
                </div>
                <div className='flex items-center gap-2 justify-start' ><CircleCheck size={24} />
                    <p className='py-4'>Impact assessment of the operation of agric research outreach centres, adopted villages, innovation</p>
                </div>
                <div className='flex items-center gap-2 justify-start' ><CircleCheck size={24} />
                    <p className='py-4'>Assessment of the vulnerability of rural household to climate change</p>
                </div>
                <div className='flex items-center gap-2 justify-start' ><CircleCheck size={24} />
                    <p className='py-4'>Analysis of the production and productivity of the agricultural production in Nigeria</p>
                </div>
                <div className='flex items-center gap-2 justify-start' ><CircleCheck size={24} />
                    <p className='py-4'>Impact of globalization on Nigeria’s agric sector and rural communities</p>
                </div>
                <div className='flex items-center gap-2 justify-start' ><CircleCheck size={24} />
                    <p className='py-4'>Monitoring and evaluation of the availability of agricultural products</p>
                </div>
                <div className='flex items-center gap-2 justify-start' ><CircleCheck size={24} />
                    <p className='py-4'>Monitoring and evaluation of agricultural products’ prices</p>
                </div>
                <div className='flex items-center gap-2 justify-start' ><CircleCheck size={24} />
                    <p className='py-4'>Monitoring and evaluating the activities of relevant NARIs and FCAs</p>
                </div>
                <div className='flex items-center gap-2 justify-start' ><CircleCheck size={24} />
                    <p className='py-4'>Advise to the FGN on agricultural policies  and their formulations</p>
                </div>
                <div className='flex items-center gap-2 justify-start' ><CircleCheck size={24} />
                    <p className='py-4'>And any other work assigned to the Division</p>
                </div>
            </div>

        </div>
    )
}



const AdministrationDepartment01 = () => {
  return (
    <div className=' mb-8 mt-10 md:grid-cols-2 lg:w-[1400px] pt-10 rounded-2xl bg-[#F6E8414D] mx-auto'>
    <div className="py-10 px-20">
        <div>
            <h2 className="text-[32px] text-black text-bold mb-5 font-bold">Other Administration Department</h2>
            <p className="text-base text-gray mt-4 py-3">Lorem ipsum dolor sit amet consectetur. Mi enim arcu vulputate ut at. Sagittis venenatis amet sagittis sit. In.</p>
        </div>

        <div className='flex h-[288.71px] p-3 gap-4 space-x-7 '>
            <div className='bg-[#2E7636] p-8 border rounded-lg text-left w-[375px]'>
                <h1 className="font-bold text-xl text-white ">Records & Registry Unit</h1>
                <p className='pt-8 pb-6 text-xs text-white'>
                    Lorem ipsum dolor sit amet consectetur. Dui <br />
                    non sapien fringilla tristique ac aliquam donec. Luctus.
                </p>
                <div className='border border-none rounded-full bg-white w-[140px] mt-6 h-[35px] flex items-center justify-center'>
                    <button className='font-normal text-sm text-[#2E7636]'>Learn More</button>
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

