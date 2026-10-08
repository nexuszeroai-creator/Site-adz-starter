import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Vitrine } from "@/components/sections/Vitrine";
import { Contact } from "@/components/sections/Contact";
import briefing from "@/content/briefing.json";

export default function Page() {
  const isVitrine = briefing.template === "product";
  return (
    <main>
      <Header />
      <Hero />
      {isVitrine && <Vitrine />}
      {!isVitrine && (
        <section id="servicos" className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold mb-6">Serviços</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {briefing.services.map((s:any) => (
              <div key={s.title} className="border rounded-xl p-6"><h3 className="font-semibold">{s.title}</h3><p className="text-sm text-slate-600 mt-1">{s.desc}</p></div>
            ))}
          </div>
        </section>
      )}
      <Contact />
      <footer className="border-t py-6 text-center text-sm text-slate-500">Standard V1.0 - GitHub fonte da verdade - Vercel via Git</footer>
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t p-3 flex gap-2">
        <a href={`https://wa.me/${briefing.whatsapp.replace(/\D/g,"")}?text=${encodeURIComponent(briefing.hero.whatsappMessage)}`} target="_blank" className="flex-1 bg-[#25D366] text-white rounded-lg py-3 text-center font-medium">WhatsApp</a>
        <a href={`tel:${briefing.phone}`} className="flex-1 border rounded-lg py-3 text-center font-medium">Ligar</a>
      </div>
    </main>
  );
}
