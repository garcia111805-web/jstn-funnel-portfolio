import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, ChevronLeft, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const filmstripImages = [
    { step: '01', title: 'Contact Info', desc: 'Secures their name, email, and best phone number early in the process.', url: '/qualification/Screenshot 2026-02-23 221411.png' },
    { step: '02', title: 'Goals Check', desc: 'Asks what their main fitness goal is (weight loss, muscle gain, endurance, etc) to personalize the conversation.', url: '/qualification/Screenshot 2026-02-23 221419.png' },
    { step: '03', title: 'Experience Level', desc: 'Determines if they are a beginner or experienced athlete so trainers know how to approach them.', url: '/qualification/Screenshot 2026-02-23 221428.png' },
    { step: '04', title: 'Schedule', desc: 'Identifies when they plan to work out (morning, evening, etc) to ensure the gym fits their lifestyle.', url: '/qualification/Screenshot 2026-02-23 221454.png' },
    { step: '05', title: 'Opt-In', desc: 'Secures SMS compliance for communication so your follow-up campaigns stay legal and active.', url: '/qualification/Screenshot 2026-02-23 221812.png' },
    { step: '06', title: 'Booking the Tour', desc: 'Automatically schedules a gym tour with the high-intent lead directly onto your calendar.', url: '/qualification/Screenshot 2026-02-24 222644.png' },
];

export function Automations() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const statBoxRef = useRef<HTMLDivElement>(null);
    const carouselRef = useRef<HTMLDivElement>(null);

    const [currentStep, setCurrentStep] = useState(0);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const ctx = gsap.context(() => {
            // Header animation
            gsap.fromTo(
                headerRef.current,
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.7,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: headerRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse',
                    }
                }
            );

            // Features entrance
            gsap.fromTo(
                [statBoxRef.current, carouselRef.current],
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.7,
                    stagger: 0.2,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: statBoxRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse',
                    }
                }
            );
        }, section);

        return () => ctx.revert();
    }, []);

    const nextStep = () => {
        setCurrentStep((prev) => (prev + 1) % filmstripImages.length);
    };

    const prevStep = () => {
        setCurrentStep((prev) => (prev - 1 + filmstripImages.length) % filmstripImages.length);
    };

    return (
        <section ref={sectionRef} id="automations" className="relative w-full py-20 lg:py-32 bg-jstn-bg border-t border-white/5">
            <div className="section-content w-full px-6 lg:px-12 max-w-7xl mx-auto flex flex-col items-center">

                {/* Solution Header */}
                <div ref={headerRef} className="w-full mb-16 text-center lg:text-left">
                    <span className="tag-pill mb-4 inline-flex">The Solution: Part 2</span>
                    <h2 className="font-display text-4xl lg:text-5xl font-semibold text-jstn-text-primary mb-4 leading-tight tracking-tight">
                        Automated <span className="text-jstn-green">Qualification</span>.
                    </h2>
                    <p className="text-jstn-text-secondary text-base lg:text-lg max-w-2xl mx-auto lg:mx-0">
                        The next step after the website. We embed an automated engagement sequence that uncovers fitness goals and books high-intent gym tours straight to your calendar.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-12 w-full max-w-6xl">
                    {/* Stat Box */}
                    <div
                        ref={statBoxRef}
                        className="stat-card p-6 lg:p-8 w-full max-w-sm shrink-0"
                    >
                        <div className="flex flex-col items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-jstn-green/10 flex items-center justify-center mb-2">
                                <Check className="w-6 h-6 text-jstn-green" />
                            </div>
                            <div>
                                <p className="font-display text-3xl font-semibold text-jstn-text-primary mb-3">
                                    Engage Before Booking
                                </p>
                                <p className="text-base text-jstn-text-secondary leading-relaxed">
                                    Your front desk is overwhelmed. We automatically engage new leads, uncover their fitness goals, and book high-intent tours so your staff can focus on the members already in the building.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Carousel */}
                    <div
                        ref={carouselRef}
                        className="w-full max-w-4xl flex flex-col sm:flex-row items-center sm:items-stretch gap-8 lg:gap-12 pl-4 sm:pl-8 lg:pl-12"
                    >
                        {/* Image Box Wrapper with Outside Arrows */}
                        <div className="relative w-full sm:w-[50%] flex-shrink-0">

                            {/* Navigation Arrows Outside Image Box */}
                            <button
                                onClick={prevStep}
                                className="absolute -left-5 sm:-left-6 top-1/2 -translate-y-1/2 w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-jstn-green hover:bg-jstn-green/80 text-jstn-bg shadow-[0_0_15px_rgba(34,197,94,0.4)] flex items-center justify-center transition-colors z-20"
                            >
                                <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
                            </button>

                            <button
                                onClick={nextStep}
                                className="absolute -right-5 sm:-right-6 top-1/2 -translate-y-1/2 w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-jstn-green hover:bg-jstn-green/80 text-jstn-bg shadow-[0_0_15px_rgba(34,197,94,0.4)] flex items-center justify-center transition-colors z-20"
                            >
                                <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
                            </button>

                            {/* The Active Card Image */}
                            <div className="w-full h-[400px] sm:h-[450px] lg:h-[500px] max-w-sm sm:max-w-none mx-auto bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] flex items-center justify-center p-2 relative z-10">
                                <img
                                    src={filmstripImages[currentStep].url}
                                    alt={`Step ${filmstripImages[currentStep].step}`}
                                    className="max-w-full max-h-full object-contain transition-opacity duration-300 rounded-2xl shadow-lg"
                                    key={currentStep} // Forces re-render/animation on source change
                                />
                            </div>
                        </div>

                        {/* Label and Progress (Right side of image) */}
                        <div className="w-full flex-1 flex flex-col justify-between text-left py-6 pr-4 sm:pr-0">
                            <div className="mb-6 h-[180px] sm:h-[200px] flex flex-col justify-start">
                                <p className="text-sm font-semibold text-jstn-green tracking-wider mb-2 shrink-0">
                                    STEP {filmstripImages[currentStep].step}
                                </p>
                                <p className="text-2xl lg:text-3xl text-jstn-text-primary font-display font-medium mb-4 shrink-0 line-clamp-2">
                                    {filmstripImages[currentStep].title}
                                </p>
                                {/* Specific Description per Image */}
                                <p className="text-base text-jstn-text-secondary/90 leading-relaxed font-medium">
                                    {filmstripImages[currentStep].desc}
                                </p>
                            </div>

                            {/* Bottom Section (Copy text + Progress Indicator) */}
                            <div className="w-full mt-auto">
                                <p className="text-sm text-jstn-text-secondary/70 italic leading-relaxed mb-6 border-l-2 border-jstn-green/30 pl-3">
                                    The exact sequence every lead passes through — automatically handled by jstn so you don't have to lift a finger.
                                </p>

                                <div className="flex items-end justify-between mb-3">
                                    <span className="text-sm font-medium text-jstn-text-secondary">Progress</span>
                                    <span className="text-sm font-medium text-jstn-text-primary">
                                        {currentStep + 1} / {filmstripImages.length}
                                    </span>
                                </div>
                                {/* Progress Bar */}
                                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-jstn-green transition-all duration-300 ease-out"
                                        style={{ width: `${((currentStep + 1) / filmstripImages.length) * 100}%` }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
