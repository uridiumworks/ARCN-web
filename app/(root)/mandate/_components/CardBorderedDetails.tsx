"use client";
import React from "react";
import { CircleCheck } from "lucide-react";
type Props = {
  title: string;
  points: string[];
  subContent?: string;
  endContent?: string;
  subContentClassNames?: string;
  shouldBoldPointText?:boolean
};
export default function CardBorderedDetails({
  shouldBoldPointText=true,
  subContent="",
  subContentClassNames="",
  endContent="",
  title,
  points,

  
}: Props) {
  return (
    <div className={`flex flex-col gap-2 border border-[#E7E7E7] bg-[#FCFCFC] rounded-2xl px-3 py-4`}>
      <h3 className="font-medium text-lg leading-[2.875rem] text-[#111111]">
        {title}
      </h3>
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
            {el.includes(":") ? (
              <p className="text-sm text-[#171616] leading-[1.5rem]">
                {" "}
                <span className={`${shouldBoldPointText ? "font-bold" : ""}`}>
                  {el.split(":")[0].trim()}:
                </span>{" "}
                {el.split(":")[1].trim()}
              </p>
            ) : (
              <p className="text-sm  text-[#171616] leading-[1.5rem]">{el}</p>
            )}
          </div>
        ))}

        {endContent && (
          <h3 className={`font-normal text-black text-sm  leading-[1.5rem]`}>
            {endContent}
          </h3>
        )}
      </div>
    </div>
  );
}
