import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const works = [
  {
    name: 'Solarlite',
    tag: 'Solar Lead Website',
    image: 'https://i.imgur.com/pLWksWz.png',
    url: 'https://solarlite6.vercel.app/',
  },
  {
    name: 'EconoSolar',
    tag: 'Qualification Website',
    image: 'https://i.imgur.com/0BFWNR9.png',
    url: 'https://econo-solar-sth7-6dmg1dvcb-justins-projects-d91d43d5.vercel.app/',
  },
  {
    name: 'MariSolar',
    tag: 'Appointment Booking Website',
    image: 'https://i.imgur.com/rCc4yZy.png',
    url: 'https://marisolar-fvpz-euzrgay24-justins-projects-d91d43d5.vercel.app/',
  },
  {
    name: 'ZenithSolar',
    tag: 'Lead Generation Website',
    image: 'https://i.imgur.com/6Fl3KXi.png',
    url: 'https://zenithsolar-7aax8ihps-justins-projects-d91d43d5.vercel.app/',
  },
];

export function SelectedWork() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeWork, setActiveWork] = useState<number | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current,
        { y: 18, opacity: 0 },
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
      cardsRef.current.forEach((card) => {
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
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        id="work"
        className="relative w-full py-20 lg:py-32 bg-jstn-bg"
      >
        <div className="section-content w-full px-6 lg:px-12 max-w-7xl mx-auto">
          {/* Header */}
          <div ref={headerRef} className="mb-12 lg:mb-16">
            <span className="tag-pill mb-4 inline-flex">
              The Solution: Part 1
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-jstn-text-primary max-w-2xl leading-tight tracking-tight mb-4">
              High-Converting Websites.
            </h2>
            <p className="text-jstn-text-secondary text-base lg:text-lg max-w-2xl">
              Before we qualify leads, we have to capture them. Here are samples of the high-performance websites we build to drive initial homeowner interest.
            </p>
          </div>

          {/* Work Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {works.map((work, index) => (
              <div
                key={index}
                ref={(el) => { cardsRef.current[index] = el; }}
                className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden cursor-pointer hover:border-jstn-green/30 transition-colors duration-300 shadow-xl"
                onClick={() => setActiveWork(index)}
              >
                {/* Browser Frame Header */}
                <div className="h-10 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-white/20"></div>
                  <div className="w-3 h-3 rounded-full bg-white/20"></div>
                  <div className="w-3 h-3 rounded-full bg-white/20"></div>
                </div>

                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={work.image}
                    alt={work.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-jstn-bg/60 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <span className="px-6 py-3 bg-jstn-green text-jstn-bg font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      Click to view live site
                    </span>
                  </div>
                  {/* Static overlay with info */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/90 to-transparent pointer-events-none z-10 transition-opacity duration-300 group-hover:opacity-0" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 z-10 transition-opacity duration-300 group-hover:opacity-0">
                    <span className="font-display font-semibold text-white">
                      {work.name}
                    </span>
                    <span className="text-sm text-white/70">
                      — {work.tag}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-jstn-green ml-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for iframe */}
      {activeWork !== null && (
        <div
          className="fixed inset-0 z-50 bg-jstn-bg/95 backdrop-blur-xl flex items-center justify-center p-4 lg:p-8"
          onClick={() => setActiveWork(null)}
        >
          <div
            className="relative w-full max-w-6xl h-[80vh] bg-jstn-bg rounded-2xl overflow-hidden border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-4 lg:px-6 py-3 border-b border-white/5">
              <div className="flex items-center gap-3">
                <span className="font-display font-semibold text-jstn-text-primary">
                  {works[activeWork].name}
                </span>
                <span className="text-sm text-jstn-text-secondary">
                  {works[activeWork].tag}
                </span>
              </div>
              <button
                onClick={() => setActiveWork(null)}
                className="p-2 hover:bg-white/5 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-jstn-text-secondary" />
              </button>
            </div>

            {/* Iframe */}
            <iframe
              src={works[activeWork].url}
              className="w-full h-[calc(80vh-60px)]"
              title={works[activeWork].name}
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
        </div>
      )}
    </>
  );
}
