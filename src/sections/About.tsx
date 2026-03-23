import { Check, X } from 'lucide-react';

const notForJstn = [
  'Handymen or one-man operations not looking to scale',
  'Owners comfortable managing leads and follow-ups manually',
  'Businesses looking for a cheap quick fix',
  'Businesses not willing to adopt an automated system',
];

const forJstn = [
  'Contractors losing high-value jobs to faster-responding local competitors',
  'Roofers, HVAC, Plumbers, and other home service businesses',
  'Companies with high lead volume but struggling to convert them into booked estimates',
  'Owners who want a packed schedule without hiring more office staff',
];

export function About() {
  return (
    <section
      id="who-is-this-for"
      className="relative w-full py-20 lg:py-32"
    >
      <div className="section-content w-full px-6 lg:px-12 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <span className="tag-pill mb-4 inline-flex">Who This Is For</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-jstn-text-primary max-w-3xl leading-tight tracking-tight uppercase">
            IS THIS FOR YOU?
          </h2>
        </div>

        {/* Two Columns */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 lg:mb-24"
        >
          {/* NOT FOR JSTN */}
          <div className="space-y-4">
            <h3 className="text-sm font-mono font-medium text-jstn-text-secondary/50 uppercase tracking-wider mb-6">
              NOT FOR YOU
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
              THIS IS FOR YOU
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
              You handle the fitness. We handle everything that happens before a member walks through your door.
              You'll never chase a lead, follow up manually, or lose a sign-up to a faster competitor again.
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
