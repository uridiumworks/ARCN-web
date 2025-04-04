"use client";
import { useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import {
  RightButtonCarouselIcon,
  LeftButtonCarouselIcon,
} from "@/assets/icons";
import CustomContainer from "@/components/CustomContainer";
import { useContextSelector } from "@/hooks/use-context-selector";
import ResearchMandateSkeletonItemLoading from "@/components/skeletonloading/ResearchMandateSkeletonItemLoading";

interface CarouselItem {
  id: number;
  imageUrl: string;
}

const baseURL = process.env.NEXT_PUBLIC_API_BASE_UPLOAD_URL;
export default function Research() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const mandateSearch = useContextSelector((ctx) => ctx.mandateSearch);
  const isLoadingMandateSearch = useContextSelector(
    (ctx) => ctx.isLoadingMandateSearch
  );
  const fetchMandateResearch = useContextSelector(
    (ctx) => ctx.fetchMandateSearch
  );

  useEffect(() => {
    fetchMandateResearch();
  }, [fetchMandateResearch]);

  // Carousel items with Unsplash agricultural images

  const carouselItems: CarouselItem[] = useMemo(() => {
    if (!isLoadingMandateSearch && mandateSearch?.data?.Slides.length) {
      return mandateSearch?.data.Slides.map((sld, i) => {
        return {
          id: i,
          imageUrl: `${baseURL}${sld.formats.large.url}`,
        };
      });
    } else {
      return [];
    }
  }, [isLoadingMandateSearch, mandateSearch?.data.Slides]);

  const nextSlide = () => {
    if (transitioning) return;
    setTransitioning(true);
    setCurrentSlide((prev) =>
      prev === carouselItems.length - 1 ? 0 : prev + 1
    );
    setTimeout(() => setTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (transitioning) return;
    setTransitioning(true);
    setCurrentSlide((prev) =>
      prev === 0 ? carouselItems.length - 1 : prev - 1
    );
    setTimeout(() => setTransitioning(false), 500);
  };

  const goToSlide = (index: number) => {
    if (transitioning || currentSlide === index) return;
    setTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setTransitioning(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [transitioning]);

  if (isLoadingMandateSearch) {
    return <ResearchMandateSkeletonItemLoading />;
  } else if (
    !isLoadingMandateSearch &&
    mandateSearch?.data.Slides.length === 0
  ) {
    return null;
  } else {
    return (
      <div className="relative w-full h-[41.5rem] overflow-hidden">
        {/* Slider container */}
        <div
          ref={sliderRef}
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {carouselItems.map((item, index) => (
            <div
              key={item.id}
              className="min-w-full h-full relative flex-shrink-0"
            >
              <Image
                src={item.imageUrl || "/placeholder.svg"}
                alt={`Agricultural slide ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
                unoptimized
              />
              {/* Individual slide overlay */}
              <div className="absolute inset-0 bg-[#15271C] bg-opacity-30"></div>
            </div>
          ))}
        </div>

        {/* Improved gradient overlay using #15271C */}
        <div
          className="absolute inset-0 z-20"
          style={{
            background: `linear-gradient(90deg, 
              rgba(21, 39, 28, 0.85) 0%, 
              rgba(21, 39, 28, 0.65) 50%, 
              rgba(21, 39, 28, 0.85) 100%)`,
          }}
        ></div>

        {/* Carousel Content - Fixed text that doesn't change */}
        <div className="absolute inset-0 flex items-center justify-center z-30">
          <div className="max-w-3xl px-6 py-8 mx-auto text-center">
            <h2 className="font-bold text-3xl text-center sm:text-5xl lg:text-[2.5rem] leading-[1.2] sm:leading-[1.2] text-white mb-4 line-clamp-3">
              {mandateSearch?.data?.Title &&
              mandateSearch?.data?.Title.length > 80
                ? `${mandateSearch.data.Title}...`
                : mandateSearch?.data?.Title}
            </h2>

            <p className="text-[#FFC84F] text-base text-center md:text-[1.25rem] font-medium leading-[1.5] lg:leading-[1.6] max-w-2xl mx-auto line-clamp-4">
              {mandateSearch?.data?.Description &&
              mandateSearch?.data?.Description.length > 165
                ? `${mandateSearch.data.Description}...`
                : mandateSearch?.data?.Description}
            </p>
          </div>
        </div>

        {/* Indicator Dots */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-x-2 z-30">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full border border-white ${
                currentSlide === index ? "bg-white" : "bg-transparent"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
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
    );
  }
}
