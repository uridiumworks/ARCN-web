import React from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { newsletterData } from "../_components/data";
import { Button } from "@/components/ui/button";
import CustomContainer from "@/components/CustomContainer";

type NewsletterProps = {
  id: number;
  imgUrl: string;
  title: string;
  desc: string;
};

const Newsletter = () => {
  return (
    <section className="py-12 md:py-20">
      <CustomContainer>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <h3 className="text-3xl sm:text-4xl leading-[2.25rem] font-bold text-[#1B222B]">
                Newsletter
              </h3>
              <p className="text-sm leading-[1.5rem] text-gray pt-2">
              Stay informed with ARCN Quarterly! Get policy updates, breakthrough research highlights, and 
              <br/>success stories from Nigeria&apos;s agricultural innovation ecosystem. Subscribe for insights in English, 
              <br/>French, and Arabic.
              </p>
            </div>

            <Input
              className="outline:none border w-full md:w-[400px] mt-5"
              type="search"
              placeholder="Search for journals"
            />
          </div>

          <div className=" grid grid-cols-1 md:grid-cols-4 gap-5">
            {newsletterData.map((newsletter: NewsletterProps) => (
              <div
                key={newsletter.id}
                className="border-2 rounded-lg h-[100%] space-y-4 md:space-y-0 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <Image
                    src={newsletter.imgUrl}
                    alt="image"
                    width={384}
                    height={200}
                    className="rounded-t-lg"
                  />
                  <h1 className="text-base font-[700] text-center font-montserrat">
                    {newsletter.title}
                  </h1>
                  <p className="text-xs text-[##858C95e] text-center ">
                    {newsletter.desc}
                  </p>
                </div>

                <div className=" w-full rounded-lg  py-3 px-2 ">
                  <Link
                    href={
                      "/publications/newsletters/arcn-meets-research-institute"
                    }
                  >
                    <Button
                      variant="ghost"
                      className="text-[#0C513F] bg-[#0C513F0D] w-full "
                    >
                      READ MORE
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default Newsletter;
