import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Methodology from './components/Methodology';
import Facilities from './components/Facilities';
import Testimonials from './components/Testimonials';
import Location from './components/Location';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Methodology />
      <Facilities />
      <Testimonials />
      <Location />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
