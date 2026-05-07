import Link from "next/link";

import { MobileNav } from "@/components/layout/MobileNav";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/data/navigation";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link className="flex items-center gap-3" href="/" aria-label="Renato Boucas home">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-slate-950 text-sm font-bold text-white">
            RB
          </span>
          <span className="text-sm font-bold text-slate-950 sm:text-base">Renato Boucas</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Button
              asChild
              className={link.href === "/ask" ? "bg-slate-950 text-white hover:bg-slate-800 hover:text-white" : ""}
              key={link.href}
              variant={link.href === "/ask" ? "default" : "ghost"}
            >
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
        </nav>

        <MobileNav />
      </div>
    </header>
  );
}
