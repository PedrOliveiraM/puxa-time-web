import { Button } from "./ui/button"

export default function CTA() {
  return (
    <section className="py-20 bg-puxa-orange text-puxa-white text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-stadium bg-cover bg-center opacity-5" />
      <div className="container mx-auto px-4 relative">
        <h2 className="text-3xl font-bold mb-4">Pronto para revolucionar a seleção da sua equipe?</h2>
        <p className="text-xl mb-8">Baixe o Puxa Time agora e experimente a formação de equipes sem esforço!</p>
        <Button size="lg" className="bg-puxa-white text-puxa-orange hover:bg-puxa-white/90 font-bold text-lg px-8 py-6">
          Vamos Puxa Time
        </Button>
      </div>
    </section>
  )
}

