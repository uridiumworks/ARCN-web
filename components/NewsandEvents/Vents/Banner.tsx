"use client"
import React from "react";
import "./stlying.css";
import { MapPin } from 'lucide-react';
import { Clock5 } from 'lucide-react';
import { Calendar } from 'lucide-react';

const Banner = () => {

    return (
        <section className="w-full hero min-h-[30rem] text-white lg:h-[34.375rem] place-content-end text-center overflow-hidden">
            <div className="py-10">
                <div className="flex flex-col gap-6 sm:flex-row lg:gap-28 sm:justify-center ">
                    <div className="flex items-center sm:justify-center gap-4">
                        <MapPin size={40}  />
                        <div className="text-start">
                            <h1 className="font-medium text-lg">Location</h1>
                            <p className="text-base font-normal">Live-streamed event via Zoom</p>
                        </div>
                    </div>
                    <div className="flex items-center sm:justify-center gap-4">
                        <Calendar size={40}  />
                        <div className="text-start">
                            <h1 className="font-medium text-lg">Date</h1>
                            <p className="text-base font-normal ">June 8th, 2024</p>
                        </div>
                    </div>
                    <div className="flex items-center sm:justify-center gap-4">
                        <Clock5 size={40} />
                        <div className="text-start">
                            <h1 className="font-medium text-lg">Time</h1>
                            <p className="text-base font-normal ">6:00PM</p>
                        </div>
                       
                    </div>
                </div>
            </div>
            
        </section>
    );
}
 
export default Banner;