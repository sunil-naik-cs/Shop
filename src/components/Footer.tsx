import React from 'react';
import { MapPin, Phone, Mail, Navigation, Heart, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand & Purpose (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#" className="text-xl font-bold font-display text-white tracking-tight block">
              {BUSINESS_INFO.name}
            </a>
            <div className="text-xs font-medium text-amber-400">
              {BUSINESS_INFO.kannadaName}
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Authentic coastal agro-produce, Malabar spices, farming supplies, and neighborhood hardware in Shirali, Karnataka. Dedicated family service since 1994.
            </p>
            <div className="text-xs text-slate-500 pt-1">
              Registered local enterprise · Bhatkal Taluk, Uttara Kannada, Karnataka
            </div>
          </div>

          {/* Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="text-slate-400 hover:text-white transition-colors">About History</a>
              </li>
              <li>
                <a href="#services" className="text-slate-400 hover:text-white transition-colors">Our Offerings</a>
              </li>
              <li>
                <a href="#hours" className="text-slate-400 hover:text-white transition-colors">Store Hours</a>
              </li>
              <li>
                <a href="#location" className="text-slate-400 hover:text-white transition-colors">Find Location</a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-white transition-colors">Contact Form</a>
              </li>
            </ul>
          </div>

          {/* Store Location & Timings (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Store & Map Access
            </h4>
            <div className="space-y-2 text-xs text-slate-400 leading-relaxed">
              <p className="text-slate-300 font-medium">{BUSINESS_INFO.address.fullFormatted}</p>
              <p>Landmark: 500m from Shri Chitrapur Math, Near Maha Ganapati Temple</p>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={BUSINESS_INFO.maps.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-teal-400 hover:text-teal-300 font-medium"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>View on Google Maps</span>
                </a>
                <span className="text-slate-700">·</span>
                <a
                  href={BUSINESS_INFO.maps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-medium"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-900 text-xs text-slate-400 flex flex-wrap items-center gap-4">
              <span>Phone: {BUSINESS_INFO.contact.phoneDisplay}</span>
              <span>Landline: {BUSINESS_INFO.contact.landline}</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Clean Typography */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-slate-400">Shirali, Karnataka 581354</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Scroll to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
