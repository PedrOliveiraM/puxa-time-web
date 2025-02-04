import { Facebook, Instagram, Twitter } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="py-12 relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 text-white/80">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Sobre o Puxa Time</h3>
            <p className="text-sm">
              A solução definitiva para organizar times de futebol e gerenciar partidas de forma eficiente.
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#features" className="hover:text-puxa-orange transition-colors">
                  Funcionalidades
                </Link>
              </li>
              <li>
                <Link href="#screenshots" className="hover:text-puxa-orange transition-colors">
                  Capturas de Tela
                </Link>
              </li>
              {/* <li>
                <Link href="#pricing" className="hover:text-puxa-orange transition-colors">
                  Preços
                </Link>
              </li> */}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Suporte</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="mailto:pedro.oliveira@monteirodev.com" className="hover:text-puxa-orange transition-colors">
                  Central de Ajuda
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-puxa-orange transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-puxa-orange transition-colors">
                  Termos de Serviço
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} Puxa Time. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
