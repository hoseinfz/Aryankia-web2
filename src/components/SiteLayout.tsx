import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Menu, X, Wheat, Factory, HardHat, FlaskConical, Shirt, Zap, Cable, Sun, Mountain, Pill, Sparkles, Gem, Package } from "lucide-react";
import type { Category } from "@/lib/catalog";

const nav = [
  { to: "/", label: "Inicio" },
  { to: "/importacion", label: "Importación" },
  { to: "/exportacion", label: "Exportación" },
  { to: "/productos", label: "Productos" },
] as const;

const icons = { wheat: Wheat, factory: Factory, hardhat: HardHat, flask: FlaskConical, shirt: Shirt, zap: Zap, cable: Cable, sun: Sun, mountain: Mountain, pill: Pill, sparkles: Sparkles, gem: Gem, package: Package };

export function CategoryIcon({ icon }: { icon: Category["icon"] }) {
  const I = icons[icon];
  return (
    <span className="flex h-12 w-12 items-center justify-center rounded-md bg-muted text-primary">
      <I className="h-5 w-5" />
    </span>
  );
}

export function Tag({ children }: { children: string }) {
  return <span className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-primary">{children}</span>;
}

export function PrimaryButton({ to, children }: { to: "/contacto" | "/productos"; children: string }) {
  return (
    <Link to={to} className="inline-flex items-center gap-2 rounded-md bg-accent px-7 py-3.5 font-semibold text-accent-foreground shadow-glow transition hover:brightness-105">
      {children} <ArrowRight className="h-4 w-4" />
    </Link>
  );
}

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <span className="flex h-9 w-9 items-center justify-center rounded-md bg-gradient-cta font-display text-sm font-bold text-primary-foreground">AG</span>
      <span className="leading-none">
        <span className="block font-display text-base font-bold text-foreground">ARYANKIA</span>
        <span className="block text-[10px] font-semibold tracking-[0.3em] text-muted-foreground">GROUP</span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState("ES");
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <Logo />
        <nav className="hidden gap-7 lg:flex">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: n.to === "/" }}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground font-medium" }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <div className="flex rounded-full border border-border bg-card p-0.5">
            {["ES", "EN", "فا"].map((l) => (
              <button key={l} onClick={() => setLang(l)}
                className={`rounded-full px-3 py-1 text-xs font-medium ${lang === l ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}>
                {l}
              </button>
            ))}
          </div>
          <Link to="/contacto" className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:brightness-110">
            Solicitar cotización
          </Link>
        </div>
        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menú">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col border-t border-border bg-background px-5 py-3 lg:hidden">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-2.5 text-sm font-medium">{n.label}</Link>
          ))}
          <Link to="/contacto" onClick={() => setOpen(false)} className="mt-2 rounded-md bg-primary px-4 py-2.5 text-center text-sm font-medium text-primary-foreground">
            Solicitar cotización
          </Link>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3 md:px-8">
        <div>
          <p className="font-display text-lg font-bold">ARYANKIA GROUP</p>
          <p className="mt-3 max-w-xs text-sm opacity-70">Comercio internacional B2B. Importación, exportación y suministro a empresas en más de 30 países.</p>
        </div>
        <div className="flex flex-col gap-2 text-sm opacity-80">
          {nav.map((n) => (<Link key={n.to} to={n.to} className="hover:text-accent">{n.label}</Link>))}
          <Link to="/contacto" className="hover:text-accent">Contacto</Link>
        </div>
        <p className="text-sm opacity-60 md:text-right">© {new Date().getFullYear()} ARYANKIA GROUP</p>
      </div>
    </footer>
  );
}

export function CtaBand() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
      <div className="flex flex-col gap-8 rounded-2xl bg-gradient-cta px-8 py-14 text-primary-foreground md:flex-row md:items-center md:justify-between md:px-14">
        <div>
          <h2 className="text-3xl md:text-4xl">¿Tiene un pedido en mente?</h2>
          <p className="mt-3 max-w-lg opacity-75">Cuéntenos el producto, el volumen y el destino. Le respondemos con una cotización en 24 horas.</p>
        </div>
        <div className="shrink-0"><PrimaryButton to="/contacto">Solicitar cotización</PrimaryButton></div>
      </div>
    </section>
  );
}

export function PageHero({ image, eyebrow, title, text }: { image: string; eyebrow: string; title: string; text: string }) {
  return (
    <section className="relative overflow-hidden">
      <img src={image} alt="" width={1920} height={832} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="relative mx-auto max-w-7xl px-5 py-24 text-primary-foreground md:px-8 md:py-28">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl leading-[1.05] md:text-6xl">{title}</h1>
        <p className="mt-5 max-w-lg text-lg opacity-80">{text}</p>
      </div>
    </section>
  );
}
