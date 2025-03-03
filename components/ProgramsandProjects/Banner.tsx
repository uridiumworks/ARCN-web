import Image from "next/image";

const Banner = () => {

    return ( 
        <main className="bg-black w-full py-10 space-y-3 lg:min-h-screen font-montserrat px-8 ">
            <div className="text-white text-center space-y-8 place-content-center  lg:p-3">
                <h1 className="font-bold text-2xl lg:text-[65px]">PROGRAMS AND PROJECTS</h1>
                <p className="font-normal text-[21px]">A collection of ARCN featured news and upcoming events</p>
            </div>
            <div>
                <Image src="/Images/Mandatepage/Worker.png" alt="worker" width={1849} height={481} />
            </div>
        </main>
    );
}
 
export default Banner;