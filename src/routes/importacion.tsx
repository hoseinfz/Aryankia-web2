import { createFileRoute } from "@tanstack/react-router";
import img from "@/assets/import.jpg";
import { ServicePage } from "@/components/ServicePage";

export const Route = createFileRoute("/importacion")({
  head: () => ({
    meta: [
      { title: "Importación — ARYANKIA GROUP" },
      { name: "description", content: "Sourcing verificado en Asia, Oriente Medio y Europa con control de calidad." },
      { property: "og:title", content: "Importación — ARYANKIA GROUP" },
      { property: "og:description", content: "Buscamos, verificamos y traemos producto a su empresa." },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="Importación"
      title="Traemos el producto que necesita, verificado."
      intro="Buscamos, verificamos y traemos producto de proveedores en Asia, Oriente Medio y Europa, gestionando todo el proceso hasta su almacén."
      image={img}
      points={[
        ["Sourcing", "Identificamos y auditamos proveedores fiables en origen."],
        ["Control de calidad", "Inspección previa al embarque y certificaciones."],
        ["Aduanas", "Despacho, aranceles y documentación en destino."],
      ]}
    />
  ),
});
