import Image from "next/image";

export default function Screenshots() {
  const screenshots = [
    { src: "/images/Chegada.jpg", alt: "Captura de Tela do App 1" },
    { src: "/images/habilidade.jpg", alt: "Captura de Tela do App 2" },
    { src: "/images/placar.jpg", alt: "Captura de Tela do App 3" },
  ];
  return (
    <section id="screenshots" className="relative py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Capturas de Tela do App
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/80">
            Dê uma olhada na nossa interface intuitiva e fácil de usar
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {screenshots.map((img, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-xl"
            >
              <Image
                src={img.src}
                alt={`Captura de Tela do App ${index + 1}`}
                width={400}
                height={800}
                className="w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/60 to-transparent pb-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
