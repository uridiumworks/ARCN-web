import { LuArrowRight } from "react-icons/lu";

const Open = () => {
    return (
        <main>
            <div className="space-y-5 font-montserrat lg:w-8/12 lg:mx-auto">
                <div className="text-[#000000] font-montserrat text-center px-3 lg:px-52 space-y-5 py-10">
                    <h1 className="font-extrabold text-[40px]">Open Opportunities</h1>
                    <p className="font-normal text-base">{`If you're the owner of an active brain, interesting thoughts, and a good soul, we would like to hear from you.`}</p>
                </div>

                <div className="flex flex-col gap-8 px-3.5 justify-center items-center pb-20">
                    <div className="border rounded-2xl py-4 px-5  gap-3 md:items-center flex flex-col md:flex-row items-start md:justify-between w-full lg:w-[60%] h-[30%]" >
                        <div className="font-montserrat space-y-3">
                            <h2 className="font-bold text-base">Marketing & Sales Development</h2>
                            <p className="font-normal text-sm">Demand Generation Manager</p>
                            <p className="font-normal text-xs">Nigeria • Full-time</p>
                        </div>
                        <div className="flex items-center gap-3 bg-[#30A85F] md:w-[150px] md:h-[50px] text-white rounded-full py-1.5 px-4">
                            <button className="md:text-sm text-xs font-semibold">Learn More </button>
                            <LuArrowRight size={19} />
                        </div>
                    </div>

                    <div className="border rounded-2xl gap-3  py-4 px-5 md:items-center items-start flex flex-col md:flex-row justify-between w-full lg:w-[60%] h-[30%]" >
                        <div className="font-montserrat space-y-3">
                            <h2 className="font-bold text-base">General</h2>
                            <p className="font-normal text-sm">General Applications</p>
                            <p className="font-normal text-xs">Remote • Full-time - Remote</p>
                        </div>
                        <div className="flex items-center gap-3 bg-[#30A85F] md:w-[150px] md:h-[50px] text-white rounded-full py-1.5 px-4">
                            <button className="lg:text-sm text-xs font-semibold">Learn More </button>
                            <LuArrowRight size={19} />
                        </div>
                    </div>

                    <div className="border rounded-2xl gap-3 py-4 px-5 md:items-center items-start flex flex-col md:flex-row justify-between w-full lg:w-[60%] h-[30%]" >
                        <div className="font-montserrat space-y-3">
                            <h2 className="font-bold text-base">Technology</h2>
                            <p className="font-normal text-sm">Head of Engineering</p>
                            <p className="font-normal text-xs">Remote • Full-time</p>
                        </div>
                        <div className="flex items-center gap-3 bg-[#30A85F] md:w-[150px] md:h-[50px] text-white rounded-full py-1.5 px-4">
                            <button className="lg:text-sm text-xs font-semibold">Learn More </button>
                            <LuArrowRight size={19} />
                        </div>
                    </div>

                    <div className="border rounded-2xl gap-3 py-4 px-5  md:items-center items-start flex flex-col md:flex-row justify-between w-full lg:w-[60%] h-[30%]" >
                        <div className="font-montserrat space-y-3">
                            <h2 className="font-bold text-base">Technology</h2>
                            <p className="font-normal text-sm">Farm Machine Handler</p>
                            <p className="font-normal text-xs">Toronto • Full-time</p>
                        </div>
                        <div className="flex items-center gap-3 bg-[#30A85F] md:w-[150px] md:h-[50px] text-white rounded-full py-1.5 px-4">
                            <button className="lg:text-sm text-xs font-semibold">Learn More </button>
                            <LuArrowRight size={19} />
                        </div>
                    </div>

                    <div className="bg-[#30A85F] border lg:w-[60%] rounded-2xl px-4 py-4 space-y-4 text-white items-center">
                        <h1 className="font-bold text-2xl">{`Don't see a position you're interested in but
                        you'd still like to apply?`}</h1>
                        <p className="font-normal text-sm">{`We welcome anyone to apply by sending submitting their resume and telling us why they're interested in
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