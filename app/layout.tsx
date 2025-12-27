import './globals.css';
import { Fraunces, Outfit } from 'next/font/google';

// Professional Serif for Headings
const fraunces = Fraunces({ 
  subsets: ['latin'], 
  variable: '--font-serif',
  display: 'swap',
});

// Modern Sans for Body text
const outfit = Outfit({ 
  subsets: ['latin'], 
  variable: '--font-sans',
  display: 'swap',
});

// SPICY SEO: Optimized for local search in Samut Prakan
export const metadata = {
  title: 'PETS Veterinary | คลินิกหมอตั๊กรักษาสัตว์ Bang Sao Thong',
  description: 'Professional veterinary care by Dr. Tuck in Bang Sao Thong. บริการรักษาสัตว์ ผ่าตัด ทำหมัน ฉีดวัคซีน โดยสัตวแพทย์มืออาชีพ บางเสาธง สมุทรปราการ',
  keywords: [
    'Veterinary Bang Sao Thong', 
    'สัตวแพทย์ บางเสาธง', 
    'คลินิกหมอตั๊ก', 
    'Pet clinic Samut Prakan', 
    'รักษาสัตว์ สมุทรปราการ',
    'ทำหมันสุนัข แมว'
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${outfit.variable} scroll-smooth`}>
      <body className="font-sans antialiased text-slate-900 bg-[#fffefc] relative">
        {/* Subtle background texture/blobs */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-vet-green/5 blur-[120px]" />
          <div className="absolute top-[40%] -right-[10%] w-[30%] h-[50%] rounded-full bg-vet-teal/5 blur-[120px]" />
        </div>

        {/* NOTE: <Navbar /> is now in page.tsx 
            This allows it to share the 'lang' state with all sections.
        */}
        
        <main>{children}</main>

        {/* --- SPICY FLOATING ACTIONS --- */}
        {/* These stay here as they are global utilities */}
        <div className="fixed bottom-6 right-6 z-[99] flex flex-col gap-4 items-end">
          <div className="flex items-center gap-3 group">
            <span className="bg-white px-3 py-1.5 rounded-lg shadow-lg text-[10px] font-bold text-vet-teal uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-slate-100">
              Emergency?
            </span>
            <a 
              href="tel:0659852496" 
              className="w-14 h-14 bg-vet-teal text-white rounded-2xl shadow-2xl flex items-center justify-center text-xl hover:scale-110 active:scale-95 transition-all duration-300 animate-bounce"
            >
              📞
            </a>
          </div>

          <a 
            href="https://line.me/ti/p/~YOUR_LINE_ID" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-[#06C755] text-white rounded-2xl shadow-2xl flex items-center justify-center text-2xl font-black hover:scale-110 active:scale-95 transition-all duration-300 group"
          >
            <span className="group-hover:rotate-12 transition-transform">L</span>
          </a>
        </div>

        {/* --- FOOTER --- */}
        <footer className="bg-[#004d40] text-white/60 py-20 px-6 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-12">
              <div className="text-center md:text-left">
                <h3 className="font-serif text-white text-2xl mb-1 italic">PETS Veterinary</h3>
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-vet-green/80">คลินิกหมอตั๊กรักษาสัตว์</p>
              </div>
              
              <div className="flex gap-8 text-xs uppercase tracking-widest font-bold">
                <a href="#about" className="hover:text-white transition-colors">About</a>
                <a href="#services" className="hover:text-white transition-colors">Services</a>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              </div>

              <div className="text-center md:text-right">
                <p className="text-xs">© 2025 PETS Veterinary.</p>
                <p className="text-[10px] mt-1 opacity-50 font-medium">Bang Sao Thong, Samut Prakan</p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}