"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Play, Radio, Globe, ExternalLink } from "lucide-react"
import CustomContainer from "@/components/CustomContainer"

export default function OurMedia() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#f8f9fa] to-[#e9f5ee] py-16">
        <CustomContainer>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#30A85F] bg-opacity-20 flex items-center justify-center">
                <Play className="h-6 w-6 text-[#30A85F]" />
              </div>
              <div className="w-12 h-12 rounded-full bg-[#30A85F] bg-opacity-20 flex items-center justify-center">
                <Radio className="h-6 w-6 text-[#30A85F]" />
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Media Services</h1>
            <h2 className="text-xl font-semibold mb-3 text-gray-800">Welcome to ARCN TV and Radio</h2>
          </div>
        </div>
        </CustomContainer>

        <div
          className="absolute bottom-0 left-0 w-full h-16 bg-white"
          style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}
        ></div>
      </div>

      {/* Main Content */}
      <CustomContainer>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl overflow-hidden"
          >
            <div className="space-y-6 max-w-4xl">
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  Since our launch in 2022, ARCN TV has become a leading digital platform for practical farming
                  insights, connecting agricultural professionals and enthusiasts across Nigeria and beyond. Through
                  data-driven content and expert-led programming, we empower our stakeholders with knowledge to improve
                  yeilds, navigate markets, and adopt innovative techniques.
                </p>

                <p className="text-gray-700 leading-relaxed mt-4">
                  Our diverse programming spans different key areas that address critical farming needs: Aqua Farming,
                  Back to Farm Series, Market Flow Updates, Improved Seeds, and Animal Life. These carefully curated
                  content categories deliver practical, actionable information that has resulted in significant
                  engagement in our market.
                </p>

                <p className="text-gray-700 leading-relaxed mt-4">
                  ARCN TV&apos;s & Radio reaches a global community spanning over 45 countries, with our core audience
                  comprising 67.9% male viewers, 37.5% aged 25-34, and 20% young farmers aged 18-24. while Nigeria leads
                  with 58% of viewership, our international reach extends significantly to the United States (12%),
                  United Kingdom (8%),India (8%), Kenya (3%) and dozens more countries, creating a global network of
                  agricultural knowledge sharing that advances farming practices both locally and internationally.
                </p>

                <p className="text-[#30A85F] italic font-medium mt-6 text-lg">Growing Knowledge. Harvesting Results.</p>
              </div>
            </div>
          </motion.div>

          {/* Geographical Reach Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden"
          >
            <div className="p-6 md:p-8">
              <div className="flex items-center mb-6">
                <h2 className="inline-block px-4 py-2 bg-[#95439c] text-white font-semibold rounded-md flex items-center">
                  <Globe className="h-4 w-4 mr-2" />
                  Geographical Reach
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <p className="text-gray-700">
                    While Nigeria dominates viewership, we&apos;re growing internationally:
                  </p>

                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="h-5 w-5 rounded-full bg-[#95439c] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="h-2 w-2 bg-white rounded-full"></span>
                      </span>
                      <span className="text-gray-700">🇳🇬 Nigeria: 58% of views</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="h-5 w-5 rounded-full bg-[#95439c] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="h-2 w-2 bg-white rounded-full"></span>
                      </span>
                      <span className="text-gray-700">🇺🇸 US: 12% (220 avg. watch time)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="h-5 w-5 rounded-full bg-[#95439c] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="h-2 w-2 bg-white rounded-full"></span>
                      </span>
                      <span className="text-gray-700">🇬🇧 UK: 8% (highest engagement at 3:50)</span>
                    </li>
                  </ul>

                  <p className="text-gray-700">
                    Our content helps farmers stay connected to local knowledge while appealing to international
                    professionals.
                  </p>

                  
                </div>

                <div className="relative rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/Images/maps.png"
                    alt="Geographical reach map"
                    width={600}
                    height={400}
                    className="object-cover w-full"
                  />
                </div>
              </div>
              <div className="pt-4 mt-4 border-t border-gray-100">
                    <p className="text-gray-700 italic flex items-center">
                      Click{" "}
                      <Link href="#" className="text-[#95439c] underline mx-1 inline-flex items-center">
                        here
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </Link>{" "}
                      to view our videos and subscribe to ARCN TV for more agricultural insights.
                    </p>
                  </div>
            </div>
          </motion.div>
        </div>
      </div>
      </CustomContainer>
    </div>
  )
}
