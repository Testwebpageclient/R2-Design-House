import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useRef } from 'react';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const lineReveal = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } }
};

/* ─── Collage Image Data ─── */
const collageImages = [
  { src: "/images/imageliving.jpeg", alt: "Living Room", span: "col-span-2 row-span-2", delay: 0 },
  { src: "/images/imagebedroom.jpeg", alt: "Bedroom", span: "col-span-1 row-span-1", delay: 0.1 },
  { src: "/images/imagemodularkitchen.jpeg", alt: "Kitchen", span: "col-span-1 row-span-1", delay: 0.2 },
  { src: "/images/imageprayerhall.jpeg", alt: "Prayer Room", span: "col-span-1 row-span-2", delay: 0.15 },
  { src: "/images/imageliving2.jpeg", alt: "Luxury Living", span: "col-span-1 row-span-1", delay: 0.25 },
  { src: "/images/imagebedroom3.jpeg", alt: "Master Suite", span: "col-span-1 row-span-1", delay: 0.3 },
];

/* ─── 3D Tilt Card ─── */
function CollageCard({ img, index }: { img: typeof collageImages[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { stiffness: 250, damping: 25 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 250, damping: 25 });

  const handleMouse = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Alternate float direction
  const floatY = index % 2 === 0 ? [0, -6, 0] : [0, 6, 0];

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      initial={{ opacity: 0, y: 60, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, delay: 0.4 + img.delay, ease: [0.22, 1, 0.36, 1] }}
      className={`${img.span} group cursor-pointer`}
      style={{ perspective: 900 }}
    >
      <motion.div
        animate={{ y: floatY }}
        transition={{ duration: 5 + index * 0.5, repeat: Infinity, ease: "easeInOut" }}
        className="w-full h-full"
      >
        <motion.div
          style={{ rotateX, rotateY }}
          className="relative w-full h-full overflow-hidden"
        >
          {/* Image with Ken Burns on hover */}
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-full object-cover transition-transform duration-[2.5s] ease-out group-hover:scale-[1.12]"
          />

          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-700" />

          {/* Gold shimmer sweep — slides across on hover */}
          <div
            className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[1.2s] ease-out pointer-events-none"
            style={{ background: 'linear-gradient(120deg, transparent 30%, rgba(212,175,55,0.12) 50%, transparent 70%)' }}
          />

          {/* Reveal border — expands from center */}
          <div className="absolute inset-0 border-2 border-[#d4af37]/0 group-hover:border-[#d4af37]/40 transition-all duration-700 scale-90 group-hover:scale-100" />

          {/* Corner brackets that animate in */}
          <div className="absolute top-3 left-3 w-0 h-0 group-hover:w-6 group-hover:h-6 border-t-2 border-l-2 border-[#d4af37]/60 transition-all duration-500 delay-100" />
          <div className="absolute bottom-3 right-3 w-0 h-0 group-hover:w-6 group-hover:h-6 border-b-2 border-r-2 border-[#d4af37]/60 transition-all duration-500 delay-100" />
          <div className="absolute top-3 right-3 w-0 h-0 group-hover:w-6 group-hover:h-6 border-t-2 border-r-2 border-[#d4af37]/30 transition-all duration-500 delay-200" />
          <div className="absolute bottom-3 left-3 w-0 h-0 group-hover:w-6 group-hover:h-6 border-b-2 border-l-2 border-[#d4af37]/30 transition-all duration-500 delay-200" />

          {/* Label reveal from bottom */}
          <div className="absolute bottom-0 left-0 right-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
            <div className="bg-gradient-to-t from-black/70 to-transparent px-4 pt-8 pb-4">
              <span className="text-[10px] tracking-[0.4em] uppercase text-white/90 font-medium">
                {img.alt}
              </span>
            </div>
          </div>

          {/* Glow ring on hover */}
          <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(212,175,55,0)] group-hover:shadow-[inset_0_0_30px_rgba(212,175,55,0.1)] transition-shadow duration-700" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 md:pt-32 pb-16 md:pb-20 bg-[#fafaf8]">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        {/* ── Text — Full Width ── */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="text-center mb-16 md:mb-20 max-w-4xl mx-auto space-y-6"
        >
          {/* Brand label */}
          <motion.div
            variants={fadeIn}
            className="flex items-center justify-center gap-3"
          >
            <span className="w-8 h-px bg-[#d4af37]" />
            <p className="text-[11px] md:text-xs tracking-[0.4em] uppercase text-[#d4af37]/80 font-medium">
              RR Design House
            </p>
            <span className="w-8 h-px bg-[#d4af37]" />
          </motion.div>

          {/* Tagline — strict 2 lines across all devices */}
          <motion.h1
            variants={fadeIn}
            className="font-[Cormorant_Garamond] text-[2.6rem] md:text-[3.8rem] lg:text-[5.2rem] font-light text-[#1a1a1a] leading-[1.08] tracking-[-0.015em]"
          >
            <span className="block">Where Vision Becomes</span>
            <span className="block"><span className="italic text-[#d4af37] font-normal">Timeless</span> Design</span>
          </motion.h1>

          {/* Description — premium styled */}
          <motion.div variants={fadeIn} className="relative max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="w-12 h-px bg-[#d4af37]/30" />
              <div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37]/50" />
              <div className="w-12 h-px bg-[#d4af37]/30" />
            </div>
            <p className="font-[Cormorant_Garamond] text-[1.15rem] md:text-[1.35rem] lg:text-[1.5rem] text-[#444] font-light leading-[1.9] tracking-[0.02em] italic">
              Comprehensive interior design solutions tailored to elevate your lifestyle
              and maximize your space. From concept to completion, we deliver
              <span className="not-italic font-medium text-[#1a1a1a]"> premium results.</span>
            </p>
            <div className="flex items-center justify-center gap-4 mt-5">
              <div className="w-12 h-px bg-[#d4af37]/30" />
              <div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37]/50" />
              <div className="w-12 h-px bg-[#d4af37]/30" />
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={fadeIn}
            className="flex items-center justify-center gap-6 pt-2"
          >
            <Link
              to="/portfolio"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[#d4af37] text-[#1a1a1a] font-medium tracking-[0.2em] uppercase text-xs hover:bg-[#1a1a1a] hover:text-white transition-all duration-500"
            >
              View Portfolio
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-[#1a1a1a]/60 text-xs tracking-[0.2em] uppercase font-medium hover:text-[#d4af37] transition-colors duration-300"
            >
              Get in Touch
              <ArrowUpRight size={14} />
            </Link>
          </motion.div>
        </motion.div>

        {/* ── Premium Collage Grid ── */}
        <div className="relative">
          {/* Mobile: 2-col grid */}
          <div className="grid grid-cols-2 gap-2 lg:hidden">
            {collageImages.slice(0, 4).map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }}
                className={`overflow-hidden ${i === 0 ? 'col-span-2 aspect-[16/9]' : 'aspect-square'}`}
              >
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>

          {/* Desktop: premium asymmetric grid with 3D tilt */}
          <div className="hidden lg:grid grid-cols-4 grid-rows-3 gap-2" style={{ height: '580px' }}>
            {collageImages.map((img, i) => (
              <CollageCard key={i} img={img} index={i} />
            ))}
          </div>

          {/* Gold decorative accents */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1.2, delay: 1.2 }}
            className="hidden lg:block absolute -bottom-4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent origin-center"
          />
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="w-full overflow-hidden bg-white">

      {/* ─── HERO ─── */}
      <HeroSection />

      {/* ─── ABOUT INTRO ─── */}
      <section className="py-28 md:py-40 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Text */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="lg:col-span-5 space-y-8"
            >
              <motion.p variants={fadeIn} className="text-xs tracking-[0.35em] uppercase text-[#d4af37] font-light">
                About the Studio
              </motion.p>
              <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#1a1a1a] leading-[1.15]">
                Elegance in
                <br />Every Detail
              </motion.h2>
              <motion.div variants={lineReveal} className="w-16 h-px bg-[#d4af37] origin-left" />
              <motion.p variants={fadeIn} className="text-base text-[#666] font-light leading-[1.9] tracking-wide">
                RR Design House is a luxury interior design studio committed to creating sophisticated and timeless spaces. We blend creativity, precision, and premium craftsmanship to deliver interiors that reflect elegance and exclusivity. At RR Design House, where vision becomes timeless design, every detail is thoughtfully curated to achieve perfection.
              </motion.p>
              <motion.p variants={fadeIn} className="text-base text-[#666] font-light leading-[1.9] tracking-wide">
                Founded by <span className="text-[#1a1a1a] font-normal">Reshma Ratnakaran</span> with over 8 years of experience, we specialize in end-to-end interior solutions across Kochi, Ernakulam, and Thrissur.
              </motion.p>
              <motion.div variants={fadeIn}>
                <Link
                  to="/about"
                  className="group inline-flex items-center gap-3 text-[#1a1a1a] text-xs tracking-[0.25em] uppercase font-medium hover:text-[#d4af37] transition-colors duration-300 mt-2"
                >
                  Discover Our Story
                  <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="lg:col-span-7 relative"
            >
              <div className="relative aspect-[4/5] max-h-[620px] overflow-hidden">
                <img
                  src="/images/imageliving2.jpeg"
                  alt="Elegant Living Room"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Floating Stat */}
              <div className="absolute -bottom-6 -left-4 md:-left-8 bg-white border border-[#eee] px-8 py-6 shadow-2xl shadow-black/5">
                <p className="font-serif text-3xl text-[#1a1a1a]">8+</p>
                <p className="text-[10px] text-[#999] uppercase tracking-[0.3em] mt-1">Years of Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── NUMBERS ─── */}
      <section className="relative py-28 md:py-36 px-6 bg-[#0c0c0c] overflow-hidden">
        {/* Decorative dot pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #d4af37 1px, transparent 0)', backgroundSize: '48px 48px' }} />
        {/* Top & bottom gold accent lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent" />

        <div className="container mx-auto max-w-6xl relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-16"
          >
            <div className="text-center space-y-4">
              <motion.div variants={fadeIn} className="flex items-center justify-center gap-4 mb-2">
                <div className="w-12 h-px bg-[#d4af37]/40" />
                <span className="text-[10px] tracking-[0.5em] uppercase text-[#d4af37]/80 font-light">Excellence Defined</span>
                <div className="w-12 h-px bg-[#d4af37]/40" />
              </motion.div>
              <motion.h2 variants={fadeIn} className="text-2xl md:text-3xl font-serif text-white/90">
                Our Legacy in Numbers
              </motion.h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
              {[
                { num: "150+", label: "Projects Delivered" },
                { num: "8+", label: "Years Experience" },
                { num: "3", label: "Cities Served" },
                { num: "100%", label: "Client Satisfaction" }
              ].map((stat, i) => (
                <motion.div key={i} variants={fadeIn} className="relative text-center py-12 md:py-16 group">
                  {i > 0 && (
                    <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-20 bg-gradient-to-b from-transparent via-[#d4af37]/20 to-transparent" />
                  )}
                  {i === 2 && (
                    <div className="block md:hidden absolute left-0 top-1/2 -translate-y-1/2 w-px h-20 bg-gradient-to-b from-transparent via-[#d4af37]/20 to-transparent" />
                  )}
                  <motion.p
                    whileInView={{ scale: [0.8, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.15 }}
                    className="font-serif text-5xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-b from-[#f0d060] via-[#d4af37] to-[#a08520] mb-5 tracking-tight"
                  >
                    {stat.num}
                  </motion.p>
                  <div className="w-8 h-px bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent mx-auto mb-4" />
                  <p className="text-[10px] md:text-xs tracking-[0.4em] uppercase text-white/35 font-light">{stat.label}</p>
                  <div className="absolute inset-0 bg-gradient-to-b from-[#d4af37]/0 to-[#d4af37]/0 group-hover:from-[#d4af37]/[0.02] group-hover:to-[#d4af37]/[0.05] transition-all duration-700 rounded" />
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeIn} className="flex justify-center">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]/40" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]/60" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]/40" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="py-28 md:py-40 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-20 gap-6"
          >
            <div className="space-y-4">
              <motion.p variants={fadeIn} className="text-xs tracking-[0.35em] uppercase text-[#d4af37] font-light">
                What We Do
              </motion.p>
              <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#1a1a1a]">
                Our Expertise
              </motion.h2>
            </div>
            <motion.div variants={fadeIn}>
              <Link
                to="/services"
                className="group inline-flex items-center gap-3 text-[#1a1a1a] text-xs tracking-[0.25em] uppercase font-medium hover:text-[#d4af37] transition-colors duration-300"
              >
                All Services
                <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          >
            {[
              { title: "Residential Design", desc: "Transforming houses into elegant homes that balance comfort with refined aesthetics.", img: "/images/imagebedroom.jpeg" },
              { title: "Turnkey Interiors", desc: "Complete end-to-end interior solutions — from concept to handover, crafted to perfection.", img: "/images/imagelivingandtv.jpeg" },
              { title: "Modular Kitchens", desc: "Functional beauty — highly customized kitchen designs for modern living.", img: "/images/imagemodularkitchen.jpeg" }
            ].map((service, idx) => (
              <motion.div key={idx} variants={fadeIn}>
                <Link to="/services" className="group block">
                  <div className="relative aspect-[3/4] overflow-hidden mb-6">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[1.2s] ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-serif text-xl md:text-2xl text-[#1a1a1a] group-hover:text-[#d4af37] transition-colors duration-300">{service.title}</h3>
                    <p className="text-sm text-[#888] font-light leading-relaxed tracking-wide">{service.desc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── FEATURED PROJECT — VIDEO ─── */}
      <section className="py-28 md:py-40 px-6 bg-[#1a1a1a]">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            <motion.div variants={fadeIn} className="relative aspect-[4/3] overflow-hidden group">
              <video
                src="/videos/living.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-[#d4af37]/40" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-[#d4af37]/40" />
            </motion.div>
            <motion.div variants={stagger} className="space-y-8">
              <motion.p variants={fadeIn} className="text-xs tracking-[0.35em] uppercase text-[#d4af37] font-light">
                Featured Project
              </motion.p>
              <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-serif text-white leading-[1.2]">
                Where Luxury Meets
                <br />Everyday Living
              </motion.h2>
              <motion.div variants={lineReveal} className="w-16 h-px bg-[#d4af37] origin-left" />
              <motion.p variants={fadeIn} className="text-base text-white/50 font-light leading-[1.9] tracking-wide">
                A bespoke residential project that showcases our commitment to
                luxury and detail. Every element — from custom millwork to
                curated lighting — was designed to create a sanctuary of
                sophistication.
              </motion.p>
              <motion.div variants={fadeIn}>
                <Link
                  to="/portfolio"
                  className="group inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white text-xs tracking-[0.25em] uppercase font-medium hover:bg-[#d4af37] hover:border-[#d4af37] hover:text-[#1a1a1a] transition-all duration-500"
                >
                  Explore Portfolio
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── GALLERY STRIP ─── */}
      <section className="py-0 bg-white">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {[
            "/images/imagekitchen.jpeg",
            "/images/imagebedroom2.jpeg",
            "/images/imageprayerhall.jpeg",
            "/images/imagekitchen3.jpeg"
          ].map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="aspect-square overflow-hidden"
            >
              <img
                src={src}
                alt="Project"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.5s] ease-out"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── OUR STORY — VIDEO REEL ─── */}
      <section className="relative py-28 md:py-40 px-6 bg-[#0c0c0c] overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-12"
          >
            <div className="text-center space-y-4">
              <motion.div variants={fadeIn} className="flex items-center justify-center gap-4">
                <div className="w-12 h-px bg-[#d4af37]/40" />
                <span className="text-[10px] tracking-[0.5em] uppercase text-[#d4af37]/80 font-light">Our Story</span>
                <div className="w-12 h-px bg-[#d4af37]/40" />
              </motion.div>
              <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl lg:text-5xl font-serif text-white/90 leading-[1.15]">
                Crafting Spaces,<br />Telling Stories
              </motion.h2>
              <motion.p variants={fadeIn} className="text-base text-white/40 font-light leading-[1.9] max-w-lg mx-auto">
                A glimpse into our design process — from the first sketch to the final reveal. Every project is a story of transformation.
              </motion.p>
            </div>

            {/* Video Grid */}
            <motion.div variants={fadeIn} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Main video — large */}
              <div className="relative aspect-video md:aspect-[4/3] overflow-hidden group">
                <video
                  src="/videos/promotion.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <span className="text-[10px] tracking-[0.4em] uppercase text-white/80 font-medium bg-black/30 backdrop-blur-sm px-4 py-2">
                    Studio Showcase
                  </span>
                </div>
                <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-[#d4af37]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-[#d4af37]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Two stacked videos */}
              <div className="grid grid-rows-2 gap-4">
                <div className="relative aspect-video overflow-hidden group">
                  <video
                    src="/videos/kitchen.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-[10px] tracking-[0.4em] uppercase text-white/80 font-medium bg-black/30 backdrop-blur-sm px-3 py-1.5">
                      Kitchen Design
                    </span>
                  </div>
                  <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-[#d4af37]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-[#d4af37]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="relative aspect-video overflow-hidden group">
                  <video
                    src="/videos/reonvation video.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-[10px] tracking-[0.4em] uppercase text-white/80 font-medium bg-black/30 backdrop-blur-sm px-3 py-1.5">
                      Renovation
                    </span>
                  </div>
                  <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-[#d4af37]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-[#d4af37]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />
      </section>

      {/* ─── CTA ─── */}
      <section className="py-28 md:py-40 px-6 bg-[#fafaf9]">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-8"
          >
            <motion.p variants={fadeIn} className="text-xs tracking-[0.35em] uppercase text-[#d4af37] font-light">
              Start Your Project
            </motion.p>
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#1a1a1a] leading-[1.15]">
              Ready to Transform
              <br />Your Space?
            </motion.h2>
            <motion.p variants={fadeIn} className="text-base text-[#888] font-light leading-[1.9] tracking-wide max-w-lg mx-auto">
              Let's create something extraordinary together. Schedule a
              consultation and discover how we can bring your vision to life.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 px-10 py-4 bg-[#1a1a1a] text-white text-xs tracking-[0.25em] uppercase font-medium hover:bg-[#d4af37] transition-all duration-500"
              >
                Book a Consultation
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/process"
                className="inline-flex items-center gap-2 text-[#1a1a1a] text-xs tracking-[0.25em] uppercase font-medium hover:text-[#d4af37] transition-colors duration-300 py-4"
              >
                Our Process
                <ArrowUpRight size={14} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
