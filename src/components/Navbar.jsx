import { useState } from 'react';

// icon imports – keep your existing filenames
import phoneLineIcon from "../assets/icons/Vectortopbarborderphone.svg";
import walletIcon from "../assets/icons/Frame 1171275545wallet.svg";
import cartIcon from "../assets/icons/Frame 1000007496cart.svg";
import bellIcon from "../assets/icons/Untitled-1 [Recovered]-04 2bell-icon.svg";
import userIcon from "../assets/icons/Frame 1171275662people-icon.svg";
import chevronDownIcon from "../assets/icons/downdown-arrow.svg";

// Mock Link component - replace with your actual router Link
const Link = ({ to, children, className, ...props }) => (
  <a href={to} className={className} {...props}>
    {children}
  </a>
);

const navLinks = [
  { label: "Home", to: "/", active: false },
  { label: "Find Doctors", to: "/find-doctors", active: false },
  { label: "Lab Tests", to: "/lab-tests", active: false },
  { label: "Shop", to: "/shop", active: true },
  { label: "Forum", to: "/forum", active: false },
  { label: "About Us", to: "/about", active: false },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#FFF8F0] text-[#305632] font-sans shadow-sm">
      {/* Desktop & Tablet View */}
      <div className="hidden md:block w-full px-4 md:px-6 lg:px-10 pt-3 pb-4">
        {/* Row 1: phone + centered logo */}
        <div className="relative flex items-center justify-between">
          {/* left: phone number */}
          <div className="flex items-center gap-2 text-xs lg:text-sm font-medium">
            <button className="flex h-7 w-7 lg:h-8 lg:w-8 items-center justify-center rounded-full border border-[#305632]/30 hover:bg-[#E9F1EA] transition-colors">
              <img src={phoneLineIcon} alt="Phone" className="h-3.5 w-3.5 lg:h-4 lg:w-4" />
            </button>
            <span className="text-[#305632] font-medium">
              +91 9826352321
            </span>
          </div>

          {/* centered logo */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <Link to="/">
              <h1 className="text-2xl lg:text-3xl font-bold tracking-[0.25em] text-[#305632] hover:opacity-80 transition-opacity cursor-pointer">
                AMRUTAM
              </h1>
            </Link>
          </div>

          {/* Right spacer for balance */}
          <div className="w-32 lg:w-48" />
        </div>

        {/* Row 2: centered links + icons on the right */}
        <nav className="mt-3 lg:mt-4 flex items-center justify-between">
          {/* fake left spacer so center block is truly centered */}
          <div className="w-32 lg:w-48" />

          {/* center: nav links */}
          <div className="flex items-center justify-center gap-4 lg:gap-10 text-sm lg:text-base">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={`pb-1 font-medium transition-all duration-200 ${
                  link.active
                    ? "text-[#305632] font-semibold underline decoration-2 underline-offset-8"
                    : "text-[#6B6E6B] hover:text-[#305632] hover:scale-105"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* right: icons */}
          <div className="flex items-center gap-2 lg:gap-3">
            <IconCircle icon={walletIcon} badge="22" alt="Wallet" />
            <IconCircle icon={cartIcon} badge="1" alt="Cart" />
            <IconCircle icon={bellIcon} alt="Notifications" />
            <IconCircle icon={userIcon} alt="Profile" />
            <button className="flex h-9 w-9 lg:h-10 lg:w-10 items-center justify-center rounded-full bg-[#E9F1EA] hover:bg-[#DDE8DC] transition-colors">
              <img src={chevronDownIcon} alt="More" className="h-3 w-3" />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile View */}
      <div className="md:hidden w-full px-4 py-3">
        {/* Top row: hamburger + logo + icons */}
        <div className="flex items-center justify-between">
          {/* Hamburger menu */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-[#E9F1EA] transition-colors"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <span className={`block h-0.5 w-5 bg-[#305632] transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 w-5 bg-[#305632] transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-5 bg-[#305632] transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>

          {/* Logo */}
          <Link to="/">
            <h1 className="text-xl font-bold tracking-[0.2em] text-[#305632]">
              AMRUTAM
            </h1>
          </Link>

          {/* Essential icons only */}
          <div className="flex items-center gap-2">
            <IconCircle icon={cartIcon} badge="1" alt="Cart" size="small" />
            <IconCircle icon={userIcon} alt="Profile" size="small" />
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="mt-4 pb-4 border-t border-[#305632]/10">
            {/* Phone number */}
            <div className="flex items-center gap-2 text-sm font-medium py-3">
              <button className="flex h-8 w-8 items-center justify-center rounded-full border border-[#305632]/30">
                <img src={phoneLineIcon} alt="Phone" className="h-4 w-4" />
              </button>
              <span className="text-[#305632] font-medium">
                +91 9826352321
              </span>
            </div>

            {/* Navigation links */}
            <nav className="flex flex-col gap-1 mt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg font-medium transition-all ${
                    link.active
                      ? "text-[#305632] bg-[#E9F1EA] font-semibold"
                      : "text-[#6B6E6B] hover:text-[#305632] hover:bg-[#E9F1EA]/50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Additional icons */}
            <div className="flex items-center gap-3 mt-4 pt-4 border-t border-[#305632]/10">
              <IconCircle icon={walletIcon} badge="22" alt="Wallet" />
              <IconCircle icon={bellIcon} alt="Notifications" />
              <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E9F1EA] hover:bg-[#DDE8DC] transition-colors">
                <img src={chevronDownIcon} alt="More" className="h-3 w-3" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

const IconCircle = ({ icon, badge, alt, size = "normal" }) => {
  const sizeClasses = size === "small" ? "h-9 w-9" : "h-9 w-9 lg:h-10 lg:w-10";
  const iconSizeClasses = size === "small" ? "h-4 w-4" : "h-4 w-4 lg:h-5 lg:w-5";
  
  return (
    <div className="relative">
      <button
        type="button"
        className={`flex ${sizeClasses} items-center justify-center rounded-full bg-[#E9F1EA] hover:bg-[#DDE8DC] hover:scale-110 transition-all duration-200`}
      >
        <img src={icon} alt={alt} className={`${iconSizeClasses} object-contain`} />
      </button>

      {badge && (
        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#305632] text-[10px] font-bold text-white animate-pulse">
          {badge}
        </span>
      )}
    </div>
  );
};

export default Navbar;