"use client";
import React from "react";
import { CircleCheck } from "lucide-react";
type Props = {
  title: string;
  points: string[];
  subContent?: string;
  endContent?: string;
  subContentClassNames?: string;
};
export default function CardBorderedDetails({
  shouldBoldPointText=true,
  subContent="",
  subContentClassNames="",
  endContent="",
  title,
  points,
  subContent="",
  endContent = "",
  subContentClassNames = "font-normal",
}: Props) {
  return (
    <div className="flex flex-col gap-4 border border-[#E7E7E7] bg-[#FCFCFC] rounded-2xl px-3 py-4">
      <h3 className="font-medium text-3xl sm:text-[2.5rem] leading-[2.875rem] text-[#111111]">
        {title}
      </h3>
      <div className="flex flex-col gap-3">
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
            {el.includes(":") ? (
              <p className="text-sm sm:text-lg text-[#171616]">
                {" "}
                <span className="font-bold">
                  {el.split(":")[0].trim()}:
                </span>{" "}
                {el.split(":")[1].trim()}
              </p>
            ) : (
              <p className="text-sm sm:text-lg text-[#171616]">{el}</p>
            )}
          </div>
        ))}

        {endContent && (
          <h3 className={`font-normal text-black text-sm sm:text-lg`}>
            {endContent}
          </h3>
        )}
      </div>
    </div>
  );
}
