import Image from "next/image";

const Banner = () => {
    return ( 
        <section>
            <div className="flex gap-40 h-[375px] place-content-center justify-center items-center px-28 py-10 bg-[#B3404B]">
                <div className="text-white space-y-3">
                    <h1 className="font-extrabold text-4xl ">GENDER AND YOUTH</h1>
                    <p className="font-light text-3xl">Improving the lives and livelihoods of women, youth, and other<br /> marginalized groups is vital for equitable, productive, resilient and sustainable food systems.</p>
                </div>

                <div>
                    <Image  src="/Images/Homepage/gender.png" alt="gender" width={174} height={174}/>
                </div>
            </div>
        </section>
    );
    }
    
    export default Banner;