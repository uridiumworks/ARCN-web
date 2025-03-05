import Link from "next/link";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { House } from "lucide-react";
import { Button } from "@/components/ui/button";
  

const ServiceDepartment = () => {
    return (
        <section className="w-full md:w-[1250px] px-2.5 py-4 mx-auto">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink className="flex items-center gap-3">
                            <>
                                <House className="w-3.5 h-3.5" />
                                <Link href="/">Home</Link>
                            </>
                        </BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbSeparator />

                    <BreadcrumbItem>
                        <BreadcrumbLink>
                            <Link href="/governance">Governance</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbSeparator />
                    
                    <BreadcrumbItem>
                        <BreadcrumbLink>
                            <Link href="/governance/department">Department</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbSeparator />

                    <BreadcrumbItem>
                        <BreadcrumbPage className="text-[#30A85F] font-medium">Service Department</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            
            <div className="py-10 space-y-10">
                <div className="">
                    <h1 className="text-2xl sm:text-3xl md:text-[40px] font-bold text-[#1B222B]">Service Department</h1>
                    <p className="text-base sm:text-lg text-gray-700 mt-4 leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur. Vitae vestibulum morbi id in sed ipsum. Lectus placerat<br className='hidden md:block' /> 
                        elementum duis scelerisque sit faucibus velit nisl dui. Rhoncus tellus sit et elementum. Tempus.
                    </p>
                </div>

                <div className='md:grid-cols-2 w-full py-6 px-5 rounded-2xl bg-[#F6E8414D] mx-auto'>
                    <div className="md:py-5 md:px-8 space-y-5">
                        <div>
                            <h1 className="lg:text-[32px] text-xl text-black text-bold mb-5 font-bold">Administration Department</h1>
                            <p className="text-base text-gray mt-4 py-3">The Administrative Department as the secretariat of ARCN covers broad areas of the council&rsquo;s mandate as well as the NARS. It<br className='hidden md:block' /> is responsible for managing and overseeing various administrative activities for the smooth running of the council.</p>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-full mb-10 font-bold text-xl'>
                            <div className='bg-[#FFC74E] p-8 flex items-center  rounded-[16.17px] text-left'>
                                <h1 className="">Transport Unit</h1>
                            </div>

                            <div className='bg-[#2E7636] p-8 flex items-center rounded-[16.17px] text-left'>
                                <h1 className="text-white">Records & Registry Unit</h1>
                            </div>

                            <div className='bg-black p-6 flex items-center rounded-[16.17px] text-left'>
                                <h1 className="text-white mt-1">Maintenance Unit</h1>
                            </div>

                            <div className='bg-[#75CDFD] flex items-center p-6 rounded-[16.17px] text-left'>
                                <h1 className=" mt-1">Security Unit</h1>
                            </div>
                        </div>

                        <div className="pt-10">
                            <Button variant='ghost' className='bg-[#FFFFFF] border-none rounded-full p-6 font-normal text-base '>
                                <Link href='/governance/department/service-department/administration-department'>Learn More</Link>
                            </Button>
                        </div>
                    </div>
                </div>

                <div className='md:grid-cols-2 w-full py-6 px-5 rounded-2xl bg-[#87C12F4D] mx-auto'>
                    <div className="md:py-5 md:px-8 space-y-5">
                        <div>
                            <h1 className="lg:text-[32px] text-xl text-black text-bold mb-5 font-bold">Finance And Account Department</h1>
                            <p className="text-base text-gray mt-4 py-3">Lorem ipsum dolor sit amet consectetur. Mi enim arcu vulputate ut at. Sagittis venenatis amet<br /> sagittis sit. In.</p>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full h-[140px] mb-10 font-bold text-xl'>
                            <div className='bg-black text-white border p-8 flex items-center  rounded-[16.17px] text-left'>
                                <h1 className="">Finance And Account Unit</h1>
                            </div>
                        </div>

                        <div className="pt-10">
                            <Button variant='ghost' className='bg-[#FFFFFF] border-none rounded-full p-6 font-normal text-base '>
                                <Link href='/governance/department/service-department/administration-department'>Learn More</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default ServiceDepartment;