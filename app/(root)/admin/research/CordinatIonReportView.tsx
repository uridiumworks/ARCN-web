import React, { useEffect, useState } from "react";
import CordinationReportTable from "./_components/table/CordinationReportTable";
import { CordinationReportTablecolumns } from "./_components/table/column";
import ReportForm from "./_components/forms/CordinationReportForm";
import { useReportsData } from "@/hooks/Reports.hooks";
import CordinationReportForm from "./_components/forms/CordinationReportForm";
import { useCordinationReportsData } from "@/hooks/CordinationReport.hooks";
import Loader from "@/components/Shared/Loader";

const CordinationReportView = () => {
  const [createReport, setCreateReport] = useState<boolean>(false);
  const [token, setToken] = useState<string | null>(null);
  const [reportArray, setReportArray] = useState<any[]>([]);
  const [triggerRefetch, setTriggerRefetch] = useState<boolean>(false);
  const { loading, cordinationReport, error } = useCordinationReportsData(
    token,
    triggerRefetch
  );

  useEffect(() => {
    const userToken = localStorage.getItem("userToken");
    setToken(userToken);
  }, []);

  useEffect(() => {
    if (cordinationReport?.length > 0) {
      setReportArray(cordinationReport);
    }
  }, [cordinationReport]);
  // if (loading && cordinationReport?.length < 1) return <p>Loading....</p>

  return (
    <>
      <Loader loading={loading} />
      <div className="w-full min-h-screen bg-[#f9fafb] p-10">
        <div className="w-full min-h-[70vh]">
          {createReport ? (
            <CordinationReportForm setCreateReport={setCreateReport} />
          ) : (
            <>
              <div>
                <p className="text-[#374151] text-[24px] leading-[30px] font-bold font-[Montserrat]">
                  Cordination Report
                </p>
                <p className="text-[#374151] text-[18px] leading-[32.4px] font-normal font-[Montserrat]">
                  Here’s a list of all reports created
                </p>
              </div>
              <div className="w-full min-h-[70vh] bg-white rounded-md mt-5">
                <CordinationReportTable
                  columns={CordinationReportTablecolumns}
                  data={reportArray ?? []}
                  setCreateReport={setCreateReport}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CordinationReportView;
