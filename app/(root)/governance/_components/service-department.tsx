
import Link from 'next/link'
import React from 'react'

const ServiceDepartment = () => {
    return (
        <section className="px-10 py-20">
            <div className="md:px-16">
                <h1 className="text-3xl font-bold text-[#1B222B]">Service Department</h1>
                <p className="text-lg text-gray mt-4 pt-5">Lorem ipsum dolor sit amet consectetur. Vitae vestibulum morbi id in sed ipsum. Lectus placerat <br /> elementum duis scelerisque sit faucibus velit nisl dui. Rhoncus tellus sit et elementum. Tempus.</p>
            </div>

            <div className=' mb-8 mt-10 md:grid-cols-2 w-full lg:w-[1400px] pt-10 rounded-2xl bg-[#F6E8414D] mx-auto'>
                <div className="md:py-10 md:px-20 p-5">
                    <div>
                        <h1 className="lg:text-[32px] text-xl text-black text-bold mb-5 font-bold">Administration Department</h1>
                        <p className="text-base text-gray mt-4 py-3">Lorem ipsum dolor sit amet consectetur. Mi enim arcu vulputate ut at. Sagittis venenatis amet sagittis sit. In.</p>
                    </div>

                    <div className='flex flex-col lg:flex-row w-full h-full lg:h-[288.71px] gap-4 lg:space-x-7 '>
                        <div className='bg-[#FFC74E] border p-8 lg:w-[400px] rounded-lg text-left '>
                            <h1 className="font-bold text-2xl lg:text-xl">Transport Unit</h1>
                            <p className='pt-5 text-xs pb-6 mt-4'>
                                Lorem ipsum dolor sit amet consectetur. Dui <br />
                                non sapien fringilla tristique ac aliquam donec. Luctus.
                            </p>
                            <div className='border border-none rounded-full bg-black w-[140px] mt-2 h-[40px] flex items-center justify-center'>
                                <Link href="/governance/transport-unit" className='font-normal text-sm text-[#FFC74E]'>Learn More</Link>
                            </div>
                        </div>

                        <div className='bg-[#2E7636] p-8 border rounded-lg text-left lg:w-[400px]'>
                            <h1 className="font-bold text-xl text-white">Records & Registry Unit</h1>
                            <p className='pt-5 text-xs text-white'>
                                Lorem ipsum dolor sit amet consectetur. Dui <br />
                                non sapien fringilla tristique ac aliquam donec. Luctus.
                            </p>
                            <div className='border border-none rounded-full bg-white w-[140px] mt-8 h-[35px] flex items-center justify-center'>
                                <Link href="/governance/records-unit" className='font-normal text-sm text-[#2E7636]'>Learn More</Link>
                            </div>
                        </div>

                        <div className='bg-black p-6 border rounded-lg text-left lg:w-[400px]'>
                            <h1 className="font-bold text-xl text-white mt-1">Maintenance Unit</h1>
                            <p className='pt-5 text-xs text-white mt-5 pb-3'>
                                Lorem ipsum dolor sit amet consectetur. Dui <br />
                                non sapien fringilla tristique ac aliquam donec. Luctus.
                            </p>
                            <div className='border border-none rounded-full bg-white w-[130px] mt-8 h-[35px] flex items-center justify-center'>
                                <Link href="/governance/maintenance-unit" className='font-normal text-sm text-black'>Learn More</Link>
                            </div>
                        </div>

                        <div className='bg-[#75CDFD] border p-6 rounded-lg text-left lg:w-[400px]'>
                            <h1 className="font-bold text-xl mt-1">Security Unit</h1>
                            <p className='pt-5 text-xs mt-4 pb-3'>
                                Lorem ipsum dolor sit amet consectetur. Dui <br />
                                non sapien fringilla tristique ac aliquam donec. Luctus.
                            </p>
                            <div className='border border-none rounded-full bg-white w-[140px] mt-8 h-[40px] flex items-center justify-center'>
                                <Link href="/governance/security-unit" className='font-normal text-sm text-[#75CDFD]'>Learn More</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div>
            </div>

        </section>

    )
}

export default ServiceDepartment