"use client";

import React, { useEffect, useState } from 'react'
import FCAsTable from './_components/table/FCAsTable'
import { FCAscolumns } from './_components/table/columns'
import FCAsForm from './_components/forms/FCAsForm';
import { useFCAsData } from '@/hooks/FCAs.hooks';

const FCAs = () => {
  const [createFCAs, setCreateFCAs] = useState<boolean>(false)
  const [token, setToken] = useState<string | null>(null)
  const [fcasArray, setFcasArray] = useState<any[]>([])
  const [triggerRefetch, setTriggerRefetch] = useState<boolean>(false)
  const {loading, fcas, error} = useFCAsData(token, triggerRefetch)

  useEffect(() => {
    const userToken = localStorage.getItem("userToken");
    setToken(userToken)
},[])

useEffect(() => {
  if(fcas?.length > 0){
    setFcasArray(fcas)
  }
},[fcas])
if (loading && fcas?.length < 1) return <p>Loading....</p>

  return (
    <div className='w-full min-h-screen bg-[#f9fafb] p-10'>
    <div className='w-full min-h-[70vh]'>
      {createFCAs ? <FCAsForm setCreateFCAs={setCreateFCAs}/> : <>
        <div>
            <p className='text-[#374151] text-[24px] leading-[30px] font-bold font-[Montserrat]' style={{fontFamily: "Montserrat"}}>Federal College of Agricultures</p>
            <p className='text-[#374151] text-[18px] leading-[32.4px] font-normal font-[Montserrat]'>Here’s a list of all your research institutes</p>
        </div>
        <div className='w-full min-h-[70vh] bg-white rounded-md mt-5'>
           <FCAsTable columns={FCAscolumns} data={fcasArray ?? []} setCreateFCAs={setCreateFCAs}/>
        </div>
      </>}
    </div>
</div>
  )
}

export default FCAs