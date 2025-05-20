import React from 'react'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Image from 'next/image'
export default function Consult() {
  return (
    <section className='w-full md:w-[80%] md:mx-auto'>
      <div className='py-4 px-2 space-y-3'>
        <h1  className='font-bold text-lg md:text-xl'>ARCN Consult</h1>
        <p className='font-normal text-sm'>We offer a comprehentive range of service designed to advance agricultural research, innovation, and extension across Nigeria.
          Our services are Structured to create Value for stakeholders throughout the agricultural value chain while supporting national food security objective.
        </p>
      </div>
      <Tabs className='bg-[#fafafa] rounded-sm pt-4 pb-20'>
        <TabsList className="grid w-full md:w-[90%] md:mx-auto px-6 grid-cols-2">
          <TabsTrigger value="Research" className='lg:text-sm text-xs'>Research output Commerciation</TabsTrigger>
          <TabsTrigger value="Facility" className='text-sm'>Facility Rental</TabsTrigger>
        </TabsList>

        <TabsContent value="Research" className='md:w-[90%] mx-auto'>
          <div className='border-2 pt-3 px-3 pb-7 space-y-3 bg-white border-[#ebebeb] rounded-lg'>
            <h1 className='font-bold text-lg'>Research Output Commercialization</h1>
            <div>
              <ul>
                <li className='font-normal text-sm flex items-start gap-2'>
                  <span className="mt-2 h-1 w-1 rounded-full bg-black flex-shrink-0" />
                  <span> Sales of Agricultural Research Products</span>
                </li>
                <li className='font-normal text-sm flex items-start gap-2'>
                  <span className="mt-2 h-1 w-1 rounded-full bg-black flex-shrink-0" />
                  <span> Market linkage facilitation</span>
                </li>
                <li className='font-normal text-sm flex items-start gap-2'>
                  <span className="mt-2 h-1 w-1 rounded-full bg-black flex-shrink-0" />
                  <span> Access to innovative agricultural technologies</span>
                </li>
              </ul>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="Facility" className='w-[90%] mx-auto'>
          <div className='border-2 pt-3 px-3 pb-7 space-y-3 bg-white border-[#ebebeb] rounded-lg'>
            <h1 className='font-bold text-lg'>Facility Rental</h1>
            <div>
              <ul>
                <li className='font-normal text-sm flex items-start gap-2'>
                  <span className="mt-2 h-1 w-1 rounded-full bg-black flex-shrink-0" />
                  <span> Our conference room and auditorium are available for bookings.</span>
                </li>
              </ul>
            </div>
          </div>
          <div className='grid grid-cols-1  md:grid-cols-2 gap-3 lg:gap-10 w-full md:w-[85%] mx-auto pt-4'>
            <div className='space-y-2'>
              <Image src="/Images/Picture1.png" alt="programsandprojects" width={350} height={180} />
              <p className='font-normal text-sm'>ARCN Conference Room</p>
            </div>
            <div className='space-y-2'>
              <Image src="/Images/Picture2.png" alt="programsandprojects" width={350} height={180} />
              <p className='font-normal text-sm'>ARCN Auditorium</p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  )
}
