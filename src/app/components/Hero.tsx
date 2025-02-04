'use client'
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import { Button } from "./ui/button"

export default function Hero() {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById("features")
    featuresSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />

      <div className="container mx-auto px-4 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Organize Seus Times de Futebol Como Nunca Antes
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              Crie times equilibrados instantaneamente com nossos algoritmos inteligentes de formação de times. Quatro métodos diferentes para garantir partidas justas e divertidas todas as vezes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-puxa-orange text-white hover:bg-puxa-orange/90">
                Baixe Agora
              </Button>
            </div>
          </div>
          <div className="relative hidden xl:block">
            <Image
              src="/images/smartphone-puxatime2.png"
              alt="App Puxa Time"
              width={800}
              height={600}
            />
          </div>
        </div>
      </div>

      {/* Indicador de Rolagem para Baixo */}
      <button
        onClick={scrollToFeatures}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <span className="sr-only">Rolar para baixo</span>
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  )
}
