import React from 'react'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { reportsData } from './data'
import Image from 'next/image'
import { MapPin } from 'lucide-react'

type reportsProps = {
    id: number,
    imgUrl: string,
    title: string,
    desc: string,
    location: string
}

const Reports = () => {
    return (
        <section className='px-20 py-20'>
            <div className=''>
                <h3 className="text-3xl font-bold text-[#1B222B]">Reports</h3>
                <p className="text-sm text-gray pt-2">
                    Lorem ipsum dolor sit amet consectetur. Elementum ullamcorper quis etiam euismod quisque montes arcu risus. Magnis posuere tincidunt elit <br />  ultrices tortor. Sit semper cras sed duis tortor tempor amet gravida. Rhoncus quis nisl etiam tortor.</p>
                <div className='border flex items-center gap-3 rounded-md px-3 w-full md:w-[400px] mt-5'>
                    <Search /> <Input className='w-full outline:none border-0' type='text' placeholder='Search for journals' />
                </div>
            </div>

            <div className='py-10 grid grid-cols-1 md:grid-cols-2 gap-5'>
                {reportsData.map((reports: reportsProps) => (
                    <div key={reports.id} className='border flex py-8 px-12 justify-between'>
                        <div>
                            <h1 className='text-[18px] font-[700] py-1 font-montserrat'>{reports.title}</h1>
                            <p className='text-[14px] text-[##858C95e] '>{reports.desc}</p>
                            <div className=' text-[#1315175C] flex items-center py-2'>
                                <MapPin />
                                <p className='text-[14px] text-[##858C95e] '>{reports.location}</p>
                            </div>
                            <div className='flex gap-5 mt-4 '>
                                <div className=' border w-[100px] h-[40px] rounded-lg'>
                                    <button className=' bg-white text-[#07A460] py-2 px-2'> Download </button>
                                </div>
                                <div className='bg-[#07A460] border w-[100px] h-[40px] rounded-lg flex gap-5'>
                                    <button className=' text-white py-2 px-8'> view </button>
                                </div>
                            </div>
                        </div>
                        <div className=''>
                            <Image src={reports.imgUrl} alt='image' width={201} height={201} className='rounded-lg'/>
                        </div> 

                    </div>
                ))}
            </div>
        </section>
    )
}

export default Reports
