import React, { useState } from 'react';
import { Leaf, Sprout, Wrench, PackageCheck, SearchCheck, CheckCircle2, MessageSquare, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO, ServiceItem } from '../data/businessData';

interface ServicesSectionProps {
  onSelectServiceForInquiry?: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForInquiry }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'agro' | 'hardware' | 'services'>('all');

  const filteredServices = activeCategory === 'all'
    ? BUSINESS_INFO.services
    : BUSINESS_INFO.services.filter(s => s.category === activeCategory);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'agro-produce':
        return <Leaf className="w-5 h-5 text-emerald-700" />;
      case 'farm-supplies':
        return <Sprout className="w-5 h-5 text-emerald-700" />;
      case 'hardware-home':
        return <Wrench className="w-5 h-5 text-teal-700" />;
      case 'bulk-supply':
        return <PackageCheck className="w-5 h-5 text-amber-700" />;
      case 'custom-sourcing':
        return <SearchCheck className="w-5 h-5 text-blue-700" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-teal-700" />;
    }
  };

  const handleInquire = (serviceTitle: string) => {
    if (onSelectServiceForInquiry) {
      onSelectServiceForInquiry(serviceTitle);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-teal-800 mb-2">
              Our Capabilities & Offerings
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 font-display tracking-tight text-balance">
              Quality Goods & Practical Services for Coastal Life
            </h2>
            <p className="mt-3 text-base text-slate-600">
              We specialize in genuine coastal agriculture, reliable repair hardware, and dependable local fulfillment for families and organizations.
            </p>
          </div>

          {/* Interactive Filter Tabs (Buttons with click handlers) */}
          <div className="flex items-center gap-1.5 p-1 bg-white border border-slate-200 rounded-xl shadow-2xs self-start md:self-auto overflow-x-auto max-w-full">
            <button
              type="button"
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                activeCategory === 'all'
                  ? 'bg-teal-800 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Offerings
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('agro')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                activeCategory === 'agro'
                  ? 'bg-teal-800 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Agro & Spices
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('hardware')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                activeCategory === 'hardware'
                  ? 'bg-teal-800 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Home & Hardware
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('services')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                activeCategory === 'services'
                  ? 'bg-teal-800 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Bulk & Sourcing
            </button>
          </div>
        </div>

        {/* Card-Based Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className="bg-white rounded-xl border border-slate-200/90 p-6 flex flex-col justify-between hover:shadow-md hover:border-teal-200 transition-all duration-200"
            >
              <div>
                {/* Natural human editorial numbering */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-semibold text-slate-400">
                    0{index + 1}
                  </span>
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                    {getServiceIcon(service.id)}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 font-display mb-2.5">
                  {service.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Highlights List */}
                <ul className="space-y-2 mb-4 pt-3 border-t border-slate-100">
                  {service.highlights.map((h, i) => (
                    <li key={i} className="text-xs text-slate-700 flex items-start gap-2">
                      <span className="text-teal-700 font-bold mt-0.5">·</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {service.seasonalNote && (
                  <div className="p-2.5 rounded-lg bg-emerald-50/70 border border-emerald-100 text-xs text-emerald-800 leading-snug mb-4">
                    <span className="font-semibold">Seasonal Note: </span>
                    {service.seasonalNote}
                  </div>
                )}
              </div>

              {/* Action: Inquire button */}
              <button
                type="button"
                onClick={() => handleInquire(service.title)}
                className="w-full mt-2 inline-flex items-center justify-between px-3.5 py-2.5 text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-teal-50 hover:text-teal-900 rounded-lg border border-slate-200 transition-colors cursor-pointer group"
              >
                <span>Inquire About This Service</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-teal-800 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Note Regarding Pricing & Non-Online Ordering Notice */}
        <div className="mt-8 p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-500 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <p>
            <strong>Note for Customers:</strong> As a traditional brick-and-mortar local merchant, we do not operate an online cart or payment gateway. For product availability, seasonal stock, or bulk quotes, please call or visit our store in Shirali.
          </p>
          <a
            href={`tel:${BUSINESS_INFO.contact.phone.replace(/\s+/g, '')}`}
            className="shrink-0 text-teal-800 font-semibold hover:underline"
          >
            Direct Call: {BUSINESS_INFO.contact.phoneDisplay}
          </a>
        </div>

      </div>
    </section>
  );
};
