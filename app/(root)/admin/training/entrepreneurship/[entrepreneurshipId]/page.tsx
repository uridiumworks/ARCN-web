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
import { FaFilePdf } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";
import { useUploadImage } from "@/hooks/BannerUpload.hooks";
import { useRouter } from "next/navigation";
import {
  useEntrepreneurshipData,
  useUpdateEntrepreneurship,
} from "@/hooks/Entrepreneurships.hooks";
import ButtonSpinner from "@/components/Shared/ButtonSpinner";
import Loader from "@/components/Shared/Loader";
import { useTrainingEntrepenshipContext } from "@/contexts/TrainingEnterpenship.context";

// Format date to YYYY-MM-DD for HTML date input
const formatDateForInput = (date: Date): string => {
  return date.toISOString().split("T")[0];
};

// Get today's date formatted for the date input
const today = formatDateForInput(new Date());

type Props = {
  params: { entrepreneurshipId: any };
};

// Create a schema factory function that takes the existing event data
const createFormSchema = (existingEvent: any) => {
  // Determine if we need to validate the banner URL
  // Only validate if the existing event has no banner URL
  const needsBannerValidation =
    !existingEvent?.bannerUrl || existingEvent.bannerUrl === "";

  return z.object({
    subject: z
      .string()
      .min(3, { message: "subject must be at least 3 characters." }),
    description: z
      .string()
      .min(6, { message: "description must be at least 6 characters." }),
    venue: z
      .string()
      .min(3, { message: "Venue must be at least 3 characters." }),
    // Conditionally validate the banner URL
    bannerUrl: needsBannerValidation
      ? z.string().min(1, { message: "Please upload a banner image" })
      : z.string(),
    authorName: z
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
  }).refine(
    (data) => {
      // Only validate if both dates are provided
      if (!data.eventStartDate || !data.eventEndDate) return true;

      const startDate = new Date(data.eventStartDate);
      const endDate = new Date(data.eventEndDate);

      return endDate >= startDate;
    },
    {
      message: "End date cannot be earlier than start date",
      path: ["eventEndDate"], // This will show the error on the end date field
    }
  );
};

const UpdateEntrepreneurship = ({ params }: Props) => {
  const router = useRouter();
  const docImgRef = useRef<HTMLInputElement | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [imageName, setImageName] = useState<string>("");
  const [triggerRefetch, setTriggerRefetch] = useState<boolean>(false);
   const [formSchema, setFormSchema] = useState<z.ZodType<any>>(
      createFormSchema(null)
    );
      // Store the original dates for validation and min attributes
      const [originalStartDate, setOriginalStartDate] = useState<string>("");
      const [originalEndDate, setOriginalEndDate] = useState<string>("");
const {isUpdating,updateTrainingEntrepenship} = useTrainingEntrepenshipContext()
  const {
    uploadImage,
    data: ImageUrl,
    loading: imageLoading,
    error: imageError,
  } = useUploadImage(token);
  const { loading, entrepreneurship, error } = useEntrepreneurshipData(
    token,
    params?.entrepreneurshipId,
    triggerRefetch
  );
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
      durationPerDay: "",
    },
    mode: "onChange",
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
    const userToken = localStorage.getItem("userToken");
    setToken(userToken);
  }, []);

    // Update the form schema and original dates when the event data is loaded
    useEffect(() => {
      if (entrepreneurship) {
        setFormSchema(createFormSchema(entrepreneurship));
  
        // Store the original dates for validation
        if (entrepreneurship.eventStartDate) {
          // Extract just the date part (YYYY-MM-DD) from the ISO string
          const startDate = entrepreneurship.eventStartDate.split("T")[0];
          setOriginalStartDate(startDate);
        }
  
        if (entrepreneurship.eventEndDate) {
          // Extract just the date part (YYYY-MM-DD) from the ISO string
          const endDate = entrepreneurship.eventEndDate.split("T")[0];
          setOriginalEndDate(endDate);
        }
      }
    }, [entrepreneurship]);

  useEffect(() => {
    if (ImageUrl) {
      form.setValue("bannerUrl", ImageUrl);
      form.clearErrors("bannerUrl")
    }
  }, [ImageUrl, form]);

  useEffect(() => {
    if (entrepreneurship) {
      form.reset({
        ...entrepreneurship,
        eventStartDate: entrepreneurship?.eventStartDate?.split("T")[0],
        eventEndDate: entrepreneurship?.eventEndDate?.split("T")[0],
      });
    }
  }, [entrepreneurship, form]);

   // Helper function to check if a date is in the past
    const isDateInPast = (dateString: string): boolean => {
      const date = new Date(dateString);
      const currentDate = new Date();
      // Reset time to compare dates only
      currentDate.setHours(0, 0, 0, 0);
      return date < currentDate;
    };
  
    // Helper function to check if a date is valid (not in the past or is the original date)
    const isValidDate = (dateString: string, originalDate: string): boolean => {
      // If it's the original date, it's always valid
      if (dateString === originalDate) return true;
  
      // Otherwise, it should not be in the past
      return !isDateInPast(dateString);
    };
  
    // Simplified validation for start date
    useEffect(() => {
      // Remove all manual validations on form change
      form.clearErrors();
    }, [form.formState.isDirty]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    await updateTrainingEntrepenship(params?.entrepreneurshipId, values);
  }
  return (
    <>
      <Loader loading={loading} />
      <div className="w-full min-h-screen bg-[#f9fafb] p-10">
        <div className="w-full min-h-[70vh]">
          <div>
            <div className="w-full flex justify-end items-center">
              <Button
                onClick={() => router.push(`/admin/training`)}
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
                                       // If the original event had no banner, this will trigger validation
                                       if (
                                        !entrepreneurship?.bannerUrl ||
                                        entrepreneurship.bannerUrl === ""
                                      ) {
                                        form.setError("bannerUrl", {
                                          type: "manual",
                                          message:
                                            "Please upload a banner image",
                                        });
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
                    <p className="font-[Montserrat] font-bold text-base leading-[19px] text-[#4D4D4D]">
                      Publish
                    </p>
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
                                min={
                                  entrepreneurship?.eventStartDate
                                    ? formatDateForInput(
                                        new Date(
                                          new Date(
                                            entrepreneurship.eventStartDate
                                          ).setDate(
                                            new Date(
                                              entrepreneurship.eventStartDate
                                            ).getDate() + 1
                                          )
                                        )
                                      )
                                    : today
                                }
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
                                min={
                                  entrepreneurship?.eventStartDate
                                    ? formatDateForInput(
                                        new Date(
                                          new Date(
                                            entrepreneurship.eventStartDate
                                          ).setDate(
                                            new Date(
                                              entrepreneurship.eventStartDate
                                            ).getDate() + 1
                                          )
                                        )
                                      )
                                    : today
                                }
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
                                  <SelectItem value="1 hours">
                                    1 hour
                                  </SelectItem>
                                  <SelectItem value="2 hours">
                                    2 hours
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button
                        type="submit"
                        disabled={isUpdating || imageLoading}
                        className="w-full bg-[#30a85f] text-[#fff] border-2 border-[#dcdee6] flex justify-center items-center gap-2 px-5 hover:bg-[#30a85f] hover:text-[#fff]"
                      >
                        {isUpdating ? (
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

export default UpdateEntrepreneurship;
