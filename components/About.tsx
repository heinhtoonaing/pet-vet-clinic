'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface AboutProps {
  lang?: 'EN' | 'TH';
}

export default function About({ lang = 'EN' }: AboutProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLineRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    const lineId = "YOUR_LINE_ID"; 
    window.open(`https://line.me/ti/p/~${lineId}`, '_blank');
    setIsModalOpen(false);
  };

  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto relative overflow-visible font-sans">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Content with Staggered Entrance */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 relative z-10"
        >
          <div className="space-y-4">
            <motion.div 
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              className="inline-block px-4 py-1 rounded-full bg-vet-green/10 text-vet-green text-xs font-bold uppercase tracking-widest"
            >
              {lang === 'EN' ? 'Since 2020' : 'เปิดให้บริการตั้งแต่ปี 2563'}
            </motion.div>
            
            <h2 className="text-5xl md:text-6xl font-black text-[#004d40] leading-tight font-serif">
              {lang === 'EN' ? (
                <>We Treat Them <br/> <span className="text-vet-green italic">Like Family.</span></>
              ) : (
                <>เราดูแลพวกเขา <br/> <span className="text-vet-green italic">เหมือนคนในครอบครัว</span></>
              )}
            </h2>
            
            <p className="text-slate-600 text-lg leading-relaxed max-w-md">
              {lang === 'EN' 
                ? "Your pets aren't just animals; they're family. Dr. Tuck provides honest, high-quality care in Bang Sao Thong."
                : "สัตว์เลี้ยงของคุณคือคนสำคัญในครอบครัว หมอตั๊กพร้อมมอบคุณภาพการรักษาที่ซื่อสัตย์และได้มาตรฐาน ในย่านบางเสาธง"}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-6">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:0659852496" 
              className="flex items-center gap-3 bg-vet-teal text-white px-8 py-4 rounded-2xl font-bold shadow-xl hover:shadow-vet-teal/20 transition-all"
            >
              <span>📞</span> {lang === 'EN' ? 'Call Now' : 'โทรเลย'}
            </motion.a>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-3 bg-[#06C755] text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-green-500/20 transition-all cursor-pointer"
            >
              <span className="text-xl font-bold">L</span>
              <span>{lang === 'EN' ? 'Book via LINE' : 'จองคิวผ่านไลน์'}</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Right Side: Animated Image Stack */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 2 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          className="relative group"
        >
          {/* Decorative background blob */}
          <div className="absolute -inset-4 bg-vet-green/5 rounded-[4rem] blur-2xl group-hover:bg-vet-green/10 transition-colors" />
          
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl transition-transform duration-500 h-[500px] border-[16px] border-white z-10">
            <Image 
              src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?q=80&w=2070&auto=format&fit=crop" 
              alt="Cute animals at the clinic" 
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              unoptimized
            />
          </div>

          {/* CREATIVE MICRO-INTERACTION: The Floating Paw */}
          <motion.div 
            initial={{ rotate: -12, scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 0.05 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', damping: 12, delay: 0.6 }}
            className="absolute -right-8 -bottom-8 text-[12rem] pointer-events-none z-0"
          >
            🐾
          </motion.div>
        </motion.div>
      </div>

      {/* --- BILINGUAL LINE BOOKING MODAL --- */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-[#004d40]/40 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              className="bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl overflow-hidden"
            >
              <div className="bg-[#06C755] p-8 text-white relative">
                <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-6 text-white/80 hover:text-white text-2xl">✕</button>
                <h3 className="text-2xl font-serif font-bold">
                  {lang === 'EN' ? 'Book with Dr. Tuck' : 'นัดหมายกับหมอตั๊ก'}
                </h3>
                <p className="text-white/80 text-sm italic underline">
                  {lang === 'EN' ? 'Redirecting to LINE' : 'กำลังนำท่านไปที่หน้า LINE'}
                </p>
              </div>
              
              <div className="p-8 text-center space-y-6">
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="text-5xl"
                >
                  🐾
                </motion.div>
                <p className="text-slate-600 font-medium">
                  {lang === 'EN' 
                    ? 'Click below to open Line and send us a message about your pet!'
                    : 'คลิกที่ปุ่มด้านล่างเพื่อเริ่มแชทและนัดหมายเวลาผ่าน LINE'}
                </p>
                <button 
                  onClick={handleLineRedirect}
                  className="w-full py-4 bg-[#06C755] text-white rounded-2xl font-black shadow-lg hover:shadow-green-500/40 transition-all flex items-center justify-center gap-3"
                >
                  {lang === 'EN' ? 'Open LINE App' : 'เปิดแอป LINE'}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}