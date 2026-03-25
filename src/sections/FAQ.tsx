import { useState } from 'react';
import { Plus } from 'lucide-react';

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
    question: 'Do we need contracts?',
    answer: "If it's affordable & awesome, why would we need a contract... if you're happy, you'll stay.",
  },
  {
    question: 'How do we get started?',
    answer: "Message us directly. We'll send you a short video walkthrough so you can see exactly how the system works.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative w-full py-10 lg:py-16"
    >
      <div className="section-content w-full px-6 lg:px-12 max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 lg:mb-16 text-center">
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
                    className={`faq-icon w-5 h-5 text-jstn-text-secondary transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''
                      }`}
                  />
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-out ${openIndex === index ? 'max-h-96' : 'max-h-0'
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
