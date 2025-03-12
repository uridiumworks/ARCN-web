"use client";
import { useState } from "react";
import { FaEnvelope } from "react-icons/fa6";
import { IoIosPin } from "react-icons/io";
import { FaPhoneFlip } from "react-icons/fa6";
import { Form } from "../ui/form";
import Image from "next/image";

const Contactform =() => {
    const [yourname, setYOURname] = useState('');
    const [youremail, setYOURemail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: any) => {
        e.preventDefalt();

        console.log("Your name:", yourname)
        console.log("Your email:", youremail)
        console.log("Subject:", subject)
        console.log("Message:", message)

        const res = await fetch('', {
            method: "",
            headers: {},
            body: JSON.stringify({
                yourname, youremail, subject, message
            })
        });

        const {msg} = await res.json();
    }
    
    return (
        <form onSubmit={handleSubmit} className="font-montserrat flex flex-col lg:flex-row gap-6 lg:w-9/12 lg:mx-auto md:px-36 px-5 py-10 md:pt-10 md:pb-20">
            <div className="py-6 md:mt-5 flex flex-col gap-8 text-[#010101] font-montserrat text-[15px] font-normal ">
                <div className="flex flex-col gap-2">
                    <label htmlFor="Yourname" className="font-montserrat text-sm text-[#010101]">Your name</label>
                    <input onChange={e => setYOURname(e. target.value)} value={yourname}  type="text" id="Your name"  className="px-6 py-2 md:h-[45px] md:w-[496px] rounded-sm border border-[#e6e5e5] bg-[#F8F9FC]" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="youremail" className="font-montserrat text-sm text-[#010101]">Your email</label>
                    <input onChange={e => setYOURemail(e. target.value)} value={youremail} type="text" id="email"  className="px-6 py-2 md:h-[45px] md:w-[496px] rounded-sm border border-[#e6e5e5] bg-[#F8F9FC]" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="subject" className="font-montserrat text-sm text-[#010101]">Subject</label>
                    <input onChange={e => setSubject(e. target.value)} value={subject} type="text" id="subject"  className=" px-6 py-2 md:h-[45px] md:w-[496px] rounded-sm border border-[#e6e5e5] bg-[#F8F9FC]"  />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="font-montserrat text-sm text-[#010101]">Your message (optional)</label>
                    <textarea onChange={e => setMessage(e. target.value)} value={message}  id="message" className=" md:h-[230px] md:w-[496px] px-6 py-2 rounded-sm border border-[#e6e5e5] bg-[#F8F9FC]"></textarea>
                </div>
                <button className="bg-[#30A85F] p-3 text-xs text-[#f0f0f0] font-normal rounded-sm md:w-[185px] " type="submit">Submit</button>
            </div>

            <div className="pt-10">
                <div className="">
                    <h1 className="font-medium text-lg text-[#010101]">Get In Touch</h1>
                    <hr className="w-[40px] bg-[#28a359] h-0.5" />
                </div>
                <div className="font-light items-center font-montserrat flex flex-row gap-1 py-4 ">
                    <IoIosPin size={19} className="text-[#30A85F]" />
                    <p className="text-sm font-normal text-[#010101]">9B Wuse Zone 4, Apartment 1A, Abuja Federal Capital Territory</p>
                </div>
                <hr className="border-b-2 my-2 mr-4" />
                <div className="text-sm items-center text-[#010101] font-normal font-montserrat flex flex-row gap-3 py-4 ">
                    <FaEnvelope size={17} className="text-[#30A85F]" />
                    <p>info@arcn.com</p>
                </div>
                <div className="md:pt-40 ">
                    <div className="">
                        <Image src="/Images/mapforms.png" alt="maps" width={590} height={226} />
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Contactform;