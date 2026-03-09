import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Instagram, MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';

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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    contactDetails: '',
    projectType: '',
    requirements: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build WhatsApp message
    const message = `Hello RR Design House,%0A%0AName: ${formData.name}%0ALocation: ${formData.location}%0AContact: ${formData.contactDetails}%0AProject Type: ${formData.projectType}%0ARequirements: ${formData.requirements}`;
    window.open(`https://wa.me/916238178781?text=${message}`, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="w-full overflow-hidden bg-white">

      {/* ─── HERO BANNER ─── */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-end pb-16 md:pb-24">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/imagekitchen3.jpeg"
            alt="Contact RR Design House"
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
              Get In Touch
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.1]"
            >
              Contact <span className="italic text-[#d4af37]">Us</span>
            </motion.h1>
          </div>
        </div>
      </section>

      {/* ─── CONTACT INFO + FORM ─── */}
      <section className="py-28 md:py-40 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

            {/* LEFT — Contact Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="space-y-10"
            >
              <div className="space-y-4">
                <motion.p variants={fadeIn} className="text-xs tracking-[0.35em] uppercase text-[#d4af37] font-light">
                  Reach Out
                </motion.p>
                <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-serif text-[#1a1a1a] leading-[1.15]">
                  Let's Start Your<br />Design Journey
                </motion.h2>
                <motion.div variants={lineReveal} className="w-16 h-px bg-[#d4af37] origin-left" />
              </div>

              <motion.p variants={fadeIn} className="text-base text-[#666] font-light leading-[1.9] tracking-wide">
                We'd love to hear about your project. Reach out through any of the channels below, or fill out the enquiry form and we'll get back to you promptly.
              </motion.p>

              {/* Contact Details */}
              <motion.div variants={stagger} className="space-y-6">
                <motion.div variants={fadeIn} className="flex items-start gap-5">
                  <div className="w-12 h-12 flex items-center justify-center border border-[#d4af37]/30 shrink-0">
                    <MapPin size={18} className="text-[#d4af37]" />
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase text-[#999] font-light mb-1">Office Address</p>
                    <p className="text-sm text-[#444] font-light leading-relaxed">
                      RR Design House<br />
                      67A Madappattu link rd<br />
                      Manjummel p.o<br />
                      Eloor -683501
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={fadeIn} className="flex items-start gap-5">
                  <div className="w-12 h-12 flex items-center justify-center border border-[#d4af37]/30 shrink-0">
                    <Phone size={18} className="text-[#d4af37]" />
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase text-[#999] font-light mb-1">Phone</p>
                    <a href="tel:+916238178781" className="text-sm text-[#444] font-light hover:text-[#d4af37] transition-colors">
                      +91-6238178781
                    </a>
                  </div>
                </motion.div>

                <motion.div variants={fadeIn} className="flex items-start gap-5">
                  <div className="w-12 h-12 flex items-center justify-center border border-[#d4af37]/30 shrink-0">
                    <MessageCircle size={18} className="text-[#d4af37]" />
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase text-[#999] font-light mb-1">WhatsApp</p>
                    <a
                      href="https://wa.me/916238178781"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#444] font-light hover:text-[#d4af37] transition-colors"
                    >
                      +91-6238178781
                    </a>
                  </div>
                </motion.div>

                <motion.div variants={fadeIn} className="flex items-start gap-5">
                  <div className="w-12 h-12 flex items-center justify-center border border-[#d4af37]/30 shrink-0">
                    <Mail size={18} className="text-[#d4af37]" />
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase text-[#999] font-light mb-1">Email</p>
                    <a href="mailto:rrdesignhouse1411@gmail.com" className="text-sm text-[#444] font-light hover:text-[#d4af37] transition-colors">
                      rrdesignhouse1411@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div variants={fadeIn} className="flex items-start gap-5">
                  <div className="w-12 h-12 flex items-center justify-center border border-[#d4af37]/30 shrink-0">
                    <Instagram size={18} className="text-[#d4af37]" />
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase text-[#999] font-light mb-1">Instagram</p>
                    <a
                      href="https://www.instagram.com/rr_designhouse76?igsh=MXQ5MHhnaWpra3Z4eA=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#444] font-light hover:text-[#d4af37] transition-colors"
                    >
                      @rr_designhouse76
                    </a>
                  </div>
                </motion.div>

                <motion.div variants={fadeIn} className="flex items-start gap-5">
                  <div className="w-12 h-12 flex items-center justify-center border border-[#d4af37]/30 shrink-0">
                    <Clock size={18} className="text-[#d4af37]" />
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase text-[#999] font-light mb-1">Service Areas</p>
                    <p className="text-sm text-[#444] font-light">Kochi &nbsp;·&nbsp; Ernakulam &nbsp;·&nbsp; Thrissur</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* RIGHT — Lead Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div
                variants={fadeIn}
                className="bg-[#fafaf9] p-8 md:p-12 border border-[#eee]"
              >
                <h3 className="font-serif text-2xl text-[#1a1a1a] mb-2">Project Enquiry</h3>
                <p className="text-sm text-[#999] font-light mb-8 tracking-wide">Fill in the details below and we'll reach out to you.</p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16 space-y-4"
                  >
                    <CheckCircle2 size={48} className="mx-auto text-[#d4af37]" />
                    <p className="font-serif text-xl text-[#1a1a1a]">Thank You!</p>
                    <p className="text-sm text-[#888] font-light">We'll get back to you soon.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-[10px] tracking-[0.3em] uppercase text-[#999] font-light mb-2">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-[#ddd] text-sm text-[#1a1a1a] font-light focus:outline-none focus:border-[#d4af37] transition-colors"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] tracking-[0.3em] uppercase text-[#999] font-light mb-2">Location *</label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-[#ddd] text-sm text-[#1a1a1a] font-light focus:outline-none focus:border-[#d4af37] transition-colors"
                        placeholder="City or area"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] tracking-[0.3em] uppercase text-[#999] font-light mb-2">Contact Details *</label>
                      <input
                        type="text"
                        name="contactDetails"
                        value={formData.contactDetails}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-[#ddd] text-sm text-[#1a1a1a] font-light focus:outline-none focus:border-[#d4af37] transition-colors"
                        placeholder="Phone number or email"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] tracking-[0.3em] uppercase text-[#999] font-light mb-2">Project Type *</label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-[#ddd] text-sm text-[#1a1a1a] font-light focus:outline-none focus:border-[#d4af37] transition-colors appearance-none"
                      >
                        <option value="">Select project type</option>
                        <option value="Residential Interior Design">Residential Interior Design</option>
                        <option value="Commercial Interior Design">Commercial Interior Design</option>
                        <option value="Modular Kitchen">Modular Kitchen</option>
                        <option value="Renovation & Remodeling">Renovation & Remodeling</option>
                        <option value="Turnkey Project">Turnkey Project</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] tracking-[0.3em] uppercase text-[#999] font-light mb-2">Requirements</label>
                      <textarea
                        name="requirements"
                        value={formData.requirements}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 bg-white border border-[#ddd] text-sm text-[#1a1a1a] font-light focus:outline-none focus:border-[#d4af37] transition-colors resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="group w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#1a1a1a] text-white text-xs tracking-[0.25em] uppercase font-medium hover:bg-[#d4af37] transition-all duration-500"
                    >
                      Send Enquiry
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </form>
                )}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── MAP SECTION ─── */}
      <section className="bg-[#1a1a1a]">
        <div className="container mx-auto max-w-7xl px-6 py-20 md:py-28">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-10"
          >
            <div className="text-center space-y-4">
              <motion.p variants={fadeIn} className="text-xs tracking-[0.35em] uppercase text-[#d4af37] font-light">
                Find Us
              </motion.p>
              <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-serif text-white">
                Visit Our Studio
              </motion.h2>
            </div>

            <motion.div variants={fadeIn} className="w-full aspect-[16/7] min-h-[300px] overflow-hidden border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.901!2d76.3!3d10.06!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDAzJzM2LjAiTiA3NsKwMTgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="RR Design House Location"
                className="w-full h-full"
              />
            </motion.div>

            <motion.div variants={fadeIn} className="text-center">
              <a
                href="https://maps.app.goo.gl/LKhfH8kSN2ome9uA9"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 text-white/70 text-xs tracking-[0.25em] uppercase font-light hover:text-[#d4af37] transition-colors duration-300"
              >
                Open in Google Maps
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
