"use client"
import React, { useEffect, useState } from 'react'
import ProjectTable from './_components/tables/ProjectTable'
import { Projectscolumns } from './_components/tables/columns'
import ProjectForm from './_components/forms/ProjectForm'
import { useProjectsData } from '@/hooks/Projects.hooks'

const Projects = () => {
  const [createNewProject, setCreateNewProject] = useState<boolean>(false)
  const [token, setToken] = useState<string | null>(null)
  const [projectArray, setProjectArray] = useState<any[]>([])
  const [triggerRefetch, setTriggerRefetch] = useState<boolean>(false)
  const {loading, projects, error} = useProjectsData(token, triggerRefetch)

  useEffect(() => {
    const userToken = localStorage.getItem("userToken");
    setToken(userToken)
},[])

useEffect(() => {
  if(projects?.length > 0){
    setProjectArray(projects)
  }
},[projects])
if (loading && projects?.length < 1) return <p>Loading....</p>

  return (
    <div className='w-full min-h-screen bg-[#f9fafb] p-10'>
            <div className='w-full min-h-[70vh]'>
             {createNewProject ? <ProjectForm setCreateNewProject={setCreateNewProject}/> :<>
                <div>
                    <p className='text-[#374151] text-[24px] leading-[30px] font-bold font-[Montserrat]'>Projects</p>
                    <p className='text-[#374151] text-[18px] leading-[32.4px] font-normal font-[Montserrat]'>Here’s a list of all projects created</p>
                </div>
                <div className='w-full min-h-[70vh] bg-white rounded-md mt-5'>
                   <ProjectTable columns={Projectscolumns} data={projectArray ?? []} setCreateNewProject={setCreateNewProject}/>
                </div>
              </>}
            </div>
        </div>
  )
}

export default Projects