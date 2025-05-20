"use client";
import CustomContainer from "@/components/CustomContainer";
import { useClientNewsLettersData } from "@/hooks/NewsLetters.hooks";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

interface Article {
  publishedAt: any;
  cover: any;
  title: any;
  content: any;
  id: string
  documentId: string;
  attributes: {
    title: string
    description: string
    publishedAt: string
    cover: {
      data: {
        attributes: {
          url: string
        }
      } | null
    }
  }
}

const New = () => {
  // const { loading, newsLetters, error } = useClientNewsLettersData();
  const [newsLetters, setNewsLetters] = useState<Article[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URLS;

   useEffect(() => {
      const fetchNewsData = async () => {
        try {
          setIsLoading(true)
          const response = await axios.get(`${BASE_URL}/api/articles?populate=cover`,
            { 
              headers: { 
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
                'Content-Type': 'application/json'
              }, 
            }
          );
          if (!response) {
            throw new Error("Failed to fetch news data")
          }
          const data = await response.data?.data || []
          setNewsLetters(data)
          setIsLoading(false)
  
        } catch (err) {
          console.error("Error fetching news data:", err)
          setError("Failed to load news data")
          setIsLoading(false)
        }
      };
      fetchNewsData();
    }, []);

    const convertToReadableDate = (isoDateStr: string): string => {
      const date = new Date(isoDateStr)
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    }
  
    if (isLoading) {
      return (
        <div className="flex justify-center items-center py-20">
          <div className="text-black text-xl">Loading news articles...</div>
        </div>
      )
    }
  
    if (error) {
      return (
        <div className="flex justify-center items-center py-20">
          <div className="text-black text-xl">{error}</div>
        </div>
      )
    }

    
  console.log(newsLetters, "news");

  return (
    <section className="py-12 md:py-20">
      <CustomContainer>
        <div className="flex flex-col gap-12">
          <h2 className="font-semibold text-3xl md:text-4xl leading-[2.25rem] text-center">News</h2>

          {newsLetters.length === 0 ? (
            <div className="text-center text-gray-500">No news articles available</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center gap-7">
              {newsLetters.slice(0, 6).map((article) => {
                const imageUrl = BASE_URL + article.cover?.url || "/Placeholder.png"
                const title = article.title
                const description = article.content
                const publishDate = article.publishedAt

                return (
                  <div key={article.id} className="space-y-1 flex flex-col h-full">
                    <div className="relative w-full h-[268.59px]">
                      <Image
                        src={imageUrl}
                        alt={title}
                        className="object-cover rounded-md w-full"
                        priority
                        fill={true}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>

                    <div className="space-y-1 flex-grow">
                      <h1 className="font-semibold text-base line-clamp-2">{title}</h1>
                      <p className="font-normal text-sm line-clamp-2">{description}</p>
                      <div className="flex flex-row items-center justify-between mt-auto">
                        <span className="font-normal text-sm text-[#999999]">{convertToReadableDate(publishDate)}</span>
                        <Link
                          href={`/news-and-events/${article.documentId}`}
                          className="font-bold text-sm text-[#15271C] hover:underline"
                        >
                          Read more
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </CustomContainer>
    </section>
  );
};

export default New;
