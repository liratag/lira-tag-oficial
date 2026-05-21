import Aurora from '../components/Aurora'
import CursorGlow from '../components/CursorGlow'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import HowItWorks from '../components/HowItWorks'
import ProductShowcase from '../components/ProductShowcase'
import TechStack from '../components/TechStack'
import Market from '../components/Market'
import Technology from '../components/Technology'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

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
