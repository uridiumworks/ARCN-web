'use client'
import React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { reportsData } from "../_components/data";
import { Button } from "@/components/ui/button";
import { GrayLocationPointerIcon } from "@/assets/icons";

type reportsProps = {
  id: number;
  imgUrl: string;
  title: string;
  desc: string;
  location: string;
};

const Reports = () => {
  return (
    <section className="px-3 py-10 md:py-20 w-full md:w-10/12 mx-auto">
      <div className="">
        <h3 className="text-3xl font-bold text-[#1B222B]">Reports</h3>
        <p className="text-sm text-gray pt-2">
          Lorem ipsum dolor sit amet consectetur. Elementum ullamcorper quis
          etiam euismod quisque montes arcu risus. Magnis posuere tincidunt elit{" "}
          <br /> ultrices tortor. Sit semper cras sed duis tortor tempor amet
          gravida. Rhoncus quis nisl etiam tortor.
        </p>
        <Input
          className="outline:none border w-full md:w-[400px] mt-5"
          type="search"
          placeholder="Search for journals"
        />
      </div>

      {/* <div className='py-10 grid grid-cols-1 md:grid-cols-2 gap-5'>
        {reportsData.map((reports: reportsProps) => (
          <div key={reports.id} className='border flex flex-col-reverse md:flex-row  py-6 px-4 justify-between'>
            <div>
              <h1 className='text-[18px] font-[700] py-1 pt-3 md:pt-1'>{reports.title}</h1>
              <p className='text-[14px] text-[##858C95e] '>{reports.desc}</p>
              <div className=' text-[#1315175C] flex items-center py-2'>
                  <MapPin />
                  <p className='text-[14px] text-[##858C95e] '>{reports.location}</p>
              </div>
              <div className='flex gap-3.5 mt-4 '>
                <Button variant='ghost' className=' bg-white text-[#07A460] border rounded-lg py-2 px-2'> Download </Button>
                <Button className=' text-white bg-[#07A460] py-2 px-8 rounded-lg '> view </Button>
              </div>
            </div>

            <div className='w-full md:w-auto'>
              <Image src={reports.imgUrl} alt='image' width={201} height={201} className='rounded-lg w-full md:w-auto'/>
            </div> 
          </div>
        ))}
      </div> */}

      <div className="grid grid-cols-[100%] sm:grid-cols-2 gap-14">
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
    </section>
  );
};

export default Reports;
