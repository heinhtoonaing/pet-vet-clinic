'use client';
import { useState } from 'react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const phoneNumber = "0659852496";

  const handleCopy = () => {
    navigator.clipboard.writeText(phoneNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        
        {/* Left Side: Info */}
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-5xl font-serif font-black text-vet-teal italic leading-tight">
              Find Us in <br />
              <span className="text-vet-green not-italic font-sans">Bang Sao Thong.</span>
            </h2>
            <p className="text-slate-600 max-w-md">
              We are located in the heart of the community, ready to care for your pets 7 days a week.
            </p>
          </div>

          <div className="space-y-6">
            {/* Address Card */}
            <div className="flex gap-6 p-6 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl">📍</div>
              <div>
                <h4 className="font-black text-vet-teal uppercase text-xs tracking-widest mb-1">Our Location</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Bang Sao Thong, Bang Sao Thong District,<br />
                  Samut Prakan 10570, Thailand
                </p>
              </div>
            </div>

            {/* Phone Card with Copy Feature */}
            <div className="group flex items-center justify-between gap-6 p-6 bg-vet-teal text-white rounded-[2rem] shadow-xl shadow-vet-teal/20 relative overflow-hidden">
               <div className="flex gap-6 items-center relative z-10">
                  <div className="text-3xl animate-pulse">📞</div>
                  <div>
                    <h4 className="font-bold text-white/60 uppercase text-[10px] tracking-widest mb-1">Call Dr. Tuck</h4>
                    <p className="text-xl font-black font-mono tracking-tighter">{phoneNumber}</p>
                  </div>
               </div>
               
               <button 
                onClick={handleCopy}
                className={`relative z-10 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
                  copied ? 'bg-vet-green text-white' : 'bg-white/10 text-white hover:bg-white/20'
                }`}
               >
                 {copied ? '✅ Copied!' : '📋 Copy'}
               </button>

               {/* Decorative Background Icon */}
               <div className="absolute -right-4 -bottom-4 text-8xl opacity-10 rotate-12 pointer-events-none">🐾</div>
            </div>
          </div>
        </div>

        {/* Right Side: Map */}
        <div className="relative h-[500px] w-full rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white rotate-1 lg:rotate-2 hover:rotate-0 transition-transform duration-700">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3878.2123!2d100.8!3d13.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDM2JzAwLjAiTiAxMDDCsDQ4JzAwLjAiRQ!5e0!3m2!1sen!2sth!4v1700000000000" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale hover:grayscale-0 transition-all duration-1000"
          ></iframe>
        </div>
      </div>
    </section>
  );
}