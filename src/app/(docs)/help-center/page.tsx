import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Help Center",
  description: "Help Center for THPS",
}

export default function HelpCenterPage() {
  return (
    <section className="container flex max-w-screen-2xl flex-col gap-5 pb-16 pt-10">
      <h1 className="text-2xl font-bold sm:text-4xl">
        تونىي ھاۋكنىڭ پرو سكېيتچىسى
      </h1>
      <table>
        <thead className="text-base font-medium text-slate-900 dark:text-slate-50 sm:text-lg">
          <tr className="text-left">
            <th>بۇ يەردە بىر قىسىم پايدىلىق تەكلىپلەر بار:</th>
          </tr>
        </thead>
        <tbody className="text-base font-medium text-slate-700 dark:text-slate-400 sm:text-lg">
          <tr>
            <td>
              1. كۆزىڭىزنى مۇكاپاتقا تىكىڭ. مەقسەت مۇمكىن بولغان ئەڭ يۇقىرى نومۇرغا ئېرىشىش. قانچە كۆپ نومۇر ئالسىڭىز، شۇنچە كۆپ پۇل تاپىسىز.
            </td>
          </tr>
          <tr>
            <td>
              2. قانچە كۆپ پۇل تاپسىڭىز، شۇنچە كۆپ ترىك ئۆگىنىسىز. قانچە كۆپ ترىك ئۆگەنسىڭىز، شۇنچە كۆپ نومۇر ئالالايسىز.
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}