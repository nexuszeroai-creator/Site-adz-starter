"use client";
import { ProductCard } from "@/components/ui/Card";
import products from "@/content/products.json";
import briefing from "@/content/briefing.json";
export function Vitrine() {
  if (!products || products.length === 0) return null;
  return (
    <section id="produtos" className="max-w-6xl mx-auto px-4 py-16">
      <div className="flex items-end justify-between mb-6">
        <h2 className="text-2xl font-bold">Produtos</h2>
        <span className="text-sm text-slate-500">{products.length}/20 simples</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((p:any) => (
          <ProductCard key={p.id} title={p.title} desc={p.description} image={p.image} phone={briefing.whatsapp} whatsappMessage={p.whatsappMessage} />
        ))}
      </div>
    </section>
  );
}
