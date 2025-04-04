import "./style.css";
const Banner = () => {
    return (
        <main>
            <div className="bg-[#070A08] h-[19rem] relative  place-content-center text-center carels backdrop-opacity-55 text-white space-y-10 pb-20 pt-10 lg:pt-0 font-montserrat lg:h-[19rem] md:px-32 px-2">
                <div className="absolute inset-0 lg:h-[19rem] bg-[#2e2e2e] bg-opacity-[.32]"></div>
                <div className="lg:w-[81.1%] text-left relative z-10  lg:mx-auto space-y-4">
                    <h1 className="font-bold text-3xl lg:text-4xl">Why work at ARCN?</h1>
                    <p className="font-normal text-left text-sm">We are fuelling the agriculture economy with some of the brightest, most talented people around. We are proud of where we are now and excited about where we are going. With us, you can show up as your most authentic and creative self, while working in a supportive, high-growth environment where your voice is heard because what you do matters here. Join us.</p>
                </div>
            </div>
        </main>
    )
}

export default Banner;