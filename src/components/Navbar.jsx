
// icon imports – keep your existing filenames
import phoneLineIcon from "../assets/icons/Vectortopbarborderphone.svg";
import walletIcon from "../assets/icons/Frame 1171275545wallet.svg";
import cartIcon from "../assets/icons/Frame 1000007496cart.svg";
import bellIcon from "../assets/icons/Untitled-1 [Recovered]-04 2bell-icon.svg";
import userIcon from "../assets/icons/Frame 1171275662people-icon.svg";
import chevronDownIcon from "../assets/icons/downdown-arrow.svg";

const navLinks = [
  { label: "Home", href: "#", active: false },
  { label: "Find Doctors", href: "#", active: false },
  { label: "Lab Tests", href: "#", active: false },
  { label: "Shop", href: "#", active: true },
  { label: "Forum", href: "#", active: false },
  { label: "About Us", href: "#", active: false },
];

const Navbar = () => {
  return (
    <header className="w-full bg-brand-cream text-brand-green font-sans shadow-sm">
      {/* full-width content, only side padding */}
      <div className="w-full px-10 pt-3 pb-4">
        {/* Row 1: phone + centered logo */}
        <div className="relative flex items-center justify-between">
          {/* left: phone number */}
          <div className="flex items-center gap-2 text-sm font-medium">
            <button className="flex h-8 w-8 items-center justify-center rounded-full border border-brand-green/30">
              <img src={phoneLineIcon} alt="Phone" className="h-4 w-4" />
            </button>
            <span className="text-brand-green font-medium">
              +91 9826352321
            </span>
          </div>

          {/* centered logo */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <h1 className="text-3xl font-bold tracking-[0.25em] text-brand-green">
              AMRUTAM
            </h1>
          </div>
        </div>

        {/* Row 2: centered links + icons on the right */}
        <nav className="mt-4 flex items-center justify-between">
          {/* fake left spacer so center block is truly centered */}
          <div className="w-48" />

          {/* center: nav links */}
          <div className="flex items-center justify-center gap-10 text-base">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`pb-1 font-medium transition-colors ${
                  link.active
                    ? "text-brand-green font-semibold underline decoration-2 underline-offset-8"
                    : "text-[#6B6E6B] hover:text-brand-green"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* right: icons */}
          <div className="flex items-center gap-3">
            <IconCircle icon={walletIcon} badge="22" alt="Wallet" />
            <IconCircle icon={cartIcon} badge="1" alt="Cart" />
            <IconCircle icon={bellIcon} alt="Notifications" />
            <IconCircle icon={userIcon} alt="Profile" />
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E9F1EA] hover:bg-[#DDE8DC] transition-colors">
              <img src={chevronDownIcon} alt="More" className="h-3 w-3" />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

const IconCircle = ({ icon, badge, alt }) => {
  return (
    <div className="relative">
      <button
        type="button"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E9F1EA] hover:bg-[#DDE8DC] transition-colors"
      >
        <img src={icon} alt={alt} className="h-5 w-5 object-contain" />
      </button>

      {badge && (
        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#305632] text-[10px] font-bold text-white">
          {badge}
        </span>
      )}
    </div>
  );
};

export default Navbar;
