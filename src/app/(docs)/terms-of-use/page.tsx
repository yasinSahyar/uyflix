import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Tony Hawk's games have some gnarly soundtrack",
}

export default function TOUPage() {
  return (
    <section className="container flex max-w-screen-2xl flex-col gap-5 pb-16 pt-10">
      <h1 className="text-2xl font-bold sm:text-4xl">
        تونىي ھاۋكنىڭ ئامېرىكا ئىسراپچىلىقى
      </h1>
      <table>
        <thead className="text-base font-medium text-slate-900 dark:text-slate-50 sm:text-lg">
          <tr className="text-left">
            <th>سىزنىڭ مەقسەتلىرىڭىز:</th>
          </tr>
        </thead>
        <tbody className="text-base font-medium text-slate-700 dark:text-slate-400 sm:text-lg">
          <tr>
            <td>1. سپىن ترانسفېر قىلىپ نېزگراب فىرونتفلېپ</td>
          </tr>
          <tr>
            <td>2. تام فلېپ قىلىپ ناتاس سپىن</td>
          </tr>
          <tr>
            <td>3. سىتىكېر سلاپ قىلىپ مانۇئال قىلىپ تام پلانت</td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}