"use client"
import React, { useState } from 'react'
import { ContentManagementBlogscolumns } from '../blogs/_components/table/column';
import ReportForm from './_components/ReportForm';
import ReportsTable from './_components/table/ReportsTable';

const ReportsView = () => {
    const [createNewReport, setCreateNewReport] = useState<boolean>(false)

    const ContentManagementBlogsTableData = [ {
        checkbox: "",
        title: "string",
        authorName: "string",
        dateCreated: "string",
        authorEmail: "string",
        authorPhoneNumber: "string",
        action: "any"
      }];
  return (
    <div className='w-full min-h-screen bg-[#f9fafb] p-10'>
    <div className='w-full min-h-[70vh]'>

       {createNewReport ? <ReportForm setCreateNewReport={setCreateNewReport} /> : <>
                        <div>
            <p className='text-[#374151] text-[24px] leading-[30px] font-bold font-[Montserrat]'>Reports</p>
            <p className='text-[#374151] text-[18px] leading-[32.4px] font-normal font-[Montserrat]'>Here’s a list of all reports created</p>
        </div>
        <div className='w-full min-h-[70vh] bg-white rounded-md mt-5'>
            <ReportsTable columns={ContentManagementBlogscolumns} data={ContentManagementBlogsTableData ?? []} setCreateNewReport={setCreateNewReport}/>
        </div>
        </>}
    </div>
</div>
  )
}

export default ReportsView