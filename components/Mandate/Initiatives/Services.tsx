import Image from "next/image";



const Services = () => {

    return ( 
        <main>
            <div>
                <div className="text-center place-content-center py-9 space-y-4 font-montserrat">
                    <h1 className="font-bold text-[40px]">Extension Services Initiatives</h1>
                    <p>Lorem ipsum dolor sit amet consectetur. Nunc pharetra a felis nibh. Id <br />ullamcorper nec leo porta. Enim nunc lacinia dui vehicula pellentesque morbi. <br />Magna nulla consequat.</p>
                </div>

                <div className="flex flex-col md:flex-row gap-6 justify-evenly ">

                    <div className='border p-4 rounded-xl flex flex-row-reverse gap-2'>
                        <div className="">
                            <Image src="/Images/Homepage/World.png" alt="overlay" width={180} height={201} className="rounded-[13.4px]" />
                        </div>
                        <div className='space-y-4'>
                        <p className="font-medium text-xl">Initiative A</p>
                        <p className="font-normal text-base text-[#464646]">Our land. Our future. We are #GenerationRestoration.</p>
                        <div className='flex gap-2 items-center text-[#1315175C]'>  
                            <p className="font-normal text-[20px]">13th August 2023</p>
                        </div>
                        <div className="flex gap-3">
                            <button type="button" className="border rounded-[4px] text-[#FFFFFF] bg-[#30A85F] space-y-6 w-full lg:w-[119px] h-[40px]">
                            View
                            </button>
                        </div>
                        </div>
                    </div>  

                    <div className='border p-4 rounded-xl flex flex-row-reverse gap-2'>
                        <div>
                            <Image src="/Images/Homepage/World.png" alt="overlay" width={180} height={201} className="rounded-[13.4px]"  />
                        </div>
                        <div className='space-y-4'>
                            <p className="font-medium text-xl">Initiative A</p>
                            <p className="font-normal text-[16px] text-[#464646]">Our land. Our future. We are #GenerationRestoration.</p>
                            <div className='flex gap-2 items-center text-[#1315175C]'>  
                                <p className="font-normal text-[20px]">13th August 2023</p>
                            </div>

                            <div className="flex gap-3">
                                <button type="button" className="border rounded-[4px] text-[#FFFFFF] bg-[#30A85F] space-y-6 w-full lg:w-[119px] h-[40px]">
                                View
                                </button>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </main>
    );
}
 
export default Services;