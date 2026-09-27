import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2, AlertCircle, Copy, Check } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { getBusinessStatus } from '../utils/hoursHelper';

interface ContactSectionProps {
  prefilledService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefilledService }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneOrEmail: '',
    subject: prefilledService || 'General Inquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Update subject if prefilledService changes
  React.useEffect(() => {
    if (prefilledService) {
      setFormData(prev => ({ ...prev, subject: `Inquiry: ${prefilledService}` }));
    }
  }, [prefilledService]);

  const status = getBusinessStatus();

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.contact.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.fullName.trim()) {
      setErrorMsg('Please enter your name.');
      return;
    }
    if (!formData.phoneOrEmail.trim()) {
      setErrorMsg('Please provide your phone number or email address.');
      return;
    }
    if (!formData.message.trim()) {
      setErrorMsg('Please enter your inquiry or message.');
      return;
    }

    setSubmitting(true);
    // Simulate swift local processing
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleSendViaWhatsApp = () => {
    const text = `*New Customer Inquiry - Shirali Coastal Traders*\n*From:* ${formData.fullName || 'Customer'}\n*Contact:* ${formData.phoneOrEmail || 'Not provided'}\n*Subject:* ${formData.subject}\n*Message:* ${formData.message || 'I would like to inquire about your products/services in Shirali.'}`;
    const url = `https://wa.me/${BUSINESS_INFO.contact.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phoneOrEmail: '',
      subject: 'General Inquiry',
      message: '',
    });
    setSubmitted(false);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-teal-800 mb-2">
            Get in Touch
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 font-display tracking-tight text-balance">
            Contact Our Store in Shirali
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Have questions about local agro-produce, hardware inventory, or need bulk arrangements? Reach out by phone, WhatsApp, or drop a note below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Details & Store Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Cards */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200/90 p-6 space-y-5">
              <h3 className="font-bold text-slate-900 font-display text-base pb-3 border-b border-slate-200">
                Direct Contact Channels
              </h3>

              {/* Phone */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-100/80 text-teal-800 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Store Mobile & WhatsApp</div>
                    <a
                      href={`tel:${BUSINESS_INFO.contact.phone.replace(/\s+/g, '')}`}
                      className="text-base font-bold text-slate-900 font-mono hover:text-teal-800 transition-colors block"
                    >
                      {BUSINESS_INFO.contact.phoneDisplay}
                    </a>
                    <div className="text-xs text-slate-400">Landline: {BUSINESS_INFO.contact.landline}</div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
                  title="Copy Phone Number"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* WhatsApp Button */}
              <div className="pt-1">
                <a
                  href={`https://wa.me/${BUSINESS_INFO.contact.whatsapp}?text=${encodeURIComponent('Hello Shirali Coastal Traders, I would like to make an inquiry.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-colors shadow-xs min-h-[44px]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Start WhatsApp Chat with Store</span>
                </a>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3 pt-2 border-t border-slate-200/80">
                <div className="w-10 h-10 rounded-xl bg-slate-200 text-slate-700 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Email Desk</div>
                  <a
                    href={`mailto:${BUSINESS_INFO.contact.email}`}
                    className="text-sm font-medium text-slate-800 hover:text-teal-800 transition-colors break-all"
                  >
                    {BUSINESS_INFO.contact.email}
                  </a>
                  <div className="text-xs text-slate-400">Replies usually within 24 hours</div>
                </div>
              </div>

              {/* Physical Address */}
              <div className="flex items-start gap-3 pt-2 border-t border-slate-200/80">
                <div className="w-10 h-10 rounded-xl bg-slate-200 text-slate-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-rose-600" />
                </div>
                <div className="text-xs text-slate-600 leading-relaxed">
                  <div className="font-semibold text-slate-900 text-sm mb-0.5">Physical Address</div>
                  <p>{BUSINESS_INFO.address.street}</p>
                  <p className="text-teal-900 font-medium">{BUSINESS_INFO.address.landmark}</p>
                  <p>{BUSINESS_INFO.address.village}, {BUSINESS_INFO.address.taluk} Taluk, Karnataka - {BUSINESS_INFO.address.pincode}</p>
                </div>
              </div>

              {/* Hours Snapshot */}
              <div className="flex items-start gap-3 pt-2 border-t border-slate-200/80">
                <div className="w-10 h-10 rounded-xl bg-slate-200 text-slate-700 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-teal-800" />
                </div>
                <div className="text-xs text-slate-600">
                  <div className="font-semibold text-slate-900 text-sm mb-0.5">Business Hours</div>
                  <p>Mon – Sat: 8:30 AM – 8:30 PM</p>
                  <p>Sunday: 9:00 AM – 2:00 PM</p>
                  <div className="mt-1 font-semibold text-teal-800">Currently {status.statusText}</div>
                </div>
              </div>

            </div>

            {/* Proprietor Note */}
            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-900 leading-relaxed">
              <span className="font-semibold block mb-1">Proprietor Contact:</span>
              Managed by {BUSINESS_INFO.contact.contactPerson}. For urgent delivery or regional trading inquiries, walk-ins and phone calls receive top priority.
            </div>

          </div>

          {/* Right Column: Simple Contact Form (Requirement 4) */}
          <div className="lg:col-span-7 bg-slate-50 rounded-2xl border border-slate-200/90 p-6 sm:p-8">
            <div className="mb-6">
              <h3 className="text-xl font-bold font-display tracking-tight text-slate-900">
                Send an Inquiry or Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Fill in your details below and we will get back to you promptly. No marketing spam.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-emerald-950 font-display">
                    Thank You, {formData.fullName}!
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-800 mt-1 max-w-md mx-auto leading-relaxed">
                    Your inquiry regarding <strong>{formData.subject}</strong> has been recorded. Our team in Shirali will contact you at <strong>{formData.phoneOrEmail}</strong> shortly.
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={handleSendViaWhatsApp}
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-xs cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Also Send on WhatsApp for Faster Reply</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 rounded-lg border border-slate-300 cursor-pointer"
                  >
                    <span>Submit Another Message</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMsg && (
                  <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-xs text-rose-800 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-semibold text-slate-800 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Ramesh Naik"
                      required
                      className="w-full px-3.5 py-2.5 text-sm bg-white rounded-lg border border-slate-300 focus:border-teal-700 focus:ring-1 focus:ring-teal-700 outline-none text-slate-900 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="phoneOrEmail" className="block text-xs font-semibold text-slate-800 mb-1">
                      Phone Number or Email *
                    </label>
                    <input
                      type="text"
                      id="phoneOrEmail"
                      name="phoneOrEmail"
                      value={formData.phoneOrEmail}
                      onChange={(e) => setFormData({ ...formData, phoneOrEmail: e.target.value })}
                      placeholder="e.g. +91 98765 43210 or email"
                      required
                      className="w-full px-3.5 py-2.5 text-sm bg-white rounded-lg border border-slate-300 focus:border-teal-700 focus:ring-1 focus:ring-teal-700 outline-none text-slate-900 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-slate-800 mb-1">
                    Subject / Area of Interest
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-white rounded-lg border border-slate-300 focus:border-teal-700 focus:ring-1 focus:ring-teal-700 outline-none text-slate-900 transition-colors"
                  >
                    <option value="General Inquiry">General Store Inquiry</option>
                    <option value="Agro-Produce & Spices">Authentic Coastal Spices & Produce</option>
                    <option value="Agricultural Supplies">Agricultural & Irrigation Equipment</option>
                    <option value="Hardware & Plumbing">Home Hardware & Electrical Spares</option>
                    <option value="Bulk Institutional Order">Bulk Temple / Catering Order</option>
                    <option value="Directions / Visiting Guidance">Store Visiting & Directions Question</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-800 mb-1">
                    Your Message / Requirements *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us what you are looking for (e.g. availability of whole black pepper, specific pipe fitting size, or bulk cashews for an upcoming event)..."
                    required
                    className="w-full px-3.5 py-2.5 text-sm bg-white rounded-lg border border-slate-300 focus:border-teal-700 focus:ring-1 focus:ring-teal-700 outline-none text-slate-900 transition-colors resize-y"
                  />
                </div>

                {/* Form Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold text-white bg-teal-800 hover:bg-teal-900 rounded-lg transition-colors shadow-xs cursor-pointer min-h-[44px] disabled:opacity-70"
                  >
                    {submitting ? (
                      <span>Sending inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Message</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleSendViaWhatsApp}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors border border-emerald-200 cursor-pointer min-h-[44px]"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-700" />
                    <span>Send directly on WhatsApp</span>
                  </button>
                </div>

                <div className="text-2xs text-slate-400 pt-1">
                  We respect your privacy. Your contact info is used strictly to reply to your inquiry.
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
