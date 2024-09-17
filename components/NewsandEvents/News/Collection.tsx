import Image from "next/image";

const Collection = () => {

    return ( 
        <main className="bg-black w-full md:h-[750px] h-[450px] font-montserrat  ">
            <div className="text-white text-center place-content-center space-y-7 p-10">
                <h1 className="font-bold text-[65px]">NEWS</h1>
                <p className="font-normal text-[21px]">A collection of ARCN featured news and upcoming events</p>
            </div>
            <div>
                <Image src="/Images/Mandatepage/Worker.png" alt="worker" height={481} />
            </div>
        </main>
    );
}
 
export default Collection;