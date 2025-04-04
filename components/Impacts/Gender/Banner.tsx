import Image from "next/image";
import gender from "../../../public/Images/Homepage/gender.png";
import "./style.css";

const Banner = () => {
    return ( 
        <section>
            <div className="record h-[19rem] px-4 relative ">
                <div className="absolute inset-0 lg:h-[19rem] bg-[#2e2e2e] bg-opacity-[.40]"></div>
                <div className="flex flex-col-reverse relative z-10  md:flex-row  place-content-center  gap-4 px-3 md:px-16 lg:gap-40 items-center md:items-start lg:h-[19rem] lg:px-28 py-8 ">
                    <div className="text-white text-center md:text-start space-y-5 lg:px-32">
                        <h1 className="font-extrabold text-3xl lg:text-4xl ">GENDER AND YOUTH</h1>
                        <p className="font-light lg:text-xl">Improving the lives and livelihoods of women, youth, and other marginalized groups is vital for equitable, productive, resilient and sustainable food systems.</p>
                    </div>
                    <div>
                        <Image  src={gender} alt="gender" className="lg:w-[310px] md:w-[250px] w-[150px]"/>
                    </div>
                </div>
            </div>
        </section>
    );
    }
    
    export default Banner;