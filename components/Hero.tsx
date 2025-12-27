import Image from 'next/image';

export default function Hero({ lang }: { lang: string }) { // Added lang prop to match page.tsx
  return (
    // CHANGE: Increased padding-top (pt-32) and changed min-h to [100dvh] for mobile browsers
    <section className="relative min-h-[100dvh] md:min-h-[90vh] flex items-center pt-32 pb-12 md:pt-20 overflow-hidden">
      
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 -z-10 w-2/3 h-full bg-vet-green/5 rounded-l-[100px] hidden md:block" />
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 order-2 md:order-1"> {/* CHANGE: Content stays below image on mobile */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vet-green/10 text-vet-green text-xs font-bold tracking-widest uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-vet-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-vet-green"></span>
            </span>
            {lang === 'EN' ? 'Now Accepting New Patients' : 'เปิดรับเคสใหม่แล้ววันนี้'}
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-black text-vet-teal leading-[1.1]">
            {lang === 'EN' ? 'Expert Care for' : 'ดูแลสัตว์เลี้ยงด้วย'} <br />
            <span className="text-vet-green italic">{lang === 'EN' ? 'Happy Tails.' : 'หัวใจหัวใจ'}</span>
          </h1>
          
          <p className="text-lg text-slate-600 max-w-md leading-relaxed">
            {lang === 'EN' 
              ? 'Professional veterinary services in Bang Sao Thong. We provide honest, compassionate treatment for your furry family members.'
              : 'บริการรักษาสัตว์ระดับมืออาชีพในบางเสาธง เราให้บริการอย่างซื่อสัตย์และเอาใจใส่ด้วยความรัก'}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="tel:0659852496" className="w-full md:w-auto text-center bg-vet-green text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-vet-green/20 hover:scale-105 transition-transform">
              {lang === 'EN' ? 'Book Appointment' : 'นัดหมายบริการ'}
            </a>
            <a href="#services" className="w-full md:w-auto text-center bg-white text-vet-teal border-2 border-slate-100 px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-colors">
              {lang === 'EN' ? 'Our Services' : 'บริการของเรา'}
            </a>
          </div>
        </div>

        <div className="relative order-1 md:order-2"> {/* CHANGE: Image appears first on mobile to clear the navbar space */}
          {/* Main Hero Image */}
          {/* CHANGE: Reduced height on mobile (h-[350px]) vs desktop (h-[600px]) */}
          <div className="relative z-10 rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-2xl border-[8px] md:border-[16px] border-white h-[350px] md:h-[600px]">
            <Image 
              src="/images/clinic-front.jpg" 
              alt="Clinic" 
              fill
              className="object-cover"
              priority
            />
          </div>
          
          {/* Floating Aesthetic Badge */}
          {/* CHANGE: Hidden on very small mobile to avoid clutter, or made smaller */}
          <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-left-6 z-20 bg-white p-4 md:p-6 rounded-3xl shadow-2xl border border-slate-50 animate-float">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="text-2xl md:text-4xl">⭐</div>
              <div>
                <div className="font-black text-vet-teal text-lg md:text-xl">4.6 Rating</div>
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">On Google Maps</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}