import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const DepartmentData = [
    {
        title: "Service Department",
        description: <>Lorem ipsum dolor sit amet consectetur. Volutpat lobortis imperdiet<br />  adipiscing egestas. Sodales non est nec ac malesuada tempus ultrices<br /> adipiscing iaculis.</>,
        image: "/Images/OBJECTS.png",
        url: "/governance/department/service-department"
    },
    {
        title: "Technical Department",
        description: <>Lorem ipsum dolor sit amet consectetur. Vestibulum et turpis pretium viverra<br /> non eget. Sit tortor vitae tempor amet habitant semper. Viverra tortor.</>,
        image: "/Images/OBJECT(1).png",
        url: "/governance/department/technical-department"
    }
] as const;

const Departments = () => {
    return ( 
        <section className='w-full px-10 py-14'>
            <div className='lg:px-32'>
                <h1 className="text-[40px] font-bold text-[#1B222B]">Our Department</h1>
                <p className="text-lg text-gray mt-4 pt-10">Lorem ipsum dolor sit amet consectetur. Vitae vestibulum morbi id in sed ipsum. Lectus placerat</p>
                    
                <p className='pb-8'> elementum duis scelerisque sit faucibus velit nisl dui. Rhoncus tellus sit et elementum. Tempus.</p>
            </div>

            <div className='flex flex-col gap-6'>
                {DepartmentData?.map(({description, image, title, url}, index) => {
                    return (
                        <div key={index} className={cn(index === 0 ? 'bg-[#30A85F]': 'bg-[#FFC74E]', 'flex lg:w-[1200px] rounded-[20px]  mx-auto pt-8')}>
                            <div className='space-y-8 pt-9 px-14 w-8/12'>
                                <div className={cn(index === 0 ? 'text-white' : 'text-[#101010]')}>
                                    <h1 className="md:text-2xl text-[27px]  text-bold mb-5 font-bold">{title}</h1>
                                    <p className='text-base '>{description}</p>
                                </div>

                                <Button variant={index === 0 ? 'ghost' : "default"} className={cn(index === 0 ? 'bg-[#FFFFFF] text-[#30A85F]' : 'text-[#FFC74E]', 'border-none rounded-full  py-6 px-5  font-normal text-base ')}>
                                    <Link href={url}>See Departments</Link>
                                </Button>
                            </div>
                            
                            <div className='w-4/12'>
                                <Image src={image} alt={title} width={392.62} height={371}/>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    );
}
 
export default Departments;