import TechStack from './components/TechStack';
import ProductShowcase from './components/ProductShowcase';
import HowItWorks from './components/HowItWorks';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Technology from './components/Technology';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background: '#000',
        color: '#fff',
        overflowX: 'hidden',
        position: 'relative',
      }}
    >
      {/* LIGHT EFFECTS */}
      <div
        style={{
          position: 'fixed',
          top: '-300px',
          left: '-300px',
          width: '700px',
          height: '700px',
          background: '#22d3ee',
          opacity: 0.12,
          borderRadius: '50%',
          filter: 'blur(180px)',
          zIndex: 0,
          animation: 'glow 6s infinite',
        }}
      />

      <div
        style={{
          position: 'fixed',
          bottom: '-300px',
          right: '-300px',
          width: '700px',
          height: '700px',
          background: '#06b6d4',
          opacity: 0.12,
          borderRadius: '50%',
          filter: 'blur(180px)',
          zIndex: 0,
          animation: 'glow 8s infinite',
        }}
      />

      <Navbar />

      <Hero />

      <Stats />

      <HowItWorks />

      <ProductShowcase />

      <TechStack />

      <Technology />

      <CTA />

      <Footer />
    </main>
  );
}