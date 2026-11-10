import { Check } from "lucide-react";
import { CtaBand, PageHero } from "@/components/SiteLayout";

export function ServicePage({ eyebrow, title, intro, image, points }: { eyebrow: string; title: string; intro: string; image: string; points: [string, string][] }) {
  return (
    <>
      <PageHero image={image} eyebrow={eyebrow} title={title} text={intro} />
      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-20 md:grid-cols-3 md:px-8">
        {points.map(([t, d]) => (
          <div key={t} className="rounded-xl border border-border bg-card p-6 shadow-card">
            <span className="flex h-12 w-12 items-center justify-center rounded-md bg-muted text-primary"><Check className="h-5 w-5" /></span>
            <h3 className="mt-5 text-xl">{t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{d}</p>
          </div>
        ))}
      </section>
      <CtaBand />
    </>
  );
}
