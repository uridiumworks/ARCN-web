"use client"
const SearchHeader = () => {

    return ( 
        <main className="bg-group bg-cover place-content-center bg-fixed bg-center bg-no-repeat relative lg:h-[19rem] bg-black opacity-100  font-montserrat px-8 ">
            <div className="absolute inset-0 lg:h-[19rem] bg-[#000] bg-opacity-[.75]"></div>
            <div className="text-white relative z-10 text-left w-full max-w-[1100px] mx-auto px-10 space-y-2 lg:space-y-4 place-content-center">
                <h1 className="font-bold font-Montserrat text-3xl md:text-4xl">Search Result</h1>
            </div>
        </main>
    );
}
 
export default SearchHeader;