import Image from "next/image";

const Ours = () => {

    return ( 
        <section className=""> 
            <div className="flex flex-col justify-center text-center mx-auto py-5 font-montserrat space-y-6 ">
                <div className="">
                    <h1 className="text-[#111827] text-3xl md:text-[39.5px] font-bold">Our Impacts in the Last 10 Years</h1>
                </div>
                <div className=" flex flex-col items-center text-center  place-content-center space-y-7 px-5 lg:w-1/2 lg:mx-auto ">
                    <Image src="/Images/Homepage/Rectangle.png" alt="plants" width={846} height={385}/>
                    <p className="text-[#64728F] text-base font-normal">Lorem ipsum dolor sit amet consectetur. Nunc pharetra a felis nibh. Id<br /> ullamcorper nec leo porta. Enim nunc lacinia dui vehicula pellentesque morbi.<br /> Magna nulla consequat.</p>
                </div>
            </div>
        </section>
    );
}
 
export default Ours;