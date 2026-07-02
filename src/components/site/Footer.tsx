import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, Phone, Mail, Leaf } from "lucide-react";
import { CONTACT, ORDER_LINKS } from "@/lib/menu-data";

export function Footer() {
  return (
    <footer className="relative mt-24 bg-forest-deep text-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-cream/10 text-gold">
              <Leaf className="h-4 w-4" />
            </span>
            <span className="font-display text-2xl">Cafe <span className="text-gold">Cilantro</span></span>
          </div>
          <p className="mt-4 text-sm text-cream/70">
            Every sip. Every bite. Every moment. Handcrafted café experiences in Chinchwad.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-cream/60">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              { to: "/menu", label: "Menu" },
              { to: "/gallery", label: "Gallery" },
              { to: "/about", label: "About" },
              { to: "/reviews", label: "Reviews" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-cream/80 transition hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-cream/60">Opening Hours</h4>
          <ul className="mt-4 space-y-2 text-sm text-cream/80">
            {CONTACT.hours.map((h) => (
              <li key={h.d} className="flex justify-between gap-4">
                <span>{h.d}</span><span className="text-cream/60">{h.t}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-cream/60">Visit / Order</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2 text-cream/80"><MapPin className="h-4 w-4 mt-0.5 text-gold" />{CONTACT.address}</li>
            <li><a href={`tel:${CONTACT.phoneRaw}`} className="flex items-center gap-2 text-cream/80 hover:text-gold"><Phone className="h-4 w-4 text-gold" />{CONTACT.phone}</a></li>
            <li><a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 text-cream/80 hover:text-gold"><Mail className="h-4 w-4 text-gold" />{CONTACT.email}</a></li>
            <li><a href={CONTACT.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-cream/80 hover:text-gold"><Instagram className="h-4 w-4 text-gold" />@cafecilantro</a></li>
          </ul>
          <div className="mt-5 flex flex-wrap gap-2">
            <a href={ORDER_LINKS.swiggy} target="_blank" rel="noreferrer" className="rounded-full bg-[#FC8019] px-4 py-2 text-xs font-medium text-white transition hover:opacity-90">Order on Swiggy</a>
            <a href={ORDER_LINKS.zomato} target="_blank" rel="noreferrer" className="rounded-full bg-[#E23744] px-4 py-2 text-xs font-medium text-white transition hover:opacity-90">Order on Zomato</a>
          </div>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-cream/50 md:flex-row">
          <p>© {new Date().getFullYear()} Cafe Cilantro. All rights reserved.</p>
          <p>Crafted with care in Chinchwad · Pune</p>
        </div>
      </div>
    </footer>
  );
}
