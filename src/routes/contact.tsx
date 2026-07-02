import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Instagram, Clock, Send } from "lucide-react";
import { PageLayout, PageHero } from "@/components/site/PageLayout";
import { OrderButtons } from "@/components/site/OrderButtons";
import { CONTACT } from "@/lib/menu-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Cafe Cilantro" },
      { name: "description", content: "Visit, call or message Cafe Cilantro in Chinchwad. Address, hours and directions." },
      { property: "og:title", content: "Contact — Cafe Cilantro" },
      { property: "og:description", content: "Visit us at Sector 18, Chinchwad." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <PageLayout hero={<PageHero eyebrow="Say hello" title="Come, sit, stay awhile." subtitle="We'd love to hear from you — for a booking, a question, or just to say hi." />}>
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
            <h3 className="font-display text-2xl text-foreground">Reach us</h3>
            <ul className="mt-6 space-y-5 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-1 h-4 w-4 text-forest" />
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Address</p>
                  <p className="mt-1 text-foreground">{CONTACT.address}</p>
                </div>
              </li>
              <li>
                <a href={`tel:${CONTACT.phoneRaw}`} className="flex gap-3">
                  <Phone className="mt-1 h-4 w-4 text-forest" />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">Phone</p>
                    <p className="mt-1 text-foreground">{CONTACT.phone}</p>
                  </div>
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="flex gap-3">
                  <Mail className="mt-1 h-4 w-4 text-forest" />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">Email</p>
                    <p className="mt-1 text-foreground">{CONTACT.email}</p>
                  </div>
                </a>
              </li>
              <li>
                <a href={CONTACT.instagram} target="_blank" rel="noreferrer" className="flex gap-3">
                  <Instagram className="mt-1 h-4 w-4 text-forest" />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">Instagram</p>
                    <p className="mt-1 text-foreground">@cafecilantro</p>
                  </div>
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-1 h-4 w-4 text-forest" />
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Hours</p>
                  <ul className="mt-1 space-y-0.5 text-foreground/90">
                    {CONTACT.hours.map((h) => (
                      <li key={h.d} className="flex justify-between"><span>{h.d}</span><span className="text-muted-foreground">{h.t}</span></li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
            <div className="mt-6 border-t border-border pt-6">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Order online</p>
              <div className="mt-3"><OrderButtons /></div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="overflow-hidden rounded-3xl border border-border shadow-soft">
            <iframe
              title="Cafe Cilantro location"
              src="https://www.google.com/maps?q=Chinchwad%20Sector%2018%20Pune&output=embed"
              className="h-80 w-full"
              loading="lazy"
            />
          </div>

          <motion.form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-6 rounded-3xl border border-border bg-card p-8"
          >
            <h3 className="font-display text-2xl text-foreground">Send us a message</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field label="Your name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" className="sm:col-span-2" />
              <Field label="Message" name="message" textarea required className="sm:col-span-2" />
            </div>
            <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm text-cream transition hover:bg-forest-deep">
              <Send className="h-4 w-4" /> {sent ? "Sent — thank you!" : "Send message"}
            </button>
          </motion.form>
        </div>
      </section>
    </PageLayout>
  );
}

function Field({ label, name, type = "text", textarea, required, className = "" }: {
  label: string; name: string; type?: string; textarea?: boolean; required?: boolean; className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
      {textarea ? (
        <textarea name={name} required={required} rows={4} className="mt-2 w-full rounded-2xl border border-border bg-secondary/40 px-4 py-3 text-sm outline-none transition focus:border-forest focus:bg-card" />
      ) : (
        <input name={name} type={type} required={required} className="mt-2 w-full rounded-full border border-border bg-secondary/40 px-4 py-3 text-sm outline-none transition focus:border-forest focus:bg-card" />
      )}
    </label>
  );
}
