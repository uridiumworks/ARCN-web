"use client";
import React, { useEffect, useState } from "react";
import {
  ContentManagementBlogscolumns,
  Journalscolumns,
} from "../blogs/_components/table/column";
import NewJournalForm from "./_components/NewJournalForm";
import JournalTable from "./_components/table/JournalTable";
import { useJournalsData } from "@/hooks/Journals.hooks";
import Loader from "@/components/Shared/Loader";
import { useJournal } from "@/contexts/Journals.context";

const JournalView = () => {
  const [createNewJournal, setCreateNewJournal] = useState<boolean>(false);
  const [journalsArray, setJournalsArray] = useState<any[]>([]);
  const [token, setToken] = useState<string | null>(null);
  const { isLoading, journals, getJournals } = useJournal();

  useEffect(() => {
    const userToken = localStorage.getItem("userToken");
    setToken(userToken);
  }, []);

  useEffect(() => {
    async function fetch() {
      await getJournals();
    }
    fetch();
  }, [getJournals]);

  useEffect(() => {
    if (journals?.length > 0) {
      setJournalsArray(journals);
    }
  }, [journals]);

  return (
    <>
      <Loader loading={isLoading} />
      <div className="w-full min-h-screen bg-[#f9fafb] p-10">
        <div className="w-full min-h-[70vh]">
          {createNewJournal ? (
            <NewJournalForm
              setCreateNewJournal={setCreateNewJournal}
              onAction={getJournals}
            />
          ) : (
            <>
              <div>
                <p className="text-[#374151] text-[24px] leading-[30px] font-bold font-[Montserrat]">
                  Journals
                </p>
                <p className="text-[#374151] text-[18px] leading-[32.4px] font-normal font-[Montserrat]">
                  Here’s a list of all journals created
                </p>
              </div>
              <div className="w-full min-h-[70vh] bg-white rounded-md mt-5">
                <JournalTable
                  columns={Journalscolumns}
                  data={journalsArray ?? []}
                  setCreateNewJournal={setCreateNewJournal}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default JournalView;
