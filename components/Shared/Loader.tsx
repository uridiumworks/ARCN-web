import { cn } from "@/lib/utils";
import React from "react";
import SyncLoader from "react-spinners/SyncLoader";
type Props = {
  loading: boolean;
};

const Loader = ({ loading = false, ...props }: Props) => {
  return (
    <>
      <section
        className={cn(
          "flex bg-black/40 fixed top-0 left-0 bottom-0 right-0 z-50 backdrop-filter backdrop-blur-sm",
          {
            hidden: !loading,
          }
        )}
      >
        <div className="m-auto ">
          <SyncLoader loading={true} speedMultiplier={1} color="#F1F3F9" />
          {/* <SyncLoader loading={loading} speedMultiplier={1} color="#36d7b7" /> */}
        </div>
      </section>
    </>
  );
};

export default Loader;
