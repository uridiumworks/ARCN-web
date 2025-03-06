"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Eye, EyeClosed, Search } from "lucide-react";
import Image from "next/image";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const [passwordToggle, setPasswordToggle] = React.useState(false);

    return (
      <div className="relative">
        {type === "search" ? (
          <div className="absolute top-2.5 left-3 ">
            <Search className="w-6 h-6 text-[#2A59FE4D]" />
          </div>
        ) : null}

        <input
          type={
            type === "password" ? (passwordToggle ? "text" : "password") : type
          }
          className={cn(
            "flex h-11 w-full rounded-[8px] border border-slate-200 bg-white py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#888888] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-omnix_primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",
            type === "search" ? "pl-11 pr-3" : "px-3",
            className
          )}
          ref={ref}
          {...props}
        />

        {type === "password" ? (
          <div
            className="absolute top-1/2 right-5 -translate-y-1/2 cursor-pointer"
            onClick={() => setPasswordToggle(!passwordToggle)}
          >
            {passwordToggle ? (
              <Eye className="w-5 h-5 text-[#98A2B3]" />
            ) : (
              <EyeClosed className="w-5 h-5 text-[#98A2B3]" />
            )}
          </div>
        ) : null}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
