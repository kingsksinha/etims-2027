import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, FileText, Calendar, MapPin, Mail, Phone } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { TAB_NAV_ITEMS, CONFERENCE, CONVENOR } from '../../utils/constants';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  // Scroll detection for navbar background translucency
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // Handle Escape key to close drawer
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileOpen) {
        setMobileOpen(false);
      }
    },
    [mobileOpen]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const handleNavClick = () => {
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'border-b border-[#BF982E]/40 bg-[#5C1324]/95 backdrop-blur-xl shadow-lg shadow-[#3D0A14]/30 py-2.5'
            : 'border-b border-[#BF982E]/30 bg-[#5C1324] py-3'
        }`}
      >
        <nav
          aria-label="Main Navigation"
          className="mx-auto flex max-w-7xl items-center justify-between px-3.5 sm:px-6 lg:px-8 w-full min-w-0"
        >
          {/* Brand Identity: Official NSIT Seal + ETIMS 2027 Official Conference Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 sm:gap-3.5 group min-w-0 shrink"
            onClick={handleNavClick}
            aria-label="ETIMS 2027 Conference Home"
          >
            {/* Dual Emblem Group: NSIT Official Seal + ETIMS 2027 Conference Emblem */}
            <div className="flex items-center gap-1.5 shrink-0">
              <div className="relative flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-white/95 border border-[#BF982E]/40 p-1 shadow-sm transition-transform duration-300 group-hover:scale-105">
                <img
                  src="/assets/nsit-seal.png"
                  alt="NSIT Official Seal"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="relative flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full bg-white p-0.5 border border-[#BF982E]/50 shadow-md transition-transform duration-300 group-hover:scale-105">
                <img
                  src="/assets/etims-logo.png"
                  alt="ETIMS 2027 Conference Emblem"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>

            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-1.5 leading-tight">
                <span className="font-heading text-base sm:text-lg font-black tracking-tight text-white group-hover:text-[#F3D993] transition-colors">
                  ETIMS 2027
                </span>
                <span className="inline-flex items-center rounded bg-[#BF982E]/25 border border-[#BF982E]/40 px-1.5 py-0.2 text-[10px] font-mono font-bold text-[#F3D993] uppercase tracking-wide">
                  1st National Conf.
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] font-subheading text-[#F5EFEB]/90 font-medium truncate">
                Netaji Subhas Institute of Technology, Bihta, Patna
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links with Warm Gold Indicator */}
          <ul className="hidden items-center gap-1 xl:gap-1.5 lg:flex">
            {TAB_NAV_ITEMS.map((tab) => {
              const isActive =
                tab.path === '/'
                  ? currentPath === '/'
                  : currentPath === tab.path || currentPath.startsWith(`${tab.path}/`);

              return (
                <li key={tab.id}>
                  <Link
                    to={tab.path}
                    onClick={handleNavClick}
                    className={`relative rounded-xl px-2.5 py-1.5 text-xs font-semibold transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'text-white bg-white/15 border border-[#BF982E]/40 font-bold shadow-xs'
                        : 'text-[#F5EFEB]/85 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <span>{tab.shortLabel}</span>
                    {isActive && (
                      <motion.span
                        layoutId="navUnderline"
                        className="absolute -bottom-1 left-2 right-2 h-0.5 rounded-full bg-[#BF982E] shadow-[0_0_8px_#bf982e]"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop Header CTA Button (Brochure Gold) */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Link
              to="/submission"
              onClick={handleNavClick}
              className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-[#BF982E] to-[#D4AF37] px-4 py-2 text-xs font-extrabold text-[#450F1D] shadow-md hover:brightness-105 transition-all active:scale-95 cursor-pointer"
            >
              <span>Submit Paper</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="flex items-center justify-center rounded-xl p-2.5 text-white hover:bg-white/10 border border-[#BF982E]/30 lg:hidden transition-colors cursor-pointer"
            aria-label="Open Navigation Menu"
            aria-expanded={mobileOpen}
          >
            <Menu className="h-6 w-6 text-[#F3D993]" />
          </button>
        </nav>
      </header>

      {/* Full-Height Futuristic Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Mobile Navigation Menu">
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-midnight/80 backdrop-blur-md cursor-pointer"
              aria-hidden="true"
            />

            {/* Sliding Drawer Container */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="fixed inset-y-0 right-0 flex w-full max-w-sm flex-col bg-midnight border-l border-border-dark shadow-2xl focus:outline-none"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between border-b border-[#BF982E]/30 px-5 py-4 bg-[#5C1324]">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white p-1 shadow-sm">
                    <img
                      src="/assets/nsit-seal.png"
                      alt="NSIT Official Seal"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white p-0.5 shadow-sm">
                    <img
                      src="/assets/etims-logo.png"
                      alt="ETIMS 2027 Official Logo"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-1 leading-none">
                      <span className="font-heading text-lg font-bold text-white">ETIMS</span>
                      <span className="font-heading text-lg font-extrabold text-[#F3D993]">2027</span>
                    </div>
                    <span className="text-[10px] uppercase font-mono text-[#F5EFEB]/80 tracking-wide">
                      NSIT Bihta, Patna
                    </span>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl p-2 text-white/80 hover:text-white hover:bg-white/10 border border-[#BF982E]/30 transition-colors cursor-pointer"
                  aria-label="Close Navigation Menu"
                >
                  <X className="h-5 w-5 text-[#F3D993]" />
                </button>
              </div>

              {/* Drawer Navigation List */}
              <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1 bg-[#FAF8F5]">
                {TAB_NAV_ITEMS.map((item) => {
                  const isActive =
                    item.path === '/'
                      ? currentPath === '/'
                      : currentPath === item.path || currentPath.startsWith(`${item.path}/`);

                  return (
                    <Link
                      key={item.id}
                      to={item.path}
                      onClick={handleNavClick}
                      className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#7B1123] text-white font-bold shadow-sm'
                          : 'text-[#1C1917] hover:bg-white hover:text-[#7B1123]'
                      }`}
                    >
                      <div>
                        <div className="font-medium">{item.label}</div>
                        <div className={`text-[10px] ${isActive ? 'text-white/80' : 'text-[#57534E]'}`}>
                          {item.description}
                        </div>
                      </div>
                      {isActive ? (
                        <span className="h-2 w-2 rounded-full bg-[#BF982E]" />
                      ) : (
                        <ArrowUpRight className="h-4 w-4 opacity-40 text-[#7B1123]" />
                      )}
                    </Link>
                  );
                })}

                {/* Prominent Action inside Drawer */}
                <div className="pt-4 pb-2">
                  <Link
                    to="/submission"
                    onClick={handleNavClick}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#BF982E] to-[#D4AF37] px-5 py-3.5 text-sm font-extrabold text-[#450F1D] shadow-md transition-all active:scale-[0.98] cursor-pointer"
                  >
                    <FileText className="h-4 w-4 text-[#450F1D]" />
                    <span>Submit Your Paper</span>
                  </Link>
                </div>
              </div>

              {/* Drawer Footer: Verified Conference Details */}
              <div className="border-t border-border-dark bg-navy/40 p-4 space-y-2 text-xs text-secondary-text">
                <div className="flex items-center gap-2">
                  <Calendar className="h-3.5 w-3.5 text-cyan shrink-0" />
                  <span className="font-semibold text-light-text">{CONFERENCE.dateDisplay}</span>
                  <span className="text-[10px] bg-cyan/15 text-cyan px-1.5 py-0.5 rounded font-mono font-bold">
                    In-Person
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5 text-cyan shrink-0" />
                  <span className="truncate">{CONFERENCE.venue}</span>
                </div>
                <div className="pt-1 border-t border-border-dark/60 flex flex-col gap-1 text-[11px]">
                  <div className="flex items-center gap-1.5">
                    <span className="font-semibold text-light-text">Convenor:</span>
                    <span>{CONVENOR.name}</span>
                  </div>
                  <div className="flex items-center gap-3 font-mono">
                    <a
                      href={`mailto:${CONVENOR.email}`}
                      className="inline-flex items-center gap-1 text-cyan hover:underline truncate"
                    >
                      <Mail className="h-3 w-3" />
                      <span>{CONVENOR.email}</span>
                    </a>
                    <a
                      href={`tel:${CONVENOR.phoneTel}`}
                      className="inline-flex items-center gap-1 text-cyan hover:underline shrink-0"
                    >
                      <Phone className="h-3 w-3" />
                      <span>{CONVENOR.phone}</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
