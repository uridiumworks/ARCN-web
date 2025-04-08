"use client";
import { LuMapPin } from "react-icons/lu";
import Image from "next/image";
import { useClientEventsData } from "@/hooks/Events.hooks";
import CustomContainer from "../CustomContainer";
import { LocationOutlineIcon2 } from "@/assets/icons";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

interface Event {
  url: any;
  id: number;
  Title: string;
  Description: {
    text: string;
  }
  Location: string;
  Startdate?: string
  Enddate?: string
  image?: {
    url: string
  }
}
const Events = () => {
  // const {events} = useClientEventsData([]);
  const [events, setEvents] = useState<Event[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URLS;

  useEffect(() => {
    const fetchEventsData = async () => {
      try {
        setIsLoading(true)
        const response = await axios.get(`${BASE_URL}/api/events?populate=Image&populate=category&filters[category][slug][%24eq]=upcoming`,
          { 
            headers: { 
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
              'Content-Type': 'application/json'
            }, 
          }
        );
        if (!response) {
          throw new Error("Failed to fetch events data")
        }
        const data = await response.data?.data || []
        setEvents(data)
        setIsLoading(false)

      } catch (err) {
        console.error("Error fetching events data:", err)
        setError("Failed to load events data")
        setIsLoading(false)
      }
    };
    fetchEventsData();
  }, []);

  if (isLoading) {
    return (
      <div className="text-black text-xl flex justify-center py-20">Loading image...</div>
    )
  }
  if (error !== null) {
    console.error(error)
    return (
      <div className="text-black text-xl flex justify-center py-20">{error}</div>
    )
  }
  console.log();

  return (
    <section className="bg-white py-12 md:py-20">
      <CustomContainer>
      <div className="flex flex-col gap-12">
          <h2 className="text-center text-[#171717] font-bold text-3xl sm:text-4xl leading-[2.25rem]">
            Upcoming Events
          </h2>

          {events.length === 0 ? (
            <div className="text-center text-gray-500">No upcoming events at this time.</div>
          ) : (
            <div className="grid grid-cols-[100%] sm:grid-cols-2 gap-14">
              {events.slice(0, 6).map((event) => (
                <div
                  key={event.id}
                  className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-10 bg-white border border-[#E8E8E8] rounded-xl py-3 px-3.5 lg:px-2.5 lg:py-1.5"
                >
                  <div className="flex flex-col lg:self-center items-start order-2 lg:order-1 flex-grow">
                    <div className="flex text-sm gap-1 font-medium">
                      <span className="text-[#1315175C]">{event.Startdate || "6:00 PM"}</span>
                      <span className="text-[#D19D20]">{event.Enddate || "7:00 PM GMT+2"}</span>
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-lg leading-[1.5rem] text-[#131517] font-medium">{event.Title}</h3>
                      <p className="font-normal leading-[1.5rem] text-[#464646] text-[0.75rem]">{event.Description.text}</p>
                      <div className="flex items-center gap-2">
                        <LocationOutlineIcon2 className="scale-[.8]" />
                        <p className="text-[#1315175C] leading-[1.5rem] text-[0.75rem] font-normal">{event.Location}</p>
                      </div>
                    </div>
                    {event.url && (
                      <Link
                        href={event.url}
                        target="_blank"
                        className="bg-[#07A46022] text-[#07A460] font-medium text-[0.75rem] rounded-full px-2 py-1.5 text-center cursor-pointer hover:bg-[#07A46033] transition-colors"
                      >
                        Register Here
                      </Link>
                    )}
                  </div>
                  <div className="relative w-full lg:w-[9.375rem] h-[9.375rem] lg:h-full shrink-0 rounded-xl overflow-hidden order-1 lg:order-2">
                    <Image
                      src={event.image?.url || "/Images/Homepage/event-imgholder.png"}
                      alt={`Event image ${event.id}`}
                      // fill
                      className="object-cover h-full w-full"
                      width={150}
                      height={150}
                      priority
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </CustomContainer>
    </section>
  );
};

export default Events;
