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
    <div className={`flex flex-col  ${subContent ? "gap-4 sm:gap-6" : "gap-2"}`}>
      {title && (
        <h3 className="font-medium text-lg leading-[2.875rem] text-[#111111]">
          {title}
        </h3>
      )}
      <div className="flex flex-col gap-3">
        {subContent && (
          <h3
            className={`${subContentClassNames} text-black text-sm leading-[1.5rem]`}
          >
            {subContent}
          </h3>
        )}
        {points.map((el, i) => (
          <div key={i} className="flex items-center gap-2">
            <div>
              <CircleCheck color="#171616" size={20} />
            </div>
            <p className="text-sm text-[#171616] leading-[1.5rem]">{el}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
