import { MAILTO_URL, SITE, WHATSAPP_URL } from "@/lib/constants";
import { ButtonPrimary, ButtonSecondary, MonoLabel, SectionHeading } from "@/components/ui";

export function ContactCTA() {
  return (
    <section id="contacto" className="bg-[#edfce9] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <MonoLabel className="mb-4 block text-[#003c33]">Contacto</MonoLabel>
            <SectionHeading>
              ¿Listo para
              <br />
              navegar más rápido?
            </SectionHeading>
            <p className="mt-6 max-w-md text-base leading-relaxed text-[#75758a]">
              Contáctanos y te ayudamos a elegir el plan ideal. Primer mes gratis
              e instalación gratis en todos los planes.
            </p>
            <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-8">
              <ButtonPrimary
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Escribir por WhatsApp
              </ButtonPrimary>
              <ButtonSecondary href={`tel:${SITE.phone}`}>
                {SITE.phoneDisplay}
              </ButtonSecondary>
            </div>
          </div>

          <div className="rounded-[22px] border border-[#d9d9dd] bg-white p-8 sm:p-10">
            <MonoLabel className="mb-6 block">Datos de contacto</MonoLabel>
            <div className="space-y-6">
              <div className="border-b border-[#f2f2f2] pb-6">
                <p className="text-xs text-[#93939f]">WhatsApp</p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-lg text-[#1863dc] underline underline-offset-4"
                >
                  {SITE.phoneDisplay}
                </a>
              </div>
              <div className="border-b border-[#f2f2f2] pb-6">
                <p className="text-xs text-[#93939f]">Correo</p>
                <a
                  href={MAILTO_URL}
                  className="mt-1 block text-lg text-[#1863dc] underline underline-offset-4"
                >
                  {SITE.email}
                </a>
              </div>
              <div className="border-b border-[#f2f2f2] pb-6">
                <p className="text-xs text-[#93939f]">Teléfono</p>
                <a
                  href={`tel:${SITE.phone}`}
                  className="mt-1 block text-lg text-[#212121]"
                >
                  {SITE.phoneDisplay}
                </a>
              </div>
              <div>
                <p className="text-xs text-[#93939f]">Horario de atención</p>
                <p className="mt-1 text-lg text-[#212121]">Soporte técnico profesional</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
