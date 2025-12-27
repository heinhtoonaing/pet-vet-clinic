export default function Reviews() {
  const reviews = [
    {
      name: "Khun Somchai",
      pet: "Lucky (Golden Retriever)",
      text: "Dr. Tuck is very honest. He explained the treatment clearly and didn't try to upsell unnecessary medicine. Highly recommended!",
      rating: 5,
      color: "bg-white",
      size: "md:col-span-2"
    },
    {
      name: "Jane Wilson",
      pet: "Mimi (Cat)",
      text: "Best vet in Bang Sao Thong! Very gentle with my nervous cat.",
      rating: 5,
      color: "bg-orange-50",
      size: "md:col-span-1"
    },
    {
      name: "Ananda P.",
      pet: "Kaffee (Poodle)",
      text: "Fair prices and professional service. The clinic is very clean and the staff is friendly. We've found our forever vet!",
      rating: 5,
      color: "bg-green-50",
      size: "md:col-span-1"
    },
    {
      name: "Somsak K.",
      pet: "Leo",
      text: "Quick surgery and great aftercare. Dr. Tuck really cares about the animals. Thank you for saving Leo!",
      rating: 5,
      color: "bg-white",
      size: "md:col-span-2"
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-[#fffefc] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl font-serif font-black text-vet-teal italic">
            Loved by <span className="text-vet-green not-italic font-sans">Local Pets.</span>
          </h2>
          <div className="flex justify-center gap-1 text-[#ffc107]">
            {[...Array(5)].map((_, i) => <span key={i} className="text-2xl">★</span>)}
            <span className="ml-2 text-slate-400 font-bold uppercase tracking-widest text-sm self-center">
              4.6 on Google
            </span>
          </div>
        </div>

        {/* Masonry-ish Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div 
              key={i} 
              className={`${r.size} ${r.color} p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 relative group`}
            >
              {/* Quote Icon Accent */}
              <div className="absolute top-6 right-8 text-4xl opacity-10 group-hover:rotate-12 transition-transform">
                "
              </div>

              <div className="space-y-4">
                <p className="text-slate-700 leading-relaxed font-medium italic">
                  "{r.text}"
                </p>
                
                <div className="flex items-center gap-4 pt-4 border-t border-slate-50">
                  <div className="w-12 h-12 rounded-full bg-vet-teal/10 flex items-center justify-center text-xl font-black text-vet-teal font-serif italic">
                    {r.name[0]}
                  </div>
                  <div>
                    <h4 className="font-black text-vet-teal text-sm">{r.name}</h4>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                      {r.pet}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action for Google Maps */}
        <div className="mt-12 text-center">
          <a 
            href="https://maps.google.com" 
            target="_blank"
            className="inline-flex items-center gap-2 text-xs font-black text-vet-teal uppercase tracking-widest hover:text-vet-green transition-colors"
          >
            Read all 150+ Reviews on Google Maps 
            <span className="text-lg">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}