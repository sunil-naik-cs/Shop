import React from 'react';
import { History, ShieldCheck, HeartHandshake, MapPin, Sparkles, Truck, CreditCard, Car, Languages } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import interiorImg from '../assets/images/shirali_store_interior_1790479511700.jpg';
import produceImg from '../assets/images/shirali_heritage_produce_1790479499466.jpg';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-teal-800 mb-2">
            About Our Enterprise
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 font-display tracking-tight text-balance">
            Rooted in the Heritage of Shirali, Dedicated to Our Community
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            For three decades, Shirali Coastal Traders & Services has been a dependable anchor for families, farmers, and visitors traveling along coastal Karnataka.
          </p>
        </div>

        {/* Narrative & History Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16">
          
          {/* Left Narrative Block */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4 text-slate-700 leading-relaxed text-base">
              <p>
                Founded in <strong>1994</strong> on Main Temple Road in Shirali, our journey began with a simple mission: to connect hardworking coastal spice growers with fair markets, while providing local residents with sturdy, dependable household supplies and agricultural implements.
              </p>
              <p>
                Shirali has a special place in Karnataka’s cultural map — home to the venerable <em>Shri Chitrapur Math</em>, ancient groves of areca nut and coconut, and serene coastal shorelines. Over thirty years, our shop has grown alongside the town, modernizing our inventory while upholding old-school honesty, fair rates, and personal warmth.
              </p>
              <p>
                Whether you are a local resident preparing for the monsoon season, a farmer seeking drip irrigation parts, an event organizer needing bulk cooking spices, or a visitor seeking genuine Uttara Kannada black pepper and roasted cashews, we are here to assist with genuine care.
              </p>
            </div>

            {/* Core Values - Clean editorial list */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/60">
                <div className="text-teal-800 font-semibold text-sm mb-1 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-teal-700" />
                  <span>30+ Years Trust</span>
                </div>
                <p className="text-xs text-slate-500">Unbroken family stewardship since 1994.</p>
              </div>

              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/60">
                <div className="text-teal-800 font-semibold text-sm mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-teal-700" />
                  <span>Farmer First</span>
                </div>
                <p className="text-xs text-slate-500">Direct sourcing from Uttara Kannada growers.</p>
              </div>

              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/60">
                <div className="text-teal-800 font-semibold text-sm mb-1 flex items-center gap-1.5">
                  <HeartHandshake className="w-4 h-4 text-teal-700" />
                  <span>Personal Care</span>
                </div>
                <p className="text-xs text-slate-500">Honest advice tailored to coastal needs.</p>
              </div>
            </div>
          </div>

          {/* Right Visual Collage */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm aspect-[4/3] bg-slate-100">
                <img
                  src={produceImg}
                  alt="Authentic coastal Karnataka black pepper, cardamom, and cashews"
                  className="w-full h-full object-cover hover:scale-102 transition-transform duration-300"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-3 rounded-lg bg-teal-50/70 border border-teal-100 text-xs text-teal-900 leading-snug">
                <span className="font-semibold block mb-0.5">Authentic Coastal Sourcing</span>
                Grade-A cashews, whole Malabar black pepper & wild cardamoms.
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <div className="p-3 rounded-lg bg-amber-50/70 border border-amber-100 text-xs text-amber-900 leading-snug">
                <span className="font-semibold block mb-0.5">Always Welcoming</span>
                Friendly guidance in Kannada, Konkani, Hindi & English.
              </div>
              <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm aspect-[4/3] bg-slate-100">
                <img
                  src={interiorImg}
                  alt="Shirali Coastal Traders interior and customer service desk"
                  className="w-full h-full object-cover hover:scale-102 transition-transform duration-300"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Customer-Friendly Facilities Bar */}
        <div className="rounded-2xl bg-slate-900 text-white p-6 sm:p-8">
          <div className="mb-6">
            <h3 className="text-xl font-bold font-display tracking-tight text-white">
              Customer-Friendly Amenities & Facilities
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Thoughtfully arranged to ensure every visitor experiences a smooth, convenient visit.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 text-amber-400">
                <Car className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Dedicated Parking</h4>
                <p className="text-xs text-slate-400 mt-1">Easy roadside space for bikes, auto-rickshaws, and family cars right in front.</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 text-emerald-400">
                <CreditCard className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Flexible Payments</h4>
                <p className="text-xs text-slate-400 mt-1">All UPI apps (GPay, PhonePe, Paytm), cash, and direct NEFT/RTGS for bulk orders.</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 text-teal-400">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Town Delivery Help</h4>
                <p className="text-xs text-slate-400 mt-1">Convenient drop coordination for heavy bags and elders within 4 km of Shirali.</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 text-sky-400">
                <Languages className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Multilingual Staff</h4>
                <p className="text-xs text-slate-400 mt-1">Conversant in Kannada, Konkani, Hindi, and basic English for visiting devotees.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
