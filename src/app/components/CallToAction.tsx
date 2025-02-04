import { Button } from "./ui/button";

export default function CallToAction() {
  return (
    <section className="bg-blue-600 py-20 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold">
          Pronto para Otimizar Seu Fluxo de Trabalho?
        </h2>
        <p className="mb-8 text-xl">
          Junte-se a milhares de boleiros satisfeitos e suba de nível.
        </p>
        <Button size="lg" variant="secondary">
          Comece Seu Teste Gratuito
        </Button>
      </div>
    </section>
  );
}
