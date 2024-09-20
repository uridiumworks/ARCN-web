import React from 'react'
import { CircleCheck } from 'lucide-react'
import Image from 'next/image';

const AccountUnit = () => {
  return (
    <section className='w-full '>
    <div className='bg-black h-[400px] flex justify-between' >
        <div className='space-y-8 py-24 px-32 text-white'>
            <h2 className='font-bold text-2xl text-[32px]'>Finance and Account Unit</h2>
            <p className=''>Lorem ipsum dolor sit amet consectetur. Dui non sapien fringilla tristique ac aliquam donec. Luctus.</p>
        </div>
        <div className='mt-44'>
            <Image src="../Images/group.png" alt="" width={300} height={300} />
        </div>
    </div>
    <div>
        <Mandates4 />
        
    </div>
</section>
  )
}

export default AccountUnit

const Mandates4 = () => {
    return (
        <div className='px-10 py-14 ml-24'>
            <h2 className='font-semibold text-[32px]'>Mandates</h2>
            <div className='font-normal py-6 '>
                <div className='flex items-center gap-2 justify-start' >
                    <p className='py-4'>Accounting and Finance department provides accounting services and manages the finances of the organization (council)</p>
                </div>
                <div className='flex items-center gap-2 justify-start' >
                    <p className='py-4'>The Finance and Accounts department is mainly divided into two units;</p>
                </div>
                <div className='flex items-center gap-2 justify-start' ><CircleCheck size={24} />
                    <p className='py-4'>Finance and</p>
                </div>
                <div className='flex items-center gap-2 justify-start' ><CircleCheck size={24} />
                    <p className='py-4'>Accounts.</p>
                </div>
            </div>

        </div>
    )
}
