import Image from "next/image";

const Collection = () => {

    return ( 
        <main className="bg-black lg:h-[530px] h-[350px] font-montserrat px-8 ">
            <div className="text-white text-center place-content-center space-y-2 lg:p-3">
                <h1 className="font-bold text-[65px]">NEWS</h1>
                <p className="font-normal md:text-[21px]">A collection of ARCN featured news and upcoming events</p>
            </div>
            <div>
                <Image src="/Images/Mandatepage/Worker.png" alt="worker" width={1849} height={481} />
            </div>
        </main>
    );
}
 
export default Collection;