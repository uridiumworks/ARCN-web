"use client"

import React, { useState } from 'react'
import EventTable from './_components/table/EventTable'
import { Eventcolumns } from './_components/table/column'
import EventForm from './_components/EventForm'

const EventPageViewComponent = () => {
    const [createNewEvent, setCreateNewEvent] = useState<boolean>(false)

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
                        <EventTable columns={Eventcolumns} data={EventTableData ?? []} setCreateNewEvent={setCreateNewEvent}/>
                    </div>
                </>}

            </div>
        </div>
    )
}

export default EventPageViewComponent