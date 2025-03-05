"use client";
import React from "react";
import { CircleCheck } from "lucide-react";

type Props = {
  title?: string;
  points: string[];
  subContent?: string;
  subContentClassNames?: string;
};

export default function CardBorderedlessDetails({
  subContent = "",
  subContentClassNames = "font-normal",
  title = "",
  points,
}: Props) {
  return (
    <div className="flex flex-col gap-6">
      {title && (
        <h3 className="font-medium text-3xl sm:text-[2.625rem] text-[#111111]">
          {title}
        </h3>
      )}
      <div className="flex flex-col gap-4">
        {subContent && (
          <h3
            className={`${subContentClassNames} text-black text-sm sm:text-lg`}
          >
            {subContent}
          </h3>
        )}
        {points.map((el, i) => (
          <div key={i} className="flex items-center gap-2">
            <div>
              <CircleCheck color="#171616" size={20} />
            </div>
            <p className="text-sm sm:text-base text-[#171616] leading-[2rem]">{el}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
