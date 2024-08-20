import Image from "next/image";

const Banner = () => {

    return ( 
        <main className="bg-black w-full md:h-[750px] h-[450px]  ">
            <div className="text-white text-center place-content-center space-y-7 p-10">
                <h1 className="font-bold text-[65px]">Training</h1>
                <p className="font-normal text-[21px]">Transforming Food, Land, and Water Systems in a Climate Crisis</p>
            </div>
            <div  className="">
                <Image src="/Images/Mandatepage/Worker.png" alt="worker" width={1849} height={481} />
            </div>
        </main>
    );
}
 
export default Banner;