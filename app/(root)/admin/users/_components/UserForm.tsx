"use client";
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import React from 'react'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import * as z from "zod";
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';


interface Props {
    setDialog: React.Dispatch<React.SetStateAction<number>>;
}

const formSchema = z.object({
    firstName: z.string().min(3, { message: "First Name must be at least 3 characters.", }),
    lastName: z.string().min(3, { message: "Last Name must be at least 3 characters.", }),
    email: z.string().min(3, { message: "Email must be at least 3 characters." }).email({ message: "Invalid email format." }),
    phoneNumber: z.string().min(11, { message: "Phone Number must be at least 11 characters.", }),
    role: z.string().min(11, { message: "User role is required.", }),
})

const UserForm = ({setDialog}: Props) => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            role: "",
        },
    });


    async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
    }
    return (
        <DialogContent className="bg-white h-auto">
            <DialogHeader>
                <DialogTitle>Add Users</DialogTitle>
                <DialogDescription>
                    Add other users to manage the portaL
                </DialogDescription>
            </DialogHeader>
            <>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} autoComplete="current-password">
                        <div className="w-full ">
                            <div className='w-[100%] grid grid-cols-1 gap-3'>
                                <FormField
                                    control={form.control}
                                    name="firstName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>First Name</FormLabel>
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
                                    name="lastName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>last Name</FormLabel>
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
                                    name="role"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Role</FormLabel>
                                            <FormControl>
                                                <Select onValueChange={field.onChange}
                                                    defaultValue={field.value}
                                                >
                                                    <SelectTrigger className="w-full">
                                                        <SelectValue placeholder="Assign User Role">{field.value || "Assign User Role"}</SelectValue>
                                                    </SelectTrigger>
                                                    <SelectContent
                                                        className="bg-[#f3f3f3]"
                                                    >
                                                        <SelectItem value="Admin">Admin</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <div className='w-full flex justify-between items-center gap-4'>
                                    <Button onClick={() => setDialog(0)} type='button' className='w-full bg-[#efefef] text-black border-2 hover:bg-[#efefef] hover:text-black'>Cancel</Button>
                                    <Button type='submit' className='w-full bg-[#30a85f] text-white border-2 hover:bg-[#30a85f] hover:text-white'>Add User</Button>

                                </div>
                            </div>
                        </div>
                    </form>
                </Form>
            </>
        </DialogContent>
    )
}

export default UserForm