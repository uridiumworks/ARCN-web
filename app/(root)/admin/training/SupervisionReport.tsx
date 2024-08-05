import React from 'react'
import SupervisionReportTable from './_components/table/SupervisionReportTable'
import { SupervisionReportTablecolumns } from './_components/table/columns'

const SupervisionReport = () => {
  return (
    <div className='w-full min-h-screen bg-[#f9fafb] p-10'>
    <div className='w-full min-h-[70vh]'>
        <div>
            <p className='text-[#374151] text-[24px] leading-[30px] font-bold font-[Montserrat]'>Supervision Report</p>
            <p className='text-[#374151] text-[18px] leading-[32.4px] font-normal font-[Montserrat]'>Here’s a list of all reports created</p>
        </div>
        <div className='w-full min-h-[70vh] bg-white rounded-md mt-5'>
           <SupervisionReportTable columns={SupervisionReportTablecolumns} data={[]}/>
        </div>
    </div>
</div>
  )
}

export default SupervisionReport