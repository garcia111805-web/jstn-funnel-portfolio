import { MessageCircle } from 'lucide-react';

export function ClosingCTA() {
  return (
    <section
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
          className="tag-pill mb-6 inline-flex"
        >
          Get Started
        </span>

        {/* Headline */}
        <h2
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
          className="text-jstn-text-secondary text-base lg:text-lg mb-6"
        >
          Every day without a system is a high-value job that went to someone faster.{' '}
          Get a system built for your home service business today.
        </p>

        {/* Expectation line */}
        <p
          className="text-jstn-text-secondary/70 text-sm lg:text-base max-w-xl mx-auto mb-8"
        >
          Message us directly — we'll send you a short walkthrough video so you can see
          exactly how the system works.
        </p>

        {/* CTA Button */}
        <a
          href="https://api.whatsapp.com/send?phone=639613480474&text=Hi%2C%20I%27d%20like%20to%20get%20a%20free%20walkthrough%20of%20the%20system"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex items-center gap-3 px-8 py-4 bg-jstn-green text-jstn-bg font-semibold rounded-full text-base mb-4 cursor-pointer"
        >
          <MessageCircle className="w-5 h-5" />
          Get the Free Demo on WhatsApp
        </a>


      </div>
    </section>
  );
}
