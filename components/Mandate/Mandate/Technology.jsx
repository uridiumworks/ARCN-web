import Image from "next/image";
import Casava from "@/public/Images/Mandatepage/Casava.png";
import Soybeans from "@/public/Images/Mandatepage/Soybeans.png";
import Beans from "@/public/Images/Mandatepage/Beans.png";
import Grains from "@/public/Images/Mandatepage/Grains.png";



const Technolody = () => {
    return (
        <main>
            <div>
                <div className="place-content-center text-center p-9 space-y-4">
                    <h1 className="font-bold text-4xl">Our Technologies</h1>
                    <p className="font-normal text-base">Lorem ipsum dolor sit amet consectetur. Elementum ullamcorper quis etiam euismod quisque <br />montes arcu risus. Magnis posuere tincidunt elit ultrices tortor. Sit semper cras sed duis tortor <br />tempor amet gravida. Rhoncus quis nisl etiam tortor.</p>
                </div>

                <div className="p-3 lg:w-[1200px] mx-auto flex flex-col md:flex-row gap-3">

                    <div className="relative">
                        <Image src={Casava} alt="" width={368} className="rounded-b-3xl" />
                        <div className="absolute w-full rounded-b-3xl bg-[#000000CC] bottom-0 text-white p-2">
                            <h1 className="font-medium text-[15.52px]">Calcium A Cassava</h1>
                            <p className="font-normal text-[10.35px]">Lorem ipsum dolor sit amet consectetur. Tellus varius <br />fermentum nisi a quis tristique velit adipiscing magna.</p>
                        </div>
                    </div>

                    <div className="relative">
                        <Image src={Soybeans} alt="" width={368} className="rounded-b-3xl" />
                        <div className="absolute w-full rounded-b-3xl bg-[#000000CC] bottom-0 text-white p-2">
                            <h1 className="font-medium text-[15.52px]">Calcium A Cassava</h1>
                            <p className="font-normal text-[10.35px]">Lorem ipsum dolor sit amet consectetur. Tellus varius <br />fermentum nisi a quis tristique velit adipiscing magna.</p>
                        </div>
                    </div>

                    <div className="relative"> 
                        <Image src={Beans} alt="" width={368} className="rounded-b-3xl" />
                        <div className="absolute w-full rounded-b-3xl bg-[#000000CC] bottom-0 text-white p-2">
                            <h1 className="font-medium text-[15.52px]">Calcium A Cassava</h1>
                            <p className="font-normal text-[10.35px]">Lorem ipsum dolor sit amet consectetur. Tellus varius <br />fermentum nisi a quis tristique velit adipiscing magna.</p>
                        </div>
                    </div>

                    <div className="relative">
                        <Image src={Grains} alt="" width={368} className="rounded-b-3xl" />
                        <div className="absolute w-full rounded-b-3xl bg-[#000000CC] bottom-0 text-white p-2">
                            <h1 className="font-medium text-[15.52px]">Calcium A Cassava</h1>
                            <p className="font-normal text-[10.35px]">Lorem ipsum dolor sit amet consectetur. Tellus varius <br />fermentum nisi a quis tristique velit adipiscing magna.</p>
                        </div>
                    </div>
                </div>

                <div className="p-9 text-center">
                    <button type="button" className="border py-2 px-9 font-bold text-sm rounded-[4px] text-[#15271C] w-full md:w-[152px] h-[52px]">
                        VIEW ALL
                    </button>
                </div>
            </div>
        </main>
    )
}

export default Technolody;