import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, Lightbulb, Box, HardHat, CheckCircle2 } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } }
};

const lineReveal = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } }
};

const processSteps = [
  {
    icon: MessageSquare,
    number: '01',
    title: 'Consultation',
    desc: 'We begin by understanding your vision, preferences, lifestyle, and budget. This initial discussion forms the foundation of the entire design journey — ensuring every decision aligns with your goals.',
    detail: 'Site visit & requirement gathering',
  },
  {
    icon: Lightbulb,
    number: '02',
    title: 'Concept Development',
    desc: 'Our design team develops creative concepts, mood boards, and initial layout plans that translate your ideas into a clear visual direction. Materials, color palettes, and design themes are carefully curated.',
    detail: 'Mood boards & layout planning',
  },
  {
    icon: Box,
    number: '03',
    title: '3D Design & Visualization',
    desc: 'We create detailed 3D renderings that let you see exactly how your space will look before any work begins. This step ensures complete transparency and allows for refinements before execution.',
    detail: 'Photorealistic 3D walkthroughs',
  },
  {
    icon: HardHat,
    number: '04',
    title: 'Execution & Project Management',
    desc: 'With approved designs in hand, our team manages every aspect of the build — from procurement and contractor coordination to quality checks — ensuring precision in every detail.',
    detail: 'On-site supervision & quality control',
  },
  {
    icon: CheckCircle2,
    number: '05',
    title: 'Final Handover',
    desc: 'We conduct thorough inspections, fine-tune every element, and deliver a space that exceeds expectations. The final walkthrough ensures your complete satisfaction before handover.',
    detail: 'Quality inspection & client walkthrough',
  },
];

export default function Process() {
  return (
    <div className="w-full overflow-hidden bg-white">

      {/* ─── HERO BANNER ─── */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-end pb-16 md:pb-24">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/imagebedroom.jpeg"
            alt="Our Design Process"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
        </div>
        <div className="relative z-10 w-full">
          <div className="container mx-auto px-6 md:px-12 max-w-7xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xs tracking-[0.35em] uppercase text-[#d4af37] mb-4 font-light"
            >
              How We Work
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.1]"
            >
              Our <span className="italic text-[#d4af37]">Process</span>
            </motion.h1>
          </div>
        </div>
      </section>

      {/* ─── INTRO ─── */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-base md:text-lg text-[#666] font-light leading-[1.9] tracking-wide"
          >
            A seamless journey from concept to completion. Our structured design process ensures transparency, precision, and a flawless outcome — every time.
          </motion.p>
        </div>
      </section>

      {/* ─── TIMELINE ─── */}
      <section className="py-16 md:py-28 px-6 bg-[#fafaf9]">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="relative"
          >
            {/* Vertical line — desktop only */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[#eee] -translate-x-1/2" />

            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                variants={fadeIn}
                className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-20 md:mb-28 last:mb-0 items-center ${
                  idx % 2 !== 0 ? '' : ''
                }`}
              >
                {/* Connector dot — desktop only */}
                <div className="hidden md:flex absolute left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-[#d4af37] border-4 border-[#fafaf9] z-10" />

                {/* Content side */}
                <div className={`space-y-5 ${idx % 2 !== 0 ? 'md:order-2 md:pl-16' : 'md:pr-16 md:text-right'}`}>
                  <div className={`flex items-center gap-4 ${idx % 2 !== 0 ? '' : 'md:justify-end'}`}>
                    <div className="w-14 h-14 flex items-center justify-center border border-[#d4af37]/30 bg-white">
                      <step.icon size={22} className="text-[#d4af37]" />
                    </div>
                    <span className="font-serif text-4xl text-[#eee]">{step.number}</span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl text-[#1a1a1a]">{step.title}</h3>
                  <p className="text-sm text-[#888] font-light leading-[1.9] tracking-wide">{step.desc}</p>
                  <p className="text-xs tracking-[0.2em] uppercase text-[#d4af37] font-light">{step.detail}</p>
                </div>

                {/* Image side */}
                <div className={idx % 2 !== 0 ? 'md:order-1' : ''}>
                  <div className="aspect-[4/3] overflow-hidden bg-[#eee]">
                    <img
                      src={`/images/${['imageliving.jpeg', 'imagebedroom2.jpeg', 'imagebedroom3.jpeg', 'imagekitchen.jpeg', 'imageliving2.jpeg'][idx]}`}
                      alt={step.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.2s] ease-out"
                      loading="lazy"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── SUMMARY STRIP ─── */}
      <section className="py-16 md:py-20 px-6 bg-[#1a1a1a]">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4"
          >
            {processSteps.map((step, idx) => (
              <motion.div key={idx} variants={fadeIn} className="text-center space-y-3">
                <div className="w-12 h-12 mx-auto flex items-center justify-center border border-[#d4af37]/40">
                  <step.icon size={18} className="text-[#d4af37]" />
                </div>
                <p className="font-serif text-sm md:text-base text-white">{step.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-28 md:py-36 px-6 bg-[#fafaf9]">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-8"
          >
            <motion.p variants={fadeIn} className="text-xs tracking-[0.35em] uppercase text-[#d4af37] font-light">
              Start Your Journey
            </motion.p>
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#1a1a1a] leading-[1.15]">
              Ready to Begin<br />Your Project?
            </motion.h2>
            <motion.div variants={lineReveal} className="w-16 h-px bg-[#d4af37] mx-auto origin-center" />
            <motion.p variants={fadeIn} className="text-base text-[#888] font-light leading-[1.9] tracking-wide max-w-lg mx-auto">
              Schedule a consultation and let us guide you through our seamless design process.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 px-10 py-4 bg-[#1a1a1a] text-white text-xs tracking-[0.25em] uppercase font-medium hover:bg-[#d4af37] transition-all duration-500"
              >
                Book a Consultation
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
