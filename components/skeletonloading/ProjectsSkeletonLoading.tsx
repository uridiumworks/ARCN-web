"use client";
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

type Props = {
  counts?: number;
};

export default function ProjectsSkeletonLoading({ counts = 9 }: Props) {
  return (
    <div className="grid grid-cols-[100%] sm:grid-cols-2 lg:grid-cols-3 justify-self-center sm:justify-self-stretch  gap-6">
      {Array.from({ length: counts }, (_, i) => i + 1).map((el) => (
        <div className="flex flex-col gap-4" key={el}>
          <Skeleton className="h-[18.5rem] w-[19.375rem]" />
        </div>
      ))}
    </div>
  );
}
