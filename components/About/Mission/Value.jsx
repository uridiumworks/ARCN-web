
import Image from "next/image";

const Value = () => {
    return (
        <main>
            <div className=" pt-20 space-y-6">
                <div className="text-center place-content-center">
                    <h1 className="font-semibold text-sm">OUR VALUE</h1>
                    <p className="font-bold text-[40px]">Core Values we define</p>
                    <p className="font-normal text-xl">These values reflect the mission and journey of your company,<br />emphasizing customer success, innovation, empowermen <br />efficiency, collaboration, and growth.</p>
                </div>
                
                <div className="lg:w-[1000px] mx-auto space-y-6">
                    <div className="flex flex-col md:flex-row gap-5 pt-14 justify-evenly">

                        <div className="border rounded-xl w-[420px] space-y-3 p-4">
                            <Image src="/Images/Aboutpage/Gray.png" alt="Gray" />
                            <p className="font-bold text-xl">Customer-Centric Success</p>
                            <p className="font-normal text-base">Lorem ipsum dolor sit amet consectetur. Erat pharetra dictumst nunc vestibulum in pretium.</p>
                        </div>

                        <div className="border rounded-xl w-[420px] space-y-3 p-4">
                            <Image src="/Images/Aboutpage/Lime.png" alt="Lime" />
                            <p className="font-bold text-xl">Continuous Innovation</p>
                            <p className="font-normal text-base">Lorem ipsum dolor sit amet consectetur. Erat pharetra dictumst nunc vestibulum in pretium.</p>
                        </div>
                        
                        <div className="border rounded-xl w-[420px] space-y-3 p-4">
                            <Image src="/Images/Aboutpage/Peach.png" alt="Peach" />
                            <p className="font-bold text-xl">Empowerment & Growth</p>
                            <p className="font-normal text-base">Lorem ipsum dolor sit amet consectetur. Erat pharetra dictumst nunc vestibulum in pretium.</p>
                        </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-5 justify-evenly">
                        <div className="border rounded-xl w-[420px] space-y-3 p-4">  
                            <Image src="/Images/Aboutpage/pink.png" alt="Pink" />
                            <p className="font-bold text-xl">Seamlessness</p>
                            <p className="font-normal text-base">Lorem ipsum dolor sit amet consectetur. Erat pharetra dictumst nunc vestibulum in pretium.</p>
                        </div>
                        <div className="border rounded-xl w-[420px] space-y-3 p-4">
                            <Image src="/Images/Aboutpage/Purple.png" alt="Purple" />
                            <p className="font-bold text-xl">Collaboration</p>
                            <p className="font-normal text-base">Lorem ipsum dolor sit amet consectetur. Erat pharetra dictumst nunc vestibulum in pretium.</p>
                        </div>
                        
                        <div className="border rounded-xl w-[420px] space-y-3 p-4">
                            <Image src="/Images/Aboutpage/Lemon.png" alt="Lemon" />
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