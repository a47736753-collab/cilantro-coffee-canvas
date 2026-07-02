import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { PageLayout, PageHero } from "@/components/site/PageLayout";

import hero from "@/assets/hero.jpg";
import interior from "@/assets/interior.jpg";
import coldCoffee from "@/assets/cold-coffee.jpg";
import pizza from "@/assets/pizza.jpg";
import alfredo from "@/assets/alfredo.jpg";
import burger from "@/assets/burger.jpg";
import sandwich from "@/assets/sandwich.jpg";
import fries from "@/assets/fries.jpg";
import shake from "@/assets/shake.jpg";
import dessert from "@/assets/dessert.jpg";

const IMAGES = [
  { src: hero, span: "row-span-2" },
  { src: coldCoffee, span: "" },
  { src: pizza, span: "" },
  { src: interior, span: "row-span-2" },
  { src: alfredo, span: "" },
  { src: burger, span: "" },
  { src: shake, span: "row-span-2" },
  { src: sandwich, span: "" },
  { src: fries, span: "" },
  { src: dessert, span: "" },
];

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Cafe Cilantro" },
      { name: "description", content: "Moments from Cafe Cilantro — the café, the food, the everyday poetry of a great meal." },
      { property: "og:title", content: "Gallery — Cafe Cilantro" },
      { property: "og:description", content: "Postcards from our café." },
    ],
  }),
  component: Gallery,
});

function Gallery() {
  const [active, setActive] = useState<string | null>(null);
  return (
    <PageLayout hero={<PageHero eyebrow="Gallery" title="Postcards from the café." subtitle="Everyday moments, plated slowly." />}>
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid auto-rows-[220px] grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {IMAGES.map((img, i) => (
            <motion.button
              key={i}
              onClick={() => setActive(img.src)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.05 }}
              className={`group relative overflow-hidden rounded-3xl ${img.span}`}
            >
              <img src={img.src} alt="" loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent opacity-0 transition group-hover:opacity-100" />
            </motion.button>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] grid place-items-center bg-charcoal/80 backdrop-blur-md p-4"
            onClick={() => setActive(null)}
          >
            <button aria-label="Close" className="absolute right-6 top-6 grid h-11 w-11 place-items-center rounded-full bg-cream/10 text-cream backdrop-blur">
              <X className="h-5 w-5" />
            </button>
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              src={active}
              alt=""
              className="max-h-[85vh] max-w-[92vw] rounded-3xl object-contain shadow-lift"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </PageLayout>
  );
}
