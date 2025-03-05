import Image from "next/image";

const Banner = () => {
    return ( 
        <section>
            <div className="flex flex-row lg:gap-40 px-4 md:h-[300px] lg:px-32 py-8 bg-[#B3404B]">
                <div className="text-white space-y-5">
                    <h1 className="font-extrabold lg:text-4xl ">GENDER AND YOUTH</h1>
                    <p className="font-light lg:text-3xl">Improving the lives and livelihoods of women, youth, and other marginalized groups is vital for equitable, productive, resilient and sustainable food systems.</p>
                </div>

                <div>
                    <Image  src="/Images/Homepage/gender.png" alt="gender" width={174} height={174}/>
                </div>
            </div>
        </section>
    );
    }
    
    export default Banner;