"use client";
import React, { useEffect, useState } from "react";
import {
  ContentManagementBlogscolumns,
  NewsLetterscolumns,
} from "../blogs/_components/table/column";
import NewsLetterForm from "./_components/NewsLetterForm";
import NewsLettersTable from "./_components/table/NewsLettersTable";
import { useNewsLettersData } from "@/hooks/NewsLetters.hooks";
import Loader from "@/components/Shared/Loader";
import { useNewsletter } from "@/contexts/Newsletter.context";

const NewsletterView = () => {
  const [createNewNewsletter, setCreateNewNewsletter] =
    useState<boolean>(false);
  const [newsLettersArray, setNewsLettersArray] = useState<any[]>([]);
  // const [triggerRefetch, setTriggerRefetch] = useState<boolean>(false);
  const [token, setToken] = useState<string | null>(null);
  // const { loading, newsLetters, error,fetchDashboard } = useNewsLettersData(
  //   token
  // );
  const {isLoading,getNewsletters,newsLetters} = useNewsletter()

  useEffect(() => {
    const userToken = localStorage.getItem("userToken");
    setToken(userToken);
  }, []);

  useEffect(() => {
    async function fetch(){
      await getNewsletters()
    }
    fetch()
  },[getNewsletters])

  useEffect(() => {
    if (newsLetters?.length > 0) {
      setNewsLettersArray(newsLetters);
    }
  }, [newsLetters]);
  // if (loading && newsLetters?.length < 1) return <p>Loading....</p>;

  return (
    <>
      <Loader loading={isLoading} />
      <div className="w-full min-h-screen bg-[#f9fafb] p-10">
        <div className="w-full min-h-[70vh]">
          {createNewNewsletter ? (
            <NewsLetterForm setCreateNewNewsletter={setCreateNewNewsletter} onAction={getNewsletters}  />
          ) : (
            <>
              <div>
                <p className="text-[#374151] text-[24px] leading-[30px] font-bold font-[Montserrat]">
                  News letters
                </p>
                <p className="text-[#374151] text-[18px] leading-[32.4px] font-normal font-[Montserrat]">
                  Here’s a list of all news letters created
                </p>
              </div>
              <div className="w-full min-h-[70vh] bg-white rounded-md mt-5">
                <NewsLettersTable
                  columns={NewsLetterscolumns}
                  data={newsLettersArray ?? []}
                  setCreateNewNewsletter={setCreateNewNewsletter}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default NewsletterView;
