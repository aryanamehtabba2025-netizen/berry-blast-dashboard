import { createFileRoute } from "@tanstack/react-router";
import heroImage from "../assets/berry-blast-bottle.webp";
import heroImage480 from "../assets/bb-480.webp";
import heroImage720 from "../assets/bb-720.webp";
import heroImage960 from "../assets/bb-960.webp";

const heroSrcSet = `${heroImage480} 480w, ${heroImage720} 720w, ${heroImage960} 960w, ${heroImage} 1280w`;
const heroSizes = "(max-width: 640px) 88vw, (max-width: 1023px) 70vw, 44vw";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Berry Blast (100ml) | Sarkar Parfum" },
      {
        name: "description",
        content:
          "Berry Blast by Sarkar — deep, dark, seductive. Blueberry, raspberry and mulberry over amber and musk. Unisex parfum, 100ml, ₹2,499.",
      },
      { property: "og:title", content: "Berry Blast (100ml) | Sarkar Parfum" },
      {
        property: "og:description",
        content:
          "Berry Blast by Sarkar — deep, dark, seductive. Blueberry, raspberry and mulberry over amber and musk. Unisex parfum, 100ml, ₹2,499.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Berry Blast (100ml) | Sarkar Parfum" },
      {
        name: "twitter:description",
        content: "Berry Blast by Sarkar — deep, dark, seductive. Blueberry, raspberry and mulberry over amber and musk. Unisex parfum, 100ml, ₹2,499.",
      },
    ],
    links: [
      {
        rel: "preload",
        as: "image",
        href: heroImage480,
        imagesrcset: heroSrcSet,
        imagesizes: heroSizes,
        fetchpriority: "high",
      },
    ],
  }),
});

const noteLayers = [
  {
    label: "Top Notes",
    value: "Blueberry, Raspberry Pulp, Pink Pepper",
    copy: "Crushed berries burst open cold and juicy — tart, bright, impossible to ignore.",
    color: "bg-blueberry",
  },
  {
    label: "Heart Notes",
    value: "Mulberry, Dark Plum, Violet",
    copy: "The fruit turns velvet. Deep, stained and quietly intoxicating.",
    color: "bg-raspberry",
  },
  {
    label: "Base Notes",
    value: "Amber, Vanilla, Musk",
    copy: "A warm, smouldering trail that stays long after you've left the room.",
    color: "bg-mulberry",
  },
];

const meta = [
  { label: "Concentration", value: "25% Parfum" },
  { label: "Longevity", value: "Up to 10 hours" },
  { label: "Size", value: "100 ml" },
];

const faqs = [
  {
    q: "How long does Berry Blast last?",
    a: "Berry Blast is a parfum at 25% oil concentration, so it stays close and lasts long — up to 10 hours depending on your skin, the weather and how much you apply.",
  },
  {
    q: "What does Berry Blast smell like?",
    a: "Dark and fruity. It opens with cold blueberry and raspberry pulp, deepens into mulberry and plum, then settles into amber, vanilla and musk. The kind of scent people lean in to notice.",
  },
  {
    q: "Is Berry Blast unisex?",
    a: "Yes. Like every Sarkar parfum, Berry Blast is built to be worn by anyone. Unisex in spirit. Absolute in command.",
  },
];

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <div
        aria-hidden="true"
        className="page-background pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at 50% 25%, color-mix(in oklab, oklch(0.25 0.08 310) 22%, transparent) 0%, transparent 62%), linear-gradient(to bottom, oklch(0.06 0.005 270), oklch(0.1 0.01 270))",
        }}
      />

      {/* Announcement bar */}
      <div className="border-b border-border/40 bg-ink px-4 py-2 text-center text-[9px] font-semibold uppercase leading-relaxed tracking-[0.18em] text-muted-foreground sm:text-[11px] sm:tracking-[0.28em]">
        Claim two 7ml freebies with every order
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
          <span className="text-base font-semibold tracking-[0.24em] text-foreground sm:text-xl sm:tracking-[0.3em]">SARKAR</span>
          <div className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground md:flex">
            <a href="#parfum" className="transition-colors hover:text-foreground">
              Parfum
            </a>
            <a href="#notes" className="transition-colors hover:text-foreground">
              Notes
            </a>
            <a href="#story" className="transition-colors hover:text-foreground">
              Story
            </a>
            <a href="#faqs" className="transition-colors hover:text-foreground">
              FAQs
            </a>
          </div>
          <a href="#purchase" className="berry-gradient min-h-11 rounded-full px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-primary-foreground transition-transform active:scale-95 sm:px-5 sm:text-xs sm:tracking-[0.15em] sm:hover:scale-105">
            Add To Cart
          </a>
        </div>
      </nav>

      <div className="sticky top-[51px] z-40 border-b border-border/30 bg-background/95 px-4 py-2 backdrop-blur md:hidden">
        <div className="no-scrollbar flex gap-5 overflow-x-auto text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
          <a href="#parfum" className="shrink-0 py-1">Parfum</a>
          <a href="#notes" className="shrink-0 py-1">Notes</a>
          <a href="#story" className="shrink-0 py-1">Story</a>
          <a href="#faqs" className="shrink-0 py-1">FAQs</a>
        </div>
      </div>

      {/* Hero */}
      <section id="parfum" className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:py-20">
        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 space-y-6 sm:space-y-8 lg:order-1">
            <div className="space-y-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-berry sm:text-[11px] sm:tracking-[0.3em]">
                Unisex · Berry · Parfum
              </p>
              <h1 className="text-4xl font-bold uppercase leading-[0.9] tracking-tight sm:text-5xl md:text-7xl lg:text-8xl">
                Berry
                <br />
                <span className="text-berry">Blast</span>
              </h1>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mist sm:text-sm sm:tracking-[0.28em]">
                Deep. Dark. Seductive.
              </p>
              <p className="max-w-md text-xs uppercase tracking-[0.12em] text-muted-foreground sm:text-sm sm:tracking-[0.15em]">
                Late nights · Slow dances · Second glances
              </p>
              <p className="max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
                It smells like crushed berries, warm skin and the last word.
              </p>
            </div>

            <div className="flex flex-wrap items-baseline gap-3">
              <p className="text-3xl font-semibold text-foreground">₹ 2,499</p>
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Incl. of all taxes · 100ml
              </span>
            </div>

            <div className="grid gap-3 sm:flex sm:flex-wrap sm:items-center sm:gap-4">
              <button className="berry-gradient juice-glow min-h-12 rounded-full px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-primary-foreground transition-transform active:scale-95 sm:px-8 sm:tracking-[0.15em] sm:hover:scale-105">
                Add To Cart
              </button>
              <button className="min-h-12 rounded-full border border-border bg-card/50 px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-foreground transition-colors active:bg-card sm:px-8 sm:tracking-[0.15em] sm:hover:bg-card">
                Explore Parfum
              </button>
            </div>

            <div className="grid grid-cols-3 gap-2 pt-2 sm:gap-4">
              {meta.map((item) => (
                <div
                  key={item.label}
                  className="glass-card rounded-xl border border-border/50 p-2.5 text-center sm:p-4"
                >
                  <p className="text-[9px] uppercase leading-tight tracking-[0.12em] text-muted-foreground sm:text-[10px] sm:tracking-[0.2em]">
                    {item.label}
                  </p>
                  <p className="mt-1 text-xs font-semibold text-foreground sm:text-sm">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="juice-glow absolute inset-0 -z-10 rounded-full opacity-60 blur-3xl" />
              <img
                src={heroImage480}
                srcSet={heroSrcSet}
                sizes={heroSizes}
                alt="Berry Blast by Sarkar — the signature chess-king Sarkar bottle in deep purple glass with a purple tag, surrounded by blueberries, raspberries and mulberries in dark berry juices"
                width={1280}
                height={960}
                className="relative h-auto w-full rounded-2xl border border-border/30 shadow-2xl"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product description */}
      <section id="story" className="defer-render border-y border-border/40 bg-ink/50 py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Product Description
          </h2>
          <p className="mt-5 text-xl font-light leading-relaxed text-foreground sm:mt-6 sm:text-2xl">
            Blueberry and raspberry open cold and tart. Mulberry and plum sink into amber and musk
            for a long, stained trail.
          </p>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-muted-foreground">
            Berry Blast by Sarkar is for the ones who arrive quietly and are remembered loudly.
          </p>
        </div>
      </section>

      {/* Notes */}
      <section id="notes" className="defer-render mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="mb-8 text-center sm:mb-12">
          <h2 className="text-2xl font-semibold uppercase tracking-tight sm:text-3xl md:text-4xl">
            The Berry <span className="text-berry">Trinity</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Three dark berries, layered into a single, addictive parfum.
          </p>
        </div>

        <div className="grid gap-3 sm:gap-6 md:grid-cols-3">
          {noteLayers.map((note) => (
            <div
              key={note.label}
              className="group glass-card rounded-2xl border border-border/50 p-5 transition-all sm:p-6 sm:hover:border-berry/30"
            >
              <div className="mb-5 flex items-center gap-4">
                <div className={`h-3 w-3 rounded-full ${note.color} ring-2 ring-white/10`} />
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  {note.label}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">{note.value}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{note.copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Packaging / details */}
      <section className="defer-render border-y border-border/40 bg-ink/50 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:gap-12 sm:px-6 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold uppercase tracking-tight md:text-4xl">
              The Same <span className="text-berry">Throne</span>
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              The same Sarkar silhouette you already know — the chess king, crowned cap, heavy
              pedestal base, SARKAR engraved in silver. Only the glass changes: a deep berry violet
              with a purple tag for the darkest scent in the house.
            </p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {[
                "25% parfum oil concentration",
                "100 ml / 3.4 fl oz",
                "Unisex in spirit. Absolute in command.",
                "Ships within 24–36 hours of ordering",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-berry" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div id="purchase" className="glass-card relative scroll-mt-28 overflow-hidden rounded-3xl border border-border/50 p-5 sm:p-8">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-berry/20 blur-3xl" />
            <div className="relative z-10 space-y-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                    Sarkar Parfum
                  </p>
                  <p className="mt-1 text-2xl font-semibold uppercase text-foreground sm:text-3xl">
                    Berry Blast
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-berry">
                    Berry · Amber · Musk
                  </p>
                </div>
                <p className="text-2xl font-semibold text-berry">₹ 2,499</p>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                A dark fruity gourmand for evenings when you want to be remembered.
              </p>
              <button className="w-full rounded-full bg-foreground py-3.5 text-sm font-semibold uppercase tracking-[0.15em] text-background transition-colors hover:bg-foreground/90">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="defer-render mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20">
        <h2 className="mb-8 text-center text-2xl font-semibold uppercase tracking-tight sm:mb-10 sm:text-3xl md:text-4xl">
          FAQs
        </h2>
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, i) => (
            <div key={faq.q} className="glass-card rounded-2xl border border-border/50 p-4 sm:p-6">
              <h3 className="text-base font-semibold text-foreground">
                {i + 1}. {faq.q}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="defer-render border-t border-border/40 bg-ink pb-24 pt-10 sm:py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-center sm:px-6 md:flex-row md:text-left">
          <span className="text-lg font-semibold tracking-[0.3em] text-foreground">SARKAR</span>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Berry Blast — Deep. Dark. Seductive.
          </p>
          <div className="flex gap-6 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            <a href="#" className="transition-colors hover:text-foreground">
              Instagram
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              YouTube
            </a>
          </div>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border/50 bg-background/95 p-3 backdrop-blur md:hidden" style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}>
        <a href="#purchase" className="berry-gradient flex min-h-12 items-center justify-center rounded-full px-5 text-sm font-semibold uppercase tracking-[0.14em] text-primary-foreground active:scale-[0.98]">
          Buy Berry Blast · ₹ 2,499
        </a>
      </div>
    </main>
  );
}
