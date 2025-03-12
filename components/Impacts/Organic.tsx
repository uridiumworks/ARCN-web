import Image from "next/image";
const Organic = () => {

    return ( 
        <main>
            <div className="w-[100%] pt-10 pb-16 px-3 space-y-8">
                <div className="text-center">
                    <h1 className="font-bold text-3xl md:text-4xl text-[#0A1425]">Impact Stories</h1>
                </div>
                <div className="lg:w-[64%] mx-auto flex flex-col md:flex-row gap-7">
                    <div className="space-y-4">
                        <Image src="/Images/Homepage/greens.png" alt="plants" width={384} height={300}/>
                        <p className="font-bold text-base text-[#323539] ">Soil fertility enhancement through organic amendments and cover crops.</p>
                        <p className="font-normal text-sm text-[#858C95]">Soil fertility enhancement through organic amendments and cover crops is a critical aspect of sustainable agriculture.</p>
                        <div className="flex items-center gap-2">
                            <Image src="/Images/Homepage/Millar.png" alt="plants" width={40} height={40}/>
                            <p className="text-[#858C95] text-xs font-medium"><span className="text-xs font-semibold text-[#323539]">Andrew Miller</span> <br />Senior Response Consultant</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <Image src="/Images/Homepage/Mazi.png" alt="plants" width={384} height={300}/>
                        <p className="font-bold text-base text-[#323539] ">Soil fertility enhancement through organic amendments and cover crops.</p>
                        <p className="font-normal text-sm text-[#858C95]">Soil fertility enhancement through organic amendments and cover crops is a critical aspect of sustainable agriculture.</p>
                        <div className="flex items-center gap-2">
                            <Image src="/Images/Homepage/David.png" alt="plants" width={40} height={40}/>
                            <p className="text-[#858C95] text-xs font-medium"><span className="text-xs font-semibold text-[#323539]">David Munsan</span> <br />Regional Marketing Developer</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <Image src="/Images/Homepage/wheat.png" alt="plants" width={384} height={300}/>
                        <p className="font-bold text-base text-[#323539] ">Soil fertility enhancement through organic amendments and cover crops.</p>
                        <p className="font-normal text-sm text-[#858C95]">Soil fertility enhancement through organic amendments and cover crops is a critical aspect of sustainable agriculture.</p>
                        <div className="flex items-center gap-2">
                            <Image src="/Images/Homepage/Avatar.png" alt="plants" width={40} height={40}/>
                            <p className="text-[#858C95] text-xs font-medium"><span className="text-xs font-semibold text-[#323539]">Andrew Meller</span> <br />Dynamic Intranet Officer</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
 
export default Organic;