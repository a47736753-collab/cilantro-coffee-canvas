import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Flame, Leaf, Star, Sparkles } from "lucide-react";
import type { MenuItem } from "@/lib/menu-data";
import { OrderButtons } from "./OrderButtons";

export function MenuItemModal({ item, onClose }: { item: MenuItem | null; onClose: () => void }) {
  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-end justify-center bg-charcoal/60 backdrop-blur-md sm:items-center"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 60, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 40, opacity: 0, scale: 0.98 }}
            transition={{ type: "spring", damping: 26, stiffness: 240 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg overflow-hidden rounded-t-3xl bg-card p-8 shadow-lift sm:rounded-3xl"
          >
            <button
              aria-label="Close"
              onClick={onClose}
              className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-secondary text-foreground/70 transition hover:bg-forest hover:text-cream"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex flex-wrap items-center gap-1.5">
              {item.veg && (
                <span className="inline-flex items-center gap-1 rounded-full bg-forest/10 px-2.5 py-1 text-[10px] uppercase tracking-widest text-forest">
                  <Leaf className="h-3 w-3" /> Veg
                </span>
              )}
              {item.popular && (
                <span className="inline-flex items-center gap-1 rounded-full bg-gold/15 px-2.5 py-1 text-[10px] uppercase tracking-widest text-coffee">
                  <Star className="h-3 w-3" /> Best Seller
                </span>
              )}
              {item.chefSpecial && (
                <span className="inline-flex items-center gap-1 rounded-full bg-coffee/10 px-2.5 py-1 text-[10px] uppercase tracking-widest text-coffee">
                  <Sparkles className="h-3 w-3" /> Chef's Special
                </span>
              )}
              {item.spice && item.spice > 0 && (
                <span className="inline-flex items-center gap-1 rounded-full bg-destructive/10 px-2.5 py-1 text-[10px] uppercase tracking-widest text-destructive">
                  <Flame className="h-3 w-3" /> {"Spicy".repeat(1)} · Level {item.spice}
                </span>
              )}
            </div>

            <h3 className="mt-4 font-display text-4xl leading-tight text-foreground">{item.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>

            {item.ingredients && item.ingredients.length > 0 && (
              <div className="mt-6">
                <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Ingredients</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {item.ingredients.map((i) => (
                    <span key={i} className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-foreground/80">{i}</span>
                  ))}
                </div>
              </div>
            )}

            {item.pairing && (
              <div className="mt-6 rounded-2xl border border-border bg-secondary/40 p-4">
                <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Chef's pairing</p>
                <p className="mt-1 font-display text-lg text-forest">{item.pairing}</p>
              </div>
            )}

            <div className="mt-8 flex items-end justify-between gap-4 border-t border-border pt-6">
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Price</p>
                <p className="font-display text-3xl text-forest">₹{item.price}</p>
              </div>
              <OrderButtons />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
