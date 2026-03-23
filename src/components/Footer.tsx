
import newLogo from '../../materials/logo updated.png';
export function Footer() {
  return (
    <footer className="relative w-full py-8 lg:py-12 border-t border-white/5">
      <div className="section-content w-full px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Left - Logo */}
          <div className="flex items-center">
            <img src={newLogo} alt="jstn logo" className="h-20 lg:h-24 w-auto object-contain -ml-2" />
          </div>

          {/* Center - Empty/Removed */}

          {/* Right - Tagline */}
          <div className="text-sm text-jstn-text-secondary/60">
            Home Service Automation Systems
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-xs text-jstn-text-secondary/40">
            jstn © 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
