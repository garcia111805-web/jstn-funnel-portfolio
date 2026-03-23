import { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const niches = [
  "Roofing",
  "Solar",
  "HVAC",
  "Plumbing",
  "Landscaping",
  "Pest Control",
  "Pool Installation",
  "Home Remodeling"
];

export function Hero() {
  const [currentNicheIndex, setCurrentNicheIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNicheIndex((prev) => (prev + 1) % niches.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);



  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full">
      <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-16">
        <div className="section-content w-full px-6 lg:px-12 flex flex-col items-center justify-center relative z-10">
          {/* Headline - with proper spacing */}
          <h1
            className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-center text-jstn-text-primary max-w-5xl mx-auto leading-[1.2] tracking-tight mb-6"
          >
            More Leads. More Bookings.<br className="hidden sm:block" />
            <div className="mt-1 sm:mt-2">
              More Revenue for{' '}
              <span className="inline-grid overflow-hidden text-jstn-green text-center align-bottom">
                <span className="invisible col-start-1 row-start-1 whitespace-nowrap px-1">Pool Installation</span>
                {niches.map((niche, i) => (
                  <span
                    key={niche}
                    className={`col-start-1 row-start-1 whitespace-nowrap transition-all duration-500 ease-in-out ${
                      i === currentNicheIndex 
                        ? 'opacity-100 translate-y-0' 
                        : (currentNicheIndex === 0 && i === niches.length - 1) || i === currentNicheIndex - 1
                          ? 'opacity-0 -translate-y-[1.2em]' 
                          : 'opacity-0 translate-y-[1.2em]'
                    }`}
                  >
                    {niche}
                  </span>
                ))}
              </span>{' '}
              <span className="inline-block mt-1 sm:mt-0">& Home Service Pros.</span>
            </div>
          </h1>

          {/* Subheadline */}
          <p
            className="text-center text-jstn-text-secondary text-base lg:text-lg max-w-2xl mx-auto mb-8"
          >
            We help you capture every lead, protect your reputation, and run your whole business from a single app.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <button
              onClick={() => scrollToSection('#cta')}
              className="btn-primary px-8 py-3.5 bg-jstn-green text-jstn-bg font-semibold rounded-full text-base"
            >
              Message me to see the backend
            </button>
            <button
              onClick={() => scrollToSection('#problem')}
              className="btn-ghost px-8 py-3.5 border border-white/15 text-jstn-text-primary font-medium rounded-full text-base flex items-center gap-2"
            >
              See How It Works
              <ArrowDown size={16} />
            </button>
          </div>

          {/* Micro copy */}
          <p className="text-center text-jstn-text-secondary/70 text-sm">
            Built for busy contractors, not tech guys. No confusion, just results.
          </p>
        </div>

      </section>
    </div>
  );
}
