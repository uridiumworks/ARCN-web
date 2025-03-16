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
import { Textarea } from "@/components/ui/textarea"
import { FaFilePdf } from "react-icons/fa6"
import { FaRegTrashAlt } from "react-icons/fa"
import { useUploadImage } from "@/hooks/BannerUpload.hooks"
import { useRouter } from "next/navigation"
import { useEventData } from "@/hooks/Events.hooks"
import ButtonSpinner from "@/components/Shared/ButtonSpinner"
import Loader from "@/components/Shared/Loader"
import { useEvents } from "@/contexts/Events.context"

type Props = {
  params: { eventId: any }
}

// Format date to YYYY-MM-DD for HTML date input
const formatDateForInput = (date: Date): string => {
  return date.toISOString().split("T")[0]
}

// Get today's date formatted for the date input
const today = formatDateForInput(new Date())

// Create a schema factory function that takes the existing event data
const createFormSchema = (existingEvent: any) => {
  // Determine if we need to validate the banner URL
  // Only validate if the existing event has no banner URL
  const needsBannerValidation = !existingEvent?.bannerUrl || existingEvent.bannerUrl === ""

  return z
    .object({
      subject: z.string().min(3, { message: "subject must be at least 3 characters." }),
      description: z.string().min(6, { message: "description must be at least 6 characters." }),
      venue: z.string().min(3, { message: "Venue must be at least 3 characters." }),
      // Conditionally validate the banner URL
      bannerUrl: needsBannerValidation ? z.string().min(1, { message: "Please upload a banner image" }) : z.string(),
      authorName: z.string().min(3, { message: "Author's name must be at least 3 characters." }),
      eventStartDate: z.string().min(3, { message: "Event start Date must be provided" }),
      eventEndDate: z.string().min(3, { message: "Event end Date must be provided" }),
      eventStartTime: z.string().min(3, { message: "Event start Time must be provided" }),
      eventEndTime: z.string().min(3, { message: "Event end Time must be provided" }),
      // durationPerDay: z.string().min(3, { message: "Duration Per Day must be provided" }),
    })
    .refine(
      (data) => {
        // Only validate if both dates are provided
        if (!data.eventStartDate || !data.eventEndDate) return true

        const startDate = new Date(data.eventStartDate)
        const endDate = new Date(data.eventEndDate)

        return endDate >= startDate
      },
      {
        message: "End date cannot be earlier than start date",
        path: ["eventEndDate"], // This will show the error on the end date field
      },
    )
    .refine(
      (data) => {
        // Only validate times if both times are provided and dates are the same
        if (!data.eventStartTime || !data.eventEndTime) return true

        // If dates are different, time validation is not needed
        if (data.eventStartDate !== data.eventEndDate) return true

        // Compare times when dates are the same
        return data.eventEndTime >= data.eventStartTime
      },
      {
        message: "End time cannot be earlier than start time on the same day",
        path: ["eventEndTime"], // This will show the error on the end time field
      },
    )
}

const UpdateEvent = ({ params }: Props) => {
  const router = useRouter()
  const docImgRef = useRef<HTMLInputElement | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [imageName, setImageName] = useState<string>("")
  const [triggerRefetch, setTriggerRefetch] = useState<boolean>(false)
  const { isUpdating, updateEvent } = useEvents()
  const { uploadImage, data: ImageUrl, loading: imageLoading, error: imageError } = useUploadImage(token)
  const { loading, event, error } = useEventData(token, params?.eventId, triggerRefetch)
  const [formSchema, setFormSchema] = useState<z.ZodType<any>>(createFormSchema(null))

  // Store the original dates for validation and min attributes
  const [originalStartDate, setOriginalStartDate] = useState<string>("")
  const [originalEndDate, setOriginalEndDate] = useState<string>("")

  useEffect(() => {
    const userToken = localStorage.getItem("userToken")
    setToken(userToken)
  }, [])

  // Update the form schema and original dates when the event data is loaded
  useEffect(() => {
    if (event) {
      setFormSchema(createFormSchema(event))

      // Store the original dates for validation
      if (event.eventStartDate) {
        // Extract just the date part (YYYY-MM-DD) from the ISO string
        const startDate = event.eventStartDate.split("T")[0]
        setOriginalStartDate(startDate)
      }

      if (event.eventEndDate) {
        // Extract just the date part (YYYY-MM-DD) from the ISO string
        const endDate = event.eventEndDate.split("T")[0]
        setOriginalEndDate(endDate)
      }
    }
  }, [event])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subject: "",
      description: "",
      bannerUrl: "",
      venue: "",
      authorName: "",
      eventStartDate: "",
      eventEndDate: "",
      eventStartTime: "",
      eventEndTime: "",
      // durationPerDay: "",
    },
    mode: "onChange",
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
    if (ImageUrl) {
      form.setValue("bannerUrl", ImageUrl)
      form.clearErrors("bannerUrl")
    }
  }, [ImageUrl, form])

  useEffect(() => {
    if (event) {
      // Reset the form with the event data
      // Make sure to extract just the date part from ISO strings
      form.reset({
        ...event,
        eventStartDate: event?.eventStartDate?.split("T")[0],
        eventEndDate: event?.eventEndDate?.split("T")[0],
      })
    }
  }, [event, form])

  // Helper function to check if a date is in the past
  const isDateInPast = (dateString: string): boolean => {
    const date = new Date(dateString)
    const currentDate = new Date()
    // Reset time to compare dates only
    currentDate.setHours(0, 0, 0, 0)
    return date < currentDate
  }

  // Helper function to check if a date is valid (not in the past or is the original date)
  const isValidDate = (dateString: string, originalDate: string): boolean => {
    // If it's the original date, it's always valid
    if (dateString === originalDate) return true

    // Otherwise, it should not be in the past
    return !isDateInPast(dateString)
  }

  // Simplified validation for start date
  useEffect(() => {
    // Remove all manual validations on form change
    form.clearErrors()
  }, [form.formState.isDirty])

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    await updateEvent(params?.eventId, values)
  }

  return (
    <>
      <Loader loading={loading} />
      <div className="w-full min-h-screen bg-[#f9fafb] p-10">
        <div className="w-full min-h-[70vh]">
          <div>
            <div className="w-full flex justify-end items-center">
              <Button
                onClick={() => router.push(`/admin/events`)}
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
                      name="subject"
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
                            <Textarea placeholder="Type your description here." {...field} rows={8} />
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
                              {form.getValues("bannerUrl") && (
                                <div className="w-full py-3 px-6 flex justify-between items-center bg-gray-100 mt-3">
                                  <div className="flex justify-start items-center gap-3">
                                    <FaFilePdf color="#ED1B24" />
                                    <p className="text-base font-medium font-[Config Rounded] text-[#5F6D7E]">
                                      {imageName || "Current banner"}
                                    </p>
                                  </div>
                                  <FaRegTrashAlt
                                    style={{ cursor: "pointer" }}
                                    color="#FF3236"
                                    onClick={() => {
                                      form.setValue("bannerUrl", "")
                                      // If the original event had no banner, this will trigger validation
                                      if (!event?.bannerUrl || event.bannerUrl === "") {
                                        form.setError("bannerUrl", {
                                          type: "manual",
                                          message: "Please upload a banner image",
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
                  <div className="w-[30%] min-h-[70vh] border-[1px] border-[#dcdee6] py-5 px-3">
                    <p className="font-[Montserrat] font-bold text-base leading-[19px] text-[#4D4D4D]">Publish</p>
                    <div className="grid grid-cols-1 gap-6 mt-5">
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
                        name="eventStartTime"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{`Event's Start Time`}</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                type="time"
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
                        name="eventEndTime"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{`Event's End Time`}</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                type="time"
                                autoComplete="new-password"
                                placeholder="DD/MM/YYYY"
                                className="bg-inherit outline-none"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button
                        disabled={isUpdating || imageLoading}
                        type="submit"
                        className="w-full bg-[#30a85f] text-[#fff] border-2 border-[#dcdee6] flex justify-center items-center gap-2 px-5 hover:bg-[#30a85f] hover:text-[#fff]"
                      >
                        {isUpdating ? <ButtonSpinner /> : <span className="text-[14px] font-noraml">Publish</span>}
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
  )
}

export default UpdateEvent

