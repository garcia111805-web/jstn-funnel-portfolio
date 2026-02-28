import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const notForJstn = [
  'Installers comfortable chasing leads manually',
  'Solo operators not ready to handle more volume',
  'Anyone who wants to stay small on purpose',
  'Businesses not willing to commit to a system',
];

const forJstn = [
  'Solar installers doing 10–50 installs a month',
  'Teams losing jobs to competitors because they take too long to reply',
  'Owners ready to scale without hiring a full operations team',
  'Businesses that are generating lots of leads but struggling to turn them into actual installs',
];

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const columnsRef = useRef<HTMLDivElement>(null);
  const founderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Columns animation
      if (columnsRef.current) {
        const notForItems = columnsRef.current.querySelectorAll('.not-for-item');
        const forItems = columnsRef.current.querySelectorAll('.for-item');

        gsap.fromTo(
          notForItems,
          { x: -20, opacity: 0.3 },
          {
            x: 0,
            opacity: 0.55,
            duration: 0.5,
            stagger: 0.06,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: columnsRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );

        gsap.fromTo(
          forItems,
          { x: 20, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.06,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: columnsRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Founder animation
      if (founderRef.current) {
        const portrait = founderRef.current.querySelector('.founder-portrait');
        const text = founderRef.current.querySelector('.founder-text');

        gsap.fromTo(
          portrait,
          { scale: 0.9, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            ease: 'back.out(1.6)',
            scrollTrigger: {
              trigger: founderRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );

        gsap.fromTo(
          text,
          { y: 16, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: founderRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="who-is-this-for"
      className="relative w-full py-20 lg:py-32"
    >
      <div className="section-content w-full px-6 lg:px-12 max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="mb-12 lg:mb-16">
          <span className="tag-pill mb-4 inline-flex">Who This Is For</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-jstn-text-primary max-w-3xl leading-tight tracking-tight">
            jstn Is Built for a Specific Kind of Installer.
          </h2>
        </div>

        {/* Two Columns */}
        <div
          ref={columnsRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 lg:mb-24"
        >
          {/* NOT FOR JSTN */}
          <div className="space-y-4">
            <h3 className="text-sm font-mono font-medium text-jstn-text-secondary/50 uppercase tracking-wider mb-6">
              NOT FOR JSTN
            </h3>
            {notForJstn.map((item, index) => (
              <div
                key={index}
                className="not-for-item flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02]"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center">
                  <X className="w-4 h-4 text-red-500/60" />
                </div>
                <span className="text-jstn-text-secondary/50">{item}</span>
              </div>
            ))}
          </div>

          {/* THIS IS FOR JSTN */}
          <div className="space-y-4">
            <h3 className="text-sm font-mono font-medium text-jstn-green uppercase tracking-wider mb-6">
              THIS IS FOR JSTN
            </h3>
            {forJstn.map((item, index) => (
              <div
                key={index}
                className="for-item flex items-center gap-4 p-4 rounded-xl border border-jstn-green/20 bg-jstn-green/5"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-jstn-green/20 flex items-center justify-center">
                  <Check className="w-4 h-4 text-jstn-green" />
                </div>
                <span className="text-jstn-text-primary">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Founder Block (About) */}
        <div
          ref={founderRef}
          id="about"
          className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 p-8 lg:p-12 rounded-2xl border border-white/5 bg-white/[0.02] scroll-mt-24"
        >
          {/* Portrait */}
          <div className="founder-portrait flex-shrink-0 w-32 h-40 lg:w-40 lg:h-48 rounded-2xl overflow-hidden border-2 border-jstn-green shadow-[0_0_20px_rgba(34,197,94,0.2)]">
            <img
              src="/founder_new.png"
              alt="Justin - Founder"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Text */}
          <div className="founder-text text-center lg:text-left">
            <p className="text-jstn-text-primary leading-relaxed mb-4">
              You handle the solar. We handle everything that happens before a homeowner reaches you.
              You'll never chase a lead, follow up manually, or lose a job to a faster competitor again.
            </p>
            <p className="text-jstn-text-secondary leading-relaxed mb-6">
              If it doesn't work for your business, it doesn't work for us either.
            </p>
            <p className="font-display text-lg font-semibold text-jstn-green">
              Justin
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
