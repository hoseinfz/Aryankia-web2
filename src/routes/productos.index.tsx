import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import warehouse from "@/assets/warehouse.jpg";
import { categories } from "@/lib/catalog";
import { CategoryIcon, CtaBand, PageHero, Tag } from "@/components/SiteLayout";

export const Route = createFileRoute("/productos/")({
  head: () => ({
    meta: [
      { title: "Productos — ARYANKIA GROUP" },
      { name: "description", content: "Catálogo de productos por categorías: agroalimentario, maquinaria, construcción, químicos, textil y electrónica." },
      { property: "og:title", content: "Productos — ARYANKIA GROUP" },
      { property: "og:description", content: "Explore nuestras categorías y productos." },
    ],
  }),
  component: Productos,
});

const filters = ["Todos", "Importación", "Exportación"] as const;

function Productos() {
  const [f, setF] = useState<(typeof filters)[number]>("Todos");
  const list = categories.filter((c) => f === "Todos" || c.tags.includes(f));
  return (
    <>
      <PageHero image={warehouse} eyebrow="Catálogo" title="Productos que podemos suministrar"
        text="Trabajamos por pedido y a volumen. Si no ve su producto, consúltenos: lo buscamos por usted." />
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="flex flex-wrap gap-2">
          {filters.map((x) => (
            <button key={x} onClick={() => setF(x)}
              className={`rounded-full border px-4 py-2 text-sm font-medium ${f === x ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-muted-foreground"}`}>
              {x}
            </button>
          ))}
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((c) => (
            <div key={c.slug} className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-card">
              <div className="flex items-start justify-between gap-3">
                <CategoryIcon icon={c.icon} />
                <div className="flex flex-wrap justify-end gap-1.5">{c.tags.map((t) => <Tag key={t}>{t}</Tag>)}</div>
              </div>
              <Link to="/productos/$categoria" params={{ categoria: c.slug }} className="mt-5 text-xl font-display font-bold hover:text-primary">{c.name}</Link>
              <p className="mt-2 text-sm text-muted-foreground">{c.description}</p>
              <ul className="mt-5 space-y-1 border-t border-border pt-5">
                {c.products.map((p) => (
                  <li key={p.slug}>
                    <Link to="/productos/$categoria/$producto" params={{ categoria: c.slug, producto: p.slug }}
                      className="group flex items-center gap-2.5 py-1 text-sm hover:text-primary">
                      <Check className="h-4 w-4 text-accent" />
                      <span className="flex-1">{p.name}</span>
                      <ArrowRight className="h-3.5 w-3.5 opacity-0 transition group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
              <Link to="/productos/$categoria" params={{ categoria: c.slug }} className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-primary">
                Ver categoría <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
