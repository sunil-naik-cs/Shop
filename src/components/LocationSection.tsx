import React, { useState } from 'react';
import { MapPin, Navigation, ExternalLink, Copy, Check, Compass, Bus, Train, Milestone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.address.fullFormatted);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="location" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-teal-800 mb-2">
            Find Us in Shirali
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 font-display tracking-tight text-balance">
            Conveniently Located in Shirali, Karnataka
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Situated right on Main Temple Road, just minutes from the sacred Shri Chitrapur Math and easily reachable from National Highway 66 (NH 66).
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Address, Action Buttons & Proximity */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Address Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs">
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-800">
                    <MapPin className="w-5 h-5 text-teal-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 font-display text-base">Store Address</h3>
                    <div className="text-xs text-slate-500">Bhatkal Taluk, Uttara Kannada</div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
                  title="Copy full address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Formatted address details */}
              <div className="space-y-1.5 text-sm text-slate-700 pb-4 border-b border-slate-100 leading-relaxed">
                <p className="font-semibold text-slate-900">{BUSINESS_INFO.name}</p>
                <p>{BUSINESS_INFO.address.street}</p>
                <p className="text-teal-900 font-medium">{BUSINESS_INFO.address.landmark}</p>
                <p>{BUSINESS_INFO.address.village}, {BUSINESS_INFO.address.taluk} Taluk</p>
                <p>{BUSINESS_INFO.address.district} District, {BUSINESS_INFO.address.state} - {BUSINESS_INFO.address.pincode}</p>
                <p className="text-xs text-slate-400 font-mono mt-1">Geo: 14.0538° N, 74.5298° E</p>
              </div>

              {/* Direct Action Buttons - Requirements 1 & 3 */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={BUSINESS_INFO.maps.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors border border-slate-300 min-h-[44px]"
                >
                  <ExternalLink className="w-4 h-4 text-teal-800" />
                  <span>Google Maps Location</span>
                </a>

                <a
                  href={BUSINESS_INFO.maps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-bold text-white bg-teal-800 hover:bg-teal-900 rounded-xl transition-colors shadow-xs min-h-[44px]"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Driving Directions</span>
                </a>
              </div>
            </div>

            {/* Nearby Distances Table */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs">
              <h4 className="font-bold text-slate-900 font-display text-sm mb-3 flex items-center gap-2">
                <Milestone className="w-4 h-4 text-teal-700" />
                <span>Nearby Landmarks & Distances</span>
              </h4>
              <div className="space-y-2.5">
                {BUSINESS_INFO.nearbyLandmarks.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs py-1 border-b border-slate-100 last:border-0">
                    <span className="text-slate-700 font-medium">{item.name}</span>
                    <span className="text-slate-500 font-mono text-right">{item.distance}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Travel Transit Guidance */}
            <div className="p-4 rounded-xl bg-slate-100/80 border border-slate-200/80 text-xs text-slate-600 space-y-2">
              <div className="flex items-start gap-2">
                <Bus className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                <span><strong>By Bus:</strong> Any Bhatkal-Honnavar express or local bus stops at Shirali Cross on NH 66; auto-rickshaws available to Temple Road (3 mins).</span>
              </div>
              <div className="flex items-start gap-2">
                <Train className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                <span><strong>By Train:</strong> Shirali Railway Station is 1.8 km away on the Konkan Railway network. Bhatkal Station (6.5 km) connects express services.</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Embedded Map View */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm flex-1 flex flex-col min-h-[420px]">
              
              {/* Map Top Bar */}
              <div className="px-4 py-3 bg-slate-900 text-white flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-teal-400" />
                  <span className="font-medium">Map Preview · Shirali, Karnataka 581354</span>
                </div>
                <a
                  href={BUSINESS_INFO.maps.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-300 hover:text-amber-200 flex items-center gap-1 font-semibold"
                >
                  <span>Open Full Screen</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Map Iframe */}
              <div className="relative flex-1 w-full bg-slate-100 min-h-[360px]">
                <iframe
                  title="Shirali Karnataka Location Map"
                  src={BUSINESS_INFO.maps.embedMapUrl}
                  className="w-full h-full border-0 absolute inset-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Map Bottom Bar Notice */}
              <div className="p-3 bg-white border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-500">
                <span>Free customer parking available in front of the premises.</span>
                <a
                  href={BUSINESS_INFO.maps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-800 font-semibold hover:underline flex items-center gap-1"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Navigate with GPS</span>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
