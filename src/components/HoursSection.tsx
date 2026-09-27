import React from 'react';
import { Clock, CheckCircle2, Phone, AlertCircle, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { getBusinessStatus } from '../utils/hoursHelper';

export const HoursSection: React.FC = () => {
  const status = getBusinessStatus();

  return (
    <section id="hours" className="py-16 md:py-24 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-teal-800 mb-2">
            Store Hours & Availability
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 font-display tracking-tight text-balance">
            Convenient Store Hours Seven Days a Week
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Open early to serve coastal morning farmers, and open late into the evening for commuters returning to Shirali from Bhatkal and Honnavar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Weekly Schedule Card */}
          <div className="lg:col-span-7 bg-slate-50 rounded-2xl border border-slate-200/90 p-6 sm:p-8">
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-teal-800 text-white">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 font-display text-lg">Weekly Schedule</h3>
                  <div className="text-xs text-slate-500">Standard Indian Standard Time (IST)</div>
                </div>
              </div>

              {/* Status Badge */}
              <div className="text-right">
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                    status.isOpen
                      ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                      : 'bg-amber-100 text-amber-800 border border-amber-200'
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${status.isOpen ? 'bg-emerald-600 animate-pulse' : 'bg-amber-600'}`} />
                  {status.statusText}
                </span>
                <div className="text-xs text-slate-500 mt-1">{status.nextEventText}</div>
              </div>
            </div>

            {/* Days Table */}
            <div className="divide-y divide-slate-200/70">
              {BUSINESS_INFO.weeklyHours.map((schedule) => {
                const isToday = schedule.day === status.currentDayName;
                return (
                  <div
                    key={schedule.day}
                    className={`py-3.5 px-3 flex items-center justify-between text-sm rounded-lg transition-colors ${
                      isToday ? 'bg-white shadow-2xs font-semibold text-slate-900 border border-slate-200/80' : 'text-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span>{schedule.day}</span>
                      {isToday && (
                        <span className="text-xs text-teal-800 font-medium">
                          (Today)
                        </span>
                      )}
                    </div>
                    <div className="font-mono text-xs sm:text-sm tracking-tight text-slate-800">
                      {schedule.hours}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom reminder */}
            <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
              <span>Festival dates may follow modified Sunday hours.</span>
              <a
                href={`tel:${BUSINESS_INFO.contact.phone.replace(/\s+/g, '')}`}
                className="text-teal-800 font-semibold hover:underline flex items-center gap-1"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call to confirm</span>
              </a>
            </div>
          </div>

          {/* Right Column: Customer Tips & Best Time to Visit */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Visit Tips Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
              <h3 className="font-bold text-slate-900 font-display text-base flex items-center gap-2">
                <Calendar className="w-4 h-4 text-teal-700" />
                <span>Best Times to Visit</span>
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-slate-600">
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="font-semibold text-slate-900 block mb-1">Morning Hours (8:30 AM – 11:30 AM)</span>
                  Fresh spice sorting, coolest weather for loading farm tools, and immediate personal service.
                </div>

                <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="font-semibold text-slate-900 block mb-1">Afternoon Quiet Window (1:30 PM – 4:00 PM)</span>
                  Ideal time for detailed consultations on hardware, plumbing fittings, or bulk catering orders.
                </div>

                <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="font-semibold text-slate-900 block mb-1">Evening Pickup (5:00 PM – 8:30 PM)</span>
                  Convenient stop on the way home from Bhatkal or Kumta with easy roadside vehicle parking.
                </div>
              </div>
            </div>

            {/* Emergency / Special Holiday Inquiries */}
            <div className="p-5 rounded-2xl bg-teal-900 text-white space-y-3">
              <h4 className="font-bold font-display text-sm text-amber-300">
                Need urgent agricultural or plumbing supplies after hours?
              </h4>
              <p className="text-xs text-slate-200 leading-relaxed">
                If an irrigation line bursts or you have an emergency requirement for a local event, our residence is located adjacent to the store. Give us a phone call and we will assist if available.
              </p>
              <div className="pt-2">
                <a
                  href={`tel:${BUSINESS_INFO.contact.phone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white text-slate-900 text-xs font-semibold hover:bg-slate-100 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-teal-800" />
                  <span>Call {BUSINESS_INFO.contact.phoneDisplay}</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
