import Image from "next/image";

const Impart = () => {
    return ( 
        <section className="min-h-screen">
            <div className="w-[100%] pt-10 pb-16 space-y-8">
                <div className="text-center">
                    <h1 className="font-bold text-3xl text-[#0A1425]">FEATURED</h1>
                </div>
                <div className="px-4 lg:mx-auto flex flex-col md:flex-row gap-7">
                    <div className="space-y-4">
                        <Image src="/Images/Homepage/greens.png" alt="plants" width={384} height={300}/>
                        <p className="font-bold text-lg text-[#323539] ">Soil fertility enhancement through organic amendments and cover crops.</p>
                        <p className="font-normal text-sm text-[#858C95]">Soil fertility enhancement through organic amendments and cover crops is a critical aspect of sustainable agriculture.</p>
                        <div className="flex items-center gap-2">
                            <Image src="/Images/Homepage/Millar.png" alt="plants" width={40} height={40}/>
                            <p className="text-[#858C95] text-xs font-medium"><span className="text-xs font-semibold text-[#323539]">Andrew Miller</span> <br />Senior Response Consultant</p>
                        </div>
                    </div>
            
                    <div className="space-y-4">
                        <Image src="/Images/Homepage/Mazi.png" alt="plants" width={384} height={300}/>
                        <p className="font-bold text-lg text-[#323539] ">Soil fertility enhancement through organic amendments and cover crops.</p>
                        <p className="font-normal text-sm text-[#858C95]">Soil fertility enhancement through organic amendments and cover crops is a critical aspect of sustainable agriculture.</p>
                        <div className="flex items-center gap-2">
                            <Image src="/Images/Homepage/David.png" alt="plants" width={40} height={40}/>
                            <p className="text-[#858C95] text-xs font-medium"><span className="text-xs font-semibold text-[#323539]">David Munsan</span> <br />Regional Marketing Developer</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <Image src="/Images/Homepage/wheat.png" alt="plants" width={384} height={300}/>
                        <p className="font-bold text-lg text-[#323539] ">Soil fertility enhancement through organic amendments and cover crops.</p>
                        <p className="font-normal text-sm text-[#858C95]">Soil fertility enhancement through organic amendments and cover crops is a critical aspect of sustainable agriculture.</p>
                        <div className="flex items-center gap-2">
                            <Image src="/Images/Homepage/Avatar.png" alt="plants" width={40} height={40}/>
                            <p className="text-[#858C95] text-xs font-medium"><span className="text-xs font-semibold text-[#323539]">Andrew Meller</span> <br />Dynamic Intranet Officer</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-10 pb-32 lg:w-[100%]">
                <div className="text-center place-content-center font-montserrat">
                    <h1 className="text-4xl font-bold">Impact</h1>
                    <p className="text-lg text-[#64728F] font-normal ">Lorem ipsum dolor sit amet consectetur. Nunc pharetra a felis nibh. Id<br /> ullamcorper nec leo porta. Enim nunc lacinia dui vehicula pellentesque morbi.<br /> Magna nulla consequat.</p>
                </div>
                <div className=" w-full px-4 lg:px-0 md:mx-auto">
                    <div className="flex flex-col lg:flex-row gap-5 pt-14 justify-evenly">
                        <div className="border rounded-xl w-full lg:w-[420px] space-y-3 p-4">
                            <Image src="/Images/Aboutpage/Gray.png" alt="Gray" width={64} height={64} />
                            <p className="font-bold text-base text-[rgb(76,100,195)]">FOOD SECURITY</p>
                            <p className="font-normal text-xs text-[#495057]">Lorem ipsum dolor sit amet consectetur. Erat pharetra dictumst nunc vestibulum in pretium.</p>
                            <button className="font-bold text-xs text-[#171717]">READ MORE</button>
                        </div>

                        <div className="border rounded-xl w-full lg:w-[420px] space-y-3 p-4">
                            <Image src="/Images/Aboutpage/Lime.png" alt="Lime" width={64} height={64} />
                            <p className="font-bold text-base text-[#37B7A3]">RESEARCH INITIATIVES</p>
                            <p className="font-normal text-xs text-[#495057]">Lorem ipsum dolor sit amet consectetur. Erat pharetra dictumst nunc vestibulum in pretium.</p>
                            <button className="font-bold text-xs text-[#171717]">READ MORE</button>
                        </div>

                        <div className="border rounded-xl w-full lg:w-[420px] space-y-3 p-4">
                            <Image src="/Images/Aboutpage/Pink.png" alt="Peach" width={64} height={64} />
                            <p className="font-bold text-base text-[#CA848B]">GENDER AND YOUTH</p>
                            <p className="font-normal text-xs text-[#495057]">Lorem ipsum dolor sit amet consectetur. Erat pharetra dictumst nunc vestibulum in pretium.</p>
                            <button className="font-bold text-xs text-[#171717]">READ MORE</button>
                            
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
    }
    
    export default Impart;