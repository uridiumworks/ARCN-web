"use client"
import React, { useState } from 'react'
import { ContentManagementBlogscolumns } from '../blogs/_components/table/column';
import NewJournalForm from './_components/NewJournalForm';
import JournalTable from './_components/table/JournalTable';

const JournalView = () => {
    const [createNewJournal, setCreateNewJournal] = useState<boolean>(false)

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

       {createNewJournal ? <NewJournalForm setCreateNewJournal={setCreateNewJournal} /> : <>
                        <div>
            <p className='text-[#374151] text-[24px] leading-[30px] font-bold font-[Montserrat]'>Journals</p>
            <p className='text-[#374151] text-[18px] leading-[32.4px] font-normal font-[Montserrat]'>Here’s a list of all journals created</p>
        </div>
        <div className='w-full min-h-[70vh] bg-white rounded-md mt-5'>
            <JournalTable columns={ContentManagementBlogscolumns} data={ContentManagementBlogsTableData ?? []} setCreateNewJournal={setCreateNewJournal}/>
        </div>
        </>}
    </div>
</div>
  )
}

export default JournalView