import { BarChart, Shuffle, Star, UserPlus } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: Shuffle,
    title: "Seleção Aleatória",
    description:
      "Distribuição rápida e justa de equipes com nosso algoritmo aleatório.",
  },
  {
    icon: UserPlus,
    title: "Ordem de Chegada",
    description: "Organize equipes com base na ordem de chegada ao campo.",
  },
  {
    icon: BarChart,
    title: "Equilíbrio por Habilidade",
    description:
      "Crie equipes perfeitamente equilibradas usando classificações de habilidade dos jogadores.",
  },
  {
    icon: Star,
    title: "Sistema de Prioridade",
    description:
      "Dê preferência a jogadores ou grupos específicos ao formar equipes.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-12">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Recursos Poderosos de Formação de Equipes
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/80">
            Escolha entre quatro métodos diferentes para criar as equipes
            perfeitas para suas partidas
          </p>
        </div>

        <div className="flex items-center justify-center">
          <div className="flex flex-col gap-8">
            {features.slice(0, 2).map((feature, index) => (
              <div
                key={index}
                className="max-h-sm flex h-full w-full max-w-sm flex-col items-center justify-center rounded-lg bg-white/10 p-6 text-white backdrop-blur-sm transition-transform duration-300 hover:scale-105 hover:transform"
              >
                <feature.icon className="mb-4 h-12 w-12 text-puxa-orange" />
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Imagem Central */}
          <div className="flex justify-center">
            <Image
              src="/images/smartphone-puxatime-modos-sorteio.png"
              alt="App Puxa Time"
              width={400}
              height={600}
            />
          </div>

          {/* Cards do lado direito */}
          <div className="flex flex-col gap-8">
            {features.slice(2, 4).map((feature, index) => (
              <div
                key={index}
                className="max-h-sm flex h-full w-full max-w-sm flex-col items-center justify-center rounded-lg bg-white/10 p-6 text-white backdrop-blur-sm transition-transform duration-300 hover:scale-105 hover:transform"
              >
                <feature.icon className="mb-4 h-12 w-12 text-puxa-orange" />
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
