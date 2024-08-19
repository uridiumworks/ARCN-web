import "./styling.css"
import Image from "next/image";
const Bander = () => {
    return (
        <main className="h-[709px] banner bg-[#00000099] text-black">
            <div className="h-[709px] bg-[#00000099] opacity-8">
                <div className="h-[70%] opacity-80 flex justify-center items-center">
                    <div className="w-full text-white space-y-5 text-center place-content-center">
                        <h1 className="font-bold text-[47px]">ARCN and UNN introduce new
                        <br />strategy agroecological sustainable farming</h1>
                        <p className="text-[#FFC84F] text-[20px] font-bold">Regional government and CGIAR partnership launch agroforestry <br />corridor to preserve biodiversity.</p>
                        <button
                            type="button"
                        className="border-2 py-2 px-8 font-Rubik rounded-sm font-bold text-xl md:text-base text-black focus:outline-none border-white bg-white "
                        >
                        READ MORE
                    </button>
                    </div>
                </div>
                <div className="h-[30%]  bg-[#000000B2] flex justify-center items-center gap-24 p-8">
                    <div>
                    <Image src="/Images/Homepage/Newpaper.png" width={220.3} height={148.78} alt="paper" />
                    </div>
                    <div className="text-white text-center">
                        <h1 className="font-medium text-[34.42px]">Journal of Applied Agricultural <br />Research (JAAR)</h1>
                        <p className="font-normal text-[20.65px]">CALL FOR PAPERS AND SUBMISSION OF MANUSCRIPTS</p>
                    </div>
                    <div className="">
                        <button
                            type="button"
                            className="py-2 px-8 w-[234.02px] h-[44.75px] font-Rubik rounded-sm font-bold text-[12.05px] text-white bg-[#04662A] ">
                            SUBMIT NOW
                        </button>
                    </div>
                </div>
            </div>
        </main>

        // <main className="lg:h-[806px] bg-[#000000CC] text-center picker space-y-5 text-black place-content-center">
        //     <div className="w-full h-[806px] h-80% opacity-80 items-center space-y-32">
        //         <div className="w-full text-white space-y-5 ">
        //             <h1 className="font-bold text-[47px]">ARCN and UNN introduce new
        //             <br />strategy agroecological sustainable farming</h1>
        //             <p className="text-[#FFC84F] text-[20px] font-bold">Regional government and CGIAR partnership launch agroforestry <br />corridor to preserve biodiversity.</p>
        //             <button
        //                 type="button"
        //                 className="border-2 py-2 px-8 font-Rubik rounded-sm font-bold text-xl md:text-base text-black focus:outline-none border-white bg-white "
        //             >
        //                 READ MORE
        //             </button>
        //         </div>  
        //     </div>

        //     <div className="flex items-center h-20% justify-center gap-44 bg-[#000000] h-[215px] ">
        //         <div className="text-white">
        //             <h1 className="font-medium text-[34.42px]">Journal of Applied Agricultural <br />Research (JAAR)</h1>
        //             <p className="font-normal text-[20.65px]">CALL FOR PAPERS AND SUBMISSION OF MANUSCRIPTS</p>
        //         </div>
        //         <button
        //             type="button"
        //             className="py-2 px-8 w-[234.02px] h-[44.75px] font-Rubik rounded-sm font-bold text-[12.05px] text-white bg-[#04662A] "
        //         >
        //             SUBMIT NOW
        //         </button>
        //     </div>
        // </main>
    )
}

export default Bander;