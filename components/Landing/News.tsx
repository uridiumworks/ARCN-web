"use client"
import Image from "next/image"
import CustomContainer from "../CustomContainer"
import { useEffect, useState } from "react"
import axios from "axios"

interface NewsItem {
  type: string
  url: string[]
  subject: string
  content: string
  id: number
}

interface ApiResponse {
  data: any | any[]
  meta?: any
}

const Newsdata = () => {
  const [newsLettersData, setNewsLettersData] = useState<ApiResponse | null>(null)
  const [newsLettersItem, setNewsLettersItem] = useState<any | null>(null)
  const [journalData, setJournalData] = useState<ApiResponse | null>(null)
  const [journalItem, setJournalItem] = useState<any | null>(null)
  const [articlesData, setArticlesData] = useState<ApiResponse | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URLS

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fallbackData = [
          {
            type: "ARCN JOURNAL",
            url: ["/Images/Homepage/journal-img-1.png", "/Images/Homepage/journal-img-2.png"],
            subject: "Journal Title",
            content:
              "ARCN plays a pivotal role in the dissemination of cutting-edge research through its published journals. These journals serve as a platform for researchers from diverse fields and various institutes to share their findings, insights, and innovations with the global academic community.",
            id: 1,
          },
          {
            type: "NEWSLETTER",
            url: ["/Images/Homepage/newsletter-img-1.png", "/Images/Homepage/newsletter-img-2.png"],
            subject: "Newsletter Title",
            content:
              "ARCN plays a pivotal role in the dissemination of cutting-edge research through its published journals. These journals serve as a platform for researchers from diverse fields and various institutes to share their findings, insights, and innovations with the global academic community.",
            id: 2,
          },
        ]
        setIsLoading(true)

        // Create all fetch requests
        const journalPromise = axios.get(`${BASE_URL}/api/journal?populate=Images`, {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
            "Content-Type": "application/json",
          },
        })

        const newslettersPromise = axios.get(`${BASE_URL}/api/newsletter?populate=Images`, {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
            "Content-Type": "application/json",
          },
        })

        const articlesPromise = axios.get(`${BASE_URL}/api/articles?pagination[limit]=2`, {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
            "Content-Type": "application/json",
          },
        })

        // Execute all requests in parallel
        const [journalResponse, newslettersResponse, articlesResponse] = await Promise.all([
          journalPromise,
          newslettersPromise,
          articlesPromise,
        ])

        // Validate responses and set data
        if (journalResponse.status >= 200 && journalResponse.status < 300) {
         setJournalItem({
          type: "ARCN JOURNAL",
          url: journalResponse.data?.data.attributes?.Images?.map((img: any) => img.url) || [
            "/Images/Homepage/journal-img-1.png",
            "/Images/Homepage/journal-img-2.png",
          ],
          subject: journalResponse.data?.data?.Title || "Journal Title",
          content: journalResponse.data?.data?.Description || fallbackData[0].content,
          id: 1,
        })
          setJournalData(journalResponse.data)
        }

        if (newslettersResponse.status >= 200 && newslettersResponse.status < 300) {
          console.log("newslettersResponse.data", newslettersResponse.data);
          setNewsLettersItem({
            type: "NEWSLETTER",
            url: newslettersResponse.data.data.attributes?.Images?.map((img: any) => img.url) || [
              "/Images/Homepage/newsletter-img-1.png",
              "/Images/Homepage/newsletter-img-2.png",
            ],
            subject: newslettersResponse.data.data?.Title || "Newsletter Title",
            content: newslettersResponse.data.data?.Description || fallbackData[1].content,
            id: 2,
          })
          setNewsLettersData(newslettersResponse.data)
        }

        if (articlesResponse.status >= 200 && articlesResponse.status < 300) {
          setArticlesData(articlesResponse.data)
        }
      } catch (error) {
        console.error("Error fetching data:", error)
        setError("Failed to fetch data")
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  if (isLoading) {
    return <div className="text-black text-xl flex justify-center py-20">Loading...</div>
  }

  if (error) {
    return <div className="text-black text-xl flex justify-center py-20">Error: {error}</div>
  }

  // Fallback data if API fails
  

  // Use API data if available, otherwise use fallback data
  

 

  const newsDataArray = [journalItem, newsLettersItem]

  // Prepare articles data
  const articles = articlesData?.data?.length
    ? articlesData.data.map((article: any, index: number) => ({
        title: article?.title || `News Title ${index + 1}`,
        content: article?.exerpt,
        id: article?.documentId
      }))
    : []

  return (
    <section className="py-12 md:py-20 bg-[#FBFAFA]">
      <CustomContainer>
        <div className="flex flex-col gap-12">
          <h2 className="font-bold text-[#171717] text-3xl sm:text-4xl leading-[2.25rem] text-center">Publications</h2>
          <div className="grid grid-cols-home-publication-res gap-6">
            {newsDataArray.map((el, i) => (
              <div
                key={i}
                className={`flex flex-col gap-3.5 ${
                  i === 0 ? "border-[0px] sm:border-r border-[#E7E7E7] sm:pr-2.5" : "sm:pr-2.5"
                } `}
              >
                <h3 className={`font-medium text-[#131517] text-xl sm:text-2xl leading-[1.46625rem] text-opacity-85`}>
                  {el.type}
                </h3>

                <div className="grid grid-rows-[min_content_auto] gap-8">
                  <div className="flex gap-4 justify-start">
                    {el.url.slice(0, 2).map((url: string, i: number) => (
                      <div className="relative overflow-hidden rounded-md" key={i}>
                        <Image
                          width={200}
                          height={350}
                          src={url || "/placeholder.svg"}
                          alt={`${el.type} image ${i + 1}`}
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col items-start gap-2.5">
                    <h4 className="font-medium text-base sm:text-lg sm:leading-[1.28625rem] text-[#131517]">
                      {el.subject}
                    </h4>
                    <p className="text-[#464646] font-normal text-sm leading-[1.5rem]">{el.content}</p>
                    <div className="bg-[#0C513F0D] rounded-sm text-[#0C513F] font-medium text-[0.75rem] leading-[1.5625rem] py-1 px-4 cursor-pointer">
                      Read More
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="flex flex-col gap-3.5 col-span-1 sm:col-span-full lg:col-span-1">
              <h3 className="font-medium text-[#131517] text-xl sm:text-2xl leading-[1.46625rem] text-opacity-85">
                NEWS ALERTS
              </h3>
              <div className="flex flex-col sm:flex-row lg:flex-col gap-6">
                {(articles as any[]).map((article, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-3 items-start rounded-xl py-5 px-7 border-[1.08px] border-[#E8E8E8] bg-white"
                  >
                    <h4 className="text-[#131517] text-[1.345rem] leading-[1.5625rem] font-medium">{article.title}</h4>
                    <p className="font-normal text-[0.75rem] text-[#464646] leading-[1.28625rem] text-left">
                      {article.content}
                    </p>
                    <a href={"/news-and-events/" + article.id} className="bg-[#0C513F0D] rounded-sm text-[#0C513F] font-medium text-[0.75rem] leading-[1.5625rem] py-1 px-4 cursor-pointer">
                      Read More
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </CustomContainer>
    </section>
  )
}

export default Newsdata

