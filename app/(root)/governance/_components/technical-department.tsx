import React from 'react'

const TechnicalDepartment = () => {
    return (
        <section className="px-10 py-20">
            <div className="px-16">
                <h1 className="text-3xl font-bold text-[#1B222B]">Technical Department</h1>
                <p className="text-lg text-gray mt-4 pt-5">Lorem ipsum dolor sit amet consectetur. Vitae vestibulum morbi id in sed ipsum. Lectus placerat <br></br> elementum duis scelerisque sit faucibus velit nisl dui. Rhoncus tellus sit et elementum. Tempus.</p>
            </div>

            <div className=' mb-8 mt-10 md:grid-cols-2 lg:w-[1400px] pt-10 rounded-2xl bg-[#F6E8414D] mx-auto'>
                <div className="py-10 px-20">
                    <div>
                        <h2 className="text-[32px] text-black text-bold mb-5 font-bold">Extension & Socio-Economic Department</h2>
                        <p className="text-base text-gray mt-4 py-3">Lorem ipsum dolor sit amet consectetur. Mi enim arcu vulputate ut at. Sagittis venenatis amet sagittis sit. In.</p>
                    </div>

                    <div className='flex h-[288.71px] p-3 gap-4 space-x-7 '>
                        <div className='bg-[#FFC74E] border p-8 rounded-lg text-left '>
                            <h1 className="font-bold text-2xl mt-1">Transport Unit</h1>
                            <p className='pt-5 text-xs pb-6 mt-5'>
                                Lorem ipsum dolor sit amet consectetur. Dui <br />
                                non sapien fringilla tristique ac aliquam donec. Luctus.
                            </p>
                            <div className='border border-none rounded-full bg-black w-[140px] mt-3 h-[40px] flex items-center justify-center'>
                                <button className='font-normal text-sm text-[#FFC74E]'>Learn More</button>
                            </div>
                        </div>

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
            <div>
                <LivestockDepartment />
                <Fisheries />
            </div>

        </section>
    )
}

export default TechnicalDepartment


const LivestockDepartment = () => {
    return (
        <div className=' mb-8 mt-10 md:grid-cols-2 lg:w-[1400px] pt-10 rounded-2xl bg-[#2A59FE4D] mx-auto'>
            <div className="py-10 px-20">
                <div>
                    <h2 className="text-[32px] text-black text-bold mb-5 font-bold">Livestock Department</h2>
                    <p className="text-base text-gray mt-4 py-3">Lorem ipsum dolor sit amet consectetur. Mi enim arcu vulputate ut at. Sagittis venenatis amet sagittis sit. In.</p>
                </div>

                <div className='flex h-[288.71px] p-3 gap-4 space-x-7 '>
                    <div className='bg-[#FFC74E] flex-col justify-between border p-8 rounded-lg text-left '>
                        <div>
                        <h1 className="font-bold text-2xl mt-1">Transport Unit</h1>
                        <p className='pt-5 text-xs pb-6 mt-5'>
                            Lorem ipsum dolor sit amet consectetur. Dui <br />
                            non sapien fringilla tristique ac aliquam donec. Luctus.
                        </p>
                        </div>
                        <div className='border border-none rounded-full bg-black w-[140px] h-[40px] flex items-center justify-center'>
                            <button className='font-normal text-sm text-[#FFC74E]'>Learn More</button>
                        </div>
                    </div>

                    <div className='bg-[#2E7636] flex-col justify-between p-8 border rounded-lg text-left w-[375px]'>
                        <h1 className="font-bold text-xl text-white ">Records & Registry Unit</h1>
                        <p className='pt-8 pb-6 text-xs text-white'>
                            Lorem ipsum dolor sit amet consectetur. Dui <br />
                            non sapien fringilla tristique ac aliquam donec. Luctus.
                        </p>
                        <div className='border border-none rounded-full bg-white w-[140px] mt-6 h-[35px] flex items-center justify-center'>
                            <button className='font-normal text-sm text-[#2E7636]'>Learn More</button>
                        </div>
                    </div>

                    <div className='bg-black p-6 flex-col justify-betweenborder rounded-lg text-left w-[400px]'>
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

const Fisheries = () => {
    return (
        <section className='px-8 py-20'>
            <div className='mb-8 mt-1 md:grid-cols-2 lg:w-[1400px] pt-10 pr-14 pb-20 rounded-2xl bg-[#c2e989] mx-auto'>
                <div className='px-20 '>
                    <h2 className='font-bold text-3xl'>Fisheries & Aquaculture</h2>
                    <p className='text-sm text-gray mt-4 pb-5'>Lorem ipsum dolor sit amet consectetur. Mi enim arcu vulputate ut at. Sagittis venenatis amet sagittis sit. In.</p>
                </div>
                <div className=' bg-black p-8 rounded-xl w-[1250px] h-[288px] ml-20 '>
                    <h2 className='font-bold text-white '>Fisheries & Aquaculture</h2>
                    <p className='text-base text-white mt-4 pb-10 font-normal'>Lorem ipsum dolor sit amet consectetur. Dui non sapien fringilla <br></br>tristique ac aliquam donec. Luctus.</p>
                    <div className='border border-none rounded-full bg-white w-[140px] mt-2 h-[40px] flex items-center justify-center'>
                        <button className='text-black'>Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    )
}




