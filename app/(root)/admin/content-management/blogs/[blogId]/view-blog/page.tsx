"use client"

import { useBlogData } from '@/hooks/Blogs.hooks';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'


type Props = {
    params: { blogId: any };
};

const ViewBlog = ({ params }: Props) => {
    const [token, setToken] = useState<string | null>(null)
    const { loading, blog, error } = useBlogData(token, params?.blogId)

    useEffect(() => {
        const userToken = localStorage.getItem("userToken");
        setToken(userToken)
    }, [])

    if (loading) return <h2>Loading...</h2>
    if (error) return <h2>Error loading blog: {error}</h2>;
    if (!blog) return <h2>Blog not found</h2>;

    return (<>
      { blog?.bannerUrl && <div className='w-full h-[20vh]'>
            <Image
                src={blog?.bannerUrl}
                alt="blog banner"
                layout="responsive" // Use responsive layout for better handling
                width={1920} // Use a specific width for the responsive layout
                height={1080} // Use a specific height for the responsive layout
                className='w-full h-[20vh]'
            />
        </div>}

        <h2 className='text-center text-2xl underline'>{blog?.title}</h2>
        <div className='p-5'>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, quos. Repellat quidem delectus, itaque eum ex libero debitis reiciendis praesentium distinctio eveniet sequi provident possimus eaque officia excepturi voluptatibus consectetur.
                Pariatur mollitia illo laborum ut est natus voluptatem blanditiis reprehenderit fugiat repudiandae, repellendus magni magnam reiciendis in laudantium omnis aliquam voluptas animi consectetur officiis. Perspiciatis libero expedita ipsum aut aperiam!
                Eos mollitia beatae ducimus incidunt, repudiandae maiores molestias perferendis iure voluptate, nemo praesentium at natus sint nesciunt quod quo, itaque doloribus libero laudantium. Fugit ex nemo quidem odit odio facilis.
                Asperiores aperiam inventore veritatis ducimus qui, cum aliquam in autem impedit assumenda voluptate, id quaerat perferendis sint cumque illo fugiat laboriosam doloremque, beatae praesentium vero. Accusamus non fuga sed. Maxime?
                Incidunt ex eveniet deleniti amet quasi dolorem facilis laborum architecto sint quas pariatur aperiam rerum exercitationem fuga veniam esse dolor, excepturi voluptatem labore sapiente eaque, autem quo porro. Impedit, incidunt.
            </p>
        </div>
    </>
    )
}

export default ViewBlog