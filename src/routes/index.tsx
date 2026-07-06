import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMemo, useRef } from "react";
import { ArrowUpRight, Coffee, Leaf, Sparkles, Star, MapPin, Clock } from "lucide-react";

import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { OrderButtons } from "@/components/site/OrderButtons";
import { ChefSection } from "@/components/site/ChefSection";
import { AwardsSection } from "@/components/site/AwardsSection";
import { MENU, COMBOS, CONTACT } from "@/lib/menu-data";

import hero from "@/assets/hero.jpg";
import interior from "@/assets/interior.jpg";
import coldCoffee from "@/assets/cold-coffee.jpg";
import pizza from "@/assets/pizza.jpg";
import alfredo from "@/assets/alfredo.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cafe Cilantro — Every Sip. Every Bite. Every Moment." },
      { name: "description", content: "Cafe Cilantro is where handcrafted coffee meets delicious comfort food in a warm, aesthetic atmosphere in Chinchwad." },
      { property: "og:title", content: "Cafe Cilantro — Every Sip. Every Bite. Every Moment." },
      { property: "og:description", content: "Handcrafted coffee & comfort food in a warm atmosphere." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Home,
});

function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  const highlights = useMemo(
    () => MENU.filter((m) => m.chefSpecial).slice(0, 6),
    [],
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* HERO */}
      <section ref={heroRef} className="relative min-h-[100svh] w-full overflow-hidden">
        <motion.img
          style={{ y, scale: 1.08 }}
          src={hero}
          alt="Signature drink at Cafe Cilantro"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/70 via-charcoal/50 to-charcoal/90" />

        {/* Floating steam elements */}
        <div className="pointer-events-none absolute inset-0">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="absolute h-24 w-24 rounded-full bg-cream/10 blur-2xl"
              style={{ left: `${20 + i * 25}%`, top: `${30 + i * 8}%` }}
              animate={{ y: [0, -30, 0], opacity: [0.35, 0.6, 0.35] }}
              transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 }}
            />
          ))}
        </div>

        <motion.div style={{ opacity }} className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-6 pt-32 pb-20 text-cream">
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-cream/20 bg-cream/5 px-4 py-1.5 text-xs uppercase tracking-[0.24em] text-cream/85 backdrop-blur"
          >
            <Leaf className="h-3.5 w-3.5 text-gold" /> Chinchwad · Since day one
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.05 }}
            className="mt-8 max-w-4xl font-display text-5xl leading-[1.02] sm:text-7xl md:text-[5.75rem]"
          >
            Every Sip. Every Bite.<br />
            <em className="not-italic text-gold">Every Moment.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 max-w-xl text-base text-cream/80 sm:text-lg"
          >
            Cafe Cilantro is where handcrafted coffee meets delicious comfort food
            in a warm, aesthetic atmosphere.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <Link
              to="/menu"
              className="group inline-flex items-center gap-2 rounded-full bg-cream px-7 py-3.5 text-sm font-medium text-charcoal transition hover:bg-gold"
            >
              View Menu <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-cream/25 bg-cream/5 px-7 py-3.5 text-sm font-medium text-cream backdrop-blur transition hover:bg-cream/10"
            >
              Visit Us
            </Link>
            <OrderButtons className="ml-1" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="pointer-events-none absolute bottom-8 right-6 hidden flex-col gap-3 md:flex"
          >
            <FloatBadge icon={<Star className="h-3.5 w-3.5 fill-gold text-gold" />} label="4.0 · 857 reviews" />
            <FloatBadge icon={<Clock className="h-3.5 w-3.5 text-gold" />} label="Open until late" />
            <FloatBadge icon={<MapPin className="h-3.5 w-3.5 text-gold" />} label="Sector 18, Chinchwad" />
          </motion.div>
        </motion.div>

        <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-cream/50">
          scroll
        </div>
      </section>

      {/* MARQUEE / signature strip */}
      <section className="border-y border-border bg-secondary/50 py-4 overflow-hidden">
        <div className="flex whitespace-nowrap animate-[marquee_36s_linear_infinite] gap-16 text-sm uppercase tracking-[0.3em] text-forest">
          {[...Array(2)].flatMap((_, k) =>
            ["Handcrafted Coffee", "•", "Wood-Fired Pizza", "•", "Creamy Pasta", "•", "House Mojitos", "•", "Slow Baked Desserts", "•", "Since day one"].map((t, i) => (
              <span key={`${k}-${i}`} className="opacity-80">{t}</span>
            )),
          )}
        </div>
        <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
      </section>

      {/* SIGNATURE */}
      <section className="relative py-28 sm:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>Signature moments</Eyebrow>
              <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight sm:text-5xl">
                Small plates and slow sips, made for lingering.
              </h2>
            </div>
            <Link to="/menu" className="story-link text-sm text-forest">Explore the full menu →</Link>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((h, i) => (
              <motion.div
                key={h.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="hover-lift group rounded-3xl border border-border bg-card p-8 shadow-soft"
              >
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-coffee">
                  <Sparkles className="h-3 w-3" /> Chef's Special
                </div>
                <h3 className="mt-3 font-display text-2xl text-foreground">{h.name}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{h.desc}</p>
                <div className="mt-6 flex items-end justify-between">
                  <p className="font-display text-2xl text-forest">₹{h.price}</p>
                  <Link to="/menu" className="text-xs uppercase tracking-[0.2em] text-forest/70 group-hover:text-forest">
                    View →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SPLIT SECTION */}
      <section className="relative bg-forest-deep py-28 text-cream">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2 md:items-center">
          <div>
            <Eyebrow className="text-gold">The Cilantro way</Eyebrow>
            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
              A warm corner of Chinchwad, made for slow afternoons.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/75">
              We roast slower, plate warmer and serve without hurry. Every corner of the café is designed
              so you'll want to stay a little longer — and every dish, to make sure you'll come back.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-cream/10 pt-8">
              <Stat n="857+" label="Google reviews" />
              <Stat n="4.0★" label="Guest rating" />
              <Stat n="120+" label="Menu items" />
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/about" className="inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3 text-sm text-charcoal transition hover:bg-gold">Our Story</Link>
              <Link to="/gallery" className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-6 py-3 text-sm text-cream transition hover:bg-cream/10">Gallery</Link>
            </div>
          </div>
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="aspect-[4/5] overflow-hidden rounded-[2rem]"
            >
              <img src={interior} alt="Cafe Cilantro interior" loading="lazy" className="h-full w-full object-cover" />
            </motion.div>
            <div className="glass-dark absolute -bottom-6 -left-6 rounded-2xl p-5 text-cream shadow-lift">
              <p className="font-display text-2xl text-gold">Est.</p>
              <p className="text-xs uppercase tracking-widest text-cream/70">Sector 18, Chinchwad</p>
            </div>
          </div>
        </div>
      </section>

      {/* MEET THE CHEF */}
      <ChefSection />

      {/* AWARDS & RECOGNITION */}
      <AwardsSection />

      {/* COMBOS TEASER */}
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>Combo offers</Eyebrow>
              <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight sm:text-5xl">
                Better together. Priced to share.
              </h2>
            </div>
            <Link to="/menu" hash="combos" className="story-link text-sm text-forest">See all combos →</Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {COMBOS.slice(0, 3).map((c, i) => {
              const savings = c.original - c.price;
              return (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="hover-lift relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-soft"
                >
                  <span className="absolute right-4 top-4 rounded-full bg-gold/20 px-3 py-1 text-[10px] uppercase tracking-widest text-coffee">
                    Save ₹{savings}
                  </span>
                  <Coffee className="h-6 w-6 text-forest" />
                  <h3 className="mt-4 font-display text-2xl text-foreground">{c.title}</h3>
                  <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                    {c.items.map((it) => <li key={it}>· {it}</li>)}
                  </ul>
                  <div className="mt-6 flex items-end justify-between border-t border-border pt-5">
                    <div>
                      <p className="text-xs text-muted-foreground line-through">₹{c.original}</p>
                      <p className="font-display text-2xl text-forest">₹{c.price}</p>
                    </div>
                    <OrderButtons size="sm" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* GALLERY strip */}
      <section className="bg-secondary/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between">
            <div>
              <Eyebrow>Postcards</Eyebrow>
              <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">Moments from the café.</h2>
            </div>
            <Link to="/gallery" className="story-link text-sm text-forest">Full gallery →</Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[coldCoffee, pizza, alfredo].map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className={`group overflow-hidden rounded-3xl ${i === 1 ? "sm:translate-y-8" : ""}`}
              >
                <img src={src} alt="" loading="lazy" className="aspect-[4/5] h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Eyebrow>Come find us</Eyebrow>
          <h2 className="mt-4 font-display text-4xl leading-tight sm:text-6xl">
            The kettle's on. <em className="not-italic text-gold">Pull up a chair.</em>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-muted-foreground">{CONTACT.address}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-forest px-7 py-3.5 text-sm text-cream transition hover:bg-forest-deep">Get Directions</Link>
            <OrderButtons />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Eyebrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-coffee ${className}`}>
      <span className="h-px w-6 bg-current" /> {children}
    </span>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <p className="font-display text-3xl text-gold sm:text-4xl">{n}</p>
      <p className="mt-1 text-xs uppercase tracking-widest text-cream/60">{label}</p>
    </div>
  );
}

function FloatBadge({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="glass-dark inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs text-cream/90 shadow-lift"
    >
      {icon} {label}
    </motion.div>
  );
}
