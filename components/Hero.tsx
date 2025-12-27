import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 -z-10 w-2/3 h-full bg-vet-green/5 rounded-l-[100px] hidden md:block" />
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vet-green/10 text-vet-green text-xs font-bold tracking-widest uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-vet-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-vet-green"></span>
            </span>
            Now Accepting New Patients
          </div>
          
          <h1 className="text-6xl md:text-7xl font-serif font-black text-vet-teal leading-[1.1]">
            Expert Care for <br />
            <span className="text-vet-green italic">Happy Tails.</span>
          </h1>
          
          <p className="text-lg text-slate-600 max-w-md leading-relaxed">
            Professional veterinary services in Bang Sao Thong. We provide honest, compassionate treatment for your furry family members.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="tel:0659852496" className="bg-vet-green text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-vet-green/20 hover:scale-105 transition-transform">
              Book Appointment
            </a>
            <a href="#services" className="bg-white text-vet-teal border-2 border-slate-100 px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-colors">
              Our Services
            </a>
          </div>
        </div>

        <div className="relative">
          {/* Main Hero Image */}
          <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-2xl border-[16px] border-white h-[600px]">
            <Image 
              src="/images/clinic-front.jpg" 
              alt="Clinic" 
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Floating Aesthetic Badge */}
          <div className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-3xl shadow-2xl border border-slate-50 animate-float">
            <div className="flex items-center gap-4">
              <div className="text-4xl">⭐</div>
              <div>
                <div className="font-black text-vet-teal text-xl">4.6 Rating</div>
                <div className="text-xs text-slate-400 font-bold uppercase tracking-widest">On Google Maps</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}