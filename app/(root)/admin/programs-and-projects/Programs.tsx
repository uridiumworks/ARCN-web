"use client";
import React, { useEffect, useState } from "react";
import ProgramsTable from "./_components/tables/ProgramsTable";
import { Programscolumns } from "./_components/tables/columns";
import ProgramForm from "./_components/forms/ProgramForm";
import { useProgramsData } from "@/hooks/Programs.hooks";
import Loader from "@/components/Shared/Loader";
import { useProgramsContext } from "@/contexts/Programs.context";

const Programs = () => {
  const [createNewProgram, setCreateNewProgram] = useState<boolean>(false);
 const {isLoading,getPrograms,programs} = useProgramsContext();

 useEffect(() => {getPrograms()},[getPrograms])

  return (
    <>
      <Loader loading={isLoading} />
      <div className="w-full min-h-screen bg-[#f9fafb] p-10">
        <div className="w-full min-h-[70vh]">
          {createNewProgram ? (
            <ProgramForm setCreateNewProgram={setCreateNewProgram} />
          ) : (
            <>
              <div>
                <p className="text-[#374151] text-[24px] leading-[30px] font-bold font-[Montserrat]">
                  Programs
                </p>
                <p className="text-[#374151] text-[18px] leading-[32.4px] font-normal font-[Montserrat]">
                  Here’s a list of all programs created
                </p>
              </div>
              <div className="w-full min-h-[70vh] bg-white rounded-md mt-5">
                <ProgramsTable
                  columns={Programscolumns}
                  data={programs ?? []}
                  setCreateNewProgram={setCreateNewProgram}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Programs;
