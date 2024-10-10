import React from 'react'
import { CircleCheck } from 'lucide-react'
import Image from 'next/image'

const RecordsUnit = () => {
    return (
        <section className='w-full'>
            <div className='bg-[#2E7636] h-[400px] text-white flex justify-between' >
                <div className='space-y-8 py-24 px-32'>
                    <h2 className='font-bold text-2xl text-[32px]'>Records & Registry Unit</h2>
                    <p className=''>Lorem ipsum dolor sit amet consectetur. Dui non sapien fringilla tristique ac aliquam donec. Luctus.</p>
                </div >
                <div className='mt-36'>
                <Image src='../Images/books.png' alt='' width={190} height={200}/>
                </div>
            </div>
            <div>
                <Mandates1 />
                <AdministrationDepartment1 />
            </div>
        </section>
    )
}

export default RecordsUnit

const Mandates1 = () => {
    return (
        <div className='px-10 py-14 ml-24'>
            <h2 className='font-semibold text-[32px]'>Mandates</h2>
            <div className='font-normal py-6 '>
                <div className='flex items-center gap-2 justify-start' ><CircleCheck size={24} />
                    <p className='py-4'>Responsible for keying in of registry’s data, leave roaster, variation advice and other related matters;</p>
                </div>
                <div className='flex items-center gap-2 justify-start' ><CircleCheck size={24} />
                    <p className='py-4'>Coordination of pension matters, retirement issues and group life insurance of staff’</p>
                </div>
                <div className='flex items-center gap-2 justify-start' ><CircleCheck size={24} />
                    <p className='py-4'>Issuance of assumption/resumption of duty certificates;</p>
                </div>
                <div className='flex items-center gap-2 justify-start' ><CircleCheck size={24} />
                    <p className='py-4'>Responsible for receiving and dispatching of official correspondence and mails;</p>
                </div>
                <div className='flex items-center gap-2 justify-start' ><CircleCheck size={24} />
                    <p className='py-4'>Update of nominal roll and prepare records of service for all staff of the Council;</p>
                </div>
                <div className='flex items-center gap-2 justify-start' ><CircleCheck size={24} />
                    <p className='py-4'>Taking custody of all Council’s records.</p>
                </div>
            </div>
        </div>

    )
}

const AdministrationDepartment1 = () => {
    return (

        <div className=' mb-24 mt-10 md:grid-cols-2 lg:w-[1400px] pt-10 rounded-2xl bg-[#F6E8414D] mx-auto'>
            <div className="py-10 px-20">
                <div>
                    <h1 className="text-[32px] text-black text-bold mb-5 font-bold">Other Administration Department</h1>
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

                <div className='bg-[#75CDFD] border p-6 rounded-lg text-left w-[375px]'>
                    <h1 className="font-bold text-xl mt-1">Security Unit</h1>
                    <p className='pt-5 text-xs mt-4 pb-3'>
                        Lorem ipsum dolor sit amet consectetur. Dui <br />
                        non sapien fringilla tristique ac aliquam donec. Luctus.
                    </p>
                    <div className='border border-none rounded-full bg-white w-[140px] mt-8 h-[40px] flex items-center justify-center'>
                        <button className='font-normal text-sm text-[#75CDFD]'>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
