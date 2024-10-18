import Link from 'next/link'
import React from 'react'

const FinanceDepartment = () => {
    return (
        <section className='w-full px-8 py-20'>
            <div className='mb-8 mt-1 md:grid-cols-2 lg:w-[100%] py-10 px-10  rounded-2xl bg-[#c2e989] mx-auto'>
                <div className=''>
                    <h2 className='font-bold text-lg md:text-3xl'>Finance and Account Department</h2>
                    <p className='text-sm text-gray mt-4 pb-5'>Lorem ipsum dolor sit amet consectetur. Mi enim arcu vulputate ut at. Sagittis venenatis amet sagittis sit. In.</p>
                </div>
                <div className=' bg-black p-10 rounded-xl lg:w-[100%] lg:h-[288px]  '>
                    <h2 className='font-bold text-white text-xl md:text-[25.88px] '>Finance And Account Unit</h2>
                    <p className='text-base text-white mt-4 pb-10 font-normal'>Lorem ipsum dolor sit amet consectetur. Dui non sapien fringilla <br></br>tristique ac aliquam donec. Luctus.</p>
                    <div className='border border-none rounded-full bg-white w-[140px] mt-2 h-[40px] flex items-center justify-center'>
                    <Link href="/governance/account-unit" className='font-normal text-sm text-black'>Learn More</Link>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default FinanceDepartment
