import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import CustomContainer from '@/components/CustomContainer'

const DepartmentData = [
    {
        title: "Service Department",
        description: <>Together, these departments provide the critical infrastructure—both <br className='hidden md:block' />  administrative and financial—that empowers the technical teams to <br className='hidden md:block' /> focus on innovation and field-level impact.</>,
        image: "/Images/OBJECTS.png",
        url: "/governance/department/service-department"
    },
    {
        title: "Technical Department",
        description: <>Collectively, these technical departments drive agricultural innovation<br className='hidden md:block' /> through the planning and coordination of research, training, extension <br className='hidden md:block' /> and knowledge transfer to boost Nigeria&apos;s productivity sustainably</>,
        image: "/Images/OBJECT(1).png",
        url: "/governance/department/technical-department"
    }
] as const;

const Departments = () => {
    return ( 
        <section className='py-8 md:py-16'>
            <CustomContainer>
            <div className='flex flex-col  mb-8'>
                <h1 className="text-3xl sm:text-4xl leading-[2.25rem] font-bold text-[#1B222B]">Our Department</h1>
                <p className="text-sm text-gray-700  mt-4 leading-relaxed">
                    In accordance with extant rules, the Council is structured into six core technical departments and two service departments to effectively deliver its mandate. The technical departments include Planning, Research & Statistics; Plant Resources; Livestock; Fisheries & Aquaculture; Agricultural Extension & Socio-Economics; and Knowledge Management & Communications. Supporting these are two (2) service departments - Administration and Finance & Accounts.

                </p>
            </div>

            <div className='flex flex-col  gap-6'>
                {DepartmentData?.map(({description, image, title, url}, index) => {
                    return (
                        <div key={index} className={cn(index === 0 ? 'bg-[#30A85F]': 'bg-[#FFC74E]', 'flex flex-col-reverse md:flex-row w-full rounded-[20px]  mx-auto pt-8 px-2')}>
                            <div className='space-y-8 py-9 px-3 md:px-14 w-full md:w-8/12'>
                                <div className={cn(index === 0 ? 'text-white' : 'text-[#101010]')}>
                                    <h1 className="md:text-2xl text-[27px]  text-bold mb-5 font-bold">{title}</h1>
                                    <p className='text-sm '>{description}</p>
                                </div>

                                <Button variant={index === 0 ? 'ghost' : "default"} className={cn(index === 0 ? 'bg-[#FFFFFF] text-[#30A85F]' : 'text-[#FFC74E]', 'border-none rounded-full  py-6 px-5  font-normal text-sm ')}>
                                    <Link href={url}>See Departments</Link>
                                </Button>
                            </div>
                            
                            <div className='w-full md:w-4/12'>
                                <Image src={image} alt={title} width={392.62} height={371}/>
                            </div>
                        </div>
                    )
                })}
            </div>
            </CustomContainer>
           
        </section>
    );
}
 
export default Departments;