"use client";
import CustomContainer from "@/components/CustomContainer";
import CustomPagination from "@/components/Shared/CustomPagination";
import NoDataMessage from "@/components/Shared/NoDataMessage";
import OurTechnologiesSkeletonLoading from "@/components/skeletonloading/OurTechnologiesSkeletonLoading";
import { useContextSelector } from "@/hooks/use-context-selector";
import Image from "next/image";
import { useEffect, useState } from "react";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_UPLOAD_URL;

const Technolody = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize] = useState(10);

  const fetchOurTechs = useContextSelector((context) => context.fetchOurTechs);
  const ourTechs = useContextSelector((context) => context.ourTechs);
  const isLoadingOurTechs = useContextSelector(
    (context) => context.isLoadingOurTechs
  );

  useEffect(() => {
    fetchOurTechs(currentPage, pageSize);
  }, [currentPage, fetchOurTechs, pageSize]);

  useEffect(() => {
    if (ourTechs && ourTechs.meta.pagination?.pageCount) {
      setTotalPages(ourTechs.meta.pagination.pageCount);
      setCurrentPage(ourTechs.meta.pagination.page);
    }
  }, [ourTechs]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section className="bg-white py-8 md:py-16">
      <CustomContainer>
        <div className="flex flex-col gap-6">
          <div className="place-content-center text-center p-9 space-y-4">
            <h2 className="font-bold text-3xl sm:text-4xl leading-[2.25rem]">
              Our Technologies
            </h2>
            <p className="font-normal text-sm leading-[1.5rem]">
              Lorem ipsum dolor sit amet consectetur. Elementum ullamcorper quis
              etiam euismod quisque <br className="hidden md:block" /> montes
              arcu risus. Magnis posuere tincidunt elit ultrices tortor. Sit
              semper cras sed duis tortor <br className="hidden md:block" />{" "}
              tempor amet gravida. Rhoncus quis nisl etiam tortor.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {isLoadingOurTechs && <OurTechnologiesSkeletonLoading />}
            {!isLoadingOurTechs &&
              (!ourTechs?.data || ourTechs?.data.length === 0) && (
                <NoDataMessage message="No Technologies avaliable" />
              )}
            {!isLoadingOurTechs && ourTechs?.data.length && (
              <div className="grid grid-cols-[100%] sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-self-center sm:justify-self-stretch">
                {ourTechs?.data.map((p, index: number) => (
                  <div
                    key={index}
                    className="relative h-[18.5rem] rounded-lg overflow-hidden"
                  >
                    <Image
                      src={`${baseURL}${p?.Image?.url}`}
                      alt={p?.Title}
                      width={328}
                      height={200}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute w-full bg-[#000000CC] bottom-0 flex flex-col  text-white px-2 py-2.5">
                      <h3 className="font-medium text-sm leading-[1.74625rem]">
                        {p?.Title}
                      </h3>
                      <p className="font-normal text-[0.6875rem] leading-[1.2125rem]">
                        {p?.Description.length > 110
                          ? `${p?.Description}...`
                          : p?.Description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {!isLoadingOurTechs && ourTechs?.data.length && (
              <CustomPagination
                currentPage={currentPage}
                handlePageChange={handlePageChange}
                totalPages={totalPages}
              />
            )}
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default Technolody;
