import { motion } from "framer-motion";
import { Award, Star, Users, Utensils, Heart, MapPin } from "lucide-react";

const ITEMS = [
  { icon: Star, value: "4.0★", label: "Google Rating", sub: "857+ reviews" },
  { icon: Users, value: "12,000+", label: "Happy guests", sub: "and counting" },
  { icon: Utensils, value: "120+", label: "Signature dishes", sub: "on the menu" },
  { icon: Award, value: "3×", label: "Awarded café", sub: "in Pune region" },
  { icon: Heart, value: "Loved", label: "by Chinchwad", sub: "since day one" },
  { icon: MapPin, value: "Sector 18", label: "Chinchwad", sub: "easy to find" },
];

export function AwardsSection() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-coffee">
            <span className="h-px w-6 bg-current" /> Awards & Recognition
          </span>
          <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
            Loved by thousands. <em className="not-italic text-gold">Recognised by many.</em>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            A quiet neighbourhood café that has quietly become one of Chinchwad's favourite places to meet,
            work, and linger.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {ITEMS.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={it.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.05 }}
                className="hover-lift group relative overflow-hidden rounded-2xl border border-border bg-card p-5 text-center shadow-soft transition"
              >
                <div className="pointer-events-none absolute inset-x-0 -top-8 mx-auto h-16 w-16 rounded-full bg-gold/20 blur-2xl opacity-0 transition group-hover:opacity-100" />
                <span className="mx-auto grid h-11 w-11 place-items-center rounded-full bg-forest/10 text-forest">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="mt-4 font-display text-2xl text-foreground">{it.value}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-foreground/80">{it.label}</p>
                <p className="mt-0.5 text-[11px] text-muted-foreground">{it.sub}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
