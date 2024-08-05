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
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';

interface Props {
    setCreateReport: React.Dispatch<React.SetStateAction<boolean>>;
}

const ReportForm = ({ setCreateReport }: Props) => {
    return (
        <div>
            <div className='w-full flex justify-end items-center'>
                <Button onClick={() => setCreateReport(false)} className='bg-white text-black border-2 border-[#dcdee6] hover:bg-white hover:text-black'>Go back</Button>
            </div>
        </div>
    )
}

export default ReportForm