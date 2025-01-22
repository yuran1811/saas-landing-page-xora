import Download from './sections/Download';
import FAQ from './sections/FAQ';
import Features from './sections/Features';
import Footer from './sections/Footer';
import Header from './sections/Header';
import Hero from './sections/Hero';
import Pricing from './sections/Pricing';
import Testimonials from './sections/Testimonials';

const App = () => {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <Hero />
        <Features />
        <Pricing />
        <FAQ />
        <Testimonials />
        <Download />
      </main>
      <Footer />
    </>
  );
};

export default App;
