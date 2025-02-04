import Image from "next/image"

export default function Screenshots() {

  const screenshots = [
    { src: "/images/Chegada.jpg", alt: "Captura de Tela do App 1" },
    { src: "/images/habilidade.jpg", alt: "Captura de Tela do App 2" },
    { src: "/images/placar.jpg", alt: "Captura de Tela do App 3" },
  ]
  return (
    <section id="screenshots" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Capturas de Tela do App</h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Dê uma olhada na nossa interface intuitiva e fácil de usar
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {screenshots.map((img, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg shadow-xl">
              <Image
                src={img.src}
                alt={`Captura de Tela do App ${index + 1}`}
                width={400}
                height={800}
                className="w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
