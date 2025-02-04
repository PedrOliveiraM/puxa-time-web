import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-transparent backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image
              src="/images/Logo.png"
              alt="Puxa Time Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-xl font-bold text-white">PUXA TIME</span>
          </div>

          <div className="hidden items-center space-x-8 md:flex">
            <Link
              href="#features"
              className="text-white transition-colors hover:text-puxa-orange"
            >
              Modos
            </Link>
            <Link
              href="#screenshots"
              className="text-white transition-colors hover:text-puxa-orange"
            >
              Screenshots
            </Link>
            <Link
              href="#pricing"
              className="text-white transition-colors hover:text-puxa-orange"
            >
              Planos
            </Link>
            <Link
              href="/privacy"
              className="text-white transition-colors hover:text-puxa-orange"
            >
              Termos de Privacidade
            </Link>
            <Button
              variant="secondary"
              className="bg-puxa-orange text-white hover:bg-puxa-orange/90"
            >
              Baixar Agora
            </Button>
          </div>

          <button className="text-white md:hidden">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}
