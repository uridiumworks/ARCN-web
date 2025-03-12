import Image from "next/image";

const Collection = () => {

    return ( 
        <main className="bg-black lg:min-h-screen md:h-[480px] h-[250px] font-montserrat px-8 ">
            <div className="text-white text-center py-6 space-y-4 lg:space-y-9 place-content-center">
                <h1 className="font-bold font-Montserrat text-3xl md:text-4xl">NEWS</h1>
                <p className="font-normal md:text-xl">A collection of ARCN featured news and upcoming events</p>
            </div>
            <div className="md:pt-7">
                <Image src="/Images/Mandatepage/Worker.png" alt="worker" width={1749} height={481} />
            </div>
        </main>
    );
}
 
export default Collection;