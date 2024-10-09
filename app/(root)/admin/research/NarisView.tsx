"use client"
import React, { useEffect, useState } from 'react'
import NarisTable from './_components/table/NarisTable'
import { Nariscolumns } from './_components/table/column'
import NarisForm from './_components/forms/NarisForm'
import { useNarissData } from '@/hooks/Naris.hooks'

const NarisView = () => {
  const [createNewInstitute, setCreateNewInstitute] = useState<boolean>(false)
  const [token, setToken] = useState<string | null>(null)
  const [narisArray, setNarisArray] = useState<any[]>([])
  const [triggerRefetch, setTriggerRefetch] = useState<boolean>(false)
  const {loading, nariss, error} = useNarissData(token, triggerRefetch)

  useEffect(() => {
    const userToken = localStorage.getItem("userToken");
    setToken(userToken)
},[])

useEffect(() => {
  if(nariss?.length > 0){
    setNarisArray(nariss)
  }
},[nariss])
if (loading && nariss?.length < 1) return <p>Loading....</p>


  return (
    <div className='w-full min-h-screen bg-[#f9fafb] p-10'>
            <div className='w-full min-h-[70vh]'>
             {createNewInstitute ? <NarisForm setCreateNewInstitute={setCreateNewInstitute}/> :<>
                <div>
                    <p className='text-[#374151] text-[24px] leading-[30px] font-bold font-[Montserrat]'>Research Institutes</p>
                    <p className='text-[#374151] text-[18px] leading-[32.4px] font-normal font-[Montserrat]'>Here’s a list of all your research institutes </p>
                </div>
                <div className='w-full min-h-[70vh] bg-white rounded-md mt-5'>
                   <NarisTable columns={Nariscolumns} data={narisArray ?? []} setCreateNewInstitute={setCreateNewInstitute}/>
                </div>
              </>}
            </div>
        </div>
  )
}

export default NarisView