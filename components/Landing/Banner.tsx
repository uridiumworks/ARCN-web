import "./styling.css";
import Image from "next/image";

const Bander = () => {
    return (
        <main className="h-full md:h-auto banner bg-[#00000099] font-montserrat text-black">
            <div className="h-full bg-[#00000099] opacity-8">
                <div className="h-[80%] md:h-[100%] opacity-80 py-9 flex justify-center items-center">
                    <div className="w-full font-montserrat text-white space-y-5 text-center px-4 md:px-0">
                        <h1 className="font-bold text-[32px] md:text-[47px]">
                            ARCN and UNN introduce new
                            <br />strategy agroecological sustainable farming
                        </h1>
                        <p className="text-[#FFC84F] text-[16px] md:text-[20px] font-bold">
                            Regional government and CGIAR partnership launch agroforestry
                            <br className="hidden md:block" /> corridor to preserve biodiversity.
                        </p>
                        <button
                            type="button"
                            className="border-2 py-2 px-8 font-Rubik rounded-sm font-bold text-sm md:text-xl text-black focus:outline-none border-white bg-white"
                        >
                            READ MORE
                        </button>
                    </div>
                </div>
                <div className="h-[20%] md:h-[10%] font-montserrat bg-[#000000B2] flex flex-col md:flex-row justify-center items-center gap-8 md:gap-24 p-4 ">
                    <div>
                        <Image src="/Images/Homepage/Newpaper.png" width={220.3} height={148.78} alt="paper" />
                    </div>
                    <div className="text-white text-center">
                        <h1 className="font-medium text-[24px] md:text-[34.42px]">
                            Journal of Applied Agricultural <br />Research (JAAR)
                        </h1>
                        <p className="font-normal text-[16px] md:text-[20.65px]">
                            CALL FOR PAPERS AND SUBMISSION OF MANUSCRIPTS
                        </p>
                    </div>
                    <div>
                        <button
                            type="button"
                            className="py-2 px-8 w-full md:w-[234.02px] font-montserrat h-[44.75px] font-Rubik rounded-sm font-bold text-[12.05px] text-white bg-[#04662A]"
                        >
                            SUBMIT NOW
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Bander;
