"use client"

import { mainNav, Ourservices, topNav } from "@/constants"
import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import { Search, Menu, X, ChevronDown, ChevronUp } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"
import Link from "next/link"
import { cn } from "@/lib/utils"

type Props = {}

const Navbar = (props: Props) => {
  const router = useRouter()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [toggle2, setToggle2] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setToggle2(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const showArrow = (key: boolean) => {
    return key ? <ChevronUp className="w-4 h-4 ms-2.5" /> : <ChevronDown className="w-4 h-4 ms-2.5" />
  }

  const displayArrow = (name: string) => {
    switch (name) {
      case "Our Services":
        return showArrow(toggle2)
      default:
        break
    }
  }

  const isActiveFunc = (arg: string) => {
    switch (arg) {
      case "Governance":
        return pathname.toLowerCase().includes("governance")

      case "Home":
        return pathname.toLowerCase() === "/"

      case "About Us":
        return pathname.toLowerCase().includes("about")
      case "mandate":
        return pathname.toLowerCase().includes("mandate")
      case "News & Events":
        return pathname.toLowerCase().includes("news-and-events")

      case "Programs & Projects":
        return pathname.toLowerCase().includes("programs-and-projects")

      case "Our Services":
        return Ourservices.some((service) => pathname.toLowerCase().includes(service.url.toLowerCase()))

      case "Impacts":
        return pathname.toLowerCase().includes("impacts")
      case "Contact":
        return pathname.toLowerCase().includes("contact")
      // case "Careers":
      //   return pathname.toLowerCase().includes("career");
      case "Publications":
        return pathname.toLowerCase().includes("publications")

      default:
        return false
    }
  }

  console.log(isActiveFunc("About Us"), "me")

  useEffect(() => {
    if (toggle2) {
      document.body.style.overflow = "visible"
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [toggle2])

  return (
    <nav className=" lg:px-2 sm:px-4 py-3.5 bg-white sticky w-full z-[100] top-0 left-0 ">
      <div className="w-full max-md:max-w-full sm:max-w-[71.25rem] sm:mx-auto px-3.5 md:px-10 flex flex-col md:flex-row justify-between items-center">
        {/* Logo + Menu toggle */}
        <div className="flex py-3 lg:py-0 w-full max-md:w-full md:w-auto flex-wrap items-center justify-between">
          <Link href="/" className="text-center">
            <Image src="/Images/logov1.svg" width={80} height={35} alt="logo" />
          </Link>

          <div className="flex lg:order-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 lg:hidden focus:outline-none mr-4 lg:mr-0"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <div className="space-y-4 w-full md:w-auto px-3.5 lg:px-0 md:text-center flex gap-4 ">
          <div
            className={cn(
              "blue-background w-full md:flex flex-col-reverse lg:gap-0 py-6 lg:py-0 gap-7 md:flex-col overflow-visible h-[85vh] lg:h-auto",
              isOpen ? "flex" : "hidden",
            )}
          >
            <div className="lg:flex justify-center items-center space-y-8 lg:space-y-0 gap-6">
              {topNav.map((item, index) => {
                const isActive = isActiveFunc(item.name)
                return (
                  <a
                    key={index}
                    href={item.url}
                    className={cn(
                      "font-bold lg:font-normal text-sm lg:text-[0.75rem] leading-[2rem] cursor-pointer uppercase lg:capitalize",
                      isActive ? "lg:text-[#30A85F]" : "lg:text-[#121212]",
                    )}
                  >
                    {item.name}
                  </a>
                )
              })}
            </div>

            <div
              ref={dropdownRef}
              className={`${isOpen ? "block" : "flex"} blue-background items-center border-t lg:border-0 py-1 lg:py-[13px] justify-between relative top-3 lg:top-0 w-full lg:w-auto lg:order-1 h-screen lg:h-auto text-base animate-slide_down lg:animate-none flex-col md:flex-row md:justify-center gap-6 overflow-visible`}
            >
              {mainNav.map((item, index) => {
                const isActive = isActiveFunc(item.name)
                return (
                  <div key={index} className="relative static lg:relative">
                    <button
                      onClick={() => {
                        if (item.name === "Our Services") {
                          setToggle2(!toggle2)
                        } else {
                          router.push(item.url)
                          setIsOpen(false)
                        }
                      }}
                      className={cn(
                        isActive ? "lg:text-[#30A85F] text-[#020202e7]" : "lg:text-[#121212] text-[#0f0f0f]",
                        "border md:border-none flex items-center justify-between font-bold text-sm lg:text-xs leading-[2rem] uppercase cursor-pointer w-full py-2 px-6 md:border-0 md:p-0 lg:w-auto bg-[#d7eec7] lg:bg-white md:px-0 md:py-0 rounded-md",
                      )}
                    >
                      {item.name}
                      {item.name === "Our Services" && displayArrow(item.name)}
                    </button>

                    {/* Dropdown menu for Our Services */}
                    {item.name === "Our Services" && toggle2 && (
                      <div
                        className="fixed lg:absolute left-0 lg:left-auto right-0 lg:right-auto top-auto lg:top-full mt-0 lg:mt-2 font-normal bg-white shadow-lg w-full lg:w-[250px] rounded-md z-[200]"
                        style={{ position: "absolute", zIndex: 999 }}
                      >
                        <div className="py-2">
                          {Ourservices.map((service, serviceIndex) => (
                            <Link
                              key={serviceIndex}
                              href={service.url}
                              onClick={() => {
                                setToggle2(false)
                                setIsOpen(false)
                              }}
                              className="block text-left px-4 py-2 text-sm hover:bg-gray-100 text-[#121212]"
                            >
                              {service.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-8 justify-between rounded-md px-2 bg-[#fff] border  border-[#3C3C3C]">
          <input
            type="search"
            placeholder="Search"
            className="outline-none bg-transparent text-[#121212] py-1.5 px-1 text-xs leading-[1.2rem] focus-visible:outline-none border-none placeholder:text-[#121212] placeholder:text-xs"
          />
          <Search color="#2E7636" size="14px" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
