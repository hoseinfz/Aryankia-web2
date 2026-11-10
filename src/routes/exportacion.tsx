import { createFileRoute } from "@tanstack/react-router";
import img from "@/assets/export.jpg";
import { ServicePage } from "@/components/ServicePage";

export const Route = createFileRoute("/exportacion")({
  head: () => ({
    meta: [
      { title: "Exportación — ARYANKIA GROUP" },
      { name: "description", content: "Llevamos su producto a distribuidores en Europa, Latinoamérica, África y Oriente Medio." },
      { property: "og:title", content: "Exportación — ARYANKIA GROUP" },
      { property: "og:description", content: "Abrimos nuevos mercados para su producto." },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="Exportación"
      title="Su producto, en nuevos mercados."
      intro="Llevamos su producto a distribuidores en Europa, Latinoamérica, África y Oriente Medio, con una red comercial y logística propia."
      image={img}
      points={[
        ["Red de distribuidores", "Contactos comerciales activos en más de 30 países."],
        ["Logística", "Transporte marítimo, aéreo y terrestre puerta a puerta."],
        ["Documentación", "Certificados de origen, Incoterms y cumplimiento normativo."],
      ]}
    />
  ),
});
