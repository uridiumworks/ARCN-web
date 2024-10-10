import React from 'react'
import Image from 'next/image'

const FundingMotto = () => {
    return (
        <div className='w-full font-montserrat bg-black flex justify-center items-center py-28'>
            <div className="text-center">
                <h1 className="text-4xl font-bold text-white">ARCN secures $2.5 million seed<br />
                    funding to optimize on-demand food<br />
                    delivery in Nigeria</h1>
                    <p className='text-white mt-4 font-montserrat'>SHARE</p>
                <div className='flex justify-center gap-3 mt-4'>
                    <Image src="/Images/facebook.png" alt="" width={44} height={44}></Image>
                    <Image src="/Images/twitter.png" alt="" width={44} height={44}></Image>
                    <Image src="/Images/linkedin.png" alt="" width={44} height={44}></Image>
                </div>
            </div>
        </div>
    )
}

export default FundingMotto

