import Aurora from './Componentes/Aurora'
import CursorGlow from './Componentes/CursorGlow'
import Navbar from './Componentes/Navbar'
import Hero from './Componentes/Hero'
import Stats from './Componentes/Stats'
import HowItWorks from './Componentes/HowItWorks'
import ProductShowcase from './Componentes/ProductShowcase'
import TechStack from './Componentes/TechStack'
import Market from './Componentes/Market'
import Technology from './Componentes/Technology'
import CTA from './Componentes/CTA'
import Footer from './Componentes/Footer'

export default function Home() {
  return (
    <main className="bg-black overflow-hidden">
      <Aurora />
      <CursorGlow />
      <Navbar />
      <Hero />
      <Stats />
      <HowItWorks />
      <ProductShowcase />
      <TechStack />
      <Market />
      <Technology />
      <CTA />
      <Footer />
    </main>
  )
}
