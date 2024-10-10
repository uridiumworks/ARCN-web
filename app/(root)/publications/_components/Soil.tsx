
import React from 'react'
import Image from 'next/image'
import { Input } from '@/components/ui/input'


const Soil = () => {
    return (
        <section className='px-14 py-20 flex flex-col mx-auto md:w-[1152px] justify-center text-center'>
            <div className=' text-center'>
                <h2 className='font-bold text-3xl'>Soil fertility enhancement through <br />organic amendments and cover <br /> crops.</h2>
                <p className='mt-3'>More than 85% of the world’s 1.2 billion youth live in low- and middle-income <br /> countries, where  many face limited opportunities for employment or <br /> entrepreneurship.</p>
            </div>
            <div className='flex justify-center mt-6'>
                <Image src="/Images/woman.png" alt="" width={48} height={48} />
                <div className='px-2'>
                    <h2>Ayush Jangra</h2>
                    <p>Updated on Time Apr 19, 2024</p>
                </div>
            </div>
            <div className='mt-10 text-center mx-auto'>
                <Image src="/Images/image 80.png" alt="" width={1152} height={576} />
            </div>
            <p className="mt-3 text-start">Lorem ipsum dolor sit amet consectetur. Viverra at magna placerat mattis. Et nullam hac at felis eu vulputate in a aenean. Pretium nibh ac sed viverra ac urna interdum. Lobortis bibendum enim scelerisque id. Consectetur eget neque luctus magna in elementum. Lacus amet sed arcu in elementum.</p>

            <p className='mt-3 text-start'>Lorem ipsum dolor sit amet consectetur. Viverra at magna placerat mattis. Et nullam hac at felis eu vulputate in a aenean. Pretium nibh ac sed viverra ac urna interdum. Lobortis bibendum enim scelerisque id. Consectetur eget neque luctus magna in elementum. Lacus amet sed arcu in elementum.</p>

            <h2 className='mt-5 font-bold text-start text-2xl'>Lorem ipsum dolor sit amet consectetur. Quis faucibus.</h2>

            <p className='mt-3 text-start'>Lorem ipsum dolor sit amet consectetur. Amet gravida eu egestas est vulputate massa pretium at. Vestibulum proin ut cras ac dolor viverra lectus tempor. Diam phasellus arcu leo placerat consequat sed. Sagittis ultricies ac non imperdiet egestas vestibulum. <br />Sit et porta non integer nulla nisl amet ac et. Sit id tellus at nulla pulvinar.</p>

            <p className='mt-4 text-start'>Lorem ipsum dolor sit amet consectetur. Ultrices elit amet sem nullam volutpat convallis aliquam sed id. Sagittis id a sed a lacus. In pretium est.</p>

            <p className='mt-3 text-start'>Lorem ipsum dolor sit amet consectetur. Viverra at magna placerat mattis. Et nullam hac at felis eu vulputate in a aenean. Pretium nibh ac sed viverra ac urna interdum. Lobortis bibendum enim scelerisque id. Consectetur eget neque luctus magna in elementum. Lacus amet sed arcu in elementum.</p>

            <p className='mt-3 text-start'>Lorem ipsum dolor sit amet consectetur. Viverra at magna placerat mattis. Et nullam hac at felis eu vulputate in a aenean. Pretium nibh ac sed viverra ac urna interdum. Lobortis bibendum enim scelerisque id. Consectetur eget neque luctus magna in elementum. Lacus amet sed arcu in elementum.</p>

            <p className='mt-3 text-start'>Lorem ipsum dolor sit amet consectetur. Viverra at magna placerat mattis. Et nullam hac at felis eu vulputate in a aenean. Pretium nibh ac sed viverra ac urna interdum. Lobortis bibendum enim scelerisque id. Consectetur eget neque luctus magna in elementum. Lacus amet sed arcu in elementum.</p>

            <p className='mt-3 text-start'>Lorem ipsum dolor sit amet consectetur. Viverra at magna placerat mattis. Et nullam hac at felis eu vulputate in a aenean. Pretium nibh ac sed viverra ac urna interdum. Lobortis bibendum enim scelerisque id. Consectetur eget neque luctus magna in elementum. Lacus amet sed arcu in elementum.</p>

            <h2 className='mt-5 font-bold text-start text-2xl'>Lorem ipsum dolor sit amet consectetur. Quis faucibus.</h2>
            <p className='mt-3 text-start'>Lorem ipsum dolor sit amet consectetur. Viverra at magna placerat mattis. Et nullam hac at felis eu vulputate in a aenean. Pretium nibh ac sed viverra ac urna interdum. Lobortis bibendum enim scelerisque id. Consectetur eget neque luctus magna in elementum. Lacus amet sed arcu in elementum.</p>

            <Register />
        </section>
    )
}

export default Soil


const Register = () => {
    return (
        <section className="py-10">
            <div>
                <h2 className='font-georgia text-2xl'>To continue reading, register to download the <br />journal</h2>
                <p className='mt-4 text-sm'>The author made this story available to registered members only. <br />Fill the form below to download the journal</p>
            </div>
            <div className='mx-auto text-start mt-4 flex flex-col w-[756px] justify-center'>
                <div className=' mx-auto  gap-3 '>
                    <label className='mt-6'>Full Name</label>
                    <Input className='w-full outline:none rounded-md px-3 md:w-[300px] mt-1 ' type='text' placeholder='Enter your full name' />
                    <label className=''>Email</label>
                    <Input className='w-full outline:none rounded-md px-3 md:w-[300px] mt-1 ' type='text' placeholder='Enter email address' />
                    <button className='bg-[#07A460] border w-[310px] h-[40px] rounded-lg mt-10 text-white'>Download</button>

                </div>
            </div>
        </section>
    )
}



