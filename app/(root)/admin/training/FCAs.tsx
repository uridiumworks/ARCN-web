import React from 'react'
import FCAsTable from './_components/table/FCAsTable'
import { FCAscolumns } from './_components/table/columns'

const FCAs = () => {
  return (
    <div className='w-full min-h-screen bg-[#f9fafb] p-10'>
    <div className='w-full min-h-[70vh]'>
        <div>
            <p className='text-[#374151] text-[24px] leading-[30px] font-bold font-[Montserrat]'>Federal College of Agricultures</p>
            <p className='text-[#374151] text-[18px] leading-[32.4px] font-normal font-[Montserrat]'>Here’s a list of all your research institutes</p>
        </div>
        <div className='w-full min-h-[70vh] bg-white rounded-md mt-5'>
           <FCAsTable columns={FCAscolumns} data={[]}/>
        </div>
    </div>
</div>
  )
}

export default FCAs