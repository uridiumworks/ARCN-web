"use client";
import React from "react";
import { Skeleton } from "../ui/skeleton";
export default function ResearchMandateSkeletonItemLoading() {
  return (
    <div className="flex flex-col gap-4">
      <Skeleton className="h-[19.375rem] w-[19.375rem] bg-[#3b5b47]" />
      <div className="flex flex-col gap-2.5">
        <Skeleton className="h-[1.1rem] w-[3rem] bg-[#3b5b47]" />
      </div>
    </div>
  );
}
