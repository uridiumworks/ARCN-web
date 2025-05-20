"use client"

import CustomContainer from "@/components/CustomContainer"
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import { useContextSelector } from "@/hooks/use-context-selector"
import { HomeIcon as House, Calendar, Download, FileIcon, Users } from "lucide-react"
import { useParams } from "next/navigation"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Separator } from "@radix-ui/react-select"
import Contents from "../../_components/Content"

const DownloadItem = () => {
  const params = useParams()
  const { id } = params

  const fetchDownload = useContextSelector((context) => context.fetchDownloadDetails)
  const isLoading = useContextSelector((context) => context.isLoadingReports)
  const download = useContextSelector((context) => context.downloadDetails)

  // Sample author - in a real application, this would come from the download object
  const author = download?.author || "P. Dayo, O.O. Jayeoba, Y. Ndirpaya, G. Malomo, E. Ekong"

  useEffect(() => {
    fetchDownload(id as string)
  }, [fetchDownload, id])

  // Format date function
  const formatDate = (dateString: string) => {
    if (!dateString) return "N/A"
    const date = new Date(dateString)
    return date.getFullYear()
  }

  return (
    <section>
      {/* Hero Section */}
      <main className="bg-group bg-cover place-content-center bg-fixed bg-center bg-no-repeat relative lg:h-[19rem] bg-black opacity-100 font-montserrat px-8">
        <div className="absolute inset-0 lg:h-[19rem] bg-[#000] bg-opacity-[.75]"></div>
        <div className="text-white relative z-10 text-left w-full max-w-[1100px] mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-10 lg:py-16 space-y-2 lg:space-y-4 flex flex-col justify-center h-full">
          <h1 className="font-bold font-Montserrat text-3xl md:text-4xl">{download?.title || "Document Details"}</h1>
          {download?.download_category?.name && (
            <Badge className="bg-[#30A85F] hover:bg-[#30A85F]/90 self-start mt-2 px-3 py-1 text-sm">
              {download.download_category.name}
            </Badge>
          )}
        </div>
      </main>

      <CustomContainer>
        {/* Breadcrumb Navigation */}
        <Breadcrumb className="mt-5">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink className="flex items-center gap-3">
                <House className="w-3.5 h-3.5" />
                <Link href="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="hover:text-[#30A85F] font-medium">
                <Link href="/downloads">Downloads</Link>
              </BreadcrumbPage>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            {!isLoading && download?.download_category?.name && (
              <BreadcrumbItem>
                <BreadcrumbPage className="text-[#30A85F] font-medium">
                <Link href={`/downloads/${download.download_category.documentId}`}>{download.download_category.name} </Link>
                </BreadcrumbPage>
              </BreadcrumbItem>
            )}
          </BreadcrumbList>
        </Breadcrumb>

        {/* Content Section */}
        {isLoading ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#30A85F]"></div>
          </div>
        ) : download ? (
          <div className="mt-8 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h1 className="text-2xl md:text-2xl font-bold text-gray-900">{download.title}</h1>

                    {/* Author information */}
                    <div className="flex items-center text-sm text-gray-700">
                      <Users className="w-4 h-4 mr-2 text-[#30A85F]" />
                      <span className="italic">By: {author}</span>
                    </div>
                  </div>

                  <div className="flex items-center text-sm text-gray-600 bg-gray-50 p-3 rounded-md">
                    <Calendar className="w-4 h-4 mr-2 text-[#30A85F]" />
                    <span>Published: {formatDate(download.datePublished)}</span>
                  </div>

                  <Separator className="my-6" />

                  <Contents {...download} />
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-8">
                  <Card className="border-[#30A85F]/20 overflow-hidden">
                    <div className="bg-[#30A85F]/5 p-6 border-b border-[#30A85F]/10">
                      <h3 className="font-semibold text-lg">Document Information</h3>
                      <p className="text-sm text-gray-600 mt-1">Download this document for offline access</p>
                    </div>

                    <div className="p-6 space-y-4">
                      {/* Author information in sidebar */}
                      <div className="flex items-start justify-between text-xs">
                        <span className="text-gray-600">Author(s):</span>
                        <span className="font-medium text-xs text-right max-w-[65%]">{author}</span>
                      </div>

                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-600">Category:</span>
                        <span className="font-medium text-xs">{download?.download_category?.name || "N/A"}</span>
                      </div>

                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-600">Published:</span>
                        <span className="font-medium">{formatDate(download.datePublished)}</span>
                      </div>

                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-600">File Type:</span>
                        <span className="font-medium">PDF</span>
                      </div>
                    </div>

                    <CardFooter className="flex-col items-stretch gap-4 p-6 pt-2 border-t border-[#30A85F]/10">
                      <a
                        href={download?.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-12 px-8 w-full bg-[#30A85F] hover:bg-[#30A85F]/90 py-6"
                      >
                        <Download className="w-5 h-5 mr-2" />
                        Download Document
                      </a>

                      <div className="text-center text-xs text-gray-500 mt-2">
                        By downloading, you agree to our terms of use
                      </div>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center min-h-[400px] text-center">
            <FileIcon className="w-16 h-16 text-gray-300 mb-4" />
            <p className="text-gray-500 text-lg">Document not found</p>
            <p className="text-gray-400 mt-2">The requested document may have been moved or deleted</p>
            <Button variant="outline" className="mt-6" asChild>
              <Link href="/downloads">Browse All Downloads</Link>
            </Button>
          </div>
        )}
      </CustomContainer>
    </section>
  )
}

export default DownloadItem
