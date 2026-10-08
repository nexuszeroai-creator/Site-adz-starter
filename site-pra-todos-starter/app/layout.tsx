import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Site Pra Todos - Starter",
  description: "Fábrica Site Vitrine + Vitrine Digital WhatsApp - Standard V1.0"
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="pt-BR"><body className={inter.className}>{children}</body></html>;
}
