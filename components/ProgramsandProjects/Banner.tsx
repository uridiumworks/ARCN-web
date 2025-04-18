import Image from "next/image";
import "./style.css";
const Banner = () => {

    return ( 
        <main className=" w-full panel h-[19rem] px-4 relative  place-content-center font-montserrat lg:px-10 ">
            <div className="absolute inset-0 lg:h-[19rem] bg-[#000] bg-opacity-[.65]"></div>
            <div className="text-white relative z-10 text-left space-y-3 py-7 lg:space-y-4 md:w-[1100px] mx-auto px-10 ">
                <h1 className="font-bold text-3xl lg:text-4xl">PROGRAMS AND PROJECTS</h1>
                <p className="font-normal text-lg md:text-xl">A collection of ARCN featured news and upcoming events</p>
            </div>
        </main>
    );
}
 
export default Banner;