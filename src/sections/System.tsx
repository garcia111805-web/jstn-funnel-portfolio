import { MessageSquare, PhoneMissed, Star, RefreshCw, Inbox, PhoneCall } from 'lucide-react';
const systems = [
  {
    icon: MessageSquare,
    tag: 'CLOSE MORE DEALS',
    name: 'Automated Follow Ups',
    copy: "Leads come in through multiple channels, contact forms, phone calls, and chat widgets. The moment a lead reaches out through any of them, they get an instant automated reply making sure they always feel heard and never ignored.",
    caption: 'Every lead gets a response, every single time.',
  },
  {
    icon: PhoneMissed,
    tag: 'NEVER MISS A LEAD',
    name: 'Missed Call Text Back',
    copy: "You can't always answer the phone, maybe you're up on a roof or in the middle of a job. The second a call gets missed, an automatic text goes out so the lead stays warm and doesn't call your competitor instead.",
    caption: 'Because the first business to respond wins the job.',
  },
  {
    icon: Star,
    tag: 'BUILD TRUST',
    name: 'Reputation Management',
    copy: "Happy clients get sent straight to Google to leave a public 5 star review. Unhappy clients are handled privately so your online reputation stays protected.",
    caption: 'More 5 star reviews. Zero public complaints.',
  },
  {
    icon: RefreshCw,
    tag: 'RE-ENGAGE',
    name: 'Remarketing Campaigns',
    copy: "Once a client leaves a review, we automatically send them a discount they can use for their next job or share with a friend to get them a deal too.",
    caption: 'Turn happy clients into repeat customers and referral machines.',
  },
];

export function System() {
  return (
    <section
      id="system"
      className="relative w-full pt-4 lg:pt-8 pb-10 lg:pb-16"
    >
      <div className="section-content w-full px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="mb-16 lg:mb-24">
          <span className="tag-pill mb-4 inline-flex">The Solution: Part 2</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-jstn-text-primary max-w-3xl leading-tight tracking-tight mb-4">
            Built Once. Runs Every Day Without You.
          </h2>
          <p className="text-jstn-text-secondary text-base lg:text-lg max-w-xl">
            The engine behind the websites. Here is exactly what gets built and activated to capture and convert those leads.
          </p>
        </div>

        {/* Systems Cards - Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          {systems.map((system, index) => {
            const Icon = system.icon;
            return (
              <div
                key={index}
                className={`stat-card flex flex-col items-start p-6 lg:p-8 w-full group relative overflow-hidden ${index === 4 ? "lg:col-span-2 lg:flex-row lg:items-center lg:gap-8 lg:justify-between" : "gap-6"}`}
              >
                <div className="absolute top-0 right-0 w-56 h-56 bg-jstn-green/5 rounded-full blur-3xl -ml-28 -mt-28 transition-opacity opacity-0 group-hover:opacity-100 pointer-events-none"></div>
                
                <div className={`relative z-10 w-full flex flex-col ${index === 4 ? "lg:w-1/2" : "h-full"}`}>
                  {/* Header (Badge + Icon) */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-jstn-green/10 flex items-center justify-center border border-jstn-green/20">
                      <Icon className="w-5 h-5 text-jstn-green" />
                    </div>
                    <span className="tag-pill m-0 inline-flex">{system.tag}</span>
                  </div>

                  <h3 className="font-display text-2xl lg:text-3xl font-semibold text-jstn-text-primary mb-3">
                    {system.name}
                  </h3>
                  <p className="text-sm lg:text-base text-jstn-text-secondary leading-relaxed mb-4 lg:mb-0">
                    {system.copy}
                  </p>
                </div>

                {/* Subtext/Caption */}
                <div className={`relative z-10 w-full mt-auto ${index === 4 ? "lg:w-1/2 lg:mt-0 lg:pl-6 lg:border-l lg:border-white/10" : ""}`}>
                  <div className="p-4 lg:p-5 rounded-xl bg-black/40 border border-white/5 shadow-inner">
                    <p className="text-sm font-medium text-jstn-text-primary/90 italic">
                      "{system.caption}"
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 lg:mt-24 mb-16 lg:mb-24 text-center">
          <p className="font-display text-xl lg:text-2xl text-jstn-text-primary">
            Four systems. All running simultaneously.{' '}
            <span className="text-jstn-green">All without you touching a thing.</span>
          </p>
        </div>

        {/* Feature Section: Inbox & Phone */}

        <div className="mt-10 lg:mt-16 mb-10 lg:mb-16">
          <span className="tag-pill mb-4 inline-flex">The Solution: Part 3</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-jstn-text-primary max-w-3xl leading-tight tracking-tight mb-4">
            Manage Everything in One Place.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          {/* Card 1: All in One Inbox */}
          <div className="stat-card flex flex-col items-start p-6 lg:p-8 w-full group relative overflow-hidden gap-6">
            <div className="absolute top-0 right-0 w-56 h-56 bg-jstn-green/5 rounded-full blur-3xl -ml-28 -mt-28 transition-opacity opacity-0 group-hover:opacity-100 pointer-events-none"></div>
            
            <div className="relative z-10 w-full flex flex-col h-full">
              <div className="flex items-center gap-4 mb-5">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-jstn-green/10 flex items-center justify-center border border-jstn-green/20">
                  <Inbox className="w-5 h-5 text-jstn-green" />
                </div>
                <span className="tag-pill m-0 inline-flex">STAY ORGANIZED</span>
              </div>

              <h3 className="font-display text-2xl lg:text-3xl font-semibold text-jstn-text-primary mb-3">
                All in One Inbox
              </h3>
              <p className="text-sm lg:text-base text-jstn-text-secondary leading-relaxed mb-4 lg:mb-0">
                Every message from Facebook, Instagram, SMS, and email lands in one place so nothing gets missed. No more switching between apps, every lead gets a fast response from a single inbox.
              </p>
            </div>

            <div className="relative z-10 w-full mt-auto">
              <div className="p-4 lg:p-5 rounded-xl bg-black/40 border border-white/5 shadow-inner">
                <p className="text-sm font-medium text-jstn-text-primary/90 italic">
                  "One inbox. Every message. Zero leads lost."
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Business Phone Number */}
          <div className="stat-card flex flex-col items-start p-6 lg:p-8 w-full group relative overflow-hidden gap-6">
            <div className="absolute top-0 right-0 w-56 h-56 bg-jstn-green/5 rounded-full blur-3xl -ml-28 -mt-28 transition-opacity opacity-0 group-hover:opacity-100 pointer-events-none"></div>
            
            <div className="relative z-10 w-full flex flex-col h-full">
              <div className="flex items-center gap-4 mb-5">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-jstn-green/10 flex items-center justify-center border border-jstn-green/20">
                  <PhoneCall className="w-5 h-5 text-jstn-green" />
                </div>
                <span className="tag-pill m-0 inline-flex">LOOK PROFESSIONAL</span>
              </div>

              <h3 className="font-display text-2xl lg:text-3xl font-semibold text-jstn-text-primary mb-3">
                Business Phone Number
              </h3>
              <p className="text-sm lg:text-base text-jstn-text-secondary leading-relaxed mb-4 lg:mb-0">
                Your clients will always reach a dedicated business number that keeps your personal and professional life completely separate. Every call is tracked and recorded so you always know where your leads are coming from.
              </p>
            </div>

            <div className="relative z-10 w-full mt-auto">
              <div className="p-4 lg:p-5 rounded-xl bg-black/40 border border-white/5 shadow-inner">
                <p className="text-sm font-medium text-jstn-text-primary/90 italic">
                  "A real business number that builds trust before you even answer."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
