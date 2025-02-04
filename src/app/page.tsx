import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Screenshots from "./components/Screenshots"
import Pricing from "./components/Pricing"
import Download from "./components/Download"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-puxa-deepBlue to-puxa-lightBlue">
      <Navbar />
      <Hero />
      <Features />
      <Screenshots />
      <Pricing />
      <Download />
      <Footer />
    </div>
  )
}

