"use client"
const Collection = () => {

    return ( 
        <main className="bg-news-cover bg-cover place-content-center bg-fixed bg-center bg-no-repeat relative lg:h-[19rem] bg-black opacity-100  font-montserrat px-8 ">
            <div className="absolute inset-0 lg:h-[19rem] bg-[#000] bg-opacity-[.65]"></div>
            <div className="text-white relative z-10 text-left w-full max-w-[1100px] mx-auto px-10 space-y-2 lg:space-y-4 place-content-center">
                <h1 className="font-bold font-Montserrat text-3xl md:text-4xl">NEWS</h1>
                <p className="font-normal md:text-xl">A collection of ARCN featured news and upcoming events</p>
            </div>
        </main>
    );
}
 
export default Collection;