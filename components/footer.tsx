import Image from 'next/image'
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
    return (
        <main className="bg-[#121212] text-white text-center lg:text-left space-y-5 lg:space-y-8 p-4 lg:p-10">
            <div className="flex flex-col lg:flex-row lg:space-x-8">
                <div className="flex flex-col space-y-4 lg:space-y-6">
                    <div>
                        <Image src="/Images/logo.png" width={212} height={71.47} alt="logo" />
                    </div>
                    <p className="font-normal text-sm lg:text-base">
                        The mandate of ARCN is to coordinate, supervise and regulate agricultural
                        research, training, and extension in the National Agricultural Research
                        Institutes (NARIs) and Federal Colleges of Agriculture (FCAs).
                    </p>
                    <div className="flex items-center justify-center lg:justify-start gap-2.5">
                        <IoLocationSharp className="text-xl lg:text-2xl" />
                        <p className="font-medium text-sm lg:text-base">
                            Agricultural Research House, Plot 223D <br />
                            Cadastral Zone B6, Mabushi, Abuja
                        </p>
                    </div>
                </div>

                {/* Uncomment and adjust the following sections as needed */}
                {/* <div className="text-white flex flex-col lg:flex-row lg:space-x-8">
                    <div>
                        <h2 className="mb-4 text-lg lg:text-xl font-semibold">Company</h2>
                        <ul className="text-base lg:text-sm">
                            <li className="mb-4"><a href="#">Home</a></li>
                            <li className="mb-4"><a href="#">About Us</a></li>
                            <li className="mb-4"><a href="#">Services</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-4 text-lg lg:text-xl font-semibold">Our Services</h2>
                        <ul className="text-base lg:text-sm">
                            <li className="mb-4"><a href="#">Research</a></li>
                            <li className="mb-4"><a href="#">Training</a></li>
                            <li className="mb-4"><a href="#">Extension</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-4 text-lg lg:text-xl font-semibold">Publications</h2>
                        <ul className="text-base lg:text-sm">
                            <li className="mb-4"><a href="#">Research papers</a></li>
                            <li className="mb-4"><a href="#">Reports</a></li>
                            <li className="mb-4"><a href="#">Newsletter</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-4 text-lg font-semibold">Social Profiles</h2>
                        <div className="flex gap-5 justify-center lg:justify-start">
                            <a href="/" target="_blank"><img src="/Images/Homepage/facebook.png" alt="facebook" width={44} height={44} /></a>
                            <a href="/" target="_blank"><img src="/Images/Homepage/twitter.png" alt="twitter" width={44} height={44} /></a>
                            <a href="/" target="_blank"><img src="/Images/Homepage/Linkin.png" alt="linkedin" width={44} height={44} /></a>
                        </div>
                    </div>
                </div> */}
            </div>
            <hr className="border-2 border-red-500" />
        </main>
    )
}

export default Footer;
