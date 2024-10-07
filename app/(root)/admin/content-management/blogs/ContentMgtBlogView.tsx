"use client"
import React, { useEffect, useState } from 'react'
import ContentMgtBlogTable from './_components/table/ContentMgtBlogTable'
import { ContentManagementBlogscolumns } from './_components/table/column'
import NewBlogForm from './_components/NewBlogForm'
import { useBlogsData } from '@/hooks/Blogs.hooks'

const ContentMgtBlogView = () => {
    const [token, setToken] = useState<string | null>(null)
    const [blogArray, setBlogArray] = useState<any[]>([])
    const [triggerRefetch, setTriggerRefetch] = useState<boolean>(false)
    const [createNewBlog, setCreateNewBlog] = useState<boolean>(false)
    const {loading, blogs, error} = useBlogsData(token, triggerRefetch)

    useEffect(() => {
        const userToken = localStorage.getItem("userToken");
        setToken(userToken)
    },[])

    useEffect(() => {
         setTriggerRefetch(!triggerRefetch)
     },[])

    useEffect(() => {
        if(blogs?.length > 0){
            setBlogArray(blogs)
        }
    },[blogs])
    if (loading && blogs?.length < 1) return <p>Loading....</p>

    return (
        <div className='w-full lg:min-h-screen bg-[#f9fafb] p-10'>
            <div className='w-full lg:min-h-[70vh]'>

               {createNewBlog ? <NewBlogForm setCreateNewBlog={setCreateNewBlog} /> : <>
                                <div>
                    <p className='text-[#374151] text-[24px] leading-[30px] font-bold font-[Montserrat]'>Blogs</p>
                    <p className='text-[#374151] text-[18px] leading-[32.4px] font-normal font-[Montserrat]'>Here’s a list of all blogs created</p>
                </div>
                <div className='w-full lg:min-h-[70vh] bg-white rounded-md mt-5'>
                    <ContentMgtBlogTable columns={ContentManagementBlogscolumns} data={blogArray ?? []} setCreateNewBlog={setCreateNewBlog}/>
                </div>
                </>}
            </div>
        </div>
    )
}

export default ContentMgtBlogView