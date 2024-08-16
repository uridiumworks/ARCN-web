"use client";


import React, { useEffect, useState } from 'react'
import BlogTable from './table/BlogTable'
import { Blogscolumns } from './table/column'
import { data } from './table/dummyData'
import { HiDotsHorizontal } from 'react-icons/hi'
import { BsxSchoolIcon, Calendaricon, HealthIcon, JournalIcon, MarketResearchIcon, MaterialSymbols } from '@/assets/icons';
import { useDashboardData } from '@/hooks/Dashboard.hooks';
import { useBlogsData } from '@/hooks/Blogs.hooks';

const ViewBlogDashboard = () => {
    const [token, setToken] = useState<string | null>(null)
    const [blogArray, setBlogArray] = useState<any[]>([])
    const {loading, dashboard, error} = useDashboardData(token)
    const {loading: loadingBlogs, blogs, error: errorBlogs} = useBlogsData(token)

    console.log(blogs)

    useEffect(() => {
        const userToken = localStorage.getItem("userToken");
        setToken(userToken)
    },[])


    useEffect(() => {
        if(blogs?.length > 0){
            const adjustedBlogs = blogs?.map((blog:any, index:number) => {
                let objData = {
                    title: blog?.title,
                    authorName: blog?.authorName,
                    dateCreated: blog?.publishDate,
                    authorEmail: blog?.authorEmail,
                    authorPhoneNumber: blog?.authorPhoneNumber,
                    action: null,
                    ...blog
                }
                return objData;
            })
            setBlogArray(adjustedBlogs)
        }
    },[blogs])

    if (loading ) return <p>Loading....</p>
    return (
        <>
            <div className='w-full min-h-screen bg-[#f9fafb] p-10'>
                <div className='w-full h-[auto] rounded-lg overflow-hidden border-2 border-[#d1d9e2]'>
                    <div className='w-full h-[100px] bg-[#d6e8be] p-5 border-b-2 border-[#d1d9e2] flex justify-between items-center'>
                        <div>
                            <p className='text-xl text-[#30a85f]'>Dashboard</p>
                            <p className='text-md text-[#667582]'>Overview of all of your activities</p>
                        </div>
                        <div>
                            <HiDotsHorizontal color='#667582' cursor={"pointer"} />
                        </div>
                    </div>
                    {/* <div className='w-full h-[50vh] grid grid-cols-3'> */}
                    <div className='w-full h-[auto] grid grid-cols-3'>
                        <div className='w-full h-full border-2 border-[#d1d9e2] p-5 flex justify-between items-start'>
                            <div className='w-fit h-full'>
                                <p className='text-lg text-[#667582]'>Total NARIS</p>
                                <p className='text-2xl text-[#667582]'>{dashboard?.totalNARs}</p>
                                <p className='text-md text-[#667582]'>{dashboard?.narGrowth > 0 ? `+${dashboard?.narGrowth}` : dashboard?.narGrowth}% monthly growth</p>
                            </div>
                            <div className='w-fit h-fit p-2 bg-[#d6e8be] rounded-md'>
                                <MarketResearchIcon className="scale-95 text-[#2E7636]"/>
                            </div>
                        </div>
                        <div className='w-full h-full border-2 border-[#d1d9e2] p-5 flex justify-between items-start'>
                            <div className='w-fit h-full'>
                                <p className='text-lg text-[#667582]'>Total ARCOs</p>
                                <p className='text-2xl text-[#667582]'>364.25</p>
                                <p className='text-md text-[#667582]'>+2% monthly growth</p>
                            </div>
                            <div className='w-fit h-fit p-2 bg-[#d6e8be] rounded-md'>
                                <MaterialSymbols className="scale-95 text-[#2E7636]"/>
                            </div>
                        </div>
                        <div className='w-full h-full border-2 border-[#d1d9e2] p-5 flex justify-between items-start'>
                            <div className='w-fit h-full'>
                                <p className='text-lg text-[#667582]'>Active Programs/Training</p>
                                <p className='text-2xl text-[#667582]'>{dashboard?.totalPrograms}</p>
                                <p className='text-md text-[#667582]'>{dashboard?.programGrowth > 0 ? `+${dashboard?.programGrowth}` : dashboard?.programGrowth}% monthly growth</p>
                            </div>
                            <div className='w-fit h-fit p-2 bg-[#d6e8be] rounded-md'>
                                <HealthIcon className="scale-95 text-[#2E7636]"/>
                            </div>
                        </div>
                        <div className='w-full h-full border-2 border-[#d1d9e2] p-5 flex justify-between items-start'>
                            <div className='w-fit h-full'>
                                <p className='text-lg text-[#667582]'>Total FCAs</p>
                                <p className='text-2xl text-[#667582]'>{dashboard?.totalFCAs}</p>
                                <p className='text-md text-[#667582]'>{dashboard?.fcaGrowth > 0 ? `+${dashboard?.fcaGrowth}` : dashboard?.fcaGrowth}% monthly growth</p>
                            </div>
                            <div className='w-fit h-fit p-2 bg-[#d6e8be] rounded-md'>
                                <BsxSchoolIcon className="scale-95 text-[#2E7636]"/>
                            </div>
                        </div>
                        <div className='w-full h-full border-2 border-[#d1d9e2] p-5 flex justify-between items-start'>
                            <div className='w-fit h-full'>
                                <p className='text-lg text-[#667582]'>Total Publications</p>
                                <p className='text-2xl text-[#667582]'>645.48</p>
                                <p className='text-md text-[#667582]'>+2% monthly growth</p>
                            </div>
                            <div className='w-fit h-fit p-2 bg-[#d6e8be] rounded-md'>
                                <JournalIcon className="scale-95 text-[#2E7636]"/>
                            </div>
                        </div>
                        <div className='w-full h-full border-2 border-[#d1d9e2] p-5 flex justify-between items-start'>
                            <div className='w-fit h-full'>
                                <p className='text-lg text-[#667582]'>Current Events</p>
                                <p className='text-2xl text-[#667582]'>{dashboard?.totalEvents}</p>
                                <p className='text-md text-[#667582]'>{dashboard?.eventGrowth > 0 ? `+${dashboard?.eventGrowth}` : dashboard?.eventGrowth}% monthly growth</p>
                            </div>
                            <div className='w-fit h-fit p-2 bg-[#d6e8be] rounded-md'>
                                <Calendaricon className="scale-95 text-[#2E7636]"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full min-h-[40vh] rounded-lg overflow-hidden bg-white mt-5 text-[#667582]'>
                    <div className='w-full h-[100px] bg-[#d6e8be] p-5 border-b-2 border-[#d1d9e2] flex justify-between items-center'>
                        <div>
                            <p className='text-xl text-[#2e3646]'>Blog</p>
                            <p className='text-md text-[#667582]'>Most Recent Blogs</p>
                        </div>
                        <div>
                            <p className='text-md text-[#30a85f]'>View all</p>
                        </div>
                    </div>
                    <BlogTable columns={Blogscolumns} data={blogArray ?? []} />
                </div>
            </div>
        </>
    )
}

export default ViewBlogDashboard