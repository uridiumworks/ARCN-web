import { LuArrowRight } from "react-icons/lu";

const Open = () => {
    return (
        <main>
            <div className="space-y-5 font-montserrat w-8/12 mx-auto">
                <div className="text-[#000000] font-montserrat text-center px-36 space-y-5 py-10">
                    <h1 className="font-extrabold text-[40px]">Open Opportunities</h1>
                    <p className="font-normal  text-base">{`If you're the owner of an active brain, interesting thoughts, and a good soul, we would like to hear from you.`}</p>
                </div>

                <div className="flex flex-col gap-8 justify-center items-center pb-20">
                    <div className="border rounded-2xl py-4 px-5 shadow-inner  items-center flex justify-between w-[60%] h-[30%]" >
                        <div className="font-montserrat space-y-1">
                            <h2 className="font-bold text-base">Marketing & Sales Development</h2>
                            <p className="font-normal text-sm">Demand Generation Manager</p>
                            <p className="font-normal text-xs">Nigeria • Full-time</p>
                        </div>
                        <div className="flex items-center gap-3 bg-[#30A85F] w-[150px] h-[50px] text-white rounded-full py-1.5 px-5">
                            <button className="text-sm font-semibold">Learn More </button>
                            <LuArrowRight size={19} />
                        </div>
                    </div>

                    <div className="border rounded-2xl shadow-inner py-4 px-5 items-center flex justify-between w-[60%] h-[30%]" >
                        <div className="font-montserrat space-y-1">
                            <h2 className="font-bold text-base">General</h2>
                            <p className="font-normal text-sm">General Applications</p>
                            <p className="font-normal text-xs">Remote • Full-time - Remote</p>
                        </div>
                        <div className="flex items-center gap-3 bg-[#30A85F] w-[150px] h-[50px] text-white rounded-full py-1.5 px-5">
                            <button className="text-sm font-semibold">Learn More </button>
                            <LuArrowRight size={19} />
                        </div>
                    </div>

                    <div className="border rounded-2xl py-4 px-5 shadow-inner items-center flex justify-between w-[60%] h-[30%]" >
                        <div className="font-montserrat space-y-1">
                            <h2 className="font-bold text-base">Technology</h2>
                            <p className="font-normal text-sm">Head of Engineering</p>
                            <p className="font-normal text-xs">Remote • Full-time</p>
                        </div>
                        <div className="flex items-center gap-3 bg-[#30A85F] w-[150px] h-[50px] text-white rounded-full py-1.5 px-5">
                            <button className="text-sm font-semibold">Learn More </button>
                            <LuArrowRight size={19} />
                        </div>
                    </div>

                    <div className="border rounded-2xl py-4 px-5 shadow-inner items-center flex justify-between w-[60%] h-[30%]" >
                        <div className="font-montserrat space-y-1">
                            <h2 className="font-bold text-base">Technology</h2>
                            <p className="font-normal text-sm">Farm Machine Handler</p>
                            <p className="font-normal text-xs">Toronto • Full-time</p>
                        </div>
                        <div className="flex items-center gap-3 bg-[#30A85F] w-[150px] h-[50px] text-white rounded-full py-1.5 px-5">
                            <button className="text-sm font-semibold">Learn More </button>
                            <LuArrowRight size={19} />
                        </div>
                    </div>

                    <div className="bg-[#30A85F] border w-[60%] rounded-2xl px-4 py-4 space-y-4 text-white items-center">
                        <h1 className="font-bold text-xl">{`Don't see a position you're interested in but
                        you'd still like to apply?`}</h1>
                        <p className="font-normal text-xs">{`We welcome anyone to apply by sending submitting their resume and telling us why they're interested in
                        joining our #paid team!`}</p>

                        <div className="flex items-center gap-3 bg-[#000000] w-[144px] h-[50px] text-white rounded-full py-1.5 px-5">
                            <button className="text-xs font-semibold">Learn More </button>
                            <LuArrowRight size={19} />
                        </div>
                    </div>
                </div>

            </div>
        </main>
    )
}

export default Open;