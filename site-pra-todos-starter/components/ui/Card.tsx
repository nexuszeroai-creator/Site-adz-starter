type Props = { children: React.ReactNode; className?: string };
export function Card({ children, className="" }: Props) {
  return <div className={`border border-slate-200 rounded-xl p-6 bg-white ${className}`}>{children}</div>;
}
export function ProductCard({ title, desc, image, phone, whatsappMessage }: { title: string; desc: string; image: string; phone: string; whatsappMessage: string }) {
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden bg-white flex flex-col">
      <div className="aspect-[4/3] bg-slate-100 flex items-center justify-center text-slate-400 text-sm">{image ? <img src={image} alt={title} className="w-full h-full object-cover" /> : "foto 4:3"}</div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-semibold text-slate-900">{title}</h3>
        <p className="text-sm text-slate-600 mt-1 line-clamp-2">{desc}</p>
        <div className="mt-4">
          <a href={`https://wa.me/${phone.replace(/\D/g, "")}?text=${encodeURIComponent(whatsappMessage)}`} target="_blank" className="inline-flex w-full justify-center bg-[#25D366] text-white rounded-lg py-2.5 font-medium hover:bg-[#128C7E]">Peça pelo WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
