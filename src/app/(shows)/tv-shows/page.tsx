import type { Metadata } from "next"
import type { CategorizedShows } from "@/types"

import { getShows } from "@/lib/fetchers"
import ShowsContainer from "@/components/shows-container"

export const metadata: Metadata = {
  title: "TV Shows",
  description: "All TV shows grouped by genre",
}

export default async function TVShowsPage() {
  const allShows = await getShows("tv")

  const allShowsByCategory: CategorizedShows[] = [
    {
      title: "ھازىر داڭلىق",
      shows: allShows.trending,
    },
    {
      title: "ئەڭ يۇقىرى باھالانغان",
      shows: allShows.topRated,
    },
    {
      title: "ھەرىكەتلىك تىرىللېرلار",
      shows: allShows.action,
    },
    {
      title: "كومېدىيەلىك فىلىملەر",
      shows: allShows.comedy,
    },
    {
      title: "قورقۇنچلۇق فىلىملەر",
      shows: allShows.horror,
    },
    {
      title: "مۇھەببەت فىلىملىرى",
      shows: allShows.romance,
    },
    {
      title: "ھۆججەتلىك فىلىملەر",
      shows: allShows.docs,
    },
  ]

  return (
    <section className="pb-16 pt-10">
      <ShowsContainer shows={allShowsByCategory} />
    </section>
  )
}