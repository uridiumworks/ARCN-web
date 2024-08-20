import React from 'react'
import Image from 'next/image'


const MeetManagement = () => {
    return (
        <div className='w-full bg-white flex justify-center items-center py-20 flex-col'>
            <div className="text-center">
                <h1 className="text-4xl font-semi-bold text-[#1B222B]">Meet The Management</h1>
                <p className="text-lg text-gray mt-4">
                    Lorem ipsum dolor sit amet consectetur. Et aliquam ullamcorper
                </p>
                <p className="text-center text-lg text-gray">
                    eget vitae adipiscing tortor varius habitant. Urna elit ut enim nec
                </p>
                <p className="text-center text-lg text-gray">
                    quis sit id eget auctor. Adipiscing vestibulum vel sit netus platea.
                </p>
                <p className="text-center text-lg text-gray">
                    Nunc a vitae blandit pulvinar. Tincidunt.
                </p>
            </div>

            <div className='mt-8 text-center'>
                <Image src="/images/image 75.png" alt="" width={250} height={280} className='rounded-full' />
                <p className='font-[700] text-[14px] mt-3'>Prof. Garba Hamidu Sharubutu</p>
                <p className='text-[11px] font-[400] text-[#3D4852]'>Executive Secretary </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 items-center justify-center mt-8">
            <div className='text-center mx-auto'>
                    <Image src="/images/image 75 (1).png" alt="" width={170} height={170} className='mx-auto rounded-full' />
                    <p className='font-[700] text-[14px] mt-3'>Prof. Bello Zaki Abubakar</p>
                    <p className='text-[11px] font-[400] text-[#3D4852]'>Director  Extension and Social – Economic Department</p>
                </div>
                <div className='text-center mx-auto'>
                    <Image src="/images/image 75 (2).png" alt="" width={170} height={170} className='mx-auto rounded-full' />
                    <p className='font-[700] text-[14px] mt-3'>Dr. Kidda Danjuma</p>
                    <p className='text-[11px] font-[400] text-[#3D4852]'>Director, Livestock Department.</p>
                </div>
                <div className='text-center mx-auto'>
                    <Image src="/images/image 75 (3).png" alt="" width={170} height={170} className='mx-auto rounded-full' />
                    <p className='font-[700] text-[14px] mt-3'>Dr. Nuhu Yusuf</p>
                    <p className='text-[11px] font-[400] text-[#3D4852]'>Director  Knowledge Management and <br></br>
                    Communication Department.</p>
                </div>
                <div className='text-center mx-auto'>
                    <Image src="/images/image 75 (4).png" alt="" width={170} height={170} className='mx-auto rounded-full' />
                    <p className='font-[700] text-[14px] mt-3'>Dr. Oluwafemi Salako</p>
                    <p className='text-[11px] font-[400] text-[#3D4852]'>Director Plant Resources Department.</p>
                </div>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3 items-center text-center justify-center mt-8">
            <div className='text center mx-auto'>
                    <Image src="/images/image 75 (5).png" alt="" width={170} height={170} className='mx-auto rounded-full' />
                    <p className='font-[700] text-[14px] mt-3'>Kayode I. Aiyedogbon</p>
                    <p className='text-[11px] font-[400] text-[#3D4852]'>Ag. Director Administration Department.</p>
                </div>
                <div className=''>
                    <Image src="/images/image 75 (6).png" alt="" width={170} height={170} className='mx-auto rounded-full' />
                    <p className='font-[700] text-[14px] mt-3'>Woru Adamu Kerenji</p>
                    <p className='text-[11px] font-[400] text-[#3D4852]'>Assistant Director Finance and <br></br> 
                    Account</p>
                </div>
                <div className=''>
                    <Image src="/images/image 75 (7).png" alt="" width={170} height={170} className='mx-auto rounded-full' />
                    <p className='font-[700] text-[14px] mt-3'>Dr. Charity Obetta</p>
                    <p className='text-[11px] font-[400] text-[#3D4852]'>Ag. Head, Fisheries and Aquaculture <br></br> 
                    Department</p>
                </div>
                <div className=''>
                    <Image src="/images/image 76.png" alt="" width={170} height={170} className='mx-auto rounded-full' />
                    <p className='font-[700] text-[14px] mt-3'>Barr. Shehu Aliyu</p>
                    <p className='text-[11px] font-[400] text-[#3D4852]'>AD (Legal) / Legal Advisor. <br></br>
                    LLB. LLM.</p>
                </div>
                <div className=''>
                    <Image src="/images/image 75 (8).png" alt="" width={170} height={170} className='mx-auto rounded-full' />
                    <p className='font-[700] text-[14px] mt-3'>Dr. Aliyu Shuaibu Madugu</p>
                    <p className='text-[11px] font-[400] text-[#3D4852]'>Head of Department Planning Research  <br></br>and Statistics.</p>
                </div>
            </div>
        </div>
    )
}

export default MeetManagement
