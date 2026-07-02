import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { PageLayout, PageHero } from "@/components/site/PageLayout";

const REVIEWS = [
  { name: "Aarav S.", rating: 5, text: "Excellent ambience, tasty food and great service. A spot we keep returning to.", when: "2 weeks ago" },
  { name: "Priya M.", rating: 5, text: "The baked pasta was bubbling hot and cheesy — exactly what comfort food should feel like.", when: "1 month ago" },
  { name: "Rohan K.", rating: 4, text: "Cold coffee with crush is a must try. The crowd, the lights, the food — all on point.", when: "3 weeks ago" },
  { name: "Sneha D.", rating: 5, text: "Affordable prices and delicious food. One of the best cafés in Chinchwad.", when: "5 days ago" },
  { name: "Kabir R.", rating: 5, text: "The cheesy loaded pizza is chef's kiss. Ambience is calm and photogenic.", when: "2 months ago" },
  { name: "Ishita N.", rating: 4, text: "Sizzling brownie is worth every calorie. Warm, welcoming space.", when: "6 weeks ago" },
];

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — Cafe Cilantro" },
      { name: "description", content: "857+ Google reviews · 4.0★ rating. See what our guests love about Cafe Cilantro." },
      { property: "og:title", content: "Reviews — Cafe Cilantro" },
      { property: "og:description", content: "857+ Google reviews · 4.0★." },
    ],
  }),
  component: Reviews,
});

function Reviews() {
  const [i, setI] = useState(0);
  const prev = () => setI((v) => (v - 1 + REVIEWS.length) % REVIEWS.length);
  const next = () => setI((v) => (v + 1) % REVIEWS.length);

  return (
    <PageLayout hero={<PageHero eyebrow="Loved by our guests" title="857+ reviews. 4.0 stars." subtitle="Real words from real regulars." />}>
      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="relative rounded-[2rem] border border-border bg-card p-10 shadow-soft sm:p-14">
          <Quote className="absolute right-8 top-8 h-16 w-16 text-gold/20" />
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} className={`h-4 w-4 ${s < REVIEWS[i].rating ? "fill-gold text-gold" : "text-muted-foreground/30"}`} />
                ))}
              </div>
              <p className="mt-6 font-display text-2xl leading-snug text-foreground sm:text-3xl">
                "{REVIEWS[i].text}"
              </p>
              <div className="mt-8 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-forest text-cream">
                  {REVIEWS[i].name[0]}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{REVIEWS[i].name}</p>
                  <p className="text-xs text-muted-foreground">{REVIEWS[i].when} · Google review</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex items-center justify-between">
            <div className="flex gap-1">
              {REVIEWS.map((_, d) => (
                <button
                  key={d}
                  onClick={() => setI(d)}
                  className={`h-1.5 rounded-full transition-all ${d === i ? "w-8 bg-forest" : "w-2 bg-border"}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button onClick={prev} className="grid h-10 w-10 place-items-center rounded-full border border-border transition hover:border-forest hover:text-forest">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button onClick={next} className="grid h-10 w-10 place-items-center rounded-full border border-border transition hover:border-forest hover:text-forest">
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r) => (
            <div key={r.name} className="hover-lift rounded-3xl border border-border bg-card p-7">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} className={`h-3.5 w-3.5 ${s < r.rating ? "fill-gold text-gold" : "text-muted-foreground/30"}`} />
                ))}
              </div>
              <p className="mt-4 leading-relaxed text-foreground/90">"{r.text}"</p>
              <p className="mt-6 text-sm text-muted-foreground">{r.name} · {r.when}</p>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
