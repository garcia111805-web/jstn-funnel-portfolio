import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessageCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function ClosingCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subCopyRef = useRef<HTMLParagraphElement>(null);
  const expectationRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const microRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Simple fade-in animations on scroll
      gsap.fromTo(
        labelRef.current,
        { y: -10, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      const headlineWords = headlineRef.current?.querySelectorAll('.word');
      if (headlineWords) {
        gsap.fromTo(
          headlineWords,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.03,
            duration: 0.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      gsap.fromTo(
        [subCopyRef.current, expectationRef.current],
        { y: 16, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        ctaRef.current,
        { scale: 0.96, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: 'back.out(1.4)',
          scrollTrigger: {
            trigger: section,
            start: 'top 65%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        microRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="cta"
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden py-20 lg:py-32"
    >
      {/* Vignette overlay for this section */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 20%, rgba(11, 11, 12, 0.5) 100%)'
        }}
      />

      <div className="section-content w-full px-6 lg:px-12 text-center max-w-3xl mx-auto">
        {/* Label */}
        <span
          ref={labelRef}
          className="tag-pill mb-6 inline-flex"
        >
          Get Started
        </span>

        {/* Headline */}
        <h2
          ref={headlineRef}
          className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-jstn-text-primary leading-tight tracking-tight mb-6"
        >
          <span className="word inline-block">Your</span>{' '}
          <span className="word inline-block">Competitors</span>{' '}
          <span className="word inline-block">Are</span>{' '}
          <span className="word inline-block">Already</span>{' '}
          <span className="word inline-block text-jstn-green">Automating.</span>
        </h2>

        {/* Sub copy */}
        <p
          ref={subCopyRef}
          className="text-jstn-text-secondary text-base lg:text-lg mb-6"
        >
          Every day without a system is a job that went to someone faster.
          Get a system built for your solar business today.
        </p>

        {/* Expectation line */}
        <p
          ref={expectationRef}
          className="text-jstn-text-secondary/70 text-sm lg:text-base max-w-xl mx-auto mb-8"
        >
          Message us on WhatsApp — we'll send you a short walkthrough video so you can see
          exactly how the system works. Then it's just a straight chat from there.
          No calls. No forms. No pressure.
        </p>

        {/* CTA Button */}
        <a
          ref={ctaRef as any}
          href="https://api.whatsapp.com/send?phone=639613480474&text=Hi%2C%20I%27d%20like%20to%20get%20a%20free%20walkthrough%20of%20the%20system"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex items-center gap-3 px-8 py-4 bg-jstn-green text-jstn-bg font-semibold rounded-full text-base mb-4 cursor-pointer"
        >
          <MessageCircle className="w-5 h-5" />
          Get a Free Walkthrough
        </a>

        {/* Micro copy */}
        <p
          ref={microRef}
          className="text-jstn-text-secondary/50 text-sm"
        >
          Usually replies within a few hours.
        </p>
      </div>
    </section>
  );
}
