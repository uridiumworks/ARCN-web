"use client";
import React, { useState, useEffect, useCallback, useRef, Fragment } from "react";
import { useRouter } from "next/navigation";
import moment from "moment";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const SessionTimeout: React.FC = () => {
  console.log("SessionTimeout component mounted");

  const [events] = useState([
    "click",
    "load",
    "scroll",
    "mousemove",
    "keypress",
  ]);
  const [second, setSecond] = useState(0);
  const [showDialog, setShowDialog] = useState(false);
  const router = useRouter();

  const token = typeof window !== "undefined" ? localStorage.getItem("userToken") : null;
  const isAuthenticated = !!token;

  const warningInactiveInterval = useRef<ReturnType<typeof setInterval>>();
  const startTimerInterval = useRef<ReturnType<typeof setTimeout>>();
  const storedTimeStamp = useRef<string | null>(null);

  const timeChecker = useCallback(() => {
    console.log("Starting timer check");
    startTimerInterval.current = setTimeout(() => {
      storedTimeStamp.current = sessionStorage.getItem("lastTimeStamp");
      if (!storedTimeStamp.current) {
        console.error("No timestamp found in sessionStorage");
      }
      console.log("Checking for inactivity warning with timestamp:", storedTimeStamp.current); // Should log
      warningInactive(storedTimeStamp.current);
    }, 180000); // 3 minutes
  }, []);

  const warningInactive = (timeString: string | null) => {
    console.log("Warning Inactive Function Called"); // Should log
    clearTimeout(startTimerInterval.current);

    warningInactiveInterval.current = setInterval(() => {
      const maxTime = 3; // minutes before logout
      const popTime = 2; // minutes before showing warning

      if (!timeString) {
        console.error("Timestamp is null or undefined");
        return;
      }

      const diff = moment.duration(moment().diff(moment(timeString)));
      const minPast = diff.minutes();
      const leftSecond = 60 - diff.seconds();

      console.log("Minutes past:", minPast, "Seconds left:", leftSecond);

      if (minPast === popTime) {
        setSecond(leftSecond);
        setShowDialog(true);
        console.log("Showing dialog in", leftSecond, "seconds");
      }

      if (minPast >= maxTime) {
        clearInterval(warningInactiveInterval.current);
        sessionStorage.removeItem("lastTimeStamp");
        localStorage.removeItem("userToken");
        console.log("Logging out and redirecting to login page");
        router.replace("/signin"); // Update the path if necessary
        window.location.reload();
      }
    }, 1000); // Check every second
  };

  const resetTimer = useCallback(() => {
    console.log("Reset Timer Called"); // Should log
    clearTimeout(startTimerInterval.current);
    clearInterval(warningInactiveInterval.current);

    if (isAuthenticated) {
      const timeStamp = moment().toString();
      sessionStorage.setItem("lastTimeStamp", timeStamp);
      storedTimeStamp.current = timeStamp;
      console.log("Resetting timer with timestamp:", timeStamp); // Should log
    } else {
      clearInterval(warningInactiveInterval.current);
      sessionStorage.removeItem("lastTimeStamp");
    }
    timeChecker();
  }, [isAuthenticated, timeChecker]);

  useEffect(() => {
    console.log("Adding event listeners");
    events.forEach((event) => {
      window.addEventListener(event, resetTimer);
    });
    
    // Simulate an event to test
    const simulateEvent = () => {
      console.log("Simulating event");
      window.dispatchEvent(new Event("mousemove")); // Simulate a mousemove event
    };
    simulateEvent();

    timeChecker();
    return () => {
      clearTimeout(startTimerInterval.current);
      clearInterval(warningInactiveInterval.current);
      console.log("Removing event listeners");
      events.forEach((event) => {
        window.removeEventListener(event, resetTimer);
      });
    };
  }, [resetTimer, events, timeChecker]);

  const handleHideDialog = () => {
    setShowDialog(false);
    clearInterval(warningInactiveInterval.current);
    resetTimer();
  };

  useEffect(() => {
    if (showDialog) {
      console.log("Dialog should be visible"); // Should log when dialog is visible
    }
  }, [showDialog]);

  return (
    <Fragment>
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        {/* <DialogContent className="bg-white">
          <DialogHeader>
            <DialogTitle>Session Timeout</DialogTitle>
            <DialogDescription>
              You will be logged out soon. Do you want to continue browsing?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <button
              onClick={handleHideDialog}
              style={{
                background: "#304daf",
                padding: "10px 20px",
                color: "white",
                cursor: "pointer",
                marginTop: "10px",
              }}
            >
              Continue browsing
            </button>
          </DialogFooter>
        </DialogContent> */}
      </Dialog>
    </Fragment>
  );
};

export default SessionTimeout;
