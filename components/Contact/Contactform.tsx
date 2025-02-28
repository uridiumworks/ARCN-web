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
        <form onSubmit={handleSubmit} className="font-montserrat grid lg:grid-cols-2 grid-cols-1 w-9/12 mx-auto md:px-20 px-10 py-10 gap-5 md:pt-10 md:pb-20">
            <div className="py-4 mt-4 flex flex-col gap-5 font-montserrat text-[15px] font-normal ">
                <div className="flex flex-col gap-2">
                    <label htmlFor="Yourname" className="font-montserrat text-xs text-[#4b4b4b]">Your name</label>
                    <input onChange={e => setYOURname(e. target.value)} value={yourname}  type="text" id="Your name"  className="px-6 py-2 md:h-[35px] rounded-sm border border-[#e6e5e5] bg-[#F8F9FC]" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="youremail" className="font-montserrat text-xs text-[#4b4b4b]">Your email</label>
                    <input onChange={e => setYOURemail(e. target.value)} value={youremail} type="text" id="email"  className="px-6 py-2 w-full md:h-[35px] rounded-sm border border-[#e6e5e5] bg-[#F8F9FC]" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="subject" className="font-montserrat text-xs text-[#4b4b4b]">Subject</label>
                    <input onChange={e => setSubject(e. target.value)} value={subject} type="text" id="subject"  className=" px-6 py-2 md:h-[35px] rounded-sm border border-[#e6e5e5] bg-[#F8F9FC]"  />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="font-montserrat text-xs text-[#4b4b4b]">Your message (optional)</label>
                    <textarea onChange={e => setMessage(e. target.value)} value={message}  id="message" className="w-full md:h-[180px] px-6 py-2 rounded-sm border border-[#e6e5e5] bg-[#F8F9FC]"></textarea>
                </div>
                <button className="bg-[#30A85F] p-3 text-xs text-[#f0f0f0] font-normal rounded-sm w-[185px] " type="submit">Submit</button>
            </div>

            <div className="pt-10">
                <div className="">
                    <h1 className="font-medium text-[15px] text-[#4b4b4b]">Get In Touch</h1>
                    <hr className="w-[40px] bg-[#30A85F] h-0.5" />
                </div>
                <div className="font-light font-montserrat flex flex-row gap-1 py-4 border-b-2 ">
                    <IoIosPin size={15} className="text-[#30A85F]" />
                    <p className="text-xs text-[#4b4b4b]">9B Wuse Zone 4, Apartment 1A, Abuja Federal Capital Territory</p>
                </div>
                <div className="text-xs text-[#4b4b4b] font-normal font-montserrat flex flex-row gap-3 py-4 ">
                    <FaEnvelope size={12} className="text-[#30A85F]" />
                    <p>info@arcn.com</p>
                </div>
                <div className="md:pt-20">
                    <Image src="/Images/mapforms.png" alt="maps" width={605} height={336} />
                </div>
            </div>
        </form>
    )
}

export default Contactform;