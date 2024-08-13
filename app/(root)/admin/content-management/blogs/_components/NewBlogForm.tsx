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

interface Props {
    setCreateNewBlog: React.Dispatch<React.SetStateAction<boolean>>;
}

const formSchema = z.object({
    title: z.string().min(3, { message: "Title must be at least 3 characters.", }),
    category: z.string().min(1, { message: "Category must be selected", }),
    uploadBanner: z.any(),
    blogPosttext: z.any(),
    authorName: z.string().min(3, { message: "Author Name must be at least 3 characters.", }),
    authorEmail: z.string().min(3, { message: "Author Email must be at least 3 characters." }).email({ message: "Invalid email format." }),
    authorPhoneNumber: z.string().min(11, { message: "Author Phone Number must be 11 characters." }),
    publishDate: z.string().min(3, { message: "Publish Date must be provided" }),
    visibility: z.string().min(3, { message: "Visibility must be provided" }),
    bannerUsage: z.boolean().refine(value => value === true, {
        message: "Visibility must be provided",
    }),
})

const NewBlogForm = ({ setCreateNewBlog }: Props) => {
    const reactQuillRef = useRef<any>(null)
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            category: "blogs",
            uploadBanner: "",
            blogPosttext: "",
            authorName: "",
            authorEmail: "",
            authorPhoneNumber: "",
            publishDate: "",
            visibility: "",
            bannerUsage: false,
        },
    });

    // const imageHandler = () => {
    //     const input:any = document.createElement('input');
    //     input.setAttribute('type', 'file');
    //     input.setAttribute('accept', 'image/*');
    //     input.click();

    //     input.onchange = async () => {
    //       const file = input.files[0];
    //       const formData = new FormData();
    //       formData.append('file', file);

    //       // Replace with your image upload API endpoint
    //       const response = await fetch('/api/upload', {
    //         method: 'POST',
    //         body: formData,
    //       });

    //       const data = await response.json();
    //       const imageUrl = data.url; // Assuming your API returns the image URL

    //       const quill = reactQuillRef.current.getEditor();
    //       const range = quill.getSelection();
    //       quill.insertEmbed(range.index, 'image', imageUrl);
    //     };
    //   };

    // const imageHandler = async () => {
    //     const input = document.createElement('input');
    //     input.setAttribute('type', 'file');
    //     input.setAttribute('accept', 'image/*');
    //     input.click();
    
    //     input.onchange = async () => {
    //       const file = input.files?.[0];
    //       if (!file) return;
    
    //       const formData = new FormData();
    //       formData.append('file', file);
    
    //       // Upload the image to your server or cloud storage
    //       const uploadUrl = 'YOUR_UPLOAD_URL'; // Replace with your upload URL
    //       const response = await fetch(uploadUrl, {
    //         method: 'POST',
    //         body: formData,
    //       });
    
    //       const data = await response.json();
    //       const imageUrl = data.url; // Adjust based on your response structure
    
    //       // Create a new HTML string with the image included
    //       const newValue = `${field.value}<img src="${imageUrl}" alt="Image" />`;
          
    //       // Update the editor's value
    //       field.onChange(newValue);
    //     };
    //   };



    async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
    }
    return (
        <div>
            <div className='w-full flex justify-end items-center'>
                <Button onClick={() => setCreateNewBlog(false)} className='bg-white text-black border-2 border-[#dcdee6] hover:bg-white hover:text-black'>Go back</Button>
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} autoComplete="current-password">
                    <div className="w-full flex justify-start gap-5 mt-5">
                        <div className='w-[70%] grid grid-cols-1 gap-6'>
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Title</FormLabel>
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
                                name="category"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Category</FormLabel>
                                        <FormControl>
                                            <Select onValueChange={field.onChange}
                                                defaultValue={field.value}
                                                disabled={true}
                                            >
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Blogs">{"Blogs"}</SelectValue>
                                                </SelectTrigger>
                                                <SelectContent
                                                    className="bg-[#f3f3f3]"
                                                >
                                                    <SelectItem value="blogs">Blogs</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="uploadBanner"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Upload banner</FormLabel>
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
                                                {/* {isMounted && <ReactQuill
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
                                                    }} />} */}
                                            </>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className='w-[30%] min-h-[70vh] border-[1px] border-[#dcdee6] py-5 px-3'>
                            <p className="font-[Montserrat] font-bold text-base leading-[19px] text-[#4D4D4D]">Publish</p>
                            <div className='grid grid-cols-1 gap-6 mt-5'>
                                <FormField
                                    control={form.control}
                                    name="authorName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>{`Author's Name`}</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    type="text"
                                                    autoComplete="new-password"
                                                    placeholder='Name'
                                                    className="bg-inherit outline-none"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="authorEmail"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>{`Author's Name`}</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    type="email"
                                                    autoComplete="new-password"
                                                    placeholder='Email'
                                                    className="bg-inherit outline-none"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="authorPhoneNumber"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>{`Author's Phone Number`}</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    type="text"
                                                    autoComplete="new-password"
                                                    placeholder='Phone Number'
                                                    className="bg-inherit outline-none"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="publishDate"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>{`Publish Date`}</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    type="date"
                                                    autoComplete="new-password"
                                                    placeholder='DD/MM/YYYY'
                                                    className="bg-inherit outline-none"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="visibility"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Visibility</FormLabel>
                                            <FormControl>
                                                <Select onValueChange={field.onChange}
                                                    defaultValue={field.value}
                                                >
                                                    <SelectTrigger className="w-full bg-inherit">
                                                        <SelectValue placeholder={field.value || "Select Option"}>{field.value || "Select Option"}</SelectValue>
                                                    </SelectTrigger>
                                                    <SelectContent
                                                        className="bg-[#f3f3f3]"
                                                    >
                                                        <SelectItem value="Visibility">Visibility</SelectItem>
                                                        <SelectItem value="Hidden">Hidden</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="bannerUsage"
                                    render={({ field }) => (
                                        <div className="">
                                            <FormItem>
                                                <FormControl>
                                                    <div className="items-top flex space-x-2 mt-8">
                                                        <Checkbox
                                                            id="acceptTermsAndCondition"
                                                            checked={field.value}
                                                            onCheckedChange={field.onChange}
                                                        />
                                                        <div className="grid gap-1.5 leading-none">
                                                            <label
                                                                htmlFor="acceptTermsAndCondition"
                                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                            >
                                                                Use on Homepage Banner
                                                            </label>
                                                        </div>
                                                    </div>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        </div>
                                    )}
                                />
                                <Button type="submit" className="w-full bg-[#30a85f] text-[#fff] border-2 border-[#dcdee6] flex justify-center items-center gap-2 px-5 hover:bg-[#30a85f] hover:text-[#fff]"><span className="text-[14px] font-noraml">Publish</span></Button>
                            </div>
                        </div>
                    </div>
                </form>
            </Form>
        </div>
    )
}

export default NewBlogForm