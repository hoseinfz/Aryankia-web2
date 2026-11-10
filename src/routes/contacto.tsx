import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Clock, Globe, Mail, MapPin } from "lucide-react";
import warehouse from "@/assets/warehouse.jpg";
import { PageHero } from "@/components/SiteLayout";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — ARYANKIA GROUP" },
      { name: "description", content: "Solicite una cotización. Respondemos en 24 horas." },
      { property: "og:title", content: "Contacto — ARYANKIA GROUP" },
      { property: "og:description", content: "Solicite una cotización. Respondemos en 24 horas." },
    ],
  }),
  component: Contacto,
});

const info = [
  { Icon: Mail, label: "Email", value: "info@aryankiagroup.com" },
  { Icon: MapPin, label: "Oficina", value: "Dubái · Madrid" },
  { Icon: Clock, label: "Respuesta", value: "En 24 horas laborables" },
  { Icon: Globe, label: "Cobertura", value: "Más de 30 países" },
];

function Contacto() {
  const [sent, setSent] = useState(false);
  const field = "w-full rounded-md border border-input bg-card px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring";
  return (
    <>
      <PageHero image={warehouse} eyebrow="Contacto" title="Solicitar cotización"
        text="Cuéntenos el producto, el volumen y el destino. Le respondemos con una cotización en 24 horas." />
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-[1fr_1.4fr] md:px-8">
        <div>
          <h2 className="text-2xl text-primary">Hablemos de su pedido</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Trabajamos por pedido y a volumen. Si no encuentra su producto en el catálogo, consúltenos: lo buscamos por usted.
          </p>
          <ul className="mt-8 space-y-5">
            {info.map(({ Icon, label, value }) => (
              <li key={label} className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-muted text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-medium uppercase tracking-wide text-muted-foreground">{label}</span>
                  <span className="mt-0.5 block text-sm font-semibold text-foreground">{value}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-border bg-card p-7 shadow-card md:p-9">
          {sent ? (
            <p className="rounded-xl bg-secondary p-6 text-primary">
              Gracias. Hemos recibido su solicitud y le responderemos en 24 horas.
            </p>
          ) : (
            <form className="grid gap-4" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <div className="grid gap-4 sm:grid-cols-2">
                <input required placeholder="Nombre y apellidos" className={field} />
                <input placeholder="Empresa" className={field} />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <input required type="email" placeholder="Email" className={field} />
                <input placeholder="Teléfono (opcional)" className={field} />
              </div>
              <input placeholder="Producto y volumen estimado" className={field} />
              <input placeholder="País de destino" className={field} />
              <textarea rows={5} placeholder="Mensaje" className={field} />
              <button className="rounded-md bg-accent px-6 py-3.5 font-semibold text-accent-foreground shadow-glow transition hover:brightness-105">
                Enviar solicitud
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
