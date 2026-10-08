import content from "@/content/briefing.json";

export default function Hero() {
  const whatsappLink = `https://wa.me/${content.phone}?text=${encodeURIComponent(content.hero.whatsappMessage)}`;

  return (
    <section className="bg-[var(--bg)]">
      <div className="mx-auto max-w- px-6 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-start">
        {/* ESQUERDA - Conteúdo */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text- tracking-widest uppercase text-[var(--muted)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0f3e6b]"></span>
            {content.businessType} • 12 anos na Zona Norte
          </div>
          <h1 className="mt-6 text- lg:text- font-black leading-[0.95] tracking-tight">
            {content.hero.title.split("—")[0]} — <span className="text-[#0f3e6b]">{content.hero.title.split("—")[1] || "Diagnóstico honesto e serviço garantido."}</span>
          </h1>
          <p className="mt-5 max-w- text- leading-6 text-[var(--muted)]">
            {content.hero.subtitle} Você aprova antes. Sem peça trocada sem necessidade.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full border border-[var(--border)] bg-white px-3 py-1 text-xs">Orçamento em até 30min</span>
            <span className="rounded-full border border-[var(--border)] bg-white px-3 py-1 text-xs">Nota fiscal e garantia</span>
            <span className="rounded-full border border-[var(--border)] bg-white px-3 py-1 text-xs">Peças com procedência</span>
          </div>
          <div className="mt-8 flex gap-3">
            <a href={whatsappLink} className="rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white">{content.hero.ctaPrimary}</a>
            <a href={content.hero.ctaSecondaryHref} className="rounded-full border border-[var(--border)] bg-white px-6 py-3 text-sm font-semibold">Ligar agora</a>
          </div>
        </div>

        {/* DIREITA - Mockup Premium FASE 04 */}
        <div className="relative rounded- overflow-hidden border border-[var(--border)] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
          <div className="flex items-center justify-between border-b border-[var(--border)] px-4 py-3">
            <div className="flex gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]"></span><span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]"></span><span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]"></span></div>
            <div className="text- text-[var(--muted)]">oficina-norte.local • AO VIVO</div>
          </div>
          <div className="p-6 bg-[#f3f7fb]">
            <div className="rounded-xl bg-white border border-[var(--border)] p-4">
              <div className="text- text-[var(--muted)] mb-3">Bancada 02 • Revisão em andamento</div>
              <div className="flex gap-2">
                <div className="flex-1 rounded-lg bg-[#eef4fb] p-3 text-center text-xs font-semibold">OBD • OK</div>
                <div className="flex-1 rounded-lg bg-[#eef4fb] p-3 text-center text-xs font-semibold">Freio conferido</div>
                <div className="flex-1 rounded-lg bg-[#eef4fb] p-3 text-center text-xs">com garantia</div>
              </div>
              <div className="mt-3 flex items-center justify-between text-xs">
                <span>R. Voluntários, 1847</span>
                <span className="rounded-full bg-[#10b981] px-2 py-0.5 text-white text-">ABERTO</span>
                <span className="rounded-full border px-2 py-0.5">12 ANOS</span>
              </div>
            </div>
          </div>
          <div className="flex justify-between px-4 py-2 text- text-[var(--muted)] border-t border-[var(--border)]">
            <span>Caso difícil: poucas fotos, foco sem serviço real.</span>
            <span>MODELO B • VITRINA</span>
          </div>
        </div>
      </div>
    </section>
  );
}