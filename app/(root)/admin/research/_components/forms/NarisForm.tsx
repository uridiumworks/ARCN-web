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
import ButtonSpinner from "@/components/Shared/ButtonSpinner"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useResearchNaris } from "@/contexts/ResearchNaris.context"

import dynamic from "next/dynamic"
import { useGetLGAByStateId, useGetStates } from "@/hooks/general.hooks"

// Dynamically import ReactQuill to prevent SSR issues
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false })

interface Props {
  setCreateNewInstitute: React.Dispatch<React.SetStateAction<boolean>>
}

const formSchema = z
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
    stateId: z.string().min(1, { message: "State is required" }),
    localGovernmentAreaId: z.string().min(1, { message: "Local Government Area is required." }),
    establishDate: z.string().min(3, { message: "Date Established must be provided." }),
    joinDate: z.string().min(3, { message: "Date Joined must be provided." }),
    logoUrl: z.string().min(1, { message: "Please upload a Logo image" }),
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

const NarisForm = ({ setCreateNewInstitute }: Props) => {
  const docImgRef = useRef<HTMLInputElement | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [triggerRefetch, setTriggerRefetch] = useState<boolean>(false)
  const [imageName, setImageName] = useState<string>("")
  const [isMounted, setIsMounted] = useState<boolean>(false)
  const { uploadImage, data: ImageUrl, loading: imageLoading, error: imageError } = useUploadImage(token)
  const { isCreating, createNaris } = useResearchNaris()
  const { isLoading: loadingState, states, fetchStates } = useGetStates()
  const { isLoading: loadingLga, lga, fetchLga } = useGetLGAByStateId()
  // Add a key state to force re-render of file input
  const [fileInputKey, setFileInputKey] = useState<number>(0)

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

  useEffect(() => {
    const userToken = localStorage.getItem("userToken")
    setToken(userToken)
  }, [])

  useEffect(() => {
    fetchStates()
  }, [fetchStates])

  const stateId = form.watch("stateId").split("-")[1]

  useEffect(() => {
    if (stateId) {
      fetchLga(Number(stateId))
    }

    return () => {}
  }, [fetchLga, stateId])

  // Add a function to extract filename from Cloudinary URL
  const extractFilenameFromUrl = (url: string): string => {
    if (!url) return ""
    const parts = url.split("/")
    // Get the last part of the URL (index 6 or beyond)
    if (parts.length >= 7) {
      return parts[8] // This would be the filename in a Cloudinary URL
    }
    return "Current logo"
  }

  // Modify the file upload handler to update the imageName
  const handleFileChangeDocHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) {
      console.log("No file selected")
      return
    }

    console.log("File selected for upload:", file.name)

    // File size validation (500KB = 512000 bytes)
    const maxFileSize = 512000 // 500KB in bytes
    if (file.size > maxFileSize) {
      form.setError("logoUrl", {
        message: "File size must be less than 500KB",
      })
      return
    }

    // Image dimension validation
    const validateImageDimensions = (file: File): Promise<boolean> => {
      return new Promise((resolve) => {
        const img = new Image()

        img.onload = () => {
          // Set minimum dimensions based on the logo image
          const minWidth = 150
          const minHeight = 150
          // Set maximum dimensions for a logo
          const maxWidth = 300
          const maxHeight = 300

          // Log dimensions for debugging
          console.log(`Image dimensions: ${img.width}x${img.height}`)

          // Check if dimensions are within allowed range
          const isValid =
            img.width >= minWidth && img.height >= minHeight && img.width <= maxWidth && img.height <= maxHeight

          if (!isValid) {
            form.setError("logoUrl", {
              message: `Image dimensions must be between ${minWidth}x${minHeight}px and ${maxWidth}x${maxHeight}px (current: ${img.width}x${img.height}px)`,
            })
          }

          URL.revokeObjectURL(img.src) // Clean up
          resolve(isValid)
        }

        img.onerror = () => {
          form.setError("logoUrl", {
            message: "Invalid image file",
          })
          URL.revokeObjectURL(img.src) // Clean up
          resolve(false)
        }

        img.src = URL.createObjectURL(file)
      })
    }

    try {
      const isValidDimensions = await validateImageDimensions(file)
      if (!isValidDimensions) return

      // If all validations pass, proceed with upload
      console.log("Setting image name to:", file.name);
      setImageName(file.name); // Set the new file name

      // Clear any existing errors before upload
      form.clearErrors("logoUrl");

      // Upload the image
      uploadImage(file, "docs");
    } catch (error) {
      console.error("Error validating image:", error)
      form.setError("logoUrl", {
        message: "Error processing image",
      })
    }
  }

  // Update the useEffect that sets the initial form values to also set the imageName
  useEffect(() => {
    if (ImageUrl) {
      console.log("Image uploaded successfully:", ImageUrl);
    
      // Update form with new image URL
      form.setValue("logoUrl", ImageUrl, { shouldValidate: true });
    
      // Explicitly clear any errors
      form.clearErrors("logoUrl");
    
      // Make sure we set the image name - use the original file name if available
      const extractedName = extractFilenameFromUrl(ImageUrl);
      console.log("Setting image name after upload to:", extractedName);
      setImageName(extractedName);

      // Force a re-validation of the form
      form.trigger("logoUrl").then(() => {
        console.log("Form validation triggered after image upload");
        console.log("Current form errors:", form.formState.errors);
      });
    }
  }, [ImageUrl, form])

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form submitted with values:", values)
    console.log("Logo URL value:", values.logoUrl)

    // Check if logoUrl is empty
    if (!values.logoUrl || values.logoUrl.trim() === "") {
      console.log("Logo URL is empty, showing error")
      form.setError("logoUrl", {
        type: "manual",
        message: "Please upload a Logo image",
      })
      return // Prevent form submission
    }

    try {
      await createNaris({
        ...values,
        stateId: Number(values.stateId.split("-")[1]),
        localGovernmentAreaId: Number(values.localGovernmentAreaId.split("-")[1]),
      })
      setCreateNewInstitute(false)
    } catch (error) {
      console.error("Error creating NARIS:", error)
    }
  }

  useEffect(() => {
    setIsMounted(true)
  }, [])
  return (
    <div>
      <div className="w-full flex justify-end items-center">
        <Button
          onClick={() => setCreateNewInstitute(false)}
          className="bg-white text-black border-2 border-[#dcdee6] hover:bg-white hover:text-black"
        >
          Go back
        </Button>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} autoComplete="current-password">
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
                      {/* <FormControl>
                        <Input
                          {...field}
                          type="text"
                          autoComplete="new-password"
                          placeholder="Enter State"
                          className="bg-white outline-none"
                        />
                      </FormControl> */}
                      <FormControl>
                        <Select onValueChange={field.onChange} defaultValue={field.value} disabled={loadingState}>
                          <SelectTrigger className="w-full bg-white">
                            <SelectValue placeholder={field.value || "Select State"}>
                              {field.value.split("-")[0] || "Select Option"}
                            </SelectValue>
                          </SelectTrigger>
                          <SelectContent className="bg-[#f3f3f3]">
                            {!loadingState &&
                              states.length > 0 &&
                              states.map((state, i) => (
                                <SelectItem key={i} value={`${state.stateName}-${state.stateId.toString()}`}>
                                  {state.stateName}
                                </SelectItem>
                              ))}
                          </SelectContent>
                        </Select>
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
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          disabled={loadingState || loadingLga}
                        >
                          <SelectTrigger className="w-full bg-white">
                            <SelectValue placeholder={field.value || "Select Local Goverment Area"}>
                              {field.value.split("-")[0] || "Select Option"}
                            </SelectValue>
                          </SelectTrigger>
                          <SelectContent className="bg-[#f3f3f3]">
                            {!loadingState &&
                              !loadingLga &&
                              lga.length > 0 &&
                              lga.map((lg, i) => (
                                <SelectItem key={i} value={`${lg?.localGovernmentName}-${lg?.localGovernmentAreaId}`}>
                                  {lg?.localGovernmentName}
                                </SelectItem>
                              ))}
                          </SelectContent>
                        </Select>
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
                            key={`file-input-${fileInputKey}-${Date.now()}`}
                            type="file"
                            accept="image/*"
                            name="bannerImage"
                            onChange={(event) => {
                              handleFileChangeDocHandler(event)
                              console.log("File selected:", event.target.files?.[0]?.name)
                            }}
                            ref={docImgRef}
                            value=""
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
                                SVG, PNG, JPG or GIF (150x150px to 300x300px, max 500KB)
                              </span>
                            </div>
                          </div>
                        </div>
                        {form.getValues("logoUrl") && (
                          <div className="w-full py-3 px-6 flex justify-between items-center bg-gray-100 mt-3">
                            <div className="flex justify-start items-center gap-3">
                              <FaFilePdf color="#ED1B24" />
                              <p className="text-base font-medium font-[Config Rounded] text-[#5F6D7E]">
                                {imageName || extractFilenameFromUrl(form.getValues("logoUrl")) || "Uploaded image"}
                              </p>
                            </div>
                            <FaRegTrashAlt
                              style={{ cursor: "pointer" }}
                              color="#FF3236"
                              onClick={() => {
                                console.log("Delete button clicked");
        
                                // Clear the logo URL
                                form.setValue("logoUrl", "", { shouldValidate: true });
                                setImageName("");

                                // Clear the file input value directly
                                if (docImgRef.current) {
                                  docImgRef.current.value = "";
                                }

                                // Reset the key with a slight delay to ensure browser refreshes the input
                                setTimeout(() => {
                                  setFileInputKey((prev) => prev + 1);

                                  // Set error after reset
                                  form.setError("logoUrl", {
                                    type: "manual",
                                    message: "Please upload a logo image",
                                  });

                                  console.log("File input reset completed");
                                }, 100);
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
                      <FormLabel>Naris Post Editor</FormLabel>
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
                disabled={isCreating || imageLoading || loadingState || loadingLga}
                className="w-full bg-[#30a85f] text-[#fff] border-2 border-[#dcdee6] flex justify-center items-center gap-2 px-5 hover:bg-[#30a85f] hover:text-[#fff]"
              >
                {isCreating ? <ButtonSpinner /> : <span className="text-[14px] font-noraml">Submit</span>}
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default NarisForm
