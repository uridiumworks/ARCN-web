"use client"

import React, { useState } from 'react'
import PublicationsMotto from './_components/PublicationsMotto'
import Journals from './_components/Journals'
import FundingMotto from './_components/fundingMotto'
import JournalsMotto from './_components/journals-motto'
import Soil from './_components/Soil'
import Text from './_components/text'
import { journalData } from './_components/data'
import Link from 'next/link'
import Image from 'next/image'
import { Input } from '@/components/ui/input'


type JournalProps = {
  id: number,
  imgUrl: string,
  title: string,
  desc: string,
  author: string,
  role: string,
  authorImg: string
}


const Publications = () => {


  return (
    <section className='px-3 py-10 md:py-20 w-full md:w-10/12 mx-auto'>
      <div className=''>
        <h3 className="text-3xl font-bold text-[#1B222B]">Journals</h3>
        <p className="text-sm text-gray pt-2">Lorem ipsum dolor sit amet consectetur. Elementum ullamcorper quis etiam euismod quisque montes arcu risus. Magnis posuere tincidunt elit <br />  ultrices tortor. Sit semper cras sed duis tortor tempor amet gravida. Rhoncus quis nisl etiam tortor.</p>
        <Input className='outline:none border w-full md:w-[400px] mt-5' type='search' placeholder='Search for journals' />
      </div>

      <div className='py-10 grid grid-cols-1 md:grid-cols-3 gap-5'>
        {journalData.map((journal: JournalProps) => (
          <div key={journal.id} className='py-5 space-y-3'>
            <Link href="/publications/journals">
              <Image src={journal.imgUrl} alt='image' width={384} height={300}/>
            </Link>

            <div className='space-y-2'>
              <h1 className='text-lg font-bold py-1 font-montserrat'>{journal.title}</h1>
              <p className='text-sm text-[#858C95] '>{journal.desc}</p>
            </div>

            <div className='flex gap-3 pt-5'>
              <Image src={journal.authorImg} alt='image' className='w-[40px]' width={40} height={40}/>
              <div className=''>
                <h1 className='text-[#323539] font-semibold text-sm'>David Munsan</h1>
                <p className='text-[#858C95]'>Regional Marketing Developer</p>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Publications 