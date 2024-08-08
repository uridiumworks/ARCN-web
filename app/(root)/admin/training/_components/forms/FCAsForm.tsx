"use client"
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import React, { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form';
import * as z from "zod";
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FiUploadCloud } from 'react-icons/fi';
import dynamic from 'next/dynamic';// Import the styles
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';

interface Props {
    setCreateFCAs: React.Dispatch<React.SetStateAction<boolean>>;
}


const formSchema = z.object({
    collegeName: z.string().min(3, { message: "college Name must be at least 3 characters.", }),
    phoneNumber: z.string().min(11, { message: "Phone Number must be at least 11 characters.", }),
    email: z.string().min(3, { message: "Email must be at least 3 characters." }).email({ message: "Invalid email format." }),
    website: z.string().min(3, { message: "Website must be at least 3 characters." }).url({ message: "Invalid website URL." }),
    address: z.string().min(3, { message: "Address must be at least 3 characters." }),
    state: z.string().min(3, { message: "Address must be at least 3 characters." }),
    lga: z.string().min(3, { message: "Address must be at least 3 characters." }),
    dateEstablished: z.string().min(3, { message: "Date Established must be provided." }),
    dateJoined: z.string().min(3, { message: "Date Joined must be provided." }),
    uploadBanner: z.any(),
    blogPosttext: z.any(),
})

const FCAsForm = ({setCreateFCAs}: Props) => {
    const reactQuillRef = useRef<any>(null)
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            collegeName: "",
            phoneNumber: "",
            email: "",
            website: "",
            address: "", 
            state: "", 
            lga: "", 
            dateEstablished: "", 
            dateJoined: "", 
            uploadBanner: "",
            blogPosttext: "",
        },
    });


    async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
    }
  return (
    <div>
            <div className='w-full flex justify-end items-center'>
                <Button onClick={() => setCreateFCAs(false)} className='bg-white text-black border-2 border-[#dcdee6] hover:bg-white hover:text-black'>Go back</Button>
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} autoComplete="current-password">
                    <div className="w-full flex justify-start gap-5 mt-5">
                        <div className='w-[70%] grid grid-cols-1 gap-6'>
                            <FormField
                                control={form.control}
                                name="collegeName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Institute Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                type="text"
                                                autoComplete="new-password"
                                                placeholder='Enter Title'
                                                className="bg-white outline-none"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className='w-[100%] grid grid-cols-2 gap-3'>
                                <FormField
                                    control={form.control}
                                    name="phoneNumber"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Phone Number</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    type="text"
                                                    autoComplete="new-password"
                                                    placeholder='Enter Title'
                                                    className="bg-white outline-none"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    type="email"
                                                    autoComplete="new-password"
                                                    placeholder='Enter Title'
                                                    className="bg-white outline-none"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className='w-[100%] grid grid-cols-2 gap-3'>
                                <FormField
                                    control={form.control}
                                    name="website"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Website</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    type="text"
                                                    autoComplete="new-password"
                                                    placeholder='Enter website url'
                                                    className="bg-white outline-none"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="address"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Address</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    type="email"
                                                    autoComplete="new-password"
                                                    placeholder='Enter Title'
                                                    className="bg-white outline-none"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className='w-[100%] grid grid-cols-2 gap-3'>
                                <FormField
                                    control={form.control}
                                    name="state"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>State</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    type="text"
                                                    autoComplete="new-password"
                                                    placeholder='Enter website url'
                                                    className="bg-white outline-none"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="lga"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>LGA</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    type="email"
                                                    autoComplete="new-password"
                                                    placeholder='Enter Title'
                                                    className="bg-white outline-none"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className='w-[100%] grid grid-cols-2 gap-3'>
                                <FormField
                                    control={form.control}
                                    name="dateEstablished"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Date Established</FormLabel>
                                            <FormControl>
                                            <Input
                                                    {...field}
                                                    type="date"
                                                    autoComplete="new-password"
                                                    placeholder='DD/MM/YYYY'
                                                    className="bg-white outline-none"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="dateJoined"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Date Joined</FormLabel>
                                            <FormControl>
                                            <Input
                                                    {...field}
                                                    type="date"
                                                    autoComplete="new-password"
                                                    placeholder='DD/MM/YYYY'
                                                    className="bg-white outline-none"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <FormField
                                control={form.control}
                                name="uploadBanner"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Upload Logo</FormLabel>
                                        <FormControl>
                                            <>
                                                <div className='w-full h-[78px] flex justify-center items-center bg-[#f4f5f5] cursor-pointer border-dashed border-[3px] border-[#d3d3d3]'>
                                                    <div>
                                                        <div className='w-full flex justify-center items-center gap-3'>
                                                            <FiUploadCloud size={"16px"} />
                                                            <span className='font-[Montserrat] font-bold text-xs text-[#0B2545]'>Click to upload image</span>
                                                            <span className='font-[Montserrat] font-medium text-xs text-[#475467] leading-[20px]'>or drag and drop</span>
                                                        </div>
                                                        <div className='w-full flex justify-center items-center gap-3'>
                                                            <span className='font-[Montserrat] font-normal text-xs leading-[18px] text-[#475467]'>SVG, PNG, JPG or GIF (max. 800x400px)</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                                   <FormField
                                control={form.control}
                                name="blogPosttext"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Blog Post Editor</FormLabel>
                                        <FormControl>
                                            <>
                                                {isMounted && <ReactQuill
                                                    // ref={reactQuillRef}
                                                    theme="snow"
                                                    value={field.value}
                                                    onChange={field.onChange}
                                                    modules={{
                                                        toolbar: {
                                                            container: [
                                                                [{ header: [1, 2, 3, 4, false] }],
                                                                ['bold', 'italic', 'underline'],
                                                                [{ align: [] }],
                                                                ['image', 'clean'], // Add image button
                                                            ],
                                                            // handlers: {
                                                            //     image: imageHandler, // Set custom image handler
                                                            // },
                                                        },
                                                    }} />}
                                            </>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                                <Button type="submit" className="w-full bg-[#30a85f] text-[#fff] border-2 border-[#dcdee6] flex justify-center items-center gap-2 px-5 hover:bg-[#30a85f] hover:text-[#fff]"><span className="text-[14px] font-noraml">Submit</span></Button>
                        </div>
                    </div>
                </form>
            </Form>
        </div>
  )
}

export default FCAsForm