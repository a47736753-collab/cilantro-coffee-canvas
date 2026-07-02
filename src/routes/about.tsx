import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageLayout, PageHero } from "@/components/site/PageLayout";
import interior from "@/assets/interior.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Cafe Cilantro" },
      { name: "description", content: "The story, mission and vision behind Cafe Cilantro — a warm café in Chinchwad built for slow moments and great food." },
      { property: "og:title", content: "About — Cafe Cilantro" },
      { property: "og:description", content: "Our story, our mission, our people." },
    ],
  }),
  component: About,
});

const STATS = [
  { n: "857+", label: "Google reviews" },
  { n: "4.0★", label: "Guest rating" },
  { n: "10k+", label: "Happy guests" },
  { n: "120+", label: "Menu items" },
];

const PILLARS = [
  { t: "Slow roast, slow serve", d: "We refuse to rush the good stuff — the coffee, the sauces, the sit-downs." },
  { t: "Honest ingredients", d: "Locally sourced produce, small-batch dairy, no shortcuts on flavour." },
  { t: "Room to linger", d: "Warm light, soft music, unhurried service. Stay as long as you like." },
];

function About() {
  return (
    <PageLayout hero={<PageHero eyebrow="Our Story" title="A café built for slow moments." subtitle="Where handcrafted coffee meets delicious comfort food, served warmly in the heart of Chinchwad." />}>
      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-2 md:items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Cafe Cilantro began as a simple idea — a warm corner where the coffee is steady, the food is honest,
            and the room feels like a familiar living room. Years on, it's still the place friends return to,
            families settle into, and afternoons quietly slip away in.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            We roast our beans slowly, hand-stretch our pizzas, whisk our sauces in small batches
            and serve everything with a smile that isn't rehearsed.
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="aspect-[4/5] overflow-hidden rounded-[2rem]">
          <img src={interior} alt="Interior of Cafe Cilantro" className="h-full w-full object-cover" />
        </motion.div>
      </section>

      <section className="bg-forest-deep py-24 text-cream">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="rounded-3xl border border-cream/10 bg-cream/5 p-8 text-center backdrop-blur"
              >
                <p className="font-display text-5xl text-gold">{s.n}</p>
                <p className="mt-2 text-xs uppercase tracking-widest text-cream/70">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-10">
            <p className="text-[11px] uppercase tracking-[0.24em] text-coffee">Our mission</p>
            <h3 className="mt-3 font-display text-3xl text-foreground">Feed the day, warmly.</h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              To make every guest feel unhurried — with food and coffee that taste made-for-you,
              in a room that quietly invites you to stay a little longer.
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-card p-10">
            <p className="text-[11px] uppercase tracking-[0.24em] text-coffee">Our vision</p>
            <h3 className="mt-3 font-display text-3xl text-foreground">The neighbourhood's favourite table.</h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              To grow into a place friends recommend without thinking — the café your city
              tells its visitors to try first.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {PILLARS.map((p) => (
            <div key={p.t} className="hover-lift rounded-3xl border border-border bg-card p-8">
              <h4 className="font-display text-2xl text-foreground">{p.t}</h4>
              <p className="mt-3 leading-relaxed text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
