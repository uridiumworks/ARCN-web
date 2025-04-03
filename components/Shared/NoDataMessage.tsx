"use client";
import React from "react";

type Props = {
  message: string;
};

export default function NoDataMessage({ message }: Props) {
  return (
    <div className="bg-[#30A85F] p-3 text-base font-medium text-[#f0f0f0] rounded-lg">
      {message}
    </div>
  );
}
