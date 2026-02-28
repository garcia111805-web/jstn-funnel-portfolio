import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const microRef = useRef<HTMLParagraphElement>(null);
  const chevronRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Load animation timeline
      const loadTl = gsap.timeline({ delay: 0.2 });

      // Headline entrance
      loadTl.fromTo(
        headlineRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out' }
      );

      // Subheadline
      loadTl.fromTo(
        subheadlineRef.current,
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' },
        '-=0.4'
      );

      // CTAs
      loadTl.fromTo(
        ctaRef.current,
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' },
        '-=0.3'
      );

      // Micro copy
      loadTl.fromTo(
        microRef.current,
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' },
        '-=0.3'
      );

      // Chevron
      loadTl.fromTo(
        chevronRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5 },
        '-=0.3'
      );

    }, section);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={sectionRef} className="w-full">
      <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-16">
        <div className="section-content w-full px-6 lg:px-12 flex flex-col items-center justify-center relative z-10">
          {/* Headline - with proper spacing */}
          <h1
            ref={headlineRef}
            className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-center text-jstn-text-primary max-w-5xl mx-auto flex flex-col items-center justify-center leading-tight tracking-tight mb-6"
          >
            <span>Reclaim 20 Hours a Week</span>
            <span className="text-jstn-green mt-1 sm:mt-2">by Automating Your Solar Lead Qualification.</span>
          </h1>

          {/* Subheadline */}
          <p
            ref={subheadlineRef}
            className="text-center text-jstn-text-secondary text-base lg:text-lg max-w-2xl mx-auto mb-8"
          >
            Stop chasing homeowners who can't buy. jstn handles your entire lead-to-appointment process —
            so only serious, ready-to-close homeowners ever reach your calendar.
          </p>

          {/* CTAs */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <button
              onClick={() => scrollToSection('#cta')}
              className="btn-primary px-8 py-3.5 bg-jstn-green text-jstn-bg font-semibold rounded-full text-base"
            >
              Claim My 20 Hours
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
          <p ref={microRef} className="text-center text-jstn-text-secondary/70 text-sm">
            No dashboards. No tech headaches. No learning curve.
          </p>
        </div>

        {/* Bouncing Chevron */}
        <div
          ref={chevronRef}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="bouncing-chevron text-jstn-text-secondary/50">
            <ArrowDown size={24} />
          </div>
        </div>
      </section>
    </div>
  );
}
