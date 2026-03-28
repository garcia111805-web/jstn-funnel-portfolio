import { PhoneOff, Clock, Star, Users } from 'lucide-react';

const stats = [
  {
    icon: Clock,
    stat: '21x',
    label: 'lower chance to close if you wait 5 minutes.',
    copy: "Homeowners call 3 pros at once. If you don't reply instantly, they've already booked the guy who texted back while you were still reaching for your phone. You aren't just losing a lead; you're losing the race before it even starts.",
  },
  {
    icon: PhoneOff,
    stat: '62%',
    label: 'of calls to small businesses go unanswered.',
    copy: "When you're under a sink or on a roof, you can't pick up. Every missed call is a customer who just moved to the next contractor on the Google list. Every unanswered call is a high-value contract walking out the door.",
  },
  {
    icon: Star,
    stat: '80%',
    label: 'of happy clients forget to leave a review.',
    copy: "You do great work, but without automation, your Google ranking stays flat. One bad review can kill your trust because you aren't capturing the 5-star feedback that outweighs the noise.",
  },
  {
    icon: Users,
    stat: '91%',
    label: 'of clients would refer you, but only 11% are ever asked.',
    copy: "You’re leaving \"Found Money\" on the table. Without a post-job referral loop, you’re forced to pay for expensive new ads every month instead of growing through automated, high-trust word-of-mouth.",
  },
];

export function Pain() {

  return (
    <section
      id="problem"
      className="relative w-full py-12 lg:py-16"
    >
      <div className="section-content w-full px-6 lg:px-12 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 lg:mb-10">
          <span className="tag-pill mb-4 inline-flex">The Problem</span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-jstn-text-primary max-w-3xl leading-tight tracking-tight mb-4">
            You're Losing Jobs Without Even Realizing It.
          </h2>
          <p className="text-jstn-text-secondary text-base lg:text-lg max-w-xl lg:max-w-3xl">
            You're ignoring inbound calls, replying to web leads too late, and losing thousands to unanswered estimates. Here's what your leaky system is actually costing you.
          </p>
        </div>

        {/* Stat Cards - Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="stat-card flex flex-col items-start gap-4 p-6 lg:p-8"
              >
                <div className="absolute top-0 right-0 w-56 h-56 bg-jstn-green/5 rounded-full blur-3xl -ml-28 -mt-28 transition-opacity opacity-0 group-hover:opacity-100 pointer-events-none"></div>
                <div className="relative z-10 flex items-center gap-4 mb-4 lg:mb-6">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-jstn-green/10 flex items-center justify-center border border-jstn-green/20">
                    <Icon className="w-4 h-4 text-jstn-green" />
                  </div>
                  <p className="stat-number font-display text-3xl lg:text-4xl font-bold text-jstn-green tracking-tight">
                    {item.stat}
                  </p>
                </div>
                <div className="relative z-10">
                  <p className="text-sm lg:text-base text-jstn-text-primary leading-relaxed font-medium mb-2">
                    {item.label}
                  </p>
                  <p className="text-sm text-jstn-text-secondary leading-relaxed">
                    {item.copy}
                  </p>
                </div>
              </div>
            );
          })}
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
