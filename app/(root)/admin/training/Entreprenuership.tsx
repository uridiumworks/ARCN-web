import React from 'react'
import { Entreprenuershipcolumns } from './_components/table/columns'
import EntreprenuershipTable from './_components/table/EntreprenuershipTable'

const Entreprenuership = () => {
  return (
    <div className='w-full min-h-screen bg-[#f9fafb] p-10'>
    <div className='w-full min-h-[70vh]'>
        <div>
            <p className='text-[#374151] text-[24px] leading-[30px] font-bold font-[Montserrat]'>Entrepreneurship Programs</p>
            <p className='text-[#374151] text-[18px] leading-[32.4px] font-normal font-[Montserrat]'>Here’s a list of all programs created</p>
        </div>
        <div className='w-full min-h-[70vh] bg-white rounded-md mt-5'>
           <EntreprenuershipTable columns={Entreprenuershipcolumns} data={[]}/>
        </div>
    </div>
</div>
  )
}

export default Entreprenuership