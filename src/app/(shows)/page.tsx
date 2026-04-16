import type { CategorizedShows } from "@/types"

import { getShows } from "@/lib/fetchers"
import { getCurrentUser } from "@/lib/session"
import Hero from "@/components/hero"
import ShowsContainer from "@/components/shows-container"

export default async function Home() {
  const user = await getCurrentUser()

  const allShows = await getShows("movie")

  const allShowsByCategory: CategorizedShows[] = [
    {
      title: "ھازىر ئالقىشلىنىۋاتقان",
      shows: allShows.trending,
    },
    {
      title: "ئەڭ يۇقىرى باھالانغان",
      shows: allShows.topRated,
    },
    {
      title: "ھەرىكەتلىك تىرللېرلار",
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
    <section>
      <div className="pb-16 pt-10">
        <Hero shows={allShows.netflix ?? []} />
        <ShowsContainer user={user} shows={allShowsByCategory} />
      </div>
    </section>
  )
}