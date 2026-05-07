"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/data/navigation";

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="md:hidden" size="icon" variant="outline" aria-label="Open menu">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Renato Boucas</SheetTitle>
        </SheetHeader>
        <nav className="mt-8 grid gap-3" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <SheetClose asChild key={link.href}>
              <Link
                className={`rounded-md px-3 py-2 text-base font-semibold transition-colors ${
                  link.href === "/ask"
                    ? "border border-slate-200 text-slate-950 hover:bg-slate-100"
                    : "text-slate-700 hover:bg-slate-100 hover:text-slate-950"
                }`}
                href={link.href}
              >
                {link.label}
              </Link>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
