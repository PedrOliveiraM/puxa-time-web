
import { Button } from "./ui/button"

export default function CallToAction() {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Pronto para Otimizar Seu Fluxo de Trabalho?</h2>
        <p className="text-xl mb-8">Junte-se a milhares de boleiros satisfeitos e suba de nível.</p>
        <Button size="lg" variant="secondary">
          Comece Seu Teste Gratuito
        </Button>
      </div>
    </section>
  )
}
