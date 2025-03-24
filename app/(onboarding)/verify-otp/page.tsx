"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
 
export default function Verifyotp() {
  const [value, setValue] = useState("");
  const [timer, setTimer] = useState(0);
 
  useEffect(() => {
    let countdown: NodeJS.Timeout;
    if (timer > 0) {
      countdown = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }
    return () => clearInterval(countdown);
  }, [timer]);
 
  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return minutes > 0
      ? `${minutes.toString().padStart(2, "0")}:${remainingSeconds
          .toString()
          .padStart(2, "0")}`
      : `${remainingSeconds.toString().padStart(2, "0")}`;
  };
 
  return (
    <div className="flex flex-col gap-10 relative items-center justify-center h-screen sm:p-8 max-sm:p-4">
      <div className="flex max-sm:flex-col items-center gap-10">
        <Link href={`/login`}>
            <Button type="submit" className="w-fit text-sm flex flex-row-reverse gap-2 text-black bg-[#F3F4F6]  items-center">
                <span>Back to login</span>
                <span>
                <ArrowLeft size={20} />
                </span>
            </Button>
        </Link>
      </div>
      
      <div className="flex flex-col gap-4 p-5">
        <form className="flex flex-col gap-8">
          <div className="text-center flex flex-col gap-2">
            <h2 className="text-[#1F2937] font-medium text-3xl">Verify Otp</h2>
            <p className="text-[#4B5563] text-base font-normal">
              Kindly enter the code sent to your mail
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-center gap-2">
              <InputOTP
                maxLength={6}
                value={value}
                // onChange={(value) => setValue(value)}
                // disabled={resendingOtp || verifyingOtp}
              >
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>
 
            <div className="text-center mt-4">
              <p className="text-[#4B5563] font-medium font-Nova text-sm">
                Didn’t Receive Code?
                {timer === 0 ? (
                  <button
                    type="button"
                    className="text-[#00A0DD] ml-2 font-Nova text-sm underline"
                    onClick={async () => {
                      setTimer(30);
                      setValue("");
                    //   await resendOtp();
                    }}
                    // disabled={resendingOtp || verifyingOtp}
                  >
                    {/* {resendLoading ? "Resending":"Resend code"} */}
                    Resend code
                  </button>
                ) : (
                  <p className="text-[#00A0DD] font-Nova text-sm ml-2">
                    {`Resend code in 00:${formatTime(timer)}`}
                  </p>
                )}
              </p>
            </div>

            <Button type="submit" className="w-full text-base font-normal bg-[#30A85F] hover:text-black">
                Send
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
 
 