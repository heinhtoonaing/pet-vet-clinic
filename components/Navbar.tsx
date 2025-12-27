'use client';
import { useState, useEffect, Dispatch, SetStateAction } from 'react';

// 1. Define the Interface so TypeScript knows what to expect
interface NavbarProps {
  lang: 'EN' | 'TH' | string; // Matches your page.tsx state
  setLang: Dispatch<SetStateAction<'EN' | 'TH'>>;
}

export default function Navbar({ lang, setLang }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { en: 'About', th: 'เกี่ยวกับเรา', href: '#about' },
    { en: 'Services', th: 'บริการของเรา', href: '#services' },
    { en: 'Reviews', th: 'รีวิว', href: '#reviews' },
    { en: 'Contact', th: 'ติดต่อเรา', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
      scrolled || isOpen ? 'py-4 bg-white/95 backdrop-blur-lg shadow-md' : 'py-6 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex flex-col relative z-50">
          <span className="font-serif text-2xl font-black text-[#008080] italic leading-none">
            PETS<span className="text-[#4CAF50] not-italic">.</span>
          </span>
          <span className="text-[8px] uppercase tracking-[0.2em] font-bold text-slate-400">
            {lang === 'EN' ? 'Veterinary' : 'คลินิกหมอตั๊ก'}
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {/* Language Toggle Pill */}
          <button 
            onClick={() => setLang(lang === 'EN' ? 'TH' : 'EN')}
            className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-full text-[10px] font-black hover:bg-slate-200 transition-all border border-slate-200"
          >
            <span className={lang === 'EN' ? 'opacity-100' : 'opacity-30'}>EN</span>
            <div className="w-[1px] h-3 bg-slate-300"></div>
            <span className={lang === 'TH' ? 'opacity-100' : 'opacity-30'}>TH</span>
          </button>

          {navLinks.map((link) => (
            <a 
              key={link.en}
              href={link.href}
              className="text-sm font-bold text-slate-600 hover:text-[#008080] transition-colors relative group"
            >
              {lang === 'EN' ? link.en : link.th}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#4CAF50] transition-all group-hover:w-full"></span>
            </a>
          ))}
          
          <a 
            href="tel:0659852496"
            className="relative flex items-center gap-2 bg-red-500 text-white px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-wider hover:bg-red-600 transition-all shadow-lg shadow-red-500/30 group"
          >
            <span className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-20 group-hover:hidden"></span>
            <span className="relative flex items-center gap-2">
              <span className="text-base">🚨</span> 
              <span>{lang === 'EN' ? 'Emergency' : 'ฉุกเฉิน'}</span>
            </span>
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden flex items-center gap-3 relative z-50">
          <button 
            onClick={() => setLang(lang === 'EN' ? 'TH' : 'EN')}
            className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-[10px] font-black border border-slate-200"
          >
            {lang}
          </button>

          <a 
            href="tel:0659852496" 
            className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white shadow-lg animate-pulse"
          >
            📞
          </a>
          <button onClick={() => setIsOpen(!isOpen)} className="flex flex-col gap-1.5 justify-center items-center w-8 h-8">
            <span className={`h-0.5 w-6 bg-[#008080] transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`h-0.5 w-6 bg-[#008080] transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`h-0.5 w-6 bg-[#008080] transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-40 transition-transform duration-500 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'} md:hidden flex flex-col items-center justify-center gap-8 p-12`}>
        {navLinks.map((link) => (
          <a 
            key={link.en}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-3xl font-serif font-black text-[#008080] italic text-center"
          >
            <span className="block">{lang === 'EN' ? link.en : link.th}</span>
            {lang === 'TH' && <span className="block text-[10px] uppercase tracking-[0.3em] text-slate-400 not-italic mt-2">{link.en}</span>}
          </a>
        ))}
        <div className="w-full h-px bg-slate-100 max-w-[100px]"></div>
        <a href="tel:0659852496" className="text-xl font-bold text-red-500">065-985-2496</a>
        <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Bang Sao Thong • บางเสาธง</p>
      </div>
    </nav>
  );
}