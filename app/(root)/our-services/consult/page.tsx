"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import CustomContainer from "@/components/CustomContainer"

export default function Consult() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#f8f9fa] to-[#e9f5ee] py-16">
        <div className="container mx-auto px-4">
          <CustomContainer>
          <div className="mx-auto text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ARCN <span className="text-[#30A85F]">Consult</span>
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed">
              We offer a comprehensive range of services designed to advance agricultural research, innovation, and
              extension across Nigeria. Our services are structured to create value for stakeholders throughout the
              agricultural value chain while supporting national food security objectives.
            </p>
          </div>
          </CustomContainer>
        </div>

        <div
          className="absolute bottom-0 left-0 w-full h-16 bg-white"
          style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}
        ></div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="Research" className="w-full max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 gap-4 p-1 w-full max-w-xl bg-gray-100 rounded-lg">
              <TabsTrigger
                value="Research"
                className="py-3 px-4 rounded-md data-[state=active]:bg-white data-[state=active]:text-[#30A85F] data-[state=active]:shadow-sm transition-all"
              >
                Research Output Commercialization
              </TabsTrigger>
              <TabsTrigger
                value="Facility"
                className="py-3 px-4 rounded-md data-[state=active]:bg-white data-[state=active]:text-[#30A85F] data-[state=active]:shadow-sm transition-all"
              >
                Facility Rental
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="Research" className="mt-2 focus:outline-none">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden"
            >
              <div className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-10 h-10 rounded-full bg-[#e9f5ee] flex items-center justify-center mr-3">
                    <CheckCircle2 className="h-5 w-5 text-[#30A85F]" />
                  </span>
                  Research Output Commercialization
                </h2>

                <div className="space-y-6">
                  <p className="text-gray-700 mb-6">
                    We help transform agricultural research into marketable products and services, creating economic
                    opportunities while advancing agricultural innovation.
                  </p>

                  <div className="grid md:grid-cols-1 gap-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-lg mb-4 text-gray-900">Our Services Include</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <span className="h-5 w-5 rounded-full bg-[#30A85F] flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="h-2 w-2 bg-white rounded-full"></span>
                          </span>
                          <span className="text-gray-700">Sales of Agricultural Research Products</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="h-5 w-5 rounded-full bg-[#30A85F] flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="h-2 w-2 bg-white rounded-full"></span>
                          </span>
                          <span className="text-gray-700">Market linkage facilitation</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="h-5 w-5 rounded-full bg-[#30A85F] flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="h-2 w-2 bg-white rounded-full"></span>
                          </span>
                          <span className="text-gray-700">Access to innovative agricultural technologies</span>
                        </li>
                      </ul>
                    </div>

                   
                  </div>

                
                </div>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="Facility" className="mt-2 focus:outline-none">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden"
            >
              <div className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-10 h-10 rounded-full bg-[#e9f5ee] flex items-center justify-center mr-3">
                    <CheckCircle2 className="h-5 w-5 text-[#30A85F]" />
                  </span>
                  Facility Rental
                </h2>

                <div className="space-y-6">
                  <p className="text-gray-700 mb-6">
                    Our modern facilities are available for conferences, workshops, and events. We provide professional
                    spaces equipped with the latest technology to ensure your event is a success.
                  </p>

                  <div className="bg-gray-50 p-6 rounded-lg mb-8">
                    <h3 className="font-semibold text-lg mb-4 text-gray-900">Available Facilities</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="h-5 w-5 rounded-full bg-[#30A85F] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="h-2 w-2 bg-white rounded-full"></span>
                        </span>
                        <span className="text-gray-700">
                          Our conference room and auditorium are available for bookings.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="h-5 w-5 rounded-full bg-[#30A85F] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="h-2 w-2 bg-white rounded-full"></span>
                        </span>
                        <span className="text-gray-700">Full audio-visual equipment and technical support.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="h-5 w-5 rounded-full bg-[#30A85F] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="h-2 w-2 bg-white rounded-full"></span>
                        </span>
                        <span className="text-gray-700">Catering services can be arranged upon request.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="relative rounded-lg overflow-hidden h-64 shadow-md">
                        <Image
                          src="/Images/Picture1.png"
                          alt="ARCN Conference Room"
                          fill
                          className="object-cover transition-transform hover:scale-105 duration-500"
                        />
                      </div>
                      <h3 className="font-medium text-gray-900">ARCN Conference Room</h3>
                      <p className="text-sm text-gray-600">
                        Modern conference room with seating for up to 30 people, perfect for meetings and small
                        workshops.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="relative rounded-lg overflow-hidden h-64 shadow-md">
                        <Image
                          src="/Images/Picture2.png"
                          alt="ARCN Auditorium"
                          fill
                          className="object-cover transition-transform hover:scale-105 duration-500"
                        />
                      </div>
                      <h3 className="font-medium text-gray-900">ARCN Auditorium</h3>
                      <p className="text-sm text-gray-600">
                        Spacious auditorium with capacity for 200 people, ideal for conferences, seminars, and large
                        events.
                      </p>
                    </div>
                  </div>

                
                </div>
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
