import Image from "next/image";
import "./style.css";
const Banner = () => {

    return ( 
        <main className=" w-full panel h-[19rem] px-4 font-montserrat lg:px-10 ">
            <div className="text-white text-left place-content-center space-y-3 py-7 lg:space-y-4 px-64 lg:py-14">
                <h1 className="font-bold text-3xl lg:text-4xl">PROGRAMS AND PROJECTS</h1>
                <p className="font-normal text-lg md:text-xl">A collection of ARCN featured news and upcoming events</p>
            </div>
        </main>
    );
}
 
export default Banner;