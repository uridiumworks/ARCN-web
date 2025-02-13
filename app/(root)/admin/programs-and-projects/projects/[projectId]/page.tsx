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
import { Textarea } from "@/components/ui/textarea";
import {
  useCreateProject,
  useProjectData,
  useProjectsData,
  useUpdateProject,
} from "@/hooks/Projects.hooks";
import ButtonSpinner from "@/components/Shared/ButtonSpinner";
import { useRouter } from "next/navigation";
import { FaFilePdf } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";
import { useUploadImage } from "@/hooks/BannerUpload.hooks";
import Loader from "@/components/Shared/Loader";

const formSchema = z.object({
  title: z.string().min(3, { message: "title must be at least 3 characters." }),
  bannerUrl: z.string(),
  description: z.string(),
  publisherName: z
    .string()
    .min(3, { message: "Creator Name must be at least 3 characters." }),
  publishOn: z
    .string()
    .min(3, { message: "publish Date must be at least 3 characters." }),
  useBanner: z.boolean().refine((value) => value === true, {
    message: "Check this box please.",
  }),
});

type Props = {
  params: { projectId: any };
};

const UpdateProject = ({ params }: Props) => {
  const router = useRouter();
  const docImgRef = useRef<HTMLInputElement | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [imageName, setImageName] = useState<string>("");
  const [triggerRefetch, setTriggerRefetch] = useState<boolean>(false);
  const {
    updateProject,
    success,
    loading: updateLoading,
    error: updateError,
  } = useUpdateProject(token);
  const {
    uploadImage,
    data: ImageUrl,
    loading: imageLoading,
    error: imageError,
  } = useUploadImage(token);
  const { loading, project, error } = useProjectData(
    token,
    params?.projectId,
    triggerRefetch
  );
  console.log("🚀 ~ UpdateProject ~ project:", project);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      bannerUrl: "",
      description: "",
      publisherName: "",
      publishOn: "",
      useBanner: false,
    },
  });

  useEffect(() => {
    const userToken = localStorage.getItem("userToken");
    setToken(userToken);
  }, []);

  useEffect(() => {
    if (success) {
      setTriggerRefetch(true);
    }
  }, [success]);

  useEffect(() => {
    if (project) {
      form.reset(project);
    }
  }, [form, project]);

  const handleFileChangeDocHandler = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file: any = event.target.files?.["0"];
    console.log(event.target.files?.["0"], "selectedFile");
    new Promise<void>((resolve, reject) => {
      const blober = URL.createObjectURL(file);
      setTimeout(() => {
        // setSelectedDocFile(blober);
        // form.setValue("identificationImageUrl", blober);
        // console.log(setSelectedDocFile, "select");
      }, 1000);
      resolve();
    });
    setImageName(file?.name);
    uploadImage(file, "docs");
  };

  useEffect(() => {
    if (ImageUrl) {
      form.setValue("bannerUrl", ImageUrl);
    }
  }, [ImageUrl, form]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    await updateProject(params?.projectId, values);
  }

  return (
    <>
      <Loader loading={loading} />
      <div className="w-full min-h-screen bg-[#f9fafb] p-10">
        <div className="w-full min-h-[70vh]">
          <div>
            <div className="w-full flex justify-end items-center">
              <Button
                onClick={() => router.push(`/admin/programs-and-projects`)}
                className="bg-white text-black border-2 border-[#dcdee6] hover:bg-white hover:text-black"
              >
                Go back
              </Button>
            </div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                autoComplete="current-password"
              >
                <div className="w-full flex justify-start gap-5 mt-5">
                  <div className="w-[70%] grid grid-cols-1 gap-6">
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
                      name="bannerUrl"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Upload banner</FormLabel>
                          <FormControl>
                            <>
                              <div style={{ display: "none" }}>
                                <input
                                  type="file"
                                  accept="image/*"
                                  name="bannerImage"
                                  onChange={(event) =>
                                    handleFileChangeDocHandler(event)
                                  }
                                  ref={docImgRef}
                                />
                              </div>
                              <div
                                onClick={() => {
                                  if (imageLoading) return;
                                  docImgRef.current?.click();
                                }}
                                className="w-full h-[78px] flex justify-center items-center bg-[#f4f5f5] cursor-pointer border-dashed border-[3px] border-[#d3d3d3]"
                              >
                                <div>
                                  <div className="w-full flex justify-center items-center gap-3">
                                    <FiUploadCloud size={"16px"} />
                                    <span className="font-[Montserrat] font-bold text-xs text-[#0B2545]">
                                      Click to upload image
                                    </span>
                                    <span className="font-[Montserrat] font-medium text-xs text-[#475467] leading-[20px]">
                                      or drag and drop
                                    </span>
                                  </div>
                                  <div className="w-full flex justify-center items-center gap-3">
                                    <span className="font-[Montserrat] font-normal text-xs leading-[18px] text-[#475467]">
                                      SVG, PNG, JPG or GIF (max. 800x400px)
                                    </span>
                                  </div>
                                </div>
                              </div>
                              {form.getValues("bannerUrl") && (
                                <div className="w-full py-3 px-6 flex justify-between items-center bg-gray-100 mt-3">
                                  <div className="flex justify-start items-center gap-3">
                                    <FaFilePdf color="#ED1B24" />
                                    <p className="text-base font-medium font-[Config Rounded] text-[#5F6D7E]">
                                      {imageName}
                                    </p>
                                  </div>
                                  <FaRegTrashAlt
                                    style={{ cursor: "pointer" }}
                                    color="#FF3236"
                                    onClick={() => {
                                      form.setValue("bannerUrl", "");
                                    }}
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
                      name="description"
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
                  <div className="w-[30%] min-h-[70vh] border-[1px] border-[#dcdee6] py-5 px-3">
                    <p className="font-[Montserrat] font-bold text-base leading-[19px] text-[#4D4D4D]">
                      Publish
                    </p>
                    <div className="grid grid-cols-1 gap-6 mt-5">
                      <FormField
                        control={form.control}
                        name="publisherName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{`Created by`}</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                type="text"
                                autoComplete="new-password"
                                placeholder="Name"
                                className="bg-inherit outline-none"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="publishOn"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{`Publish On`}</FormLabel>
                            <FormControl>
                              <div>
                                <input
                                  // {...field}
                                  type="date"
                                  autoComplete="new-password"
                                  placeholder="DD/MM/YYYY"
                                  value={field.value}
                                  onChange={field.onChange}
                                  className="bg-inherit outline-none"
                                />
                              </div>
                              {/* <Input
                                                    {...field}
                                                    type="date"
                                                    autoComplete="new-password"
                                                    placeholder='DD/MM/YYYY'
                                                    className="bg-inherit outline-none"
                                                /> */}
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="useBanner"
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
                                      Use on Project Banner
                                    </label>
                                  </div>
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          </div>
                        )}
                      />
                      <Button
                        type="submit"
                        disabled={updateLoading}
                        className="w-full bg-[#30a85f] text-[#fff] border-2 border-[#dcdee6] flex justify-center items-center gap-2 px-5 hover:bg-[#30a85f] hover:text-[#fff]"
                      >
                        {updateLoading ? (
                          <ButtonSpinner />
                        ) : (
                          <span className="text-[14px] font-noraml">
                            Publish
                          </span>
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateProject;
