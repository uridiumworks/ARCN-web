import "./style.css";
const Banner =() => {
    return (
        <main className="banner text-white px-4 relative  place-content-center font-montserrat lg:px-56  text-left pb-20  h-[10rem] lg:h-[19rem]">
            <div className="absolute inset-0 lg:h-[19rem] bg-[#000] bg-opacity-[.65]"></div>
            <div className="relative z-10 place-content-center md:w-[1100px] mx-auto px-10  ">
                <h1 className="font-extrabold text-3xl md:text-4xl">CONTACT US</h1>
            </div>
        </main>
    )
}

export default Banner;