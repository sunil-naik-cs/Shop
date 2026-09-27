import React from 'react';
import { Phone, MessageSquare, Navigation, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export const QuickActionFloat: React.FC = () => {
  return (
    <aside
      aria-label="Quick mobile contact actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 shadow-lg"
    >
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call Now */}
        <a
          href={`tel:${BUSINESS_INFO.contact.phone.replace(/\s+/g, '')}`}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-900 transition-colors text-center"
        >
          <Phone className="w-4 h-4 text-teal-800 mb-0.5" />
          <span className="text-2xs font-semibold uppercase tracking-tight">Call Store</span>
        </a>

        {/* WhatsApp Chat */}
        <a
          href={`https://wa.me/${BUSINESS_INFO.contact.whatsapp}?text=${encodeURIComponent('Hello Shirali Coastal Traders, I would like to inquire about your store.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white transition-colors text-center shadow-xs"
        >
          <MessageSquare className="w-4 h-4 mb-0.5" />
          <span className="text-2xs font-semibold uppercase tracking-tight">WhatsApp</span>
        </a>

        {/* Directions */}
        <a
          href={BUSINESS_INFO.maps.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white transition-colors text-center shadow-xs"
        >
          <Navigation className="w-4 h-4 text-amber-400 mb-0.5" />
          <span className="text-2xs font-semibold uppercase tracking-tight">Directions</span>
        </a>
      </div>
    </aside>
  );
};
