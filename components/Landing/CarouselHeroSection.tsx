"use client"
import { useState, useEffect, useRef, useCallback } from "react"
import Image from "next/image"
import { RightButtonCarouselIcon, LeftButtonCarouselIcon } from "@/assets/icons"
import CustomContainer from "../CustomContainer"
import axiosInstance from "@/lib/axiosInstance"

interface CarouselResponse {
   data: CarouselData
}
interface CarouselData{
   id: number
  documentId: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  slider: CarouselSlide[]
}
interface CarouselSlide{
   id: number
  title: string
  description: any
  link: string
  image: CarouselImage
}
interface CarouselImage{
  url: string
}

export default function CarouselHeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [transitioning, setTransitioning] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const sliderRef = useRef<HTMLDivElement>(null)

  const [carouselSlides, setCarouselSlides] = useState<CarouselSlide[]>([])
  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URLS

  // Fetch carousel data from API
  useEffect(() => {
    const fetchCarouselData = async () => {
      try {
        setIsLoading(true)
        const response = await axiosInstance.get(`/home-slide?populate[slider][populate]=image`)
        if (!response) {
          throw new Error("Failed to fetch carousel data")
        }
        console.log("Carousel data:", response?.data?.data)

        // Transform the API response to match our interface
        const slides =
          (response.data?.data as CarouselData)?.slider.map((slide: CarouselSlide) => ({
            id: slide.id,
            image: slide.image,
            title: slide.title,
            description: slide.description,
            link: slide.link || "#",
          })) || []

        setCarouselSlides(slides)
        setIsLoading(false)
      } catch (err) {
        console.error("Error fetching carousel data:", err)
        setError("Failed to load carousel data")
        setIsLoading(false)
      }
    }

    fetchCarouselData()
  }, [])

  const nextSlide = useCallback(() => {
    if (transitioning || carouselSlides.length === 0) return
    setTransitioning(true)
    setCurrentSlide((prev) => (prev === carouselSlides.length - 1 ? 0 : prev + 1))
    setTimeout(() => setTransitioning(false), 500)
  }, [transitioning, carouselSlides.length])

  const prevSlide = () => {
    if (transitioning || carouselSlides.length === 0) return
    setTransitioning(true)
    setCurrentSlide((prev) => (prev === 0 ? carouselSlides.length - 1 : prev - 1))
    setTimeout(() => setTransitioning(false), 500)
  }

  const goToSlide = (index: number) => {
    if (transitioning || currentSlide === index || carouselSlides.length === 0) return
    setTransitioning(true)
    setCurrentSlide(index)
    setTimeout(() => setTransitioning(false), 500)
  }

  useEffect(() => {
    if (carouselSlides.length === 0) return
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [nextSlide, transitioning, carouselSlides.length])

  if (isLoading) {
    return (
      <div className="relative w-full h-[42rem] sm:h-[40rem] flex items-center justify-center bg-gray-800">
        <div className="text-white text-xl">Loading carousel...</div>
      </div>
    )
  }

  if (error && carouselSlides.length === 0) {
    return (
      <div className="relative w-full h-[42rem] sm:h-[40rem] flex items-center justify-center bg-gray-800">
        <div className="text-white text-xl">{error}</div>
      </div>
    )
  }

  // Get current slide data
  const currentSlideData = carouselSlides[currentSlide]

  return (
    <div className="relative w-full h-[42rem] sm:h-[40rem] overflow-hidden">
      {/* Slider container */}
      <div
        ref={sliderRef}
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {carouselSlides.map((slide, index) => (
          <div key={slide.id} className="min-w-full h-full relative flex-shrink-0">
            <Image
              src={`${BASE_URL}${slide.image.url}` || "/placeholder.svg"}
              alt={slide.description || `Agricultural slide ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
        ))}
      </div>

      {/* Overlay with dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/10 to-black/10 z-20"></div>

      {/* Dynamic Carousel Content - Changes with each slide */}
      {currentSlideData && (
        <div className="absolute inset-0 flex flex-col gap-3 sm:gap-6 items-center justify-center text-white z-30 px-4 sm:px-6 pt-8 sm:pt-20 lg:pt-28">
          <h1
            className="font-bold text-2xl text-center sm:text-3xl lg:text-[2.5rem] leading-[2.5rem] sm:leading-[2.875rem] max-w-[74rem] transition-opacity duration-500"
            key={`title-${currentSlide}`}
          >
            {currentSlideData.title}
          </h1>
          <div className="flex flex-col items-center gap-5 sm:gap-7">
            <div className="flex flex-col gap-3">
              <p
                className="text-[#FFC84F] text-base text-center md:text-[1.25rem] font-medium leading-6 lg:leading-[2.125rem] transition-opacity duration-500"
                key={`description-${currentSlide}`}
              >
                {currentSlideData.description}
              </p>
              <a
                href={currentSlideData.link}
                className="border-2 py-3 px-5 sm:px-8 rounded-sm self-center font-bold text-[0.75rem] sm:text-sm text-[#15271C] focus:outline-none font-sans border-white bg-white hover:bg-gray-100 transition-colors duration-200"
                key={`link-${currentSlide}`}
              >
                READ MORE
              </a>
            </div>

            {/* Indicator Dots */}
            <div className="flex gap-x-2 z-30">
              {carouselSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full border border-white transition-colors duration-200 ${
                    currentSlide === index ? "bg-white" : "bg-transparent"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}

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
                className="py-2 px-16 flex items-center gap-1 font-sans rounded-sm font-bold text-sm lg:text-[0.75rem] lg:leading-[1.72125rem] text-white bg-[#04662A] hover:bg-[#056628] transition-colors duration-200"
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
        className="absolute left-6 hidden sm:flex top-1/2 -translate-y-1/2 z-40 w-10 h-10 items-center justify-center text-white hover:bg-black/20 rounded-full transition-colors duration-200"
        aria-label="Previous slide"
        disabled={transitioning}
      >
        <LeftButtonCarouselIcon />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 hidden sm:flex top-1/2 -translate-y-1/2 z-40 w-10 h-10 items-center justify-center text-white hover:bg-black/20 rounded-full transition-colors duration-200"
        aria-label="Next slide"
        disabled={transitioning}
      >
        <RightButtonCarouselIcon />
      </button>
    </div>
  )
}
