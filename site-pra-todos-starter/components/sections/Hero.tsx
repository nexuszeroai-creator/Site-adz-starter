import { Button } from "@/components/ui/Button";
import content from "@/content/briefing.json";
export function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">{content.hero.title}</h1>
        <p className="mt-4 text-slate-600 text-lg">{content.hero.subtitle}</p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Button variant="whatsapp" phone={content.whatsapp} message={content.hero.whatsappMessage}>{content.hero.ctaPrimary}</Button>
          <Button variant="secondary" href={content.hero.ctaSecondaryHref}>{content.hero.ctaSecondary}</Button>
        </div>
      </div>
      <div className="aspect-[4/3] rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-400">Imagem 4:3 - {content.businessType}</div>
    </section>
  );
}
