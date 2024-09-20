import { LuArrowRight } from "react-icons/lu";

const Open = () => {
    return (
        <main>
            <div className="space-y-5 font-montserrat">
                <div className="text-[#000000] font-montserrat text-center py-10">
                    <h1 className="font-extrabold text-[56px]">Open Opportunities</h1>
                    <p className="font-normal text-[19.06px]">{`If you're the owner of an active brain, interesting thoughts, and a good soul, we would like to hear from you.`}</p>
                </div>
                <div className="flex flex-col gap-8 justify-center items-center pb-20">
                    <div className="border rounded-2xl py-8 px-5 items-start flex justify-between w-[60%] h-[30%]" >
                        <div className="font-montserrat space-y-2">
                            <h2 className="font-bold text-lg">Marketing & Sales Development</h2>
                            <p className="font-normal text-base">Demand Generation Manager</p>
                            <p className="font-normal text-[12.29px]">Nigeria • Full-time</p>
                        </div>
                        <div className="flex items-center gap-3 bg-[#30A85F] w-[150px] h-[64px] text-white rounded-full py-3 px-4">
                            <button className="text-[13.67px] font-semibold">Learn More </button>
                            <LuArrowRight size={24} />
                        </div>
                    </div>

                    <div className="border rounded-2xl py-8 px-5 items-start flex justify-between w-[60%] h-[30%]" >
                        <div className="font-montserrat space-y-2">
                            <h2 className="font-bold text-lg">General</h2>
                            <p className="font-normal text-base">General Applications</p>
                            <p className="font-normal text-[12.29px]">Remote • Full-time - Remote</p>
                        </div>
                        <div className="flex items-center gap-3 bg-[#30A85F] w-[150px] h-[64px] text-white rounded-full py-3 px-4">
                            <button className="text-[13.67px] font-semibold">Learn More </button>
                            <LuArrowRight size={24} />
                        </div>
                    </div>

                    <div className="border rounded-2xl py-8 px-5 items-start flex justify-between w-[60%] h-[30%]" >
                        <div className="font-montserrat space-y-2">
                            <h2 className="font-bold text-lg">Technology</h2>
                            <p className="font-normal text-base">Head of Engineering</p>
                            <p className="font-normal text-[12.29px]">Remote • Full-time</p>
                        </div>
                        <div className="flex items-center gap-3 bg-[#30A85F] w-[150px] h-[64px] text-white rounded-full py-3 px-4">
                            <button className="text-[13.67px] font-semibold">Learn More </button>
                            <LuArrowRight size={24} />
                        </div>
                    </div>

                    <div className="border rounded-2xl py-8 px-5 items-start flex justify-between w-[60%] h-[30%]" >
                        <div className="font-montserrat space-y-2">
                            <h2 className="font-bold text-lg">Technology</h2>
                            <p className="font-normal text-base">Farm Machine Handler</p>
                            <p className="font-normal text-[12.29px]">Toronto • Full-time</p>
                        </div>
                        <div className="flex items-center gap-3 bg-[#30A85F] w-[150px] h-[64px] text-white rounded-full py-3 px-4">
                            <button className="text-[13.67px] font-semibold">Learn More </button>
                            <LuArrowRight size={24} />
                        </div>
                    </div>

                    <div className="bg-[#30A85F] border w-[60%] rounded-2xl px-6 py-8 space-y-4 text-white items-center">
                        <h1 className="font-bold text-[32px]">{`Don't see a position you're interested in but
                        you'd still like to apply?`}</h1>
                        <p className="font-normal text-[15.5px]">{`We welcome anyone to apply by sending submitting their resume and telling us why they're interested in
                        joining our #paid team!`}</p>
                        <div className="flex items-center gap-3 bg-[#000000] w-[150px] h-[64px] text-white rounded-full py-3 px-4">
                            <button className="text-[13.67px] font-semibold">Learn More </button>
                            <LuArrowRight size={21} />
                        </div>
                    </div>
                </div>

            </div>
        </main>
    )
}

export default Open;