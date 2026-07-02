import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function PageLayout({ children, hero }: { children: ReactNode; hero?: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />
      {hero}
      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
        className="flex-1"
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
}

export function PageHero({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <section className="relative overflow-hidden bg-forest-deep pt-40 pb-24 text-cream">
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gold/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-forest/50 blur-3xl" />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        {eyebrow && (
          <span className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/5 px-4 py-1.5 text-[11px] uppercase tracking-[0.24em] text-cream/80 backdrop-blur">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-6 font-display text-5xl leading-[1.05] sm:text-6xl md:text-7xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-5 max-w-2xl text-base text-cream/75 sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
