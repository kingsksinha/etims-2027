import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ArrowUpRight, FileText, Calendar, MapPin, Mail, Phone } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { NAV_LINKS, CONFERENCE, CONVENOR } from '../../utils/constants';

interface MobileNavItem {
  label: string;
  href: string;
  id: string;
}

const MOBILE_NAV_ITEMS: MobileNavItem[] = [
  { label: 'Home', href: '#', id: '' },
  { label: 'About Conference', href: '#about', id: 'about' },
  { label: 'About NSIT', href: '#nsit', id: 'nsit' },
  { label: 'Committees', href: '#committees', id: 'committees' },
  { label: 'Research Tracks', href: '#tracks', id: 'tracks' },
  { label: 'Important Dates', href: '#dates', id: 'dates' },
  { label: 'Paper Submission', href: '#submission', id: 'submission' },
  { label: 'Registration', href: '#registration', id: 'registration' },
  { label: 'Venue & Contact', href: '#contact', id: 'contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  // Scroll detection and active section spy
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionIds = ['about', 'nsit', 'tracks', 'dates', 'submission', 'registration', 'committees', 'venue', 'contact'];
      let current = '';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            current = id;
            break;
          }
        }
      }
      setActiveSection(current);
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

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href === '#' || href === '') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (href.startsWith('#')) {
      const el = document.getElementById(href.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'border-b border-border-dark bg-midnight/95 backdrop-blur-md shadow-lg shadow-black/40 py-2.5'
            : 'border-b border-border-dark/40 bg-midnight/80 backdrop-blur-xs py-3.5'
        }`}
      >
        <nav
          aria-label="Main Navigation"
          className="mx-auto flex max-w-7xl items-center justify-between px-3.5 sm:px-6 lg:px-8 w-full min-w-0"
        >
          {/* Brand Identity: Official NSIT Logo + ETIMS 2027 Typography */}
          <Link
            to="/"
            className="flex items-center gap-2 sm:gap-3 group min-w-0 shrink"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="ETIMS 2027 Conference Home"
          >
            <img
              src="/assets/nsit-logo.png"
              alt="NSIT Official Logo"
              className="h-7 sm:h-9 max-w-[125px] sm:max-w-none w-auto object-contain transition-transform group-hover:scale-105 filter drop-shadow-[0_0_6px_rgba(53,217,232,0.3)] shrink-0"
            />
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-1 sm:gap-1.5 leading-tight">
                <span className="font-heading text-sm sm:text-lg font-bold tracking-tight text-light-text">
                  ETIMS
                </span>
                <span className="font-heading text-sm sm:text-lg font-extrabold text-cyan text-glow-cyan">
                  2027
                </span>
              </div>
              <span className="text-[9px] sm:text-[11px] uppercase tracking-wider text-secondary-text font-mono truncate hidden sm:inline">
                NSIT Bihta, Patna
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links with Glowing Active Indicator */}
          <ul className="hidden items-center gap-1 xl:gap-2 lg:flex">
            {NAV_LINKS.map((link) => {
              const sectionKey = link.href.replace('#', '');
              const isActive = activeSection === sectionKey;

              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      if (link.href.startsWith('#')) {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }
                    }}
                    className={`relative rounded-lg px-2.5 py-1.5 text-xs font-semibold transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'text-cyan bg-cyan/10 font-bold'
                        : 'text-secondary-text hover:text-light-text hover:bg-navy/60'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="navUnderline"
                        className="absolute -bottom-1 left-2.5 right-2.5 h-0.5 rounded-full bg-cyan shadow-[0_0_8px_rgba(53,217,232,0.8)]"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Desktop Header CTA Button */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href="#submission"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#submission');
              }}
              className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-primary-teal to-cyan px-4 py-2 text-xs font-bold text-midnight shadow-md hover:shadow-cyan/30 transition-all active:scale-95 cursor-pointer glow-cyan-sm"
            >
              <span>Submit Paper</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="flex items-center justify-center rounded-xl p-2.5 text-light-text hover:bg-navy border border-border-dark lg:hidden transition-colors cursor-pointer"
            aria-label="Open Navigation Menu"
            aria-expanded={mobileOpen}
          >
            <Menu className="h-6 w-6 text-cyan" />
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
              <div className="flex items-center justify-between border-b border-border-dark px-5 py-4 bg-navy/60">
                <div className="flex items-center gap-2.5">
                  <img
                    src="/assets/nsit-logo.png"
                    alt="NSIT Official Logo"
                    className="h-9 w-auto object-contain"
                  />
                  <div>
                    <div className="flex items-center gap-1 leading-none">
                      <span className="font-heading text-lg font-bold text-light-text">ETIMS</span>
                      <span className="font-heading text-lg font-extrabold text-cyan">2027</span>
                    </div>
                    <span className="text-[10px] uppercase font-mono text-cyan tracking-wide">
                      NSIT Bihta, Patna
                    </span>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl p-2 text-secondary-text hover:text-light-text hover:bg-navy border border-border-dark transition-colors cursor-pointer"
                  aria-label="Close Navigation Menu"
                >
                  <X className="h-5 w-5 text-cyan" />
                </button>
              </div>

              {/* Drawer Navigation List */}
              <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
                {MOBILE_NAV_ITEMS.map((item) => {
                  const isActive =
                    item.id === ''
                      ? activeSection === '' && window.scrollY < 200
                      : activeSection === item.id;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href);
                      }}
                      className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-all cursor-pointer ${
                        isActive
                          ? 'bg-gradient-to-r from-primary-teal to-cyan text-midnight font-bold shadow-sm'
                          : 'text-light-text hover:bg-navy/80 hover:text-cyan'
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive ? (
                        <span className="h-2 w-2 rounded-full bg-midnight" />
                      ) : (
                        <ArrowUpRight className="h-4 w-4 opacity-40 text-cyan" />
                      )}
                    </a>
                  );
                })}

                {/* Prominent Action inside Drawer */}
                <div className="pt-4 pb-2">
                  <a
                    href="#submission"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('#submission');
                    }}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary-teal to-cyan px-5 py-3.5 text-sm font-bold text-midnight shadow-md transition-all active:scale-[0.98] cursor-pointer glow-cyan-sm"
                  >
                    <FileText className="h-4 w-4 text-midnight" />
                    <span>Submit Your Paper</span>
                  </a>
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
