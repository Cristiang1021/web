"use client";

import { useState } from "react";
import { FAQ as FAQ_ITEMS } from "@/lib/constants";
import { MonoLabel, SectionHeading } from "@/components/ui";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-8">
        <div className="mb-16">
          <MonoLabel className="mb-4 block">Preguntas frecuentes</MonoLabel>
          <SectionHeading>¿Tienes dudas?</SectionHeading>
        </div>

        <div>
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question} className="border-t border-[#d9d9dd]">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-start justify-between gap-6 py-6 text-left"
                >
                  <span className="text-base text-[#212121]">{item.question}</span>
                  <span className="mt-1 shrink-0 text-sm text-[#75758a]">
                    {isOpen ? "—" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="pb-6">
                    <p className="text-sm leading-relaxed text-[#75758a]">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
          <div className="border-t border-[#d9d9dd]" />
        </div>
      </div>
    </section>
  );
}
