import Image from "next/image";
import Worker from "/Images/Mandatepage/Worker.png";

const Banner = () => {

    return ( 
        <main className="bg-black md:h-[750px] h-[450px] ">
            <div className="text-white text-center place-content-center space-y-7 p-10">
                <h1 className="font-bold text-5xl lg:text-[65px]">PROGRAMS AND PROJECTS</h1>
                <p className="font-normal text-[21px]">A collection of ARCN featured news and upcoming events</p>
            </div>
            <div>
                <Image src={Worker} alt="worker" />
            </div>
        </main>
    );
}
 
export default Banner;