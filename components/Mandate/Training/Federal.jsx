"use client";

import { useClientNarissData } from "@/hooks/Naris.hooks";

const Federal = () => {
    const { loading, nariss, error } = useClientNarissData();


    return (
        <main>
            <div>
                <div className="py-10 px-7 lg:px-32 place-content-center space-y-7 font-montserrat">
                    <h1 className="font-bold text-4xl">Federal College of Agriculture</h1>
                    <p className="font-normal text-[20px] lg:text-base">Federal College of Agriculture  are non-profit research organizations conducting innovative research. Home to <br />more than 9,000 scientists, researchers, technicians and staff, the Centers work to transform food, land and water <br />systems in a climate crisis. Click on a Center below to learn more.</p>
                </div>

                <div className="bg-[#F6F6F6] font-montserrat ">
                    {/* <div className="flex flex-col md:flex-row justify-center gap-20 p-10 font-semibold text-[20px] lg:text-[15px]">
                        <div className="space-y-5">
                            <p>Federal College of Agriculture, Akure</p>
                            <p>Federal College of Agriculture, Ibadan</p>
                            <p>Federal College of Agriculture, Ishiagu</p>
                            <p>Federal College of Animal Health and production, moor plantation, Ibadan</p> 
                            <p>Federal cooperative college, kaduna</p> 
                            <p>Federal College of Animal Health and production, Vom</p>
                        </div>

                        <div className="space-y-5">
                            <p>Federal College of Agricultural Produce Technology, Kano</p>
                            <p>Federal College of Fisheries and Marine Technology, Lagos</p>
                            <p>Federal College Of Freshwater Fisheries Technology, Baga.</p>
                            <p>Federal College Of Freshwater Fisheries Technology, New Bussa.</p>
                            <p>Federal College of Horticultural Technology, Dadinkowa, gombe</p>
                            <p>Federal College of Veterinary and Medical Laboratory Technology, vom</p> 
                        </div>
                    </div> */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 p-10 font-semibold text-[20px]  lg:text-[15px] ">
                        {nariss?.length > 0 && (
                            <>
                                {nariss?.slice(0, 10)?.map((n, index) => (
                                    <div key={index}>
                                        <p>{n.institutionName}</p>
                                    </div>
                                ))}
                            </>
                        )}
                    </div>
                    <div className="text-center p-9">
                        <button className="bg-[#30A85F] border py-3 px-10 text-white rounded-md">Detailed view</button>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Federal
    ;