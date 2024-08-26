import React from 'react'
import { CircleCheck } from 'lucide-react'

const Ruminant = () => {
    return (
        <section className='w-full'>
            <div className='bg-[#FFC74E] h-[400px] flex justify-between' >
                <div className='space-y-8 py-24 px-32'>
                    <h2 className='font-bold text-2xl text-[32px]'>Ruminant & Non-Ruminat Division</h2>
                    <p className=''>Lorem ipsum dolor sit amet consectetur. Dui non sapien fringilla tristique ac aliquam donec. Luctus.</p>
                </div>
                <div className='mt-36'>
                    <img src="../Images/agric.png" alt="" width={250} height={250} />
                </div>
            </div>

            <div>
                <Mandates01/>
                <AdministrationDepartment01/>
            </div>
          
        </section>
  )
}

export default Ruminant

const Mandates01 = () => {
    return (
        <div className='px-10 py-14 ml-24'>
            <h2 className='font-semibold text-[32px]'>Mandates</h2>
            <p className='pt-6'>Lorem ipsum dolor sit amet consectetur. Dui non sapien fringilla tristique ac aliquam donec. Luctus.</p>

            <div className='font-normal py-6 '>
                <h2 className='font-semibold text-[32px]'>Units under Ruminants and Non Ruminant division</h2>
                <div className='flex items-center gap-2 justify-start' ><CircleCheck size={24} />
                    <p className='py-4'>Large Ruminant: deals with large ruminants research like cattle.</p>
                </div>
                <div className='flex items-center gap-2 justify-start' ><CircleCheck size={24} />
                    <p className='py-4'>Small Ruminant: deals with small ruminants research like sheep and goat.</p>
                </div>
                <div className='flex items-center gap-2 justify-start' ><CircleCheck size={24} />
                    <p className='py-4'>Monogastric: deals with research on piggery and poultry.</p>
                </div>
                <div className='flex items-center gap-2 justify-start' ><CircleCheck size={24} />
                    <p className='py-4'>Micro Livestock: deals with research on rabbits.</p>
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
                <h1 className="font-bold text-xl text-white ">Animal/Public Health <br/> Division</h1>
                <p className='pt-8 pb-6 text-xs text-white'>
                    Lorem ipsum dolor sit amet consectetur. Dui <br />
                    non sapien fringilla tristique ac aliquam donec. Luctus.
                </p>
                <div className='border border-none rounded-full bg-white w-[140px] mt-6 h-[35px] flex items-center justify-center'>
                    <button className='font-normal text-sm text-[#2E7636]'>Learn More</button>
                </div>
            </div>

            <div className='bg-black p-6 border rounded-lg text-left w-[400px]'>
                <h1 className="font-bold text-xl text-white mt-1">Livestock Nutrition & Farming System</h1>
                <p className='pt-4 text-xs text-white mt-4 pb-3'>
                    Lorem ipsum dolor sit amet consectetur. Dui <br />
                    non sapien fringilla tristique ac aliquam donec. <br />Luctus.
                </p>
                <div className='border border-none rounded-full bg-white w-[130px] mt-4 h-[35px] flex items-center justify-center'>
                    <button className='font-normal text-sm text-black'>Learn More</button>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

