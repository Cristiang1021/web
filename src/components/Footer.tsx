import Image from "next/image";
import { MAILTO_URL, SITE, WHATSAPP_URL } from "@/lib/constants";

const FOOTER_LINKS = [
  { href: "#planes", label: "Planes" },
  { href: "#beneficios", label: "Beneficios" },
  { href: "#faq", label: "Preguntas" },
  { href: "#contacto", label: "Contacto" },
];

export function Footer() {
  return (
    <footer className="bg-[#17171c] py-16 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Image
              src="/branding/logo.png"
              alt={SITE.name}
              width={180}
              height={56}
              className="h-14 w-auto object-contain"
            />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#93939f]">
              {SITE.tagline}. Internet de fibra óptica para tu hogar, con primer
              mes gratis e instalación gratis.
            </p>
          </div>

          <div>
            <p className="mb-4 text-sm font-medium text-white">Enlaces</p>
            <ul className="space-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[#93939f] transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-sm font-medium text-white">Contacto</p>
            <ul className="space-y-3 text-sm text-[#93939f]">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  WhatsApp: {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={MAILTO_URL}
                  className="transition-colors hover:text-white"
                >
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE.phone}`}
                  className="transition-colors hover:text-white"
                >
                  Tel: {SITE.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8">
          <p className="text-xs text-[#93939f]">
            © {new Date().getFullYear()} {SITE.name}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
