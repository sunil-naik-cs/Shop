/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { HoursSection } from './components/HoursSection';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { QuickActionFloat } from './components/QuickActionFloat';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('');

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA] text-slate-800 antialiased pb-16 md:pb-0">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Home / Hero Section */}
        <Hero />

        {/* 2. About Section */}
        <AboutSection />

        {/* 3. Services Offered Section */}
        <ServicesSection onSelectServiceForInquiry={handleSelectService} />

        {/* 4. Opening Hours Section */}
        <HoursSection />

        {/* 5. Location Section with Google Maps and Directions */}
        <LocationSection />

        {/* 6. Contact Section with Phone, WhatsApp, Address, & Interactive Form */}
        <ContactSection prefilledService={selectedService} />

        {/* 7. Helpful Information / FAQs */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Floating Action Dock (<15% viewport height) */}
      <QuickActionFloat />
    </div>
  );
}
