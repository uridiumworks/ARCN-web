import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function OurMedia() {
  return (
    <main className="max-w-6xl mx-auto px-4  py-8">
      <section className="mb-10 lg:px-14">
        <h1 className="md:text-3xl text-2xl font-bold mb-4">Our Media Services</h1>

        <h2 className="text-base font-semibold mb-2">Welcome to ARCN TV and Radio</h2>

        <p className="text-sm mb-4 lg:pr-56">
          Since our launch in 2022, ARCN TV has become a leading digital platform for practical farming insights,
          connecting agricultural professionals and enthusiasts across Nigeria and beyond. Through data-driven content and
          expert-led programming, we empower our stakeholders with knowledge to improve yeilds, navigate markets, and adopt innovative techniques.
        </p>

        <p className="text-sm mb-4 lg:pr-[180px]">
          Our diverse programming spans different key areas that address critical farming needs: Aqua Farming, Back to
          Farm Series, Market Flow Updates, Improved Seeds, and Animal Life. These carefully curated content categories
          deliver practical, actionable information that has resulted in significant engagement in our market.
        </p>

        <p className="text-sm mb-6 lg:pr-44">
          ARCN TV&apos;s & Radio reaches a global community spanning over 45 countries, with our core audience comprising 67.9% male viewers,
          37.5% aged 25-34, and 20% young farmers aged 18-24. while Nigeria leads with 58% of viewership,
          our international reach extends significantly to the United States (12%), United Kingdom (8%),India
          (8%), Kenya (3%) and dozens more countries, creating a global network of agricultural knowledge sharing
          that advances farming practices both locally and internationally.
        </p>

        <p className="text-sm italic font-normal">Growing Knowledge. Harvesting Results.</p>
      </section>

      <section className="p-6 rounded-lg">
        <h2 className="inline-block px-4 py-2 bg-[#95439c] text-white font-semibold rounded-md mb-6">
          Geographical Reach
        </h2>

        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="w-full">
            <p className="text-sm mb-4">While Nigeria dominates viewership, we&apos;re growing internationally:</p>

            <ul className="text-sm space-y-2 mb-4">
              <li className='font-normal text-sm flex items-start gap-2'>
                <span className="mt-2 h-1 w-1 rounded-full bg-black flex-shrink-0" />
                <span>🇳🇬 Nigeria: 58% of views</span>
              </li>
              <li className='font-normal text-sm flex items-start gap-2'>
                <span className="mt-2 h-1 w-1 rounded-full bg-black flex-shrink-0" />
                <span>🇺🇸 US: 12% (220 avg. watch time)</span>
              </li>
              <li className='font-normal text-sm flex items-start gap-2'>
                <span className="mt-2 h-1 w-1 rounded-full bg-black flex-shrink-0" />
                <span>🇬🇧 UK: 8% (highest engagement at 3:50)</span>
              </li>
            </ul>

            <p className="text-sm">
              Our content helps farmers stay connected to local knowledge while appealing to international
              professionals.
            </p>

            <p className="mt-8 text-sm italic">
              Click{" "}
              <Link href="#" className="text-blue-600 underline">
                here
              </Link>{" "}
              to view our videos and subscribe to ARCN TV for more agricultural insights.
            </p>
          </div>

          <div>
            <Image src="/Images/maps.png" alt="" width={1330} height={1000} />
          </div>
        </div>
      </section>
    </main>
  )
}
