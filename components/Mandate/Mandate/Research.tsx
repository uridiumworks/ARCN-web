import Image from "next/image";

const Research = () => {
    return (
        <main className="h-auto md:h-[600px] bg-[#15271C]">
            <div className="text-white text-center">
                <h1 className="font-bold text-[65px]">Research</h1>
                <p className="font-normal text-[21px]">Take a look at some of our technologies</p>
            </div>
            
            <div className="p-3 lg:w-[100%] mx-auto grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-3">

                <div className="relative">
                    <Image src="/Image/Mandatepage/Casava.png" alt="casava" width={368} height={200} />
                    <div className="absolute w-full bg-[#000000CC] bottom-0 text-white p-2">
                        <h1 className="font-medium text-[15.52px]">Calcium A Cassava</h1>
                        <p className="font-normal text-[10.35px]">Lorem ipsum dolor sit amet consectetur. Tellus varius <br />fermentum nisi a quis tristique velit adipiscing magna.</p>
                    </div>
                </div>

                <div className="relative">
                    <Image src="/Image/Mandatepage/Soybeans.png" alt="soybeans" width={368} height={310} />
                    <div className="absolute w-full bg-[#000000CC] bottom-0 text-white p-2">
                        <h1 className="font-medium text-[15.52px]">Calcium A Cassava</h1>
                        <p className="font-normal text-[10.35px]">Lorem ipsum dolor sit amet consectetur. Tellus varius <br />fermentum nisi a quis tristique velit adipiscing magna.</p>
                    </div>
                </div>

                <div className="relative">
                    <Image src="/Image/Mandatepage/Beans.png" alt="beans" width={368} height={310} />
                    <div className="absolute w-full bg-[#000000CC] bottom-0 text-white p-2">
                        <h1 className="font-medium text-[15.52px]">Calcium A Cassava</h1>
                        <p className="font-normal text-[10.35px]">Lorem ipsum dolor sit amet consectetur. Tellus varius <br />fermentum nisi a quis tristique velit adipiscing magna.</p>
                    </div>
                </div>

                <div className="relative">
                    <Image src="/Image/Mandatepage/Grains.png" alt="Grains" width={368} height={310} />
                    <div className="absolute w-full bg-[#000000CC] bottom-0 text-white p-2">
                        <h1 className="font-medium text-[15.52px]">Calcium A Cassava</h1>
                        <p className="font-normal text-[10.35px]">Lorem ipsum dolor sit amet consectetur. Tellus varius <br />fermentum nisi a quis tristique velit adipiscing magna.</p>
                    </div>
                </div>
            </div>
        </main>

    )
}

export default Research;