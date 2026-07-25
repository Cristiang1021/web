import { SITE, WHATSAPP_URL } from "@/lib/constants";
import { ButtonPrimary, ButtonSecondary, MonoLabel } from "@/components/ui";
import { SpeedTestPanel } from "@/components/SpeedTestPanel";

export function Hero() {
  return (
    <section className="bg-white pt-36 pb-20 sm:pt-44 sm:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <MonoLabel className="mb-6 block">
            Fibra óptica · Primer mes gratis · Instalación gratis
          </MonoLabel>

          <h1 className="font-display text-[clamp(2.75rem,8vw,6rem)] leading-none font-normal tracking-[-0.04em] text-black">
            Internet rápido
            <br />
            para tu hogar
          </h1>

          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-[#212121]">
            {SITE.tagline}. Planes desde{" "}
            <strong className="font-medium">$15/mes</strong> con velocidades de
            hasta <strong className="font-medium">600 Mbps</strong>.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-8">
            <ButtonPrimary href="#planes">Ver planes</ButtonPrimary>
            <ButtonSecondary
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Contratar por WhatsApp
            </ButtonSecondary>
          </div>
        </div>

        <div className="mt-20 grid gap-4 lg:grid-cols-[1.6fr_1fr] lg:gap-6">
          <SpeedTestPanel />

          <div className="flex flex-col gap-4">
            <div className="flex-1 rounded-[22px] bg-[#eeece7] p-8 sm:p-10">
              <MonoLabel className="mb-4 block">Conecta tu vida</MonoLabel>
              <p className="font-display text-3xl leading-tight tracking-tight text-[#212121]">
                Conectamos hogares con fibra óptica de alta velocidad
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[#75758a]">
                Instalación gratis. Primer mes gratis. Soporte técnico
                profesional.
              </p>
            </div>
            <div className="rounded-[22px] border border-[#d9d9dd] bg-white p-6">
              <p className="font-display text-2xl tracking-tight text-black">
                $15
              </p>
              <p className="mt-1 text-sm text-[#75758a]">
                desde por mes · sin sorpresas
              </p>
            </div>
          </div>
        </div>

        <div className="mt-24 border-t border-[#d9d9dd] pt-16">
          <p className="mb-12 text-center text-sm text-[#75758a]">
            Conexión confiable para el día a día
          </p>
          <div className="grid grid-cols-2 gap-12 sm:grid-cols-4">
            {[
              { value: "600", label: "Mbps máximos" },
              { value: "$15", label: "Desde / mes" },
              { value: "Gratis", label: "Primer mes" },
              { value: "Gratis", label: "Instalación" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-3xl tracking-tight text-black sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-[#93939f]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
