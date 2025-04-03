import Link from "next/link";
import Image from "next/image";

const Food = () => {

    return ( 
        <main>
            <div className="py-10 lg:w-[100%]">
                <div className="lg:w-[70%] w-full px-4 lg:px-0 md:mx-auto">
                    <div className="flex flex-col lg:flex-row gap-5 pt-14 justify-evenly">
                        <div className="border rounded-xl w-full lg:w-[420px] space-y-3 p-4">
                            <Image src="/Images/Aboutpage/Gray.png" alt="Gray" width={64} height={64} />
                            <p className="font-bold text-base text-[rgb(76,100,195)]">FOOD SECURITY</p>
                            <p className="font-normal text-sm text-[#495057]">Lorem ipsum dolor sit amet consectetur. Erat pharetra dictumst nunc vestibulum in pretium.</p>
                            <button className="font-bold text-sm pt-3 text-[#171717]">READ MORE</button>
                        </div>

                        <div className="border rounded-xl w-full lg:w-[420px] space-y-3 p-4">
                            <Image src="/Images/Aboutpage/Lime.png" alt="Lime" width={64} height={64} />
                            <p className="font-bold text-base text-[#37B7A3]">RESEARCH INITIATIVES</p>
                            <p className="font-normal text-sm text-[#495057]">Lorem ipsum dolor sit amet consectetur. Erat pharetra dictumst nunc vestibulum in pretium.</p>
                            <button className="font-bold text-sm pt-3 text-[#171717]">READ MORE</button>
                        </div>

                        <div className="border rounded-xl w-full lg:w-[420px] space-y-3 p-4">
                            <Image src="/Images/Aboutpage/Pink.png" alt="Peach" width={64} height={64} />
                            <p className="font-bold text-base text-[#CA848B]">GENDER AND YOUTH</p>
                            <p className="font-normal text-sm text-[#495057]">Lorem ipsum dolor sit amet consectetur. Erat pharetra dictumst nunc vestibulum in pretium.</p>
                            <Link href={`/impacts/gender-and-youth`}>
                                <button className="font-bold text-sm pt-6 text-[#171717]">READ MORE</button>
                            </Link>
                            {/* <Link href={"/impacts/gender"}>
                                <button className="font-bold text-xs text-[#171717]">READ MORE</button>
                            </Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
 
export default Food;