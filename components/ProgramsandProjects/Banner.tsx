import Image from "next/image";

const Banner = () => {

    return ( 
        <main className="bg-black w-full lg:min-h-screen h-[330px] px-4 font-montserrat lg:px-10 ">
            <div className="text-white text-center place-content-center space-y-3 py-7 lg:space-y-8 lg:py-14">
                <h1 className="font-bold text-3xl lg:text-[65px]">PROGRAMS AND PROJECTS</h1>
                <p className="font-normal text-lg md:text-[21px]">A collection of ARCN featured news and upcoming events</p>
            </div>
            <div>
                <Image src="/Images/Mandatepage/Worker.png" alt="worker" width={1749} height={481} />
            </div>
        </main>
    );
}
 
export default Banner;