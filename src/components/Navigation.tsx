import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import newLogo from '../../materials/logo updated.png';

const navLinks = [
  { label: 'Problem', href: '#problem' },
  { label: 'Solution', href: '#work' },
  { label: 'Who Is This For?', href: '#who-is-this-for' }, // Requires an ID on a target section
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToCTA = () => {
    const element = document.querySelector('#cta');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full px-4 pt-4 sm:pt-6 pointer-events-none">
        <nav
          className={`pointer-events-auto transition-all duration-300 rounded-full border ${isScrolled
            ? 'bg-jstn-bg/80 backdrop-blur-xl border-white/10 shadow-lg'
            : 'bg-transparent border-transparent'
            }`}
        >
          <div className="px-6 lg:px-8">
            <div className="flex items-center gap-8 lg:gap-12 h-20 lg:h-24">
              {/* Logo */}
              <a
                href="#"
                className="flex items-center"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <img src={newLogo} alt="jstn logo" className="h-20 lg:h-24 w-auto object-contain -ml-2" />
              </a>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-8">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-jstn-text-secondary hover:text-jstn-text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                ))}
              </div>

              {/* CTA Button */}
              <div className="hidden lg:block">
                <button
                  onClick={scrollToCTA}
                  className="btn-primary px-5 py-2.5 bg-jstn-green text-jstn-bg font-medium text-sm rounded-full"
                >
                  Claim My 20 Hours
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 text-jstn-text-primary -mr-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-jstn-bg/95 backdrop-blur-xl transition-all duration-300 lg:hidden ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="text-2xl font-display text-jstn-text-primary hover:text-jstn-green transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => {
              scrollToCTA();
              setIsMobileMenuOpen(false);
            }}
            className="mt-4 px-8 py-3 bg-jstn-green text-jstn-bg font-medium rounded-full"
          >
            Claim My 20 Hours
          </button>
        </div>
      </div>
    </>
  );
}
