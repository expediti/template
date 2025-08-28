"use client";

import Link from "next/link";

export default function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <nav className="mx-auto max-w-7xl h-16 px-4 sm:px-6 lg:px-8 flex items-center gap-6">
        <Link href="/" className="font-extrabold text-xl tracking-tight">
          Vecto
        </Link>

        <div className="hidden md:flex items-center gap-5">
          <Link href="/capcut" className="text-sm text-slate-700 hover:text-slate-900">Explore</Link>
          <Link href="/capcut" className="text-sm text-slate-700 hover:text-slate-900">CapCut</Link>
          <Link href="/after-effects" className="text-sm text-slate-700 hover:text-slate-900">After Effects</Link>
          <Link href="/collections/featured" className="text-sm text-slate-700 hover:text-slate-900">Collections</Link>
          <Link href="/submit" className="text-sm text-slate-700 hover:text-slate-900">Submit</Link>
        </div>

        <div className="flex-1" />

        <div className="hidden sm:flex items-center gap-3">
          <Link href="/login" className="text-sm text-slate-700 hover:text-slate-900">Log in</Link>
          <Link href="/signup" className="text-sm rounded-full bg-slate-900 text-white px-3 py-1.5 hover:bg-slate-800">Sign up</Link>
        </div>

        <button aria-label="Open menu" className="sm:hidden inline-flex items-center justify-center h-9 w-9 rounded-md border border-slate-300 text-slate-700">
          ☰
        </button>
      </nav>
    </header>
  );
}
