import Download from "./components/Download"
import Features from "./components/Features"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Pricing from "./components/Pricing"
import Screenshots from "./components/Screenshots"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-puxa-deepBlue to-puxa-lightBlue">
      <Navbar />
      <Hero />
      <Features />
      <Screenshots />
      {/* <Pricing /> */}
      <Download />
      <Footer />
    </div>
  )
}

