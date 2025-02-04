import { Button } from "./ui/button";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-puxa-orange py-20 text-center text-puxa-white">
      <div className="bg-stadium absolute inset-0 bg-cover bg-center opacity-5" />
      <div className="container relative mx-auto px-4">
        <h2 className="mb-4 text-3xl font-bold">
          Pronto para revolucionar a seleção da sua equipe?
        </h2>
        <p className="mb-8 text-xl">
          Baixe o Puxa Time agora e experimente a formação de equipes sem
          esforço!
        </p>
        <Button
          size="lg"
          className="bg-puxa-white px-8 py-6 text-lg font-bold text-puxa-orange hover:bg-puxa-white/90"
        >
          Vamos Puxa Time
        </Button>
      </div>
    </section>
  );
}
