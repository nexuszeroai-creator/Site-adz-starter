import content from "@/content/briefing.json";
export function Contact() {
  return (
    <section id="contato" className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold">Contato</h2>
          <p className="mt-2 text-slate-600">{content.address}</p>
          <p className="text-slate-600">{content.hours}</p>
          <p className="mt-4 text-sm">WhatsApp: {content.whatsapp}</p>
        </div>
        <div className="rounded-xl bg-white border border-slate-200 h-64 flex items-center justify-center text-slate-400">Mapa - {content.address}</div>
      </div>
    </section>
  );
}
