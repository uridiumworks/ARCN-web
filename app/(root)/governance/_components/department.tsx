import React from 'react'
import Image from 'next/image'

const Department = ({setTab}:any) => {
    return (
        <section className='px-10 py-24'>
            <div className='lg:px-32'>
                <h1 className="text-2xl font-bold text-[#1B222B]">Our Department</h1>
                <p className="text-lg text-gray mt-4 pt-10"></p>
                Lorem ipsum dolor sit amet consectetur. Vitae vestibulum morbi id in sed ipsum. Lectus placerat
                <p className='pb-8'> elementum duis scelerisque sit faucibus velit nisl dui. Rhoncus tellus sit et elementum. Tempus.</p>
            </div>

            <div className='mb-8 grid grid-cols-1 md:grid-cols-2 md:gap-10 lg:gap-60 sm:justify-center sm:items-center lg:w-[1200px] pt-1.5 sm:pl-9 lg:pl-20 rounded-[20px] bg-[#30A85F] mx-auto'>
                <div className='space-y-8 py-10 px-9'>
                    <div className='lg:pt-5'>
                        <h1 className="md:text-[32px] text-[27px] text-white text-bold mt-5 mb-5 font-bold">Service Department</h1>
                        <p className='text-white text-base '>Lorem ipsum dolor sit amet consectetur. Volutpat lobortis imperdiet adipiscing egestas. Sodales non est nec ac malesuada tempus ultrices adipiscing iaculis.</p>
                    </div>
                    <div className='border border-none rounded-full bg-[#FFFFFF] w-[160px] py-2 px-3 '>
                        <button onClick={() => setTab(2)} className='font-normal text-base text-[#30A85F]'>See Departments</button>
                    </div>
                </div>
                <div>
                    <Image src="../Images/OBJECTS.png" alt=""  width={392.62} height={371}/>
                </div>
            </div>

            <div className=' mt-8 grid grid-cols-1 md:grid-cols-2 md:justify-center md:items-center md:gap-10 lg:gap-60 lg:w-[1200px] pt-5 md:pl-9 lg:pl-20 rounded-[20px] bg-[#FFC74E] mx-auto'>
                <div className='space-y-8 py-10 px-9'>
                    <div className='space-y-2 '>
                        <h1 className="md:text-[32px] text-[25px] text-black text-bold mt-5 mb-5 font-bold">Technical Department</h1>
                        <p className='text-black text-base '>Lorem ipsum dolor sit amet consectetur. Volutpat lobortis imperdiet adipiscing egestas. Sodales non est nec ac malesuada tempus ultrices adipiscing iaculis.</p>
                    </div>
                    <div className='border border-none rounded-full bg-black w-[160px] py-2 px-3 '>
                        <button onClick={() => setTab(3)} className='font-normal text-base text-[#FFC74E]'>See Departments</button>
                    </div>
                </div>
                <div className='pb-1.5'>
                    <Image src="../Images/OBJECT(1).png" alt=""  width={392.62} height={371}/>
                </div>
            </div>
    
        </section>
    )
}

export default Department
