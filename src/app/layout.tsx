import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SiteNav from "@/components/SiteNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vecto",
  description: "Create faster. Share smarter. Templates for CapCut & After Effects.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased text-slate-800 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-50 via-white to-slate-50`}>
        <div className="min-h-dvh flex flex-col">
          <SiteNav />
          <main className="flex-1">{children}</main>
          <footer className="border-t">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-slate-600">
              © {new Date().getFullYear()} Vecto. All rights reserved.
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
