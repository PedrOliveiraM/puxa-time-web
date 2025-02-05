import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 text-white/80 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">
              Sobre o Puxa Time
            </h3>
            <p className="text-sm">
              A solução definitiva para organizar times de futebol e gerenciar
              partidas de forma eficiente.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#features"
                  className="transition-colors hover:text-puxa-orange"
                >
                  Funcionalidades
                </Link>
              </li>
              <li>
                <Link
                  href="#screenshots"
                  className="transition-colors hover:text-puxa-orange"
                >
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
            <h3 className="mb-4 text-lg font-bold text-white">Suporte</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="mailto:pedro.oliveira@monteirodev.com"
                  className="transition-colors hover:text-puxa-orange"
                >
                  Central de Ajuda
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="transition-colors hover:text-puxa-orange"
                >
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="transition-colors hover:text-puxa-orange"
                >
                  Termos de Serviço
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Contato</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/terms"
                  className="transition-colors hover:text-puxa-orange"
                >
                  pedro.oliveira@monteirodev.com
                </Link>
              </li>
            </ul>
          </div>

          <div className="mt-12 border-t border-white/10 pt-8 text-center text-white/60">
            <p>
              &copy; {new Date().getFullYear()} Puxa Time. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
