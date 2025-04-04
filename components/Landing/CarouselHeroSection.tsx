"use client"
import { useState, useEffect, useRef, useCallback } from "react"
import Image from "next/image"
import { RightButtonCarouselIcon, LeftButtonCarouselIcon } from "@/assets/icons"
import CustomContainer from "../CustomContainer"
import axios from "axios"
 
interface CarouselItem {
  id: number
  url: string
}
 
export default function CarouselHeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [transitioning, setTransitioning] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const sliderRef = useRef<HTMLDivElement>(null)
 
  
  const [carouselItems, setCarouselItems] = useState<CarouselItem[]>([])
  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URLS;

  // Fetch carousel data from API
  useEffect(() => {
    const fetchCarouselData = async () => {
      try {
        setIsLoading(true)
        const response = await axios.get(`${BASE_URL}/api/home-slide?populate=images`, 
          { 
            headers: { 
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
              'Content-Type': 'application/json'
            }, 
          }
        )

        if (!response) {
          throw new Error("Failed to fetch carousel data")
        }
        console.log("Carousel data:", response?.data?.data?.images)
        const data = await response.data?.data?.images || []
        setCarouselItems(data)
        setIsLoading(false)
      } catch (err) {
        console.error("Error fetching carousel data:", err)
        setError("Failed to load carousel data")
        setIsLoading(false)

        // Fallback to default items if API fails
        // setCarouselItems([
        //   {
        //     id: 1,
        //     imageUrl: "/Images/Homepage/Banner.png",
        //   },
        //   {
        //     id: 2,
        //     imageUrl: "/Images/Homepage/Banner.png",
        //   },
        //   {
        //     id: 3,
        //     imageUrl: "/Images/Homepage/Banner.png",
        //   },
        // ])
      }
    }

    fetchCarouselData()
  }, [])

  const nextSlide = useCallback(() => {
    if (transitioning || carouselItems.length === 0) return
    setTransitioning(true)
    setCurrentSlide((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1))
    setTimeout(() => setTransitioning(false), 500)
  }, [transitioning, carouselItems.length])
 
  const prevSlide = () => {
    if (transitioning || carouselItems.length === 0) return
    setTransitioning(true)
    setCurrentSlide((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1))
    setTimeout(() => setTransitioning(false), 500)
  }
 
  const goToSlide = (index: number) => {
    if (transitioning || currentSlide === index || carouselItems.length === 0) return
    setTransitioning(true)
    setCurrentSlide(index)
    setTimeout(() => setTransitioning(false), 500)
  }
 
  useEffect(() => {
    if (carouselItems.length === 0) return
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [nextSlide, transitioning, carouselItems.length])

  if (isLoading) {
    return (
      <div className="relative w-full h-[42rem] sm:h-[40rem] flex items-center justify-center bg-gray-800">
        <div className="text-white text-xl">Loading image...</div>
      </div>
    )
  }
  if (error && carouselItems.length === 0) {
    return (
      <div className="relative w-full h-[42rem] sm:h-[40rem] flex items-center justify-center bg-gray-800">
        <div className="text-white text-xl">{error}</div>
      </div>
    )
  }

  return (
    <div className="relative w-full h-[42rem] sm:h-[40rem] overflow-hidden">
      {/* Slider container */}
      <div
        ref={sliderRef}
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {carouselItems.map((item, index) => (
        <div key={item.id} className="min-w-full h-full relative flex-shrink-0">
          <Image
            src={`${BASE_URL}${item.url}` || "/placeholder.svg"}
            alt={`Agricultural slide ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>))}
      </div>
 
      {/* Overlay with dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60 z-20"></div>
 
      {/* Carousel Content - Fixed text that doesn't change */}
      <div className="absolute inset-0 flex flex-col gap-3 sm:gap-6 items-center justify-center text-white z-30 px-4 sm:px-6 pt-8 sm:pt-20 lg:pt-28">
        <h1 className="font-bold text-2xl text-center sm:text-3xl lg:text-[2.5rem] leading-[2.5rem] sm:leading-[2.875rem]">
          ARCN and UNN introduce new <br className="hidden md:block" /> strategy agroecological sustainable farming
        </h1>
        <div className="flex flex-col items-center gap-5 sm:gap-7">
          <div className="flex flex-col gap-3">
            <p className="text-[#FFC84F] text-base text-center md:text-[1.25rem] font-medium leading-6 lg:leading-[2.125rem]">
              Regional government and CGIAR partnership launch agroforestry
              <br className="hidden md:block" /> corridor to preserve biodiversity.
            </p>
            <button
              type="button"
              className="border-2 py-3 px-5 sm:px-8 rounded-sm self-center font-bold text-[0.75rem] sm:text-sm text-[#15271C] focus:outline-none font-sans border-white bg-white"
            >
              READ MORE
            </button>
          </div>
 
          {/* Indicator Dots */}
          <div className="flex gap-x-2 z-30">
            {carouselItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full border border-white ${
                  currentSlide === index ? "bg-white" : "bg-transparent"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
 
      <div className="min-h-[10%] bg-[#000000B2] py-1.5 absolute bottom-0 left-0 w-full z-30">
        <CustomContainer>
          <div className="flex flex-col sm:flex-row sm:justify-between lg:justify-center items-center gap-8 sm:gap-14 lg:gap-24">
            <div className="hidden lg:block lg:shrink-0">
              <Image src="/Images/Homepage/Newpaper.png" width={130} height={125} alt="paper" />
            </div>
            <div className="text-center flex flex-col items-center gap-1">
              <h2 className="font-medium text-xl lg:leading-[2.796875rem] text-white">
                Journal of Applied Agricultural Research (JAAR)
              </h2>
              <p className="font-normal text-sm lg:leading-[1.303125rem] text-white text-opacity-[94%]">
                CALL FOR PAPERS AND SUBMISSION OF MANUSCRIPTS
              </p>
            </div>
            <div>
              <button
                type="button"
                className="py-2 px-16 flex items-center gap-1 font-sans rounded-sm font-bold text-sm lg:text-[0.75rem] lg:leading-[1.72125rem] text-white bg-[#04662A]"
              >
                <span>SUBMIT</span> <span>NOW</span>
              </button>
            </div>
          </div>
        </CustomContainer>
      </div>
 
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 hidden sm:flex top-1/2 -translate-y-1/2 z-40 w-10 h-10 items-center justify-center text-white"
        aria-label="Previous slide"
        disabled={transitioning}
      >
        <LeftButtonCarouselIcon />
      </button>
 
      <button
        onClick={nextSlide}
        className="absolute right-6 hidden sm:flex top-1/2 -translate-y-1/2 z-40 w-10 h-10 items-center justify-center text-white"
        aria-label="Next slide"
        disabled={transitioning}
      >
        <RightButtonCarouselIcon />
      </button>
    </div>
  )
}