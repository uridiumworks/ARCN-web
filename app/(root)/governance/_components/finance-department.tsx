import React from 'react'

const FinanceDepartment = () => {
    return (
        <section className='px-8 py-20'>
            <div className='mb-8 mt-1 md:grid-cols-2 lg:w-[1450px] pt-10 pr-14 pb-20 rounded-2xl bg-[#c2e989] mx-auto'>
                <div className='px-20 '>
                    <h2 className='font-bold text-3xl'>Finance and Account Department</h2>
                    <p className='text-sm text-gray mt-4 pb-5'>Lorem ipsum dolor sit amet consectetur. Mi enim arcu vulputate ut at. Sagittis venenatis amet sagittis sit. In.</p>
                </div>
                <div className=' bg-black p-10 rounded-xl w-[1300px] h-[288px] ml-20 '>
                    <h2 className='font-bold text-white '>Finance And Account Unit</h2>
                    <p className='text-base text-white mt-4 pb-10 font-normal'>Lorem ipsum dolor sit amet consectetur. Dui non sapien fringilla <br></br>tristique ac aliquam donec. Luctus.</p>
                    <div className='border border-none rounded-full bg-white w-[140px] mt-2 h-[40px] flex items-center justify-center'>
                        <button className='text-black'>Learn More</button>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default FinanceDepartment
