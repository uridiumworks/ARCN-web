"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Leaf, Stethoscope, Building, Fish, Microscope, Tractor } from "lucide-react"
import Link from "next/link"
import CustomContainer from "@/components/CustomContainer"

export default function TechnicalServices() {
  return (
   
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      
      <div className="relative bg-gradient-to-r from-[#f8f9fa] to-[#e9f5ee] py-16">
         <CustomContainer>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 flex items-center">
              Our Technical <span className="text-[#30A85F] ml-2">Services</span>
              <Leaf className="h-6 w-6 text-[#30A85F] ml-3" />
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed max-w-3xl">
              ARCN Advisory Services delivers expert agricultural solutions, from establishing private research
              institutes to providing veterinary care, livestock nutrition, and aquaculture management. Our programs
              empower our stakeholders and institutions through research-backed services for sustainable farming
              nationwide.
            </p>
          </div>
        </div>
        </CustomContainer>

        <div
          className="absolute bottom-0 left-0 w-full h-16 bg-white"
          style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}
        ></div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="Advisory" className="w-full max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 gap-4 p-1 w-full max-w-xl bg-gray-100 rounded-lg">
              <TabsTrigger
                value="Advisory"
                className="py-3 px-4 rounded-md data-[state=active]:bg-white data-[state=active]:text-[#30A85F] data-[state=active]:shadow-sm transition-all"
              >
                Advisory Services
              </TabsTrigger>
              <TabsTrigger
                value="Clinical"
                className="py-3 px-4 rounded-md data-[state=active]:bg-white data-[state=active]:text-[#30A85F] data-[state=active]:shadow-sm transition-all"
              >
                Clinical Services
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="Advisory" className="mt-2 focus:outline-none">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden"
            >
              <div className="p-6 md:p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#e9f5ee] flex items-center justify-center mr-4">
                    <Building className="h-6 w-6 text-[#30A85F]" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Advisory Services</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <p className="text-gray-700">
                      Our advisory services provide expert guidance and support for agricultural development, research
                      initiatives, and institutional establishment.
                    </p>

                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <span className="h-6 w-6 rounded-full bg-[#30A85F] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="h-2 w-2 bg-white rounded-full"></span>
                        </span>
                        <div>
                          <span className="text-gray-800 font-medium">
                            Establishment of Private Research Institute and College of Agriculture
                          </span>
                          <p className="text-sm text-gray-600 mt-1">
                            Expert guidance on setting up and operating agricultural research and educational
                            institutions.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="h-6 w-6 rounded-full bg-[#30A85F] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="h-2 w-2 bg-white rounded-full"></span>
                        </span>
                        <div>
                          <span className="text-gray-800 font-medium">
                            Establishment of Adopted Schools and Agricultural Research Outreach Centres (AROC)
                          </span>
                          <p className="text-sm text-gray-600 mt-1">
                            Support for creating community-based agricultural education and research centers.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="h-6 w-6 rounded-full bg-[#30A85F] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="h-2 w-2 bg-white rounded-full"></span>
                        </span>
                        <div>
                          <span className="text-gray-800 font-medium">
                            Livestock nutrition and breeding consultations
                          </span>
                          <p className="text-sm text-gray-600 mt-1">
                            Specialized advice on optimal feeding strategies and breeding programs for livestock.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-6">

                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <span className="h-6 w-6 rounded-full bg-[#30A85F] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="h-2 w-2 bg-white rounded-full"></span>
                        </span>
                        <div>
                          <span className="text-gray-800 font-medium">Aquaculture development and management</span>
                          <p className="text-sm text-gray-600 mt-1">
                            Comprehensive guidance on establishing and managing sustainable fish farming operations.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="h-6 w-6 rounded-full bg-[#30A85F] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="h-2 w-2 bg-white rounded-full"></span>
                        </span>
                        <div>
                          <span className="text-gray-800 font-medium">Other agricultural research services</span>
                          <p className="text-sm text-gray-600 mt-1">
                            Customized research and advisory services tailored to specific agricultural needs.
                          </p>
                        </div>
                      </li>
                    </ul>

                    <div className="bg-[#f8f9fa] p-4 rounded-lg border border-gray-100">
                      <h3 className="font-medium text-gray-900 mb-2 flex items-center">
                        <Microscope className="h-4 w-4 text-[#30A85F] mr-2" />
                        Research-Backed Solutions
                      </h3>
                      <p className="text-sm text-gray-700">
                        All our advisory services are grounded in the latest agricultural research and best practices to
                        ensure optimal outcomes.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <Link
                    href="/contact"
                    className="inline-flex items-center bg-[#30A85F] hover:bg-[#278a4d] text-white font-medium py-2 px-6 rounded-md transition-colors"
                  >
                    Contact us today
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="Clinical" className="mt-2 focus:outline-none">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden"
            >
              <div className="p-6 md:p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#e9f5ee] flex items-center justify-center mr-4">
                    <Stethoscope className="h-6 w-6 text-[#30A85F]" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Clinical Services</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <p className="text-gray-700">
                      Our clinical services provide comprehensive veterinary care and support for livestock health and
                      management, ensuring optimal animal welfare and productivity.
                    </p>

                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <span className="h-6 w-6 rounded-full bg-[#30A85F] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="h-2 w-2 bg-white rounded-full"></span>
                        </span>
                        <div>
                          <span className="text-gray-800 font-medium">Veterinary Clinic</span>
                          <p className="text-sm text-gray-600 mt-1">
                            Full-service veterinary clinic offering diagnostics, treatment, and preventive care for all
                            types of livestock and farm animals.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="h-6 w-6 rounded-full bg-[#30A85F] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="h-2 w-2 bg-white rounded-full"></span>
                        </span>
                        <div>
                          <span className="text-gray-800 font-medium">Ambulatory Services</span>
                          <p className="text-sm text-gray-600 mt-1">
                            Mobile veterinary services bringing expert care directly to your farm or facility,
                            minimizing stress for animals and ensuring timely treatment.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="h-6 w-6 rounded-full bg-[#30A85F] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="h-2 w-2 bg-white rounded-full"></span>
                        </span>
                        <div>
                          <span className="text-gray-800 font-medium">Sales of Veterinary Pharmaceuticals</span>
                          <p className="text-sm text-gray-600 mt-1">
                            Access to quality medications, vaccines, and supplements for maintaining animal health and
                            treating conditions.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-[#f8f9fa] p-5 rounded-lg border border-gray-100">
                      <h3 className="font-medium text-gray-900 mb-3">Our Clinical Approach</h3>
                      <p className="text-sm text-gray-700 mb-4">
                        We combine cutting-edge veterinary science with practical experience to deliver effective,
                        affordable healthcare for all types of livestock and farm animals.
                      </p>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-[#e9f5ee] flex items-center justify-center mr-2">
                            <Tractor className="h-4 w-4 text-[#30A85F]" />
                          </div>
                          <span>Farm Visits</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-[#e9f5ee] flex items-center justify-center mr-2">
                            <Fish className="h-4 w-4 text-[#30A85F]" />
                          </div>
                          <span>Aquatic Care</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-[#30A85F] bg-opacity-10 p-5 rounded-lg border border-[#30A85F] border-opacity-20">
                      <h3 className="font-medium text-[#30A85F] mb-2">Emergency Services</h3>
                      <p className="text-sm text-gray-700">
                        We offer 24/7 emergency veterinary services for critical situations. Contact our emergency line
                        for immediate assistance.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-4 items-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center bg-[#30A85F] hover:bg-[#278a4d] text-white font-medium py-2 px-6 rounded-md transition-colors"
                  >
                    Contact us today
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <p className="text-gray-600 italic">
                    Contact us today for all your veterinary and animal health needs!
                  </p>
                </div>
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
