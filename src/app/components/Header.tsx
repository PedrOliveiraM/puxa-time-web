import Image from "next/image"
import { Button } from "./ui/button"

export default function Header() {
  return (
    <header className="bg-puxa-deepBlue text-puxa-white py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Image
            src="/images/Logo.png"
            alt="Logo do Puxa Time"
            width={50}
            height={50}
            className="rounded-full"
          />
          <h1 className="text-2xl font-bold">PUXA TIME</h1>
        </div>
        <p className="hidden md:block text-lg">Organize times de futebol de forma rápida e eficiente</p>
        <Button variant="secondary" className="bg-puxa-orange text-puxa-white hover:bg-puxa-orange/90">
          Baixar App
        </Button>
      </div>
    </header>
  )
}
