"use client";

import React, { useState } from 'react'
import FCAsTable from './_components/table/FCAsTable'
import { FCAscolumns } from './_components/table/columns'
import FCAsForm from './_components/forms/FCAsForm';

const FCAs = () => {
  const [createFCAs, setCreateFCAs] = useState<boolean>(false)

  return (
    <div className='w-full min-h-screen bg-[#f9fafb] p-10'>
    <div className='w-full min-h-[70vh]'>
      {createFCAs ? <FCAsForm setCreateFCAs={setCreateFCAs}/> : <>
        <div>
            <p className='text-[#374151] text-[24px] leading-[30px] font-bold font-[Montserrat]'>Federal College of Agricultures</p>
            <p className='text-[#374151] text-[18px] leading-[32.4px] font-normal font-[Montserrat]'>Here’s a list of all your research institutes</p>
        </div>
        <div className='w-full min-h-[70vh] bg-white rounded-md mt-5'>
           <FCAsTable columns={FCAscolumns} data={[]} setCreateFCAs={setCreateFCAs}/>
        </div>
      </>}
    </div>
</div>
  )
}

export default FCAs