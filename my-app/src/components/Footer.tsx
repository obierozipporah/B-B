import { Link } from 'react-router-dom';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#2a2a2a] text-white border-t border-gray-700 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              BIRNES HAVEN
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Your home away from home. A modern bed & breakfast offering comfort and convenience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/rooms" className="block text-sm text-gray-400 hover:text-[#5a8ca0] transition-colors">
                Our Rooms
              </Link>
              <Link to="/amenities" className="block text-sm text-gray-400 hover:text-[#5a8ca0] transition-colors">
                Amenities
              </Link>
              <Link to="/special-offers" className="block text-sm text-gray-400 hover:text-[#5a8ca0] transition-colors">
                Special Offers
              </Link>
              <Link to="/testimonials" className="block text-sm text-gray-400 hover:text-[#5a8ca0] transition-colors">
                Testimonials
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin size={16} className="mt-1 shrink-0" />
                <span>JP6P+6VP, Laiser Hill Rd, Ongata Rongai</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Phone size={16} className="shrink-0" />
                <span>+254 710 393721</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Mail size={16} className="shrink-0" />
                <span>birneshaven@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/birneshaven/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#5a8ca0] flex items-center justify-center text-white hover:bg-[#4a7c8f] transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              Facebook coming soon
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © 2025 Birnes Haven. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}