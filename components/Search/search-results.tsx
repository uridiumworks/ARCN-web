"use client"

import { useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, Download, FileText, Lightbulb, Newspaper, PenTool, Presentation } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { useState } from "react"
import { useContextSelector } from "@/hooks/use-context-selector"
// Assuming you have a context file, import it here
// import { YourContext } from "@/context/your-context"

// These interfaces should match your context types


function SearchSkeleton() {
  return (
    <div className="space-y-6">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="border rounded-lg p-6 space-y-3">
          <div className="flex justify-between">
            <div className="space-y-2 w-full">
              <div className="flex items-center">
                <Skeleton className="h-5 w-24 mr-2" />
              </div>
              <Skeleton className="h-6 w-3/4" />
            </div>
            <Skeleton className="h-10 w-10 rounded-full" />
          </div>
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
          <div className="flex justify-end pt-2">
            <Skeleton className="h-8 w-24 rounded-md" />
          </div>
        </div>
      ))}
      <div className="flex justify-center mt-6">
        <Skeleton className="h-10 w-64" />
      </div>
    </div>
  )
}

function Skeleton({ className }: { className: string }) {
  return <div className={`animate-pulse bg-gray-200 rounded ${className}`}></div>
}

export function SearchResults({ query }: { query: string }) {
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 10

  // Use the context selectors provided
  // Replace YourContext with your actual context
  const searchWebsite = useContextSelector(
    // YourContext,
    (context) => context.searchWebsite,
  )

  const isLoading = useContextSelector(
    // YourContext,
    (context) => context.isLoadingCoordinationReports,
  )

  const searchData = useContextSelector(
    // YourContext,
    (context) => context.searchData,
  )

  // Fetch search results when query or page changes
  useEffect(() => {
    if (query) {
      searchWebsite(query, currentPage, pageSize)
    }
  }, [query, currentPage, pageSize, searchWebsite])

  if (isLoading) {
    return <SearchSkeleton />
  }

  // Check if searchData exists and has results
  if (!searchData || !searchData.data || searchData.data.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-muted-foreground">No results found. Try a different search term.</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <p className="text-sm text-muted-foreground">
        Showing {searchData.data.length} of {searchData.meta.total} results
      </p>

      {searchData.data.map((result) => (
        <Card key={result.id} className="overflow-hidden">
          <div className="p-6">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <Badge variant="outline" className="mr-2">
                    {formatContentType(result.type)}
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold">{result.title}</h3>
              </div>
              <div className="ml-4 flex-shrink-0">{getTypeIcon(result.type)}</div>
            </div>

            {result.description ? (
              <p className="text-muted-foreground mb-4 line-clamp-3">{result.description}</p>
            ) : (
              <p className="text-muted-foreground italic mb-4">No description available</p>
            )}

            <div className="flex justify-end mt-2">
              {processButton(result.type, result.id)}
            </div>
          </div>
        </Card>
      ))}

      {searchData.meta.pageCount > 1 && (
        <Pagination className="mt-8">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  if (searchData.meta.page > 1) {
                    setCurrentPage(searchData.meta.page - 1)
                  }
                }}
                className={searchData.meta.page === 1 ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>

            {Array.from({ length: searchData.meta.pageCount }).map((_, i) => {
              const pageNumber = i + 1
              // Only show a limited number of page links
              if (
                pageNumber === 1 ||
                pageNumber === searchData.meta.pageCount ||
                (pageNumber >= searchData.meta.page - 1 && pageNumber <= searchData.meta.page + 1)
              ) {
                return (
                  <PaginationItem key={i}>
                    <PaginationLink
                      href="#"
                      onClick={(e) => {
                        e.preventDefault()
                        setCurrentPage(pageNumber)
                      }}
                      isActive={searchData.meta.page === pageNumber}
                    >
                      {pageNumber}
                    </PaginationLink>
                  </PaginationItem>
                )
              }

              // Add ellipsis for page gaps
              if (
                (pageNumber === searchData.meta.page - 2 && pageNumber > 2) ||
                (pageNumber === searchData.meta.page + 2 && pageNumber < searchData.meta.pageCount - 1)
              ) {
                return <PaginationItem key={i}>...</PaginationItem>
              }

              return null
            })}

            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  if (searchData.meta.page < searchData.meta.pageCount) {
                    setCurrentPage(searchData.meta.page + 1)
                  }
                }}
                className={searchData.meta.page === searchData.meta.pageCount ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  )
}

function getTypeIcon(type: string) {
  switch (type.toLowerCase()) {
    case "articles":
    case "article":
      return <Newspaper className="h-5 w-5 text-blue-500" />
    case "downloads":
    case "download":
      return <Download className="h-5 w-5 text-green-500" />
    case "events":
    case "event":
      return <CalendarIcon className="h-5 w-5 text-purple-500" />
    case "projects":
    case "project":
      return <PenTool className="h-5 w-5 text-orange-500" />
    case "reports":
    case "report":
      return <FileText className="h-5 w-5 text-red-500" />
    case "technologies":
    case "technology":
      return <Lightbulb className="h-5 w-5 text-yellow-500" />
    default:
      return <Presentation className="h-5 w-5" />
  }
}

function formatContentType(type: string): string {
  // Just capitalize the first letter without changing the word
  return type.charAt(0).toUpperCase() + type.slice(1)
}

function processButton(type: string, documentId: string) {
  switch (type.toLowerCase()) {
    case "articles":
    case "article":
      return null;
    case "downloads":
    case "download":
      return <Button asChild variant="outline" size="sm">
                <Link href={`/downloads/item/${documentId}`}>View Details</Link>
              </Button>
    case "events":
    case "event":
      return null
    case "projects":
    case "project":
      return <Button asChild variant="outline" size="sm">
                <Link href={`/programs-and-projects/project/${documentId}`}>View Details</Link>
              </Button>
    case "reports":
    case "report":
      return null
    case "technologies":
    case "technology":
      return null;
    default:
      return null
  }
}
