'use client';
import { motion } from 'framer-motion';

interface ServicesProps {
  lang?: 'EN' | 'TH';
}

const serviceList = [
  {
    icon: '🩺',
    title: { EN: 'General Checkup', TH: 'ตรวจสุขภาพทั่วไป' },
    desc: { EN: 'Physical exams and diagnostic testing.', TH: 'ตรวจร่างกายเบื้องต้นและวินิจฉัยโรค' }
  },
  {
    icon: '💉',
    title: { EN: 'Vaccination', TH: 'ฉีดวัคซีน' },
    desc: { EN: 'Essential protection for your loved ones.', TH: 'เสริมภูมิคุ้มกันที่จำเป็นสำหรับสัตว์เลี้ยง' }
  },
  {
    icon: '✂️',
    title: { EN: 'Surgery & Neutering', TH: 'ผ่าตัดและทำหมัน' },
    desc: { EN: 'Safe procedures with professional care.', TH: 'ผ่าตัดด้วยเทคนิคที่ปลอดภัยและดูแลใกล้ชิด' }
  },
  {
    icon: '🦷',
    title: { EN: 'Dental Care', TH: 'ขูดหินปูน' },
    desc: { EN: 'Keeping those pearly whites healthy.', TH: 'ดูแลสุขภาพช่องปากและฟัน' }
  }
];

// Animation Variants for the Container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Delay between each card
    },
  },
};

// Animation Variants for each Card
const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100, damping: 12 },
  },
};

export default function Services({ lang = 'EN' }: ServicesProps) {
  return (
    <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16 space-y-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif font-black text-vet-teal italic"
        >
          {lang === 'EN' ? 'Professional Care' : 'บริการทางการแพทย์'}
        </motion.h2>
        <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">
          {lang === 'EN' ? 'Our Specialties' : 'ความเชี่ยวชาญของเรา'}
        </p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {serviceList.map((service, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className="p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-vet-teal/5 transition-all group"
          >
            <div className="text-4xl mb-6 group-hover:scale-125 transition-transform duration-300 inline-block">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-[#004d40] mb-3">
              {lang === 'EN' ? service.title.EN : service.title.TH}
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              {lang === 'EN' ? service.desc.EN : service.desc.TH}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}