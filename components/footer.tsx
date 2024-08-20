import Image from 'next/image'
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
    return (
        <main className="lg:h-[506px] bg-[#121212] space-y-5 text-white">
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 justify-center p-10 '>
                <div className='space-y-7'>
                    <div>
                        <Image src="/Images/logo.png" width={212} height={71.47} alt="logo" />
                    </div>
                    <p className='font-normal text-sm'>The mandate of ARCN is to coordinate, <br />supervise and regulate agricultural<br /> research,training and extension in the National <br />Agricultural Research Institutes (NARIs) and <br />Federal Colleges of Agriculture (FCAs).</p>
                    <div className='flex object-center gap-1.5 items-center'>
                        <IoLocationSharp className='size-6' />
                        <p className='font-medium text-sm'>Agricultural Research House, Plot 223D <br />Cadastral Zone B6, Mabushi, Abuja</p>
                    </div>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-5 '>

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
                </div>
              
            </div>
            <hr className='border border-white' />

            <div className='text-center p-3 text-sm font-normal'>
                <h1>© 2024 ARCN. All rights reserved.</h1>
            </div>
        </main>
    )
}

export default Footer;
