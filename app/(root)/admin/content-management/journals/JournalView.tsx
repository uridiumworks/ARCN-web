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

const JournalView = () => {
  const [createNewJournal, setCreateNewJournal] = useState<boolean>(false);
  const [journalsArray, setJournalsArray] = useState<any[]>([]);
  const [triggerRefetch, setTriggerRefetch] = useState<boolean>(false);
  const [token, setToken] = useState<string | null>(null);
  const { loading, journals, error } = useJournalsData(token, triggerRefetch);

  useEffect(() => {
    const userToken = localStorage.getItem("userToken");
    setToken(userToken);
  }, []);

  useEffect(() => {
    setTriggerRefetch(!triggerRefetch);
  }, []);

  useEffect(() => {
    if (journals?.length > 0) {
      setJournalsArray(journals);
    }
  }, [journals]);
  // if (loading && journals?.length < 1) return <p>Loading....</p>;

  return (
    <>
      <Loader loading={loading} />
      <div className="w-full min-h-screen bg-[#f9fafb] p-10">
        <div className="w-full min-h-[70vh]">
          {createNewJournal ? (
            <NewJournalForm setCreateNewJournal={setCreateNewJournal} />
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
