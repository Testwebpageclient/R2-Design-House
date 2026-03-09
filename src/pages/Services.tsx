import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Home, Building2, LayoutGrid, Box, UtensilsCrossed, DoorOpen, Armchair, Lightbulb, Hammer, ClipboardCheck } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
};

const services = [
  {
    icon: Home,
    title: 'Residential Interior Design',
    desc: 'Complete interior solutions for apartments, villas, and independent homes. We design living rooms, bedrooms, kitchens, dining areas, and more — ensuring comfort, elegance, and functionality tailored to your lifestyle.',
    img: '/images/imageliving.jpeg',
  },
  {
    icon: Building2,
    title: 'Commercial Interior Design',
    desc: 'Professional and inspiring interiors for offices, retail stores, showrooms, clinics, and other commercial spaces that enhance productivity and brand identity.',
    img: '/images/imagelivingandtv.jpeg',
  },
  {
    icon: LayoutGrid,
    title: 'Space Planning & Layout Design',
    desc: 'Strategic planning to optimize space utilization, improve flow, and ensure maximum functionality without compromising aesthetics.',
    img: '/images/imageliving2.jpeg',
  },
  {
    icon: Box,
    title: '3D Design & Visualization',
    desc: 'High-quality 3D renderings and visual presentations that help clients clearly visualize the final outcome before execution begins.',
    img: '/images/imagebedroom3.jpeg',
  },
  {
    icon: UtensilsCrossed,
    title: 'Modular Kitchen Design',
    desc: 'Customized modular kitchens designed for efficiency, storage optimization, and modern aesthetics — crafted with premium materials and hardware for lasting durability.',
    img: '/images/imagemodularkitchen.jpeg',
  },
  {
    icon: DoorOpen,
    title: 'Wardrobe & Storage Solutions',
    desc: 'Tailor-made wardrobes, walk-in closets, and smart storage systems designed to maximize space and organization while complementing the overall interior theme.',
    img: '/images/imagebedroom2.jpeg',
  },
  {
    icon: Armchair,
    title: 'Custom Furniture Design',
    desc: 'Bespoke furniture pieces handcrafted to match your interior vision — from statement sofas and dining tables to accent chairs and console units, combining timeless style with exceptional comfort.',
    img: '/images/imagebedroom.jpeg',
  },
  {
    icon: Lightbulb,
    title: 'False Ceiling & Lighting Design',
    desc: 'Creative ceiling concepts paired with expertly planned lighting layouts to set the mood, enhance spatial depth, and highlight the architectural character of every room.',
    img: '/images/imageprayerhall.jpeg',
  },
  {
    icon: Hammer,
    title: 'Renovation & Remodeling',
    desc: 'Complete transformation of existing spaces with contemporary designs, improved layouts, structural modifications, and quality finishes — breathing new life into homes and offices.',
    img: '/images/imagekitchen.jpeg',
  },
  {
    icon: ClipboardCheck,
    title: 'Turnkey Interior Projects',
    desc: 'End-to-end project management including design conceptualization, material selection, site supervision, execution, and final handover — ensuring a seamless, hassle-free experience from day one.',
    img: '/images/imagekitchen3.jpeg',
  },
];

export default function Services() {
  return (
    <div className="w-full overflow-hidden bg-white">

      {/* ─── HERO BANNER ─── */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-end pb-16 md:pb-24">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/imagemodularkitchen.jpeg"
            alt="Our Services"
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
              What We Do
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.1]"
            >
              Our <span className="italic text-[#d4af37]">Services</span>
            </motion.h1>
          </div>
        </div>
      </section>

      {/* ─── INTRO — PREMIUM ─── */}
      <section className="py-16 md:py-24 px-6 bg-white relative">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-14 h-px bg-[#d4af37]/30" />
              <div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37]/50" />
              <div className="w-14 h-px bg-[#d4af37]/30" />
            </div>
            <p className="font-[Cormorant_Garamond] text-xl md:text-2xl lg:text-[1.65rem] text-[#444] font-light leading-[1.85] tracking-[0.02em] italic">
              Comprehensive interior design solutions tailored to elevate your lifestyle
              and maximize your space. From concept to completion, we deliver
              <span className="not-italic font-medium text-[#1a1a1a]"> premium results.</span>
            </p>
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="w-14 h-px bg-[#d4af37]/30" />
              <div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37]/50" />
              <div className="w-14 h-px bg-[#d4af37]/30" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-14 md:mb-18"
          >
            <p className="text-[10px] tracking-[0.4em] uppercase text-[#d4af37] font-light mb-4">Our Expertise</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#1a1a1a]">
              What We <span className="italic text-[#d4af37]">Offer</span>
            </h2>
          </motion.div>

          {/* Two columns — 5 each */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 md:gap-x-16">
            {[services.slice(0, 5), services.slice(5)].map((col, colIdx) => (
              <div key={colIdx} className="divide-y divide-[#eae6df]">
                {col.map((service, idx) => {
                  const realIdx = colIdx * 5 + idx;
                  return (
                    <motion.div
                      key={realIdx}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true, margin: '-30px' }}
                      transition={{ duration: 0.5, delay: 0.03 * realIdx }}
                      className="group flex items-center gap-5 md:gap-6 py-5 md:py-6 cursor-default hover:bg-[#fafaf8] -mx-4 px-4 transition-colors duration-300"
                    >
                      <span className="font-[Cormorant_Garamond] text-sm text-[#d4af37]/50 w-6 shrink-0 text-right tabular-nums">
                        {String(realIdx + 1).padStart(2, '0')}
                      </span>
                      <service.icon size={18} className="text-[#d4af37] shrink-0" strokeWidth={1.3} />
                      <h3 className="font-serif text-[1rem] md:text-[1.1rem] text-[#1a1a1a] leading-snug group-hover:text-[#b8962e] transition-colors duration-300">
                        {service.title}
                      </h3>
                      <ArrowRight size={14} className="ml-auto shrink-0 text-[#d4af37]/0 group-hover:text-[#d4af37]/60 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />
                    </motion.div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── VIDEO SHOWCASE ─── */}
      <section className="relative py-20 md:py-28 px-6 bg-[#0c0c0c] overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-10"
          >
            <div className="text-center space-y-3">
              <motion.div variants={fadeIn} className="flex items-center justify-center gap-4">
                <div className="w-10 h-px bg-[#d4af37]/40" />
                <span className="text-[10px] tracking-[0.5em] uppercase text-[#d4af37]/80 font-light">See It In Motion</span>
                <div className="w-10 h-px bg-[#d4af37]/40" />
              </motion.div>
              <motion.h2 variants={fadeIn} className="text-2xl md:text-3xl lg:text-4xl font-serif text-white/90">
                Our Work in Action
              </motion.h2>
            </div>

            <motion.div variants={fadeIn} className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {[
                { src: "/videos/kitchen.mp4", label: "Kitchen Transformation" },
                { src: "/videos/living.mp4", label: "Living Space Design" },
                { src: "/videos/reonvation video.mp4", label: "Full Renovation" },
              ].map((vid, i) => (
                <div key={i} className="relative aspect-video overflow-hidden group">
                  <video
                    src={vid.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-[10px] tracking-[0.35em] uppercase text-white/80 font-medium bg-black/30 backdrop-blur-sm px-3 py-1.5">
                      {vid.label}
                    </span>
                  </div>
                  <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-[#d4af37]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-[#d4af37]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />
      </section>

      {/* ─── ALTERNATING DETAIL SECTIONS — ALL 10 ─── */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="container mx-auto max-w-7xl space-y-20 md:space-y-28">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeIn}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
            >
              <div className={idx % 2 !== 0 ? 'lg:order-2' : ''}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.2s] ease-out"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className={`space-y-5 ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <span className="text-xs tracking-[0.35em] uppercase text-[#d4af37] font-light">{String(idx + 1).padStart(2, '0')}</span>
                <h3 className="text-2xl md:text-3xl font-serif text-[#1a1a1a]">{service.title}</h3>
                <div className="w-12 h-px bg-[#d4af37]" />
                <p className="text-[15px] text-[#666] font-light leading-[1.85] tracking-wide">{service.desc}</p>
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 text-[#1a1a1a] text-xs tracking-[0.25em] uppercase font-medium hover:text-[#d4af37] transition-colors duration-300 pt-2"
                >
                  Get a Quote
                  <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-28 md:py-36 px-6 bg-[#1a1a1a]">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-8"
          >
            <motion.p variants={fadeIn} className="text-xs tracking-[0.35em] uppercase text-[#d4af37] font-light">
              Ready to Begin?
            </motion.p>
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl lg:text-5xl font-serif text-white leading-[1.15]">
              Let's Discuss Your Project
            </motion.h2>
            <motion.p variants={fadeIn} className="text-base text-white/50 font-light leading-[1.9] tracking-wide max-w-lg mx-auto">
              We'd love to help bring your vision to life. Get in touch with us for a free consultation.
            </motion.p>
            <motion.div variants={fadeIn} className="pt-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 px-10 py-4 bg-[#d4af37] text-[#1a1a1a] text-xs tracking-[0.25em] uppercase font-medium hover:bg-white transition-all duration-500"
              >
                Contact Us
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
