const Impact = () => {
    return (
        <main>
            <div className="h-[584px] bg-[#011610] py-4 lg:p-20">
                <div className=" place-content-center text-center p-9 space-y-9">
                    <h1 className="text-[#E6E9E7] text-5xl font-semibold">Impacts Based On Numbers</h1>

                    <div className="flex w-full flex-col md:flex-row justify-center gap-6">
                        <div className="border border-[#409A72] bg-[#409A72] w-[191px] h-[121px] rounded-lg text-center place-content-center">
                            <h1 className="text-[#FBBA03] text-4xl font-semibold">638</h1>
                            <p className="text-[#FFFFFF] text-base font-normal">Agricultural <br/>Innovations</p>
                        </div>

                        <div className="border border-[#409A72] bg-[#409A72] w-[255px] h-[121px] rounded-lg text-center place-content-center">
                            <h1 className="text-[#FBBA03] text-4xl font-semibold">105</h1>
                            <p className="text-[#FFFFFF] text-base font-normal"> Improved Agricultural <br/>Technologies</p>
                        </div>

                        <div className="border border-[#409A72] bg-[#409A72] w-[347px] h-[121px] rounded-lg text-center place-content-center">
                            <h1 className="text-[#FBBA03] text-4xl font-semibold">132</h1>
                            <p className="text-[#FFFFFF] text-base font-normal">Small and medium sized <br />enterprises (SMEs) supported</p>
                        </div>

                        <div className="border border-[#409A72] bg-[#409A72] w-[225px] h-[121px] rounded-lg text-center place-content-center">
                            <h1 className="text-[#FBBA03] text-4xl font-semibold">2791</h1>
                            <p className="text-[#FFFFFF] text-base font-normal">Students trained in <br />Masters and PhD</p>
                        </div>
                        
                    </div>

                    <div>
                        <p className="text-[#E6E9E7] text-lg font-normal">
                            The results of research activities coordinated by ARCN have significantly improved agricultural
                            <br />production and productivity, increased incomes and enriched the livelihoods of millions of farmers and
                            <br />entrepreneurs in Nigeria.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Impact;