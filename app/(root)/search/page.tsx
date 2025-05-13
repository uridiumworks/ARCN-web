import CustomContainer from "@/components/CustomContainer"
import SearchHeader from "@/components/Search/search-header"
import { SearchResults } from "@/components/Search/search-results"
import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs"

export default function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string }
}) {
  const query = searchParams.q || ""

  return (
    <section>
        <SearchHeader />
        <CustomContainer>
         <div className="container py-10">
      <h1 className="text-3xl font-bold mb-2">Search Results</h1>
      {query ? (
        <p className="text-muted-foreground mb-6">
          Showing results for: <span className="font-medium">{query}</span>
        </p>
      ) : (
        <p className="text-muted-foreground mb-6">Please enter a search term</p>
      )}

      {query && (
         <div className="mb-6">
            <SearchResults query={query} />
          </div>
      )}
    </div>
    </CustomContainer>
    </section>
   
  )
}
