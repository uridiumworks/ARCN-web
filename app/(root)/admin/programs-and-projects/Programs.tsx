"use client"
import React, { useEffect, useState } from 'react'
import ProgramsTable from './_components/tables/ProgramsTable'
import { Programscolumns } from './_components/tables/columns'
import ProgramForm from './_components/forms/ProgramForm'
import { useProgramsData } from '@/hooks/Programs.hooks'

const Programs = () => {
  const [createNewProgram, setCreateNewProgram] = useState<boolean>(false)
  const [token, setToken] = useState<string | null>(null)
  const [programArray, setProgramArray] = useState<any[]>([])
  const [triggerRefetch, setTriggerRefetch] = useState<boolean>(false)
  const {loading, programs, error} = useProgramsData(token, triggerRefetch)

  useEffect(() => {
    const userToken = localStorage.getItem("userToken");
    setToken(userToken)
},[])

useEffect(() => {
  if(programs?.length > 0){
    setProgramArray(programs)
  }
},[programs])
if (loading && programs?.length < 1) return <p>Loading....</p>

  return (
    <div className='w-full min-h-screen bg-[#f9fafb] p-10'>
    <div className='w-full min-h-[70vh]'>
     {createNewProgram ? <ProgramForm setCreateNewProgram={setCreateNewProgram}/> :<>
        <div>
            <p className='text-[#374151] text-[24px] leading-[30px] font-bold font-[Montserrat]'>Programs</p>
            <p className='text-[#374151] text-[18px] leading-[32.4px] font-normal font-[Montserrat]'>Here’s a list of all programs created</p>
        </div>
        <div className='w-full min-h-[70vh] bg-white rounded-md mt-5'>
           <ProgramsTable columns={Programscolumns} data={programArray ?? []} setCreateNewProgram={setCreateNewProgram}/>
        </div>
      </>}
    </div>
</div>
  )
}

export default Programs