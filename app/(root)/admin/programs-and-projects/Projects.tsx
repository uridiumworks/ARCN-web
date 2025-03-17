"use client";
import React, { useEffect, useState } from "react";
import ProjectTable from "./_components/tables/ProjectTable";
import { Projectscolumns } from "./_components/tables/columns";
import ProjectForm from "./_components/forms/ProjectForm";
import { useProjectsData } from "@/hooks/Projects.hooks";
import Loader from "@/components/Shared/Loader";
import { useProjectsContext } from "@/contexts/Projects.context";

const Projects = () => {
  const [createNewProject, setCreateNewProject] = useState<boolean>(false);
const {isLoading,projects,getProjects} = useProjectsContext();

useEffect(() => {
  getProjects()
},[getProjects])

  return (
    <>
      <Loader loading={isLoading} />
      <div className="w-full min-h-screen bg-[#f9fafb] p-10">
        <div className="w-full min-h-[70vh]">
          {createNewProject ? (
            <ProjectForm setCreateNewProject={setCreateNewProject} />
          ) : (
            <>
              <div>
                <p className="text-[#374151] text-[24px] leading-[30px] font-bold font-[Montserrat]">
                  Projects
                </p>
                <p className="text-[#374151] text-[18px] leading-[32.4px] font-normal font-[Montserrat]">
                  Here’s a list of all projects created
                </p>
              </div>
              <div className="w-full min-h-[70vh] bg-white rounded-md mt-5">
                <ProjectTable
                  columns={Projectscolumns}
                  data={projects ?? []}
                  setCreateNewProject={setCreateNewProject}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Projects;
