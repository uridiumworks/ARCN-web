import Image from "next/image";

const Banner = () => {
    return ( 
        <main>
            <div className="flex gap-8 h-[375px] place-content-center justify-center items-center p-10 font-montserrat bg-[#B3404B]">
                <div className="text-white space-y-3">
                    <h1 className="font-extrabold text-5xl ">GENDER AND YOUTH</h1>
                    <p className="font-light text-4xl">Improving the lives and livelihoods of women, youth, and other<br /> marginalized groups is vital for equitable, productive, resilient and sustainable food systems.</p>
                </div>

                <div>
                    <Image  src="/Images/Homepage/gender.png" alt="gender" width={174} height={174}/>
                </div>
            </div>
        </main>
    );
    }
    
    export default Banner;