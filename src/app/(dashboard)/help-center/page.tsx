import { Suspense } from "react"
import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { authOptions } from "@/server/auth"

import { getCurrentUser } from "@/lib/session"
import { Skeleton } from "@/components/ui/skeleton"

export const metadata: Metadata = {
  title: "Help Center",
  description: "Help Center for Netflx",
}

export default async function HelpCenterPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect(authOptions?.pages?.signIn ?? "/login")
  }

  return (
    <section className="container min-h-screen w-full max-w-3xl items-center justify-center pb-16 pt-10">
      <Suspense
        fallback={
          <div className="flex flex-col gap-5">
            <Skeleton className="h-8 w-32 bg-neutral-600" />
            <Skeleton className="h-8 w-40 bg-neutral-600" />
            <div className="flex flex-col gap-5">
              <Skeleton className="h-8 bg-neutral-600" />
              <Skeleton className="h-8 bg-neutral-600" />
              <Skeleton className="h-8 bg-neutral-600" />
            </div>
          </div>
        }
      >
        <div className="flex flex-col items-center justify-center gap-5">
          <h1 className="text-center text-3xl font-medium sm:text-4xl">
            ياردەم مەركىزى
          </h1>
          <p className="text-center text-xl font-medium sm:text-2xl">
            ھېلفلىپ قىلىش ئۇسۇلى
          </p>
          <ul className="list-inside list-disc text-xl">
            <li>سكېيت بوردىڭىزنى ئىتتىرىڭ</li>
            <li>
              ئالدى پۇتىڭىزنى بولتىلارنىڭ ئاستىغا قويۇڭ، بارماقلىرىڭىز تاختىنىڭ چېتىدىن چىقىپ تۇرسۇن، پۇتىڭىزنىڭ توپى تاختىنىڭ گىرۋىكىدە بولسۇن
            </li>
            <li>
              كەينى پۇتىڭىزنى تاختىنىڭ كەينى تەرىپىگە قويۇڭ، پۇتىڭىزنىڭ توپى تاختىنىڭ گىرۋىكىدە بولسۇن
            </li>
            <li>
              تۆۋەن تۇرۇش ھالىتىنى قوبۇل قىلىڭ، ئوللىي قىلىڭ ۋە كەينىگە قاراپ مايىل بولۇڭ
            </li>
            <li>
              سكېيت بوردى ئاسمانغا كۆتۈرۈلۈشكە باشلىغاندا، ئالدى پۇتىڭىزنى تاختىنىڭ ئۈستىگە سۈرۈڭ
            </li>
            <li>
              ئالدى پۇتىڭىز تاختىنىڭ گىرۋىكىدىن چىقىشقا باشلىغاندا، ئۇنى چېقىڭ ياكى پاشنىڭىزنى بۇرۇننىڭ گىرۋىكىگە بېسىڭ
            </li>
            <li>تاختىنىڭ ئۆز ئوقى ئەتراپىدا ئايلىنىۋاتقانلىقىنى كۆرۈڭ</li>
            <li>
              ئايلىنىش تاماملانغاندا، تاختىنى كەينى پۇتىڭىز بىلەن تۇتۇڭ ۋە دەرھال ئالدى پۇتىڭىزنى قويۇڭ
            </li>
            <li>پۇتىڭىزنى تۆۋەن چۈشۈرۈپ تاختىنى يەرگە پاراللېل ھالەتكە كەلتۈرۈڭ</li>
            <li>تىزىڭىزنى بۈكۈپ سكېيت بوردىغا چۈشۈڭ ۋە يۈرۈپ كېتىڭ</li>
          </ul>
        </div>
      </Suspense>
    </section>
  )
}