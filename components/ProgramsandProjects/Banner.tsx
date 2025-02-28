import Image from "next/image";

const Banner = () => {

    return ( 
        <main className="bg-black w-full min-h-screen md:h-[430px] h-[350px] font-montserrat px-8 ">
            <div className="text-white text-center place-content-center space-y-2 lg:p-3">
                <h1 className="font-bold text-5xl lg:text-[65px]">PROGRAMS AND PROJECTS</h1>
                <p className="font-normal text-[21px]">A collection of ARCN featured news and upcoming events</p>
            </div>
            <div>
                <Image src="/Images/Mandatepage/Worker.png" alt="worker" width={1849} height={481} />
            </div>
        </main>
    );
}
 
export default Banner;