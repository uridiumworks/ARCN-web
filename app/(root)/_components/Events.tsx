import { MapPin } from 'lucide-react';
import Image from 'next/image';

const Events = () => {
    return (
        <main>
            <div className='flex flex-col lg:flex-row'>
                <div>
                    <div className='border flex flex-row-reverse'>
                        <div className='w-[201px]'>
                            <Image src="/Image/Homepage/Overlay.png" width={201} height={201} alt="Overlay" />
                        </div>
                        <div>
                            <h1>6:00 PM · 7:00 PM GMT+2</h1>
                            <p>World Environment Day 2024</p>
                            <p>Our land. Our future. We are #GenerationRestoration.</p>
                            <div className='flex flex-col lg:flex-row'>
                                <MapPin />  
                                <p>Live-streamed event via Zoom</p>
                            </div>
                            <button type="button" className="border rounded-lg text-[#07A460] bg-[#07A46022] space-y-6 w-full lg:w-[119px] h-[40px]">
                            Register Here
                            </button>
                        </div>
                    </div>

                    <div className='border flex flex-row-reverse'>
                        <div className='w-[201px]'>
                            <Image src="/Image/Homepage/Overlay.png" width={201} height={201} alt="Overlay" />
                        </div>
                        <div>
                            <h1>6:00 PM · 7:00 PM GMT+2</h1>
                            <p>World Environment Day 2024</p>
                            <p>Our land. Our future. We are #GenerationRestoration.</p>
                            <div className='flex flex-col lg:flex-row'>
                                <MapPin />  
                                <p>Live-streamed event via Zoom</p>
                            </div>
                            <button type="button" className="border rounded-lg text-[#07A460] bg-[#07A46022] space-y-6 w-full lg:w-[119px] h-[40px]">
                            Register Here
                            </button>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='border flex flex-row-reverse'>
                        <div className='w-[201px]'>
                            <Image src="/Image/Homepage/Overlay.png" width={201} height={201} alt="Overlay" />
                        </div>
                        <div>
                            <h1>6:00 PM · 7:00 PM GMT+2</h1>
                            <p>World Environment Day 2024</p>
                            <p>Our land. Our future. We are #GenerationRestoration.</p>
                            <div className='flex flex-col lg:flex-row'>
                                <MapPin />  
                                <p>Live-streamed event via Zoom</p>
                            </div>
                            <button type="button" className="border rounded-lg text-[#07A460] bg-[#07A46022] space-y-6 w-full lg:w-[119px] h-[40px]">
                            Register Here
                            </button>
                        </div>
                    </div>

                    <div className='border flex flex-row-reverse'>
                        <div className='w-[201px]'>
                            <Image src="/Image/Homepage/Overlay.png" width={201} height={201} alt="Overlay" />
                        </div>
                        <div>
                            <h1>6:00 PM · 7:00 PM GMT+2</h1>
                            <p>World Environment Day 2024</p>
                            <p>Our land. Our future. We are #GenerationRestoration.</p>
                            <div className='flex flex-col lg:flex-row'>
                                <MapPin />  
                                <p>Live-streamed event via Zoom</p>
                            </div>
                            <button type="button" className="border rounded-lg text-[#07A460] bg-[#07A46022] space-y-6 w-full lg:w-[119px] h-[40px]">
                            Register Here
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Events;