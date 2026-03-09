import { Link } from 'react-router-dom';
import { Instagram, MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      {/* Main Footer */}
      <div className="py-20 px-6 md:px-12">
        <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src="/images/logo.png" alt="RR Design House" className="h-9 w-auto object-contain brightness-0 invert" />
              <h3 className="font-serif text-xl text-[#d4af37] tracking-wide">RR Design House</h3>
            </div>
            <p className="text-sm text-gray-400 font-light leading-relaxed">
              Where Vision Becomes Timeless Design. We blend creativity, precision, and premium craftsmanship to deliver interiors that reflect elegance and exclusivity.
            </p>
            <p className="text-xs text-gray-500 font-light tracking-wide">
              Founded by Reshma Ratnakaran · 8+ Years of Excellence
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a
                href="https://www.instagram.com/rr_designhouse76?igsh=MXQ5MHhnaWpra3Z4eA=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-white/10 text-gray-400 hover:text-[#d4af37] hover:border-[#d4af37]/40 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://wa.me/916238178781"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-white/10 text-gray-400 hover:text-[#d4af37] hover:border-[#d4af37]/40 transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] tracking-[0.35em] uppercase text-[#d4af37] font-light mb-8">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-white transition-colors duration-300">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors duration-300">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors duration-300">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-white transition-colors duration-300">Portfolio</Link></li>
              <li><Link to="/process" className="hover:text-white transition-colors duration-300">Our Process</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[10px] tracking-[0.35em] uppercase text-[#d4af37] font-light mb-8">Services</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Residential Interior Design</li>
              <li>Commercial Interior Design</li>
              <li>Space Planning & Layout Design</li>
              <li>Custom Furniture Design</li>
              <li>3D Design & Visualization</li>
              <li>Renovation & Remodeling</li>
              <li>Lighting & False Ceiling Design</li>
              <li>Modular Kitchen & Wardrobe Design</li>
              <li>Turnkey Interior Projects</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[10px] tracking-[0.35em] uppercase text-[#d4af37] font-light mb-8">Contact</h4>
            <ul className="space-y-5 text-sm text-gray-400">
              <li className="flex items-start space-x-3">
                <MapPin size={16} className="text-[#d4af37] shrink-0 mt-0.5" />
                <span className="font-light leading-relaxed">
                  RR Design House<br />
                  67A Madappattu link rd<br />
                  Manjummel p.o<br />
                  Eloor -683501
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={16} className="text-[#d4af37] shrink-0" />
                <a href="tel:+916238178781" className="font-light hover:text-white transition-colors duration-300">+91-6238178781</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={16} className="text-[#d4af37] shrink-0" />
                <a href="mailto:rrdesignhouse1411@gmail.com" className="font-light hover:text-white transition-colors duration-300">rrdesignhouse1411@gmail.com</a>
              </li>
            </ul>

            {/* Service Areas */}
            <div className="mt-8 pt-6 border-t border-white/5">
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#666] font-light mb-3">Serving</p>
              <p className="text-sm text-gray-400 font-light">Kochi &nbsp;·&nbsp; Ernakulam &nbsp;·&nbsp; Thrissur</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="container mx-auto max-w-7xl px-6 md:px-12 py-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-light tracking-wide">
          <p>&copy; {new Date().getFullYear()} RR Design House. All rights reserved.</p>
          <p className="mt-3 md:mt-0">Where Vision Becomes Timeless Design</p>
        </div>
      </div>
    </footer>
  );
}
