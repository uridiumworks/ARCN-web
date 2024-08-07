"use client"
import React, { useState } from 'react'
import SupervisionReportTable from './_components/table/SupervisionReportTable'
import { SupervisionReportTablecolumns } from './_components/table/columns'
import SupervisionReportForm from './_components/forms/SupervisionReportForm'

const SupervisionReport = () => {
  const [createSupervisionReport, setCreateSupervisionReport] = useState<boolean>(false)

  return (
    <div className='w-full min-h-screen bg-[#f9fafb] p-10'>
    <div className='w-full min-h-[70vh]'>
     { createSupervisionReport ? <SupervisionReportForm setCreateSupervisionReport={setCreateSupervisionReport}/> : <>
        <div>
            <p className='text-[#374151] text-[24px] leading-[30px] font-bold font-[Montserrat]'>Supervision Report</p>
            <p className='text-[#374151] text-[18px] leading-[32.4px] font-normal font-[Montserrat]'>Here’s a list of all reports created</p>
        </div>
        <div className='w-full min-h-[70vh] bg-white rounded-md mt-5'>
           <SupervisionReportTable columns={SupervisionReportTablecolumns} data={[]} setCreateSupervisionReport={setCreateSupervisionReport}/>
        </div>
      </>}
    </div>
</div>
  )
}

export default SupervisionReport