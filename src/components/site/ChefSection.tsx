import { motion } from "framer-motion";
import { Award, ChefHat, Sparkles, Utensils } from "lucide-react";
import chefImg from "@/assets/chef.jpg";

const SIGNATURES = ["CAD B Cold Brew", "Tandoori Paneer Pizza", "Sizzling Brownie", "Pahadi Sandwich"];
const AWARDS = [
  "Best Café Experience — Chinchwad Foodies 2024",
  "Barista Excellence — Western India Coffee Fest",
  "Featured Chef — Pune Restaurant Week",
];

export function ChefSection() {
  return (
    <section className="relative overflow-hidden bg-cream/40 py-28 sm:py-36">
      <div className="pointer-events-none absolute -left-32 top-24 h-96 w-96 rounded-full bg-forest/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-gold/15 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-[minmax(0,1fr)_1.2fr] md:items-center">
        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-gold/30 via-forest/10 to-transparent blur-2xl" />
          <div className="relative aspect-square overflow-hidden rounded-full border-[6px] border-cream shadow-lift ring-1 ring-forest/10">
            <img
              src={chefImg}
              alt="Chef Rohan Deshmukh, Executive Chef of Cafe Cilantro"
              loading="lazy"
              width={896}
              height={1152}
              className="h-full w-full object-cover"
            />
          </div>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-4 left-6 flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-3 shadow-lift"
          >
            <span className="grid h-10 w-10 place-items-center rounded-full bg-forest text-cream">
              <ChefHat className="h-5 w-5" />
            </span>
            <div>
              <p className="font-display text-lg leading-none text-forest">15+ Years</p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">of the craft</p>
            </div>
          </motion.div>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -top-3 right-2 flex items-center gap-2 rounded-full border border-gold/40 bg-cream px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-coffee shadow-soft"
          >
            <Sparkles className="h-3.5 w-3.5 text-gold" /> Executive Chef
          </motion.div>
        </motion.div>

        {/* Story */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-coffee">
            <span className="h-px w-6 bg-current" /> Meet Our Chef
          </span>
          <h2 className="mt-4 font-display text-4xl leading-[1.05] sm:text-5xl md:text-6xl">
            Chef <em className="not-italic text-forest">Rohan Deshmukh</em>
          </h2>
          <p className="mt-3 text-sm uppercase tracking-[0.24em] text-muted-foreground">
            Executive Chef · Cafe Cilantro
          </p>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-foreground/80">
            "Cooking, for me, is remembering. Every bowl of pasta, every pull of espresso, is a small
            promise that today will feel a little kinder than yesterday."
          </p>
          <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
            Trained in Mumbai and mentored across Italy and Bangkok, Chef Rohan brings home the warmth of a
            Konkan kitchen and the precision of a European pass — the reason a simple grilled sandwich
            here tastes like it was made just for you.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-5">
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-forest">
                <Utensils className="h-3.5 w-3.5" /> Signature Dishes
              </div>
              <ul className="mt-3 space-y-1.5 text-sm text-foreground/85">
                {SIGNATURES.map((s) => (
                  <li key={s} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-gold" /> {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5">
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-forest">
                <Award className="h-3.5 w-3.5" /> Recognition
              </div>
              <ul className="mt-3 space-y-1.5 text-sm text-foreground/85">
                {AWARDS.map((a) => (
                  <li key={a} className="flex items-start gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" /> {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
