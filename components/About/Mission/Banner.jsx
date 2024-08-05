import Image from "next/image";
import Desktop from "@/public/Images/Aboutpage/Desktop.png";

const Banner = () => {
    return (
        <main className="w-full backgroundImage border-2 h-[551px] grid place-content-center text-center">
            <div className="bg-[#000000CC]">
                {/* <Image src={Desktop} alt="Desktop"
                    quality={100}
                    fill
                    sizes="100vw"
                    style={{
                        objectFit: 'cover',
                        backgroundPosition:"center",
                        backgroundrepeat: "no-repeat",
                    }} 
                /> */}
                <h1 className="font-bold font- text-[65px]">ABOUT US</h1>
                <p className="font-normal text-[21px]">What you need to know about Agricultural Research Council of Nigeria</p>
            </div>
        </main>
    )
}

export default Banner;