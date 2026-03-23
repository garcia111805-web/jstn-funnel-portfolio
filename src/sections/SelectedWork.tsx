import hvacDesktop from '../../materials/hvac desktop version.png';
import hvacMobile from '../../materials/hvac mobile version.png';
import landscapingDesktop from '../../materials/landscaping desktop version.png';
import landscapingMobile from '../../materials/landscaping mobile version.png';

const works = [
  {
    name: 'HVAC Pro Solutions',
    tag: 'Conversion-Optimized',
    desktopImage: hvacDesktop,
    mobileImage: hvacMobile,
  },
  {
    name: 'Elite Landscaping',
    tag: 'Lead Generation',
    desktopImage: landscapingDesktop,
    mobileImage: landscapingMobile,
  },
];

export function SelectedWork() {
  return (
    <>
      <section
        id="work"
        className="relative w-full py-20 lg:py-32 bg-jstn-bg"
      >
        <div className="section-content w-full px-6 lg:px-12 max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12 lg:mb-16">
            <span className="tag-pill mb-4 inline-flex">
              The Solution
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-jstn-text-primary max-w-2xl leading-tight tracking-tight mb-4">
              High-Converting Websites.
            </h2>
            <p className="text-jstn-text-secondary text-base lg:text-lg max-w-2xl">
              Not your typical display website. Built to convert, not just impress, with a sticky quote button, clickable phone number, and live chat widget so every visitor has a reason to reach out.
            </p>
          </div>

          {/* Work Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full mt-12 lg:mt-20">
            {works.map((work, index) => (
              <div
                key={index}
                className="relative bg-white/5 border border-white/10 rounded-[2rem] p-6 lg:p-8 shadow-xl flex flex-col justify-end"
              >
                {/* Desktop View (MacBook Frame) Aligned to Right */}
                <div className="w-[85%] relative z-10 ml-auto mr-0 mb-6 lg:mb-12 shadow-2xl">
                  {/* Screen Frame with Fixed Aspect Ratio */}
                  <div className="relative w-full bg-[#1e1e1e] border-[8px] lg:border-[12px] border-[#2a2a2a] rounded-t-xl rounded-b-[2px] flex flex-col overflow-hidden aspect-[16/10]">
                     {/* Camera */}
                     <div className="absolute top-1 lg:top-1.5 left-1/2 -translate-x-1/2 w-1 h-1 lg:w-1.5 lg:h-1.5 rounded-full bg-[#111] z-30 pointer-events-none"></div>
                     {/* Browser Header */}
                     <div className="h-4 lg:h-6 bg-[#2d2d2d] flex items-center px-2 gap-1 w-full border-b border-[#1f1f1f] shrink-0 z-20">
                       <div className="flex gap-1">
                         <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-[#ff5f56]"></div>
                         <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-[#ffbd2e]"></div>
                         <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-[#27c93f]"></div>
                       </div>
                     </div>
                     {/* Content naturally scrollable within device height with hidden scrollbar */}
                     <div className="w-full h-full bg-black relative overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                       <img src={work.desktopImage} alt={`${work.name} Desktop`} className="w-full h-auto block object-top" loading="lazy" />
                     </div>
                  </div>
                  {/* MacBook Bottom Lip */}
                  <div className="relative h-3 lg:h-4 bg-gradient-to-b from-[#e0e0e0] to-[#b0b0b0] rounded-b-xl rounded-t-[1px] shadow-[0_20px_40px_rgba(0,0,0,0.6)] flex justify-center border-t border-[#f0f0f0] -mx-3 lg:-mx-5 z-20 pointer-events-none">
                     <div className="w-16 lg:w-24 h-[3px] lg:h-1 bg-[#8a8a8a] rounded-b-md shadow-inner"></div>
                  </div>
                </div>

                {/* Mobile View (iPhone Frame) Overlapping on the Left side */}
                <div className="absolute left-4 lg:-left-2 bottom-4 lg:bottom-10 w-[28%] max-w-[120px] lg:max-w-[130px] aspect-[393/852] rounded-[1rem] lg:rounded-[1.5rem] border-[4px] lg:border-[6px] border-[#1a1a1a] shadow-[0_20px_40px_rgba(0,0,0,0.8)] bg-black z-30 flex flex-col pointer-events-auto overflow-hidden">
                  {/* Dynamic Island */}
                  <div className="absolute top-1.5 inset-x-0 flex justify-center z-30 pointer-events-none">
                    <div className="w-[30%] h-[8px] lg:h-[12px] bg-black rounded-full shadow-md"></div>
                  </div>
                  {/* Content naturally scrollable with hidden scrollbar */}
                  <div className="relative w-full h-full bg-black rounded-[0.5rem] lg:rounded-[0.8rem] overflow-y-auto overflow-x-hidden pt-4 lg:pt-6 flex flex-col [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    <img src={work.mobileImage} alt={`${work.name} Mobile`} className="w-full h-auto block object-top" loading="lazy" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
