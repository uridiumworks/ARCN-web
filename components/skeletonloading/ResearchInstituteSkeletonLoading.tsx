"use client";
import React from "react";
import { Skeleton } from "../ui/skeleton";
export default function ResearchInstituteSkeletonLoading() {
  return (
    <div className="grid grid-cols-[100%] sm:grid-cols-2 sm:justify-around gap-5">
      <Skeleton className="w-full h-[0.8rem]" />
      <Skeleton className="w-full h-[0.8rem]" />
      <Skeleton className="w-full h-[0.8rem]" />
      <Skeleton className="w-full h-[0.8rem]" />
    </div>
  );
}
