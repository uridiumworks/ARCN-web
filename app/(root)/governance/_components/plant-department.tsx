import React from 'react'

const PlantDepartment = () => {
    return (
        <section className="px-10 py-20">
            <div className=' mb-8 mt-10 md:grid-cols-2 lg:w-[1450px] pt-10 rounded-2xl bg-[#FF91A04D] mx-auto'>
                <div className="py-10 px-20">
                    <div>
                        <h1 className="text-[32px] text-black text-bold mb-5 font-bold">Plant and Resources Department</h1>
                        <p className="text-base text-gray mt-4 py-3">Lorem ipsum dolor sit amet consectetur. Mi enim arcu vulputate ut at. Sagittis venenatis amet sagittis sit. In.</p>
                    </div>

                    <div className='flex  h-[288.71px] p-3 gap-4 space-x-7 '>
                        <div className='bg-[#FFC74E] border p-8 rounded-lg text-left w-[100%]'>
                            <h1 className="font-bold text-xl mt-1">Arable Crops Research</h1>
                            <p className='py-4 text-xs'>
                                Lorem ipsum dolor sit amet consectetur. Dui
                                non sapien fringilla tristique ac aliquam <br /> donec. Luctus.
                            </p>

                            <div className='flex items-center justify-between'>
                                <div className='border border-none rounded-full bg-black w-[120px]  h-[35px] flex items-center justify-center'>
                                    <button className='font-normal text-sm text-[#FFC74E]'>Learn More</button>
                                </div>
                                <div className='mt-1 justify-end text-right me-[-32px]'>
                                    <img src="../Images/Vehicle_1.png" alt="" width={120} height={140} />
                                </div>
                            </div>
                        </div>

                        <div className='bg-[#2E7636] p-8 border rounded-lg text-left w-[100%]'>
                            <h1 className="font-bold text-xl text-black">Tree Crops Research</h1>
                            <p className='pt-5  text-xs text-white'>
                                Lorem ipsum dolor sit amet consectetur. Dui
                                non sapien fringilla tristique ac aliquam <br /> donec. Luctus.
                            </p>
                            <div className='flex items-center justify-between'>
                                <div className='border border-none rounded-full bg-white w-[110px] h-[30px] flex items-center justify-center'>
                                    <button className='font-normal text-sm text-[#2E7636]'>Learn More</button>
                                </div>
                                <div className='justify-end text-right me-[-32px]'>
                                    <img src="../Images/books.png" alt="" width={90} height={50} />
                                </div>
                            </div>
                        </div>

                        <div className='bg-black p-6 border rounded-lg text-left w-[100%]'>
                            <h1 className="font-bold text-base text-white mt-1">Roots, Tubers & Horticultural Crops Research</h1>
                            <p className='pt-5 text-xs text-white '>
                                Lorem ipsum dolor sit amet consectetur. Dui
                                non sapien fringilla tristique ac aliquam donec. Luctus.
                            </p>
                            <div className='flex items-center justify-between'>
                                <div className='border border-none rounded-full bg-white w-[110px] h-[30px] flex items-center justify-center'>
                                    <button className='font-normal text-sm text-black'>Learn More</button>
                                </div>
                                <div className='justify-end text-right me-[-20px]'>
                                    <img src="../Images/boy.png" alt="" width={93} height={70} />
                                </div>
                            </div>
                        </div>

                        <div className='bg-[#75CDFD] border p-6 rounded-lg text-left w-[100%]'>
                            <h1 className="font-bold text-base mt-1">Plant Genetics Resources & Biotechnology <br /> Research</h1>
                            <p className='pt-2 text-xs'>
                                Lorem ipsum dolor sit amet consectetur. Dui
                                non sapien fringilla tristique ac aliquam donec. Luctus.
                            </p>
                            <div className='flex items-center justify-between'>
                                <div className='border border-none rounded-full bg-white w-[110px] h-[30px] flex items-center justify-center'>
                                    <button className='font-normal text-sm text-[#75CDFD]'>Learn More</button>
                                </div>
                                <div className='justify-end text-right me-[-32px]'>
                                    <img src="../Images/police.png" alt="" width={100} height={100} />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div>
                <Knowledge />
                <PlanningResearch/>
            </div>
        </section>

    )
}

export default PlantDepartment


const Knowledge = () => {
    return (
        <section className="px-10 py-20">
            <div className=' mb-8 mt-10 md:grid-cols-2 lg:w-[1400px] pt-10 rounded-2xl bg-[#013B434D] mx-auto'>
                <div className="py-10 px-20">
                    <div>
                        <h1 className="text-[32px] text-black text-bold mb-5 font-bold">Knowledge Management & Communication</h1>
                        <p className="text-base text-gray mt-4 py-3">Lorem ipsum dolor sit amet consectetur. Mi enim arcu vulputate ut at. Sagittis venenatis amet sagittis sit. In.</p>
                    </div>

                    <div className='flex  h-[288.71px] p-3 gap-4 space-x-7 '>
                        <div className='bg-[#FFC74E] p-8 rounded-lg text-left w-[375.24px]'>
                            <h1 className="font-bold text-lg mt-1">Publication & Communication</h1>
                            <p className='pt-6 pb-4 text-xs'>
                                Lorem ipsum dolor sit amet consectetur. Dui
                                non sapien fringilla tristique ac aliquam <br /> donec. Luctus.
                            </p>

                            <div className='flex items-center justify-between'>
                                <div className='border border-none rounded-full bg-black w-[120px]  h-[35px] flex items-center justify-center'>
                                    <button className='font-normal text-sm text-[#FFC74E]'>Learn More</button>
                                </div>
                                <div className='mt-1 justify-end text-right me-[-32px]'>
                                    <img src="../Images/Vehicle_1.png" alt="" width={150} height={140} />
                                </div>
                            </div>
                        </div>


                        <div className='bg-[#2E7636] p-8 rounded-lg text-left w-[375.24px]'>
                            <h1 className="font-bold text-xl text-black">ICT/MIS</h1>
                            <p className='pt-6  text-xs text-white'>
                                Lorem ipsum dolor sit amet consectetur. Dui
                                non sapien fringilla tristique ac aliquam <br /> donec. Luctus.
                            </p>
                            <div className='flex items-center justify-between'>
                                <div className='border border-none rounded-full bg-white w-[110px] h-[30px] flex items-center justify-center'>
                                    <button className='font-normal text-sm text-[#2E7636]'>Learn More</button>
                                </div>
                                <div className='justify-end text-right me-[-32px]'>
                                    <img src="../Images/books.png" alt="" width={100} height={70} />
                                </div>
                            </div>
                        </div>

                        <div className='bg-black p-6 rounded-lg text-left w-[375.24px]'>
                            <h1 className="font-bold text-base text-white mt-1">Library & <br/> Documentation centre</h1>
                            <p className='pt-6 text-xs text-white '>
                                Lorem ipsum dolor sit amet consectetur. Dui
                                non sapien fringilla tristique ac aliquam donec. Luctus.
                            </p>
                            <div className='flex items-center justify-between'>
                                <div className='border border-none rounded-full bg-white w-[110px] h-[30px] flex items-center justify-center'>
                                    <button className='font-normal text-sm text-black'>Learn More</button>
                                </div>
                                <div className='justify-end text-right me-[-20px]'>
                                    <img src="../Images/boy.png" alt="" width={100} height={70} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const PlanningResearch = () => {
    return (
        <section className="px-10 py-20">
            <div className=' mb-8 mt-10 md:grid-cols-2 lg:w-[1400px] pt-10 rounded-2xl bg-[#BEE5ED4D] mx-auto'>
                <div className="py-10 px-20">
                    <div>
                        <h1 className="text-[32px] text-black text-bold mb-5 font-bold">Planning Research & Statistics</h1>
                        <p className="text-base text-gray mt-4 py-3">Lorem ipsum dolor sit amet consectetur. Mi enim arcu vulputate ut at. Sagittis venenatis amet sagittis sit. In.</p>
                    </div>

                    <div className='flex  h-[288.71px] p-3 gap-4 space-x-7 '>
                        <div className='bg-[#FFC74E] p-8 rounded-lg text-left w-[375.24px]'>
                            <h1 className="font-bold text-lg mt-1">Publication & Communication</h1>
                            <p className='pt-6 pb-4 text-xs'>
                                Lorem ipsum dolor sit amet consectetur. Dui
                                non sapien fringilla tristique ac aliquam <br /> donec. Luctus.
                            </p>

                            <div className='flex items-center justify-between'>
                                <div className='border border-none rounded-full bg-black w-[120px]  h-[35px] flex items-center justify-center'>
                                    <button className='font-normal text-sm text-[#FFC74E]'>Learn More</button>
                                </div>
                                <div className='mt-1 justify-end text-right me-[-32px]'>
                                    <img src="../Images/Vehicle_1.png" alt="" width={150} height={140} />
                                </div>
                            </div>
                        </div>


                        <div className='bg-[#2E7636] p-8 rounded-lg text-left w-[375.24px]'>
                            <h1 className="font-bold text-xl text-black">ICT/MIS</h1>
                            <p className='pt-6  text-xs text-white'>
                                Lorem ipsum dolor sit amet consectetur. Dui
                                non sapien fringilla tristique ac aliquam <br /> donec. Luctus.
                            </p>
                            <div className='flex items-center justify-between'>
                                <div className='border border-none rounded-full bg-white w-[110px] h-[30px] flex items-center justify-center'>
                                    <button className='font-normal text-sm text-[#2E7636]'>Learn More</button>
                                </div>
                                <div className='justify-end text-right me-[-32px]'>
                                    <img src="../Images/books.png" alt="" width={100} height={70} />
                                </div>
                            </div>
                        </div>

                        <div className='bg-black p-6 rounded-lg text-left w-[375.24px]'>
                            <h1 className="font-bold text-base text-white mt-1">Library & <br/> Documentation centre</h1>
                            <p className='pt-6 text-xs text-white '>
                                Lorem ipsum dolor sit amet consectetur. Dui
                                non sapien fringilla tristique ac aliquam donec. Luctus.
                            </p>
                            <div className='flex items-center justify-between'>
                                <div className='border border-none rounded-full bg-white w-[110px] h-[30px] flex items-center justify-center'>
                                    <button className='font-normal text-sm text-black'>Learn More</button>
                                </div>
                                <div className='justify-end text-right me-[-20px]'>
                                    <img src="../Images/boy.png" alt="" width={100} height={70} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


