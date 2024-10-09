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
        <form onSubmit={handleSubmit} className="font-montserrat grid lg:grid-cols-2 grid-cols-1 md:px-20 px-10 py-12 gap-7 md:py-28">
            <div className="py-4 mt-4 flex flex-col gap-5 font-montserrat text-[15px] font-normal ">
                <div className="flex flex-col gap-2">
                    <label htmlFor="Yourname" className="font-montserrat">Your name</label>
                    <input onChange={e => setYOURname(e. target.value)} value={yourname}  type="text" id="Your name" placeholder="john" className="shadow-md px-6 py-2 w-full md:w-[590px] md:h-[52px] rounded-sm border border-[#DEDEDE] bg-[#F8F9FC]" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="youremail">Your email</label>
                    <input onChange={e => setYOURemail(e. target.value)} value={youremail} type="text" id="email" placeholder="john@gmail.com" className="shadow-md px-6 py-2 w-full md:w-[590px] md:h-[52px] rounded-sm border border-[#DEDEDE] bg-[#F8F9FC]" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="subject">Subject</label>
                    <input onChange={e => setSubject(e. target.value)} value={subject} type="text" id="subject" placeholder="Fisheries Research" className="shadow-md px-6 py-2 w-full md:w-[590px] md:h-[52px] rounded-sm border border-[#DEDEDE] bg-[#F8F9FC]"  />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="message">Your message (optional)</label>
                    <textarea onChange={e => setMessage(e. target.value)} value={message}  id="message" placeholder="Type your message here..." className="w-full h- md:w-[590px] h-[274px] shadow-md px-6 py-2 rounded-sm border border-[#DEDEDE] bg-[#F8F9FC]"></textarea>
                </div>
                <button className="bg-[#30A85F] p-3 text-white font-normal w-[271px] " type="submit">Submit</button>
            </div>
            <div>
                <div className="pb-6">
                    <h1 className="font-medium text-xl">Get In Touch</h1>
                    <hr className="w-[50px] bg-[#30A85F] h-1" />
                </div>
                <div className="text-[15px] font-normal font-montserrat flex flex-row gap-3 py-7 border-b-2 ">
                    <IoIosPin size={25} className="text-[#30A85F]" />
                    <p>9B Wuse Zone 4, Apartment 1A, Abuja Federal Capital Territory</p>
                </div>
                <div className="text-[15px] font-normal font-montserrat flex flex-row gap-3 py-7 border-b-2 ">
                    <FaPhoneFlip size={18} className="text-[#30A85F]" />
                    <p>+234 906 123 4567</p>
                </div>
                <div className="text-[15px] font-normal font-montserrat flex flex-row gap-3 py-7 ">
                    <FaEnvelope size={18} className="text-[#30A85F]" />
                    <p>info@arcn.com</p>
                </div>
                <div>
                    <Image src="/Images/mapforms.png" alt="maps" width={605} height={336} />
                </div>
            </div>
        </form>
    )
}

export default Contactform;