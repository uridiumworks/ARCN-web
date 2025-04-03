"use client";
import React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { reportsData } from "../_components/data";
import { Button } from "@/components/ui/button";
import { GrayLocationPointerIcon } from "@/assets/icons";
import CustomContainer from "@/components/CustomContainer";

type reportsProps = {
  id: number;
  imgUrl: string;
  title: string;
  desc: string;
  location: string;
};

const Reports = () => {
  return (
    <section className="py-12 md:py-20">
      <CustomContainer>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <h2 className="text-3xl sm:text-4xl leading-[2.25rem] font-bold text-[#1B222B]">Reports</h2>
              <p className="text-sm leading-[1.5rem] text-gray pt-2">
                Lorem ipsum dolor sit amet consectetur. Elementum ullamcorper
                quis etiam euismod quisque montes arcu risus. Magnis posuere
                tincidunt elit <br /> ultrices tortor. Sit semper cras sed duis
                tortor tempor amet gravida. Rhoncus quis nisl etiam tortor.
              </p>
            </div>

            <Input
              className="outline:none border w-full md:w-[400px] mt-5"
              type="search"
              placeholder="Search for journals"
            />
          </div>

          <div className="grid grid-cols-[100%] sm:grid-cols-2 gap-10">
            {reportsData.map((el, i) => (
              <div
                key={i}
                className="flex flex-col lg:flex-row justify-between lg:items-center gap-8 lg:gap-10 bg-white border border-[#E8E8E8] rounded-xl py-3 px-3.5 lg:px-2.5 lg:py-1.5"
              >
                <div className="flex flex-col gap-2 items-start order-2 lg:order-1">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg leading-[1.5rem] text-[#131517] font-medium">
                      {el.title}
                    </h3>
                    <p className="font-normal leading-[1.5rem] text-[#464646] text-xs">
                      {el.desc}
                    </p>
                    <div className="flex gap-3 items-center">
                      <div>
                        <GrayLocationPointerIcon />
                      </div>
                      <p className="font-normal text-[#1315175C] text-xs leading-[1.5rem]">
                        {el.location}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      className=" bg-white text-[#07A460] border rounded-lg py-2 px-2"
                    >
                      {" "}
                      Download{" "}
                    </Button>
                  </div>
                </div>
                <div className="relative w-full lg:w-[9.375rem] h-[9.375rem] lg:h-full shrink-0  rounded-xl overflow-hidden order-1 lg:order-2 ">
                  <Image
                    src="/Images/Homepage/event-imgholder.png"
                    alt="event-imgholder"
                    className="object-cover h-full w-full"
                    width={150}
                    height={150}
                    priority
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default Reports;
