import Navbar from '../sections/navbar';
import Hero from '../sections/hero';
import Benefits from '../sections/benefits';
import Stats from '../sections/stats';
import HowItWorks from '../sections/howitworks';
import Footer from '../sections/footer';

export default function HomePage() {
  return (
    <main
      style={{
        background: '#000',
        overflow: 'hidden',
      }}
    >
      <Navbar />

      <Hero />

      <Benefits />

      <Stats />

      <HowItWorks />

      <Footer />
    </main>
  );
}
