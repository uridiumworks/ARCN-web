import Gray from "../../../public/Images/Aboutpage/Gray.png";
import Lime from "../../../public/Images/Aboutpage/Lime.png";
import Peach from "../../../public/Images/Aboutpage/Peach.png";
import Pink from "../../../public/Images/Aboutpage/Pink.png";
import Purple from "../../../public/Images/Aboutpage/Purple.png";
import Lemon from "../../../public/Images/Aboutpage/Lemon.png";
import Image from "next/image";

const Value = () => {
    return (
        <main>
            <div className="">
                <div className="pt-20 space-y-6">
                    <div className="text-center place-content-center">
                        <h1 className="font-semibold text-sm">OUR VALUE</h1>
                        <p className="font-bold text-[40px]">Core Values we define</p>
                        <p className="font-normal text-xl">These values reflect the mission and journey of your company,<br />emphasizing customer success, innovation, empowermen <br />efficiency, collaboration, and growth.</p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-5 pt-14 justify-evenly">

                        <div className="border rounded-xl w-[420px] space-y-3 p-4">
                            <Image src={Gray} alt="Gray" />
                            <p className="font-bold text-xl">Customer-Centric Success</p>
                            <p className="font-normal text-base">Lorem ipsum dolor sit amet consectetur. Erat pharetra dictumst nunc vestibulum in pretium.</p>
                        </div>

                        <div className="border rounded-xl w-[420px] space-y-3 p-4">
                            <Image src={Lime} alt="Lime" />
                            <p className="font-bold text-xl">Continuous Innovation</p>
                            <p className="font-normal text-base">Lorem ipsum dolor sit amet consectetur. Erat pharetra dictumst nunc vestibulum in pretium.</p>
                        </div>
                        
                        <div className="border rounded-xl w-[420px] space-y-3 p-4">
                            <Image src={Peach} alt="Peach" />
                            <p className="font-bold text-xl">Empowerment & Growth</p>
                            <p className="font-normal text-base">Lorem ipsum dolor sit amet consectetur. Erat pharetra dictumst nunc vestibulum in pretium.</p>
                        </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-5 justify-evenly">
                        
                        <div className="border rounded-xl w-[420px] space-y-3 p-4">  
                            <Image src={Pink} alt="Pink" />
                            <p className="font-bold text-xl">Seamlessness</p>
                            <p className="font-normal text-base">Lorem ipsum dolor sit amet consectetur. Erat pharetra dictumst nunc vestibulum in pretium.</p>
                        </div>

                        <div className="border rounded-xl w-[420px] space-y-3 p-4">
                            <Image src={Purple} alt="Purple" />
                            <p className="font-bold text-xl">Collaboration</p>
                            <p className="font-normal text-base">Lorem ipsum dolor sit amet consectetur. Erat pharetra dictumst nunc vestibulum in pretium.</p>
                        </div>
                        
                        <div className="border rounded-xl w-[420px] space-y-3 p-4">
                            <Image src={Lemon} alt="Lemon" />
                            <p className="font-bold text-xl">Endless Progress</p>
                            <p className="font-normal text-base">Lorem ipsum dolor sit amet consectetur. Erat pharetra dictumst nunc vestibulum in pretium.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Value;