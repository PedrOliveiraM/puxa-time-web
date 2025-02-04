import { Apple, Play } from "lucide-react"
import { Button } from "./ui/button"

export default function Download() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Baixe o Puxa Time Agora</h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            Disponível para Android. Comece a organizar suas partidas de futebol hoje mesmo!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <Button size="lg" className="bg-black text-white hover:bg-black/90 flex items-center gap-2">
              <Apple className="h-5 w-5" />
              App Store
            </Button> */}
            <Button size="lg" className="bg-puxa-orange text-white hover:bg-puxa-orange/90 flex items-center gap-2">
              <Play className="h-5 w-5" />
              Google Play
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
