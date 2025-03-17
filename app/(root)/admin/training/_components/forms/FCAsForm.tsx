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
import React, { use, useEffect, useRef, useState } from "react";
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
import { FaFilePdf } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";
import { useUploadImage } from "@/hooks/BannerUpload.hooks";
import { useCreateFCA, useFCAsData } from "@/hooks/FCAs.hooks";
import ButtonSpinner from "@/components/Shared/ButtonSpinner";


import dynamic from "next/dynamic";
import { useTrainingFcaContext } from "@/contexts/TrainingFcas.context";

// Dynamically import ReactQuill to prevent SSR issues
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
interface Props {
  setCreateFCAs: React.Dispatch<React.SetStateAction<boolean>>;
}

const formSchema = z.object({
  institutionName: z
    .string()
    .min(3, { message: "college Name must be at least 3 characters." }),
  phoneNumber: z
    .string()
    .min(11, { message: "Phone Number must be at least 11 characters." }),
  email: z
    .string()
    .min(3, { message: "Email must be at least 3 characters." })
    .email({ message: "Invalid email format." }),
  website: z
    .string()
    .min(3, { message: "Website must be at least 3 characters." })
    .url({ message: "Invalid website URL." }),
  address: z
    .string()
    .min(3, { message: "Address must be at least 3 characters." }),
  stateId: z.any(),
  localGovernmentAreaId: z.any(),
  establishDate: z
    .string()
    .min(3, { message: "Date Established must be provided." }),
  joinDate: z.string().min(3, { message: "Date Joined must be provided." }),
  logoUrl: z.string().min(1, { message: "Please upload a Logo image" }),
  description: z.any(),
});

const FCAsForm = ({ setCreateFCAs }: Props) => {
  const docImgRef = useRef<HTMLInputElement | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [triggerRefetch, setTriggerRefetch] = useState<boolean>(false);
  const [imageName, setImageName] = useState<string>("");
  const {isCreating, createTrainingFca} = useTrainingFcaContext()
    const [isMounted, setIsMounted] = useState<boolean>(false);
  const {
    uploadImage,
    data: ImageUrl,
    loading: imageLoading,
    error: imageError,
  } = useUploadImage(token);


  useEffect(() => {
    const userToken = localStorage.getItem("userToken");
    setToken(userToken);
  }, []);

    useEffect(() => {
        setIsMounted(true);
      }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      institutionName: "",
      phoneNumber: "",
      email: "",
      website: "",
      address: "",
      stateId: undefined,
      localGovernmentAreaId: undefined,
      establishDate: "",
      joinDate: "",
      logoUrl: "",
      description: "",
    },
  });
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
      form.setValue("logoUrl", ImageUrl);
      form.clearErrors("logoUrl");
    }
  }, [ImageUrl, form]);



  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await createTrainingFca(values)
      setCreateFCAs(false)
    } catch (error) {
      
    }
  }
  return (
    <div>
      <div className="w-full flex justify-end items-center">
        <Button
          onClick={() => setCreateFCAs(false)}
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
                name="institutionName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Institute Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="text"
                        autoComplete="new-password"
                        placeholder="Enter Institute Name"
                        className="bg-white outline-none"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="w-[100%] grid grid-cols-2 gap-3">
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
                          placeholder="Enter a valid Phone Number"
                          className="bg-white outline-none"
                          maxLength={11} // Max length set to 11
                          pattern="\d*" // Only allows numeric values
                          onInput={(e) => {
                            e.currentTarget.value = e.currentTarget.value.replace(
                              /\D/g,
                              ""
                            ); // Prevent non-numeric input
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
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          autoComplete="new-password"
                          placeholder="Enter Email"
                          className="bg-white outline-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-[100%] grid grid-cols-2 gap-3">
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
                          placeholder="Enter website url"
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
                          type="text"
                          autoComplete="new-password"
                          placeholder="Enter Address"
                          className="bg-white outline-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-[100%] grid grid-cols-2 gap-3">
                <FormField
                  control={form.control}
                  name="stateId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>State</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="number"
                          autoComplete="new-password"
                          placeholder="Enter State"
                          className="bg-white outline-none"
                          required
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="localGovernmentAreaId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>LGA</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="number"
                          autoComplete="new-password"
                          placeholder="Enter Local Goverment Area"
                          className="bg-white outline-none"
                          required
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-[100%] grid grid-cols-2 gap-3">
                <FormField
                  control={form.control}
                  name="establishDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Date Established</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="date"
                          autoComplete="new-password"
                          placeholder="DD/MM/YYYY"
                          className="bg-white outline-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="joinDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Date Joined</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="date"
                          autoComplete="new-password"
                          placeholder="DD/MM/YYYY"
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
                name="logoUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Upload Logo</FormLabel>
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
                        {form.getValues("logoUrl") && (
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
                                form.setValue("logoUrl", "");
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

              <div className="mb-10">
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Training Fca Post Editor</FormLabel>
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

              <Button
                type="submit"
                disabled={isCreating || imageLoading}
                className="w-full bg-[#30a85f] text-[#fff] border-2 border-[#dcdee6] flex justify-center items-center gap-2 px-5 hover:bg-[#30a85f] hover:text-[#fff]"
              >
                {isCreating ? (
                    <ButtonSpinner />
                  ) : (
                    <span className="text-[14px] font-noraml">Submit</span>
                  )}
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default FCAsForm;
