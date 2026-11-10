import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDownToLine, ArrowRight, ArrowUpFromLine } from "lucide-react";
import hero from "@/assets/hero-port.jpg";
import importImg from "@/assets/import.jpg";
import exportImg from "@/assets/export.jpg";
import { categories } from "@/lib/catalog";
import { CategoryIcon, CtaBand, PrimaryButton, Tag } from "@/components/SiteLayout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ARYANKIA GROUP — Comercio internacional B2B" },
      { name: "description", content: "Importamos, exportamos y suministramos producto a empresas en más de 30 países." },
      { property: "og:title", content: "ARYANKIA GROUP — Comercio internacional B2B" },
      { property: "og:description", content: "Importación, exportación y logística puerta a puerta." },
    ],
  }),
  component: Index,
});

const stats = [
  ["Países conectados", "30+"],
  ["Sectores de producto", String(categories.length)],
  ["Contenedores al año", "1.200+"],
  ["Respuesta a cotizaciones", "24 h"],
];

const steps = [
  ["Solicitud", "Nos cuenta producto, volumen, destino y plazos."],
  ["Sourcing y cotización", "Seleccionamos proveedores verificados y enviamos oferta."],
  ["Calidad y documentación", "Inspección, certificados, aduanas e Incoterms."],
  ["Logística y entrega", "Transporte marítimo, aéreo o terrestre hasta destino."],
];

function Index() {
  return (
    <>
      <section className="relative flex min-h-[88vh] items-center overflow-hidden">
        <img src={hero} alt="Puerto de contenedores de noche" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative mx-auto w-full max-w-7xl px-5 py-20 text-primary-foreground md:px-8">
          <p className="eyebrow">Comercio internacional B2B</p>
          <h1 className="mt-5 max-w-2xl text-5xl leading-[1.02] md:text-7xl">Conectamos su empresa con el mundo.</h1>
          <p className="mt-6 max-w-xl text-lg opacity-75">
            ARYANKIA GROUP importa, exporta y suministra producto a empresas en más de 30 países, con sourcing verificado, control de calidad y logística puerta a puerta.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <PrimaryButton to="/contacto">Solicitar cotización</PrimaryButton>
            <Link to="/productos" className="rounded-md border border-primary-foreground/30 px-7 py-3.5 font-medium hover:bg-primary-foreground/10">Ver productos</Link>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 py-10 md:grid-cols-4 md:px-8">
          {stats.map(([l, v]) => (
            <div key={l}>
              <p className="text-sm text-muted-foreground">{l}</p>
              <p className="mt-1 font-display text-4xl font-bold text-primary">{v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <p className="eyebrow">Lo que hacemos</p>
        <h2 className="mt-3 text-4xl md:text-5xl">Dos direcciones, un mismo estándar</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {[
            { to: "/importacion" as const, img: importImg, Icon: ArrowDownToLine, t: "Importación", d: "Buscamos, verificamos y traemos producto de proveedores en Asia, Oriente Medio y Europa." },
            { to: "/exportacion" as const, img: exportImg, Icon: ArrowUpFromLine, t: "Exportación", d: "Llevamos su producto a distribuidores en Europa, Latinoamérica, África y Oriente Medio." },
          ].map(({ to, img, Icon, t, d }) => (
            <Link key={to} to={to} className="group relative flex aspect-[4/3] items-end overflow-hidden rounded-xl shadow-card md:aspect-[5/4]">
              <img src={img} alt="" loading="lazy" width={1280} height={896} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-card-overlay" />
              <div className="relative p-7 text-primary-foreground">
                <Icon className="h-6 w-6 text-accent" />
                <h3 className="mt-3 text-3xl">{t}</h3>
                <p className="mt-2 max-w-md text-sm opacity-75">{d}</p>
                <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent">Saber más <ArrowRight className="h-4 w-4" /></p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Productos</p>
              <h2 className="mt-3 text-4xl md:text-5xl">Todos los sectores, un proveedor</h2>
            </div>
            <Link to="/productos" className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2 text-sm font-medium">
              Catálogo completo <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => (
              <Link key={c.slug} to="/productos/$categoria" params={{ categoria: c.slug }} className="rounded-xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-1">
                <div className="flex items-start justify-between gap-3">
                  <CategoryIcon icon={c.icon} />
                  <div className="flex flex-wrap justify-end gap-1.5">{c.tags.map((t) => <Tag key={t}>{t}</Tag>)}</div>
                </div>
                <h3 className="mt-5 text-xl">{c.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy text-navy-foreground">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8">
          <p className="eyebrow">Cómo trabajamos</p>
          <h2 className="mt-3 max-w-xl text-4xl md:text-5xl">Un solo interlocutor, de la solicitud a la entrega</h2>
          <ol className="mt-14 grid gap-8 md:grid-cols-4">
            {steps.map(([t, d], i) => (
              <li key={t} className="border-t border-navy-foreground/15 pt-6">
                <p className="font-display text-sm font-bold text-accent">0{i + 1}</p>
                <h3 className="mt-3 text-lg">{t}</h3>
                <p className="mt-2 text-sm opacity-65">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
