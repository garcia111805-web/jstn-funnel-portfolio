import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Plus } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: 'Do I need to learn any software or log into anything?',
    answer: 'No. Once the system is built it runs entirely in the background. You won\'t touch a dashboard, manage a tool, or configure a single setting — you just receive the results.',
  },
  {
    question: 'What happens when a lead comes in at midnight or on a weekend?',
    answer: 'The system responds automatically within 60 seconds regardless of the time or day. You won\'t lose a lead because you were on a job site or off the clock.',
  },
  {
    question: 'How is this different from hiring someone to handle my leads?',
    answer: 'A person sleeps, gets sick, needs training, and makes mistakes under pressure. The system doesn\'t. Same process, perfectly executed, every single time.',
  },
  {
    question: 'I\'ve tried other marketing services before and they didn\'t work. Why is this different?',
    answer: 'Most services get you more leads and call it done. The problem was never the number of leads — it was that nobody was qualifying them or following up fast enough. That\'s the exact gap we fill.',
  },
  {
    question: 'How do we get started?',
    answer: 'Message us on WhatsApp. We\'ll send you a short video walkthrough so you can see exactly how the system works — then it\'s just a straight chat conversation from there. No calls, no forms, no pressure.',
  },
];

export function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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

      // FAQ items animation
      itemsRef.current.forEach((item, index) => {
        if (!item) return;

        gsap.fromTo(
          item,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
            delay: index * 0.06,
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="relative w-full py-20 lg:py-32"
    >
      <div className="section-content w-full px-6 lg:px-12 max-w-4xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="mb-12 lg:mb-16 text-center">
          <span className="tag-pill mb-4 inline-flex">Good Questions</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-jstn-text-primary leading-tight tracking-tight">
            Things Worth Asking Before You Message Us.
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              ref={(el) => { itemsRef.current[index] = el; }}
              className="faq-item"
              data-state={openIndex === index ? 'open' : 'closed'}
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex items-center justify-between p-5 lg:p-6 text-left"
              >
                <span className="font-medium text-jstn-text-primary pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                  <Plus
                    className={`faq-icon w-5 h-5 text-jstn-text-secondary transition-transform duration-300 ${
                      openIndex === index ? 'rotate-45' : ''
                    }`}
                  />
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-out ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-5 lg:px-6 pb-5 lg:pb-6">
                  <p className="text-jstn-text-secondary leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
