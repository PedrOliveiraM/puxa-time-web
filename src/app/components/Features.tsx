import { BarChart, Shuffle, Star, UserPlus } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: Shuffle,
    title: "Seleção Aleatória",
    description: "Distribuição rápida e justa de equipes com nosso algoritmo aleatório.",
  },
  {
    icon: UserPlus,
    title: "Ordem de Chegada",
    description: "Organize equipes com base na ordem de chegada ao campo.",
  },
  {
    icon: BarChart,
    title: "Equilíbrio por Habilidade",
    description: "Crie equipes perfeitamente equilibradas usando classificações de habilidade dos jogadores.",
  },
  {
    icon: Star,
    title: "Sistema de Prioridade",
    description: "Dê preferência a jogadores ou grupos específicos ao formar equipes.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 relative">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Recursos Poderosos de Formação de Equipes
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Escolha entre quatro métodos diferentes para criar as equipes perfeitas para suas partidas
          </p>
        </div>

        <div className="flex items-center justify-center">
          <div className="flex flex-col gap-8">
            {features.slice(0, 2).map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white hover:transform hover:scale-105 transition-transform duration-300 w-full h-full max-w-sm max-h-sm flex flex-col justify-center items-center"
              >
                <feature.icon className="h-12 w-12 mb-4 text-puxa-orange" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
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
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white hover:transform hover:scale-105 transition-transform duration-300 w-full h-full  max-w-sm max-h-sm flex flex-col justify-center items-center"
              >
                <feature.icon className="h-12 w-12 mb-4 text-puxa-orange" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
