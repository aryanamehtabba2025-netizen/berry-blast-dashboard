import { createFileRoute } from "@tanstack/react-router";
import heroImage from "../assets/berry-blast-bottle.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Berry Blast | Deep Dark Seductive Fragrance" },
      {
        name: "description",
        content:
          "Berry Blast — a deep, dark, seductive fragrance drenched in blueberries, raspberries, and mulberries. Eau de Parfum.",
      },
      { property: "og:title", content: "Berry Blast | Deep Dark Seductive Fragrance" },
      {
        property: "og:description",
        content:
          "Berry Blast — a deep, dark, seductive fragrance drenched in blueberries, raspberries, and mulberries.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Berry Blast | Deep Dark Seductive Fragrance" },
      {
        name: "twitter:description",
        content:
          "Berry Blast — a deep, dark, seductive fragrance drenched in blueberries, raspberries, and mulberries.",
      },
      { name: "twitter:image", content: heroImage },
    ],
  }),
});

const notes = [
  { name: "Blueberry", role: "Top note", color: "bg-[#3a4b96]" },
  { name: "Raspberry", role: "Heart note", color: "bg-[#9b1c31]" },
  { name: "Mulberry", role: "Base note", color: "bg-[#2d0a31]" },
];

const stats = [
  { label: "Concentration", value: "Eau de Parfum" },
  { label: "Longevity", value: "8–12 hours" },
  { label: "Sillage", value: "Intimate yet lasting" },
];

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* Subtle vignette / radial glow */}
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at 50% 30%, color-mix(in oklab, oklch(0.25 0.08 310) 25%, transparent) 0%, transparent 60%), linear-gradient(to bottom, oklch(0.06 0.005 270), oklch(0.1 0.01 270))",
        }}
      />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <span className="text-xl font-semibold tracking-wide text-foreground">BERRY BLAST</span>
          <div className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
            <a href="#fragrance" className="transition-colors hover:text-foreground">
              Fragrance
            </a>
            <a href="#notes" className="transition-colors hover:text-foreground">
              Notes
            </a>
            <a href="#details" className="transition-colors hover:text-foreground">
              Details
            </a>
          </div>
          <button className="berry-gradient rounded-full px-5 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105">
            Shop Now
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section id="fragrance" className="relative mx-auto max-w-7xl px-6 py-12 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Text */}
          <div className="order-2 space-y-8 lg:order-1">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-berry">
                Eau de Parfum
              </p>
              <h1 className="text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
                Berry
                <br />
                <span className="text-berry">Blast</span>
              </h1>
              <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
                A deep, dark, seductive fragrance that drenches the senses in crushed berries and
                midnight juices.
              </p>
            </div>

            <blockquote className="border-l-2 border-berry pl-5 text-xl font-light italic text-mist">
              “Dark as desire. Sweet as sin.”
            </blockquote>

            <div className="flex flex-wrap items-center gap-4">
              <button className="berry-gradient juice-glow rounded-full px-8 py-3.5 text-base font-semibold text-primary-foreground transition-transform hover:scale-105">
                Discover the Scent
              </button>
              <button className="rounded-full border border-border bg-card/50 px-8 py-3.5 text-base font-semibold text-foreground transition-colors hover:bg-card">
                View Collection
              </button>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card rounded-xl border border-border/50 p-4 text-center"
                >
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    {stat.label}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-foreground">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hero image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="juice-glow absolute inset-0 -z-10 rounded-full opacity-60 blur-3xl" />
              <img
                src={heroImage}
                alt="Berry Blast perfume bottle surrounded by blueberries, raspberries, and mulberries with dark berry juices"
                width={1920}
                height={1080}
                className="relative rounded-2xl border border-border/30 shadow-2xl"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Notes section */}
      <section id="notes" className="border-y border-border/40 bg-ink/50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              The Berry <span className="text-berry">Trinity</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Three dark berries, layered into a single, addictive scent.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {notes.map((note) => (
              <div
                key={note.name}
                className="group glass-card rounded-2xl border border-border/50 p-6 transition-all hover:border-berry/30"
              >
                <div className="mb-5 flex items-center gap-4">
                  <div className={`h-3 w-3 rounded-full ${note.color} ring-2 ring-white/10`} />
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {note.role}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-foreground">{note.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {note.role === "Top note" &&
                    "Freshly crushed blueberries burst open with a cool, juicy sweetness that hooks instantly."}
                  {note.role === "Heart note" &&
                    "Raspberry adds a tart, velvet depth — ripe, rich, and impossible to ignore."}
                  {note.role === "Base note" &&
                    "Mulberry lingers at the base, dark and seductive, leaving a trail of midnight fruit."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Details / story section */}
      <section id="details" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Seduction in a <span className="text-berry">Clear Bottle</span>
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              The clear glass bottle lets the darkness speak for itself. A single purple tag hangs
              like a secret invitation, while the silver cap catches the light like a moonlit berry
              patch.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Every detail is designed to feel intimate — from the deep berry juice stains on the
              marble to the weight of the perfume in your hand.
            </p>

            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-berry" />
                Hand-poured in small batches
              </li>
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-berry" />
                100 ml / 3.4 fl oz
              </li>
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-berry" />
                Cruelty-free and vegan
              </li>
            </ul>
          </div>

          {/* Large product card */}
          <div className="glass-card relative overflow-hidden rounded-3xl border border-border/50 p-8">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-berry/20 blur-3xl" />
            <div className="relative z-10 space-y-6">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Limited Edition
                  </p>
                  <p className="mt-1 text-3xl font-semibold text-foreground">Berry Blast</p>
                </div>
                <p className="text-2xl font-semibold text-berry">$145</p>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                A dark, fruity gourmand for evenings when you want to be remembered.
              </p>
              <button className="w-full rounded-full bg-foreground py-3.5 text-base font-semibold text-background transition-colors hover:bg-foreground/90">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-ink py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <span className="text-lg font-semibold tracking-wide text-foreground">BERRY BLAST</span>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Berry Blast. Deep, dark, and unforgettable.
          </p>
          <div className="flex gap-6 text-sm font-medium text-muted-foreground">
            <a href="#" className="transition-colors hover:text-foreground">
              Instagram
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              TikTok
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
