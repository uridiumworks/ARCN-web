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
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import ButtonSpinner from "@/components/Shared/ButtonSpinner";
import { useCreateProgram, useProgramsData } from "@/hooks/Programs.hooks";
import { useUploadImage } from "@/hooks/BannerUpload.hooks";
import { FaFilePdf } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";

interface Props {
  setCreateNewProgram: React.Dispatch<React.SetStateAction<boolean>>;
}

const formSchema = z.object({
  title: z
    .string()
    .min(3, { message: "subject must be at least 3 characters." }),
  description: z
    .string()
    .min(6, { message: "description must be at least 6 characters." }),
  venue: z.string().min(3, { message: "Venue must be at least 3 characters." }),
  bannerUrl: z.any(),
  publisherName: z
    .string()
    .min(3, { message: "Author's name must be at least 3 characters." }),
  eventStartDate: z
    .string()
    .min(3, { message: "Event start Date must be provided" }),
  eventEndDate: z
    .string()
    .min(3, { message: "Event end Date must be provided" }),
  durationPerDay: z
    .string()
    .min(3, { message: "Duration Per Day must be provided" }),
});

const ProgramForm = ({ setCreateNewProgram }: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      bannerUrl: "",
      venue: "",
      publisherName: "",
      eventStartDate: "",
      eventEndDate: "",
      durationPerDay: "",
    },
  });
  const docImgRef = useRef<HTMLInputElement | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [triggerRefetch, setTriggerRefetch] = useState<boolean>(false);
  const [imageName, setImageName] = useState<string>("");
  const {
    createProgram,
    data,
    loading: createLoading,
    error: createError,
  } = useCreateProgram(token);
  const {
    uploadImage,
    data: ImageUrl,
    loading: imageLoading,
    error: imageError,
  } = useUploadImage(token);
  const { loading, programs, error } = useProgramsData(token, triggerRefetch);

  useEffect(() => {
    const userToken = localStorage.getItem("userToken");
    setToken(userToken);
  }, []);

  useEffect(() => {
    if (data) {
      setTriggerRefetch(true);
    }
  }, [data]);

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
  }, [ImageUrl]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    await createProgram(values);
  }
  return (
    <div>
      <div className="w-full flex justify-end items-center">
        <Button
          onClick={() => setCreateNewProgram(false)}
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
             <div className="w-full flex flex-col gap-2 md:flex-row md:justify-start md:gap-5 mt-5">
             <div className="w-full md:w-[70%] grid grid-cols-1 gap-6">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="text"
                        autoComplete="new-password"
                        placeholder="Enter Title"
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
                      <Textarea
                        placeholder="Type your description here."
                        {...field}
                        rows={8}
                        className="bg-inherit"
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
                name="venue"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Venue</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="text"
                        autoComplete="new-password"
                        placeholder="Enter Venue"
                        className="bg-inherit outline-none"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="w-full mt-3 md:mt-0 md:w-[30%] min-h-[70vh] border-[1px] border-[#dcdee6] py-5 px-3">
              <p className="font-[Montserrat] font-bold text-base leading-[19px] text-[#4D4D4D]">
                Publish
              </p>
              <div className="grid grid-cols-1 gap-6 mt-5">
                <FormField
                  control={form.control}
                  name="publisherName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{`Author`}</FormLabel>
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
                  name="eventStartDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{`Event's Start Date`}</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="date"
                          autoComplete="new-password"
                          placeholder="DD/MM/YYYY"
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
                          placeholder="DD/MM/YYYY"
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
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger className="w-full bg-inherit">
                            <SelectValue
                              placeholder={field.value || "Select Option"}
                            >
                              {field.value || "Select Option"}
                            </SelectValue>
                          </SelectTrigger>
                          <SelectContent className="bg-[#f3f3f3]">
                            <SelectItem value="1 hours">1 hour</SelectItem>
                            <SelectItem value="2 hours">2 hours</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  disabled={createLoading}
                  className="w-full bg-[#30a85f] text-[#fff] border-2 border-[#dcdee6] flex justify-center items-center gap-2 px-5 hover:bg-[#30a85f] hover:text-[#fff]"
                >
                  {createLoading ? (
                    <ButtonSpinner />
                  ) : (
                    <span className="text-[14px] font-noraml">Post</span>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ProgramForm;
