import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const systems = [
  {
    tag: 'Response Time',
    name: 'Instant Lead Follow-Up',
    copy: "You're on the roof or driving to a site survey. While you're busy, we hit every new lead with a text within 60 seconds. You never lose a deal to the 'fastest replier' again.",
    caption: 'Fires instantly the second a lead comes in.',
    image: '/automation/automated followups.png',
    layout: 'right',
  },
  {
    tag: 'Never Miss a Lead',
    name: 'Missed Call Text-Back',
    copy: "If you don't answer, she's calling the next installer on Google. We catch that missed call instantly with a text asking how we can help—saving the job before it's gone.",
    caption: 'Catches every missed call, exactly when it happens.',
    image: '/automation/missedcall textback.png',
    layout: 'left',
  },
  {
    tag: 'Protect Your Calendar',
    name: 'Automated Appointment Reminders',
    copy: "Nothing hurts more than driving 45 minutes to a locked door. We automate texts and emails before the appointment so they actually remember you're coming.",
    caption: 'A polite, persistent sequence that guarantees they show up.',
    images: [
      '/automation/reducing no show (online call).png',
      '/automation/reducing no show (site survey).png',
      '/automation/reducing no show ( installation day).png',
    ],
    subLabels: ['Online Call', 'Site Survey', 'Installation Day'],
    layout: 'right',
  },
  {
    tag: 'Social Proof on Autopilot',
    name: 'Automated Review Requests',
    copy: "You just finished a perfect install. Instead of hoping they review you, the system automatically asks for one while they're still smiling. Watch your local rank climb.",
    caption: 'Fires off as soon as the project is marked complete.',
    image: '/automation/reputation management.png',
    layout: 'left',
    maxWidthClass: 'max-w-sm',
  },
  {
    tag: 'Hidden Revenue',
    name: 'Database Reactivation',
    copy: "You have old leads who said 'not right now' 6 months ago. Our system sends them a friendly text to see if they're ready, turning a dead spreadsheet into booked surveys.",
    caption: 'Extracts thousands in cash from leads you already bought.',
    image: '/automation/database reactivation.png',
    layout: 'right',
    maxWidthClass: 'max-w-lg',
  },
];

export function System() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const rowsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
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

      rowsRef.current.forEach((row) => {
        if (!row) return;

        const tagPill = row.querySelector('.tag-pill');

        gsap.fromTo(
          row,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: row,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );

        if (tagPill) {
          gsap.fromTo(
            tagPill,
            { scale: 0.92, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.4,
              ease: 'back.out(1.3)',
              scrollTrigger: {
                trigger: row,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
              },
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
      id="system"
      className="relative w-full py-20 lg:py-32"
    >
      <div className="section-content w-full px-6 lg:px-12 max-w-7xl mx-auto">
        <div ref={headerRef} className="mb-16 lg:mb-24">
          <span className="tag-pill mb-4 inline-flex">The Solution: Part 3</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-jstn-text-primary max-w-3xl leading-tight tracking-tight mb-4">
            Built Once. Runs Every Day Without You.
          </h2>
          <p className="text-jstn-text-secondary text-base lg:text-lg max-w-xl">
            The engine behind the websites. Here is exactly what gets built and activated to capture and convert those leads.
          </p>
        </div>

        <div className="space-y-16 lg:space-y-24">
          {systems.map((system, index) => (
            <div
              key={index}
              ref={(el) => { rowsRef.current[index] = el; }}
              className={`system-row-card flex flex-col ${system.layout === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'
                } gap-8 lg:gap-12 p-6 lg:p-10`}
            >
              <div className={`copy-block flex flex-col justify-center shrink-0 ${system.images ? 'lg:w-[20%]' : 'lg:w-[35%]'}`}>
                <span className="tag-pill mb-4 self-start">{system.tag}</span>
                <h3 className="font-display text-2xl lg:text-3xl font-semibold text-jstn-text-primary mb-4">
                  {system.name}
                </h3>
                <p className="text-jstn-text-secondary leading-relaxed mb-4">
                  {system.copy}
                </p>
                <p className="text-sm text-jstn-text-secondary/60">
                  {system.caption}
                </p>
              </div>

              <div className={`image-block flex items-center justify-center ${system.images ? 'lg:w-[80%]' : 'lg:w-[65%]'}`}>
                {system.images ? (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 h-full items-center">
                    {system.images.map((img, imgIndex) => (
                      <div key={imgIndex} className="flex flex-col items-center justify-center">
                        <div className="w-full rounded-xl overflow-hidden shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)] border border-white/5">
                          <img
                            src={img}
                            alt={`${system.subLabels?.[imgIndex]}`}
                            className="w-full h-auto object-cover"
                            loading="lazy"
                          />
                        </div>
                        <p className="text-xs sm:text-sm font-medium text-jstn-text-secondary/80 mt-3 text-center">
                          {system.subLabels?.[imgIndex]}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className={`w-full ${system.maxWidthClass || 'max-w-md'} mx-auto rounded-xl overflow-hidden shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)] border border-white/5 bg-[#1C1C1E] p-4 lg:p-6`}>
                    <img
                      src={system.image}
                      alt={system.name}
                      className="w-full h-auto object-contain rounded-lg"
                      loading="lazy"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 lg:mt-24 text-center">
          <p className="font-display text-xl lg:text-2xl text-jstn-text-primary">
            Five systems. All running simultaneously.{' '}
            <span className="text-jstn-green">All without you touching a thing.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
