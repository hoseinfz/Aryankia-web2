import industrial from "@/assets/cat-industrial.jpg";
import construccion from "@/assets/cat-construccion.jpg";
import quimicos from "@/assets/cat-quimicos.jpg";
import electricidad from "@/assets/cat-electricidad.jpg";
import cable from "@/assets/cat-cable.jpg";
import solar from "@/assets/cat-solar.jpg";
import agro from "@/assets/cat-agro.jpg";
import piedra from "@/assets/cat-piedra.jpg";
import medico from "@/assets/cat-medico.jpg";
import textil from "@/assets/cat-textil.jpg";
import cosmetica from "@/assets/cat-cosmetica.jpg";
import lujo from "@/assets/cat-lujo.jpg";
import consumo from "@/assets/cat-consumo.jpg";
import importImg from "@/assets/import.jpg";
import exportImg from "@/assets/export.jpg";
import heroImg from "@/assets/hero-port.jpg";

export type Product = {
  slug: string;
  name: string;
  short: string;
  description: string;
  specs: { label: string; value: string }[];
  images: string[];
};

export type Category = {
  slug: string;
  name: string;
  description: string;
  image: string;
  icon:
    | "factory"
    | "hardhat"
    | "flask"
    | "zap"
    | "cable"
    | "sun"
    | "wheat"
    | "mountain"
    | "pill"
    | "shirt"
    | "sparkles"
    | "gem"
    | "package";
  tags: ("Importación" | "Exportación")[];
  products: Product[];
};

const gallery = (main: string) => [main, importImg, exportImg, heroImg];

export const categories: Category[] = [
  {
    slug: "equipos-industriales",
    icon: "factory",
    name: "Equipos industriales",
    description: "Maquinaria y equipos para producción, envasado y manufactura.",
    image: industrial,
    tags: ["Importación", "Exportación"],
    products: [
      {
        slug: "centro-mecanizado-cnc",
        name: "Centro de mecanizado CNC",
        short: "Fresadoras verticales de 3 y 5 ejes.",
        description:
          "Centros de mecanizado CNC de fabricantes verificados, con instalación, puesta en marcha y formación del operario en destino.",
        specs: [
          { label: "Ejes", value: "3 / 5" },
          { label: "Recorrido X", value: "1.100 mm" },
          { label: "Garantía", value: "24 meses" },
          { label: "Plazo", value: "8–12 semanas" },
        ],
        images: gallery(industrial),
      },
      {
        slug: "envasadora-automatica",
        name: "Envasadora automática",
        short: "Línea de envasado y retractilado para alimentación.",
        description:
          "Líneas de envasado automático configurables para producto sólido o líquido, con certificación CE y repuestos disponibles.",
        specs: [
          { label: "Capacidad", value: "Hasta 60 uds/min" },
          { label: "Certificación", value: "CE" },
          { label: "Alimentación", value: "380 V trifásica" },
          { label: "Plazo", value: "6–10 semanas" },
        ],
        images: gallery(industrial),
      },
    ],
  },
  {
    slug: "materiales-construccion",
    icon: "hardhat",
    name: "Materiales de construcción",
    description: "Suministro a gran escala para proyectos y distribuidores.",
    image: construccion,
    tags: ["Exportación"],
    products: [
      {
        slug: "ceramica-porcelanica",
        name: "Cerámica porcelánica",
        short: "Pavimento y revestimiento en múltiples formatos.",
        description:
          "Baldosa porcelánica rectificada de fabricación europea para obra residencial y contract. Muestras disponibles bajo pedido.",
        specs: [
          { label: "Formatos", value: "60x60, 60x120, 120x120" },
          { label: "Acabado", value: "Mate, pulido" },
          { label: "Pedido mínimo", value: "1 palé" },
          { label: "Incoterms", value: "EXW, FOB" },
        ],
        images: gallery(construccion),
      },
      {
        slug: "acero-corrugado",
        name: "Acero corrugado",
        short: "Barras de acero B500S para hormigón armado.",
        description:
          "Barras corrugadas certificadas según norma europea, en diámetros de 8 a 32 mm, suministradas en paquetes de 2 toneladas.",
        specs: [
          { label: "Calidad", value: "B500S" },
          { label: "Diámetros", value: "8–32 mm" },
          { label: "Longitud", value: "12 m" },
          { label: "Pedido mínimo", value: "25 t" },
        ],
        images: gallery(construccion),
      },
    ],
  },
  {
    slug: "quimicos-petroquimicos",
    icon: "flask",
    name: "Químicos y petroquímicos",
    description: "Productos certificados con documentación técnica y de seguridad.",
    image: quimicos,
    tags: ["Importación"],
    products: [
      {
        slug: "polipropileno",
        name: "Polipropileno (PP)",
        short: "Granza de polipropileno para inyección y extrusión.",
        description:
          "Polímeros de grado industrial de productores verificados, con ficha técnica, hoja de seguridad y certificado de análisis por lote.",
        specs: [
          { label: "Grado", value: "Homopolímero / copolímero" },
          { label: "Formato", value: "Sacos 25 kg, big bag" },
          { label: "Pedido mínimo", value: "1 contenedor 40'" },
          { label: "Incoterms", value: "CFR, CIF" },
        ],
        images: gallery(quimicos),
      },
      {
        slug: "fertilizantes",
        name: "Fertilizantes",
        short: "Urea, NPK y fertilizantes solubles.",
        description:
          "Fertilizantes granulados y solubles para distribución agrícola, con certificación de composición y transporte a granel o ensacado.",
        specs: [
          { label: "Tipos", value: "Urea 46 %, NPK" },
          { label: "Formato", value: "Granel, sacos 50 kg" },
          { label: "Pedido mínimo", value: "200 t" },
          { label: "Incoterms", value: "FOB, CFR" },
        ],
        images: gallery(quimicos),
      },
    ],
  },
  {
    slug: "electricidad-telecom",
    icon: "zap",
    name: "Electricidad y telecom",
    description: "Equipos eléctricos, transformadores e infraestructura de telecomunicaciones.",
    image: electricidad,
    tags: ["Importación", "Exportación"],
    products: [
      {
        slug: "transformadores-potencia",
        name: "Transformadores de potencia",
        short: "Transformadores de distribución hasta 40 MVA.",
        description:
          "Transformadores en baño de aceite o secos, fabricados bajo norma IEC, con protocolo de ensayos y puesta en servicio supervisada.",
        specs: [
          { label: "Potencia", value: "Hasta 40 MVA" },
          { label: "Tensión", value: "Hasta 66 kV" },
          { label: "Norma", value: "IEC 60076" },
          { label: "Plazo", value: "10–16 semanas" },
        ],
        images: gallery(electricidad),
      },
      {
        slug: "antenas-telecom",
        name: "Antenas y torres telecom",
        short: "Torres autosoportadas y antenas para operadores.",
        description:
          "Torres de telecomunicaciones galvanizadas en caliente y antenas de microondas y celulares, con cálculo estructural incluido.",
        specs: [
          { label: "Altura", value: "20–80 m" },
          { label: "Acabado", value: "Galvanizado en caliente" },
          { label: "Norma", value: "TIA-222" },
          { label: "Plazo", value: "8–14 semanas" },
        ],
        images: gallery(electricidad),
      },
    ],
  },
  {
    slug: "hilo-y-cable",
    icon: "cable",
    name: "Hilo y cable",
    description: "Cable eléctrico, de cobre y fibra óptica para obra e industria.",
    image: cable,
    tags: ["Importación", "Exportación"],
    products: [
      {
        slug: "cable-media-tension",
        name: "Cable de media tensión",
        short: "Cable XLPE de 12 a 36 kV en bobina.",
        description:
          "Cable de media tensión con aislamiento XLPE y pantalla de cobre, suministrado en bobinas de madera con certificado de ensayo.",
        specs: [
          { label: "Tensión", value: "12–36 kV" },
          { label: "Sección", value: "50–630 mm²" },
          { label: "Norma", value: "IEC 60502" },
          { label: "Pedido mínimo", value: "5 km" },
        ],
        images: gallery(cable),
      },
      {
        slug: "fibra-optica",
        name: "Cable de fibra óptica",
        short: "Fibra monomodo para exterior e interior.",
        description:
          "Cable de fibra óptica monomodo y multimodo, armado o dieléctrico, para tendido aéreo, canalización e interior de edificio.",
        specs: [
          { label: "Fibras", value: "4–288" },
          { label: "Tipo", value: "Monomodo G.652.D" },
          { label: "Formato", value: "Bobinas 2–4 km" },
          { label: "Pedido mínimo", value: "10 km" },
        ],
        images: gallery(cable),
      },
    ],
  },
  {
    slug: "paneles-solares",
    icon: "sun",
    name: "Paneles solares",
    description: "Módulos fotovoltaicos, inversores y estructuras para proyectos solares.",
    image: solar,
    tags: ["Importación"],
    products: [
      {
        slug: "modulo-fotovoltaico",
        name: "Módulo fotovoltaico 550 W",
        short: "Paneles monocristalinos de alta eficiencia.",
        description:
          "Módulos monocristalinos de 550 W con garantía de producto de 15 años y de rendimiento de 30 años, certificados IEC y TÜV.",
        specs: [
          { label: "Potencia", value: "550 Wp" },
          { label: "Eficiencia", value: "21,3 %" },
          { label: "Certificación", value: "IEC, TÜV" },
          { label: "Pedido mínimo", value: "1 contenedor 40'" },
        ],
        images: gallery(solar),
      },
      {
        slug: "inversor-string",
        name: "Inversor string",
        short: "Inversores trifásicos de 50 a 250 kW.",
        description:
          "Inversores de red trifásicos para plantas comerciales e industriales, con monitorización remota y soporte técnico del fabricante.",
        specs: [
          { label: "Potencia", value: "50–250 kW" },
          { label: "Eficiencia", value: "98,8 %" },
          { label: "Protección", value: "IP66" },
          { label: "Garantía", value: "10 años" },
        ],
        images: gallery(solar),
      },
    ],
  },
  {
    slug: "agricultura-alimentacion",
    icon: "wheat",
    name: "Agricultura y alimentación",
    description: "Materias primas y alimentos procesados con trazabilidad completa.",
    image: agro,
    tags: ["Importación", "Exportación"],
    products: [
      {
        slug: "cafe-arabica",
        name: "Café arábica verde",
        short: "Grano verde de origen Brasil y Colombia, sacos de 60 kg.",
        description:
          "Café arábica verde seleccionado de fincas certificadas. Suministramos por contenedor completo o parcial, con análisis de taza, certificado de origen y control fitosanitario incluido.",
        specs: [
          { label: "Origen", value: "Brasil, Colombia" },
          { label: "Formato", value: "Sacos de yute 60 kg" },
          { label: "Pedido mínimo", value: "1 contenedor 20'" },
          { label: "Incoterms", value: "FOB, CIF, DAP" },
        ],
        images: gallery(agro),
      },
      {
        slug: "aceite-oliva",
        name: "Aceite de oliva virgen extra",
        short: "AOVE español en botella, bag-in-box o granel.",
        description:
          "Aceite de oliva virgen extra de primera prensada en frío. Disponible con marca propia o marca blanca, con documentación para exportación a más de 30 países.",
        specs: [
          { label: "Origen", value: "España" },
          { label: "Formato", value: "1 L, 5 L, IBC 1.000 L" },
          { label: "Acidez", value: "< 0,3 %" },
          { label: "Incoterms", value: "EXW, FOB, CIF" },
        ],
        images: gallery(agro),
      },
    ],
  },
  {
    slug: "piedra-minerales",
    icon: "mountain",
    name: "Piedra y minerales",
    description: "Mármol, granito y minerales industriales en bloque, tabla o granel.",
    image: piedra,
    tags: ["Exportación"],
    products: [
      {
        slug: "marmol-tabla",
        name: "Mármol en tabla",
        short: "Tablas pulidas de 2 y 3 cm en múltiples colores.",
        description:
          "Tablas de mármol y travertino pulidas o apomazadas, seleccionadas por lote de cantera, con embalaje en cajas de madera para exportación.",
        specs: [
          { label: "Espesor", value: "2 / 3 cm" },
          { label: "Acabado", value: "Pulido, apomazado" },
          { label: "Pedido mínimo", value: "1 contenedor 20'" },
          { label: "Incoterms", value: "EXW, FOB" },
        ],
        images: gallery(piedra),
      },
      {
        slug: "granito-bloque",
        name: "Granito en bloque",
        short: "Bloques de granito para transformadores.",
        description:
          "Bloques de granito de primera calidad para fábricas de transformación, con selección en cantera y carga directa a contenedor o granelero.",
        specs: [
          { label: "Formato", value: "Bloque 8–30 t" },
          { label: "Colores", value: "Gris, rosa, negro" },
          { label: "Pedido mínimo", value: "300 t" },
          { label: "Incoterms", value: "FOB" },
        ],
        images: gallery(piedra),
      },
    ],
  },
  {
    slug: "medico-farmaceutico",
    icon: "pill",
    name: "Médico y farmacéutico",
    description: "Producto sanitario y farmacéutico con registro y cadena de frío.",
    image: medico,
    tags: ["Importación", "Exportación"],
    products: [
      {
        slug: "material-sanitario",
        name: "Material sanitario",
        short: "Guantes, jeringuillas y consumible hospitalario.",
        description:
          "Consumible sanitario con marcado CE y registro sanitario, suministrado a hospitales y distribuidores con trazabilidad de lote completa.",
        specs: [
          { label: "Certificación", value: "CE, ISO 13485" },
          { label: "Productos", value: "Guantes, jeringuillas, gasas" },
          { label: "Pedido mínimo", value: "1 contenedor 20'" },
          { label: "Plazo", value: "4–8 semanas" },
        ],
        images: gallery(medico),
      },
      {
        slug: "medicamentos-genericos",
        name: "Medicamentos genéricos",
        short: "Genéricos con registro para distribución farmacéutica.",
        description:
          "Medicamentos genéricos de plantas certificadas GMP, con dossier de registro, certificado de análisis y transporte con cadena de frío cuando se requiere.",
        specs: [
          { label: "Certificación", value: "GMP, WHO" },
          { label: "Formas", value: "Comprimidos, cápsulas, viales" },
          { label: "Documentación", value: "Dossier CTD" },
          { label: "Plazo", value: "8–12 semanas" },
        ],
        images: gallery(medico),
      },
    ],
  },
  {
    slug: "textil-confeccion",
    icon: "shirt",
    name: "Textil y confección",
    description: "Tejidos, hilaturas y producto terminado bajo marca propia.",
    image: textil,
    tags: ["Importación", "Exportación"],
    products: [
      {
        slug: "tejido-algodon",
        name: "Tejido de algodón",
        short: "Popelín y sarga 100 % algodón en rollo.",
        description:
          "Tejidos de algodón en más de 40 colores de carta, con certificado OEKO-TEX. Ideal para confección de camisería y ropa laboral.",
        specs: [
          { label: "Composición", value: "100 % algodón" },
          { label: "Gramaje", value: "110–280 g/m²" },
          { label: "Ancho", value: "150 cm" },
          { label: "Pedido mínimo", value: "1.000 m" },
        ],
        images: gallery(textil),
      },
      {
        slug: "ropa-laboral",
        name: "Ropa laboral",
        short: "Uniformes y EPIs con marca propia.",
        description:
          "Confección de uniformes, chalecos de alta visibilidad y ropa de trabajo personalizada con su logotipo.",
        specs: [
          { label: "Personalización", value: "Bordado, serigrafía" },
          { label: "Tallas", value: "XS–4XL" },
          { label: "Pedido mínimo", value: "500 uds" },
          { label: "Plazo", value: "4–6 semanas" },
        ],
        images: gallery(textil),
      },
    ],
  },
  {
    slug: "cosmetica-salud",
    icon: "sparkles",
    name: "Cosmética y salud",
    description: "Cosmética, perfumería y cuidado personal con marca propia o blanca.",
    image: cosmetica,
    tags: ["Importación", "Exportación"],
    products: [
      {
        slug: "cremas-faciales",
        name: "Cremas y sérums",
        short: "Línea facial con marca propia o blanca.",
        description:
          "Formulación y fabricación de cremas, sérums y lociones con registro CPNP, disponibles con su marca desde pequeñas series.",
        specs: [
          { label: "Registro", value: "CPNP (UE)" },
          { label: "Formatos", value: "30–200 ml" },
          { label: "Pedido mínimo", value: "5.000 uds" },
          { label: "Plazo", value: "6–8 semanas" },
        ],
        images: gallery(cosmetica),
      },
      {
        slug: "perfumeria",
        name: "Perfumería",
        short: "Perfumes y aguas de colonia al por mayor.",
        description:
          "Perfumería de marcas internacionales y fabricación de fragancias propias, con documentación IFRA y logística de mercancías ADR.",
        specs: [
          { label: "Certificación", value: "IFRA" },
          { label: "Formatos", value: "50–100 ml" },
          { label: "Pedido mínimo", value: "2.000 uds" },
          { label: "Transporte", value: "ADR" },
        ],
        images: gallery(cosmetica),
      },
    ],
  },
  {
    slug: "lujo-decoracion",
    icon: "gem",
    name: "Lujo y decoración",
    description: "Piezas decorativas, iluminación y objetos de lujo para proyectos.",
    image: lujo,
    tags: ["Exportación"],
    products: [
      {
        slug: "lamparas-cristal",
        name: "Lámparas de cristal",
        short: "Arañas y lámparas decorativas a medida.",
        description:
          "Lámparas de araña y aplique de cristal tallado, fabricadas a medida para hoteles y residencias, con embalaje reforzado y seguro de transporte.",
        specs: [
          { label: "Material", value: "Cristal, latón" },
          { label: "Medida", value: "A medida" },
          { label: "Pedido mínimo", value: "10 uds" },
          { label: "Plazo", value: "8–12 semanas" },
        ],
        images: gallery(lujo),
      },
      {
        slug: "objetos-decorativos",
        name: "Objetos decorativos",
        short: "Jarrones, esculturas y centro de mesa premium.",
        description:
          "Colecciones decorativas en bronce, cristal y porcelana para interioristas y tiendas de lujo, con producción por serie limitada.",
        specs: [
          { label: "Materiales", value: "Bronce, cristal, porcelana" },
          { label: "Producción", value: "Serie limitada" },
          { label: "Pedido mínimo", value: "50 uds" },
          { label: "Plazo", value: "6–10 semanas" },
        ],
        images: gallery(lujo),
      },
    ],
  },
  {
    slug: "bienes-consumo",
    icon: "package",
    name: "Bienes de consumo",
    description: "Producto de hogar y gran consumo para distribuidores y retail.",
    image: consumo,
    tags: ["Importación", "Exportación"],
    products: [
      {
        slug: "pequeno-electrodomestico",
        name: "Pequeño electrodoméstico",
        short: "Cafeteras, batidoras y robots de cocina.",
        description:
          "Pequeño electrodoméstico de fabricantes verificados, con certificación CE, embalaje de retail y servicio postventa de recambios.",
        specs: [
          { label: "Certificación", value: "CE, RoHS" },
          { label: "Gama", value: "Cocina y hogar" },
          { label: "Pedido mínimo", value: "1 contenedor 40'" },
          { label: "Plazo", value: "6–8 semanas" },
        ],
        images: gallery(consumo),
      },
      {
        slug: "productos-hogar",
        name: "Productos de hogar",
        short: "Menaje, limpieza y papel para gran consumo.",
        description:
          "Surtido de productos de hogar y limpieza para cadenas de distribución, con opción de marca blanca y consolidación de carga mixta.",
        specs: [
          { label: "Gama", value: "Menaje, limpieza, papel" },
          { label: "Marca", value: "Propia o blanca" },
          { label: "Pedido mínimo", value: "1 contenedor mixto" },
          { label: "Plazo", value: "4–6 semanas" },
        ],
        images: gallery(consumo),
      },
    ],
  },
];

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);
