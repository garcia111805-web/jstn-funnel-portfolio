export function Process() {
  const steps = [
    {
      number: '1',
      title: 'Demo Call',
      subtitle: '(20 mins)',
      description: "Let's be real—this is a low-pressure discovery call to see if we're essentially a perfect fit for your business. We'll walk you through live results, answer your questions, and show you exactly what to expect."
    },
    {
      number: '2',
      title: 'We build your system',
      subtitle: '(7-10 days)',
      description: "Once you fill out a simple onboarding form with your details, we fully take over. Our team immediately gets to work custom-building your new website and lead capture system from the ground up."
    },
    {
      number: '3',
      title: 'Launch Call',
      subtitle: '(25 mins)',
      description: "We'll hand over the keys to your new automated system and give you a quick onboarding crash course. You'll quickly see that operating your new engine is literally as simple as pressing two buttons."
    }
  ];

  return (
    <section id="process" className="relative w-full py-10 lg:py-16 bg-jstn-bg border-t border-white/5">
      <div className="section-content w-full px-6 lg:px-12 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 lg:mb-24 text-center">
          <span className="tag-pill mb-4 inline-flex">Next Steps</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-jstn-text-primary leading-tight tracking-tight mb-4">
            How It Works
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
          
          {/* Desktop Dotted Line connector */}
          <div className="hidden md:block absolute top-[2.5rem] left-[16%] right-[16%] h-[2px] border-t-2 border-dashed border-white/10 z-0"></div>

          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center relative z-10">
              {/* Animated/Glowing Number Circle */}
              <div className="w-20 h-20 rounded-full bg-jstn-green/10 flex items-center justify-center border-2 border-jstn-green shadow-[0_0_20px_rgba(34,197,94,0.2)] mb-8">
                <span className="text-3xl font-display font-medium text-jstn-green">
                  {step.number}
                </span>
              </div>
              
              <h3 className="text-xl lg:text-2xl font-display font-semibold text-jstn-text-primary mb-1">
                {step.title}
              </h3>
              <p className="text-sm font-semibold text-jstn-green mb-6">
                {step.subtitle}
              </p>
              
              <p className="text-jstn-text-secondary text-base lg:text-lg leading-relaxed max-w-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
