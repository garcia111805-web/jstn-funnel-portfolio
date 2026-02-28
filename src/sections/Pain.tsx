import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Clock, Home, Star, CalendarX } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    icon: Home,
    stat: '40%',
    label: 'of solar sales calls go to renters',
    copy: "You can't install on a rental. That's half your week wasted on conversations that never had a chance.",
  },
  {
    icon: Clock,
    stat: '21×',
    label: 'lower chance to close if you wait 5 minutes',
    copy: "Installers follow up hours later—if at all. By then, the homeowner already booked the guy who texted back instantly.",
  },
  {
    icon: CalendarX,
    stat: '50%',
    label: 'of appointments end in a no-show',
    copy: "Homeowners get busy and forget. When you drive out to a locked door, you burn both your time and your marketing budget.",
  },
  {
    icon: Star,
    stat: '5★',
    label: 'reviews lost because nobody asked',
    copy: "You do great installs, but if you don't automate the 'ask', your reputation stays flat. More reviews equals more local business.",
  },
];

export function Pain() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

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

      // Cards animation
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        gsap.fromTo(
          card,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
            delay: index * 0.1,
          }
        );

        // Stat number animation
        const statNum = card.querySelector('.stat-number');
        if (statNum) {
          gsap.fromTo(
            statNum,
            { scale: 0.92, y: 12, opacity: 0 },
            {
              scale: 1,
              y: 0,
              opacity: 1,
              duration: 0.5,
              ease: 'back.out(1.4)',
              scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
              },
              delay: index * 0.1 + 0.2,
            }
          );
        }
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="problem"
      className="relative w-full py-12 lg:py-16"
    >
      <div className="section-content w-full px-6 lg:px-12 max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="mb-8 lg:mb-10">
          <span className="tag-pill mb-4 inline-flex">The Problem</span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-jstn-text-primary max-w-3xl leading-tight tracking-tight mb-4">
            You're Losing Jobs You Don't Even Know You Had.
          </h2>
          <p className="text-jstn-text-secondary text-base lg:text-lg max-w-xl lg:max-w-3xl">
            You're talking to unqualified leads, losing deals to faster competitors, driving to empty houses, and leaving 5-star reviews on the table. Here's what your leaky system is actually costing you.
          </p>
        </div>

        {/* Stat Cards - Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          {(() => {
            const Icon21x = stats[0].icon;
            const Icon40p = stats[1].icon;
            const Icon78p = stats[2].icon;
            const Icon5s = stats[3].icon;

            return (
              <>
                {/* Card 1 (40%) - Half Width */}
                <div
                  ref={(el) => { cardsRef.current[0] = el; }}
                  className="stat-card p-5 lg:p-6 col-span-1 flex flex-col group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-56 h-56 bg-jstn-green/5 rounded-full blur-3xl -ml-28 -mt-28 transition-opacity opacity-0 group-hover:opacity-100 pointer-events-none"></div>
                  <div className="relative z-10 flex items-center gap-4 mb-4 lg:mb-6">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-jstn-green/10 flex items-center justify-center border border-jstn-green/20">
                      <Icon21x className="w-4 h-4 text-jstn-green" />
                    </div>
                    <p className="stat-number font-display text-3xl lg:text-4xl font-bold text-jstn-green tracking-tight">
                      {stats[0].stat}
                    </p>
                  </div>
                  <div className="relative z-10">
                    <p className="text-sm lg:text-base text-jstn-text-primary leading-relaxed font-medium mb-2">
                      {stats[0].label}
                    </p>
                    <p className="text-sm text-jstn-text-secondary leading-relaxed">
                      {stats[0].copy}
                    </p>
                  </div>
                </div>

                {/* Secondary Card (21x) - Half Width */}
                <div
                  ref={(el) => { cardsRef.current[1] = el; }}
                  className="stat-card p-5 lg:p-6 col-span-1 flex flex-col group"
                >
                  <div className="flex items-center gap-4 mb-4 lg:mb-6">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-jstn-green/10 flex items-center justify-center border border-jstn-green/20">
                      <Icon40p className="w-4 h-4 text-jstn-green" />
                    </div>
                    <p className="stat-number font-display text-3xl lg:text-4xl font-bold text-jstn-green tracking-tight">
                      {stats[1].stat}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm lg:text-base text-jstn-text-primary leading-relaxed font-medium mb-2">
                      {stats[1].label}
                    </p>
                    <p className="text-sm text-jstn-text-secondary leading-relaxed">
                      {stats[1].copy}
                    </p>
                  </div>
                </div>

                {/* Tertiary Card (78%) - Half Width */}
                <div
                  ref={(el) => { cardsRef.current[2] = el; }}
                  className="stat-card p-5 lg:p-6 col-span-1 flex flex-col group"
                >
                  <div className="flex items-center gap-4 mb-4 lg:mb-6">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-jstn-green/10 flex items-center justify-center border border-jstn-green/20">
                      <Icon78p className="w-4 h-4 text-jstn-green" />
                    </div>
                    <p className="stat-number font-display text-3xl lg:text-4xl font-bold text-jstn-green tracking-tight">
                      {stats[2].stat}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm lg:text-base text-jstn-text-primary leading-relaxed font-medium mb-2">
                      {stats[2].label}
                    </p>
                    <p className="text-sm text-jstn-text-secondary leading-relaxed">
                      {stats[2].copy}
                    </p>
                  </div>
                </div>

                {/* Card 4 (50%) - Half Width */}
                <div
                  ref={(el) => { cardsRef.current[3] = el; }}
                  className="stat-card p-5 lg:p-6 col-span-1 flex flex-col group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-56 h-56 bg-jstn-green/5 rounded-full blur-3xl -ml-28 -mt-28 transition-opacity opacity-0 group-hover:opacity-100 pointer-events-none"></div>
                  <div className="relative z-10 flex items-center gap-4 mb-4 lg:mb-6">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-jstn-green/10 flex items-center justify-center border border-jstn-green/20">
                      <Icon5s className="w-4 h-4 text-jstn-green" />
                    </div>
                    <p className="stat-number font-display text-3xl lg:text-4xl font-bold text-jstn-green tracking-tight">
                      {stats[3].stat}
                    </p>
                  </div>
                  <div className="relative z-10">
                    <p className="text-sm lg:text-base text-jstn-text-primary leading-relaxed font-medium mb-2">
                      {stats[3].label}
                    </p>
                    <p className="text-sm text-jstn-text-secondary leading-relaxed">
                      {stats[3].copy}
                    </p>
                  </div>
                </div>
              </>
            );
          })()}
        </div>

        {/* Closing line */}
        <div className="mt-8 lg:mt-10 text-center">
          <p className="font-display text-lg lg:text-xl text-jstn-text-primary">
            This isn't a leads problem.{' '}
            <span className="text-jstn-green">It's a systems problem.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
