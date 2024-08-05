"use client"
import React, { useState } from 'react'
import ContentMgtBlogTable from './_components/table/ContentMgtBlogTable'
import { ContentManagementBlogscolumns } from './_components/table/column'
import NewBlogForm from './_components/NewBlogForm'

const ContentMgtBlogView = () => {
    const [createNewBlog, setCreateNewBlog] = useState<boolean>(false)
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

               {createNewBlog ? <NewBlogForm setCreateNewBlog={setCreateNewBlog} /> : <>
                                <div>
                    <p className='text-[#374151] text-[24px] leading-[30px] font-bold font-[Montserrat]'>Blogs</p>
                    <p className='text-[#374151] text-[18px] leading-[32.4px] font-normal font-[Montserrat]'>Here’s a list of all blogs created</p>
                </div>
                <div className='w-full min-h-[70vh] bg-white rounded-md mt-5'>
                    <ContentMgtBlogTable columns={ContentManagementBlogscolumns} data={ContentManagementBlogsTableData ?? []} setCreateNewBlog={setCreateNewBlog}/>
                </div>
                </>}
            </div>
        </div>
    )
}

export default ContentMgtBlogView