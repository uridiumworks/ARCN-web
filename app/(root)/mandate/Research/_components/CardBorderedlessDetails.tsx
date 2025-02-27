"use client";
import React from "react";
import { CircleCheck } from "lucide-react";

type Props = {
  title: string;
  points: string[];
};

export default function CardBorderedlessDetails({ title, points }: Props) {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="font-medium text-3xl sm:text-[2.625rem] text-[#111111]">
        {title}
      </h3>
      <div className="flex flex-col gap-4">
        {points.map((el, i) => (
          <div key={i} className="flex items-center gap-3">
            <div>
              <CircleCheck color="#171616" size={20} />
            </div>
            <p className="text-sm sm:text-lg text-[#171616]">{el}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
