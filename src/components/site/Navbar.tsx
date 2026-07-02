import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Leaf } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  const onDark = pathname === "/" && !scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={`flex items-center justify-between rounded-full border px-4 sm:px-6 py-3 transition-all duration-500 ${
            scrolled
              ? "glass border-border/60 shadow-soft"
              : onDark
                ? "border-cream/15 bg-cream/5 backdrop-blur-md"
                : "border-border/60 bg-background/60 backdrop-blur-md"
          }`}
        >
          <Link to="/" className="flex items-center gap-2 group">
            <span className={`grid h-9 w-9 place-items-center rounded-full transition ${onDark ? "bg-cream/10 text-gold" : "bg-forest text-cream"}`}>
              <Leaf className="h-4 w-4" />
            </span>
            <span className={`font-display text-xl leading-none tracking-tight ${onDark ? "text-cream" : "text-foreground"}`}>
              Cafe <span className="text-gold">Cilantro</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {LINKS.map((l) => {
              const active = pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`relative rounded-full px-4 py-2 text-sm transition ${
                    onDark ? "text-cream/85 hover:text-cream" : "text-foreground/70 hover:text-foreground"
                  } ${active ? (onDark ? "text-cream" : "text-foreground") : ""}`}
                >
                  {l.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-3 -bottom-0.5 h-[2px] rounded-full bg-gold"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <Link
              to="/menu"
              className="rounded-full bg-forest px-5 py-2.5 text-sm text-cream shadow-soft transition hover:bg-forest-deep"
            >
              View Menu
            </Link>
          </div>

          <button
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
            className={`md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border ${
              onDark ? "border-cream/20 text-cream" : "border-border text-foreground"
            }`}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-2 max-w-7xl px-4 md:hidden"
          >
            <div className="glass rounded-3xl p-3 shadow-lift">
              <div className="grid gap-1">
                {LINKS.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    className={`rounded-2xl px-4 py-3 text-sm transition ${
                      pathname === l.to
                        ? "bg-forest text-cream"
                        : "text-foreground hover:bg-secondary"
                    }`}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
