import { Button } from "@/components/ui/Button";
import content from "@/content/briefing.json";
export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <span className="font-bold text-slate-900">{content.businessName}</span>
        <nav className="hidden md:flex gap-6 text-sm text-slate-600">
          <a href="#servicos">Serviços</a>
          <a href="#produtos">Produtos</a>
          <a href="#contato">Contato</a>
        </nav>
        <Button variant="whatsapp" phone={content.whatsapp} message={content.hero.whatsappMessage}>WhatsApp</Button>
      </div>
    </header>
  );
}
