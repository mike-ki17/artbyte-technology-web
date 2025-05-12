import React from 'react';
import { Mail, MapPin, Phone, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';
import Logo from './Logo';
import { Link } from './Link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and brief */}
          <div className="md:col-span-1">
            <Logo size="medium" variant="light" />
            <p className="mt-4 text-gray-400">
              Innovating at the intersection of software and industrial automation for the tattoo industry.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/tatu" className="text-gray-400 hover:text-white transition-colors">Tatu Social Network</Link></li>
              <li><Link to="/machine" className="text-gray-400 hover:text-white transition-colors">Autonomous Machine</Link></li>
              <li><Link to="/academic" className="text-gray-400 hover:text-white transition-colors">Academic Progress</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Academic */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Academic</h3>
            <ul className="space-y-2">
              {[1, 2, 3, 4, 5, 6].map((sem) => (
                <li key={sem}>
                  <Link 
                    to={`/academic#semester${sem}`} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Semester {sem}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-green-400 mr-3 mt-0.5" />
                <span className="text-gray-400">Universidad de San Buenaventura<br />Bogotá, Colombia</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-green-400 mr-3" />
                <a href="mailto:contact@artbyte.tech" className="text-gray-400 hover:text-white transition-colors">
                  contact@artbyte.tech
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-green-400 mr-3" />
                <a href="tel:+5712345678" className="text-gray-400 hover:text-white transition-colors">
                  +57 (1) 234 5678
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Artbyte Technology. All rights reserved.</p>
          <p className="mt-2 text-sm">Academic Project at Universidad de San Buenaventura Bogotá.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;