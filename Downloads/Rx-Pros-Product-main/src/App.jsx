import Header from './components/Header';
import HeroSection from './components/HeroSection';
import TabNavigation from './components/TabNavigation';
import FeaturesSection from './components/FeaturesSection';
import ProcessSection from './components/ProcessSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <TabNavigation />
      <FeaturesSection />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;