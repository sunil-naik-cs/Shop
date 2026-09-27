import React from 'react';
import { MapPin, Navigation, Phone, Clock, ArrowRight, MessageSquareCode } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { getBusinessStatus } from '../utils/hoursHelper';
import heroImage from '../assets/images/hero_shirali_storefront_1790479482668.jpg';

export const Hero: React.FC = () => {
  const status = getBusinessStatus();

  return (
    <section className="relative bg-white pt-8 pb-16 md:py-20 border-b border-slate-200 overflow-hidden">
      {/* Subtle coastal ambient background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-50/70 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-50/60 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Value Proposition & Direct Actions */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Unboxed Metadata Line (Zero-Pill Rule) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500">
              <span className="text-teal-800 font-semibold tracking-wide uppercase">Local Enterprise</span>
              <span aria-hidden="true">·</span>
              <span>Shirali, Karnataka 581354</span>
              <span aria-hidden="true">·</span>
              <span>Established 1994</span>
              <span aria-hidden="true">·</span>
              <span>Bhatkal Taluk</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-display tracking-tight leading-[1.15] text-balance">
              {BUSINESS_INFO.name}
            </h1>

            {/* Subtitle / Kannada representation for genuine local authenticity */}
            <p className="text-sm font-medium text-teal-800/90 tracking-normal">
              {BUSINESS_INFO.kannadaName}
            </p>

            {/* Concrete value description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              {BUSINESS_INFO.shortDescription}
            </p>

            {/* Status & Hours Snapshot Card */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm">
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full shrink-0 ${status.isOpen ? 'bg-emerald-500 ring-4 ring-emerald-100' : 'bg-amber-500 ring-4 ring-amber-100'}`} />
                <div>
                  <div className="font-semibold text-slate-900 flex items-center gap-2">
                    <span>{status.statusText}</span>
                    <span className="text-xs font-normal text-slate-500">({status.currentDayName})</span>
                  </div>
                  <div className="text-xs text-slate-500">{status.nextEventText} · Today: {status.todayHours}</div>
                </div>
              </div>
              <a
                href="#hours"
                className="text-xs font-semibold text-teal-800 hover:text-teal-900 inline-flex items-center gap-1 self-start sm:self-center"
              >
                <span>Full Schedule</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Primary & Secondary Action Block */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-teal-800 hover:bg-teal-900 rounded-lg transition-colors shadow-sm focus:ring-2 focus:ring-teal-700 focus:outline-none min-h-[48px]"
              >
                <Phone className="w-4 h-4" />
                <span>Contact Store</span>
              </a>

              <a
                href={BUSINESS_INFO.maps.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 rounded-lg transition-colors border border-slate-300 shadow-xs focus:ring-2 focus:ring-slate-400 focus:outline-none min-h-[48px]"
              >
                <MapPin className="w-4 h-4 text-rose-600" />
                <span>View Google Maps</span>
              </a>

              <a
                href={BUSINESS_INFO.maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-teal-900 bg-teal-50 hover:bg-teal-100 rounded-lg transition-colors border border-teal-200/80 min-h-[48px]"
              >
                <Navigation className="w-4 h-4 text-teal-700" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Trust Markers - Quiet text with separators */}
            <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <span className="text-emerald-700 font-bold">✓</span> Near Shri Chitrapur Math
              </span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="flex items-center gap-1">
                <span className="text-emerald-700 font-bold">✓</span> Direct Farmer Sourcing
              </span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="flex items-center gap-1">
                <span className="text-emerald-700 font-bold">✓</span> UPI & Cash Accepted
              </span>
            </div>

          </div>

          {/* Right Column: Hero Visual Focal Carrier */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200/80 bg-slate-100 aspect-[16/11]">
              <img
                src={heroImage}
                alt="Shirali Coastal Traders storefront with traditional coastal architecture and lush palm backdrop"
                className="w-full h-full object-cover"
                loading="eager"
                referrerPolicy="no-referrer"
              />

              {/* Scrim Overlay for high legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

              {/* In-image quiet caption anchor */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-xs font-medium text-amber-300 flex items-center gap-1.5 mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Main Temple Road, Shirali</span>
                </div>
                <div className="text-sm font-semibold leading-snug">
                  Serving Uttara Kannada's coastal community with honesty and dedication.
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
