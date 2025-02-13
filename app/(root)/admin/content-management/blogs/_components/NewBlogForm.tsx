"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FiUploadCloud } from "react-icons/fi";
import { Checkbox } from "@/components/ui/checkbox";
import { useBlogsData, useCreateBlog } from "@/hooks/Blogs.hooks";
import ButtonSpinner from "@/components/Shared/ButtonSpinner";
import { useUploadImage } from "@/hooks/BannerUpload.hooks";
import { FaFilePdf } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";
import dynamic from "next/dynamic";

// Dynamically import ReactQuill to prevent SSR issues
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface Props {
  setCreateNewBlog: React.Dispatch<React.SetStateAction<boolean>>;
  onAction: () => Promise<void>;
}

const formSchema = z.object({
  title: z.string().min(3, { message: "Title must be at least 3 characters." }),
  category: z.string().min(1, { message: "Category must be selected" }),
  bannerUrl: z.any(),
  blogPosttext: z.any(),
  authorName: z
    .string()
    .min(3, { message: "Author Name must be at least 3 characters." }),
  authorEmail: z
    .string()
    .min(3, { message: "Author Email must be at least 3 characters." })
    .email({ message: "Invalid email format." }),
    authorPhoneNumber: z
    .string()
    .length(11, { message: "Author Phone Number must be exactly 11 characters." })
    .regex(/^\d+$/, { message: "Phone Number can only contain numeric characters." }),
  publishDate: z.string().min(3, { message: "Publish Date must be provided" }),
  visibility: z.string().min(3, { message: "Visibility must be provided" }),
  useBanner: z.boolean().refine((value) => value === true, {
    message: "Visibility must be provided",
  }),
});

const NewBlogForm = ({ setCreateNewBlog,onAction }: Props) => {
  const docImgRef = useRef<HTMLInputElement | null>(null);
  const [imageName, setImageName] = useState<string>("");
  const [token, setToken] = useState<string | null>(null);
  // const [triggerRefetch, setTriggerRefetch] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const {
    createBlog,
    data,
    loading: createLoading,
  } = useCreateBlog(token);
  const {
    uploadImage,
    data: ImageUrl,
    loading: imageLoading,
  } = useUploadImage(token);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      category: "blogs",
      bannerUrl: "",
      blogPosttext: "",
      authorName: "",
      authorEmail: "",
      authorPhoneNumber: "",
      publishDate: "",
      visibility: "",
      useBanner: false,
    },
  });

  useEffect(() => {
    const userToken = typeof window !== "undefined" ? localStorage.getItem("userToken") : null;
    setToken(userToken);
  }, []);

  // useEffect(() => {
  //   if (data) {
  //     setTriggerRefetch(true);
  //   }
  // }, [data]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleFileChangeDocHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file: any = event.target.files?.[0];
    if (file) {
      setImageName(file.name);
      uploadImage(file, "docs");
    }
  };

  useEffect(() => {
    if (ImageUrl) {
      form.setValue("bannerUrl", ImageUrl);
    }
  }, [ImageUrl, form]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await createBlog(values);
      await onAction()
      setCreateNewBlog(false)
    } catch (error) {
      
    }

    
  }

  return (
    <div>
      <div className="w-full flex justify-end items-center">
        <Button
          onClick={() => setCreateNewBlog(false)}
          className="bg-white text-black border-2 border-[#dcdee6] hover:bg-white hover:text-black"
        >
          Go back
        </Button>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} autoComplete="off">
          <div className="w-full flex flex-col gap-20 md:flex-row md:justify-start md:gap-5 mt-5">
            <div className="w-full md:w-[70%] grid grid-cols-1 gap-6">
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
                        placeholder="Enter Title"
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
                      <Select onValueChange={field.onChange} defaultValue={field.value}   disabled={true}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Blogs">Blogs</SelectValue>
                        </SelectTrigger>
                        <SelectContent>
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
                name="bannerUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Upload Banner</FormLabel>
                    <FormControl>
                      <>
                        <div style={{ display: "none" }}>
                          <input
                            type="file"
                            accept="image/*"
                            ref={docImgRef}
                            onChange={handleFileChangeDocHandler}
                          />
                        </div>
                        <div
                          onClick={() => {
                            if (!imageLoading) docImgRef.current?.click();
                          }}
                          className="w-full h-[78px] flex justify-center items-center bg-[#f4f5f5] cursor-pointer border-dashed border-[3px] border-[#d3d3d3]"
                        >
                          <div>
                            <div className="w-full flex justify-center items-center gap-3">
                              <FiUploadCloud size={"16px"} />
                              <span className="font-bold text-xs text-[#0B2545]">
                                Click to upload image
                              </span>
                            </div>
                            <div className="w-full flex justify-center items-center gap-3">
                              <span className="font-normal text-xs text-[#475467]">
                                SVG, PNG, JPG or GIF (max. 800x400px)
                              </span>
                            </div>
                          </div>
                        </div>
                        {form.getValues("bannerUrl") && (
                          <div className="w-full py-3 px-6 flex justify-between items-center bg-gray-100 mt-3">
                            <div className="flex justify-start items-center gap-3">
                              <FaFilePdf color="#ED1B24" />
                              <p className="text-base font-medium text-[#5F6D7E]">{imageName}</p>
                            </div>
                            <FaRegTrashAlt
                              style={{ cursor: "pointer" }}
                              color="#FF3236"
                              onClick={() => form.setValue("bannerUrl", "")}
                            />
                          </div>
                        )}
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
                        {isMounted && (
                          <ReactQuill
                            theme="snow"
                            value={field.value}
                            onChange={field.onChange}
                            className="h-64"
                            modules={{
                              toolbar: [
                                [{ header: [1, 2, 3, 4, false] }],
                                ["bold", "italic", "underline"],
                                [{ align: [] }],
                                ["image", "clean"],
                              ],
                            }}
                          />
                        )}
                      </>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="w-full md:w-[30%] grid grid-cols-1 gap-6 mt-5 md:mt-0">
              <FormField
                control={form.control}
                name="authorName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Author Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="text"
                        placeholder="Author Name"
                        className="bg-white outline-none"
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
                    <FormLabel>Author Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        placeholder="Author Email"
                        className="bg-white outline-none"
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
                    <FormLabel>Author Phone Number</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="text"
                        placeholder="Author Phone Number"
                        className="bg-white outline-none"
                        maxLength={11} // Max length set to 11
                        pattern="\d*" // Only allows numeric values
                        onInput={(e) => {
                          e.currentTarget.value = e.currentTarget.value.replace(/\D/g, ""); // Prevent non-numeric input
                          field.onChange(e); // Update the field value
                        }}
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
                    <FormLabel>Publish Date</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="date"
                        className="bg-white outline-none"
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
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select Visibility">Select Visibility</SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="public">Public</SelectItem>
                          <SelectItem value="private">Private</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="useBanner"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <FormLabel className="ml-2">Use Banner</FormLabel>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="w-full flex justify-end mt-5">
            <Button type="submit" className="bg-blue-500 text-white">
              {createLoading ? <ButtonSpinner /> : "Create Blog"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default NewBlogForm;
