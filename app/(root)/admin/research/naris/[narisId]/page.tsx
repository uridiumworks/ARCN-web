"use client"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import type React from "react"
import { useEffect, useRef, useState } from "react"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { FiUploadCloud } from "react-icons/fi"
import { FaFilePdf } from "react-icons/fa6"
import { FaRegTrashAlt } from "react-icons/fa"
import { useUploadImage } from "@/hooks/BannerUpload.hooks"
import { useNarisData } from "@/hooks/Naris.hooks"
import { useRouter } from "next/navigation"
import ButtonSpinner from "@/components/Shared/ButtonSpinner"
import Loader from "@/components/Shared/Loader"
import { useResearchNaris } from "@/contexts/ResearchNaris.context"

import dynamic from "next/dynamic"

// Dynamically import ReactQuill to prevent SSR issues
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false })

type Props = {
  params: { narisId: any }
}

const createFormSchema = (existing: any) => {
  const needsBannerValidation = !existing?.logoUrl || existing.logoUrl === ""
  return z
    .object({
      institutionName: z.string().min(3, { message: "subject must be at least 3 characters." }),
      phoneNumber: z.string().min(11, { message: "Phone Number must be at least 11 characters." }),
      email: z
        .string()
        .min(3, { message: "Email must be at least 3 characters." })
        .email({ message: "Invalid email format." }),
      website: z
        .string()
        .min(3, { message: "Website must be at least 3 characters." })
        .url({ message: "Invalid website URL." }),
      address: z.string().min(3, { message: "Address must be at least 3 characters." }),
      stateId: z.any(),
      localGovernmentAreaId: z.any(),
      establishDate: z.string().min(3, { message: "Date Established must be provided." }),
      joinDate: z.string().min(3, { message: "Date Joined must be provided." }),
      logoUrl: needsBannerValidation ? z.string().min(1, { message: "Please upload a logo image" }) : z.string(),
      description: z.any(),
    })
    .refine(
      (data) => {
        // Only perform validation if both dates are provided
        if (data.establishDate && data.joinDate) {
          const establishDate = new Date(data.establishDate)
          const joinDate = new Date(data.joinDate)
          return joinDate >= establishDate
        }
        return true // Skip validation if either date is missing
      },
      {
        message: "Join date cannot be earlier than establishment date",
        path: ["joinDate"], // This will show the error under the joinDate field
      },
    )
}

const UpdateNaris = ({ params }: Props) => {
  const router = useRouter()
  const docImgRef = useRef<HTMLInputElement | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [imageName, setImageName] = useState<string>("")
  const [isMounted, setIsMounted] = useState<boolean>(false)
  const [formSchema, setFormSchema] = useState<z.ZodType<any>>(createFormSchema(null))
  const [triggerRefetch, setTriggerRefetch] = useState<boolean>(false)
  const { updateNaris, isUpdating } = useResearchNaris()
  const { uploadImage, data: ImageUrl, loading: imageLoading, error: imageError } = useUploadImage(token)
  const { loading, naris, error } = useNarisData(token, params?.narisId, triggerRefetch)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      institutionName: "",
      phoneNumber: "",
      email: "",
      website: "",
      address: "",
      stateId: "",
      localGovernmentAreaId: "",
      establishDate: "",
      joinDate: "",
      logoUrl: "",
      description: "",
    },
  })

  const handleFileChangeDocHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file: any = event.target.files?.["0"]
    console.log(event.target.files?.["0"], "selectedFile")
    new Promise<void>((resolve, reject) => {
      const blober = URL.createObjectURL(file)
      setTimeout(() => {
        // setSelectedDocFile(blober);
        // form.setValue("identificationImageUrl", blober);
        // console.log(setSelectedDocFile, "select");
      }, 1000)
      resolve()
    })
    setImageName(file?.name)
    uploadImage(file, "docs")
  }

  useEffect(() => {
    const userToken = localStorage.getItem("userToken")
    setToken(userToken)
  }, [])

  useEffect(() => {
    if (ImageUrl) {
      form.setValue("logoUrl", ImageUrl)
      form.clearErrors("logoUrl")
    }
  }, [ImageUrl, form])

  useEffect(() => {
    if (naris) {
      form.reset({
        ...naris,
        establishDate: naris?.establishDate?.split("T")[0],
        joinDate: naris?.joinDate?.split("T")[0],
      })
    }
  }, [form, naris])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    await updateNaris(params?.narisId, values)
  }

  return (
    <>
      <Loader loading={loading} />
      <div className="w-full min-h-screen bg-[#f9fafb] p-10">
        <div className="w-full min-h-[70vh]">
          <div>
            <div className="w-full flex justify-end items-center">
              <Button
                onClick={() => router.push(`/admin/research`)}
                className="bg-white text-black border-2 border-[#dcdee6] hover:bg-white hover:text-black"
              >
                Go back
              </Button>
            </div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} autoComplete="current-password">
                <div className="w-full flex justify-start gap-5 mt-5">
                  <div className="w-[70%] grid grid-cols-1 gap-6">
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
                              placeholder="Enter Institution Name"
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
                                placeholder="Enter Phone Number"
                                className="bg-white outline-none"
                                maxLength={11} // Max length set to 11
                                pattern="\d*" // Only allows numeric values
                                onInput={(e) => {
                                  e.currentTarget.value = e.currentTarget.value.replace(/\D/g, "") // Prevent non-numeric input
                                  field.onChange(e) // Update the field value
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
                                type="text"
                                autoComplete="new-password"
                                placeholder="Enter State"
                                className="bg-white outline-none"
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
                                type="text"
                                autoComplete="new-password"
                                placeholder="Enter Local Government Area"
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
                                  onChange={(event) => handleFileChangeDocHandler(event)}
                                  ref={docImgRef}
                                />
                              </div>
                              <div
                                onClick={() => {
                                  if (imageLoading) return
                                  docImgRef.current?.click()
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
                                      form.setValue("logoUrl", "")

                                      // If the original event had no banner, this will trigger validation
                                      if (!naris?.logoUrl || naris.logoUrl === "") {
                                        form.setError("logoUrl", {
                                          type: "manual",
                                          message: "Please upload a logo image",
                                        })
                                      }
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
                    <div className="mb-14">
                      <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Naris Post Editor</FormLabel>
                            <FormControl>
                              <>
                                {isMounted && (
                                  <ReactQuill
                                    // ref={reactQuillRef}
                                    theme="snow"
                                    value={field.value}
                                    onChange={field.onChange}
                                    className="h-64"
                                    modules={{
                                      toolbar: {
                                        container: [
                                          [{ header: [1, 2, 3, 4, false] }],
                                          ["bold", "italic", "underline"],
                                          [{ align: [] }],
                                          ["image", "clean"], // Add image button
                                        ],
                                        // handlers: {
                                        //     image: imageHandler, // Set custom image handler
                                        // },
                                      },
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
                      disabled={isUpdating || imageLoading}
                      className="w-full bg-[#30a85f] text-[#fff] border-2 border-[#dcdee6] flex justify-center items-center gap-2 px-5 hover:bg-[#30a85f] hover:text-[#fff]"
                    >
                      {isUpdating ? <ButtonSpinner /> : <span className="text-[14px] font-noraml">Publish</span>}
                    </Button>
                  </div>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </>
  )
}

export default UpdateNaris

