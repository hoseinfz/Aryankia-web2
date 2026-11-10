import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { getCategory } from "@/lib/catalog";
import { CtaBand } from "@/components/SiteLayout";

const find = (cat: string, prod: string) => {
  const c = getCategory(cat);
  const p = c?.products.find((x) => x.slug === prod);
  return c && p ? { c, p } : null;
};

export const Route = createFileRoute("/productos/$categoria/$producto")({
  loader: ({ params }) => {
    if (!find(params.categoria, params.producto)) throw notFound();
    return params;
  },
  head: ({ params }) => {
    const r = find(params.categoria, params.producto);
    const title = r ? `${r.p.name} — ARYANKIA GROUP` : "Producto no encontrado";
    return {
      meta: [
        { title },
        { name: "description", content: r?.p.short ?? "" },
        { property: "og:title", content: title },
        { property: "og:description", content: r?.p.short ?? "" },
      ],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const params = Route.useLoaderData();
  const { c, p } = find(params.categoria, params.producto)!;
  const [active, setActive] = useState(0);
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <nav className="text-sm text-muted-foreground">
          <Link to="/productos" className="hover:text-primary">Productos</Link>
          {" / "}
          <Link to="/productos/$categoria" params={{ categoria: c.slug }} className="hover:text-primary">{c.name}</Link>
        </nav>
        <div className="mt-8 grid gap-10 md:grid-cols-2">
          <div>
            <img src={p.images[active]} alt={p.name} width={1024} height={768} className="aspect-[4/3] w-full rounded-xl object-cover" />
            <div className="mt-3 grid grid-cols-4 gap-3">
              {p.images.map((img, i) => (
                <button key={i} onClick={() => setActive(i)} aria-label={`Imagen ${i + 1}`} className={`overflow-hidden rounded-md border-2 ${i === active ? "border-accent" : "border-transparent"}`}>
                  <img src={img} alt="" loading="lazy" className="aspect-square w-full object-cover" />
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="eyebrow">{c.name}</p>
            <h1 className="mt-3 text-4xl text-primary md:text-5xl">{p.name}</h1>
            <p className="mt-5 text-lg text-muted-foreground">{p.description}</p>
            <dl className="mt-8 divide-y divide-border rounded-xl border border-border bg-card shadow-card">
              {p.specs.map((s) => (
                <div key={s.label} className="flex justify-between gap-4 px-5 py-3 text-sm">
                  <dt className="text-muted-foreground">{s.label}</dt>
                  <dd className="text-right font-medium text-primary">{s.value}</dd>
                </div>
              ))}
            </dl>
            <Link to="/contacto" className="mt-8 inline-flex rounded-md bg-accent px-7 py-3.5 font-semibold text-accent-foreground shadow-glow">
              Solicitar cotización
            </Link>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
