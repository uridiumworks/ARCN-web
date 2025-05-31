"use client"

import type React from "react"

import { mainNav, topNav, Ourservices } from "@/constants"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { Search, Menu, X, ChevronDown, ChevronRight } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

type Props = {}

const Navbar = (props: Props) => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const searchInputRef = useRef<HTMLInputElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
    setServicesDropdownOpen(false)
  }, [pathname])

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const toggleMobileMenu = () => {
    setIsOpen((prev) => !prev)
  }

  const toggleServicesDropdown = (e: React.MouseEvent) => {
    e.preventDefault()
    setServicesDropdownOpen((prev) => !prev)
  }

  const toggleMobileServices = (e: React.MouseEvent) => {
    e.preventDefault()
    setMobileServicesOpen((prev) => !prev)
  }

  const handleSearch = () => {
    const searchValue = searchInputRef.current?.value || ""
    if (searchValue.trim()) {
      console.log("Search action triggered:", searchValue)
      window.location.href = `/search?q=${encodeURIComponent(searchValue.trim())}`
    }
  }

  const searchWebsite = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setServicesDropdownOpen(false)
    }
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      setServicesDropdownOpen((prev) => !prev)
    }
  }

  const isActiveFunc = (name: string) => {
    switch (name) {
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
        return pathname.toLowerCase().includes("our-services")
      case "Impacts":
        return pathname.toLowerCase().includes("impacts")
      case "Contact":
        return pathname.toLowerCase().includes("contact")
      case "Careers":
        return pathname.toLowerCase().includes("career")
      case "Publications":
        return pathname.toLowerCase().includes("publications")
      default:
        return false
    }
  }

  return (
    <nav className="lg:px-2 sm:px-4 py-3.5 bg-white sticky w-full z-[100] top-0 left-0">
      <div className="w-full max-md:max-w-full sm:max-w-[71.25rem] sm:mx-auto px-3.5 md:px-10 flex flex-col md:flex-row justify-between items-center">
        {/* Logo + Menu toggle */}
        <div className="flex py-3 lg:py-0 w-full max-md:w-full md:w-auto flex-wrap items-center justify-between">
          <Link href="/" className="text-center">
            <Image src="/Images/logov1.svg" width={80} height={35} alt="logo" />
          </Link>

          <button
            onClick={toggleMobileMenu}
            type="button"
            className="inline-flex items-center p-2 lg:hidden focus:outline-none"
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex w-full md:w-auto px-3.5 lg:px-0 flex-col lg:flex-row gap-4">
          <div className="w-full md:flex flex-col-reverse lg:flex-col gap-7 md:gap-0 py-6 lg:py-0">
            {/* Top nav */}
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

            {/* Main nav */}
            <div className="flex flex-col md:flex-row justify-start md:justify-center gap-6">
              {mainNav.map((item, index) => {
                const isActive = isActiveFunc(item.name)

                // Special handling for Our Services dropdown
                if (item.name === "Our Services") {
                  return (
                    <div key={index} className="relative" ref={dropdownRef}>
                      <a
                        href="#"
                        onClick={toggleServicesDropdown}
                        onKeyDown={handleKeyDown}
                        className={cn(
                          "font-bold text-sm lg:text-xs leading-[2rem] uppercase cursor-pointer flex items-center gap-1",
                          isActive || servicesDropdownOpen ? "lg:text-[#30A85F]" : "lg:text-[#121212]",
                        )}
                        aria-expanded={servicesDropdownOpen}
                        aria-haspopup="true"
                        tabIndex={0}
                      >
                        {item.name}
                        <ChevronDown
                          className={cn(
                            "h-3 w-3 transition-transform duration-200",
                            servicesDropdownOpen ? "rotate-180" : "",
                          )}
                        />
                      </a>

                      {/* Dropdown menu */}
                      {servicesDropdownOpen && (
                        <div className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md py-2 min-w-[220px] z-50">
                          {Ourservices.map((service, idx) => (
                            <Link
                              key={idx}
                              href={service.url}
                              className="block px-4 py-2 text-xs hover:bg-gray-100 text-[#121212] hover:text-[#30A85F]"
                              onClick={() => setServicesDropdownOpen(false)}
                            >
                              {service.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                }

                // Regular menu items
                return (
                  <a
                    key={index}
                    href={item.url}
                    className={cn(
                      "font-bold text-sm lg:text-xs leading-[2rem] uppercase cursor-pointer",
                      isActive ? "lg:text-[#30A85F]" : "lg:text-[#121212]",
                    )}
                  >
                    {item.name}
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Search bar (Desktop Only) */}
        <div className="hidden lg:flex items-center gap-8 justify-between rounded-md px-2 bg-[#fff] border border-[#3C3C3C]">
          <input
            ref={searchInputRef}
            type="search"
            placeholder="Search"
            className="outline-none bg-transparent text-[#121212] py-1.5 px-1 text-xs leading-[1.2rem] focus-visible:outline-none placeholder:text-[#121212] placeholder:text-xs"
            onKeyDown={searchWebsite}
          />

          <div
            onClick={handleSearch}
            className="cursor-pointer p-1 hover:bg-gray-100 rounded-full"
            role="button"
            aria-label="Search"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleSearch()
              }
            }}
          >
            <Search color="#2E7636" size="14px" />
          </div>
        </div>

        {/* Mobile Menu - Overlay */}
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={toggleMobileMenu}></div>
        )}

        {/* Mobile Menu - Content */}
        <div
          className={cn(
            "fixed left-0 right-0 top-0 z-50 bg-white shadow-xl transform transition-transform duration-300 ease-in-out overflow-y-auto lg:hidden h-[90vh]",
            isOpen ? "translate-y-0" : "-translate-y-full",
          )}
        >
          <div className="flex flex-col p-6">
            {/* Mobile Menu Header with Logo and Close Button */}
            <div className="flex items-center justify-between mb-6">
              <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                <Image src="/Images/logov1.svg" width={80} height={35} alt="logo" className="h-auto" />
              </Link>
              <button
                onClick={toggleMobileMenu}
                type="button"
                className="p-2 rounded-md focus:outline-none"
                aria-label="Close navigation"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Search */}
            <div className="flex items-center justify-between rounded-md px-3 py-2 bg-white border border-[#3C3C3C] mb-6">
              <input
                type="search"
                placeholder="Search"
                onKeyDown={searchWebsite}
                className="outline-none bg-transparent text-[#121212] text-sm w-full focus:outline-none"
              />
              <Search color="#2E7636" size={18} />
            </div>

            {/* Mobile Main Navigation */}
            <div className="space-y-4 mb-6">
              <h3 className="text-sm font-bold text-[#30A85F] uppercase">Main Menu</h3>
              <div className="flex flex-col space-y-3">
                {mainNav.map((item, index) => {
                  const isActive = isActiveFunc(item.name)

                  // Special handling for Our Services in mobile menu
                  if (item.name === "Our Services") {
                    return (
                      <div key={index} className="flex flex-col space-y-1">
                        <button
                          onClick={toggleMobileServices}
                          className={cn(
                            "flex items-center justify-between py-2 px-3 rounded-md text-sm uppercase font-medium transition-colors duration-200 w-full text-left",
                            isActive || mobileServicesOpen
                              ? "bg-[#d7eec7] text-[#020202e7]"
                              : "bg-[#f5f5f5] text-[#121212] hover:bg-[#e0e0e0]",
                          )}
                        >
                          {item.name}
                          <ChevronRight
                            className={cn(
                              "h-4 w-4 transition-transform duration-200",
                              mobileServicesOpen ? "rotate-90" : "",
                            )}
                          />
                        </button>

                        {/* Mobile Services Submenu */}
                        {mobileServicesOpen && (
                          <div className="pl-4 space-y-1 mt-1">
                            {Ourservices.map((service, idx) => (
                              <Link
                                key={idx}
                                href={service.url}
                                className="block py-2 px-3 rounded-md text-sm capitalize font-medium bg-[#f9f9f9] text-[#121212] hover:bg-[#e0e0e0]"
                                onClick={() => setIsOpen(false)}
                              >
                                {service.title}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    )
                  }

                  // Regular mobile menu items
                  return (
                    <Link
                      key={index}
                      href={item.url}
                      className={cn(
                        "py-2 px-3 rounded-md text-sm uppercase font-medium transition-colors duration-200",
                        isActive ? "bg-[#d7eec7] text-[#020202e7]" : "bg-[#f5f5f5] text-[#121212] hover:bg-[#e0e0e0]",
                      )}
                    >
                      {item.name}
                    </Link>
                  )
                })}
              </div>
            </div>

            {/* Mobile Top Navigation */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-[#30A85F] uppercase">Quick Links</h3>
              <div className="flex flex-col space-y-3">
                {topNav.map((item, index) => {
                  const isActive = isActiveFunc(item.name)
                  return (
                    <Link
                      key={index}
                      href={item.url}
                      className={cn(
                        "py-2 px-3 rounded-md text-sm capitalize font-medium transition-colors duration-200",
                        isActive ? "bg-[#6d9462] text-[#020202e7]" : "bg-[#f5f5f5] text-[#121212] hover:bg-[#e0e0e0]",
                      )}
                    >
                      {item.name}
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
