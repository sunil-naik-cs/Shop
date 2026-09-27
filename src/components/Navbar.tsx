import React, { useState, useEffect } from 'react';
import { Phone, Navigation, Menu, X, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { getBusinessStatus } from '../utils/hoursHelper';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const status = getBusinessStatus();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Hours', href: '#hours' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200'
          : 'bg-white border-b border-slate-200'
      }`}
    >
      {/* Utility Notice Banner - Clean, quiet, unboxed */}
      <div className="bg-slate-900 text-slate-200 text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 truncate">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-medium text-white">{status.statusText}</span>
            <span className="text-slate-400">·</span>
            <span className="text-slate-300 hidden sm:inline">{status.nextEventText}</span>
            <span className="text-slate-400 hidden sm:inline">·</span>
            <span className="text-slate-300 hidden md:inline">Shirali, Bhatkal Taluk, Karnataka</span>
          </div>
          <div className="flex items-center gap-3 shrink-0 text-slate-300">
            <a
              href={`tel:${BUSINESS_INFO.contact.phone.replace(/\s+/g, '')}`}
              className="hover:text-white transition-colors flex items-center gap-1.5"
              aria-label={`Call ${BUSINESS_INFO.contact.phone}`}
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-mono text-xs">{BUSINESS_INFO.contact.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar - Strict 3-zone contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 font-display hover:text-teal-900 transition-colors"
        >
          {BUSINESS_INFO.name}
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-slate-950 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-teal-700 hover:after:w-full after:transition-all after:duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={BUSINESS_INFO.maps.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors border border-slate-200 whitespace-nowrap"
          >
            <Navigation className="w-3.5 h-3.5 text-teal-700" />
            <span>Get Directions</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-teal-800 hover:bg-teal-900 rounded-lg transition-colors shadow-xs whitespace-nowrap"
          >
            <span>Inquire Now</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-700"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="space-y-1 mb-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-800 hover:bg-slate-50 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={BUSINESS_INFO.maps.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold text-slate-800 bg-slate-100 rounded-lg"
            >
              <Navigation className="w-4 h-4 text-teal-700" />
              <span>Get Directions to Shirali</span>
            </a>
            <a
              href={`https://wa.me/${BUSINESS_INFO.contact.whatsapp}?text=${encodeURIComponent('Hello Shirali Coastal Traders, I would like to inquire about your services.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold text-white bg-emerald-600 rounded-lg"
            >
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
