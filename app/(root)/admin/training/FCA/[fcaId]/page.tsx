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
import { useRouter } from "next/navigation"
import { useFCAData } from "@/hooks/FCAs.hooks"
import ButtonSpinner from "@/components/Shared/ButtonSpinner"
import Loader from "@/components/Shared/Loader"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import dynamic from "next/dynamic"
import { useTrainingFcaContext } from "@/contexts/TrainingFcas.context"
import { useGetLGAByStateId, useGetStates } from "@/hooks/general.hooks"
// Dynamically import ReactQuill to prevent SSR issues
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false })

type Props = {
  params: { fcaId: any }
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
      stateId: z.string().min(1, { message: "State is required" }),
      localGovernmentAreaId: z.string().min(1, { message: "Local Government Area is required." }),
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

const UpdateFCA = ({ params }: Props) => {
  const router = useRouter()
  const docImgRef = useRef<HTMLInputElement | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [imageName, setImageName] = useState<string>("")
  const [triggerRefetch, setTriggerRefetch] = useState<boolean>(false)
  const [isMounted, setIsMounted] = useState<boolean>(false)
  const [formSchema, setFormSchema] = useState<z.ZodType<any>>(createFormSchema(null))
  const { uploadImage, data: ImageUrl, loading: imageLoading, error: imageError } = useUploadImage(token)
  const { isUpdating, updateTrainingFca } = useTrainingFcaContext()
  const { loading, fca, error } = useFCAData(token, params?.fcaId, triggerRefetch)
  const { isLoading: loadingState, states, fetchStates } = useGetStates()
  const { isLoading: loadingLga, lga, fetchLga } = useGetLGAByStateId()

  // Add a state to track if an image is required
  const [imageRequired, setImageRequired] = useState<boolean>(false)

  // Add a state to track if we're using the original image or a new one
  const [usingOriginalImage, setUsingOriginalImage] = useState<boolean>(true)

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
      console.log("Setting image name to:", file.name)
      setImageName(file.name) // Set the new file name
      setUsingOriginalImage(false) // We're now using a new image

      // Clear any existing errors before upload
      form.clearErrors("logoUrl")

      // Upload the image
      uploadImage(file, "docs")
    } catch (error) {
      console.error("Error validating image:", error)
      form.setError("logoUrl", {
        message: "Error processing image",
      })
    }
  }

  const stateId = form.watch("stateId")

  useEffect(() => {
    if (stateId && !loading) {
      // Only fetch LGAs when stateId changes due to user interaction, not during initial form setup
      const stateIdNumber = Number(stateId.split("-")[1])

      // When state changes, clear the LGA selection first
      form.setValue("localGovernmentAreaId", "")
      form.clearErrors("localGovernmentAreaId")

      // Then fetch new LGAs
      fetchLga(stateIdNumber)
    }
  }, [fetchLga, stateId, loading, form])

  useEffect(() => {
    fetchStates()
  }, [fetchStates])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (ImageUrl) {
      console.log("Image uploaded successfully:", ImageUrl)

      // Update form with new image URL
      form.setValue("logoUrl", ImageUrl, { shouldValidate: true })

      // Explicitly clear any errors
      form.clearErrors("logoUrl")

      // Update state
      setUsingOriginalImage(false)

      // Make sure we set the image name - use the original file name if available
      const extractedName = extractFilenameFromUrl(ImageUrl)
      console.log("Setting image name after upload to:", extractedName)
      setImageName(extractedName)

      // Force a re-validation of the form
      form.trigger("logoUrl").then(() => {
        console.log("Form validation triggered after image upload")
        console.log("Current form errors:", form.formState.errors)
      })
    }
  }, [ImageUrl, form])

  useEffect(() => {
    if (!loading && fca) {
      // Create a new schema with the existing data
      setFormSchema(createFormSchema(fca))

      // Set the image name from the existing logoUrl if it exists
      if (fca.logoUrl) {
        setImageName(extractFilenameFromUrl(fca.logoUrl))
        setUsingOriginalImage(true)
      }

      // Only proceed if states are loaded
      if (!loadingState && states.length > 0) {
        let stateIdValue = ""

        // Find matching state from loaded states
        if (fca?.stateId) {
          const matchedState = states.find((st) => st.stateId === fca.stateId)
          if (matchedState) {
            stateIdValue = `${matchedState.stateName}-${matchedState.stateId}`

            // Fetch LGAs for the initial state only during first load
            fetchLga(fca.stateId)
          }
        }

        // Set form values without LGA first
        form.reset({
          ...fca,
          stateId: stateIdValue,
          localGovernmentAreaId: "",
          establishDate: fca?.establishDate?.split("T")[0],
          joinDate: fca?.joinDate?.split("T")[0],
        })
      }
    }
  }, [fca, states, loadingState, form, loading, fetchLga])

  // Add a new useEffect to set the LGA value after LGAs are loaded
  useEffect(() => {
    // Only run this effect when we have fca data, LGAs are loaded, and form has been initialized
    if (fca && !loadingLga && lga.length > 0 && form.getValues("stateId")) {
      if (fca.localGovernmentAreaId) {
        const matchedLga = lga.find((lg) => lg.localGovernmentAreaId === fca.localGovernmentAreaId)

        if (matchedLga) {
          const lgaIdValue = `${matchedLga.localGovernmentName}-${matchedLga.localGovernmentAreaId}`
          form.setValue("localGovernmentAreaId", lgaIdValue)
        }
      }
    }
  }, [fca, lga, loadingLga, form])

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Always check if logoUrl is empty regardless of schema validation
    if (!values.logoUrl || values.logoUrl.trim() === "") {
      form.setError("logoUrl", {
        type: "manual",
        message: "Please upload a logo image",
      })
      return // Prevent form submission
    }

    // Extract the IDs from the combined values
    const formattedValues = {
      ...values,
      stateId: values.stateId ? Number(values.stateId.split("-")[1]) : undefined,
      localGovernmentAreaId: values.localGovernmentAreaId
        ? Number(values.localGovernmentAreaId.split("-")[1])
        : undefined,
    }
    await updateTrainingFca(params?.fcaId, formattedValues)
  }

  // Add this useEffect after your other useEffects
  useEffect(() => {
    if (imageRequired && (!form.getValues("logoUrl") || form.getValues("logoUrl").trim() === "")) {
      form.setError("logoUrl", {
        type: "manual",
        message: "Please upload a logo image",
      })
    }
  }, [imageRequired, form])

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
                              {/* <Input
                                                            {...field}
                                                            type="text"
                                                            autoComplete="new-password"
                                                            placeholder="Enter State"
                                                            className="bg-white outline-none"
                                                          /> */}

                              <Select onValueChange={field.onChange} defaultValue={field.value} disabled={loadingState}>
                                <SelectTrigger className="w-full bg-white">
                                  <SelectValue placeholder={field.value.split("-")[0] || "Select State"}>
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
                              {/* <Input
                                 {...field}
                                 type="text"
                                 autoComplete="new-password"
                                 placeholder="Enter Local Government Area"
                                 className="bg-white outline-none"
                               /> */}
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                disabled={loadingState || loadingLga}
                              >
                                <SelectTrigger className="w-full bg-white">
                                  <SelectValue placeholder={field.value.split("-")[0] || "Select Local Goverment Area"}>
                                    {field.value.split("-")[0] || "Select Option"}
                                  </SelectValue>
                                </SelectTrigger>
                                <SelectContent className="bg-[#f3f3f3]">
                                  {!loadingState &&
                                    !loadingLga &&
                                    lga.length > 0 &&
                                    lga.map((lg, i) => (
                                      <SelectItem
                                        key={i}
                                        value={`${lg?.localGovernmentName}-${lg?.localGovernmentAreaId}`}
                                      >
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
                                      {imageName ||
                                        extractFilenameFromUrl(form.getValues("logoUrl")) ||
                                        "Uploaded image"}
                                    </p>
                                  </div>
                                  <FaRegTrashAlt
                                    style={{ cursor: "pointer" }}
                                    color="#FF3236"
                                    onClick={() => {
                                      console.log("Delete button clicked")

                                      // Clear the logo URL
                                      form.setValue("logoUrl", "", { shouldValidate: true })
                                      setUsingOriginalImage(false)
                                      setImageName("")

                                      // Clear the file input value directly
                                      if (docImgRef.current) {
                                        docImgRef.current.value = ""
                                      }

                                      // Reset the key with a slight delay to ensure browser refreshes the input
                                      setTimeout(() => {
                                        setFileInputKey((prev) => prev + 1)

                                        // Set error after reset
                                        form.setError("logoUrl", {
                                          type: "manual",
                                          message: "Please upload a logo image",
                                        })

                                        // Set our custom state to indicate image is required
                                        setImageRequired(true)

                                        console.log("File input reset completed")
                                      }, 100)
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
                            <FormLabel>fca Post Editor</FormLabel>
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

export default UpdateFCA

