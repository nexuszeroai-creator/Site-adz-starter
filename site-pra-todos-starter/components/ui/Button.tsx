"use client";
import { whatsappLink } from "@/lib/whatsapp";
type Props = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "whatsapp";
  href?: string;
  phone?: string;
  message?: string;
  className?: string;
};
export function Button({ children, variant="primary", href, phone, message, className="" }: Props) {
  const base = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2";
  const variants = {
    primary: "bg-slate-900 text-white hover:bg-slate-800",
    secondary: "bg-white border border-slate-200 text-slate-900 hover:bg-slate-50",
    whatsapp: "bg-[#25D366] text-white hover:bg-[#128C7E] w-full sm:w-auto"
  };
  const cls = `${base} ${variants[variant]} ${className}`;
  if (phone && message) {
    return <a href={whatsappLink(phone, message)} target="_blank" rel="noopener noreferrer" className={cls}>{children}</a>;
  }
  if (href) return <a href={href} className={cls}>{children}</a>;
  return <button className={cls}>{children}</button>;
}
