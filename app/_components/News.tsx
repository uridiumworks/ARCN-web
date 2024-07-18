import Image from "next/image";

const News = () => {
    return (
        <main className="flex flex-col lg:flex-row">
            <div>
                <h1 className="font-bold text-2xl">Journals</h1>
                <div>
                    <div>
                        <Image src="/Images/Homepage/sands.png" width={230} height={168} alt="sands" />
                    </div>
                    <div>
                        <h1 className="font-normal text-[12px]">Soil fertility enhancement through organic amendments and cover crops.</h1>
                        <p className="font-normal text-xs">Soil fertility enhancement through organic amendments and cover crops is a critical aspect of sustainable agriculture.. <span className="font-medium text-xs text-[#30A85F]">Read more</span></p>
                    </div>
                    <div>
                        <div>
                            <Image src="/Images/Homepage/Avatar.png" width={25} height={25} alt="Avatar" className="w-[25px] h-[25px]" />
                        </div>
                        <div>
                            <h1 className="font-semibold text-[9.55px]">Andrew Meller</h1>
                            <p className="font-medium text-[8.92px]">Dynamic Intranet Officer</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <Image src="/Images/Homepage/sands.png" width={230} height={168} alt="sands" />
                    </div>
                    <div>
                        <h1 className="font-normal text-[12px]">Soil fertility enhancement through organic amendments and cover crops.</h1>
                        <p className="font-normal text-xs">Soil fertility enhancement through organic amendments and cover crops is a critical aspect of sustainable agriculture.. <span className="font-medium text-xs text-[#30A85F]">Read more</span></p>
                    </div>
                    <div>
                        <div>
                            <Image src="/Images/Homepage/Avatar.png" alt="Avatar" width={25} height={25} className="w-[25px] h-[25px]" />
                        </div>
                        <div>
                            <h1 className="font-semibold text-[9.55px]">Andrew Meller</h1>
                            <p className="font-medium text-[8.92px]">Dynamic Intranet Officer</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <Image src="/Images/Homepage/sands.png" width={230} height={168} alt="sands" />
                    </div>
                    <div>
                        <h1 className="font-normal text-[12px]">Soil fertility enhancement through organic amendments and cover crops.</h1>
                        <p className="font-normal text-xs">Soil fertility enhancement through organic amendments and cover crops is a critical aspect of sustainable agriculture.. <span className="font-medium text-xs text-[#30A85F]">Read more</span></p>
                    </div>
                    <div>
                        <div>
                            <Image src="/Images/Homepage/Avatar.png" width={25} height={25}  alt="Avatar" className="w-[25px] h-[25px]" />
                        </div>
                        <div>
                            <h1 className="font-semibold text-[9.55px]">Andrew Meller</h1>
                            <p className="font-medium text-[8.92px]">Dynamic Intranet Officer</p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h1 className="font-bold text-2xl">News Articles</h1>
                <div>
                    <p className="font-medium text-[23px]">Nature-positive farms on remote hillsides in India show the future of resilient farming</p>
                    <p className="font-bold text-lg">Friday, June 17 2022 <span className="font-bold text-lg text-[#30A85F]">Read more</span></p>
                </div>
                <div>
                    <p className="font-medium text-[23px]">Nature-positive farms on remote hillsides in India show the future of resilient farming</p>
                    <p className="font-bold text-lg">Friday, June 17 2022 <span className="font-bold text-lg text-[#30A85F]">Read more</span></p>
                </div>
                <div>
                    <p className="font-medium text-[23px]">Nature-positive farms on remote hillsides in India show the future of resilient farming</p>
                    <p className="font-bold text-lg">Friday, June 17 2022 <span className="font-bold text-lg text-[#30A85F]">Read more</span></p>
                </div>
            </div>
        </main>
    )
}

export default News;