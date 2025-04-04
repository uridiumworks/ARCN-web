import Image from "next/image";
import "./styles.css";

const Collection = () => {

    return ( 
        <main className="banner lg:h-[19rem] bg-black opacity-100  font-montserrat px-8 ">
            <div className="text-white text-left lg:px-72 px-6 py-6 space-y-2 lg:space-y-4 place-content-center">
                <h1 className="font-bold font-Montserrat text-3xl md:text-4xl">NEWS</h1>
                <p className="font-normal md:text-xl">A collection of ARCN featured news and upcoming events</p>
            </div>
            {/* <div className="md:pt-7">
                <Image src="/Images/Mandatepage/Worker.png" alt="worker" width={1749} height={481} />
            </div> */}
        </main>
    );
}
 
export default Collection;