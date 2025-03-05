import Image from "next/image";

const Dolor = () => {
    return ( 
        <section className="min-h-screen">
            <div className="flex flex-col justify-center gap-7 lg:w-10/12 md:mx-auto"> 
                <div className="flex flex-col justify-center py-10 ">
                    <button type="button" className="text-base font-semibold text-[#3F4654] border-2 border-[#0B3D7929] rounded-md md:w-2/12 mx-auto  py-2 px-4">IMPACT</button>
                </div>

                <div className="flex flex-col text-center md:px-12 space-y-7">
                    <h1 className="font-bold text-[#111827] text-2xl md:text-5xl">Closing the gender gap and enhancing opportunities for youth in food, land, and water systems.</h1>
                    <p className="font-medium text-base md:text-xl md:px-14 text-[#3F4654]">More than 85% of the world&apos;s 1.2 billion youth live in low- and middle-income countries, where many face limited opportunities for employment or entrepreneurship.</p>
                </div>

                <div className=" flex flex-row gap-4 justify-center items-center ">
                    <Image src={"/Images/woman.png"} alt="woman" width={48} height={48} />
                    <div className="flex flex-col justify-start">
                        <h1 className="font-medium text-[#3F4654] text-sm">Ayush Jangra</h1>
                        <p className="font-normal text-[#6B7589] text-xs">Updated on Apr 19, 2024</p>
                    </div>
                </div>

                <div className="flex flex-col px-4">
                    <Image src={"/Images/Homepage/diliveries.png"} alt="" width={1152} height={576} />
                </div>

                <div className="md:w-9/12 py-6 px-4 mx-auto space-y-9">
                    <p className="text-[#111827] font-normal text-sm">Lorem ipsum dolor sit amet consectetur. Viverra at magna placerat mattis. Et nullam hac at felis eu vulputate in a aenean. Pretium nibh ac sed viverra ac urna interdum. Lobortis bibendum enim scelerisque id. Consectetur eget neque luctus magna in elementum. Lacus amet sed arcu in elementum.</p>
                    <p className="text-[#111827] font-normal text-sm">Lorem ipsum dolor sit amet consectetur. Viverra at magna placerat mattis. Et nullam hac at felis eu vulputate in a aenean. Pretium nibh ac sed viverra ac urna interdum. Lobortis bibendum enim scelerisque id. Consectetur eget neque luctus magna in elementum. Lacus amet sed arcu in elementum.</p>
                    <h1 className="text-[#111827] font-bold text-3xl">Lorem ipsum dolor sit amet consectetur. Quis faucibus netus.</h1>
                    <p className="text-[#111827] font-normal text-sm" >Lorem ipsum dolor sit amet consectetur. Amet gravida eu egestas est vulputate massa pretium at. Vestibulum proin ut cras ac dolor viverra lectus tempor. Diam phasellus arcu leo placerat consequat sed. Sagittis ultricies ac non imperdiet egestas vestibulum.
                    Sit et porta non integer nulla nisl amet ac et. Sit id tellus at nulla pulvinar.</p>
                    <p className="text-[#111827] font-normal text-sm">Lorem ipsum dolor sit amet consectetur. Ultrices elit amet sem nullam volutpat convallis aliquam sed id. Sagittis id a sed a lacus. In pretium est.</p>
                    <p className="text-[#111827] font-normal text-sm">Lorem ipsum dolor sit amet consectetur. Amet gravida eu egestas est vulputate massa pretium at. Vestibulum proin ut cras ac dolor viverra lectus tempor. Diam phasellus arcu leo placerat consequat sed. Sagittis ultricies ac non imperdiet egestas vestibulum.
                    Sit et porta non integer nulla nisl amet ac et. Sit id tellus at nulla pulvinar.</p>
                    <p className="text-[#111827] font-normal text-sm">Lorem ipsum dolor sit amet consectetur. Amet gravida eu egestas est vulputate massa pretium at. Vestibulum proin ut cras ac dolor viverra lectus tempor. Diam phasellus arcu leo placerat consequat sed. Sagittis ultricies ac non imperdiet egestas vestibulum.
                    Sit et porta non integer nulla nisl amet ac et. Sit id tellus at nulla pulvinar.</p>
                    <p className="text-[#111827] font-normal text-sm">Lorem ipsum dolor sit amet consectetur. Amet gravida eu egestas est vulputate massa pretium at. Vestibulum proin ut cras ac dolor viverra lectus tempor. Diam phasellus arcu leo placerat consequat sed. Sagittis ultricies ac non imperdiet egestas vestibulum.
                    Sit et porta non integer nulla nisl amet ac et. Sit id tellus at nulla pulvinar.</p>
                    <p className="text-[#111827] font-normal text-sm">Lorem ipsum dolor sit amet consectetur. Amet gravida eu egestas est vulputate massa pretium at. Vestibulum proin ut cras ac dolor viverra lectus tempor. Diam phasellus arcu leo placerat consequat sed. Sagittis ultricies ac non imperdiet egestas vestibulum.
                    Sit et porta non integer nulla nisl amet ac et. Sit id tellus at nulla pulvinar.</p>
                </div> 
            </div>

        </section>
    );
    }
    
    export default Dolor;