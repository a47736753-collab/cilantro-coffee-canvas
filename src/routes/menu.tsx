import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Star, Sparkles, Leaf, Flame, ChevronDown } from "lucide-react";

import { PageLayout, PageHero } from "@/components/site/PageLayout";
import { OrderButtons } from "@/components/site/OrderButtons";
import { MenuItemModal } from "@/components/site/MenuItemModal";
import { CATEGORIES, MENU, COMBOS, type MenuItem } from "@/lib/menu-data";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Cafe Cilantro" },
      { name: "description", content: "Explore our menu: coffee, pizza, pasta, burgers, sandwiches, milkshakes, mojitos, wraps, Chinese, desserts and combos." },
      { property: "og:title", content: "Menu — Cafe Cilantro" },
      { property: "og:description", content: "Handcrafted coffee & comfort food." },
    ],
  }),
  component: MenuPage,
});

type Filter = "all" | "popular" | "chef" | "veg";

function MenuPage() {
  const [cat, setCat] = useState<string>("all");
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("all");
  const [active, setActive] = useState<MenuItem | null>(null);
  const [open, setOpen] = useState<Record<string, boolean>>({});

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return MENU.filter((m) => {
      if (cat !== "all" && m.cat !== cat) return false;
      if (filter === "popular" && !m.popular) return false;
      if (filter === "chef" && !m.chefSpecial) return false;
      if (filter === "veg" && !m.veg) return false;
      if (q && !(`${m.name} ${m.desc}`.toLowerCase().includes(q))) return false;
      return true;
    });
  }, [cat, query, filter]);

  const grouped = useMemo(() => {
    const map = new Map<string, MenuItem[]>();
    for (const item of filtered) {
      if (!map.has(item.cat)) map.set(item.cat, []);
      map.get(item.cat)!.push(item);
    }
    return map;
  }, [filtered]);

  return (
    <PageLayout
      hero={
        <PageHero
          eyebrow="The Menu"
          title="Handcrafted. Honest. Yours."
          subtitle="Browse by category, search a favourite, or filter for our best sellers and Chef's Specials."
        />
      }
    >
      {/* Sticky filter bar */}
      <div className="sticky top-20 z-30 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4">
          <div className="flex flex-col gap-3 md:flex-row md:items-center">
            <div className="relative w-full md:max-w-xs">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search the menu"
                className="w-full rounded-full border border-border bg-secondary/50 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-forest focus:bg-card"
              />
            </div>
            <div className="flex flex-wrap items-center gap-1.5">
              {(["all", "popular", "chef", "veg"] as Filter[]).map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs uppercase tracking-widest transition ${
                    filter === f ? "bg-forest text-cream" : "bg-secondary text-foreground/70 hover:bg-secondary/70"
                  }`}
                >
                  {f === "popular" && <Star className="h-3 w-3" />}
                  {f === "chef" && <Sparkles className="h-3 w-3" />}
                  {f === "veg" && <Leaf className="h-3 w-3" />}
                  {f === "all" ? "All" : f === "popular" ? "Best sellers" : f === "chef" ? "Chef's" : "Veg"}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-3 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                onClick={() => setCat(c.id)}
                className={`shrink-0 rounded-full border px-4 py-2 text-sm transition ${
                  cat === c.id
                    ? "border-forest bg-forest text-cream shadow-soft"
                    : "border-border bg-card text-foreground/80 hover:border-forest/40"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu list */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        {grouped.size === 0 && (
          <div className="rounded-3xl border border-border bg-card p-16 text-center">
            <p className="font-display text-2xl text-foreground">Nothing found.</p>
            <p className="mt-2 text-sm text-muted-foreground">Try a different word or clear the filters.</p>
          </div>
        )}

        <div className="grid gap-10">
          {[...grouped.entries()].map(([catId, items]) => {
            const label = CATEGORIES.find((c) => c.id === catId)?.label ?? catId;
            const isOpen = open[catId] !== false; // default open
            return (
              <div key={catId} className="rounded-3xl border border-border bg-card">
                <button
                  onClick={() => setOpen((s) => ({ ...s, [catId]: !isOpen }))}
                  className="flex w-full items-center justify-between gap-4 px-7 py-6 text-left"
                >
                  <div className="flex items-baseline gap-4">
                    <h2 className="font-display text-3xl text-foreground sm:text-4xl">{label}</h2>
                    <span className="text-xs uppercase tracking-widest text-muted-foreground">{items.length} items</span>
                  </div>
                  <ChevronDown className={`h-5 w-5 text-muted-foreground transition ${isOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
                      className="divide-y divide-border overflow-hidden border-t border-border"
                    >
                      {items.map((m) => (
                        <MenuRow key={m.name} item={m} onOpen={() => setActive(m)} />
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Combos */}
        <div id="combos" className="mt-24 scroll-mt-40">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-coffee">
                <span className="h-px w-6 bg-current" /> Combo Offers
              </span>
              <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">Better together.</h2>
            </div>
            <OrderButtons />
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {COMBOS.map((c, i) => {
              const savings = c.original - c.price;
              return (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="hover-lift relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-soft"
                >
                  <div className="absolute right-4 top-4 flex flex-col items-end gap-1">
                    {c.tag && <span className="rounded-full bg-forest px-3 py-1 text-[10px] uppercase tracking-widest text-cream">{c.tag}</span>}
                    <span className="rounded-full bg-gold/20 px-3 py-1 text-[10px] uppercase tracking-widest text-coffee">Save ₹{savings}</span>
                  </div>
                  <h3 className="font-display text-2xl text-foreground">{c.title}</h3>
                  <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                    {c.items.map((it) => <li key={it}>· {it}</li>)}
                  </ul>
                  <div className="mt-6 flex items-end justify-between border-t border-border pt-5">
                    <div>
                      <p className="text-xs text-muted-foreground line-through">₹{c.original}</p>
                      <p className="font-display text-3xl text-forest">₹{c.price}</p>
                    </div>
                    <OrderButtons size="sm" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <MenuItemModal item={active} onClose={() => setActive(null)} />
    </PageLayout>
  );
}

function MenuRow({ item, onOpen }: { item: MenuItem; onOpen: () => void }) {
  return (
    <li className="group flex flex-col gap-4 px-7 py-5 transition hover:bg-secondary/40 sm:flex-row sm:items-center sm:justify-between">
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="font-display text-xl text-foreground">{item.name}</h3>
          {item.veg && <span className="grid h-4 w-4 place-items-center rounded-sm border border-forest/60"><span className="h-1.5 w-1.5 rounded-full bg-forest" /></span>}
          {item.popular && (
            <span className="inline-flex items-center gap-1 rounded-full bg-gold/20 px-2 py-0.5 text-[10px] uppercase tracking-widest text-coffee">
              <Star className="h-2.5 w-2.5" /> Popular
            </span>
          )}
          {item.chefSpecial && (
            <span className="inline-flex items-center gap-1 rounded-full bg-forest/10 px-2 py-0.5 text-[10px] uppercase tracking-widest text-forest">
              <Sparkles className="h-2.5 w-2.5" /> Chef's Special
            </span>
          )}
          {item.spice && item.spice > 0 && (
            <span className="inline-flex items-center gap-1 rounded-full bg-destructive/10 px-2 py-0.5 text-[10px] uppercase tracking-widest text-destructive">
              <Flame className="h-2.5 w-2.5" /> Spicy
            </span>
          )}
        </div>
        <p className="mt-1 line-clamp-1 text-sm text-muted-foreground">{item.desc}</p>
      </div>
      <div className="flex items-center gap-4 sm:gap-6">
        <p className="font-display text-2xl text-forest">₹{item.price}</p>
        <div className="flex items-center gap-2">
          <button
            onClick={onOpen}
            className="rounded-full border border-border px-4 py-2 text-xs uppercase tracking-widest text-foreground/70 transition hover:border-forest hover:text-forest"
          >
            View Details
          </button>
          <div className="hidden sm:block"><OrderButtons size="sm" /></div>
        </div>
      </div>
    </li>
  );
}
