import { Apple, Play } from "lucide-react";
import { Button } from "./ui/button";

export default function Download() {
  return (
    <section className="relative py-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Baixe o Puxa Time Agora
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
            Disponível para Android. Comece a organizar suas partidas de futebol
            hoje mesmo!
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            {/* <Button size="lg" className="bg-black text-white hover:bg-black/90 flex items-center gap-2">
              <Apple className="h-5 w-5" />
              App Store
            </Button> */}
            <Button
              size="lg"
              className="flex items-center gap-2 bg-puxa-orange text-white hover:bg-puxa-orange/90"
            >
              <Play className="h-5 w-5" />
              Google Play
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
