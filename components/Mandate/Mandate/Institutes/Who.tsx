import Image from "next/image";
import { FaRegEnvelope } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";

const Who = () => {

    return ( 
        <main className="font-montserrat ">
            <div className="bg-[#101010] flex flex-col justify-center items-center h-[460px] py-8">
                <div className="flex flex-col justify-center items-center space-y-4">
                    <Image src="/Images/Icons/image 81.png" alt="" width={122} height={122} />
                    <h1 className="text-white text-[40px] font-montserrat font-bold">NATIONAL HORTICULTURAL<br /> RESEARCH INSTITUTE</h1>
                </div>

                <div className="text-white grid grid-cols-3 justify-center gap-9 pt-20">
                    <div className="flex flex-row items-center gap-4 justify-center">
                        <FaMapMarkerAlt size={28.35} />
                        <div className="flex flex-col">
                            <h1 className="font-medium text-base">Location</h1>
                            <p className="font-normal text-sm">Jericho Reservation Area, Ibadan, Nigeria.</p>
                        </div>
                    </div>
                    <div className="flex flex-row items-center gap-4 justify-center">
                        <div>
                            <Image src="/Images/Icons/iconoir_internet.png" alt="" width={40} height={40} />
                        </div>
                        <div className="flex flex-col">
                            <h1 className="font-medium text-base">Website</h1>
                            <p className="font-normal text-sm">nihort.gov.ng</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-4 items-center justify-center">
                        <FaRegEnvelope size={28.35} />
                        <div className="flex flex-col">
                            <h1 className="font-medium text-base">Email</h1>
                            <p className="font-normal text-sm">info@nihort.gov.ng</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="space-y-4 py-4 px-20 font-montserrat">
                <h1 className="text-lg font-semibold text-center">WHO WE ARE</h1>
                <p className="text-[#64728F] text-xl font-normal">The National Horticultural Research Institute (NIHORT), Ibadan started as the “The National Fruit and Vegetable Research and Development Centre (NFVRDC)” with the assistance of UNDP/FAO Project NIR/72/007 in 1975. The Federal Government through Agricultural Research Institutes Establishment Decree Order No. 35 of June 1976, established the “National Horticultural Research Institute (NIHORT)” along with other Agricultural Research Institutes in the country.</p>
                <p className="text-[#64728F] text-xl font-normal">The Institutes headquarters is situated on a 310 ha of land at Jericho Reservation Area here in Idi-Ishin, Ibadan in the rain forest zone of South Western Nigeria. The Institute also has five established outstations located at;</p>
                <ul className="text-[#64728F] text-xl font-normal">
                    <li>1. Mbato  Okigwe Imo State on an 810-hectare land in the humid zoneof South Eastern Nigeria.</li>
                    <li>2. Bagauda in Kano, Kano State on 110 hectares of land in the semi-arid zone of Northern Nigeria.</li>
                    <li>3. Otukpa in Benue State in North Central zone of Nigeria with current land area of 15.6 hectares.</li>
                    <li>4. Riyom near Jos, Plateau State.</li>
                    <li>5. Dadinkowa, Gombe, Gombe State.</li>
                </ul>
                   
            </div>
        </main>
    );
}
 
export default Who;