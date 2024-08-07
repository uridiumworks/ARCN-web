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
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Textarea } from '@/components/ui/textarea';

interface Props {
    setCreateEntreprenuership: React.Dispatch<React.SetStateAction<boolean>>;
}


const formSchema = z.object({
    subject: z.string().min(3, { message: "subject must be at least 3 characters.", }),
    description: z.string().min(6, { message: "description must be at least 6 characters.", }),
    venue: z.string().min(3, { message: "Venue must be at least 3 characters." }),
    uploadBanner: z.any(),
    authorName: z.string().min(3, { message: "Author's name must be at least 3 characters." }),
    eventStartDate: z.string().min(3, { message: "Event start Date must be provided" }),
    eventEndDate: z.string().min(3, { message: "Event end Date must be provided" }),
    publishDate: z.string().min(3, { message: "Publish Date must be provided" }),
    durationPerDay: z.string().min(3, { message: "Duration Per Day must be provided" }),
})
const EntreprenuershipForm = ({ setCreateEntreprenuership }: Props) => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            subject: "",
            description: "",
            uploadBanner: "",
            venue: "",
            authorName: "",
            eventStartDate: "",
            eventEndDate: "",
            durationPerDay: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
    }
    return (
        <div>
            <div className='w-full flex justify-end items-center'>
                <Button onClick={() => setCreateEntreprenuership(false)} className='bg-white text-black border-2 border-[#dcdee6] hover:bg-white hover:text-black'>Go back</Button>
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} autoComplete="current-password">
                    <div className="w-full flex justify-start gap-5 mt-5">
                        <div className='w-[70%] grid grid-cols-1 gap-6'>
                            <FormField
                                control={form.control}
                                name="subject"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Subject</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                type="text"
                                                autoComplete="new-password"
                                                placeholder='Enter Title'
                                                className="bg-inherit outline-none"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Description</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="Type your description here." {...field} rows={8} className="bg-inherit" />
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
                                name="venue"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Venue</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                type="text"
                                                autoComplete="new-password"
                                                placeholder='Enter Venue'
                                                className="bg-inherit outline-none"
                                            />
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
                                            <FormLabel>{`Author`}</FormLabel>
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
                                    name="eventStartDate"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>{`Event's Start Date`}</FormLabel>
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
                                    name="eventEndDate"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>{`Event's End Date`}</FormLabel>
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
                                    name="durationPerDay"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Duration per day</FormLabel>
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
                                                        <SelectItem value="1 hours">1 hour</SelectItem>
                                                        <SelectItem value="2 hours">2 hours</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit" className="w-full bg-[#30a85f] text-[#fff] border-2 border-[#dcdee6] flex justify-center items-center gap-2 px-5 hover:bg-[#30a85f] hover:text-[#fff]"><span className="text-[14px] font-noraml">Post</span></Button>
                            </div>
                        </div>
                    </div>
                </form>
            </Form>
        </div>
    )
}

export default EntreprenuershipForm