import Image from "next/image";

const Food = () => {

    return ( 
        <main>
            <div className="py-10 lg:w-[100%]">
                <div className="text-center place-content-center font-montserrat">
                    <h1 className="text-[40px] font-bold">Impact</h1>
                    <p className="text-xl text-[#64728F] font-normal ">Lorem ipsum dolor sit amet consectetur. Nunc pharetra a felis nibh. Id<br /> ullamcorper nec leo porta. Enim nunc lacinia dui vehicula pellentesque morbi.<br /> Magna nulla consequat.</p>
                </div>
                <div className="lg:w-[90%] w-full px-4 lg:px-0 md:mx-auto">
                    <div className="flex flex-col lg:flex-row gap-5 pt-14 justify-evenly">
                        <div className="border rounded-xl w-full lg:w-[420px] space-y-3 p-4">
                            <Image src="/Images/Aboutpage/Gray.png" alt="Gray" width={64} height={64} />
                            <p className="font-bold text-xl text-[#4C64C3]">FOOD SECURITY</p>
                            <p className="font-normal text-base text-[#495057]">Lorem ipsum dolor sit amet consectetur. Erat pharetra dictumst nunc vestibulum in pretium.</p>
                            <button className="font-bold text-xs text-[#171717]">READ MORE</button>
                        </div>

                        <div className="border rounded-xl w-full lg:w-[420px] space-y-3 p-4">
                            <Image src="/Images/Aboutpage/Lime.png" alt="Lime" width={64} height={64} />
                            <p className="font-bold text-xl text-[#37B7A3]">RESEARCH INITIATIVES</p>
                            <p className="font-normal text-base text-[#495057]">Lorem ipsum dolor sit amet consectetur. Erat pharetra dictumst nunc vestibulum in pretium.</p>
                            <button className="font-bold text-xs text-[#171717]">READ MORE</button>
                        </div>

                        <div className="border rounded-xl w-full lg:w-[420px] space-y-3 p-4">
                            <Image src="/Images/Aboutpage/Pink.png" alt="Peach" width={64} height={64} />
                            <p className="font-bold text-xl text-[#CA848B]">GENDER AND YOUTH</p>
                            <p className="font-normal text-base text-[#495057]">Lorem ipsum dolor sit amet consectetur. Erat pharetra dictumst nunc vestibulum in pretium.</p>
                            <button className="font-bold text-xs text-[#171717]">READ MORE</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
 
export default Food;