import Image from "next/image";
import maps from "/Images/Mandatepage/maps.png"

const Maps = () => {
    return (
        <main className="bg-[#F6F6F6]">
            <div>
                <div>
                    <div className="flex flex-col md:flex-row justify-center gap-20 p-10 font-semibold text-[20px]  lg:text-[15px] ">
                        <div className="space-y-5">
                            <p>Cocoa Research Institute Of Nigeria, Ibada</p>
                            <p>National Root Crops Research Institute, Umudike</p>
                            <p>National Cereals Research Institute, Badeggi</p>
                            <p>National Animal Production And Research  Institute, Zaria</p> 
                            <p>National Horticultural Research Institute, Ibada</p> 
                            <p>National Institute For Fresh Fisheries Research, New Bussa</p>
                            <p>National Agricultural Extension Research Liason Services, Zaria</p>
                            <p>National Veterinary Research Institute, VOM</p>
                        </div>

                        <div className="space-y-5">
                            <p>Nigerian Institute For Oceanography And Marine Research, Lagos</p>
                            <p>Nigerian Institute For Oil Palm Research, Beni</p>
                            <p>Nigerian Stored Products Research Institute, Ilori</p>
                            <p>Institute Of Agricultural Research And Training, Ibada</p>
                            <p>Institute For Agricultural Research, Zaria</p>
                            <p>Lake Chad Research Institute, Maidguri</p> 
                            <p>Rubber Research Institute Of Nigeria, Benin City</p>
                            <p>National Centre For Agricultural Mechanization</p>
                        </div>
                    </div>
                    <div className="text-center">
                        <button className="bg-[#30A85F] border py-3 px-10 text-white rounded-md">Detailed view</button>
                    </div>
                </div>

                <div className="mx-auto w-full lg:w-[939px] py-10 ">
                    <Image src={maps} alt="maps"/>
                </div>
                
            </div>
        </main>
    )
}

export default Maps;