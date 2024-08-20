import React from 'react'
import { CircleCheck } from 'lucide-react'

const SecurityUnit = () => {
  return (
    <section className='w-full'>
            <div className='bg-[#75CDFD] h-[430px] flex justify-between' >
                <div className='space-y-8 py-24 px-32'>
                <h2 className='font-bold text-2xl text-[32px]'>Security Unit</h2>
                <p className='pt-2'>Lorem ipsum dolor sit amet consectetur. Dui non sapien fringilla tristique ac aliquam donec. Luctus.</p>
                </div>
                <div className='mt-36'>
                    <img src="../Images/police.png" alt="" width={270} height={270} />
                </div>
            </div>
            <div>
                <Mandates3 />
                <AdministrationDepartment3 />*
            </div>
        </section>
  )
}

export default SecurityUnit

const Mandates3 = () => {
    return (
        <div className='px-10 py-14 ml-24'>
            <h2 className='font-semibold text-[32px]'>Mandates</h2>
            <div className='font-normal py-6 '>
                <div className='flex items-center gap-2 justify-start' ><CircleCheck size={24} />
                    <p className='py-4'>Responsible for the provision of transportation services for staff of the Council on official assignment nationwide using official vehicles;</p>
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

const AdministrationDepartment3 = () => {
    return (

        <div className=' mb-24 mt-10 md:grid-cols-2 lg:w-[1400px] pt-10 rounded-2xl bg-[#F6E8414D] mx-auto'>
            <div className="py-10 px-20">
                <div>
                    <h1 className="text-[32px] text-black text-bold mb-5 font-bold"> Other Administration Department</h1>
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

                <div className='bg-black p-6 border rounded-lg text-left w-[375px]'>
                    <h1 className="font-bold text-xl text-white mt-1">Maintenance Unit</h1>
                    <p className='pt-5 text-xs text-white mt-5 pb-2'>
                        Lorem ipsum dolor sit amet consectetur. Dui <br />
                        non sapien fringilla tristique ac aliquam donec. Luctus.
                    </p>
                    <div className='border border-none rounded-full bg-white w-[130px] mt-8 h-[35px] flex items-center justify-center'>
                        <button className='font-normal text-sm text-black'>Learn More</button>
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
            </div>
        </div>


    )
}



