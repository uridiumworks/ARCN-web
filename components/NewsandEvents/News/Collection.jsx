import Image from "next/image";
import Worker from "/Images/Mandatepage/Worker.png";

const Collection = () => {

    return ( 
        <main className="bg-black w-full md:h-[750px] h-[450px]  ">
            <div className="text-white text-center place-content-center space-y-7 p-10">
                <h1 className="font-bold text-[65px]">NEWS</h1>
                <p className="font-normal text-[21px]">A collection of ARCN featured news and upcoming events</p>
            </div>
            <div>
                <Image src={Worker} alt="worker" height={481} />
            </div>
        </main>
    );
}
 
export default Collection;