import type { ReactNode } from "react";
import { BENEFITS } from "@/lib/constants";
import { MonoLabel, SectionHeading } from "@/components/ui";

const ICONS: Record<string, ReactNode> = {
  fiber: (
    <>
      <line x1="12" y1="2" x2="12" y2="6" />
      <line x1="12" y1="18" x2="12" y2="22" />
      <line x1="2" y1="12" x2="6" y2="12" />
      <line x1="18" y1="12" x2="22" y2="12" />
      <circle cx="12" cy="12" r="4" />
    </>
  ),
  install: (
    <>
      <path d="M12 2L4 7v10l8 5 8-5V7z" />
      <polyline points="9 12 11 14 15 10" />
    </>
  ),
  support: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v4l3 2" />
    </>
  ),
  price: (
    <>
      <line x1="4" y1="20" x2="20" y2="4" />
      <circle cx="8" cy="8" r="2" />
      <circle cx="16" cy="16" r="2" />
    </>
  ),
};

export function Benefits() {
  return (
    <section id="beneficios" className="bg-[#003c33] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="mb-20 max-w-2xl">
          <MonoLabel className="mb-4 block text-white/50">Beneficios</MonoLabel>
          <SectionHeading className="text-white">
            Todos nuestros planes incluyen
          </SectionHeading>
        </div>

        <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-white/15">
          {BENEFITS.map((benefit) => (
            <div key={benefit.title} className="border-t border-white/15 py-10 lg:px-8 first:lg:pl-0">
              <svg
                className="mb-6 h-8 w-8 text-white/60"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1}
              >
                {ICONS[benefit.icon]}
              </svg>
              <h3 className="mb-3 text-xl text-white">{benefit.title}</h3>
              <p className="text-sm leading-relaxed text-white/60">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
