import React from 'react'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { newsletterData } from './data'
import Image from 'next/image'



type NewsletterProps = {
    id: number,
    imgUrl: string,
    title: string,
    desc: string,
}

const Newsletter = () => {
  return (
    <section className='px-20 py-20'>
            <div className=''>
                <h3 className="text-3xl font-bold text-[#1B222B]">Newsletter</h3>
                <p className="text-sm text-gray pt-2">
                    Lorem ipsum dolor sit amet consectetur. Elementum ullamcorper quis etiam euismod quisque montes arcu risus. Magnis posuere tincidunt elit <br />  ultrices tortor. Sit semper cras sed duis tortor tempor amet gravida. Rhoncus quis nisl etiam tortor.</p>
                <div className='border flex items-center gap-3 rounded-md px-3 w-full md:w-[400px] mt-5'>
                    <Search /> <Input className='w-full outline:none border-0' type='text' placeholder='Search for journals' />
                </div>
            </div>

            <div className='py-10 grid grid-cols-1 md:grid-cols-4 gap-5'>
                {newsletterData.map((newsletter: NewsletterProps) => (
                    <div key={newsletter.id} className=' space-y-4 border-x-3'>
                        <Image src={newsletter.imgUrl} alt='image' width={384} height={200}/>
                        <h1 className='text-[20px] font-[700] py-1 text-center font-montserrat'>{newsletter.title}</h1>
                        <p className='text-[14px] text-[##858C95e] text-center py-3 '>{newsletter.desc}</p>

                        <div className='border  bg-[#0C513F0D w-[300px] h-[48px] mx-auto'>
                            <button className='text-[#0C513F] py-3 px-24'>Read more</button>
                        </div>
                    </div>
                ))}
            </div>
            </section>
  )
}

export default Newsletter
