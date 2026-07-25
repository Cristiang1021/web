"use client";

import Image from "next/image";
import { useState } from "react";
import { SITE, WHATSAPP_URL } from "@/lib/constants";
import { ButtonPrimary } from "@/components/ui";

const NAV_LINKS = [
  { href: "#planes", label: "Planes" },
  { href: "#beneficios", label: "Beneficios" },
  { href: "#faq", label: "Preguntas" },
  { href: "#contacto", label: "Contacto" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 right-0 left-0 z-50 bg-black text-white">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-center px-4 text-xs">
          <span>
            Primer mes gratis + instalación gratis.{" "}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2"
            >
              Contratar ahora
            </a>
          </span>
        </div>
      </div>

      <header className="fixed top-9 right-0 left-0 z-50 border-b border-[#d9d9dd] bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-8 md:grid md:grid-cols-[1fr_auto_1fr]">
          <a
            href="#"
            className="inline-flex w-fit shrink-0 items-center justify-self-start rounded-md bg-black px-1.5 py-0.5"
          >
            <Image
              src="/branding/logo-nav.png"
              alt={SITE.name}
              width={120}
              height={40}
              className="h-8 w-auto max-w-[110px] object-contain"
              priority
            />
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#212121] transition-colors hover:text-[#75758a]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-3">
            <a
              href={`tel:${SITE.phone}`}
              className="hidden text-sm text-[#75758a] sm:block"
            >
              {SITE.phoneDisplay}
            </a>
            <ButtonPrimary
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden px-5 py-2 text-sm sm:inline-flex"
            >
              Contratar
            </ButtonPrimary>
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="p-2 md:hidden"
              aria-label="Menú"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <nav className="border-t border-[#d9d9dd] bg-white px-4 py-6 md:hidden">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block border-b border-[#f2f2f2] py-4 text-sm text-[#212121]"
              >
                {link.label}
              </a>
            ))}
            <ButtonPrimary
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full"
            >
              Contratar por WhatsApp
            </ButtonPrimary>
          </nav>
        )}
      </header>
    </>
  );
}
