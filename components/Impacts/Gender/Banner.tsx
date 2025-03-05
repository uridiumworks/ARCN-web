import Image from "next/image";
import gender from "../../../public/Images/Homepage/gender.png";

const Banner = () => {
    return ( 
        <section>
            <div className="flex flex-col-reverse md:flex-row gap-4 px-3 md:px-16 lg:gap-40 items-center md:items-start lg:h-[270px] lg:px-28 py-8 bg-[#B3404B]">
                <div className="text-white text-center md:text-start space-y-5 lg:pr-40">
                    <h1 className="font-extrabold text-2xl lg:text-4xl ">GENDER AND YOUTH</h1>
                    <p className="font-light lg:text-3xl">Improving the lives and livelihoods of women, youth, and other marginalized groups is vital for equitable, productive, resilient and sustainable food systems.</p>
                </div>
                <div>
                    <Image  src={gender} alt="gender" className="lg:w-[380px] md:w-[250px] w-[150px]"/>
                </div>
            </div>
        </section>
    );
    }
    
    export default Banner;