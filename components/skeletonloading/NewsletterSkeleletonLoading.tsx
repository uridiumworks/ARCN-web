"use client";
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
type Props = {
  counts?: number;
};
export default function NewsletterSkeletonLoading({ counts = 8 }: Props) {
  return (
    <div className="grid grid-cols-[100%] sm:grid-cols-2 gap-14">
      {Array.from({ length: counts }, (_, i) => i + 1).map((newsletters) => (
        <div
          className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-10 bg-white  rounded-xl py-3 px-3.5 lg:px-2.5 lg:py-1.5 "
          key={newsletters}
        >
          <div className="flex flex-col gap-4 lg:self-center items-start order-2 lg:order-1">
            <div className="flex flex-col gap-2">
              <Skeleton className="h-[1rem] w-[6rem]" />
              <Skeleton className="h-[0.8rem] w-[16rem]" />
              {/* <Skeleton className="h-[0.8rem] w-[9rem]" /> */}
            </div>
            
            <div className="flex gap-2 mt-auto">
              <Skeleton className="h-[2.5rem] w-[5rem]" />
            </div>
          </div>
          <div className="relative order-1 lg:order-2 shrink-0 overflow-hidden">
            <Skeleton className="w-full lg:w-[9.375rem] h-[9.375rem]" />
          </div>
        </div>
      ))}
    </div>
  );
}
