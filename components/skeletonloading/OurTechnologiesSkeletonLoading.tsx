"use client";
import React from "react";
import { Skeleton } from "../ui/skeleton";

export default function OurTechnologiesSkeletonLoading() {
  return (
    <div className="grid grid-cols-[100%] sm:grid-cols-2 lg:grid-cols-3 justify-self-center sm:justify-self-stretch  gap-6">
      <div className="flex flex-col gap-4">
        <Skeleton className="h-[14.5rem] w-[19.375rem]" />
        <div className="flex flex-col gap-2.5">
          <Skeleton className="h-[1.1rem] w-[3rem]" />
          <div className="flex flex-col gap-1.5">
            <Skeleton className="h-[0.8rem] w-[16rem]" />
            <Skeleton className="h-[0.8rem] w-[12rem]" />
            <Skeleton className="h-[0.8rem] w-[8rem]" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Skeleton className="h-[14.5rem] w-[19.375rem]" />
        <div className="flex flex-col gap-2.5">
          <Skeleton className="h-[1.1rem] w-[3rem]" />
          <div className="flex flex-col gap-1.5">
            <Skeleton className="h-[0.8rem] w-[16rem]" />
            <Skeleton className="h-[0.8rem] w-[12rem]" />
            <Skeleton className="h-[0.8rem] w-[8rem]" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Skeleton className="h-[14.5rem] w-[19.375rem]" />
        <div className="flex flex-col gap-2.5">
          <Skeleton className="h-[1.1rem] w-[3rem]" />
          <div className="flex flex-col gap-1.5">
            <Skeleton className="h-[0.8rem] w-[16rem]" />
            <Skeleton className="h-[0.8rem] w-[12rem]" />
            <Skeleton className="h-[0.8rem] w-[8rem]" />
          </div>
        </div>
      </div>
    </div>
  );
}
