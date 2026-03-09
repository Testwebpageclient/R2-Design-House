import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Clock, Users, MapPin } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
};

const lineReveal = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } }
};

export default function About() {
  return (
    <div className="w-full overflow-hidden bg-white">

      {/* ─── HERO BANNER ─── */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-end pb-16 md:pb-24">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/imageliving2.jpeg"
            alt="RR Design House Studio"
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
              About Us
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.1]"
            >
              The Story Behind<br />
              <span className="italic text-[#d4af37]">RR Design House</span>
            </motion.h1>
          </div>
        </div>
      </section>

      {/* ─── ABOUT CONTENT ─── */}
      <section className="py-28 md:py-40 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            {/* Left column — Image & Founder Card */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="lg:col-span-5 relative"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src="/images/imageliving.jpeg"
                  alt="RR Design House Interior"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Founder Card */}
              <div className="absolute -bottom-8 -right-4 md:-right-8 bg-white border border-[#eee] px-8 py-6 shadow-2xl shadow-black/5">
                <p className="text-[10px] text-[#999] uppercase tracking-[0.3em] mb-1">Founded by</p>
                <p className="font-serif text-xl text-[#1a1a1a]">Reshma Ratnakaran</p>
                <p className="text-xs text-[#d4af37] tracking-[0.2em] uppercase mt-1">8+ Years of Excellence</p>
              </div>
            </motion.div>

            {/* Right column — Text */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="lg:col-span-7 space-y-8 lg:pt-8"
            >
              <motion.p variants={fadeIn} className="text-xs tracking-[0.35em] uppercase text-[#d4af37] font-light">
                Who We Are
              </motion.p>
              <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#1a1a1a] leading-[1.15]">
                Where Vision Becomes<br />Timeless Design
              </motion.h2>
              <motion.div variants={lineReveal} className="w-16 h-px bg-[#d4af37] origin-left" />
              <motion.p variants={fadeIn} className="text-base text-[#666] font-light leading-[1.9] tracking-wide">
                RR Design House is a professionally driven interior design firm with over 8 years of experience in delivering thoughtfully designed residential and commercial spaces.
              </motion.p>
              <motion.p variants={fadeIn} className="text-base text-[#666] font-light leading-[1.9] tracking-wide">
                Founded with a vision to create interiors that are both timeless and functional, the firm is built on creativity, precision, and a strong commitment to quality.
              </motion.p>
              <motion.p variants={fadeIn} className="text-base text-[#666] font-light leading-[1.9] tracking-wide">
                We specialize in end-to-end interior solutions — from concept development and space planning to 3D visualization and turnkey project execution.
              </motion.p>
              <motion.p variants={fadeIn} className="text-base text-[#666] font-light leading-[1.9] tracking-wide">
                Every project is approached with careful attention to detail, ensuring that design aesthetics seamlessly blend with practicality and client expectations.
              </motion.p>
              <motion.p variants={fadeIn} className="text-base text-[#666] font-light leading-[1.9] tracking-wide">
                At RR Design House, we believe that great design goes beyond appearance. It enhances lifestyle, maximizes space, and creates environments that inspire comfort and elegance.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── NUMBERS ─── */}
      <section className="py-20 px-6 bg-[#fafaf9] border-y border-[#eee]">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4"
          >
            {[
              { icon: Clock, num: "8+", label: "Years Experience" },
              { icon: Award, num: "150+", label: "Projects Delivered" },
              { icon: Users, num: "100%", label: "Client Satisfaction" },
              { icon: MapPin, num: "3", label: "Cities Served" },
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeIn} className="text-center space-y-3">
                <stat.icon size={24} className="mx-auto text-[#d4af37]" />
                <p className="font-serif text-3xl md:text-4xl text-[#1a1a1a]">{stat.num}</p>
                <p className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#999] font-light">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── OUR VALUES ─── */}
      <section className="py-28 md:py-40 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16 md:mb-20 space-y-4"
          >
            <motion.p variants={fadeIn} className="text-xs tracking-[0.35em] uppercase text-[#d4af37] font-light">
              Our Philosophy
            </motion.p>
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#1a1a1a]">
              Design Principles
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
          >
            {[
              {
                title: "Timeless Aesthetics",
                desc: "We create designs that transcend fleeting trends, delivering spaces that remain elegant and relevant for years to come."
              },
              {
                title: "Precision & Detail",
                desc: "Every element is meticulously planned — from material selection to finishing touches — ensuring flawless execution."
              },
              {
                title: "Client-Centric Approach",
                desc: "We place our clients at the center of every design decision, crafting spaces that reflect their unique vision and lifestyle."
              }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                variants={fadeIn}
                className="group p-10 border border-[#eee] hover:border-[#d4af37]/30 transition-colors duration-500"
              >
                <span className="text-xs tracking-[0.35em] uppercase text-[#d4af37] font-light">0{idx + 1}</span>
                <h3 className="font-serif text-2xl text-[#1a1a1a] mt-4 mb-4">{value.title}</h3>
                <p className="text-sm text-[#888] font-light leading-[1.9] tracking-wide">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── SERVICE AREAS ─── */}
      <section className="py-20 px-6 bg-[#1a1a1a]">
        <div className="container mx-auto max-w-5xl text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-6"
          >
            <motion.p variants={fadeIn} className="text-xs tracking-[0.35em] uppercase text-[#d4af37] font-light">
              Proudly Serving
            </motion.p>
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-serif text-white">
              Our Service Areas
            </motion.h2>
            <motion.div variants={fadeIn} className="flex flex-wrap justify-center gap-6 md:gap-12 pt-6">
              {["Kochi", "Ernakulam", "Thrissur"].map((city) => (
                <div key={city} className="flex items-center gap-3">
                  <MapPin size={16} className="text-[#d4af37]" />
                  <span className="text-lg md:text-xl text-white/80 font-light tracking-wide">{city}</span>
                </div>
              ))}
            </motion.div>
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
              Let's Create Together
            </motion.p>
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#1a1a1a] leading-[1.15]">
              Ready to Transform<br />Your Space?
            </motion.h2>
            <motion.p variants={fadeIn} className="text-base text-[#888] font-light leading-[1.9] tracking-wide max-w-lg mx-auto">
              Let's create something extraordinary together. Schedule a consultation and discover how we can bring your vision to life.
            </motion.p>
            <motion.div variants={fadeIn} className="pt-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 px-10 py-4 bg-[#1a1a1a] text-white text-xs tracking-[0.25em] uppercase font-medium hover:bg-[#d4af37] transition-all duration-500"
              >
                Start Your Project
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
