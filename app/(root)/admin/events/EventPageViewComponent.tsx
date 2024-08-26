"use client"

import React, { useEffect, useState } from 'react'
import EventTable from './_components/table/EventTable'
import { Eventcolumns } from './_components/table/column'
import EventForm from './_components/EventForm'
import { useEventsData } from '@/hooks/Events.hooks'

const EventPageViewComponent = () => {
    const [createNewEvent, setCreateNewEvent] = useState<boolean>(false)
    const [token, setToken] = useState<string | null>(null)
    const [eventArray, setEventArray] = useState<any[]>([])
    const [triggerRefetch, setTriggerRefetch] = useState<boolean>(false)
    const {loading, events, error} = useEventsData(token, triggerRefetch)
  
    useEffect(() => {
      const userToken = localStorage.getItem("userToken");
      setToken(userToken)
  },[])
  
  useEffect(() => {
    if(events?.length > 0){
      setEventArray(events)
    }
  },[events])
  if (loading && events?.length < 1) return <p>Loading....</p>

    const EventTableData = [{
        checkbox: "",
        subject: "string",
        description: "string",
        eventDate: "string",
        eventTime: "string",
        venue: "string",
        action: "any"
    }];
    return (
        <div className='w-full min-h-screen bg-[#f9fafb] p-10'>
            <div className='w-full min-h-[70vh]'>
                {createNewEvent ? <EventForm setCreateNewEvent={setCreateNewEvent} /> : <>
                    <div>
                        <p className='text-[#374151] text-[24px] leading-[30px] font-bold font-[Montserrat]'>Events</p>
                        <p className='text-[#374151] text-[18px] leading-[32.4px] font-normal font-[Montserrat]'>Here’s a list of all events created</p>
                    </div>
                    <div className='w-full min-h-[70vh] bg-white rounded-md mt-5'>
                        <EventTable columns={Eventcolumns} data={eventArray ?? []} setCreateNewEvent={setCreateNewEvent}/>
                    </div>
                </>}

            </div>
        </div>
    )
}

export default EventPageViewComponent