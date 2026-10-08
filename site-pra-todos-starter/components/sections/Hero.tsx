import content from "@/content/briefing.json";
import { whatsappLink } from "@/lib/whatsapp";

export function Hero() {
  const whatsapp = whatsappLink(content.phone, content.hero.whatsappMessage);

  return (
    <section className="mx-auto max-w-6xl px-4 pb-10 pt-6 sm:px-6 sm:pb-14 sm:pt-10 lg:px-8 lg:pb-20 lg:pt-16">
      <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <div className="order-1">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-xs font-medium tracking-wide text-[var(--text-muted)]">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
            {content.businessType}
          </div>

          <h1 className="mt-5 text-4xl font-bold leading-[0.98] tracking-[-0.03em] text-[var(--text)] sm:text-5xl lg:text-6xl">
            {content.hero.title}
          </h1>

          <p className="mt-4 max-w-xl text-base leading-[1.6] text-[var(--text-muted)] sm:mt-5 sm:text-lg">
            {content.hero.subtitle}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[var(--primary)] px-6 text-sm font-semibold text-white transition-colors hover:bg-[var(--primary-hover)] sm:w-auto"
            >
              {content.hero.ctaPrimary}
            </a>
            <a
              href={content.hero.ctaSecondaryHref}
              className="inline-flex h-12 w-full items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--surface)] px-6 text-sm font-semibold text-[var(--text)] transition-colors hover:bg-[var(--surface-2)] sm:w-auto"
            >
              {content.hero.ctaSecondary}
            </a>
          </div>
        </div>

        <div className="order-2 lg:sticky lg:top-24">
          <div className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-xl shadow-slate-900/5 sm:p-8">
            <div aria-hidden="true" className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[var(--primary-soft)]" />
            <div className="relative">
              <p className="text-sm font-semibold text-[var(--primary)]">{content.businessName}</p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-[var(--text)]">
                Serviços para cuidar bem do seu veículo
              </h2>
              <ul className="mt-6 space-y-3">
                {content.services.map((service) => (
                  <li
                    key={service.title}
                    className="flex items-start gap-3 rounded-2xl bg-[var(--bg)] p-4"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--primary-soft)] text-xs font-bold text-[var(--primary)]"
                    >
                      ✓
                    </span>
                    <span>
                      <span className="block font-semibold text-[var(--text)]">{service.title}</span>
                      <span className="mt-1 block text-sm leading-relaxed text-[var(--text-muted)]">
                        {service.desc}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}