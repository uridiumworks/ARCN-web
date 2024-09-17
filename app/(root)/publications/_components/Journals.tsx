import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React from 'react'
import Image from 'next/image'
import { journalData } from './data'


type JournalProps = {
    id: number,
    imgUrl: string,
    title: string,
    desc: string,
    author: string,
    role: string,
    authorImg: string
}

const Journals = () => {
    return (
        <section className='px-20 py-20'>
            <div className=''>
                <h3 className="text-3xl font-bold text-[#1B222B]">Journals</h3>
                <p className="text-sm text-gray pt-2">
                    Lorem ipsum dolor sit amet consectetur. Elementum ullamcorper quis etiam euismod quisque montes arcu risus. Magnis posuere tincidunt elit <br />  ultrices tortor. Sit semper cras sed duis tortor tempor amet gravida. Rhoncus quis nisl etiam tortor.</p>
                <div className='border flex items-center gap-3 rounded-md px-3 w-full md:w-[400px] mt-5'>
                    <Search /> <Input className='w-full outline:none border-0' type='text' placeholder='Search for journals' />
                </div>
            </div>

            <div className='py-10 grid grid-cols-1 md:grid-cols-4 gap-5'>
                {journalData.map((journal: JournalProps) => (
                    <div key={journal.id} className='py-5'>
                        <Image src={journal.imgUrl} alt='image' width={384} height={300}/>
                        <h1 className='text-[20px] font-[700] py-1 font-montserrat'>{journal.title}</h1>
                        <p className='text-[16px] text-[##858C95e] '>{journal.desc}</p>
                    </div>
                ))}
            </div>
        </section>

    )
}

export default Journals
