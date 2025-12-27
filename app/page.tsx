'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Schedule from '@/components/Schedule'; // New Component
import Reviews from '@/components/Reviews';
import Contact from '@/components/Contact';

export default function Home() {
  // Lift the state here so all components can see it
  const [lang, setLang] = useState<'EN' | 'TH'>('EN');

  return (
    <main className="min-h-screen">
      {/* 1. Pass state to Navbar so the toggle works */}
      <Navbar lang={lang} setLang={setLang} />
      
      {/* 2. Pass lang to each section for bilingual support */}
      <Hero lang={lang} />
      
      <About lang={lang} />
      
      <div className="bg-slate-50/50">
        <Services lang={lang} />
      </div>

      {/* Gallery: Visual proof of the clinic */}
      <Gallery />

      {/* Schedule: Integrated popular times data from your screenshots */}
      <div className="bg-[#fffefc] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <Schedule lang={lang} />
        </div>
      </div>

      <Reviews lang={lang} />

      <Contact lang={lang} />
    </main>
  );
}