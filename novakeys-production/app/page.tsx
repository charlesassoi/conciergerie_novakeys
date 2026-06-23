import Contact from '@/components/Contact';
import EstimateForm from '@/components/EstimateForm';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Pricing from '@/components/Pricing';
import Services from '@/components/Services';
import WhyUs from '@/components/WhyUs';

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <WhyUs />
      <EstimateForm />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}
