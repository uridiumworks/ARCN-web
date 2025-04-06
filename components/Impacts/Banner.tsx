import "./styling.css"
const Banner = () => {

    return ( 
        <main className="w-full picker h-[19rem] px-4 relative  place-content-center text-center font-montserrat">
             <div className="absolute inset-0 lg:h-[19rem] bg-[#000] bg-opacity-[.65]"></div>
            <div className="text-white relative z-10 text-left md:w-[1100px] mx-auto px-10  space-y-3 font-montserrat">
                <h1 className="text-3xl md:text-4xl font-bold">Impact</h1>
                <p className="text-sm font-normal ">Lorem ipsum dolor sit amet consectetur. Nunc pharetra a felis nibh. Id<br /> ullamcorper nec leo porta. Enim nunc lacinia dui vehicula pellentesque morbi.<br /> Magna nulla consequat.</p>
            </div>
        </main>
    );
}
 
export default Banner;