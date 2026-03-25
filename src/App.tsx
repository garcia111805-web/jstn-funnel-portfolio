import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AnimatedBackground } from './components/background/AnimatedBackground';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Hero } from './sections/Hero';
import { Pain } from './sections/Pain';
import { SelectedWork } from './sections/SelectedWork';
import { System } from './sections/System';
import { About } from './sections/About';
import { Process } from './sections/Process';
import { FAQ } from './sections/FAQ';
import { ClosingCTA } from './sections/ClosingCTA';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Refresh ScrollTrigger on load
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-jstn-bg">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <Pain />
        <SelectedWork />
        <System />
        <About />
        <Process />
        <FAQ />
        <ClosingCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
