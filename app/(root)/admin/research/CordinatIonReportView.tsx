import React, { useState } from 'react'
import CordinationReportTable from './_components/table/CordinationReportTable'
import { CordinationReportTablecolumns } from './_components/table/column'
import ReportForm from './_components/forms/ReportForm'

const CordinationReportView = () => {
  const [createReport, setCreateReport] = useState<boolean>(false)

  return (
    <div className='w-full min-h-screen bg-[#f9fafb] p-10'>
    <div className='w-full min-h-[70vh]'>
      {createReport ? <ReportForm setCreateReport={setCreateReport}/> : <>
        <div>
            <p className='text-[#374151] text-[24px] leading-[30px] font-bold font-[Montserrat]'>Cordination Report</p>
            <p className='text-[#374151] text-[18px] leading-[32.4px] font-normal font-[Montserrat]'>Here’s a list of all reports created</p>
        </div>
        <div className='w-full min-h-[70vh] bg-white rounded-md mt-5'>
           <CordinationReportTable columns={CordinationReportTablecolumns} data={[]} setCreateReport={setCreateReport}/>
        </div>
      </>}
    </div>
</div>
  )
}

export default CordinationReportView