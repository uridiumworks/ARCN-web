"use client"
import { IoLocationSharp } from "react-icons/io5"
import CustomContainer from "./CustomContainer"
import { MailIcon, WWWIcon } from "@/assets/icons"
import Link from "next/link"
import { Button } from "./ui/button"
import { useContextSelector } from "@/hooks/use-context-selector"
import Image from "next/image"
import { useEffect } from "react"

const Footer = () => {
  const isLoading = useContextSelector((context) => context.isLoadingSocial)

  const fetchSocial = useContextSelector((context) => context.fetchSocials)
  const socialData = useContextSelector((context) => context.socialData)
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URLS;
  // Fetch social data on component mount
  useEffect(() => {
      fetchSocial()
  }, [fetchSocial])

  return (
    <footer className="lg:min-h-[31.875rem] bg-[#121212] text-white pt-12 pb-2.5 md:pt-16 md:pb-4">
      <div className="flex flex-col gap-6 ">
        <CustomContainer>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 justify-between pb-3">
            <div className="flex flex-col gap-3">
              <div>
                <h2 className="font-bold text-base">Agricultural Research Council of Nigeria</h2>
              </div>
              <div className="flex items-start gap-3.5">
                <IoLocationSharp className="size-6" />
                <p className="font-medium leading-[1.5rem] text-sm">
                  Agricultural Research House, Plot 223D <br />
                  Cadastral Zone B6, Mabushi, P .M. B. <br />
                  5026, Wuse Abuja
                </p>
              </div>
              <div className="flex items-center gap-3.5">
                <MailIcon /> <p className="font-medium text-sm leading-[1.5rem]">es@arcn.gov.ng</p>
              </div>
              <div className="flex items-center gap-3.5">
                <WWWIcon />{" "}
                <Link href="#" className="font-medium text-sm leading-[1.5rem]">
                  www.arcn.gov.ng
                </Link>
              </div>

              {/* Social Media Section */}
              <div className="flex flex-col gap-3 mt-4">
                <div className="flex items-center gap-3">
                  {isLoading ? (
                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-gray-600 rounded animate-pulse"></div>
                      <div className="w-8 h-8 bg-gray-600 rounded animate-pulse"></div>
                    </div>
                  ) : (
                    socialData?.map((social) => (
                      <Link
                        key={social.id}
                        href={social.Link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-80 transition-opacity duration-200"
                        aria-label={`Follow us on ${social.name}`}
                      >
                        <Image
                          src={BASE_URL + social.icon.url}
                          alt={social.name}
                          width={10}
                          height={10}
                          className="w-6 h-6 object-contain"
                        />
                      </Link>
                    ))
                  )}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-footer-res gap-5">
              <div className="flex flex-col gap-3">
                <h2 className="text-base sm:text-lg font-semibold leading-[1.6875rem]">ARCN</h2>
                <ul className="text-sm flex flex-col gap-2.5 font-normal text-[#EFEFEF]">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about/history">About Us</Link>
                  </li>
                  <li>
                    <Link href="#">Services</Link>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-3">
                <h2 className="text-base sm:text-lg font-semibold leading-[1.6875rem]">Our Services</h2>
                <ul className="text-sm flex flex-col gap-2.5 font-normal text-[#EFEFEF]">
                  <li>
                    <Link href="/mandate">Research</Link>
                  </li>
                  <li>
                    <Link href="/mandate/training">Training</Link>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-3">
                <h2 className="text-base sm:text-lg font-semibold leading-[1.6875rem]">Publications</h2>
                <ul className="text-sm flex flex-col gap-2.5 font-normal text-[#EFEFEF]">
                  <li>
                    <Link href="#">Research papers</Link>
                  </li>
                  <li>
                    <Link href="#">Reports</Link>
                  </li>
                  <li>
                    <Link href="#">Newsletter</Link>
                  </li>
                </ul>
              </div>

              <Link
                href={`https://mail.arcn.gov.ng/owa/`}
                target="_blank"
                className="pt-20 relative right-[-141%] top-[-51%] max-md:right-[58%] max-md:top-0"
              >
                <Button type="submit" className="w-fit text-base text-white bg-[#30A85F] items-center">
                  <span>Outlook Webmail Login</span>
                </Button>
              </Link>
            </div>
          </div>
        </CustomContainer>
        <hr className="border border-[#F1F1F3] border-opacity-50 my-3 mx-12" />

        <div className="text-center text-sm font-normal leading-[1.5rem]">
          <p>© 2024 ARCN. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
