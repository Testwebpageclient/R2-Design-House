import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, X, ChevronLeft, ChevronRight } from 'lucide-react';

type Category = 'All' | 'Bedrooms' | 'Living Rooms' | 'Kitchens' | 'Specialty';
type ProjectType = 'Home' | 'Office' | 'Commercial';

interface PortfolioItem {
  src: string;
  alt: string;
  category: Category;
  title: string;
  location: string;
  projectType: ProjectType;
}

const portfolioItems: PortfolioItem[] = [
  // Bedrooms
  { src: '/images/imagebedroom.jpeg', alt: 'Luxury Bedroom Design', category: 'Bedrooms', title: 'Master Bedroom Suite', location: 'Kochi', projectType: 'Home' },
  { src: '/images/imagebedroom2.jpeg', alt: 'Modern Bedroom Interior', category: 'Bedrooms', title: 'Contemporary Bedroom', location: 'Ernakulam', projectType: 'Home' },
  { src: '/images/imagebedroom3.jpeg', alt: 'Elegant Bedroom Design', category: 'Bedrooms', title: 'Elegant Retreat', location: 'Thrissur', projectType: 'Home' },
  { src: '/images/imagebedroom4.jpeg', alt: 'Cozy Bedroom Interior', category: 'Bedrooms', title: 'Serene Bedroom', location: 'Kochi', projectType: 'Home' },
  // Living Rooms
  { src: '/images/imageliving.jpeg', alt: 'Spacious Living Room', category: 'Living Rooms', title: 'Grand Living Space', location: 'Ernakulam', projectType: 'Home' },
  { src: '/images/imageliving2.jpeg', alt: 'Modern Living Room Design', category: 'Living Rooms', title: 'Modern Living Area', location: 'Kochi', projectType: 'Home' },
  { src: '/images/imgliving3.jpeg', alt: 'Contemporary Living Room', category: 'Living Rooms', title: 'Contemporary Lounge', location: 'Thrissur', projectType: 'Home' },
  { src: '/images/imagelivingandtv.jpeg', alt: 'Living Room with TV Unit', category: 'Living Rooms', title: 'Entertainment Living', location: 'Ernakulam', projectType: 'Home' },
  // Kitchens
  { src: '/images/imagekitchen.jpeg', alt: 'Designer Kitchen', category: 'Kitchens', title: 'Gourmet Kitchen', location: 'Kochi', projectType: 'Home' },
  { src: '/images/imgkitchen2.jpeg', alt: 'Modern Kitchen Interior', category: 'Kitchens', title: 'Modern Kitchen', location: 'Ernakulam', projectType: 'Home' },
  { src: '/images/imagekitchen3.jpeg', alt: 'Sleek Kitchen Design', category: 'Kitchens', title: 'Sleek Kitchen Design', location: 'Thrissur', projectType: 'Home' },
  { src: '/images/imagemodularkitchen.jpeg', alt: 'Modular Kitchen', category: 'Kitchens', title: 'Premium Modular Kitchen', location: 'Kochi', projectType: 'Home' },
  // Specialty
  { src: '/images/imageprayerhall.jpeg', alt: 'Prayer Hall Interior', category: 'Specialty', title: 'Prayer Hall / Pooja Room', location: 'Ernakulam', projectType: 'Home' },
  { src: '/images/imagewasharea.jpeg', alt: 'Wash Area Design', category: 'Specialty', title: 'Utility & Wash Area', location: 'Kochi', projectType: 'Home' },
];

const categories: Category[] = ['All', 'Bedrooms', 'Living Rooms', 'Kitchens', 'Specialty'];

const reelVideos = [
  { src: '/videos/vidone.mp4', title: 'Design Reel 1' },
  { src: '/videos/vidtwo.mp4', title: 'Design Reel 2' },
  { src: '/videos/vidthree.mp4', title: 'Design Reel 3' },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
};

function VideoCard({ src, title }: { src: string; title: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div
      className="group relative aspect-[9/16] overflow-hidden bg-[#1a1a1a] cursor-pointer"
      onClick={togglePlay}
    >
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover"
        loop
        muted
        playsInline
        preload="metadata"
      />
      {/* Overlay */}
      <div className={`absolute inset-0 bg-black/20 transition-opacity duration-300 flex items-center justify-center ${
        isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
      }`}>
        <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
          {isPlaying ? (
            <Pause size={20} className="text-white" />
          ) : (
            <Play size={20} className="text-white ml-0.5" />
          )}
        </div>
      </div>
      {/* Title */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
        <p className="text-xs tracking-[0.2em] uppercase text-white/80 font-light">{title}</p>
      </div>
    </div>
  );
}

/* ─── BEFORE & AFTER COMPARISON COMPONENT ─── */
const beforeAfterPairs = [
  {
    before: '/images/imageliving.jpeg',
    after: '/images/imageliving2.jpeg',
    title: 'Living Room Transformation',
    location: 'Kochi',
  },
  {
    before: '/images/imagekitchen.jpeg',
    after: '/images/imagemodularkitchen.jpeg',
    title: 'Kitchen Redesign',
    location: 'Ernakulam',
  },
  {
    before: '/images/imagebedroom.jpeg',
    after: '/images/imagebedroom3.jpeg',
    title: 'Bedroom Makeover',
    location: 'Thrissur',
  },
];

function BeforeAfterSlider({ before, after, title, location }: { before: string; after: string; title: string; location: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.min(100, Math.max(0, (x / rect.width) * 100));
    setSliderPos(pct);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    const handleGlobalMove = (e: MouseEvent) => { if (isDragging) handleMove(e.clientX); };
    const handleGlobalUp = () => setIsDragging(false);
    const handleTouchMove = (e: TouchEvent) => { if (isDragging) handleMove(e.touches[0].clientX); };
    window.addEventListener('mousemove', handleGlobalMove);
    window.addEventListener('mouseup', handleGlobalUp);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleGlobalUp);
    return () => {
      window.removeEventListener('mousemove', handleGlobalMove);
      window.removeEventListener('mouseup', handleGlobalUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleGlobalUp);
    };
  }, [isDragging, handleMove]);

  return (
    <div className="space-y-4">
      <div
        ref={containerRef}
        className="relative aspect-[4/3] overflow-hidden cursor-col-resize select-none group"
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
        onMouseMove={(e) => { if (isDragging) handleMove(e.clientX); }}
        onTouchMove={(e) => { if (isDragging) handleMove(e.touches[0].clientX); }}
      >
        {/* After image (full background) */}
        <img src={after} alt="After" className="absolute inset-0 w-full h-full object-cover" />
        {/* Before image (clipped) */}
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPos}%` }}>
          <img src={before} alt="Before" className="absolute inset-0 w-full h-full object-cover" style={{ minWidth: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%' }} />
        </div>
        {/* Slider line */}
        <div className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-10" style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center">
            <ChevronLeft size={14} className="text-[#1a1a1a] -mr-1" />
            <ChevronRight size={14} className="text-[#1a1a1a] -ml-1" />
          </div>
        </div>
        {/* Labels */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1.5 bg-black/60 backdrop-blur-sm text-[10px] tracking-[0.25em] uppercase text-white font-light">Before</span>
        </div>
        <div className="absolute top-4 right-4 z-10">
          <span className="px-3 py-1.5 bg-[#d4af37]/90 backdrop-blur-sm text-[10px] tracking-[0.25em] uppercase text-white font-light">After</span>
        </div>
      </div>
      <div className="text-center">
        <h3 className="font-serif text-lg text-[#1a1a1a]">{title}</h3>
        <p className="text-xs tracking-[0.2em] uppercase text-[#999] font-light mt-1">{location}</p>
      </div>
    </div>
  );
}

function BeforeAfterSection() {
  return (
    <section className="py-28 md:py-40 px-6 bg-[#fafaf9]">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="text-center mb-16 md:mb-20 space-y-4"
        >
          <motion.p variants={fadeIn} className="text-xs tracking-[0.35em] uppercase text-[#d4af37] font-light">
            Transformations
          </motion.p>
          <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#1a1a1a]">
            Before & After
          </motion.h2>
          <motion.p variants={fadeIn} className="text-base text-[#666] font-light leading-[1.9] tracking-wide max-w-xl mx-auto">
            Drag the slider to reveal the transformation. See how we turn spaces into stunning interiors.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          {beforeAfterPairs.map((pair, idx) => (
            <motion.div key={idx} variants={fadeIn}>
              <BeforeAfterSlider {...pair} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [selectedImage, setSelectedImage] = useState<PortfolioItem | null>(null);

  const filteredItems =
    activeCategory === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <div className="w-full overflow-hidden bg-white">

      {/* ─── HERO BANNER ─── */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-end pb-16 md:pb-24">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/imagebedroom4.jpeg"
            alt="Our Portfolio"
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
              Our Work
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.1]"
            >
              Portfolio & <span className="italic text-[#d4af37]">Gallery</span>
            </motion.h1>
          </div>
        </div>
      </section>

      {/* ─── INTRO ─── */}
      <section className="py-16 md:py-20 px-6 bg-white">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-base md:text-lg text-[#666] font-light leading-[1.9] tracking-wide"
          >
            Explore our curated collection of luxury interior design projects — from elegant bedrooms to bespoke kitchens, every space tells a story.
          </motion.p>
        </div>
      </section>

      {/* ─── CATEGORY FILTER ─── */}
      <section className="px-6 pb-12 bg-white">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 text-xs font-medium tracking-[0.25em] uppercase transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-[#1a1a1a] text-white'
                    : 'bg-transparent text-[#1a1a1a] border border-[#ddd] hover:border-[#d4af37] hover:text-[#d4af37]'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── GALLERY GRID ─── */}
      <section className="px-6 pb-28 md:pb-40 bg-white">
        <div className="container mx-auto max-w-7xl">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.src}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
                  className="group relative cursor-pointer overflow-hidden bg-[#f5f5f5]"
                  onClick={() => setSelectedImage(item)}
                >
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[1.2s] ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500 flex items-end">
                      <div className="p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#d4af37]">
                          {item.category}
                        </span>
                        <h3 className="text-lg font-serif text-white mt-1">{item.title}</h3>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ─── BEFORE & AFTER ─── */}
      <BeforeAfterSection />

      {/* ─── VIDEO SHOWCASE ─── */}
      <section className="py-28 md:py-40 px-6 bg-[#1a1a1a]">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16 md:mb-20 space-y-4"
          >
            <motion.p variants={fadeIn} className="text-xs tracking-[0.35em] uppercase text-[#d4af37] font-light">
              Media Showcase
            </motion.p>
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl lg:text-5xl font-serif text-white">
              Design Reels
            </motion.h2>
            <motion.p variants={fadeIn} className="text-base text-white/50 font-light leading-[1.9] tracking-wide max-w-xl mx-auto">
              Watch our design stories come to life through immersive video presentations.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto"
          >
            {reelVideos.map((video, idx) => (
              <motion.div key={idx} variants={fadeIn}>
                <VideoCard src={video.src} title={video.title} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── LIGHTBOX ─── */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full max-h-[80vh] object-contain"
              />
              <div className="mt-4 text-center space-y-2">
                <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#d4af37]">
                  {selectedImage.category}
                </span>
                <h3 className="text-xl font-serif text-white mt-1">{selectedImage.title}</h3>
                <div className="flex items-center justify-center gap-6 pt-1">
                  <div>
                    <span className="text-[9px] tracking-[0.2em] uppercase text-white/40 font-light">Location</span>
                    <p className="text-sm text-white/70 font-light">{selectedImage.location}</p>
                  </div>
                  <div className="w-px h-8 bg-white/10" />
                  <div>
                    <span className="text-[9px] tracking-[0.2em] uppercase text-white/40 font-light">Project Type</span>
                    <p className="text-sm text-white/70 font-light">{selectedImage.projectType}</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-3 -right-3 w-10 h-10 bg-white text-[#1a1a1a] flex items-center justify-center hover:bg-[#d4af37] hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
