export const SITE = {
  name: "SpeedNet",
  tagline: "Velocidad que conecta al futuro",
  phone: "0982771268",
  phoneDisplay: "098 277 1268",
  email: "speednet5477@gmail.com",
  whatsapp: "593982771268",
  whatsappMessage:
    "Hola, me interesa conocer los planes de SpeedNet. ¿Me pueden dar más información?",
} as const;

export const WHATSAPP_URL = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappMessage)}`;
export const MAILTO_URL = `mailto:${SITE.email}`;

export type Plan = {
  id: string;
  name: string;
  emoji: string;
  price: number;
  speed: number;
  description: string;
  idealFor: string[];
  features: string[];
  highlight?: string;
  featured?: boolean;
};

export const PLAN_PERKS = [
  "Primer mes GRATIS",
  "Instalación GRATIS",
  "Fibra óptica 100% real",
  "Conexión estable y de alta velocidad",
  "Soporte técnico profesional",
  "Navegación ilimitada",
  "Baja latencia para juegos y videollamadas",
  "Ideal para hogares y pequeños negocios",
] as const;

export const PLANS: Plan[] = [
  {
    id: "estudiantil",
    name: "Plan Estudiantil",
    emoji: "📚",
    price: 15,
    speed: 200,
    description:
      "La mejor opción para estudiar, trabajar y disfrutar del internet sin gastar de más.",
    idealFor: [
      "Clases virtuales",
      "Redes sociales",
      "Videollamadas",
      "Streaming en HD",
      "Hogares con pocos dispositivos",
    ],
    features: [
      "200 Mbps de fibra óptica",
      "Primer mes GRATIS",
      "Instalación GRATIS",
      "Internet ilimitado",
      "Soporte técnico",
    ],
  },
  {
    id: "estrella",
    name: "Plan Estrella",
    emoji: "⭐",
    price: 20,
    speed: 400,
    description:
      "Más velocidad para toda la familia. Disfruta de varios dispositivos conectados al mismo tiempo sin perder rendimiento.",
    idealFor: [
      "Familias",
      "Netflix y YouTube en 4K",
      "Teletrabajo",
      "Videojuegos",
      "Múltiples dispositivos",
    ],
    features: [
      "400 Mbps",
      "Router Wi-Fi 6",
      "Primer mes GRATIS",
      "Instalación GRATIS",
      "Internet ilimitado",
      "Soporte técnico",
    ],
  },
  {
    id: "pro-plus",
    name: "Plan PRO+",
    emoji: "🏆",
    price: 25,
    speed: 500,
    description: "Más velocidad, entretenimiento y seguridad para tu hogar.",
    idealFor: [
      "Familias numerosas",
      "Casas inteligentes",
      "Streaming 4K",
      "Home Office",
      "Videojuegos",
    ],
    features: [
      "500 Mbps de fibra óptica",
      "TV Digital (100+ canales)",
      "1 Cámara Wi-Fi de seguridad 360° incluida",
      "Router Wi-Fi 6",
      "Primer mes GRATIS",
      "Instalación GRATIS",
      "Soporte técnico",
    ],
    featured: true,
    highlight: "El más elegido",
  },
  {
    id: "ultra",
    name: "Plan Ultra",
    emoji: "👑",
    price: 30,
    speed: 600,
    description:
      "Diseñado para quienes buscan la máxima velocidad, seguridad y atención preferencial.",
    idealFor: [
      "Gamers",
      "Creadores de contenido",
      "Familias grandes",
      "Negocios",
      "Hogares inteligentes",
    ],
    features: [
      "600 Mbps de fibra óptica",
      "1 Cámara Wi-Fi Interior",
      "1 Cámara Wi-Fi Exterior",
      "Router Wi-Fi 6",
      "Soporte técnico prioritario",
      "Primer mes GRATIS",
      "Instalación GRATIS",
      "Internet ilimitado",
    ],
    highlight: "Experiencia completa",
  },
];

export const BENEFITS = [
  {
    title: "Primer mes GRATIS",
    description:
      "Empieza sin pagar el primer mes. Prueba SpeedNet y siente la diferencia desde el día uno.",
    icon: "price",
  },
  {
    title: "Instalación GRATIS",
    description:
      "Sin costos ocultos. Instalamos tu servicio de fibra óptica sin que pagues un centavo adicional.",
    icon: "install",
  },
  {
    title: "Fibra óptica real",
    description:
      "Conexión estable, de alta velocidad y con baja latencia para juegos, streaming y videollamadas.",
    icon: "fiber",
  },
  {
    title: "Soporte profesional",
    description:
      "Atención técnica lista para ayudarte cuando lo necesites, con navegación ilimitada en todos los planes.",
    icon: "support",
  },
] as const;

export const FAQ = [
  {
    question: "¿Cómo contrato el servicio?",
    answer:
      "Escríbenos por WhatsApp al 098 277 1268 o al correo speednet5477@gmail.com. Te guiamos en la contratación e instalación.",
  },
  {
    question: "¿La instalación tiene algún costo?",
    answer:
      "No. Todos nuestros planes incluyen instalación completamente gratis y el primer mes gratis.",
  },
  {
    question: "¿Qué equipo incluye el servicio?",
    answer:
      "Según el plan, puedes recibir router Wi-Fi 6, TV Digital y cámaras de seguridad. Todos incluyen fibra óptica e internet ilimitado.",
  },
  {
    question: "¿Qué hago si tengo problemas con mi internet?",
    answer:
      "Escríbenos por WhatsApp o correo. Nuestro soporte técnico profesional te ayudará a resolver cualquier inconveniente.",
  },
] as const;
