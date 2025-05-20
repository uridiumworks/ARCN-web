import React from 'react'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Image from 'next/image'
export default function TechnicalServices() {
  return (
    <section className='w-full md:w-[80%] mx-auto pb-10'>
      <div className='py-4 space-y-3'>
        <h1  className='font-bold text-lg md:text-xl'>Our Technical Services</h1>
        <p className='font-normal text-sm lg:pr-56'>ADCN Advisory Services delivers expert agricultural solutions, from establishing private research institutes
          to providing veterinary care, livestock nutrition, and aquaculture management. Our programs empower our
          stakeholders and institutions through research-backed services for sustainable farming nationwide.
        </p>
      </div>
      <Tabs className='bg-[#fafafa] rounded-sm pt-4 pb-20'>
        <TabsList className="grid w-full md:w-[90%] md:mx-auto px-6 grid-cols-2">
          <TabsTrigger value="Advisory " className='text-sm'>Advisory Services</TabsTrigger>
          <TabsTrigger value="Clinical" className='text-sm'>Clinical Services</TabsTrigger>
        </TabsList>

        <TabsContent value="Advisory " className=' w-full md:w-[90%] mx-auto'>
          <div className='border-2 pt-3 px-3 pb-7 space-y-3 bg-white border-[#ebebeb] rounded-lg'>
            <h1 className='font-bold text-lg'>Advisory Services</h1>
            <div>
              <ul>
                <li className='font-normal text-sm flex items-start gap-2'>
                  <span className="mt-2 h-1 w-1 rounded-full bg-black flex-shrink-0" />
                  <span> Establishment of Private Research Institute and College of Agriculture</span>
                </li>
                <li className='font-normal text-sm flex items-start gap-2'>
                  <span className="mt-2 h-1 w-1 rounded-full bg-black flex-shrink-0" />
                  <span> Establishment and operationalisation of Adopted Schools and Adopted Villages/Agricultural Research
                  Outreach Centres (AROC):</span>
                </li>
                <li className='font-normal text-sm flex items-start gap-2'>
                  <span className="mt-2 h-1 w-1 rounded-full bg-black flex-shrink-0" />
                  <span> Livestock nutrition and breeding consultations</span>
                </li>
                <li className='font-normal text-sm flex items-start gap-2'>
                  <span className="mt-2 h-1 w-1 rounded-full bg-black flex-shrink-0" />
                  <span> Aquaculture development and management</span>
                </li>
                <li className='font-normal text-sm flex items-start gap-2'>
                  <span className="mt-2 h-1 w-1 rounded-full bg-black flex-shrink-0" />
                  <span> Other agricultural research services</span>
                </li>
              </ul>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="Clinical" className='w-full md:w-[90%] mx-auto'>
          <div className='border-2 pt-3 px-3 pb-10 space-y-3 bg-white border-[#ebebeb] rounded-lg'>
            <h1 className='font-bold text-lg'>Clinical Services</h1>
            <div>
              <ul>
                <li className='font-normal text-sm flex items-start gap-2'>
                  <span className="mt-2 h-1 w-1 rounded-full bg-black flex-shrink-0" />
                  <span>Veterinary Clinic</span>
                </li>
                <li className='font-normal text-sm flex items-start gap-2'>
                  <span className="mt-2 h-1 w-1 rounded-full bg-black flex-shrink-0" />
                  <span>Ambulatory Services</span>
                </li>
                <li className='font-normal text-sm flex items-start gap-2'>
                  <span className="mt-2 h-1 w-1 rounded-full bg-black flex-shrink-0" />
                  <span>Sales of Veterinary Pharmaceuticals</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-32 text-sm text-left italic">
            <a href="/contact" className="text-blue-600 italic underline">
              Contact
            </a>{" "}
            us today!
          </div>
        </TabsContent>
      </Tabs>
    </section>
  )
}
