'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ScheduleProps {
  lang?: 'EN' | 'TH';
}

export default function Schedule({ lang = 'EN' }: ScheduleProps) {
  const [selectedDay, setSelectedDay] = useState(new Date().getDay());
  const [currentHour, setCurrentHour] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set current hour
    const hour = new Date().getHours();
    if (hour >= 9 && hour <= 18) setCurrentHour(hour);

    // Skeleton Loading Timeout: Shimmer for 1.2s then show data
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const days = [
    { name: { EN: 'Sun', TH: 'อา.' }, data: [3, 6, 7, 6, 6, 5, 6, 8, 9, 8] },
    { name: { EN: 'Mon', TH: 'จ.' }, data: [4, 4, 5, 6, 5, 5, 4, 6, 7, 5] },
    { name: { EN: 'Tue', TH: 'อ.' }, data: [2, 3, 2, 3, 4, 4, 6, 8, 9, 7] },
    { name: { EN: 'Wed', TH: 'พ.' }, data: [1, 2, 4, 6, 5, 5, 5, 7, 8, 7] },
    { name: { EN: 'Thu', TH: 'พฤ.' }, data: [4, 5, 5, 4, 4, 6, 8, 9, 10, 6] },
    { name: { EN: 'Fri', TH: 'ศ.' }, data: [3, 4, 4, 5, 4, 3, 6, 9, 9, 5] },
    { name: { EN: 'Sat', TH: 'ส.' }, data: [2, 4, 6, 6, 7, 7, 9, 10, 10, 8] },
  ];

  return (
    <section className="py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl border border-slate-100 relative overflow-hidden"
      >
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div className="space-y-2">
            <h3 className="text-3xl font-serif font-black text-vet-teal italic">
              {lang === 'EN' ? 'Clinic Traffic' : 'ความหนาแน่นของผู้ใช้บริการ'}
            </h3>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-vet-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-vet-green"></span>
              </span>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                {lang === 'EN' ? 'Live relative to typical traffic' : 'ข้อมูลอ้างอิงตามช่วงเวลาปกติ'}
              </p>
            </div>
          </div>

          {/* Day Selector Pill */}
          <div className="flex bg-slate-50 p-1.5 rounded-2xl border border-slate-100 overflow-x-auto max-w-full no-scrollbar">
            {days.map((day, i) => (
              <button
                key={i}
                onClick={() => setSelectedDay(i)}
                className={`px-4 py-2 rounded-xl text-[10px] font-black transition-all whitespace-nowrap ${
                  selectedDay === i 
                    ? 'bg-vet-teal text-white shadow-lg scale-105' 
                    : 'text-slate-400 hover:text-vet-teal hover:bg-white'
                }`}
              >
                {lang === 'EN' ? day.name.EN : day.name.TH}
              </button>
            ))}
          </div>
        </div>

        {/* The Bar Chart */}
        <div className="h-48 flex items-end justify-between gap-1 md:gap-3 mb-10 group">
          {days[selectedDay].data.map((val, i) => {
            const barHour = i + 9;
            const isLive = currentHour === barHour && selectedDay === new Date().getDay();
            
            return (
              <div key={i} className="flex-1 flex flex-col items-center gap-3 h-full">
                <div className="relative w-full h-full flex flex-col justify-end group/bar">
                  
                  <AnimatePresence mode="wait">
                    {isLoading ? (
                      /* SKELETON SHIMMER EFFECT */
                      <motion.div 
                        key="skeleton"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="w-full h-3/4 bg-slate-100 rounded-t-xl overflow-hidden relative"
                      >
                        <motion.div 
                          animate={{ x: ['-100%', '100%'] }}
                          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
                        />
                      </motion.div>
                    ) : (
                      /* ACTUAL DATA BAR WITH SPRING ANIMATION */
                      <motion.div 
                        key="bar"
                        initial={{ height: 0 }}
                        animate={{ height: `${val * 10}%` }}
                        transition={{ type: 'spring', damping: 15, stiffness: 100, delay: i * 0.03 }}
                        className={`w-full rounded-t-xl relative ${
                          isLive 
                            ? 'bg-vet-green shadow-[0_-4px_12px_rgba(16,185,129,0.3)]' 
                            : val >= 8 
                              ? 'bg-red-400' 
                              : 'bg-vet-teal/20 group-hover:bg-vet-teal/80 transition-colors'
                        }`}
                      />
                    )}
                  </AnimatePresence>

                  {isLive && !isLoading && (
                    <motion.span 
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute -top-6 left-1/2 -translate-x-1/2 text-[7px] font-black text-vet-green uppercase bg-vet-green/10 px-1 rounded"
                    >
                      Live
                    </motion.span>
                  )}
                </div>

                <span className={`text-[9px] font-bold shrink-0 ${isLive ? 'text-vet-green' : 'text-slate-400'}`}>
                  {barHour < 12 ? `${barHour}a` : barHour === 12 ? '12p' : `${barHour - 12}p`}
                </span>
              </div>
            );
          })}
        </div>

        {/* Legend & Action */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-50 gap-6">
          <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest text-slate-400">
             {/* ... (Legend Items same as before) */}
          </div>

          {/* LINE BUTTON WITH BOUNCE MICRO-INTERACTION */}
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', bounce: 0.5 }}
            href="https://line.me/ti/p/~YOUR_LINE_ID" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#06C755] text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg shadow-green-500/20"
          >
            <span className="text-base">💬</span>
            {lang === 'EN' ? 'Book via LINE' : 'จองคิวผ่าน LINE'}
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}