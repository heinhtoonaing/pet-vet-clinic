'use client';
import Image from 'next/image';

export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=2069&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1591768793355-74d7c526cc15?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=2070&auto=format&fit=crop",
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="text-4xl font-serif font-black text-vet-teal italic">
          Happy <span className="text-vet-green not-italic font-sans">Patients.</span>
        </h2>
      </div>

      {/* Infinite Scroll Container */}
      <div className="flex overflow-hidden group">
        <div className="flex gap-6 animate-scroll group-hover:pause-scroll px-6">
          {/* Double the images to create seamless loop */}
          {[...images, ...images].map((src, i) => (
            <div 
              key={i} 
              className="relative w-72 h-96 flex-shrink-0 rounded-[2.5rem] overflow-hidden border-8 border-slate-50 shadow-lg hover:scale-105 transition-transform duration-500"
            >
              <Image 
                src={src} 
                alt="Happy pet" 
                fill 
                className="object-cover"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: flex;
          width: fit-content;
          animation: scroll 40s linear infinite;
        }
        .pause-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}