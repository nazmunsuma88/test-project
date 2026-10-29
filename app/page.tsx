import Image from "next/image";
import { faqs, SITE_NAME, SITE_URL } from "@/lib";

const services = [
  {
    title: "Technical SEO",
    body: "Crawl, indexation and Core Web Vitals fixes that remove the ceiling on your rankings.",
  },
  {
    title: "Content Strategy",
    body: "Keyword research and search-intent-led content that earns traffic and converts it.",
  },
  {
    title: "Link Building",
    body: "Editorial, relevance-first outreach that builds authority without risky shortcuts.",
  },
  {
    title: "Local SEO",
    body: "Google Business Profile and local landing pages that put you in the map pack.",
  },
];

const results = [
  { value: "+212%", label: "Organic traffic in 9 months" },
  { value: "3.4×", label: "Qualified leads from search" },
  { value: "47", label: "Keywords moved to page one" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/hero.svg`,
      description:
        "SEO agency offering technical SEO, content strategy, link building and local SEO.",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "hello@example.com",
        availableLanguage: "English",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      <header className="border-b border-slate-100">
        <nav
          aria-label="Main"
          className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6"
        >
          <a href="#" className="text-lg font-bold text-indigo-600">
            {SITE_NAME}
          </a>
          <ul className="hidden gap-6 text-sm font-medium text-slate-600 sm:flex">
            <li><a href="#services" className="hover:text-indigo-600">Services</a></li>
            <li><a href="#case-study" className="hover:text-indigo-600">Results</a></li>
            <li><a href="#faq" className="hover:text-indigo-600">FAQ</a></li>
          </ul>
          <a
            href="#contact"
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
          >
            Get audit
          </a>
        </nav>
      </header>

      <main>
        <section className="mx-auto grid max-w-6xl items-center gap-6 px-4 py-8 sm:px-6 md:grid-cols-2 md:gap-10 md:py-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
              SEO agency for growing businesses
            </p>
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
              SEO services that turn search into revenue
            </h1>
            <p className="mt-3 text-base text-slate-600">
              We combine technical expertise, content and ethical link building to grow
              organic traffic you can measure and leads you can bank.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="rounded-lg bg-indigo-600 px-6 py-3 text-center font-semibold text-white hover:bg-indigo-700"
              >
                Book a free SEO audit
              </a>
              <a
                href="#case-study"
                className="rounded-lg border border-slate-300 px-6 py-3 text-center font-semibold hover:bg-slate-50"
              >
                See our results
              </a>
            </div>
          </div>
          <Image
            src="/hero.svg"
            alt="Line chart showing organic search traffic rising steadily month over month"
            width={640}
            height={400}
            priority
            unoptimized
            className="hidden h-auto max-h-64 w-full rounded-3xl md:block"
          />
        </section>

        <section id="services" className="bg-slate-50 py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-3xl font-bold tracking-tight">Our SEO services</h2>
            <p className="mt-3 max-w-2xl text-slate-600">
              Everything you need to rank, from the code under the hood to the content on the page.
            </p>
            <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((s) => (
                <li key={s.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{s.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="case-study" className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 md:py-20">
          <Image
            src="/case-study.svg"
            alt="Bar chart of growing monthly organic leads for an e-commerce client"
            width={640}
            height={360}
            loading="lazy"
            unoptimized
            className="h-auto w-full rounded-3xl"
          />
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              Case study: doubling organic traffic for an online retailer
            </h2>
            <p className="mt-4 text-slate-600">
              A mid-sized e-commerce brand was stuck on page two. We fixed crawl issues,
              rebuilt category pages around search intent and earned relevant press links.
              <span className="block text-xs text-slate-400">Demo figures for illustration.</span>
            </p>
            <dl className="mt-8 grid grid-cols-3 gap-4">
              {results.map((r) => (
                <div key={r.label}>
                  <dt className="text-xs text-slate-500">{r.label}</dt>
                  <dd className="order-first text-2xl font-extrabold text-indigo-600 sm:text-3xl">
                    {r.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="faq" className="bg-slate-50 py-14 md:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <h2 className="text-3xl font-bold tracking-tight">Frequently asked questions</h2>
            <div className="mt-8 divide-y divide-slate-200 rounded-2xl bg-white ring-1 ring-slate-200">
              {faqs.map((f) => (
                <details key={f.q} className="group p-5">
                  <summary className="cursor-pointer list-none font-semibold marker:hidden">
                    {f.q}
                  </summary>
                  <p className="mt-3 text-slate-600">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-4 py-14 sm:px-6 md:py-20">
          <div className="mx-auto max-w-4xl rounded-3xl bg-indigo-600 px-6 py-12 text-center text-white sm:px-12">
            <h2 className="text-3xl font-bold tracking-tight">Ready to grow your organic traffic?</h2>
            <p className="mx-auto mt-4 max-w-xl text-indigo-100">
              Get a free, no-obligation SEO audit with a prioritised action plan within 5 business days.
            </p>
            <a
              href="mailto:hello@example.com?subject=Free%20SEO%20audit"
              className="mt-8 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-indigo-700 hover:bg-indigo-50"
            >
              Email us: hello@example.com
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-100 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} {SITE_NAME}. Demo site.
      </footer>
    </>
  );
}
