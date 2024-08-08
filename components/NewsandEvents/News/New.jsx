import Image from "next/image";
import Place from "/Images/News and Events/Place.png";
import Wheat from "/Images/News and Events/wheat.png";
import Borancow from "/Images/News and Events/Borancow.png";

const New = () => {

    return ( 
        <main>
            <div>
                <div>
                    <h1 className="font-semibold text-4xl text-center pt-20">News</h1>
                </div>

                <div className="">
                    
                    <div className="gap-5 px-10 h-[591.59px] flex flex-col md:flex-row">

                        <div>
                            <div>
                                <Image src={Place} alt="Place" width={395}  height={268.59}/>
                            </div>
                            <div>
                                <h1 className="font-semibold text-[23px]">
                                    Nature-positive farms on
                                    remote hillsides in India
                                    show the future of resilient
                                    farming
                                </h1>
                                <p className="font-normal text-base">
                                Monsoons are a mixed blessing for rain-
                                dependent farmers in remote mountain villages:
                                the deluges br…
                                </p>
                                <p className="font-bold text-lg text-[#15271C] "><span className="font-normal text-lg text-[#999999]">Friday, June 17 2022</span>  Read more</p>
                            </div>
                        </div>

                        <div>
                            <div>
                                <Image src={Wheat} alt="Wheat" width={395}  height={268.59} />
                            </div>
                            <div>
                                <h1 className="font-semibold text-[23px]">
                                    Maximizing Wheat Productivity with Supplemental Irrigation
                                </h1>
                                <p className="font-normal text-base">
                                    A new ICARDA study shows how applying key agri-
                                    innovations can strengthen dryland rainfed
                                    production…
                                </p>
                                <p className="font-bold text-lg text-[#15271C] "><span className="font-normal text-lg text-[#999999]">Friday, June 17 2022</span>  Read more</p>
                            </div>
                        </div>

                        <div>
                            <div >
                                <Image src={Borancow} alt="Borancow" width={395}  height={268.59} />
                            </div>
                            <div>
                                <h1 className="font-semibold text-[23px]">
                                First drone-based measurement of ruminant
                                methane emissions in Africa
                                </h1>
                                <p className="font-normal text-base">
                                Flying a mere nine metres above the grasslands at
                                Kapiti, the International Livestock Research Insti…
                                </p>
                                <p className="font-bold text-lg text-[#15271C] "><span className="font-normal text-lg text-[#999999]">Friday, June 17 2022</span>  Read more</p>
                            </div>
                        </div>

                        <div>
                            <div >
                                <Image src={Borancow} alt="Borancow" width={395}  height={268.59} />
                            </div>
                            <div>
                                <h1 className="font-semibold text-[23px]">
                                First drone-based measurement of ruminant
                                methane emissions in Africa
                                </h1>
                                <p className="font-normal text-base">
                                Flying a mere nine metres above the grasslands at
                                Kapiti, the International Livestock Research Insti…
                                </p>
                                <p className="font-bold text-lg text-[#15271C] "><span className="font-normal text-lg text-[#999999]">Friday, June 17 2022</span>  Read more</p>
                            </div>
                        </div>
                    </div>

                    <div className="gap-5 py-10 px-10 h-[591.59px] flex flex-col md:flex-row">

                        <div>
                            <div>
                                <Image src={Place} alt="Place" width={395}  height={268.59}/>
                            </div>
                            <div>
                                <h1 className="font-semibold text-[23px]">
                                    Nature-positive farms on
                                    remote hillsides in India
                                    show the future of resilient
                                    farming
                                </h1>
                                <p className="font-normal text-base">
                                Monsoons are a mixed blessing for rain-
                                dependent farmers in remote mountain villages:
                                the deluges br…
                                </p>
                                <p className="font-bold text-lg text-[#15271C] "><span className="font-normal text-lg text-[#999999]">Friday, June 17 2022</span>  Read more</p>
                            </div>
                        </div>

                        <div>
                            <div>
                                <Image src={Wheat} alt="Wheat" width={395}  height={268.59} />
                            </div>
                            <div>
                                <h1 className="font-semibold text-[23px]">
                                    Maximizing Wheat Productivity with Supplemental Irrigation
                                </h1>
                                <p className="font-normal text-base">
                                    A new ICARDA study shows how applying key agri-
                                    innovations can strengthen dryland rainfed
                                    production…
                                </p>
                                <p className="font-bold text-lg text-[#15271C] "><span className="font-normal text-lg text-[#999999]">Friday, June 17 2022</span>  Read more</p>
                            </div>
                        </div>

                        <div>
                            <div >
                                <Image src={Borancow} alt="Borancow" width={395}  height={268.59} />
                            </div>
                            <div>
                                <h1 className="font-semibold text-[23px]">
                                First drone-based measurement of ruminant
                                methane emissions in Africa
                                </h1>
                                <p className="font-normal text-base">
                                Flying a mere nine metres above the grasslands at
                                Kapiti, the International Livestock Research Insti…
                                </p>
                                <p className="font-bold text-lg text-[#15271C] "><span className="font-normal text-lg text-[#999999]">Friday, June 17 2022</span>  Read more</p>
                            </div>
                        </div>

                        <div>
                            <div >
                                <Image src={Borancow} alt="Borancow" width={395}  height={268.59} />
                            </div>
                            <div>
                                <h1 className="font-semibold text-[23px]">
                                First drone-based measurement of ruminant
                                methane emissions in Africa
                                </h1>
                                <p className="font-normal text-base">
                                Flying a mere nine metres above the grasslands at
                                Kapiti, the International Livestock Research Insti…
                                </p>
                                <p className="font-bold text-lg text-[#15271C] "><span className="font-normal text-lg text-[#999999]">Friday, June 17 2022</span>  Read more</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
 
export default New;