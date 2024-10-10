import Image from "next/image";
import "./style.css"
const Banner = () => {
    return (
        <main className="w-full picker h-[350px] place-content-center text-center font-montserrat">
            <div className="w-full h-[350px] bg-[#000000CC] opacity-8 flex justify-center items-center">
                <div className="w-full text-white">
                    <h1 className="font-bold font- text-[65px]">ABOUT US</h1>
                    <p className="font-normal text-[21px]">What you need to know about Agricultural Research Council of Nigeria</p>
                </div>
            </div>
        </main>
    )
}

export default Banner;