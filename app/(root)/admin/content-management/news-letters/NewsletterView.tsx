"use client"
import React, { useState } from 'react'
import { ContentManagementBlogscolumns } from '../blogs/_components/table/column';
import NewsLetterForm from './_components/NewsLetterForm';
import NewsLettersTable from './_components/table/NewsLettersTable';

const NewsletterView = () => {
    const [createNewNewsletter, setCreateNewNewsletter] = useState<boolean>(false)

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

       {createNewNewsletter ? <NewsLetterForm setCreateNewNewsletter={setCreateNewNewsletter} /> : <>
                        <div>
            <p className='text-[#374151] text-[24px] leading-[30px] font-bold font-[Montserrat]'>News letters</p>
            <p className='text-[#374151] text-[18px] leading-[32.4px] font-normal font-[Montserrat]'>Here’s a list of all news letters created</p>
        </div>
        <div className='w-full min-h-[70vh] bg-white rounded-md mt-5'>
            <NewsLettersTable columns={ContentManagementBlogscolumns} data={ContentManagementBlogsTableData ?? []} setCreateNewNewsletter={setCreateNewNewsletter}/>
        </div>
        </>}
    </div>
</div>
  )
}

export default NewsletterView