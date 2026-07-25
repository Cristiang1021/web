import { PLAN_PERKS, PLANS, WHATSAPP_URL } from "@/lib/constants";
import { ButtonPrimary, MonoLabel, SectionHeading } from "@/components/ui";

export function Plans() {
  return (
    <section id="planes" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="mb-16 max-w-2xl">
          <MonoLabel className="mb-4 block">Planes</MonoLabel>
          <SectionHeading>Nuestros planes de internet</SectionHeading>
          <p className="mt-6 text-base leading-relaxed text-[#75758a]">
            Todos nuestros planes incluyen primer mes gratis, instalación gratis
            y fibra óptica 100% real.
          </p>
        </div>

        <div className="mb-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {PLAN_PERKS.map((perk) => (
            <div
              key={perk}
              className="flex items-start gap-3 border-t border-[#d9d9dd] pt-4 text-sm text-[#212121]"
            >
              <CheckIcon />
              <span>{perk}</span>
            </div>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {PLANS.map((plan) => (
            <article
              key={plan.id}
              className={`relative flex flex-col rounded-lg p-7 ${
                plan.featured
                  ? "bg-[#17171c] text-white"
                  : "bg-[#eeece7] text-[#212121]"
              }`}
            >
              {plan.highlight && (
                <span
                  className={`mb-4 inline-flex w-fit rounded-full px-3 py-1 text-xs font-medium ${
                    plan.featured
                      ? "bg-[#7CFF6B] text-[#17171c]"
                      : "border border-[#ff7759] bg-[#ff7759] text-[#212121]"
                  }`}
                >
                  {plan.highlight}
                </span>
              )}

              <MonoLabel
                className={plan.featured ? "text-white/50" : undefined}
              >
                {plan.emoji} {plan.name}
              </MonoLabel>

              <div
                className={`mt-4 border-t pt-5 ${
                  plan.featured ? "border-white/15" : "border-[#d9d9dd]"
                }`}
              >
                <p
                  className={`font-display text-5xl tracking-tight ${
                    plan.featured ? "text-white" : "text-black"
                  }`}
                >
                  ${plan.price}
                  <span
                    className={`ml-1 text-sm ${
                      plan.featured ? "text-white/55" : "text-[#75758a]"
                    }`}
                  >
                    /mes
                  </span>
                </p>
                <p
                  className={`mt-2 font-display text-2xl tracking-tight ${
                    plan.featured ? "text-white" : "text-[#212121]"
                  }`}
                >
                  {plan.speed}{" "}
                  <span
                    className={`text-base ${
                      plan.featured ? "text-white/55" : "text-[#75758a]"
                    }`}
                  >
                    Mbps
                  </span>
                </p>
              </div>

              <p
                className={`mt-4 text-sm leading-relaxed ${
                  plan.featured ? "text-white/65" : "text-[#75758a]"
                }`}
              >
                {plan.description}
              </p>

              <div
                className={`mt-6 border-t pt-5 ${
                  plan.featured ? "border-white/15" : "border-[#d9d9dd]"
                }`}
              >
                <p
                  className={`mb-3 text-xs uppercase tracking-[0.08em] ${
                    plan.featured ? "text-white/45" : "text-[#93939f]"
                  }`}
                >
                  Ideal para
                </p>
                <ul className="space-y-2">
                  {plan.idealFor.map((item) => (
                    <li
                      key={item}
                      className={`text-sm ${
                        plan.featured ? "text-white/80" : "text-[#212121]"
                      }`}
                    >
                      · {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className={`mt-6 mb-8 flex-1 border-t pt-5 ${
                  plan.featured ? "border-white/15" : "border-[#d9d9dd]"
                }`}
              >
                <p
                  className={`mb-3 text-xs uppercase tracking-[0.08em] ${
                    plan.featured ? "text-white/45" : "text-[#93939f]"
                  }`}
                >
                  Incluye
                </p>
                <ul className="space-y-2.5">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-start gap-2 text-sm ${
                        plan.featured ? "text-white/85" : "text-[#212121]"
                      }`}
                    >
                      <CheckIcon light={plan.featured} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <ButtonPrimary
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                variant={plan.featured ? "light" : "dark"}
                className="w-full text-center"
              >
                Contratar
              </ButtonPrimary>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CheckIcon({ light = false }: { light?: boolean }) {
  return (
    <svg
      className={`mt-0.5 h-4 w-4 shrink-0 ${light ? "text-[#7CFF6B]" : "text-[#212121]"}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}
