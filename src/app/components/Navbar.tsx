import { Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Image
              src="/images/Logo.png"
              alt="Puxa Time Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-white font-bold text-xl">PUXA TIME</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-white hover:text-puxa-orange transition-colors">
              Modos
            </Link>
            <Link href="#screenshots" className="text-white hover:text-puxa-orange transition-colors">
              Screenshots
            </Link>
            <Link href="#pricing" className="text-white hover:text-puxa-orange transition-colors">
              Planos
            </Link>
            <Link href="/privacy" className="text-white hover:text-puxa-orange transition-colors">
              Termos de Privacidade
            </Link>
            <Button variant="secondary" className="bg-puxa-orange text-white hover:bg-puxa-orange/90">
              Baixar Agora
            </Button>
          </div>

          <button className="md:hidden text-white">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </nav>
  )
}

