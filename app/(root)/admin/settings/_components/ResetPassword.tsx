"use client";
import ButtonSpinner from "@/components/Shared/ButtonSpinner";
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
import { useResetPassword } from "@/hooks/Password.hook";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { passwordStrength } from "check-password-strength";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z
  .object({
    currentPassword: z
      .string()
      .min(3, { message: "Current Password must be at least 3 characters." })
      .max(100),
    newPassword: z
      .string()
      .min(3, { message: "New Password must be at least 3 characters." })
      .max(100),
    confirmPassword: z
      .string()
      .min(3, {
        message: "Confirm New Password must be at least 3 characters.",
      })
      .max(100),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Confirm New Password must match New Password.",
    path: ["confirmPassword"], // Path to the field that should show the error
  });

const ResetPassword = () => {
  const {
    resetPassword,
    data,
    loading: createLoading,
    error: createError,
  } = useResetPassword();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const [passwordStrengthText, setPasswordStrengthText] = useState<string>("");
  const [currentPasswordStrengthText, setCurrentPasswordStrengthText] =
    useState<string>("");

  const colorChange = () => {
    switch (passwordStrengthText || currentPasswordStrengthText) {
      case "Too weak":
        return "text-red-500";
      case "Weak":
        return "text-yellow-500";
      case "Medium":
        return "text-yellow-700";
      case "Strong":
        return "text-green-500";
      default:
        return "text-grey-800";
    }
  };

  const watchPassword = form.watch(["currentPassword", "newPassword"]);

  useEffect(() => {
    const [currentPassword, newPassword] = watchPassword;
    if (newPassword) {
      // Only check strength for newPassword
      const passwordText = passwordStrength(newPassword);
      setPasswordStrengthText(passwordText?.value);
    } else {
      setPasswordStrengthText(""); // Clear strength text if newPassword is empty
    }
    if (currentPassword) {
      // Only check strength for newPassword
      const passwordText = passwordStrength(currentPassword);
      setCurrentPasswordStrengthText(passwordText?.value);
    } else {
      setCurrentPasswordStrengthText(""); // Clear strength text if newPassword is empty
    }
    return () => {};
  }, [watchPassword]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    await resetPassword(values);
  }

  return (
    <div className="px-10 py-3">
      <div>
        <span className="text-xs text-[#4b5563]">
          we will send a reset link to the email attached to this account
        </span>
      </div>
      <div className="mt-2">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            autoComplete="current-password"
          >
            <div className="flex flex-col gap-5">
              <div>
                <FormField
                  control={form.control}
                  name="currentPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Current Password</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="password"
                          autoComplete="new-password"
                          placeholder="Enter Your Current Password"
                          className="bg-inherit outline-none"
                        />
                      </FormControl>
                      {watchPassword && (
                        <p className={cn("text-sm", colorChange())}>
                          {currentPasswordStrengthText}
                        </p>
                      )}
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <FormField
                  control={form.control}
                  name="newPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>New Password</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="password"
                          autoComplete="new-password"
                          placeholder="Enter Your New Password"
                          className="bg-inherit outline-none"
                        />
                      </FormControl>
                      {watchPassword && (
                        <p className={cn("text-sm", colorChange())}>
                          {passwordStrengthText}
                        </p>
                      )}
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm New Password</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="passwordj"
                          autoComplete="new-password"
                          placeholder="Enter Your New Password"
                          className="bg-inherit outline-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <Button disabled={createLoading} className="w-full bg-[#30a85f] mt-5 text-[#fff] text-center border-2 border-[#dcdee6] flex justify-center items-center hover:bg-[#30a85f] hover:text-[#fff]">
              {createLoading ? (
                <ButtonSpinner />
              ) : (
                <span className="text-[14px] font-noraml">Change Password</span>
              )}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ResetPassword;
