import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { getCategory } from "@/lib/catalog";
import { CtaBand, PageHero } from "@/components/SiteLayout";

export const Route = createFileRoute("/productos/$categoria/")({
  loader: ({ params }) => {
    const category = getCategory(params.categoria);
    if (!category) throw notFound();
    return { slug: category.slug };
  },
  head: ({ params }) => {
    const c = getCategory(params.categoria);
    const title = c ? `${c.name} — ARYANKIA GROUP` : "Categoría no encontrada";
    return {
      meta: [
        { title },
        { name: "description", content: c?.description ?? "" },
        { property: "og:title", content: title },
        { property: "og:description", content: c?.description ?? "" },
      ],
    };
  },
  component: CategoryPage,
});

function CategoryPage() {
  const { slug } = Route.useLoaderData();
  const c = getCategory(slug)!;
  return (
    <>
      <PageHero image={c.image} eyebrow={c.tags.join(" · ")} title={c.name} text={c.description} />
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <Link to="/productos" className="text-sm text-muted-foreground hover:text-primary">← Todas las categorías</Link>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {c.products.map((p) => (
            <Link key={p.slug} to="/productos/$categoria/$producto" params={{ categoria: c.slug, producto: p.slug }}
              className="group overflow-hidden rounded-xl border border-border bg-card shadow-card transition hover:-translate-y-1">
              <div className="overflow-hidden">
                <img src={p.images[0]} alt={p.name} loading="lazy" width={1024} height={768} className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h2 className="text-xl">{p.name}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{p.short}</p>
                <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">Ver producto <ArrowRight className="h-4 w-4" /></p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
